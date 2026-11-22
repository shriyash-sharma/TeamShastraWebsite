import { getCity, standardBenefits } from "./cities";
import { cityHubFeatureSlug, featureMap, localSeoFeatureSlugs, retiredCityFeatureSlugs } from "./features";
import { getSolution } from "./solutions";
import { buildCityFeatureSlug } from "./slugs";
import { dedupeFeatureHighlights, platformFeatures } from "./feature-highlights";
import { pricingSummary } from "@/lib/site";
import type { SeoPageContent, CityProfile } from "./types";

function expandUseCaseParagraph(useCase: CityProfile["useCases"][0], city: CityProfile): string {
  return `**${useCase.title}** (${useCase.industry}): ${useCase.problem} With TeamShastra: ${useCase.solution} Key benefits include ${useCase.benefits.join(", ").toLowerCase()}.`;
}

/** The city hub page for a city — the only per-city page we publish. */
export function cityHubPath(citySlug: string): string {
  return `/${buildCityFeatureSlug(cityHubFeatureSlug, citySlug)}`;
}

const indiaSolutionLinks = [
  { label: "Field service management software India", href: "/field-service-management-software-india" },
  { label: "GST invoicing software India", href: "/gst-invoicing-software-india" },
  { label: "Attendance management software India", href: "/attendance-management-software-india" },
  { label: "Field expense software India", href: "/field-expense-software-india" }
];

const coreLinks = [
  { label: "All locations", href: "/locations" },
  { label: "All solutions", href: "/solutions" },
  { label: "Features", href: "/features" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" }
];

export function buildCityFeatureContent(featureSlug: string, citySlug: string): SeoPageContent | null {
  const city = getCity(citySlug);
  const feature = featureMap[featureSlug];
  if (!city || !feature || featureSlug !== cityHubFeatureSlug) return null;

  const slug = buildCityFeatureSlug(featureSlug, citySlug);
  const [area1, area2, area3] = city.localAreas;

  const nearbyLinks = city.nearbyCitySlugs.flatMap((nearbySlug) => {
    const nearby = getCity(nearbySlug);
    return nearby ? [{ label: `Field service software in ${nearby.name}`, href: cityHubPath(nearbySlug) }] : [];
  });

  return {
    slug,
    path: `/${slug}`,
    pageType: "city-feature",
    title: `${feature.headline} in ${city.name} | TeamShastra`,
    metaDescription: city.metaDescription,
    eyebrow: `${feature.shortName} · ${city.name}`,
    h1: `Field Service Management Software in ${city.name}`,
    heroLead: `For ${city.name} service teams working across ${area1}, ${area2}, and ${area3}: assign jobs, track attendance, raise ${city.state} GST invoices, and pay staff from one Android and web app.`,
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Locations", href: "/locations" },
      { label: city.name }
    ],
    whyTitle: `Field service in ${city.name}`,
    whyParagraphs: [city.whyIntro, ...city.intro],
    challenges: city.challenges,
    industries: city.industries,
    useCases: city.useCases,
    caseStudy: city.caseStudy,
    featureHighlights: retiredCityFeatureSlugs.map((slug) => ({
      title: `${featureMap[slug].headline} in ${city.name}`,
      description: featureMap[slug].description
    })),
    benefits: [],
    localAreas: city.localAreas,
    cityName: city.name,
    citySlug,
    stateName: city.state,
    localContext: city.localContext,
    featureSlug,
    faqs: city.faqs,
    internalLinks: [...nearbyLinks, ...coreLinks, ...indiaSolutionLinks]
  };
}

