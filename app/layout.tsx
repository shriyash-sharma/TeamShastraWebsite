import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { marketingUrl } from "@/lib/site";
import "./globals.css";

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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}