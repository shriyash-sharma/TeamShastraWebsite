import AxeBuilder from "@axe-core/playwright";
import { expect, test, type APIRequestContext } from "@playwright/test";
import { hindiPages } from "../lib/seo/landing/hi";
import { hindiPathByEnglishPath } from "../lib/seo/landing/hi/paths";
import snapshot from "./fixtures/english-head-snapshot.json";
import { dismissCookies, mockSupport } from "./helpers";

// Hindi pages under /hi (Prompt 12) and the English pages they pair with. English head data is
// compared with e2e/fixtures/english-head-snapshot.json, taken from the live site before the
// route-group move on 23 Nov 2026.

const origin = "https://teamshastra.com";
const DEVANAGARI = /[ऀ-ॿ]/;

type Head = { lang: string; title: string; description: string; canonical: string; alternates: Record<string, string>; h1: string[]; ogLocale: string; ld: string[] };

function decode(text: string): string {
  return text
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

async function head(request: APIRequestContext, path: string): Promise<Head & { status: number; html: string }> {
  const response = await request.get(path);
  const html = await response.text();
  const alternates: Record<string, string> = {};
  for (const m of html.matchAll(/<link rel="alternate" hrefLang="([^"]+)" href="([^"]+)"\/>/g)) alternates[m[1]] = m[2];
  return {
    status: response.status(),
    html,
    lang: html.match(/<html lang="([^"]+)"/)?.[1] ?? "",
    title: decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? ""),
    description: decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? ""),
    canonical: html.match(/<link rel="canonical" href="([^"]+)"/)?.[1] ?? "",
    alternates,
    h1: [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => decode(m[1].replace(/<[^>]+>/g, "")).trim()),
    ogLocale: html.match(/<meta property="og:locale" content="([^"]+)"/)?.[1] ?? "",
    ld: [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1])
  };
}

function englishUrl(path: string) {
  return path === "/" ? origin : `${origin}${path}`;
}

test("data: 14 Hindi pages, ASCII slugs, and the hreflang map matches every page", () => {
  expect(hindiPages).toHaveLength(14);
  const fromPages = Object.fromEntries(hindiPages.map((page) => [page.enPath, page.path]));
  expect(fromPages).toEqual(hindiPathByEnglishPath);
  for (const page of hindiPages) {
    expect(page.path, page.path).toMatch(/^\/hi(\/[a-z0-9-]+)*$/);
    expect(page.title.length, `${page.path} title`).toBeGreaterThanOrEqual(30);
    expect(page.title.length, `${page.path} title`).toBeLessThanOrEqual(60);
    expect(page.metaDescription.length, `${page.path} description`).toBeGreaterThanOrEqual(70);
    expect(page.metaDescription.length, `${page.path} description`).toBeLessThanOrEqual(155);
  }
});

for (const page of hindiPages) {
  test(`${page.path}: lang, canonical, reciprocal hreflang, metadata and JSON-LD`, async ({ request }) => {
    const hi = await head(request, page.path);
    expect(hi.status).toBe(200);
    expect(hi.lang).toBe("hi-IN");
    expect(hi.canonical).toBe(`${origin}${page.path}`);
    const expected = { "en-IN": englishUrl(page.enPath), "hi-IN": `${origin}${page.path}`, "x-default": englishUrl(page.enPath) };
    expect(hi.alternates).toEqual(expected);
    expect(hi.title).toBe(page.title);
    expect(hi.description).toBe(page.metaDescription);
    expect(hi.ogLocale).toBe("hi_IN");
    expect(hi.h1).toEqual([page.h1]);
    expect(hi.h1[0]).toMatch(DEVANAGARI);

    const graph = hi.ld.flatMap((text) => (JSON.parse(text)["@graph"] ?? []) as Array<Record<string, unknown>>);
    expect(graph.map((node) => node["@type"])).toEqual(["Organization", "WebSite", "WebPage", "BreadcrumbList", "SoftwareApplication", "FAQPage"]);
    expect(graph.find((node) => node["@type"] === "WebPage")?.inLanguage).toBe("hi-IN");
    const faq = graph.find((node) => node["@type"] === "FAQPage") as { mainEntity: Array<{ name: string }> };
    const visible = [...hi.html.matchAll(/<h3 class="seo-faq-question">([^<]*)<\/h3>/g)].map((m) => decode(m[1]));
    expect(faq.mainEntity.map((q) => q.name)).toEqual(visible);
    expect(hi.ld.join("")).not.toContain("aggregateRating");
    expect(hi.html).toContain(`<a hrefLang="en-IN" lang="en" href="${page.enPath}">`);

    // The English twin points back.
    const en = await head(request, page.enPath);
    expect(en.status).toBe(200);
    expect(en.lang).toBe("en");
    expect(en.canonical).toBe(englishUrl(page.enPath));
    expect(en.alternates).toEqual(expected);
    expect(en.ogLocale).toBe("en_IN");
    expect(en.html).toContain(`<a hrefLang="hi-IN" lang="hi" href="${page.path}">`);
  });
}