export function buildSolutionContent(solutionSlug: string): SeoPageContent | null {
  const solution = getSolution(solutionSlug);
  if (!solution) return null;

  const path = `/${solution.slug}`;

  const expandedFaqs = [
    ...solution.faqs,
    { question: "Is TeamShastra available across India?", answer: "Yes. TeamShastra supports businesses in metro cities, tier-2 industrial towns, and regional hubs with multi-branch management and offline-capable mobile apps." },
    { question: "How long does implementation take?", answer: "Most businesses begin with a pilot team in 1–2 weeks and expand to additional branches or cities over 4–8 weeks depending on team size." },
    { question: "Does TeamShastra work on Android?", answer: "Yes. TeamShastra offers Android and web access with PWA support for field staff." },
    { question: "Can I start with a free trial?", answer: `Yes. The Starter plan is free, and the Growth plan includes a ${pricingSummary.trial}. Sign up at app.teamshastra.com to create a company workspace.` }
  ];

  return {
    slug: solution.slug,
    path,
    pageType: "solution",
    title: `${solution.title} | TeamShastra`,
    metaDescription: solution.metaDescription,
    eyebrow: solution.eyebrow,
    h1: solution.headline,
    heroLead: solution.lead,
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Solutions", href: "/solutions" },
      { label: solution.eyebrow }
    ],
    whyTitle: `Challenges ${solution.eyebrow.toLowerCase()} teams face in India`,
    whyParagraphs: [
      solution.lead,
      `Indian businesses across metros and tier-2 cities face common operational challenges that paper-based and phone-driven coordination cannot solve at scale. ${solution.challenges.slice(0, 2).join(" ")}`,
      `${solution.challenges.slice(2).join(" ")} TeamShastra addresses these challenges with jobs, punch-time attendance, GST invoices, field expenses, digital work orders, and mobile reports — built for Indian field operations from day one.`,
      "Whether you operate in Mumbai, Delhi, Bengaluru, Pune, or emerging industrial cities like Indore, Coimbatore, and Surat, TeamShastra provides a consistent platform that scales from a single branch to multi-city operations."
    ],
    challenges: solution.challenges,
    industries: solution.industries,
    useCases: solution.useCases,
    caseStudy: solution.caseStudy,
    featureHighlights: dedupeFeatureHighlights(platformFeatures),
    benefits: standardBenefits,
    localAreas: [],
    faqs: expandedFaqs,
    internalLinks: [
      ...solution.relatedCitySlugs.flatMap((citySlug) => {
        const c = getCity(citySlug);
        return c ? [{ label: `Field service software in ${c.name}`, href: cityHubPath(citySlug) }] : [];
      }),
      ...solution.relatedSolutionSlugs.flatMap((solSlug) => {
        const sol = getSolution(solSlug);
        return sol ? [{ label: sol.title, href: `/${sol.slug}` }] : [];
      }),
      ...coreLinks
    ]
  };
}

export function getContentForSlug(slug: string): SeoPageContent | null {
  if (slug.includes("-") && !slug.endsWith("-india")) {
    for (const featureSlug of localSeoFeatureSlugs) {
      const prefix = `${featureSlug}-`;
      if (slug.startsWith(prefix)) {
        const citySlug = slug.slice(prefix.length);
        return buildCityFeatureContent(featureSlug, citySlug);
      }
    }
  }

  const solutionContent = buildSolutionContent(slug);
  if (solutionContent) return solutionContent;

  return null;
}

export function industryParagraphs(content: SeoPageContent): string[] {
  const cityName = content.cityName ?? "India";
  const featureName = content.featureSlug ? featureMap[content.featureSlug]?.shortName ?? "workforce" : "workforce";
  return content.industries.map((ind) =>
    `**${ind.name}** — ${ind.description} TeamShastra helps ${cityName} ${ind.name.toLowerCase()} operations with ${featureName.toLowerCase()} tools for jobs, attendance, GST invoices, and documented service delivery.`
  );
}

export function useCaseParagraphs(content: SeoPageContent): string[] {
  return content.useCases.map((uc) => expandUseCaseParagraph(uc, getCity(content.citySlug ?? "mumbai") ?? ({} as CityProfile)));
}
