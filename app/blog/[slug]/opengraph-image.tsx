import { getGuide } from "@/lib/blog";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  return renderOgImage(guide ? "Guide" : "Field service guides for India", guide?.h1 ?? "TeamShastra");
}
