import { expect, test, type Page } from "@playwright/test";
import { featureLandingPath, featureLandings } from "../lib/seo/landing/features";
import { industryLandingPath, industryLandings, rewrittenIndustrySolutions } from "../lib/seo/landing/industries";
import { solutionMap } from "../lib/seo/solutions";
import { dismissCookies } from "./helpers";

// Metadata, headings and JSON-LD on every new page and every rewritten industry page.

const playStore = "https://play.google.com/store/apps/details?id=com.teamshastra.mobile";

type Target = {
  path: string;
  title: string;
  description: string;
  faqs: string[];
  isNew: boolean;
};

const targets: Target[] = [
  ...featureLandings.map((page) => ({
    path: featureLandingPath(page.slug),
    title: page.title,
    description: page.metaDescription,
    faqs: page.faqs.map((f) => f.question),
    isNew: true
  })),
  ...industryLandings.map((page) => ({
    path: industryLandingPath(page.slug),
    title: page.title,
    description: page.metaDescription,
    faqs: page.faqs.map((f) => f.question),
    isNew: true
  })),
  ...rewrittenIndustrySolutions.map((item) => {
    const solution = solutionMap[item.slug];
    return {
      path: `/${item.slug}`,
      title: `${solution.title} | TeamShastra`,
      description: solution.metaDescription,
      faqs: solution.faqs.map((f) => f.question),
      isNew: false
    };
  })
];

async function headingLevels(page: Page): Promise<number[]> {
  return page.locator("main h1, main h2, main h3, main h4, main h5, main h6").evaluateAll((nodes) =>
    nodes.map((node) => Number(node.tagName.slice(1)))
  );
}

test.beforeEach(async ({ page }) => {
  await dismissCookies(page);
});

for (const target of targets) {
  test(`SEO basics on ${target.path}`, async ({ page }) => {
    const response = await page.goto(target.path);
    expect(response?.status()).toBe(200);

    await expect(page).toHaveTitle(target.title);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", target.description);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `https://teamshastra.com${target.path}`);
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute("content", target.title);
    await expect(page.locator('meta[property="og:description"]')).toHaveAttribute("content", target.description);
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute("content", `https://teamshastra.com${target.path}`);
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content", new RegExp(`${target.path}/opengraph-image`));
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute("content", "summary_large_image");

    await expect(page.locator("h1")).toHaveCount(1);
    const levels = await headingLevels(page);
    expect(levels[0]).toBe(1);
    for (let i = 1; i < levels.length; i += 1) {
      expect(levels[i] - levels[i - 1], `heading jump at index ${i} on ${target.path}`).toBeLessThanOrEqual(1);
    }
    await expect(page.getByRole("navigation", { name: "Breadcrumb" })).toBeVisible();

    const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
    expect(blocks.length).toBeGreaterThan(0);
    const nodes = blocks.flatMap((text) => {
      const parsed = JSON.parse(text);
      return parsed["@graph"] ?? [parsed];
    });
    const types = nodes.map((node: { "@type": string }) => node["@type"]);
    for (const type of ["Organization", "BreadcrumbList", "SoftwareApplication", "FAQPage"]) expect(types).toContain(type);
    if (target.isNew) expect(types).toContain("WebPage");
    const raw = blocks.join("\n");
    expect(raw).not.toContain("aggregateRating");
    expect(raw).not.toContain('"Review"');
    const faqNode = nodes.find((node: { "@type": string }) => node["@type"] === "FAQPage");
    const schemaQuestions = faqNode.mainEntity.map((q: { name: string }) => q.name);
    expect(schemaQuestions).toEqual(target.faqs);
    const visibleQuestions = (await page.locator(".seo-faq-item summary").allTextContents()).map((q) => q.trim());
    expect(visibleQuestions).toEqual(target.faqs);

    const images = page.locator("main img");
    for (let i = 0; i < (await images.count()); i += 1) {
      const image = images.nth(i);
      expect((await image.getAttribute("alt")) ?? "", `alt on image ${i}`).not.toBe("");
      expect(await image.getAttribute("src")).toContain("/_next/image");
    }

    await expect(page.locator("main a.button.primary").first()).toHaveAttribute("href", playStore);
  });
}

test("new landing pages fit a 360px screen without sideways scrolling", async ({ page }) => {
  test.setTimeout(240_000);
  await page.setViewportSize({ width: 360, height: 740 });
  const wide: string[] = [];
  for (const target of targets) {
    await page.goto(target.path);
    const fits = await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1);
    if (!fits) wide.push(target.path);
  }
  expect(wide, wide.join("\n")).toEqual([]);
});

test("features hub links every feature guide and keeps its existing text", async ({ page }) => {
  await page.goto("/features");
  await expect(page.getByRole("heading", { name: "Explore every feature", level: 2 })).toBeVisible();
  for (const feature of featureLandings) {
    await expect(page.locator(`main a[href="${featureLandingPath(feature.slug)}"]`).first()).toBeAttached();
  }
  await expect(page.getByRole("link", { name: "GST invoices & quotations" })).toHaveAttribute("href", "/features/gst-billing-invoice");
});

test("industries hub links all sixteen industry pages", async ({ page }) => {
  await page.goto("/industries");
  await expect(page.getByRole("heading", { name: "Software for your type of business", level: 2 })).toBeVisible();
  for (const industry of industryLandings) {
    await expect(page.locator(`main a[href="${industryLandingPath(industry.slug)}"]`).first()).toBeAttached();
  }
  for (const item of rewrittenIndustrySolutions) {
    await expect(page.locator(`main a[href="/${item.slug}"]`).first()).toBeAttached();
  }
});
