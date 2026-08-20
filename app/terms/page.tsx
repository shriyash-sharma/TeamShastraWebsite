import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import {
  appUrl,
  betaStatus,
  legalJurisdiction,
  legalOperator,
  legalUpdatedAt,
  marketingUrl,
  pageMetadata,
  privacyUrl,
  releaseNote,
  supportEmail
} from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "/terms",
  "Terms of Service | TeamShastra",
  "Terms of Service for the TeamShastra marketing website and field service management application."
);

export default function TermsPage() {
  return (
    <LegalPage
      title="TeamShastra Terms of Service"
      updatedAt={legalUpdatedAt}
      intro={`${betaStatus} ${releaseNote} These Terms govern access to ${marketingUrl}, ${appUrl}, and the TeamShastra mobile applications. By creating an account, joining a company workspace, or using the service, you agree to these Terms.`}
      sections={[
        {
          title: "Operator",
          body: `TeamShastra is operated by ${legalOperator}. These Terms are governed by the laws of ${legalJurisdiction}, without regard to conflict-of-law rules. Courts in India have exclusive jurisdiction, subject to mandatory consumer protections that cannot be waived.`
        },
        {
          title: "The Service",
          body: "TeamShastra provides field service management tools including company workspaces, team roles, customers, work orders, attendance, media, notifications, reports, and related features. Features may change during public beta. We may add, modify, or discontinue functionality with reasonable notice when practical."
        },
        {
          title: "Eligibility and Accounts",
          items: [
            "You must be at least 18 years old and able to form a binding contract.",
            "You must provide accurate registration information and keep credentials confidential.",
            "Company owners are responsible for users they invite and for content created in their workspace.",
            "You may not share login credentials or circumvent access controls."
          ]
        },
        {
          title: "Acceptable Use",
          items: [
            "Use TeamShastra only for lawful business purposes.",
            "Do not upload unlawful, harmful, infringing, or deceptive content.",
            "Do not attempt unauthorized access, scrape without permission, disrupt the service, or reverse engineer except where law allows.",
            "Do not use the product for continuous covert surveillance that violates applicable employment, privacy, or labor law. Punch-time location and optional office-radius checks must be disclosed to your workforce as required by law.",
            "Do not send spam or abuse transactional messaging features."
          ]
        },
        {
          title: "Customer Data and Privacy",
          body: `You retain rights to your business data. You grant us a limited license to host, process, and display that data solely to provide the service. Our Privacy Policy at ${privacyUrl} explains personal-data practices. You are responsible for having a lawful basis to upload employee, customer, and third-party data into TeamShastra.`
        },
        {
          title: "Location and Attendance Features",
          body: "Attendance location is captured only at check-in/check-out. Owners may optionally require GPS or enable punch-time office geofencing. The service does not provide background or continuous GPS tracking. Employers remain responsible for workplace notices and consent required under applicable law."
        },
        {
          title: "Beta Software",
          body: "During public beta the service is provided for evaluation. It may contain defects, incomplete features, or changing data behavior. Do not rely on beta alone as your sole system of record for regulated or mission-critical operations without independent backups."
        },
        {
          title: "Fees and Refunds",
          body: "Current public beta access is offered without charge unless we expressly agree otherwise in writing. Paid plans, invoices, and refund rules will be published before paid production billing begins. If you purchase a paid plan later, those then-current commercial terms will apply."
        },
        {
          title: "Intellectual Property",
          body: "TeamShastra branding, software, and site content are owned by the operator or licensors. You may not copy, resell, or create derivative products from the service except as allowed by these Terms or written permission."
        },
        {
          title: "Third-Party Services",
          body: "The service may rely on hosting, email, push, maps/device OS, analytics, and other providers. Their availability and policies can affect TeamShastra. Links to third-party sites are not endorsements."
        },
        {
          title: "Suspension and Termination",
          body: "We may suspend or terminate access for breach, abuse, legal risk, non-payment (when billing applies), or to protect the platform. You may stop using the service at any time and request account deletion as described on the Account Deletion page."
        },
        {
          title: "Disclaimers",
          body: 'THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" DURING BETA. TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. We do not warrant uninterrupted or error-free operation.'
        },
        {
          title: "Limitation of Liability",
          body: "To the maximum extent permitted by law, the operator is not liable for indirect, incidental, special, consequential, or lost-profit damages, or for data loss, arising from use of the service. Aggregate liability for claims relating to the service is limited to the greater of (a) amounts you paid us for the service in the three months before the claim or (b) INR 5,000. Some jurisdictions do not allow certain limits; in those cases limits apply only to the extent allowed."
        },
        {
          title: "Indemnity",
          body: "You agree to defend and indemnify the operator against claims arising from your content, your workspace users’ misuse, or your violation of these Terms or applicable law, except to the extent caused by our willful misconduct."
        },
        {
          title: "Changes to Terms",
          body: "We may update these Terms. The “Last updated” date will change when we do. Continued use after posting constitutes acceptance of the updated Terms for future use. If you disagree, stop using the service and request account closure."
        },
        {
          title: "Contact",
          body: `Questions about these Terms: ${supportEmail}. Privacy questions: see ${privacyUrl}.`
        }
      ]}
    >
      <section className="legal-section">
        <h2>Related</h2>
        <p>
          <Link href="/privacy">Privacy Policy</Link>
          {" · "}
          <Link href="/cookies">Cookie Policy</Link>
          {" · "}
          <Link href="/account-deletion">Account Deletion</Link>
          {" · "}
          <a href={appUrl}>Open App</a>
        </p>
      </section>
    </LegalPage>
  );
}
