import { tier1Cities, standardBenefits } from "./tier1";
import { tier2Cities } from "./tier2";
import type { CityProfile } from "../types";

export { standardBenefits };

export const cities: CityProfile[] = [...tier1Cities, ...tier2Cities];

export const cityMap = Object.fromEntries(cities.map((c) => [c.slug, c])) as Record<string, CityProfile>;

export function getCity(slug: string): CityProfile | undefined {
  return cityMap[slug];
}

export function getCityByName(name: string): CityProfile | undefined {
  return cities.find((c) => c.name.toLowerCase() === name.toLowerCase());
}

export const tier1CitySlugs = cities.filter((c) => c.tier === "tier-1").map((c) => c.slug);
export const tier2CitySlugs = cities.filter((c) => c.tier === "tier-2").map((c) => c.slug);
export const tier3CitySlugs = cities.filter((c) => c.tier === "tier-3").map((c) => c.slug);
