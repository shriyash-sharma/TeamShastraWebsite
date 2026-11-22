import type { Metadata } from "next";
import { MarketingPage } from "@/components/MarketingPage";
import { marketingPages, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata("/blog", "Field Service Blog for Indian Businesses | TeamShastra", "Practical guides for Indian field service businesses: dispatch, tracking jobs, GST invoicing, attendance, and running a technician team.");

export default function BlogPage() {
  return <MarketingPage content={marketingPages.blog} />;
}