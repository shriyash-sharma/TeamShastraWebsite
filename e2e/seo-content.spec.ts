import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { expect, test } from "@playwright/test";
import { compareBodyText, comparePages } from "../lib/seo/compare";
import { getContentForSlug } from "../lib/seo/content";
import { featureLandings, getFeatureLanding } from "../lib/seo/landing/features";
import { industryLandings, industryLink, rewrittenIndustrySolutions } from "../lib/seo/landing/industries";
import { solutions } from "../lib/seo/solutions";
import { homeFaqs, marketingPages, pricingFaqs } from "../lib/site";
import {
  countPhrase,
  featureBodyText,
  firstWords,
  fleschReadingEase,
  industryBodyText,
  jaccard,
  longSentences,
  shingles,
  solutionBodyText,
  words
} from "./seo-text";

// Pure data checks: no browser needed.

type Page = {
  slug: string;
  kind: "feature" | "industry" | "solution" | "compare";
  title: string;
  metaDescription: string;
  h1: string;
  body: string;
  faqs: Array<{ question: string; answer: string }>;
};

const featurePages: Page[] = featureLandings.map((page) => ({
  slug: `features/${page.slug}`,
  kind: "feature",
  title: page.title,
  metaDescription: page.metaDescription,
  h1: page.h1,
  body: featureBodyText(page),
  faqs: page.faqs
}));

const industryPages: Page[] = industryLandings.map((page) => ({
  slug: `industries/${page.slug}`,
  kind: "industry",
  title: page.title,
  metaDescription: page.metaDescription,
  h1: page.h1,
  body: industryBodyText(page),
  faqs: page.faqs
}));

const rewrittenSlugs = new Set<string>(rewrittenIndustrySolutions.map((item) => item.slug));
const solutionPages: Page[] = solutions.map((page) => ({
  slug: page.slug,
  kind: "solution",
  title: `${page.title} | TeamShastra`,
  metaDescription: page.metaDescription,
  h1: page.headline,
  body: solutionBodyText(page),
  faqs: page.faqs
}));
const partCPages = solutionPages.filter((page) => rewrittenSlugs.has(page.slug));
const newPages = [...featurePages, ...industryPages];
/** Prompt 11: /vyapar-alternative and /compare/*. Table cells are included; they are visible copy too. */
const compareContentPages: Page[] = comparePages.map((page) => ({
  slug: page.path.slice(1),
  kind: "compare",
  title: page.title,
  metaDescription: page.metaDescription,
  h1: page.h1,
  body: compareBodyText(page),
  faqs: page.faqs
}));
/** Pages whose copy was written in this round and must be unique sentence by sentence. */
const freshPages = [...newPages, ...partCPages, ...compareContentPages];

/** Titles from static routes (pageMetadata(path, title, description) calls). */
function staticPageTitles(): Array<{ path: string; title: string; description: string }> {
  const out: Array<{ path: string; title: string; description: string }> = [];
  const walk = (dir: string) => {
    for (const name of readdirSync(dir)) {
      const full = path.join(dir, name);
      if (statSync(full).isDirectory()) walk(full);
      else if (name === "page.tsx") {
        const source = readFileSync(full, "utf8");
        const match = source.match(/pageMetadata\(\s*"([^"]+)",\s*"([^"]+)",\s*"([^"]+)"/);
        if (match) out.push({ path: match[1], title: match[2], description: match[3] });
      }
    }
  };
  walk(path.join(__dirname, "..", "app"));
  return out;
}

test("new feature and industry pages exist in the expected numbers", () => {
  expect(featureLandings).toHaveLength(26);
  expect(industryLandings).toHaveLength(10);
  expect(partCPages).toHaveLength(6);
  for (const page of partCPages) {
    expect(solutions.find((s) => s.slug === page.slug)?.caseStudy, page.slug).toBeUndefined();
  }
  expect(solutions.filter((s) => !rewrittenSlugs.has(s.slug)).every((s) => s.caseStudy)).toBe(true);
});

