import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HindiPageView } from "@/components/seo/HindiPageView";
import { getHindiPage, hindiPages } from "@/lib/seo/landing/hi";
import { hindiPageMetadata } from "@/lib/site";

type Props = { params: Promise<{ path?: string[] }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return hindiPages.map((page) => ({ path: page.path.split("/").slice(2) }));
}

function pageFor(segments: string[] | undefined) {
  return getHindiPage(["/hi", ...(segments ?? [])].join("/"));
}

/** Share card of the English twin: the OG renderer can't draw Devanagari. */
function ogImageFor(englishPath: string): string {
  return englishPath === "/" ? "/opengraph-image" : `${englishPath}/opengraph-image`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = pageFor((await params).path);
  if (!page) return {};
  return hindiPageMetadata(page.path, page.enPath, page.title, page.metaDescription, ogImageFor(page.enPath));
}

export default async function HindiPage({ params }: Props) {
  const page = pageFor((await params).path);
  if (!page) notFound();
  return <HindiPageView page={page} />;
}
