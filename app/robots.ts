import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://teamshastra.com/sitemap.xml",
    host: "https://teamshastra.com"
  };
}