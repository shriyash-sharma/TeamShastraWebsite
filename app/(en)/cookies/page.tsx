import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import {
  googleAnalyticsId,
  legalUpdatedAt,
  pageMetadata,
  supportEmail
} from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "/cookies",
  "Cookie Policy | TeamShastra",
  "How TeamShastra uses cookies and similar technologies on the marketing website."
);

export default function CookiesPage() {
  return (
    <LegalPage
      title="TeamShastra Cookie Policy"
      updatedAt={legalUpdatedAt}
      intro="This policy explains how teamshastra.com uses cookies and similar technologies. The TeamShastra mobile app and authenticated app at app.teamshastra.com primarily use device permissions and local storage for sessions—not marketing cookies."
      sections={[
        {
          title: "What Are Cookies",
          body: "Cookies are small text files stored on your device. Similar technologies include local storage and pixels used to remember preferences or measure site usage."
        },
        {
          title: "Essential Cookies",
          body: "We may use essential storage needed for security, load balancing, or remembering your cookie preference. These are required for the site to work as expected."
        },
        {
          title: "Analytics Cookies (Optional)",
          items: [
            `Google Analytics (${googleAnalyticsId}) helps us understand aggregate traffic such as pages viewed, approximate location at city level, and device/browser type.`,
            "Analytics cookies load only after you accept analytics on the cookie banner.",
            "If you decline, we do not enable Google Analytics for your browser on this site.",
            "Google may process analytics data under its own terms; see Google’s documentation for details."
          ]
        },
        {
          title: "How To Change Your Choice",
          body: "Clear site data for teamshastra.com in your browser, or use the “Cookie settings” control in the site footer area when shown, then reload the page to see the banner again. You can also block cookies in your browser settings."
        },
        {
          title: "App and Product Data",
          body: "Product accounts, work orders, attendance, and related business data are governed by the Privacy Policy and Terms—not by this marketing Cookie Policy."
        }
      ]}
    >
      <section className="legal-section">
        <h2>Related</h2>
        <p>
          <Link href="/privacy">Privacy Policy</Link>
          {" · "}
          <Link href="/terms">Terms of Service</Link>
        </p>
        <p>
          Questions: <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
        </p>
      </section>
    </LegalPage>
  );
}
