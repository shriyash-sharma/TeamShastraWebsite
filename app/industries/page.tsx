import type { Metadata } from "next";
import { MarketingPage } from "@/components/MarketingPage";
import { marketingPages, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata("/industries", "Industries | CCTV, Electricians & Field Service | TeamShastra", "TeamShastra for CCTV installers, electricians, maintenance, and field service teams — jobs, GST invoices, attendance, and expenses.");

export default function IndustriesPage() {
  return <MarketingPage content={marketingPages.industries} />;
}