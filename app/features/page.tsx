import type { Metadata } from "next";
import { MarketingPage } from "@/components/MarketingPage";
import { marketingPages, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata("/features", "Features | TeamShastra", "Explore TeamShastra features for scheduling, dispatch, job tracking, company setup, and field service operations.");

export default function FeaturesPage() {
  return <MarketingPage content={marketingPages.features} />;
}