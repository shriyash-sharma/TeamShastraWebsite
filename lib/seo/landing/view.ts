import { getComparePage } from "../compare";
import type { FaqItem } from "../types";
import { featureLandingPath, getFeatureLanding } from "./features";
import { industryLandingPath, industryLink } from "./industries";
import type { FeatureLanding, IndustryLanding, LandingScreenshot } from "./types";

export type LandingLink = { href: string; label: string };

export type LandingSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  ordered?: boolean;
  /** Items that lead with a link, then an explanation written for this page. */
  linkedItems?: Array<{ href: string; label: string; text: string }>;
  trailingLink?: { before: string; link: LandingLink };
};

/** Everything the shared landing template needs, built from one data entry. */
export type LandingView = {
  path: string;
  eyebrow: string;
  name: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  lastUpdated: string;
  breadcrumbs: Array<{ label: string; href?: string }>;
  screenshot: LandingScreenshot | null;
  sections: LandingSection[];
  faqTitle: string;
  faqs: FaqItem[];
  related: Array<{ heading: string; links: LandingLink[] }>;
  featureList: string[];
};

function featureLinks(slugs: string[]): LandingLink[] {
  return slugs.flatMap((slug) => {
    const feature = getFeatureLanding(slug);
    return feature ? [{ href: featureLandingPath(slug), label: feature.name }] : [];
  });
}

function compareLinks(slugs: string[]): LandingLink[] {
  const links = slugs.flatMap((slug) => {
    const page = getComparePage(slug);
    return page ? [{ href: page.path, label: `TeamShastra vs ${page.shortName}` }] : [];
  });
  return [...links, { href: "/compare", label: "All comparisons" }];
}

function industryLinks(slugs: string[]): LandingLink[] {
  return slugs.flatMap((slug) => {
    const link = industryLink(slug);
    return link ? [link] : [];
  });
}

export function featureView(feature: FeatureLanding): LandingView {
  const path = featureLandingPath(feature.slug);
  return {
    path,
    eyebrow: "Feature guide",
    name: feature.name,
    title: feature.title,
    metaDescription: feature.metaDescription,
    h1: feature.h1,
    intro: feature.intro,
    lastUpdated: feature.lastUpdated,
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Features", href: "/features" }, { label: feature.name }],
    screenshot: feature.screenshot,
    sections: [
      { heading: "The problem", paragraphs: feature.problem },
      {
        heading: feature.keywordHeading,
        paragraphs: feature.solution,
        trailingLink: feature.existingSolutionLink
          ? { before: "For a wider view, see the", link: feature.existingSolutionLink }
          : undefined
      },
      { heading: "How it works in the app", list: feature.steps, ordered: true },
      { heading: "Who it is for", paragraphs: [feature.whoFor] },
      { heading: "Benefits", list: feature.benefits },
      { heading: "What it does not do", list: feature.limits }
    ],
    faqTitle: `Questions about ${feature.name.toLowerCase()}`,
    faqs: feature.faqs,
    related: [
      { heading: "Related features", links: [...featureLinks(feature.relatedFeatures), { href: "/features", label: "All features" }] },
      { heading: "Businesses that use it", links: [...industryLinks(feature.relatedIndustries), { href: "/industries", label: "All industries" }] },
      ...(feature.compareWith ? [{ heading: "Compare with other apps", links: compareLinks(feature.compareWith) }] : [])
    ],
    featureList: [feature.name]
  };
}

export function industryView(industry: IndustryLanding): LandingView {
  const path = industryLandingPath(industry.slug);
  const helps = industry.howTeamShastraHelps.flatMap((item) => {
    const feature = getFeatureLanding(item.feature);
    return feature ? [{ href: featureLandingPath(feature.slug), label: feature.name, text: item.text }] : [];
  });
  return {
    path,
    eyebrow: "Industry guide",
    name: industry.name,
    title: industry.title,
    metaDescription: industry.metaDescription,
    h1: industry.h1,
    intro: industry.intro,
    lastUpdated: industry.lastUpdated,
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: industry.name }],
    screenshot: industry.screenshot,
    sections: [
      { heading: "How the work really runs", paragraphs: industry.dayInTheLife },
      { heading: "Where it usually goes wrong", list: industry.challenges },
      { heading: industry.keywordHeading, linkedItems: helps },
      { heading: "From enquiry to payment", list: industry.workflow, ordered: true },
      { heading: "What it does not do", list: industry.limits }
    ],
    faqTitle: `Questions from ${industry.name.toLowerCase()} businesses`,
    faqs: industry.faqs,
    related: [
      { heading: "Features used most", links: [...helps.map(({ href, label }) => ({ href, label })), { href: "/features", label: "All features" }] },
      { heading: "Similar businesses", links: [...industryLinks(industry.relatedIndustries), { href: "/industries", label: "All industries" }] }
    ],
    featureList: helps.map((item) => item.label)
  };
}
