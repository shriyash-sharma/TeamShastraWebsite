import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { guideDisclaimer, guidePath, guides } from "../lib/blog";
import { officialDomains } from "../lib/blog/sources";
import { dismissCookies, mockSupport } from "./helpers";

// The guides hub at /blog and the 12 guides under /blog/<slug> (Prompt 13).

const origin = "https://teamshastra.com";

function decode(text: string): string {
  return text.replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
}

function isOfficial(url: string): boolean {
  const host = new URL(url).hostname.replace(/^www\./, "");
  return officialDomains.some((domain) => host === domain || host.endsWith(`.${domain}`));
}

test("data: 12 guides with unique slugs; tax and labour guides cite official sources and carry the disclaimer", () => {
  expect(guides).toHaveLength(12);
  expect(new Set(guides.map((guide) => guide.slug)).size).toBe(12);
  for (const guide of guides) {
    expect(guide.sources.length, guide.slug).toBeGreaterThan(0);
    for (const source of guide.sources) expect(isOfficial(source.url), `${guide.slug}: ${source.url}`).toBe(true);
    if (guide.category !== "start") expect(guide.legal, guide.slug).toBe(true);
  }
});

test("/blog keeps its H1 and lists all 12 guides in four groups", async ({ request }) => {
  const response = await request.get("/blog");
  expect(response.status()).toBe(200);
  const html = await response.text();
  expect([...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => decode(m[1]))).toEqual(["Field service guides for Indian service businesses."]);
  for (const heading of ["Salary &amp; staff", "GST &amp; billing", "AMC &amp; service", "Start a service business"]) expect(html).toContain(`>${heading}</h2>`);
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
    expect(targets.length).toBe(guide.sections.length + 2);
    for (const id of targets) expect(html, `#${id}`).toContain(`id="${id}"`);

    // Sources: official links, and the disclaimer on tax and labour guides.
    const sourcesBlock = html.slice(html.indexOf('id="sources"'));
    const links = [...sourcesBlock.matchAll(/<li><a href="([^"]+)"/g)].map((m) => decode(m[1]));
    expect(links.length).toBe(guide.sources.length);
    expect(links.some(isOfficial)).toBe(true);
    if (guide.legal) expect(decode(html)).toContain(guideDisclaimer);

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
