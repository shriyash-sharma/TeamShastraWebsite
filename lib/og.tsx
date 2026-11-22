import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

/** 1200×630 share card used for WhatsApp, LinkedIn, and X link previews. */
export function renderOgImage(eyebrow: string, title: string) {
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
          <span style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.15, maxWidth: 1000 }}>{title}</span>
        </div>
        <span style={{ fontSize: 24, color: "#B9C2E0" }}>Jobs · Attendance · GST Invoices · Staff Salary · Expenses</span>
      </div>
    ),
    { ...ogSize }
  );
}
