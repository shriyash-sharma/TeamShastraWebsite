import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "/privacy",
  "Privacy Policy | TeamShastra",
  "TeamShastra privacy policy for field service management users, companies, technicians, and customer portal users."
);

export default function PrivacyPage() {
  return (
    <LegalPage
      title="TeamShastra Privacy Policy"
      updatedAt="June 9, 2026"
      intro="TeamShastra is a field service management application for companies, managers, technicians, and customer portal users. This policy explains what data we handle and how we use it."
      sections={[
        {
          title: "Data We Collect",
          items: [
            "Account information: name, email, phone number, company, role, preferred language, and authentication session details.",
            "Field service records: customers, work orders, assignments, comments, status updates, activity logs, and service reports.",
            "Photos and media: job photos, company logos, and files attached to work orders or service reports.",
            "Location data: optional coordinates captured only when a user performs attendance check-in or check-out. We do not use background location or continuous tracking.",
            "Device and notifications: push notification tokens, device platform, and app version.",
            "Offline data: pending attendance actions, media uploads, and form drafts stored locally until sync.",
            "Diagnostics: app errors and operational logs to improve reliability and security."
          ]
        },
        {
          title: "How We Use Data",
          items: [
            "Authenticate users and protect accounts",
            "Manage teams, customers, work orders, attendance, photos, and reports",
            "Sync offline actions when connectivity returns",
            "Send operational notifications for assignments, comments, and status changes",
            "Maintain security, prevent abuse, and comply with legal obligations"
          ]
        },
        {
          title: "Location",
          body: "Location is optional attendance metadata only. If permission is denied or unavailable, attendance can still be saved. No background location, geofencing, or continuous tracking."
        },
        {
          title: "Photos and Files",
          body: "Photos from camera or gallery are used for work documentation and may be visible to authorized users in your company workspace and customer portal where applicable."
        },
        {
          title: "Sharing",
          body: "We do not sell personal data. Data may be processed by service providers for hosting, database, storage, email, and push notifications, and is visible to authorized users within your company."
        },
        {
          title: "Retention",
          body: "We retain data as needed to provide the service, maintain audit history, and meet legal obligations. Some records may be deactivated rather than immediately deleted."
        },
        {
          title: "Security",
          body: "We use HTTPS, role-based access controls, tenant isolation, and secure token storage on mobile devices."
        },
        {
          title: "Children",
          body: "TeamShastra is for business use and is not directed to children under 13."
        },
        {
          title: "Changes",
          body: "We may update this policy. The effective date above will reflect the latest version."
        }
      ]}
    >
      <section className="legal-section">
        <h2>Account Deletion</h2>
        <p>See our <Link href="/account-deletion">Account Deletion</Link> page or email <a href="mailto:support@teamshastra.com">support@teamshastra.com</a>.</p>
      </section>
      <section className="legal-section">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:support@teamshastra.com">support@teamshastra.com</a><br />Subject: Privacy Request — TeamShastra</p>
      </section>
    </LegalPage>
  );
}