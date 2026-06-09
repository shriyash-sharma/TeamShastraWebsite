import type { Metadata } from "next";
import Script from "next/script";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { marketingUrl } from "@/lib/site";
import "./globals.css";

const googleAnalyticsId = "G-QJ5430L068";

export const metadata: Metadata = {
  metadataBase: new URL(marketingUrl),
  applicationName: "TeamShastra",
  icons: {
    icon: "/brand/teamshastra_favicon.svg",
    shortcut: "/brand/teamshastra_favicon.svg",
    apple: "/brand/teamshastra_app_icon.svg"
  },
  manifest: "/manifest.webmanifest"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Script async src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');
          `}
        </Script>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}