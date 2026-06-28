export type CityTier = "tier-1" | "tier-2" | "tier-3";

export type UseCase = {
  title: string;
  industry: string;
  problem: string;
  solution: string;
  benefits: string[];
};

export type CaseStudy = {
  companyName: string;
  location: string;
  problem: string[];
  results: string[];
};

export type IndustryFocus = {
  name: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type CityProfile = {
  slug: string;
  name: string;
  state: string;
  tier: CityTier;
  localAreas: string[];
  nearbyCitySlugs: string[];
  metaDescription: string;
  challenges: string[];
  whyIntro: string;
  industries: IndustryFocus[];
  useCases: UseCase[];
  caseStudy: CaseStudy;
  faqs: FaqItem[];
};

export type FeatureProfile = {
  slug: string;
  name: string;
  shortName: string;
  headline: string;
  description: string;
  metaTitleSuffix: string;
  metaDescriptionTemplate: string;
  heroLead: string;
  focusAreas: string[];
  featureHighlights: Array<{ title: string; description: string }>;
};

export type SolutionPage = {
  slug: string;
  title: string;
  metaDescription: string;
  eyebrow: string;
  headline: string;
  lead: string;
  challenges: string[];
  industries: IndustryFocus[];
  useCases: UseCase[];
  caseStudy: CaseStudy;
  faqs: FaqItem[];
  relatedCitySlugs: string[];
  relatedSolutionSlugs: string[];
};

export type SeoPageContent = {
  slug: string;
  path: string;
  pageType: "city-feature" | "solution";
  title: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  heroLead: string;
  breadcrumbs: Array<{ label: string; href?: string }>;
  whyTitle: string;
  whyParagraphs: string[];
  challenges: string[];
  industries: IndustryFocus[];
  useCases: UseCase[];
  caseStudy: CaseStudy;
  featureHighlights: Array<{ title: string; description: string }>;
  benefits: string[];
  localAreas: string[];
  cityName?: string;
  citySlug?: string;
  featureSlug?: string;
  faqs: FaqItem[];
  internalLinks: Array<{ label: string; href: string }>;
};
