import { expect, test } from "@playwright/test";
import { guidePath, guides } from "../lib/blog";
import { jaccard, longSentences, shingles, words } from "./seo-text";

// Prompt 17: compare each of the 18 new guides against every page in the sitemap, using the rendered <main> of each
// page. Text that only quotes something else is left out before comparing: link cards and link labels that repeat a
// guide's H1 and description, citation titles in the Sources list, the fixed legal disclaimer, and any text found on
// ten or more pages (CTA, breadcrumbs). Works against local or live (PLAYWRIGHT_BASE_URL).

const origin = "https://teamshastra.com";
const prompt13Categories = new Set(["salary", "gst", "service", "start"]);
const newGuidePaths = guides.filter((guide) => !prompt13Categories.has(guide.category)).map((guide) => guidePath(guide.slug));
const TEMPLATE_PAGES = 10;

type Page = { path: string; title: string; description: string; h1: string; text: string };

function decode(text: string): string {
  return text
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&");
}

function mainText(html: string): string {
  const main = html.match(/<main[\s\S]*?<\/main>/)?.[0] ?? "";
  return decode(
    main
      .replace(/<(script|style|svg)[\s\S]*?<\/\1>/g, " ")
      .replace(/<article class="seo-index-card"[\s\S]*?<\/article>/g, " ")
      .replace(/<a [^>]*href="\/blog\/[^"]*"[^>]*>[\s\S]*?<\/a>/g, " ")
      .replace(/<ol class="compare-sources">[\s\S]*?<\/ol>/g, " ")
      .replace(/<p class="compare-disclaimer guide-disclaimer">[\s\S]*?<\/p>/g, " ")
      .replace(/<\/(p|li|h[1-6]|td|th|summary|div|caption)>/g, ".\n")
      .replace(/<[^>]+>/g, " ")
  )
    .replace(/\.\s*\./g, ".")
    .replace(/[ \t]+/g, " ");
}

function pick(html: string, pattern: RegExp): string {
  return decode(html.match(pattern)?.[1] ?? "").trim();
}

test("the 18 Prompt 17 guides are unique against every page in the sitemap", async ({ request }) => {
  test.setTimeout(300_000);
  expect(newGuidePaths).toHaveLength(18);
  const xml = await (await request.get("/sitemap.xml")).text();
  const paths = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].slice(origin.length) || "/");
  for (const path of newGuidePaths) expect(paths, path).toContain(path);

  const pages: Page[] = [];
  for (const path of paths) {
    const response = await request.get(path);
    expect(response.status(), path).toBe(200);
    const html = await response.text();
    pages.push({
      path,
      title: pick(html, /<title>([^<]*)<\/title>/),
      description: pick(html, /<meta name="description" content="([^"]*)"/),
      h1: pick(html, /<h1[^>]*>([\s\S]*?)<\/h1>/).replace(/<[^>]+>/g, ""),
      text: mainText(html)
    });
  }

  // Site template: shingles and sentences found on TEMPLATE_PAGES or more pages.
  const shingleSets = new Map(pages.map((page) => [page.path, shingles(page.text)]));
  const sentenceSets = new Map(pages.map((page) => [page.path, new Set(longSentences(page.text))]));
  const shingleCount = new Map<string, number>();
  const sentenceCount = new Map<string, number>();
  for (const set of shingleSets.values()) for (const item of set) shingleCount.set(item, (shingleCount.get(item) ?? 0) + 1);
  for (const set of sentenceSets.values()) for (const item of set) sentenceCount.set(item, (sentenceCount.get(item) ?? 0) + 1);
  for (const [path, set] of shingleSets) {
    shingleSets.set(path, new Set([...set].filter((item) => shingleCount.get(item)! < TEMPLATE_PAGES)));
  }
  for (const [path, set] of sentenceSets) {
    sentenceSets.set(path, new Set([...set].filter((item) => sentenceCount.get(item)! < TEMPLATE_PAGES)));
  }

  const problems: string[] = [];
  const rows: string[] = [];
  for (const path of newGuidePaths) {
    const page = pages.find((p) => p.path === path)!;
    let worst = { score: 0, other: "-" };
    for (const other of pages) {
      if (other.path === path) continue;
      const score = jaccard(shingleSets.get(path)!, shingleSets.get(other.path)!);
      if (score > worst.score) worst = { score, other: other.path };
      if (score > 0.1) problems.push(`${path} vs ${other.path}: 5-word shingle Jaccard ${score.toFixed(3)}`);
      for (const sentence of sentenceSets.get(path)!) {
        if (sentenceSets.get(other.path)!.has(sentence)) problems.push(`${path} and ${other.path} share: "${sentence}"`);
      }
      if (other.title === page.title) problems.push(`${path}: title also on ${other.path}`);
      if (other.description === page.description) problems.push(`${path}: description also on ${other.path}`);
      if (words(other.h1).join(" ") === words(page.h1).join(" ")) problems.push(`${path}: H1 also on ${other.path}`);
    }
    rows.push(`${path.padEnd(52)} ${String(words(page.text).length).padStart(5)}  ${worst.score.toFixed(3)}  ${worst.other}`);
  }
  console.log(`Uniqueness against ${pages.length} sitemap pages (template text on ${TEMPLATE_PAGES}+ pages excluded)`);
  console.log(`${"guide".padEnd(52)} words  max J  closest page`);
  console.log(rows.join("\n"));
  expect(problems, problems.join("\n")).toEqual([]);
});
