import type { Metadata } from "next";
import { AppScreenshotGallery } from "@/components/AppScreenshots";
import { MarketingPage } from "@/components/MarketingPage";
import { marketingPages, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata("/features", "Features | TeamShastra", "TeamShastra features: work orders, attendance, customers, quotations, invoices, expenses, reports, and support chat for field service teams.");

export default function FeaturesPage() {
  return (
    <MarketingPage content={marketingPages.features}>
      <AppScreenshotGallery />
    </MarketingPage>
  );
}