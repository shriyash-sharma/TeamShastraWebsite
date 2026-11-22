import type { CaseStudy, CityLocalContext, CityProfile, CityTier, FaqItem, IndustryFocus, UseCase } from "../types";

type CityInput = {
  slug: string;
  name: string;
  state: string;
  tier: CityTier;
  localAreas: string[];
  nearbyCitySlugs: string[];
  metaDescription: string;
  whyIntro: string;
  intro: string[];
  localContext: CityLocalContext;
  /** Operating problems specific to this city — no invented statistics. */
  challenges: string[];
  /** The kinds of local work our target industries do in this city. */
  industries: IndustryFocus[];
  useCases: UseCase[];
  caseStudy: CaseStudy;
  faqs: FaqItem[];
};

/**
 * Every city page is written by hand so the copy actually differs from city to city:
 * local work, GST place of supply, Professional Tax, language, and season. Only product
 * facts that are true everywhere are shared, as two closing FAQs.
 */
const sharedFaqs: FaqItem[] = [
  { question: "Does TeamShastra track technicians all day with GPS?", answer: "No. Location is only captured at check-in and check-out, never in the background." },
  { question: "Does TeamShastra file GST returns on the government portal?", answer: "No. It creates GST invoices and CA-ready GSTR-1, GSTR-3B, and GSTR-9 exports. Your CA files returns on the GST portal." }
];

export function buildCityProfile(input: CityInput): CityProfile {
  return {
    ...input,
    caseStudy: { ...input.caseStudy, companyName: `${input.caseStudy.companyName} (illustrative example)` },
    faqs: [...input.faqs, ...sharedFaqs]
  };
}
