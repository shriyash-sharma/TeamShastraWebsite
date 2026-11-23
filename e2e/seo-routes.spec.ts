import { expect, test } from "@playwright/test";
import { featureLandingPath, featureLandings } from "../lib/seo/landing/features";
import { industryLandingPath, industryLandings, rewrittenIndustrySolutions } from "../lib/seo/landing/industries";
import { compareHub, comparePages } from "../lib/seo/compare";
import { guidePath, guides } from "../lib/blog";
import { hindiPages } from "../lib/seo/landing/hi";
import legacyPaths from "./fixtures/legacy-urls.json";
import retiredCityUrls from "./fixtures/retired-city-urls.json";

// Sitemap, robots and routing. Legacy URLs are every URL in the live sitemap on 23 Nov 2026 after Prompt 17 (128 URLs,
// including the 14 Hindi pages and all 30 guides).

const origin = "https://teamshastra.com";
const newPaths = [
  ...featureLandings.map((page) => featureLandingPath(page.slug)),
  ...industryLandings.map((page) => industryLandingPath(page.slug))
];
/** Added by Prompt 11 (now also in the legacy fixture); /vyapar-alternative keeps its path. */
const comparePaths = [compareHub.path, ...comparePages.filter((page) => page.path.startsWith("/compare/")).map((page) => page.path)];

test("sitemap lists every legacy and new URL once, and no retired city URL", async ({ request }) => {
  const response = await request.get("/sitemap.xml");
  expect(response.status()).toBe(200);
  const xml = await response.text();
  expect(xml.startsWith("<?xml")).toBe(true);
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  expect(new Set(locs).size).toBe(locs.length);
  for (const loc of locs) expect(loc.startsWith(origin), loc).toBe(true);
  const paths = new Set(locs.map((loc) => loc.slice(origin.length) || "/"));
  for (const path of legacyPaths) expect(paths.has(path), `legacy ${path}`).toBe(true);
  for (const path of newPaths) expect(paths.has(path), `new ${path}`).toBe(true);
  for (const item of rewrittenIndustrySolutions) expect(paths.has(`/${item.slug}`)).toBe(true);
  for (const path of comparePaths) expect(paths.has(path), `compare ${path}`).toBe(true);
  for (const page of hindiPages) expect(paths.has(page.path), `hindi ${page.path}`).toBe(true);
  for (const guide of guides) expect(paths.has(guidePath(guide.slug)), `guide ${guide.slug}`).toBe(true);
  for (const item of retiredCityUrls) expect(paths.has(item.path), `retired ${item.path}`).toBe(false);
  expect(locs).toHaveLength(new Set([...legacyPaths, ...guides.map((guide) => guidePath(guide.slug))]).size);
});

test("robots.txt allows crawling and points to the sitemap", async ({ request }) => {
  const text = await (await request.get("/robots.txt")).text();
  expect(text).toContain("Allow: /");
  expect(text).toContain("Sitemap: https://teamshastra.com/sitemap.xml");
  expect(text).toContain("Host: https://teamshastra.com");
});

test("every legacy sitemap URL still returns 200", async ({ request }) => {
  test.setTimeout(300_000);
  const failures: string[] = [];
  for (const path of legacyPaths) {
    const response = await request.get(path, { maxRedirects: 0 });
    if (response.status() !== 200) failures.push(`${path} → ${response.status()}`);
  }
  expect(failures, failures.join("\n")).toEqual([]);
});

test("every retired feature-city URL still 308-redirects to its city hub", async ({ request }) => {
  test.setTimeout(120_000);
  expect(retiredCityUrls).toHaveLength(70);
  const failures: string[] = [];
  for (const item of retiredCityUrls) {
    const response = await request.get(item.path, { maxRedirects: 0 });
    const location = response.headers()["location"] ?? "";
    if (response.status() !== 308 || !location.endsWith(item.hub)) failures.push(`${item.path} → ${response.status()} ${location}`);
  }
  expect(failures, failures.join("\n")).toEqual([]);
});

test("login still redirects to the app", async ({ request }) => {
  const response = await request.get("/login", { maxRedirects: 0 });
  expect([307, 308]).toContain(response.status());
  expect(response.headers()["location"]).toBe("https://app.teamshastra.com/login");
});

test("unknown feature and industry slugs return 404", async ({ request }) => {
  expect((await request.get("/features/does-not-exist")).status()).toBe(404);
  expect((await request.get("/industries/does-not-exist")).status()).toBe(404);
});
