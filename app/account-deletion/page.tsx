import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import {
  legalUpdatedAt,
  pageMetadata,
  supportEmail
} from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "/account-deletion",
  "Account Deletion | TeamShastra",
  "Instructions for requesting TeamShastra account deletion or workspace access removal (Google Play requirement)."
);

export default function AccountDeletionPage() {
  return (
    <LegalPage
      title="TeamShastra Account Deletion"
      updatedAt={legalUpdatedAt}
      intro="You can request deletion or deactivation of your TeamShastra account or workspace access. This page satisfies Google Play’s account deletion disclosure requirements for com.teamshastra.mobile."
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
          title: "How To Request (Web / Email)",
          items: [
            `Email ${supportEmail} with subject: Account Deletion Request — TeamShastra`,
            "Include your account email, company/workspace name if known, and whether you want full account deletion, workspace removal, or portal access removal",
            "We verify identity by confirmation email to your account address or administrator confirmation before processing"
          ]
        },
        {
          title: "In-App Options",
          items: [
            "Open the TeamShastra app → Settings → App info for links to this page and Privacy / Terms.",
            "Company administrators can deactivate team members from the Team tab.",
            "Logging out clears local device tokens and offline queues where supported.",
            "Self-serve one-tap delete-my-account inside the app continues to improve; email request remains the guaranteed path for Play Store compliance."
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
          body: "Some data may be kept for legal, audit, or business continuity, including work order history, activity logs, employer-required attendance records, photos or reports attached to completed jobs, invoices/quotations, and security audit logs. Retained data is restricted and not used for marketing."
        },
        {
          title: "Response Time",
          body: "We acknowledge requests within 7 days and complete eligible deletions within 30 days, unless additional verification or legal hold applies."
        }
      ]}
    >
      <section className="legal-section legal-callout">
        <h2>Send a Deletion Request</h2>
        <p>
          <strong>Email:</strong>{" "}
          <a href={`mailto:${supportEmail}?subject=${encodeURIComponent("Account Deletion Request — TeamShastra")}`}>
            {supportEmail}
          </a>
        </p>
        <p>
          <strong>Subject:</strong> Account Deletion Request — TeamShastra
        </p>
        <p>
          After you email us, check your inbox (and spam) for a verification message.
        </p>
      </section>
      <section className="legal-section">
        <h2>Privacy Policy</h2>
        <p>
          See our <Link href="/privacy">Privacy Policy</Link> for full data handling details.
        </p>
      </section>
    </LegalPage>
  );
}
