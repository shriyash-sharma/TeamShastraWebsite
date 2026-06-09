import type { Metadata } from "next";
import { MarketingPage } from "@/components/MarketingPage";
import { marketingPages, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata("/industries", "Industries | TeamShastra", "TeamShastra supports service teams across maintenance, installation, repair, inspection, and field operations.");

export default function IndustriesPage() {
  return <MarketingPage content={marketingPages.industries} />;
}