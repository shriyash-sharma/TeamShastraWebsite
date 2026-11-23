import { expect, test } from "@playwright/test";
import { guideBodyText, guidePath, guides } from "../lib/blog";
import { compareBodyText, compareHub, comparePages } from "../lib/seo/compare";
import { featureLandings } from "../lib/seo/landing/features";
import { industryLandings, rewrittenIndustrySolutions } from "../lib/seo/landing/industries";
import { solutionMap } from "../lib/seo/solutions";
import {
  EMOJI_PATTERN,
  STOCK_OPENERS,
  allowedEmDashes,
  emDashCount,
  opener,
  sentences,
  styleHits
} from "../lib/seo/style-rules";
import { featureBodyText, fleschReadingEase, guideProseText, industryBodyText, solutionBodyText, words } from "./seo-text";

// "Sounds human" checks on every page added or rewritten in Prompt 08, plus /compare and the four
// comparison pages from Prompt 11, and the 12 guides under /blog from Prompt 13. Pure data, no browser.
// Run with STYLE_REPORT=1 to print the audit table.

type StylePage = {
  slug: string;
  intro: string;
  /** Everything visible that we wrote: headings, body, FAQ answers and questions. */
  body: string;
  /** Prose sentences for the opener check (FAQ questions excluded: they mirror what people search). */
  prose: string;
  meta: string;
};

const pages: StylePage[] = [
  ...featureLandings.map((page) => ({
    slug: `/features/${page.slug}`,
    intro: page.intro,
    body: featureBodyText(page),
    prose: featureBodyText({ ...page, faqs: page.faqs.map((faq) => ({ question: "", answer: faq.answer })) }),
    meta: [page.title, page.metaDescription].join("\n")
  })),
  ...industryLandings.map((page) => ({
    slug: `/industries/${page.slug}`,
    intro: page.intro,
    body: industryBodyText(page),
    prose: industryBodyText({ ...page, faqs: page.faqs.map((faq) => ({ question: "", answer: faq.answer })) }),
    meta: [page.title, page.metaDescription].join("\n")
  })),
  ...rewrittenIndustrySolutions.map((item) => {
    const page = solutionMap[item.slug];
    return {
      slug: `/${page.slug}`,
      intro: page.lead,
      body: solutionBodyText(page),
      prose: solutionBodyText({ ...page, faqs: page.faqs.map((faq) => ({ question: "", answer: faq.answer })) }),
      meta: [page.title, page.metaDescription].join("\n")
    };
  }),
  ...comparePages.map((page) => ({
    slug: page.path,
    intro: page.summary,
    body: compareBodyText(page),
    // Table cells use the required "Not listed on X's public pages" wording, so they are not prose.
    prose: compareBodyText({ ...page, rows: [], faqs: page.faqs.map((faq) => ({ question: "", answer: faq.answer })) }),
    meta: [page.title, page.metaDescription].join("\n")
  })),
  {
    slug: compareHub.path,
    intro: compareHub.intro[0],
    body: [compareHub.h1, ...compareHub.intro, ...comparePages.map((page) => page.cardSummary)].join("\n"),
    prose: [...compareHub.intro, ...comparePages.map((page) => page.cardSummary)].join("\n"),
    meta: [compareHub.title, compareHub.metaDescription].join("\n")
  },
  ...guides.map((guide) => ({
    slug: guidePath(guide.slug),
    intro: guide.summary,
    body: guideBodyText(guide),
    prose: guideProseText(guide),
    meta: [guide.title, guide.metaDescription].join("\n")
  }))
];

function firstSentence(text: string): string {
  return sentences(text)[0] ?? "";
}

/** Map of 3-word sentence opener → pages that use it. */
function openerPages(): Map<string, Set<string>> {
  const map = new Map<string, Set<string>>();
  for (const page of pages) {
    for (const sentence of sentences(page.prose)) {
      if (sentence.split(/\s+/).length < 4) continue;
      const key = opener(sentence);
      if (!map.has(key)) map.set(key, new Set());
      map.get(key)!.add(page.slug);
    }
  }
  return map;
}

