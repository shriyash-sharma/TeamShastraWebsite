import type { Metadata } from "next";
import { MarketingPage } from "@/components/MarketingPage";
import { marketingPages, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata("/blog", "Blog | TeamShastra", "TeamShastra blog for field service management, dispatch, scheduling, and operational growth topics.");

export default function BlogPage() {
  return <MarketingPage content={marketingPages.blog} />;
}