import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import {
  accountDeletionUrl,
  cookiesUrl,
  legalJurisdiction,
  legalOperator,
  legalUpdatedAt,
  pageMetadata,
  privacyEmail,
  supportEmail,
  termsUrl
} from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "/privacy",
  "Privacy Policy | TeamShastra",
  "TeamShastra privacy policy for field service management users, companies, technicians, and customer portal users."
);

export default function PrivacyPage() {
  return (
    <LegalPage
      title="TeamShastra Privacy Policy"
      updatedAt={legalUpdatedAt}
      intro="TeamShastra is a field service management application for companies, managers, technicians, and customer portal users. This policy explains what personal data we handle, why we process it, and the choices available to you."
      sections={[
        {
          title: "Who We Are",
          body: `TeamShastra is operated by ${legalOperator}. Governing law and primary place of business: ${legalJurisdiction}. For privacy questions, email ${privacyEmail}.`
        },
        {
          title: "Data We Collect",
          items: [
            "Account information: name, email, phone number, company, role, preferred language, and authentication session details.",
            "Field service records: customers, work orders, assignments, comments, status updates, activity logs, quotations, invoices, expenses, and service reports.",
            "Photos and media: job photos, company logos, voice notes, and files attached to work orders, chat, or service reports.",
            "Contacts (optional): only the contact you explicitly select when importing a customer or teammate. We do not upload your full address book.",
            "Location data: coordinates captured only when a user performs attendance check-in or check-out. We do not use background location or continuous GPS tracking.",
            "Device and notifications: push notification tokens, device platform, and app version.",
            "Offline data: pending attendance actions, media uploads, and form drafts stored locally until sync.",
            "Diagnostics: crash reports and operational logs (for example via Firebase Crashlytics) to improve reliability and security.",
            "Website visitor chat: name (optional), email, and mobile number when you start a chat on teamshastra.com, plus the messages you send.",
            "Website analytics: if you accept cookies on teamshastra.com, Google Analytics may collect approximate usage metrics such as pages viewed and device/browser type."
          ]
        },
        {
          title: "How We Use Data",
          items: [
            "Authenticate users and protect accounts",
            "Manage teams, customers, work orders, attendance, photos, reports, and related business records",
            "Sync offline actions when connectivity returns",
            "Send operational email and push notifications for assignments, invites, password resets, comments, status changes, and website visitor chat",
            "Improve product reliability, prevent abuse, and comply with applicable law (including India’s Digital Personal Data Protection Act, 2023 where it applies)"
          ]
        },
        {
          title: "Location and Attendance",
          body: "Location is captured only when a user taps check-in or check-out. By default, attendance can still be saved if location permission is denied. A company owner may optionally require GPS for punches and/or enable punch-time office geofencing (a radius check at the moment of punch only). TeamShastra does not use background location, OS geofences, live map stalking, or continuous tracking."
        },
        {
          title: "Photos, Voice Notes, and Files",
          body: "Camera, gallery, microphone, and selected contact details are used only for work documentation and collaboration. Content may be visible to authorized users in your company workspace and, where enabled, the customer portal."
        },
        {
          title: "Service Providers (Processors)",
          items: [
            "Cloud hosting and databases for the application API and web app",
            "Object storage for photos, logos, and uploaded files",
            "Transactional email delivery (for example Resend) from noreply@mail.teamshastra.com",
            "Push notifications (Firebase Cloud Messaging)",
            "Crash reporting (Firebase Crashlytics) in the mobile app",
            "Website analytics (Google Analytics) on teamshastra.com only after cookie consent"
          ]
        },
        {
          title: "Sharing",
          body: "We do not sell personal data. Data is visible to authorized users within your company (and portal guests where your company invites them). Processors listed above handle data only to provide TeamShastra. We may disclose data if required by law or to protect users, the service, or legal rights."
        },
        {
          title: "Retention",
          body: "We retain data as needed to provide the service, maintain audit and business history, and meet legal obligations. Some records may be deactivated or anonymized rather than immediately erased. See Account Deletion for how to request removal."
        },
        {
          title: "Security",
          body: "We use HTTPS, role-based access controls, tenant isolation, and secure token storage on mobile devices. No method of transmission or storage is 100% secure; please use strong passwords and share accounts only with trusted staff."
        },
        {
          title: "Your Rights",
          items: [
            "Request access to personal data we hold about you",
            "Request correction of inaccurate account details",
            "Request deletion or deactivation of your account (see Account Deletion)",
            "Withdraw optional permissions (location, camera, microphone, contacts, notifications) in device settings",
            "Withdraw marketing-site analytics consent via the cookie banner controls",
            "Raise concerns with us at the contact email below; you may also have rights under applicable Indian data-protection law"
          ]
        },
        {
          title: "Children",
          body: "TeamShastra is for business use and is not directed to children under 13. We do not knowingly collect personal data from children."
        },
        {
          title: "International Processing",
          body: "Infrastructure and processors may be located in India or other countries. By using TeamShastra you understand that data may be processed outside your state or country subject to this policy and applicable law."
        },
        {
          title: "Changes",
          body: "We may update this policy. The effective date above will reflect the latest version. Material changes will be reflected on this page and, where appropriate, notified in-product or by email."
        }
      ]}
    >
      <section className="legal-section">
        <h2>Related Policies</h2>
        <p>
          <Link href="/terms">Terms of Service</Link>
          {" · "}
          <Link href="/cookies">Cookie Policy</Link>
          {" · "}
          <Link href="/account-deletion">Account Deletion</Link>
        </p>
        <p className="legal-meta">
          Canonical URLs: {termsUrl}, {cookiesUrl}, {accountDeletionUrl}
        </p>
      </section>
      <section className="legal-section">
        <h2>Contact</h2>
        <p>
          Email: <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
          <br />
          Subject: Privacy Request — TeamShastra
        </p>
      </section>
    </LegalPage>
  );
}
