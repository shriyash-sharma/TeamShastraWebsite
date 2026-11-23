import type { MetadataRoute } from "next";
import { hreflangLanguages, marketingUrl, pages, siteContentUpdatedAt } from "@/lib/site";
import { featureLandingPath, featureLandings } from "@/lib/seo/landing/features";
import { industryLandingPath, industryLandings } from "@/lib/seo/landing/industries";
import { compareHub, comparePages } from "@/lib/seo/compare";
import { hindiPages } from "@/lib/seo/landing/hi";
import { hindiPathFor } from "@/lib/seo/landing/hi/paths";
import { getAllSeoSlugs } from "@/lib/seo/slugs";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(siteContentUpdatedAt);

  const staticPages: MetadataRoute.Sitemap = pages.map((page) => ({
    url: `${marketingUrl}${page.path === "/" ? "" : page.path}`,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority
  }));

  const seoPages: MetadataRoute.Sitemap = getAllSeoSlugs().map((slug) => ({
    url: `${marketingUrl}/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: slug.endsWith("-india") ? 0.8 : 0.75
  }));

  const landingPages: MetadataRoute.Sitemap = [
    ...featureLandings.map((page) => ({ path: featureLandingPath(page.slug), lastUpdated: page.lastUpdated })),
    ...industryLandings.map((page) => ({ path: industryLandingPath(page.slug), lastUpdated: page.lastUpdated }))
  ].map((page) => ({
    url: `${marketingUrl}${page.path}`,
    lastModified: new Date(page.lastUpdated),
    changeFrequency: "monthly" as const,
    priority: 0.8
  }));

  // /vyapar-alternative is already in `pages`; the hub and the /compare/* pages are added here.
  const comparisonPages: MetadataRoute.Sitemap = [compareHub, ...comparePages.filter((page) => page.path.startsWith("/compare/"))].map(
    (page) => ({
      url: `${marketingUrl}${page.path}`,
      lastModified: new Date(page.lastChecked),
      changeFrequency: "monthly" as const,
      priority: 0.7
    })
  );

  const hindi: MetadataRoute.Sitemap = hindiPages.map((page) => ({
    url: `${marketingUrl}${page.path}`,
    lastModified: new Date(page.lastUpdated),
    changeFrequency: "monthly" as const,
    priority: page.kind === "home" ? 0.8 : 0.7
  }));

  // English pages with a Hindi version list both as hreflang alternates (xhtml:link), as do the Hindi pages.
  return [...staticPages, ...seoPages, ...landingPages, ...comparisonPages, ...hindi].map((entry) => {
    const path = entry.url.slice(marketingUrl.length) || "/";
    const hindiPage = hindiPages.find((page) => page.path === path);
    const englishPath = hindiPage ? hindiPage.enPath : path;
    const hindiPath = hindiPage ? hindiPage.path : hindiPathFor(path);
    return hindiPath ? { ...entry, alternates: { languages: hreflangLanguages(englishPath, hindiPath) } } : entry;
  });
}
