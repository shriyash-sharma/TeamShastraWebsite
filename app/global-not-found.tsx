import type { Metadata } from "next";
import { SiteDocument, siteMetadata } from "@/components/SiteDocument";
import NotFound, { metadata as notFoundMetadata } from "./(en)/not-found";
import "./globals.css";

// With two root layouts (English and Hindi), a URL that matches no route at all has no layout to
// render the 404 in. This page wraps the usual 404 in the shared site shell.

export const metadata: Metadata = { ...siteMetadata, ...notFoundMetadata };

export default function GlobalNotFound() {
  return (
    <SiteDocument lang="en">
      <NotFound />
    </SiteDocument>
  );
}
