import { getContentForSlug } from "@/lib/seo/content";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = getContentForSlug(slug);
  return renderOgImage(content?.eyebrow ?? "Field service software for India", content?.h1 ?? "TeamShastra");
}
