import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { compareDisclaimer, compareHub, comparePages, formatCheckedDate } from "../lib/seo/compare";
import { dismissCookies, mockSupport } from "./helpers";

// /compare and the four comparison pages (Prompt 11). The support API is mocked and cookies are
// declined, so nothing reaches the support inbox or analytics.

const origin = "https://teamshastra.com";

/** The competitor's own domains; every page must cite at least three links to them. */
const officialDomains: Record<string, RegExp> = {
  "vyapar-alternative": /^https:\/\/vyaparapp\.in\//,
  "teamshastra-vs-khatabook": /^https:\/\/(khatabook\.com\/|play\.google\.com\/store\/apps\/details\?id=com\.vaibhavkalpe\.android\.khatabook)/,
  "teamshastra-vs-mybillbook": /^https:\/\/mybillbook\.in\//,
  "teamshastra-vs-zoho-fsm": /^https:\/\/(www|help)\.zoho\.com\//
};

const competitorNames = /vyapar|khatabook|pagarkhata|mybillbook|myhaazri|zoho/i;
const disparaging = /\b(bad|worst|outdated|clunky|cheap|scam|lacks|limited|expensive)\b/i;

type Node = Record<string, unknown> & { "@type"?: string };

test.beforeEach(async ({ page }) => {
  await dismissCookies(page);
  await mockSupport(page);
});

test("data: every competitor cell is sourced or says it isn't listed, in neutral words", () => {
  const problems: string[] = [];
  for (const page of comparePages) {
    for (const row of page.rows) {
      const notListed = row.them.startsWith("Not listed");
      if (notListed && !row.them.includes(formatCheckedDate(page.lastChecked))) problems.push(`${page.slug}: "${row.need}" has no date`);
      if (!notListed && !row.sources?.length) problems.push(`${page.slug}: "${row.need}" has no source`);
      for (const n of row.sources ?? []) if (n < 1 || n > page.sources.length) problems.push(`${page.slug}: "${row.need}" cites [${n}]`);
      if (disparaging.test(row.them)) problems.push(`${page.slug}: loaded word in "${row.them}"`);
    }
    if (page.betterChoice.length < 3) problems.push(`${page.slug}: fewer than 3 better-choice points`);
  }
  expect(problems, problems.join("\n")).toEqual([]);
});

for (const data of comparePages) {
  test(`${data.path} renders the comparison honestly`, async ({ page }) => {
    const response = await page.goto(data.path);
    expect(response?.status()).toBe(200);
    await expect(page).toHaveTitle(data.title);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `${origin}${data.path}`);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("h1")).toHaveText(data.h1);

    const checked = formatCheckedDate(data.lastChecked);
    await expect(page.locator(".page-hero")).toContainText(`Last checked: ${checked}`);
    await expect(page.locator("#sources")).toContainText(checked);
    await expect(page.locator(".seo-breadcrumbs")).toBeVisible();
    await expect(page.getByRole("heading", { level: 2, name: "Quick answer" })).toBeVisible();
    await expect(page.getByRole("heading", { level: 2, name: `Where ${data.competitor} is the better choice` })).toBeVisible();
    await expect(page.getByRole("heading", { level: 2, name: `Switching from ${data.competitor}` })).toBeVisible();

    const sourceLinks = await page.locator("#sources ol a").evaluateAll((links) => links.map((a) => a.getAttribute("href") ?? ""));
    expect(sourceLinks.filter((href) => officialDomains[data.slug].test(href)).length).toBeGreaterThanOrEqual(3);
    await expect(page.locator("#sources")).toContainText(compareDisclaimer);

    // Every [n] in the table jumps to an existing source.
    const refs = await page.locator(".comparison-table sup a").evaluateAll((links) => links.map((a) => a.getAttribute("href")));
    for (const ref of new Set(refs)) await expect(page.locator(ref!)).toHaveCount(1);
    await expect(page.locator(".comparison-table tbody tr")).toHaveCount(data.rows.length);

    const competitorCells = await page.locator(".comparison-table tbody td:nth-of-type(1)").allInnerTexts();
    expect(competitorCells.filter((text) => disparaging.test(text))).toEqual([]);

    const images = await page.locator("main img").evaluateAll((imgs) => imgs.map((img) => `${img.getAttribute("src")} ${img.getAttribute("alt")}`));
    expect(images.filter((text) => competitorNames.test(text))).toEqual([]);

    const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
    const raw = blocks.join("\n");
    expect(raw).not.toContain("aggregateRating");
    expect(raw).not.toMatch(/"@type":\s*"(Review|Product|SoftwareApplication|ItemList)"/);
    const graph = blocks.flatMap((text) => (JSON.parse(text)["@graph"] ?? []) as Node[]);
    expect(graph.map((node) => node["@type"])).toEqual(["Organization", "WebSite", "WebPage", "BreadcrumbList", "FAQPage"]);
    const webPage = graph.find((node) => node["@type"] === "WebPage")!;
    expect(webPage.dateModified).toBe(data.lastChecked);
    expect(webPage.inLanguage).toBe("en-IN");
    const faq = graph.find((node) => node["@type"] === "FAQPage") as Node & { mainEntity: Array<{ name: string }> };
    const visibleQuestions = await page.locator("#faq-comparison summary").allInnerTexts();
    expect(faq.mainEntity.map((q) => q.name)).toEqual(visibleQuestions.map((q) => q.trim()));

    const violations = (await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "best-practice"]).analyze()).violations;
    expect(violations.map((v) => v.id)).toEqual([]);
  });
}

