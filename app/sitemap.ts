import type { MetadataRoute } from "next";
import { marketingUrl, pages } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${marketingUrl}${page.path === "/" ? "" : page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority
  }));
}