test("every legacy English URL keeps its lang, title, canonical and H1", async ({ request }) => {
  test.setTimeout(300_000);
  const changed: string[] = [];
  for (const [path, before] of Object.entries(snapshot)) {
    const now = await head(request, path);
    const h1 = now.h1.length === 1 ? now.h1[0] : now.h1;
    const after = { title: now.title, canonical: now.canonical, h1, lang: now.lang };
    if (JSON.stringify(after) !== JSON.stringify(before)) changed.push(`${path}: ${JSON.stringify(before)} → ${JSON.stringify(after)}`);
    if (!hindiPathByEnglishPath[path] && Object.keys(now.alternates).length) changed.push(`${path}: unexpected hreflang`);
  }
  expect(changed, changed.join("\n")).toEqual([]);
});

test("sitemap lists each Hindi page once with hreflang alternates on both versions", async ({ request }) => {
  const xml = await (await request.get("/sitemap.xml")).text();
  const entries = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => m[1]);
  const byLoc = new Map(entries.map((entry) => [entry.match(/<loc>([^<]+)<\/loc>/)![1], entry]));
  for (const page of hindiPages) {
    for (const loc of [`${origin}${page.path}`, englishUrl(page.enPath)]) {
      const entry = byLoc.get(loc);
      expect(entry, loc).toBeTruthy();
      expect(entry).toContain(`<xhtml:link rel="alternate" hreflang="hi-IN" href="${origin}${page.path}" />`);
      expect(entry).toContain(`<xhtml:link rel="alternate" hreflang="en-IN" href="${englishUrl(page.enPath)}" />`);
      expect(entry).toContain(`<xhtml:link rel="alternate" hreflang="x-default" href="${englishUrl(page.enPath)}" />`);
    }
  }
  expect(entries.filter((entry) => entry.includes("xhtml:link"))).toHaveLength(28);
});

test("unknown /hi URLs and unmatched deep URLs return the 404 page", async ({ request }) => {
  for (const path of ["/hi/does-not-exist", "/hi/features/nothing", "/no/such/page"]) {
    const response = await request.get(path);
    expect(response.status(), path).toBe(404);
    expect(await response.text(), path).toContain("find that page");
  }
});

test.describe("in the browser", () => {
  test.beforeEach(async ({ page }) => {
    await dismissCookies(page);
    await mockSupport(page);
  });

  test("language switch links work both ways", async ({ page }) => {
    await page.goto("/features/gps-attendance-app");
    await page.getByRole("link", { name: "यह पेज हिंदी में पढ़ें" }).click();
    await expect(page).toHaveURL(/\/hi\/features\/gps-attendance-app$/);
    await expect(page.locator("html")).toHaveAttribute("lang", "hi-IN");
    await page.getByRole("link", { name: "Read this page in English" }).click();
    await expect(page).toHaveURL(/\/features\/gps-attendance-app$/);
  });

  for (const path of ["/hi", "/hi/features/gps-attendance-app", "/hi/industries/cctv-installer-software", "/hi/hvac-service-management"]) {
    test(`${path} passes axe and fits 360 px`, async ({ page }) => {
      await page.setViewportSize({ width: 360, height: 740 });
      await page.goto(path);
      await page.waitForLoadState("networkidle");
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(360);
      const violations = (await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "best-practice"]).analyze()).violations;
      expect(violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(" ")).slice(0, 2).join(" | ")}`)).toEqual([]);
    });
  }
});
