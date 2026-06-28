import { getCity } from "./cities";
import { featureMap } from "./features";
import { getSolution } from "./solutions";
import { buildCityFeatureSlug } from "./slugs";
import { standardBenefits } from "./cities/tier1-part1";
import type { FeatureProfile, SeoPageContent, SolutionPage, CityProfile } from "./types";

const platformFeatures = [
  { title: "Attendance & GPS", description: "Location-verified check-in and punch-out for field staff, guards, and site workers with geofencing support." },
  { title: "Geofencing", description: "Define approved work zones at customer sites, warehouses, factories, and project locations." },
  { title: "Leave & shift management", description: "Plan rosters, manage leave approvals, and ensure dispatchers know who is available." },
  { title: "Field technician tracking", description: "Real-time visibility into technician location, job status, and daily activity." },
  { title: "Customer management", description: "Maintain customer site history, contacts, open issues, and AMC contract details." },
  { title: "Work orders", description: "Create, assign, track, and close digital work orders with status updates for managers and customers." },
  { title: "Preventive maintenance", description: "Schedule recurring PM visits for AMC contracts, equipment, and facility maintenance." },
  { title: "Digital service reports", description: "Structured checklists, photo evidence, parts usage, and notes replace paper job sheets." },
  { title: "Customer signatures", description: "Capture digital sign-off at site for installation, repair, and maintenance jobs." },
  { title: "Photos & offline sync", description: "Attach before/after photos; field teams work offline and sync when connectivity returns." },
  { title: "Notifications", description: "Alert technicians and supervisors when jobs are assigned, delayed, or completed." },
  { title: "Reports & analytics", description: "Measure completion rates, utilization, SLA performance, and operational throughput." },
  { title: "Role-based permissions", description: "Control access by team, branch, or business unit for supervisors and managers." },
  { title: "Multi-company support", description: "Manage multiple branches, clients, or business units from one account." },
  { title: "PWA, Android & web", description: "Mobile-first workflows for field staff on Android and web, with PWA support." }
];

function expandWhyParagraphs(city: CityProfile, feature: FeatureProfile): string[] {
  const areas = city.localAreas.slice(0, 5).join(", ");
  const industryNames = city.industries.slice(0, 4).map((i) => i.name.toLowerCase()).join(", ");

  return [
    city.whyIntro,
    `${feature.name} is especially relevant for ${city.name} because local businesses face distinct operational pressures. ${city.challenges[0]} ${city.challenges[1]}`,
    `Across ${areas}, and other business zones in ${city.state}, companies in ${industryNames} depend on reliable field coordination. TeamShastra replaces phone calls, WhatsApp threads, and paper registers with a single platform for ${feature.focusAreas.join(", ").toLowerCase()}.`,
    `Whether you operate a small service company with 15 technicians or a multi-site facility management firm with hundreds of staff, TeamShastra scales from pilot deployment in one zone to full rollout across ${city.name} and nearby cities. Most ${city.name} businesses begin with a 1–2 week pilot and expand as teams see measurable improvements in attendance accuracy, job closure rates, and customer satisfaction.`
  ];
}

function expandIndustryParagraph(industry: { name: string; description: string }, city: CityProfile, feature: FeatureProfile): string {
  return `**${industry.name}** — ${industry.description} For these operations, TeamShastra's ${feature.shortName.toLowerCase()} capabilities help teams in ${city.name} manage attendance, assign work, and produce audit-ready service records without adding administrative overhead.`;
}

function expandUseCaseParagraph(useCase: CityProfile["useCases"][0], city: CityProfile): string {
  return `**${useCase.title}** (${useCase.industry}): ${useCase.problem} With TeamShastra: ${useCase.solution} Key benefits include ${useCase.benefits.join(", ").toLowerCase()}.`;
}

