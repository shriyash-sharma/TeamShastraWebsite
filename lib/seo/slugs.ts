import { cities } from "./cities";
import { localSeoFeatureSlugs } from "./features";
import { solutions } from "./solutions";

export type SlugType = "city-feature" | "solution" | "unknown";

export type ParsedSlug =
  | { type: "city-feature"; featureSlug: string; citySlug: string; slug: string }
  | { type: "solution"; solutionSlug: string; slug: string }
  | { type: "unknown"; slug: string };

const citySlugs = new Set(cities.map((c) => c.slug));
// Only features with genuine city-level search intent get /[feature]-[city] pages.
const featureSlugs = [...localSeoFeatureSlugs].sort((a, b) => b.length - a.length);
const solutionSlugs = new Set(solutions.map((s) => s.slug));

export function buildCityFeatureSlug(featureSlug: string, citySlug: string): string {
  return `${featureSlug}-${citySlug}`;
}

export function parseSlug(slug: string): ParsedSlug {
  if (solutionSlugs.has(slug)) {
    return { type: "solution", solutionSlug: slug, slug };
  }

  for (const featureSlug of featureSlugs) {
    const prefix = `${featureSlug}-`;
    if (slug.startsWith(prefix)) {
      const citySlug = slug.slice(prefix.length);
      if (citySlugs.has(citySlug)) {
        return { type: "city-feature", featureSlug, citySlug, slug };
      }
    }
  }

  return { type: "unknown", slug };
}

export function getAllSeoSlugs(): string[] {
  const cityFeatureSlugs = localSeoFeatureSlugs.flatMap((featureSlug) =>
    cities.map((c) => buildCityFeatureSlug(featureSlug, c.slug))
  );
  return [...cityFeatureSlugs, ...solutions.map((s) => s.slug)];
}

export function getCityFeatureSlugsForCity(citySlug: string): string[] {
  return localSeoFeatureSlugs.map((featureSlug) => buildCityFeatureSlug(featureSlug, citySlug));
}

export function getCityFeatureSlugsForFeature(featureSlug: string): string[] {
  return cities.map((c) => buildCityFeatureSlug(featureSlug, c.slug));
}

/** Reserved slugs that must never be handled by [slug] dynamic route */
export const reservedSlugs = new Set([
  "features",
  "industries",
  "pricing",
  "blog",
  "about",
  "contact",
  "privacy",
  "privacy-policy",
  "account-deletion",
  "terms",
  "cookies",
  "locations",
  "solutions",
  "faq",
  "vyapar-alternative"
]);

export function isSeoSlug(slug: string): boolean {
  if (reservedSlugs.has(slug)) return false;
  const parsed = parseSlug(slug);
  return parsed.type !== "unknown";
}
