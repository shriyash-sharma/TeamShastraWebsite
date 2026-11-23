import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ComparePageView } from "@/components/seo/ComparePageView";
import { comparePages } from "@/lib/seo/compare";
import { pageMetadata } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

/** /vyapar-alternative keeps its old URL; every other comparison lives under /compare. */
const pagesUnderCompare = comparePages.filter((page) => page.path.startsWith("/compare/"));

export const dynamicParams = false;

export function generateStaticParams() {
  return pagesUnderCompare.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = pagesUnderCompare.find((item) => item.slug === slug);
  if (!page) return {};
  return pageMetadata(page.path, page.title, page.metaDescription);
}

export default async function ComparePage({ params }: Props) {
  const { slug } = await params;
  const page = pagesUnderCompare.find((item) => item.slug === slug);
  if (!page) notFound();
  return <ComparePageView page={page} />;
}
