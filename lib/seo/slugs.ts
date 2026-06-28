import { cities } from "./cities";
import { features } from "./features";
import { solutions } from "./solutions";

export type SlugType = "city-feature" | "solution" | "unknown";

export type ParsedSlug =
  | { type: "city-feature"; featureSlug: string; citySlug: string; slug: string }
  | { type: "solution"; solutionSlug: string; slug: string }
  | { type: "unknown"; slug: string };

const citySlugs = new Set(cities.map((c) => c.slug));
const featureSlugs = new Set(features.map((f) => f.slug));
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
  const cityFeatureSlugs = features.flatMap((f) =>
    cities.map((c) => buildCityFeatureSlug(f.slug, c.slug))
  );
  return [...cityFeatureSlugs, ...solutions.map((s) => s.slug)];
}

export function getCityFeatureSlugsForCity(citySlug: string): string[] {
  return features.map((f) => buildCityFeatureSlug(f.slug, citySlug));
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
  "locations",
  "solutions"
]);

export function isSeoSlug(slug: string): boolean {
  if (reservedSlugs.has(slug)) return false;
  const parsed = parseSlug(slug);
  return parsed.type !== "unknown";
}
