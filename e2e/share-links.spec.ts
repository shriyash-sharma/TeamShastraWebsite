import { expect, test } from "@playwright/test";
import { guidePath, guides } from "../lib/blog";
import { comparePages } from "../lib/seo/compare";

// Prompt 18: every guide and comparison page has five plain share links built from its own canonical URL, keeps its
// Open Graph and Twitter tags, and loads no third-party script.

const paths = [...guides.map((guide) => guidePath(guide.slug)), ...comparePages.map((page) => page.path)];

function decode(text: string): string {
  return text.replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&");
}

test("guides and comparison pages each have the five share links", async ({ request }) => {
  test.setTimeout(240_000);
  expect(paths.length).toBe(guides.length + comparePages.length);
  expect(paths).toContain("/vyapar-alternative");
  const problems: string[] = [];
  for (const path of paths) {
    const html = await (await request.get(path)).text();
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1] ?? "";
    if (canonical !== `https://teamshastra.com${path}`) problems.push(`${path}: canonical ${canonical}`);
    const encoded = encodeURIComponent(canonical);
    const nav = html.match(/<nav class="seo-internal-links share-links"[\s\S]*?<\/nav>/)?.[0] ?? "";
    const links = [...nav.matchAll(/<a href="([^"]+)" target="_blank" rel="noopener noreferrer">([^<]+)<\/a>/g)].map((m) => ({
      href: decode(m[1]),
      text: m[2]
    }));
    const expected: [string, string][] = [
      ["Share on WhatsApp", "https://wa.me/?text="],
      ["Share on LinkedIn", `https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`],
      ["Share on X", "https://x.com/intent/post?text="],
      ["Share on Facebook", `https://www.facebook.com/sharer/sharer.php?u=${encoded}`],
      ["Share on Email", "mailto:?subject="]
    ];
    if (links.length !== 5) problems.push(`${path}: ${links.length} share links`);
    for (const [text, prefix] of expected) {
      const link = links.find((l) => l.text === text);
      if (!link || !link.href.startsWith(prefix) || !link.href.includes(encoded)) problems.push(`${path}: bad "${text}" ${link?.href}`);
    }
    for (const tag of ['property="og:title"', 'property="og:description"', 'property="og:image"', 'name="twitter:card"']) {
      if (!html.includes(tag)) problems.push(`${path}: missing ${tag}`);
    }
    for (const m of html.matchAll(/<script[^>]+src="([^"]+)"/g)) {
      if (/^https?:\/\//.test(m[1]) && !m[1].startsWith("https://teamshastra.com")) problems.push(`${path}: external script ${m[1]}`);
    }
  }
  expect(problems, problems.join("\n")).toEqual([]);
});

test("share links open the network's share page in a new tab without posting anything", async ({ page }) => {
  // Popups are new pages, so the share sites are stubbed for the whole context: nothing reaches the real networks.
  await page.context().route(/wa\.me|linkedin\.com|x\.com|facebook\.com/, (route) => route.fulfill({ status: 200, body: "blocked in tests" }));
  await page.route("**/api/support/**", (route) => route.fulfill({ status: 200, contentType: "application/json", body: "{}" }));
  await page.goto("/blog/job-card-format");
  const share = page.getByRole("navigation", { name: "Share this guide" });
  await expect(share.getByRole("link", { name: "Share on WhatsApp" })).toBeVisible();
  const [popup] = await Promise.all([page.waitForEvent("popup"), share.getByRole("link", { name: "Share on LinkedIn" }).click()]);
  expect(popup.url()).toContain("linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fteamshastra.com%2Fblog%2Fjob-card-format");
  await popup.close();
});
