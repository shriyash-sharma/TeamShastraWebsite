import { guideBodyText } from "../lib/blog";
import type { Guide } from "../lib/blog/types";
import type { FeatureLanding, IndustryLanding } from "../lib/seo/landing/types";
import type { SolutionPage } from "../lib/seo/types";

/** Body copy of a feature page as written in the data source (no nav, footer or shared CTA). */
export function featureBodyText(page: FeatureLanding): string {
  return [
    page.h1,
    page.intro,
    page.keywordHeading,
    ...page.problem,
    ...page.solution,
    ...page.steps,
    page.whoFor,
    ...page.benefits,
    ...page.limits,
    ...page.faqs.flatMap((faq) => [faq.question, faq.answer])
  ].join("\n");
}

export function industryBodyText(page: IndustryLanding): string {
  return [
    page.h1,
    page.intro,
    page.keywordHeading,
    ...page.dayInTheLife,
    ...page.challenges,
    ...page.howTeamShastraHelps.map((item) => item.text),
    ...page.workflow,
    ...page.limits,
    ...page.faqs.flatMap((faq) => [faq.question, faq.answer])
  ].join("\n");
}

export function solutionBodyText(page: SolutionPage): string {
  return [
    page.headline,
    page.lead,
    ...(page.overview ?? []),
    ...page.challenges,
    ...page.industries.map((item) => item.description),
    ...page.useCases.flatMap((item) => [item.problem, item.solution, ...item.benefits]),
    ...(page.helps ?? []).map((item) => item.text),
    ...(page.benefits ?? []),
    ...page.faqs.flatMap((faq) => [faq.question, faq.answer])
  ].join("\n");
}

/** Guide copy without tables and FAQ questions: the sentences we check for template openers. */
export function guideProseText(guide: Guide): string {
  const noTable = <T extends { table?: unknown }>(block: T): T => ({ ...block, table: undefined });
  return guideBodyText({
    ...guide,
    sections: guide.sections.map((section) => ({ ...noTable(section), subsections: section.subsections?.map(noTable) })),
    faqs: guide.faqs.map((faq) => ({ question: "", answer: faq.answer }))
  });
}

export function words(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9₹\s-]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

export function shingles(text: string, size = 5): Set<string> {
  const list = words(text);
  const out = new Set<string>();
  for (let i = 0; i + size <= list.length; i += 1) out.add(list.slice(i, i + size).join(" "));
  return out;
}

export function jaccard(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 || b.size === 0) return 0;
  let shared = 0;
  for (const item of a) if (b.has(item)) shared += 1;
  return shared / (a.size + b.size - shared);
}

/** Sentences of at least `minWords` words, normalised for comparison. */
export function longSentences(text: string, minWords = 8): string[] {
  return text
    .split(/(?<=[.!?])\s+|\n+/)
    .map((sentence) => words(sentence).join(" "))
    .filter((sentence) => sentence.split(" ").length >= minWords);
}

function syllables(word: string): number {
  const cleaned = word.toLowerCase().replace(/[^a-z]/g, "");
  if (cleaned.length <= 3) return 1;
  const trimmed = cleaned.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "").replace(/^y/, "");
  const groups = trimmed.match(/[aeiouy]{1,2}/g);
  return Math.max(1, groups ? groups.length : 1);
}

export function fleschReadingEase(text: string): number {
  const sentenceCount = Math.max(1, text.split(/[.!?]+\s|\n+/).filter((s) => s.trim()).length);
  const list = text.split(/\s+/).filter((w) => /[a-z]/i.test(w));
  const syllableCount = list.reduce((sum, w) => sum + syllables(w), 0);
  return 206.835 - 1.015 * (list.length / sentenceCount) - 84.6 * (syllableCount / Math.max(1, list.length));
}

export function countPhrase(text: string, phrase: string): number {
  const haystack = ` ${words(text).join(" ")} `;
  const needle = ` ${words(phrase).join(" ")} `;
  let count = 0;
  let index = haystack.indexOf(needle);
  while (index !== -1) {
    count += 1;
    index = haystack.indexOf(needle, index + 1);
  }
  return count;
}

export function firstWords(text: string, count: number): string {
  return text.split(/\s+/).slice(0, count).join(" ");
}
