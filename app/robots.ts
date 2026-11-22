import type { MetadataRoute } from "next";
import { marketingUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${marketingUrl}/sitemap.xml`,
    host: marketingUrl
  };
}
