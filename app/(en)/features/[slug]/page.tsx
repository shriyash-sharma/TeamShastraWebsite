import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPage } from "@/components/seo/LandingPage";
import { featureLandingPath, featureLandings, getFeatureLanding } from "@/lib/seo/landing/features";
import { featureView } from "@/lib/seo/landing/view";
import { pageMetadata } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return featureLandings.map((feature) => ({ slug: feature.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const feature = getFeatureLanding(slug);
  if (!feature) return {};
  const path = featureLandingPath(slug);
  return pageMetadata(path, feature.title, feature.metaDescription, `${path}/opengraph-image`);
}

export default async function FeatureLandingRoute({ params }: Props) {
  const { slug } = await params;
  const feature = getFeatureLanding(slug);
  if (!feature) notFound();
  return <LandingPage view={featureView(feature)} />;
}