function buildInternalLinks(
  city: CityProfile,
  feature: FeatureProfile,
  type: "city-feature" | "solution",
  solution?: SolutionPage
): Array<{ label: string; href: string }> {
  const links: Array<{ label: string; href: string }> = [
    { label: "All locations", href: "/locations" },
    { label: "All solutions", href: "/solutions" },
    { label: "Features", href: "/features" },
    { label: "Industries", href: "/industries" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" }
  ];

  if (type === "city-feature") {
    links.push({ label: `Field service management in ${city.name}`, href: `/${buildCityFeatureSlug("field-service-management", city.slug)}` });
    links.push({ label: `Attendance management in ${city.name}`, href: `/${buildCityFeatureSlug("attendance-management", city.slug)}` });
    links.push({ label: `Work order management in ${city.name}`, href: `/${buildCityFeatureSlug("work-order-management", city.slug)}` });
    links.push({ label: `Employee tracking in ${city.name}`, href: `/${buildCityFeatureSlug("employee-tracking", city.slug)}` });
    links.push({ label: `Service management in ${city.name}`, href: `/${buildCityFeatureSlug("service-management", city.slug)}` });

    if (feature.slug !== "workforce-management") {
      links.push({ label: `Workforce management in ${city.name}`, href: `/${buildCityFeatureSlug("workforce-management", city.slug)}` });
    }

    links.push({ label: "Field service management software India", href: "/field-service-management-software-india" });
    links.push({ label: "Attendance management software India", href: "/attendance-management-software-india" });
    links.push({ label: "Technician management software", href: "/technician-management-software" });
    links.push({ label: "Digital work orders", href: "/digital-work-orders" });
    links.push({ label: "Facility management software", href: "/facility-management-software" });

    for (const nearbySlug of city.nearbyCitySlugs.slice(0, 4)) {
      const nearby = getCity(nearbySlug);
      if (nearby) {
        links.push({
          label: `${feature.name} in ${nearby.name}`,
          href: `/${buildCityFeatureSlug(feature.slug, nearbySlug)}`
        });
      }
    }
  }

  if (type === "solution" && solution) {
    for (const citySlug of solution.relatedCitySlugs) {
      const c = getCity(citySlug);
      if (c) {
        links.push({ label: `Workforce management in ${c.name}`, href: `/${buildCityFeatureSlug("workforce-management", citySlug)}` });
        links.push({ label: `Field service in ${c.name}`, href: `/${buildCityFeatureSlug("field-service-management", citySlug)}` });
      }
    }
    for (const solSlug of solution.relatedSolutionSlugs) {
      const sol = getSolution(solSlug);
      if (sol) links.push({ label: sol.title, href: `/${sol.slug}` });
    }
  }

  return links;
}

export function buildCityFeatureContent(featureSlug: string, citySlug: string): SeoPageContent | null {
  const city = getCity(citySlug);
  const feature = featureMap[featureSlug];
  if (!city || !feature) return null;

  const slug = buildCityFeatureSlug(featureSlug, citySlug);
  const path = `/${slug}`;
  const title = `${feature.headline} in ${city.name} | TeamShastra`;
  const metaDescription = feature.metaDescriptionTemplate.replace("{city}", city.name);

  const featureHighlights = [...feature.featureHighlights, ...platformFeatures.slice(0, 6)];

  const expandedFaqs = [
    ...city.faqs,
    {
      question: `How does TeamShastra help with ${feature.name.toLowerCase()} in ${city.name}?`,
      answer: `TeamShastra provides ${feature.focusAreas.join(", ").toLowerCase()} specifically designed for ${city.name} businesses managing distributed teams across ${city.localAreas.slice(0, 3).join(", ")}, and surrounding areas.`
    },
    {
      question: `What industries in ${city.name} use TeamShastra for ${feature.shortName.toLowerCase()}?`,
      answer: `Businesses in ${city.industries.slice(0, 4).map((i) => i.name.toLowerCase()).join(", ")} across ${city.name} use TeamShastra for field workforce coordination.`
    },
    {
      question: "Does TeamShastra support multiple branches?",
      answer: `Yes. Businesses operating across multiple zones in ${city.name} and nearby cities can manage branches, teams, and territories from one account with role-based access.`
    }
  ];

  return {
    slug,
    path,
    pageType: "city-feature",
    title,
    metaDescription,
    eyebrow: `${feature.shortName} · ${city.name}`,
    h1: `${feature.headline} in ${city.name}`,
    heroLead: `${feature.heroLead.replace("growing businesses", `growing businesses in ${city.name}`)}`,
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Locations", href: "/locations" },
      { label: city.name, href: `/${buildCityFeatureSlug("workforce-management", citySlug)}` },
      { label: feature.shortName }
    ],
    whyTitle: `Why businesses in ${city.name} need TeamShastra`,
    whyParagraphs: expandWhyParagraphs(city, feature),
    challenges: city.challenges,
    industries: city.industries,
    useCases: city.useCases,
    caseStudy: city.caseStudy,
    featureHighlights,
    benefits: standardBenefits,
    localAreas: city.localAreas,
    cityName: city.name,
    citySlug,
    featureSlug,
    faqs: expandedFaqs,
    internalLinks: buildInternalLinks(city, feature, "city-feature")
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
    { question: "Can I start with a free trial?", answer: "TeamShastra is available for public beta testing. Sign up to create a test workspace and evaluate workflows before the planned production release." }
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
      `${solution.challenges.slice(2).join(" ")} TeamShastra addresses these challenges with GPS attendance, digital work orders, mobile service reports, and real-time visibility — built for Indian field operations from day one.`,
      "Whether you operate in Mumbai, Delhi, Bengaluru, Pune, or emerging industrial cities like Indore, Coimbatore, and Surat, TeamShastra provides a consistent platform that scales from a single branch to multi-city operations."
    ],
    challenges: solution.challenges,
    industries: solution.industries,
    useCases: solution.useCases,
    caseStudy: solution.caseStudy,
    featureHighlights: platformFeatures,
    benefits: standardBenefits,
    localAreas: [],
    faqs: expandedFaqs,
    internalLinks: buildInternalLinks(
      getCity("mumbai")!,
      featureMap["workforce-management"],
      "solution",
      solution
    )
  };
}

export function getContentForSlug(slug: string): SeoPageContent | null {
  if (slug.includes("-") && !slug.endsWith("-india")) {
    for (const featureSlug of Object.keys(featureMap)) {
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
    `**${ind.name}** — ${ind.description} TeamShastra helps ${cityName} ${ind.name.toLowerCase()} operations with ${featureName.toLowerCase()} tools for attendance, dispatch, and documented service delivery.`
  );
}

export function useCaseParagraphs(content: SeoPageContent): string[] {
  return content.useCases.map((uc) => expandUseCaseParagraph(uc, getCity(content.citySlug ?? "mumbai") ?? ({} as CityProfile)));
}
