import type { Metadata } from "next";
import { AppScreenshotGallery } from "@/components/AppScreenshots";
import { MarketingPage } from "@/components/MarketingPage";
import { marketingPages, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "/features",
  "Features | Jobs, GST Invoices, Attendance & Salary | TeamShastra",
  "TeamShastra features for field service teams: work orders, attendance, GST invoices, staff salary, TDS, stock, purchases, expenses, reports, and Hindi support."
);

export default function FeaturesPage() {
  return (
    <MarketingPage content={marketingPages.features}>
      <AppScreenshotGallery />
    </MarketingPage>
  );
}