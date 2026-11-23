import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { guideCategories, guideDisclaimerShared, guideDisclaimerText, guidePath, guides } from "../lib/blog";
import { officialDomains } from "../lib/blog/sources";
import { dismissCookies, mockSupport } from "./helpers";

// The guides hub at /blog and the 30 guides under /blog/<slug> (12 from Prompt 13, 18 from Prompt 17).

const origin = "https://teamshastra.com";

function decode(text: string): string {
  return text.replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
}

function isOfficial(url: string): boolean {
  const host = new URL(url).hostname.replace(/^www\./, "");
  return officialDomains.some((domain) => host === domain || host.endsWith(`.${domain}`));
}

const prompt13 = new Set(["salary", "gst", "service", "start"]);
/** Prompt 17, section 5: these guides need at least one official source; these carry the disclaimer. */
const officialRequired = [
  "gst-registration-for-service-business",
  "how-to-price-amc-contract",
  "pf-esi-rules-for-small-business",
  "hire-technicians-india",
  "start-electrical-contracting-business",
  "get-google-reviews-service-business",
  "manage-business-expenses"
];
const disclaimerRequired = [
  "gst-registration-for-service-business",
  "how-to-price-amc-contract",
  "pf-esi-rules-for-small-business",
  "hire-technicians-india",
  "start-electrical-contracting-business",
  "manage-business-expenses"
];

test("data: 30 guides with unique slugs; tax and labour guides cite official sources and carry the disclaimer", () => {
  expect(guides).toHaveLength(30);
  expect(new Set(guides.map((guide) => guide.slug)).size).toBe(30);
  for (const guide of guides) {
    for (const source of guide.sources) expect(isOfficial(source.url), `${guide.slug}: ${source.url}`).toBe(true);
    if (prompt13.has(guide.category)) {
      expect(guide.sources.length, guide.slug).toBeGreaterThan(0);
      if (guide.category !== "start") expect(guide.legal, guide.slug).toBe(true);
    }
  }
  for (const slug of officialRequired) expect(guides.find((g) => g.slug === slug)?.sources.length, slug).toBeGreaterThan(0);
  for (const slug of disclaimerRequired) {
    const guide = guides.find((g) => g.slug === slug)!;
    expect(guide.legal, slug).toBe(true);
    expect(guide.disclaimerNote, slug).toBeTruthy();
  }
  // Each Prompt 17 disclaimer shares only the one fixed sentence.
  const notes = guides.flatMap((g) => (g.disclaimerNote ? [g.disclaimerNote] : []));
  expect(new Set(notes).size).toBe(notes.length);
  expect(guideDisclaimerShared).toBe("This guide is general information, not tax or legal advice. Rules change, so check the official source or ask your CA or lawyer.");
});

test("/blog keeps its H1 and lists all 30 guides in nine groups", async ({ request }) => {
  const response = await request.get("/blog");
  expect(response.status()).toBe(200);
  const html = await response.text();
  expect([...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => decode(m[1]))).toEqual(["Field service guides for Indian service businesses."]);
  expect(guideCategories).toHaveLength(9);
  for (const category of guideCategories) expect(html).toContain(`>${category.heading.replace(/&/g, "&amp;")}</h2>`);
  for (const guide of guides) expect(html, guide.slug).toContain(`href="${guidePath(guide.slug)}"`);
  expect(html).toContain('"@type":"BreadcrumbList"');
});