test("/compare links every comparison, /features and /pricing, and carries the disclaimer", async ({ page }) => {
  expect((await page.goto(compareHub.path))?.status()).toBe(200);
  await expect(page).toHaveTitle(compareHub.title);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `${origin}/compare`);
  await expect(page.locator("h1")).toHaveCount(1);
  await expect(page.locator(".page-hero")).toContainText(`Last checked: ${formatCheckedDate(compareHub.lastChecked)}`);
  for (const data of comparePages) await expect(page.locator(`main a[href="${data.path}"]`)).toHaveCount(1);
  await expect(page.locator('main a[href="/features"]')).toHaveCount(1);
  await expect(page.locator('main a[href="/pricing"]')).toHaveCount(1);
  await expect(page.locator("main")).toContainText(compareDisclaimer);
  await expect(page.locator('footer a[href="/compare"]')).toHaveCount(1);
});

test("hub intro stays between 120 and 250 words", () => {
  const count = compareHub.intro.join(" ").split(/\s+/).filter(Boolean).length;
  expect(count).toBeGreaterThanOrEqual(120);
  expect(count).toBeLessThanOrEqual(250);
});

for (const [feature, expected] of [
  ["vyapar-data-import", ["/vyapar-alternative", "/compare/teamshastra-vs-khatabook", "/compare/teamshastra-vs-mybillbook"]],
  ["gst-billing-invoice", ["/vyapar-alternative", "/compare/teamshastra-vs-mybillbook"]],
  ["staff-salary-payroll", ["/compare/teamshastra-vs-mybillbook"]],
  ["technician-dispatch-today-board", ["/compare/teamshastra-vs-zoho-fsm"]]
] as const) {
  test(`/features/${feature} links to its comparisons`, async ({ page }) => {
    await page.goto(`/features/${feature}`);
    for (const href of expected) expect(await page.locator(`main a[href="${href}"]`).count()).toBeGreaterThan(0);
  });
}

test("unknown comparison slugs are 404", async ({ request }) => {
  expect((await request.get("/compare/teamshastra-vs-nobody")).status()).toBe(404);
});

test("comparison pages pass axe at 360 px with no page-level sideways scroll", async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 740 });
  for (const path of [compareHub.path, ...comparePages.map((data) => data.path)]) {
    await page.goto(path);
    await page.waitForLoadState("networkidle");
    expect(await page.evaluate(() => document.documentElement.scrollWidth), path).toBeLessThanOrEqual(360);
    const violations = (await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "best-practice"]).analyze()).violations;
    expect(violations.map((v) => `${path}: ${v.id}`)).toEqual([]);
  }
});
