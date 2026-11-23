import { expect, test } from "@playwright/test";
import { legacySearchRedirects } from "../lib/seo/legacy-search-redirects.mjs";
import redirects from "./fixtures/legacy-search-redirects.json";

// Prompt 18: the 70 old URLs Google still showed on 23 Nov 2026 (they returned 404) now 308 to their closest live page.

const origin = "https://teamshastra.com";
const pairs = Object.entries(redirects as Record<string, string>);

test("the fixture and next.config data list the same 70 redirects", () => {
  expect(pairs).toHaveLength(70);
  expect(legacySearchRedirects).toEqual(pairs);
});

test("every old search URL 308s in one hop to a live page that is not itself a redirect", async ({ request }) => {
  test.setTimeout(300_000);
  const failures: string[] = [];
  for (const [source, destination] of pairs) {
    const response = await request.get(source, { maxRedirects: 0 });
    const location = response.headers()["location"] ?? "";
    const target = location.startsWith(origin) ? location.slice(origin.length) : location;
    if (response.status() !== 308 || target !== destination) failures.push(`${source} → ${response.status()} ${location}`);
    const landing = await request.get(destination, { maxRedirects: 0 });
    if (landing.status() !== 200) failures.push(`${destination} (target of ${source}) → ${landing.status()}`);
  }
  expect(failures, failures.join("\n")).toEqual([]);
});

test("no redirect source is in the sitemap", async ({ request }) => {
  const xml = await (await request.get("/sitemap.xml")).text();
  const paths = new Set([...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].slice(origin.length) || "/"));
  for (const [source, destination] of pairs) {
    expect(paths.has(source), source).toBe(false);
    expect(paths.has(destination), destination).toBe(true);
  }
});
