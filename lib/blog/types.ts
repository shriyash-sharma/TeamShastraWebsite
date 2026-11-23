import type { FaqItem } from "../seo/types";

/** Prompt 13 groups first, then the Prompt 17 groups. */
export type GuideCategory = "salary" | "gst" | "service" | "start" | "money" | "team" | "jobs" | "grow" | "templates";

export type GuideTable = {
  caption: string;
  head: string[];
  rows: string[][];
};

export type GuideBlock = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  ordered?: boolean;
  table?: GuideTable;
  /** Paragraphs shown after the list or table. */
  after?: string[];
};

/** An H2 section. `id` is the anchor used by the table of contents. */
export type GuideSection = GuideBlock & {
  id: string;
  subsections?: GuideBlock[];
};

export type GuideSource = { label: string; url: string };

export type Guide = {
  slug: string;
  category: GuideCategory;
  title: string;
  metaDescription: string;
  h1: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  datePublished: string;
  dateModified: string;
  /** Quick answer at the top: two or three sentences. */
  summary: string;
  sections: GuideSection[];
  /** "How TeamShastra helps" box: at most about 120 words. */
  helps: string;
  faqs: FaqItem[];
  /** Official pages read on `sourcesChecked`. Every legal or tax statement points at one of these. */
  sources: GuideSource[];
  sourcesChecked: string;
  /** Tax, labour or legal topics carry the disclaimer. */
  legal: boolean;
  /** Prompt 17 guides: a sentence written for this guide, shown after the shared disclaimer sentence. */
  disclaimerNote?: string;
  relatedFeatures: string[];
  relatedIndustries: string[];
  /** Other marketing pages (by solution slug) worth a link from the help box. */
  relatedSolutions?: string[];
  relatedGuides: string[];
};
