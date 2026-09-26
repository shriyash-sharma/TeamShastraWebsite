import { ImageResponse } from "next/og";
import { getContentForSlug } from "@/lib/seo/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = getContentForSlug(slug);
  const h1 = content?.h1 ?? "TeamShastra";
  const eyebrow = content?.eyebrow ?? "Field service software for India";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: "#071B5A",
          color: "#FFFFFF",
          fontFamily: "sans-serif"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              backgroundColor: "#F59E0B",
              transform: "rotate(45deg)"
            }}
          />
          <span style={{ fontSize: 36, fontWeight: 700 }}>TeamShastra</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <span style={{ fontSize: 28, color: "#F59E0B", fontWeight: 600 }}>{eyebrow}</span>
          <span style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.15, maxWidth: 1000 }}>{h1}</span>
        </div>
        <span style={{ fontSize: 24, color: "#B9C2E0" }}>Jobs · Attendance · GST Invoices · Field Expenses</span>
      </div>
    ),
    { ...size }
  );
}
