import type { MetadataRoute } from "next";
import { marketingUrl, pages, siteContentUpdatedAt } from "@/lib/site";
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

  return [...staticPages, ...seoPages];
}