test("covers the 42 pages from Prompt 08, 5 comparison pages from Prompt 11 and 12 guides from Prompt 13", () => {
  expect(pages).toHaveLength(59);
});

test("style audit report", () => {
  if (!process.env.STYLE_REPORT) test.skip();
  const rows = pages.map((page) => {
    const count = words(page.body).length;
    const list = sentences(page.prose);
    const lengths = list.map((s) => s.split(/\s+/).length);
    const avg = lengths.reduce((a, b) => a + b, 0) / Math.max(1, lengths.length);
    const long = lengths.filter((n) => n > 25).length / Math.max(1, lengths.length);
    return [
      page.slug,
      count,
      styleHits(`${page.body}\n${page.meta}`).join("/") || "0",
      `${allowedEmDashes(count)}/${emDashCount(page.body)}`,
      EMOJI_PATTERN.test(page.body + page.meta) ? "yes" : "0",
      avg.toFixed(1),
      `${Math.round(long * 100)}%`,
      Math.round(fleschReadingEase(page.prose)),
      firstSentence(page.intro)
    ].join(" | ");
  });
  const top = [...openerPages().entries()].sort((a, b) => b[1].size - a[1].size).slice(0, 10);
  console.log(
    [
      "slug | words | banned hits | em dash allowed/actual | emoji | avg sentence | >25 words | Flesch | first sentence",
      ...rows,
      "",
      "Most common sentence openers (pages):",
      ...top.map(([key, set]) => `${key} | ${set.size}`)
    ].join("\n")
  );
});

test("no banned phrases or template patterns", () => {
  const failures = pages.flatMap((page) => {
    const hits = styleHits(`${page.body}\n${page.meta}`);
    return hits.length ? [`${page.slug}: ${hits.join(", ")}`] : [];
  });
  expect(failures, failures.join("\n")).toEqual([]);
});

test("em dashes stay within one per 150 words", () => {
  const failures = pages.flatMap((page) => {
    const count = words(page.body).length;
    const actual = emDashCount(`${page.body}\n${page.meta}`);
    return actual > allowedEmDashes(count) ? [`${page.slug}: ${actual} > ${allowedEmDashes(count)}`] : [];
  });
  expect(failures, failures.join("\n")).toEqual([]);
});

test("no emoji in page copy", () => {
  const failures = pages.filter((page) => EMOJI_PATTERN.test(`${page.body}\n${page.meta}`)).map((page) => page.slug);
  expect(failures).toEqual([]);
});

test("every page opens with its own first sentence and first three words", () => {
  const sentenceOwners = new Map<string, string[]>();
  const openerOwners = new Map<string, string[]>();
  for (const page of pages) {
    const first = firstSentence(page.intro).toLowerCase();
    sentenceOwners.set(first, [...(sentenceOwners.get(first) ?? []), page.slug]);
    const start = opener(page.intro);
    openerOwners.set(start, [...(openerOwners.get(start) ?? []), page.slug]);
  }
  const repeats = [
    ...[...sentenceOwners.entries()].map(([key, owners]) => ({ label: `first sentence "${key}"`, owners })),
    ...[...openerOwners.entries()].map(([key, owners]) => ({ label: `intro opener "${key}"`, owners }))
  ]
    .filter((item) => item.owners.length > 1)
    .map((item) => `${item.label}: ${item.owners.join(", ")}`);
  expect(repeats, repeats.join("\n")).toEqual([]);

  const stock = pages.filter((page) => STOCK_OPENERS.some((start) => page.intro.toLowerCase().startsWith(start)));
  expect(stock.map((page) => page.slug)).toEqual([]);
});

test("no sentence opener is used on more than three pages", () => {
  const overused = [...openerPages().entries()]
    .filter(([, set]) => set.size > 3)
    .map(([key, set]) => `"${key}" on ${set.size} pages: ${[...set].join(", ")}`);
  expect(overused, overused.join("\n")).toEqual([]);
});
