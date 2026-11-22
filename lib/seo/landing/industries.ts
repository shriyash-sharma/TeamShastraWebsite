import { industriesPart1 } from "./industries/part1";
import { industriesPart2 } from "./industries/part2";
import type { IndustryLanding } from "./types";

/** Every /industries/<slug> page, in hub order. */
export const industryLandings: IndustryLanding[] = [...industriesPart1, ...industriesPart2];

/**
 * Industry solution pages rewritten in place (Part C). They keep their root URLs and are
 * linked from the /industries hub and from related-industry links.
 */
export const rewrittenIndustrySolutions = [
  { slug: "hvac-service-management", name: "AC & HVAC service" },
  { slug: "electrician-workforce-management", name: "Electricians & electrical contractors" },
  { slug: "plumbing-service-software", name: "Plumbers & plumbing contractors" },
  { slug: "solar-installation-workforce-software", name: "Solar installers" },
  { slug: "facility-management-software", name: "Facility management" },
  { slug: "maintenance-management-software", name: "Equipment maintenance" }
] as const;

const industryLandingMap = new Map(industryLandings.map((industry) => [industry.slug, industry]));

export function getIndustryLanding(slug: string): IndustryLanding | undefined {
  return industryLandingMap.get(slug);
}

export function industryLandingPath(slug: string): string {
  return `/industries/${slug}`;
}

/** Resolves a related-industry slug to a new /industries page or a rewritten root solution page. */
export function industryLink(slug: string): { href: string; label: string } | null {
  const landing = industryLandingMap.get(slug);
  if (landing) return { href: industryLandingPath(slug), label: landing.name };
  const rewritten = rewrittenIndustrySolutions.find((item) => item.slug === slug);
  return rewritten ? { href: `/${rewritten.slug}`, label: rewritten.name } : null;
}