test("titles, descriptions, H1s and slugs are unique across the site", () => {
  const statics = staticPageTitles();
  const all = [
    ...newPages.map((p) => ({ id: p.slug, title: p.title, description: p.metaDescription, h1: p.h1 })),
    ...solutionPages.map((p) => ({ id: p.slug, title: p.title, description: p.metaDescription, h1: p.h1 })),
    ...compareContentPages.map((p) => ({ id: p.slug, title: p.title, description: p.metaDescription, h1: p.h1 })),
    ...statics.map((p) => ({ id: p.path, title: p.title, description: p.description, h1: "" }))
  ];
  // Every new or rewritten page must differ from every other page (older pages are compared only with these).
  const fresh = new Set(freshPages.map((p) => p.slug));
  const problems: string[] = [];
  for (const field of ["id", "title", "description", "h1"] as const) {
    const seen = new Map<string, string>();
    for (const item of all) {
      const value = item[field].trim().toLowerCase();
      if (!value) continue;
      const first = seen.get(value);
      if (first && (fresh.has(first) || fresh.has(item.id))) problems.push(`duplicate ${field} "${value}" on ${first} and ${item.id}`);
      if (!first) seen.set(value, item.id);
    }
  }
  expect(problems, problems.join("\n")).toEqual([]);
});

test("lengths of titles, descriptions, sections and FAQs", () => {
  const problems: string[] = [];
  const range = (id: string, label: string, value: number, min: number, max: number) => {
    if (value < min || value > max) problems.push(`${id}: ${label} = ${value} (want ${min}–${max})`);
  };
  for (const page of newPages) {
    range(page.slug, "title chars", page.title.length, 45, 60);
    range(page.slug, "description chars", page.metaDescription.length, 130, 158);
    range(page.slug, "FAQ count", page.faqs.length, 5, 7);
    if (!page.title.endsWith("| TeamShastra")) problems.push(`${page.slug}: title must end with "| TeamShastra"`);
    for (const faq of page.faqs) range(page.slug, `answer words "${faq.question}"`, words(faq.answer).length, 40, 90);
  }
  for (const page of featureLandings) {
    range(page.slug, "steps", page.steps.length, 4, 7);
    range(page.slug, "problem words", words(page.problem.join(" ")).length, 120, 200);
    range(page.slug, "solution words", words(page.solution.join(" ")).length, 150, 250);
    range(page.slug, "benefits", page.benefits.length, 4, 6);
    range(page.slug, "limits", page.limits.length, 1, 3);
    range(page.slug, "secondary keywords", page.secondaryKeywords.length, 2, 4);
    range(page.slug, "related features", page.relatedFeatures.length, 3, 5);
    range(page.slug, "related industries", page.relatedIndustries.length, 2, 4);
  }
  for (const page of industryLandings) {
    range(page.slug, "workflow", page.workflow.length, 4, 7);
    range(page.slug, "day-in-the-life words", words(page.dayInTheLife.join(" ")).length, 150, 250);
    range(page.slug, "challenges", page.challenges.length, 4, 6);
    range(page.slug, "how TeamShastra helps", page.howTeamShastraHelps.length, 5, 8);
    range(page.slug, "limits", page.limits.length, 1, 3);
  }
  for (const page of partCPages) range(page.slug, "FAQ count", page.faqs.length, 5, 7);
  for (const page of comparePages) {
    range(page.slug, "title chars", page.title.length, 45, 60);
    range(page.slug, "description chars", page.metaDescription.length, 130, 158);
    range(page.slug, "FAQ count", page.faqs.length, 5, 7);
    range(page.slug, "table rows", page.rows.length, 10, 16);
    range(page.slug, "better-choice points", page.betterChoice.length, 3, 8);
    if (!page.title.endsWith("| TeamShastra")) problems.push(`${page.slug}: title must end with "| TeamShastra"`);
  }
  expect(problems, problems.join("\n")).toEqual([]);
});

