import { getFeatureLanding } from "@/lib/seo/landing/features";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const feature = getFeatureLanding(slug);
  return renderOgImage(feature ? `Feature · ${feature.name}` : "Field service software for India", feature?.h1 ?? "TeamShastra");
}
