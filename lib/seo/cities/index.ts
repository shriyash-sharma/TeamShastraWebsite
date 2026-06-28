import { tier1Cities } from "./tier1-part1";
import { tier1CitiesPart2 } from "./tier1-part2";
import { tier2Cities } from "./tier2-part1";
import { tier2CitiesPart2 } from "./tier2-part2";
import { tier2CitiesPart3 } from "./tier2-part3";
import type { CityProfile } from "../types";

export const cities: CityProfile[] = [
  ...tier1Cities,
  ...tier1CitiesPart2,
  ...tier2Cities,
  ...tier2CitiesPart2,
  ...tier2CitiesPart3
];

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
