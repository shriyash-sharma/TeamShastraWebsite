import { expect, test } from "@playwright/test";
import { hindiBodyText, hindiPages } from "../lib/seo/landing/hi";
import { BANNED_HINDI_PHRASES, EMOJI_PATTERN, allowedEmDashes, emDashCount, styleHits } from "../lib/seo/style-rules";

// Content and style checks for the Hindi pages (Prompt 12). Pure data, no browser. The shared
// helpers in seo-text.ts keep only Latin letters, so Hindi text is split here on Unicode letters.

function hindiWords(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{M}\p{N}₹\s-]/gu, " ")
    .split(/\s+/)
    .filter(Boolean);
}

function shingles(text: string, size = 5): Set<string> {
  const list = hindiWords(text);
  const out = new Set<string>();
  for (let i = 0; i + size <= list.length; i += 1) out.add(list.slice(i, i + size).join(" "));
  return out;
}

function jaccard(a: Set<string>, b: Set<string>): number {
  let shared = 0;
  for (const item of a) if (b.has(item)) shared += 1;
  return shared / (a.size + b.size - shared);
}

/** Sentences end with ।, ?, ! or a full stop, or at a line break. */
function hindiSentences(text: string): string[] {
  return text
    .split(/(?<=[।?!.])\s+|\n+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);
}

function countPhrase(text: string, phrase: string): number {
  const haystack = ` ${hindiWords(text).join(" ")} `;
  const needle = ` ${hindiWords(phrase).join(" ")} `;
  return haystack.split(needle).length - 1;
}

const pages = hindiPages.map((page) => ({ page, body: hindiBodyText(page), meta: `${page.title}\n${page.metaDescription}` }));

test("word counts, similarity and repeated sentences", () => {
  const failures: string[] = [];
  const rows: string[] = [];
  const cache = new Map(pages.map(({ page, body }) => [page.path, shingles(body)]));
  for (const { page, body } of pages) {
    const count = hindiWords(body).length;
    if (count < 450) failures.push(`${page.path}: ${count} words (min 450)`);
    let max = 0;
    let partner = "";
    for (const other of pages) {
      if (other.page.path === page.path) continue;
      const score = jaccard(cache.get(page.path)!, cache.get(other.page.path)!);
      if (score > max) [max, partner] = [score, other.page.path];
      if (score > 0.1) failures.push(`${page.path} vs ${other.page.path}: ${score.toFixed(3)}`);
    }
    rows.push(`${page.path.padEnd(52)} ${String(count).padStart(4)}  ${max.toFixed(3)} ${partner}`);
  }
  console.log(`\n${"path".padEnd(52)} words maxSim partner\n${rows.join("\n")}`);

  const owner = new Map<string, string>();
  for (const { page, body } of pages) {
    for (const sentence of new Set(hindiSentences(body).filter((s) => hindiWords(s).length >= 8).map((s) => hindiWords(s).join(" ")))) {
      const first = owner.get(sentence);
      if (first && first !== page.path) failures.push(`"${sentence}" on ${first} and ${page.path}`);
      else owner.set(sentence, page.path);
    }
  }
  expect(failures, failures.join("\n")).toEqual([]);
});

test("FAQ questions, titles, descriptions, H1s and first sentences are unique", () => {
  const repeats: string[] = [];
  const seen = new Map<string, string>();
  const add = (kind: string, value: string, path: string) => {
    const key = `${kind}:${hindiWords(value).join(" ")}`;
    const first = seen.get(key);
    if (first) repeats.push(`${kind} "${value}" on ${first} and ${path}`);
    else seen.set(key, path);
  };
  for (const { page } of pages) {
    page.faqs.forEach((faq) => add("faq", faq.question, page.path));
    add("title", page.title, page.path);
    add("description", page.metaDescription, page.path);
    add("h1", page.h1, page.path);
    add("first sentence", hindiSentences(page.intro)[0], page.path);
    if (page.faqs.length < 5 || page.faqs.length > 7) repeats.push(`${page.path}: ${page.faqs.length} FAQs`);
  }
  expect(repeats, repeats.join("\n")).toEqual([]);
});

test("banned phrases (English and Hindi), em dashes and emoji", () => {
  const failures: string[] = [];
  for (const { page, body, meta } of pages) {
    const text = `${body}\n${meta}`;
    const hits = [...styleHits(text), ...BANNED_HINDI_PHRASES.filter((phrase) => text.includes(phrase))];
    if (hits.length) failures.push(`${page.path}: ${hits.join(", ")}`);
    if (emDashCount(text) > allowedEmDashes(hindiWords(body).length)) failures.push(`${page.path}: too many em dashes`);
    if (EMOJI_PATTERN.test(text)) failures.push(`${page.path}: emoji`);
  }
  expect(failures, failures.join("\n")).toEqual([]);
});

test("primary phrase in title, H1, description and first 100 words, density at most 2.5%", () => {
  const problems: string[] = [];
  for (const { page, body } of pages) {
    const has = (text: string) => countPhrase(text, page.primaryKeyword) > 0;
    if (!has(page.title)) problems.push(`${page.path}: missing from title`);
    if (!has(page.h1)) problems.push(`${page.path}: missing from H1`);
    if (!has(page.metaDescription)) problems.push(`${page.path}: missing from description`);
    if (!has(hindiWords(`${page.h1} ${page.intro}`).slice(0, 100).join(" "))) problems.push(`${page.path}: missing from first 100 words`);
    const density = (countPhrase(body, page.primaryKeyword) * hindiWords(page.primaryKeyword).length) / hindiWords(body).length;
    if (density > 0.025) problems.push(`${page.path}: density ${(density * 100).toFixed(2)}%`);
  }
  expect(problems, problems.join("\n")).toEqual([]);
});

test("only verified claims: no e-way bill or live tracking promises, prices from pricingSummary", () => {
  const problems: string[] = [];
  for (const { page, body } of pages) {
    // Limits and FAQs may name these features, but only in a block that says the app doesn't do them.
    const blocks = [...page.sections.flatMap((s) => [...(s.paragraphs ?? []), ...(s.list ?? [])]), ...page.faqs.map((f) => `${f.question} ${f.answer}`)];
    for (const block of blocks) {
      if (/(e-way bill|e-invoice|IRN|लाइव ट्रैकिंग|iOS ऐप)/i.test(block) && !/नहीं/.test(block)) problems.push(`${page.path}: "${block}"`);
    }
    for (const price of body.match(/₹[\d,]+/g) ?? []) {
      if (price !== "₹200" && !/(जैसे|मान लीजिए|उदाहरण)/.test(body.slice(Math.max(0, body.indexOf(price) - 80), body.indexOf(price)))) {
        problems.push(`${page.path}: unlabelled amount ${price}`);
      }
    }
    if (/aggregateRating|★|रेटिंग/.test(JSON.stringify(page))) problems.push(`${page.path}: rating`);
  }
  expect(problems, problems.join("\n")).toEqual([]);
});
