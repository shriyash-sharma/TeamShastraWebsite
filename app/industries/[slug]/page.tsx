import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPage } from "@/components/seo/LandingPage";
import { getIndustryLanding, industryLandingPath, industryLandings } from "@/lib/seo/landing/industries";
import { industryView } from "@/lib/seo/landing/view";
import { pageMetadata } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return industryLandings.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryLanding(slug);
  if (!industry) return {};
  const path = industryLandingPath(slug);
  return pageMetadata(path, industry.title, industry.metaDescription, `${path}/opengraph-image`);
}

export default async function IndustryLandingRoute({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryLanding(slug);
  if (!industry) notFound();
  return <LandingPage view={industryView(industry)} />;
}