for (const guide of guides) {
  test(`${guidePath(guide.slug)}: head, layout, sources and JSON-LD`, async ({ request }) => {
    const path = guidePath(guide.slug);
    const response = await request.get(path);
    expect(response.status()).toBe(200);
    const html = await response.text();

    expect(decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "")).toBe(guide.title);
    expect(html).toContain(`<link rel="canonical" href="${origin}${path}"/>`);
    expect(html).toContain(`<meta property="og:image" content="${origin}${path}/opengraph-image"`);
    const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => decode(m[1]));
    expect(h1s).toEqual([guide.h1]);
    expect(html).toContain(`<time dateTime="${guide.dateModified}">`);
    expect(html).toContain("Quick answer</h2>");

    // Table of contents anchors resolve to section ids.
    const anchors = [...html.matchAll(/<nav class="guide-toc"[\s\S]*?<\/nav>/g)][0]?.[0] ?? "";
    const targets = [...anchors.matchAll(/href="#([^"]+)"/g)].map((m) => m[1]);
    expect(targets.length).toBe(guide.sections.length + 1 + (guide.sources.length > 0 ? 1 : 0));
    for (const id of targets) expect(html, `#${id}`).toContain(`id="${id}"`);

    // Sources: official links with the checked date, and the disclaimer on tax and labour guides.
    if (guide.sources.length > 0) {
      const sourcesBlock = html.slice(html.indexOf('id="sources"'));
      const links = [...sourcesBlock.matchAll(/<li><a href="([^"]+)"/g)].map((m) => decode(m[1]));
      expect(links.length).toBe(guide.sources.length);
      expect(links.every(isOfficial)).toBe(true);
      expect(sourcesBlock).toContain("We read each official page below on");
    } else {
      expect(html).not.toContain('id="sources"');
    }
    if (guide.legal) expect(decode(html)).toContain(guideDisclaimerText(guide));

    // JSON-LD: Article, BreadcrumbList and FAQPage that matches the visible FAQs.
    const graph = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].flatMap(
      (m) => (JSON.parse(m[1])["@graph"] ?? []) as Array<Record<string, unknown>>
    );
    const types = graph.map((node) => node["@type"]);
    for (const type of ["Article", "BreadcrumbList", "FAQPage"]) expect(types).toContain(type);
    const article = graph.find((node) => node["@type"] === "Article")!;
    expect(article.headline).toBe(guide.h1);
    expect(article.inLanguage).toBe("en-IN");
    expect(article.datePublished).toBe(guide.datePublished);
    expect(article.dateModified).toBe(guide.dateModified);
    expect((article.author as { name: string }).name).toBe("TeamShastra team");
    const faq = graph.find((node) => node["@type"] === "FAQPage") as { mainEntity: Array<{ name: string }> };
    expect(faq.mainEntity.map((q) => q.name)).toEqual(guide.faqs.map((item) => item.question));
    for (const item of guide.faqs) expect(decode(html)).toContain(item.question);
    expect(html).not.toContain("aggregateRating");
  });
}

test("guide share images render", async ({ request }) => {
  const response = await request.get(`${guidePath(guides[0].slug)}/opengraph-image`);
  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("image/png");
});

test("unknown guide returns 404", async ({ request }) => {
  const response = await request.get("/blog/does-not-exist");
  expect(response.status()).toBe(404);
});

test("feature pages link back to their guides", async ({ request }) => {
  const html = await (await request.get("/features/staff-salary-payroll")).text();
  expect(html).toContain('href="/blog/staff-salary-calculation-per-day"');
  expect(html).toContain('href="/blog/overtime-calculation-for-staff"');
});

test.describe("in the browser", () => {
  test.beforeEach(async ({ page }) => {
    await dismissCookies(page);
    await mockSupport(page);
  });

  for (const slug of ["staff-salary-calculation-per-day", "gst-invoice-format-for-service-business", "stop-fake-attendance-field-staff"]) {
    test(`${slug} passes axe and fits 360 px`, async ({ page }) => {
      await page.setViewportSize({ width: 360, height: 740 });
      await page.goto(guidePath(slug));
      await page.waitForLoadState("networkidle");
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(360);
      const violations = (await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "best-practice"]).analyze()).violations;
      expect(violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(" ")).slice(0, 2).join(" | ")}`)).toEqual([]);
    });
  }

  test("/blog passes axe", async ({ page }) => {
    await page.goto("/blog");
    await page.waitForLoadState("networkidle");
    const violations = (await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "best-practice"]).analyze()).violations;
    expect(violations.map((v) => v.id)).toEqual([]);
  });

  test("a table of contents link scrolls to its section", async ({ page }) => {
    await page.goto(guidePath("gstr-1-vs-gstr-3b"));
    await page.getByRole("navigation", { name: "On this page" }).getByRole("link", { name: "Side by side" }).click();
    await expect(page).toHaveURL(/#side-by-side$/);
    await expect(page.getByRole("heading", { name: "Side by side", level: 2 })).toBeInViewport();
  });
});
