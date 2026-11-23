import { SiteDocument, siteMetadata } from "@/components/SiteDocument";
import "../globals.css";

export const metadata = siteMetadata;

/** Root layout for the Hindi pages under /hi, so they render <html lang="hi-IN">. */
export default function HindiRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SiteDocument lang="hi-IN">{children}</SiteDocument>;
}
