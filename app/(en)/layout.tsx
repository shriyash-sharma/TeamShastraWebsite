import { SiteDocument, siteMetadata } from "@/components/SiteDocument";
import "../globals.css";

export const metadata = siteMetadata;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SiteDocument lang="en">{children}</SiteDocument>;
}
