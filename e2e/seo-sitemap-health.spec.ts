import { expect, test, type APIRequestContext } from "@playwright/test";

// Every sitemap URL: 200 without redirects, self canonical, one H1, its own title and description.
// Plus: every sitemap URL is reachable from home within three clicks.

const origin = "https://teamshastra.com";
/** Legal page kept as-is for the Play Store listing: same title as /privacy and no inbound link. Owner decision pending. */
const legalExceptions = new Set(["/privacy-policy"]);

async function sitemapPaths(request: APIRequestContext): Promise<string[]> {
  const xml = await (await request.get("/sitemap.xml")).text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].slice(origin.length) || "/");
}

function decode(value: string): string {
  return value.replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">");
}

test("every sitemap URL is healthy", async ({ request }) => {
  test.setTimeout(600_000);
  const paths = await sitemapPaths(request);
  expect(paths.length).toBeGreaterThan(0);
  const failures: string[] = [];
  const titles = new Map<string, string>();
  const descriptions = new Map<string, string>();
  for (const path of paths) {
    const response = await request.get(path, { maxRedirects: 0 });
    if (response.status() !== 200) {
      failures.push(`${path}: status ${response.status()}`);
      continue;
    }
    const html = await response.text();
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
    const expected = path === "/" ? [origin, `${origin}/`] : [`${origin}${path}`];
    if (!canonical || !expected.includes(canonical)) failures.push(`${path}: canonical ${canonical}`);
    const h1s = (html.match(/<h1[\s>]/g) ?? []).length;
    if (h1s !== 1) failures.push(`${path}: ${h1s} H1s`);
    const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "").trim();
    const description = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "").trim();
    if (!title) failures.push(`${path}: empty title`);
    if (!description) failures.push(`${path}: empty description`);
    if (titles.has(title) && !legalExceptions.has(path)) failures.push(`${path}: title also on ${titles.get(title)}`);
    if (descriptions.has(description) && !legalExceptions.has(path)) failures.push(`${path}: description also on ${descriptions.get(description)}`);
    titles.set(title, path);
    descriptions.set(description, path);
    if (/aggregateRating|"@type":"Review"/.test(html)) failures.push(`${path}: rating or review markup`);
  }
  expect(failures, failures.join("\n")).toEqual([]);
});

test("every sitemap URL is within three clicks of home", async ({ request }) => {
  test.setTimeout(600_000);
  const targets = new Set(await sitemapPaths(request));
  const depth = new Map<string, number>([["/", 0]]);
  let frontier = ["/"];
  for (let level = 1; level <= 3; level += 1) {
    const next: string[] = [];
    for (const path of frontier) {
      const html = await (await request.get(path)).text();
      for (const match of html.matchAll(/<a [^>]*href="(\/[^"#?]*)"/g)) {
        const href = match[1].replace(/\/$/, "") || "/";
        if (!depth.has(href)) {
          depth.set(href, level);
          if (targets.has(href)) next.push(href);
        }
      }
    }
    frontier = next;
  }
  const unreachable = [...targets].filter((path) => !depth.has(path) && !legalExceptions.has(path));
  expect(unreachable, unreachable.join("\n")).toEqual([]);
});

test("unknown routes return 404", async ({ request }) => {
  for (const path of ["/no-such-page", "/features/no-such-page", "/industries/no-such-page", "/blog/no-such-page/deeper"]) {
    expect((await request.get(path)).status(), path).toBe(404);
  }
});

test("security headers are sent and API responses are noindex", async ({ request }) => {
  const headers = (await request.get("/")).headers();
  expect(headers["x-content-type-options"]).toBe("nosniff");
  expect(headers["referrer-policy"]).toBe("strict-origin-when-cross-origin");
  expect(headers["permissions-policy"]).toContain("camera=()");
  // GET on a POST-only route: answered by Next with 405, never reaches the support backend.
  const api = await request.get("/api/support/visitor/start");
  expect(api.headers()["x-robots-tag"]).toBe("noindex");
});
