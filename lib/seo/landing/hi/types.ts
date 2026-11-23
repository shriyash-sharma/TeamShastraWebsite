import type { FaqItem } from "../../types";

export type HindiLink = { href: string; label: string; text: string };

export type HindiSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  ordered?: boolean;
  /** Cards that link to other pages, each with a one-line reason. */
  links?: HindiLink[];
};

/** One page under /hi. Every entry maps 1:1 to an English page (`enPath`). */
export type HindiPage = {
  slug: string;
  path: string;
  enPath: string;
  kind: "home" | "feature" | "industry" | "solution";
  /** Short name for breadcrumbs and related links. */
  name: string;
  lastUpdated: string;
  /** The Hindi or Hinglish phrase this page is written for. */
  primaryKeyword: string;
  title: string;
  metaDescription: string;
  h1: string;
  eyebrow: string;
  intro: string;
  sections: HindiSection[];
  faqs: FaqItem[];
  /** Slugs of other Hindi pages to link at the bottom. */
  related: string[];
  /** English feature names for SoftwareApplication.featureList (same facts as the English page). */
  featureList: string[];
};
