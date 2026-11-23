import type { Metadata } from "next";
import Script from "next/script";
import { AppHashRedirect } from "@/components/AppHashRedirect";
import { CookieConsent } from "@/components/CookieConsent";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LazyVisitorChat } from "@/components/LazyVisitorChat";
import { cookieConsentStorageKey, marketingUrl } from "@/lib/site";

/** Site-wide metadata shared by every root layout. */
export const siteMetadata: Metadata = {
  metadataBase: new URL(marketingUrl),
  applicationName: "TeamShastra",
  description:
    "Field service software for Indian teams: jobs, attendance, GST invoices, purchases, expenses, staff salary, and reports.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/brand/teamshastra_favicon.svg", type: "image/svg+xml" }
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.svg"
  },
  manifest: "/manifest.webmanifest"
};

const consentMarkerScript = `try{var c=localStorage.getItem(${JSON.stringify(cookieConsentStorageKey)});if(c)document.documentElement.setAttribute("data-ts-consent",c)}catch(e){}`;

/**
 * The <html> and <body> every page shares. Each root layout (English, Hindi) and the global 404
 * render it with their own `lang`, so the site looks and behaves the same everywhere.
 */
export function SiteDocument({ lang, children }: Readonly<{ lang: string; children: React.ReactNode }>) {
  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        {/* Runs while the page is parsed, so a stored cookie choice hides the banner before first paint. */}
        <script dangerouslySetInnerHTML={{ __html: consentMarkerScript }} />
      </head>
      <body>
        <Script id="ga-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              wait_for_update: 500
            });
          `}
        </Script>
        <Header />
        <AppHashRedirect />
        {children}
        <Footer />
        <LazyVisitorChat />
        <CookieConsent />
      </body>
    </html>
  );
}