test("word counts, similarity and readability", () => {
  const references = [
    ...solutionPages.filter((p) => !rewrittenSlugs.has(p.slug)).map((p) => ({ id: p.slug, body: p.body })),
    ...partCPages.map((p) => ({ id: p.slug, body: p.body })),
    { id: "homeFaqs", body: homeFaqs.map((f) => `${f.question} ${f.answer}`).join("\n") },
    ...Object.entries(marketingPages).map(([key, page]) => ({
      id: `marketingPages.${key}`,
      body: [page.title, page.description, ...page.cards.map((c) => `${c.title} ${c.text}`), page.bannerText].join("\n")
    })),
    (() => {
      const hub = getContentForSlug("field-service-management-mumbai");
      return {
        id: "field-service-management-mumbai",
        body: hub ? [hub.heroLead, ...hub.whyParagraphs, ...hub.challenges, ...hub.faqs.map((f) => f.answer)].join("\n") : ""
      };
    })()
  ];

  const shingleCache = new Map<string, Set<string>>();
  const getShingles = (id: string, body: string) => {
    if (!shingleCache.has(id)) shingleCache.set(id, shingles(body));
    return shingleCache.get(id)!;
  };

  const failures: string[] = [];
  const rows: string[] = [];
  for (const page of freshPages) {
    const mine = getShingles(page.slug, page.body);
    let maxScore = 0;
    let partner = "";
    const others = [
      ...[...newPages, ...compareContentPages].filter((p) => p.slug !== page.slug).map((p) => ({ id: p.slug, body: p.body })),
      ...references.filter((r) => r.id !== page.slug)
    ];
    for (const other of others) {
      const score = jaccard(mine, getShingles(other.id, other.body));
      if (score > maxScore) {
        maxScore = score;
        partner = other.id;
      }
      if (score > 0.1) failures.push(`${page.slug} vs ${other.id}: ${score.toFixed(3)}`);
    }
    const count = words(page.body).length;
    const min = page.kind === "feature" || page.kind === "compare" ? 700 : page.kind === "industry" ? 650 : 0;
    if (count < min) failures.push(`${page.slug}: ${count} words (min ${min})`);
    rows.push(
      `${page.slug.padEnd(58)} ${String(count).padStart(5)}  ${maxScore.toFixed(3)} ${partner.padEnd(48)} ${fleschReadingEase(page.body).toFixed(0)}`
    );
  }
  console.log(`\n${"slug".padEnd(58)} words  maxSim partner${" ".repeat(42)}flesch\n${rows.join("\n")}`);
  expect(failures, failures.join("\n")).toEqual([]);
});

test("no sentence of eight or more words appears on two pages", () => {
  const owner = new Map<string, string>();
  const repeats: string[] = [];
  for (const page of freshPages) {
    for (const sentence of new Set(longSentences(page.body))) {
      const first = owner.get(sentence);
      if (first && first !== page.slug) repeats.push(`"${sentence}" on ${first} and ${page.slug}`);
      else owner.set(sentence, page.slug);
    }
  }
  expect(repeats, repeats.join("\n")).toEqual([]);
});

test("FAQ questions are unique across the whole site", () => {
  const seen = new Map<string, string>();
  const repeats: string[] = [];
  const add = (question: string, id: string, mustBeUnique: boolean) => {
    const key = words(question).join(" ");
    const first = seen.get(key);
    if (first && mustBeUnique) repeats.push(`"${question}" on ${first} and ${id}`);
    if (!first) seen.set(key, id);
  };
  homeFaqs.forEach((f) => add(f.question, "homeFaqs", false));
  pricingFaqs.forEach((f) => add(f.question, "pricingFaqs", false));
  for (const slug of solutions.filter((s) => !rewrittenSlugs.has(s.slug)).map((s) => s.slug)) {
    getContentForSlug(slug)?.faqs.forEach((f) => add(f.question, slug, false));
  }
  for (const page of freshPages) page.faqs.forEach((f) => add(f.question, page.slug, true));
  expect(repeats, repeats.join("\n")).toEqual([]);
});

test("primary keyword placement and density", () => {
  const problems: string[] = [];
  const pages = [
    ...featureLandings.map((p) => ({ id: p.slug, keyword: p.primaryKeyword, title: p.title, h1: p.h1, description: p.metaDescription, intro: p.intro, heading: p.keywordHeading, body: featureBodyText(p) })),
    ...industryLandings.map((p) => ({ id: p.slug, keyword: p.primaryKeyword, title: p.title, h1: p.h1, description: p.metaDescription, intro: p.intro, heading: p.keywordHeading, body: industryBodyText(p) })),
    // Comparison pages carry the keyword in the H1 rather than a separate H2.
    ...comparePages.map((p) => ({ id: p.slug, keyword: p.primaryKeyword, title: p.title, h1: p.h1, description: p.metaDescription, intro: p.summary, heading: p.h1, body: compareBodyText(p) }))
  ];
  for (const page of pages) {
    const has = (text: string) => countPhrase(text, page.keyword) > 0;
    if (!has(page.title)) problems.push(`${page.id}: keyword missing from title`);
    if (!has(page.h1)) problems.push(`${page.id}: keyword missing from H1`);
    if (!has(page.description)) problems.push(`${page.id}: keyword missing from description`);
    if (!has(firstWords(`${page.h1} ${page.intro}`, 100))) problems.push(`${page.id}: keyword missing from first 100 words`);
    if (!has(page.heading)) problems.push(`${page.id}: keyword missing from an H2`);
    const density = (countPhrase(page.body, page.keyword) * words(page.keyword).length) / words(page.body).length;
    if (density > 0.025) problems.push(`${page.id}: keyword density ${(density * 100).toFixed(2)}%`);
  }
  expect(problems, problems.join("\n")).toEqual([]);
});

