import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "/account-deletion",
  "Account Deletion | TeamShastra",
  "Instructions for requesting TeamShastra account deletion or workspace access removal."
);

export default function AccountDeletionPage() {
  return (
    <LegalPage
      title="TeamShastra Account Deletion"
      updatedAt="June 9, 2026"
      intro="You can request deletion or deactivation of your TeamShastra account or workspace access. This page satisfies Google Play's account deletion requirements."
      sections={[
        {
          title: "Who Can Request Deletion",
          items: [
            "Any TeamShastra user may request deletion of their own account.",
            "Company owners or administrators may request removal of users from their workspace.",
            "Customer portal users may request removal through their company or TeamShastra support."
          ]
        },
        {
          title: "What Gets Deleted or Deactivated",
          items: [
            "Active sessions and refresh tokens revoked",
            "Account deactivated and no longer able to sign in",
            "Company membership or portal access removed",
            "Push notification tokens deactivated",
            "Profile fields minimized or anonymized where retention is not required"
          ]
        },
        {
          title: "What May Be Retained",
          body: "Some data may be kept for legal, audit, or business continuity, including work order history, activity logs, employer-required attendance records, photos or reports attached to completed jobs, and security audit logs."
        },
        {
          title: "Response Time",
          body: "We acknowledge requests within 7 days and complete eligible deletions within 30 days, unless additional verification is required."
        },
        {
          title: "In-App",
          body: "Company administrators can deactivate team members from the Team tab. Logging out clears local device tokens and offline queues where supported."
        }
      ]}
    >
      <section className="legal-section legal-callout">
        <h2>How To Request Deletion</h2>
        <p><strong>Email:</strong> <a href="mailto:support@teamshastra.com">support@teamshastra.com</a></p>
        <p><strong>Subject:</strong> Account Deletion Request — TeamShastra</p>
        <p><strong>Include:</strong></p>
        <ul>
          <li>Your account email address</li>
          <li>Company or workspace name, if known</li>
          <li>Whether you want full account deletion, workspace removal, or portal access removal</li>
        </ul>
        <p>We will verify your identity by confirmation email to your account address or administrator confirmation before processing.</p>
      </section>
      <section className="legal-section">
        <h2>Privacy Policy</h2>
        <p>See our <Link href="/privacy">Privacy Policy</Link> for full data handling details.</p>
      </section>
    </LegalPage>
  );
}