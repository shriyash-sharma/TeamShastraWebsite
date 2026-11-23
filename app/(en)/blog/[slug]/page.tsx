import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideView } from "@/components/blog/GuideView";
import { getGuide, guidePath, guides } from "@/lib/blog";
import { pageMetadata } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  const path = guidePath(slug);
  const metadata = pageMetadata(path, guide.title, guide.metaDescription, `${path}/opengraph-image`);
  return {
    ...metadata,
    openGraph: { ...metadata.openGraph, type: "article", publishedTime: guide.datePublished, modifiedTime: guide.dateModified }
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  return <GuideView guide={guide} />;
}
