import type { Metadata } from "next";
import {
  appUrl,
  betaStatus,
  loginUrl,
  pageMetadata,
  releaseNote,
  signupUrl,
  supportEmail
} from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "/contact",
  "Contact | TeamShastra",
  "Contact TeamShastra support, privacy, or beta questions for field service management software."
);

export default function ContactPage() {
  const mailto = `mailto:${supportEmail}`;

  return (
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <span className="eyebrow">Contact</span>
          <h1>Talk to TeamShastra or join the public beta.</h1>
          <p className="page-lead">
            {betaStatus} {releaseNote} Use this page for beta questions, privacy or deletion requests, and support.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={signupUrl}>
              Join Beta
            </a>
            <a className="button secondary" href={loginUrl}>
              Login
            </a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="section-inner contact-panel">
          <div className="contact-item">
            <strong>Chat</strong>
            <p className="section-copy">
              Use <em>Chat with us</em> on this site. Enter your email and mobile number; a TeamShastra admin sees it as a visitor chat in the app.
            </p>
          </div>
          <div className="contact-item">
            <strong>Support &amp; beta</strong>
            <p className="section-copy">
              Email{" "}
              <a href={mailto}>{supportEmail}</a> for beta access, testing feedback, product questions, or account help.
            </p>
          </div>
          <div className="contact-item">
            <strong>Privacy &amp; account deletion</strong>
            <p className="section-copy">
              Use the same inbox with subject lines{" "}
              <em>Privacy Request — TeamShastra</em> or{" "}
              <em>Account Deletion Request — TeamShastra</em>. Details:{" "}
              <a href="/privacy">Privacy</a>, <a href="/account-deletion">Account deletion</a>.
            </p>
          </div>
          <div className="contact-item">
            <strong>Existing users</strong>
            <p className="section-copy">
              Log in at <a href={loginUrl}>{loginUrl.replace("https://", "")}</a>.
            </p>
          </div>
          <div className="contact-item">
            <strong>New workspaces</strong>
            <p className="section-copy">
              Create a test company at <a href={signupUrl}>{signupUrl.replace("https://", "")}</a> or open{" "}
              <a href={appUrl}>{appUrl.replace("https://", "")}</a>.
            </p>
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="section-inner banner">
          <div>
            <h2>Join the public beta.</h2>
            <p>Test TeamShastra before the planned production release and share feedback as the platform evolves.</p>
          </div>
          <a className="button primary" href={signupUrl}>
            Join Beta
          </a>
        </div>
      </section>
    </main>
  );
}
