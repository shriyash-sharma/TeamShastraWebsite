import type { FaqItem } from "../types";

export type FeatureGroup =
  | "Jobs & field work"
  | "Team & attendance"
  | "Salary"
  | "Billing & GST"
  | "Stock, purchases & money"
  | "Customers"
  | "App & setup";

/** A real screenshot from public/screenshots with an alt written for this page only. */
export type LandingScreenshot = {
  src: string;
  alt: string;
};

/** One /features/<slug> page. Every string is written for this page only. */
export type FeatureLanding = {
  slug: string;
  /** Short name for breadcrumbs, hub cards, and related links. */
  name: string;
  group: FeatureGroup;
  /** One line for the /features hub. */
  hubSummary: string;
  lastUpdated: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  /** H2 that carries the primary keyword. */
  keywordHeading: string;
  problem: string[];
  solution: string[];
  steps: string[];
  whoFor: string;
  benefits: string[];
  limits: string[];
  faqs: FaqItem[];
  relatedFeatures: string[];
  relatedIndustries: string[];
  screenshot: LandingScreenshot | null;
  existingSolutionLink?: { href: string; label: string };
  /** Slugs from lib/seo/compare.ts, shown as "Compare with other apps" links. */
  compareWith?: string[];
  /** Up to two slugs from lib/blog, shown as "Related guides" links. */
  relatedGuides?: string[];
};

/** One /industries/<slug> page. */
export type IndustryLanding = {
  slug: string;
  name: string;
  hubSummary: string;
  lastUpdated: string;
  primaryKeyword: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  keywordHeading: string;
  dayInTheLife: string[];
  challenges: string[];
  howTeamShastraHelps: Array<{ feature: string; text: string }>;
  workflow: string[];
  limits: string[];
  faqs: FaqItem[];
  relatedIndustries: string[];
  /** Up to two slugs from lib/blog, shown as "Related guides" links. */
  relatedGuides?: string[];
  screenshot: LandingScreenshot | null;
};
