import type { MetadataRoute } from "next";
import { marketingUrl, pages } from "@/lib/site";
import { getAllSeoSlugs } from "@/lib/seo/slugs";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = pages.map((page) => ({
    url: `${marketingUrl}${page.path === "/" ? "" : page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority
  }));

  const indexPages: MetadataRoute.Sitemap = [
    {
      url: `${marketingUrl}/locations`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85
    },
    {
      url: `${marketingUrl}/solutions`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85
    }
  ];

  const seoPages: MetadataRoute.Sitemap = getAllSeoSlugs().map((slug) => ({
    url: `${marketingUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: slug.includes("-india") || !slug.includes("-") ? 0.8 : 0.75
  }));

  return [...staticPages, ...indexPages, ...seoPages];
}
