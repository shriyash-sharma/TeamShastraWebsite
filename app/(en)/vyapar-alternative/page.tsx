import type { Metadata } from "next";
import { ComparePageView } from "@/components/seo/ComparePageView";
import { getComparePage } from "@/lib/seo/compare";
import { pageMetadata } from "@/lib/site";

const page = getComparePage("vyapar-alternative")!;

export const metadata: Metadata = pageMetadata(page.path, page.title, page.metaDescription);

export default function VyaparAlternativePage() {
  return <ComparePageView page={page} />;
}
