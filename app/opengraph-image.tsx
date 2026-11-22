import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "TeamShastra — field service software for India";

export default function Image() {
  return renderOgImage("Field service software for India", "From job to payment, all in one place.");
}