test("banned claims never appear on new or rewritten pages", () => {
  const banned = ["illustrative", "trusted by", "#1", "best in india", "guaranteed", "100%", "background gps", "live tracking", "e-way bill", "e-invoice", "form 16", "aggregaterating"];
  const problems: string[] = [];
  const pageTexts = [
    ...featureLandings.map((p) => ({ id: p.slug, text: JSON.stringify(p), benefits: p.benefits })),
    ...industryLandings.map((p) => ({ id: p.slug, text: JSON.stringify(p), benefits: [] as string[] })),
    ...solutions.filter((s) => rewrittenSlugs.has(s.slug)).map((s) => ({ id: s.slug, text: JSON.stringify(s), benefits: s.benefits ?? [] }))
  ];
  for (const page of pageTexts) {
    const lower = page.text.toLowerCase();
    for (const phrase of banned) if (lower.includes(phrase)) problems.push(`${page.id}: "${phrase}"`);
    for (const benefit of page.benefits) if (benefit.includes("%")) problems.push(`${page.id}: % in benefit "${benefit}"`);
  }
  expect(problems, problems.join("\n")).toEqual([]);
});

test("every internal link target exists and every new page has three or more inbound links", () => {
  const problems: string[] = [];
  const solutionSlugs = new Set(solutions.map((s) => s.slug));
  const inbound = new Map<string, number>(newPages.map((p) => [`/${p.slug}`, 1])); // the hub link
  const bump = (href: string) => inbound.set(href, (inbound.get(href) ?? 0) + 1);

  for (const page of featureLandings) {
    for (const slug of page.relatedFeatures) {
      if (!getFeatureLanding(slug) || slug === page.slug) problems.push(`${page.slug}: bad related feature ${slug}`);
      else bump(`/features/${slug}`);
    }
    for (const slug of page.relatedIndustries) {
      const link = industryLink(slug);
      if (!link) problems.push(`${page.slug}: bad related industry ${slug}`);
      else bump(link.href);
    }
    if (page.existingSolutionLink) {
      const target = page.existingSolutionLink.href.slice(1);
      if (!solutionSlugs.has(target) && target !== "vyapar-alternative") problems.push(`${page.slug}: bad solution link ${target}`);
    }
    if (page.screenshot && !page.screenshot.src.startsWith("/screenshots/")) problems.push(`${page.slug}: screenshot outside /screenshots`);
  }
  for (const page of industryLandings) {
    for (const item of page.howTeamShastraHelps) {
      if (!getFeatureLanding(item.feature)) problems.push(`${page.slug}: bad feature ${item.feature}`);
      else bump(`/features/${item.feature}`);
    }
    for (const slug of page.relatedIndustries) {
      const link = industryLink(slug);
      if (!link || slug === page.slug) problems.push(`${page.slug}: bad related industry ${slug}`);
      else bump(link.href);
    }
  }
  for (const solution of solutions.filter((s) => rewrittenSlugs.has(s.slug))) {
    for (const item of solution.helps ?? []) {
      if (!getFeatureLanding(item.feature)) problems.push(`${solution.slug}: bad feature ${item.feature}`);
      else bump(`/features/${item.feature}`);
    }
  }
  for (const [href, count] of inbound) if (count < 3) problems.push(`${href}: only ${count} inbound links`);
  expect(problems, problems.join("\n")).toEqual([]);
});

test("alt text is unique for every screenshot used on new pages", () => {
  const alts = [...featureLandings, ...industryLandings].flatMap((p) => (p.screenshot ? [p.screenshot.alt] : []));
  expect(new Set(alts).size).toBe(alts.length);
  for (const alt of alts) expect(alt.length).toBeGreaterThan(30);
});
