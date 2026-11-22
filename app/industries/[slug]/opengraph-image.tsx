import { getIndustryLanding } from "@/lib/seo/landing/industries";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustryLanding(slug);
  return renderOgImage(industry ? `Industry · ${industry.name}` : "Field service software for India", industry?.h1 ?? "TeamShastra");
}
