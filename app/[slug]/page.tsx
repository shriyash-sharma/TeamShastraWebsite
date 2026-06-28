import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoLandingPage } from "@/components/seo/SeoLandingPage";
import { getContentForSlug } from "@/lib/seo/content";
import { getAllSeoSlugs, parseSlug } from "@/lib/seo/slugs";
import { pageMetadata } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSeoSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const content = getContentForSlug(slug);
  if (!content) return {};
  return pageMetadata(content.path, content.title, content.metaDescription);
}

export default async function SeoDynamicPage({ params }: Props) {
  const { slug } = await params;
  const parsed = parseSlug(slug);
  if (parsed.type === "unknown") notFound();

  const content = getContentForSlug(slug);
  if (!content) notFound();

  return <SeoLandingPage content={content} />;
}
