import type { Metadata } from "next";
import { SupportChannels } from "@/components/ContactChannelIcons";
import {
  appUrl,
  legalAdmin,
  legalOperator,
  loginUrl,
  pageMetadata,
  playStoreUrl,
  signupUrl,
  supportPhoneDisplay,
  supportPhoneTel,
  supportPhoneWhatsApp
} from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "/contact",
  "Contact | TeamShastra",
  "Contact TeamShastra support for product questions, privacy requests, or account deletion."
);

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <span className="eyebrow">Contact</span>
          <h1>Talk to TeamShastra.</h1>
          <p className="page-lead">
            Use this page for product questions, privacy or deletion requests, and support.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={playStoreUrl}>
              Get it on Google Play
            </a>
            <a className="button secondary" href={signupUrl}>
              Get started
            </a>
            <a className="button ghost" href={loginUrl}>
              Login
            </a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="section-inner contact-panel">
          <div className="contact-item contact-operator">
            <div className="contact-operator-head">
              <span className="contact-operator-badge">Operator</span>
              <h2 className="contact-operator-title">Who runs TeamShastra</h2>
            </div>
            <dl className="operator-meta">
              <div>
                <dt>Business</dt>
                <dd>Shri CCTV And Home Automation Services</dd>
              </div>
              <div>
                <dt>Brand</dt>
                <dd>TeamShastra</dd>
              </div>
              <div>
                <dt>Named administrator</dt>
                <dd>{legalAdmin}</dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href={supportPhoneTel}>{supportPhoneDisplay}</a>
                  <span className="operator-phone-actions">
                    <a className="operator-phone-action" href={supportPhoneTel} aria-label={`Call ${supportPhoneDisplay}`}>
                      Call
                    </a>
                    <a
                      className="operator-phone-action is-whatsapp"
                      href={supportPhoneWhatsApp}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`WhatsApp ${supportPhoneDisplay}`}
                    >
                      WhatsApp
                    </a>
                  </span>
                </dd>
              </div>
            </dl>
            <p className="operator-footnote">
              {legalOperator}.
            </p>
          </div>
          <div className="contact-item">
            <strong>Chat</strong>
            <p className="section-copy">
              Use <em>Chat with us</em> on this site. Enter your email and mobile number; a TeamShastra admin sees it as a visitor chat in the app.
            </p>
          </div>
          <div className="contact-item">
            <strong>Support</strong>
            <p className="section-copy">
              Reach the TeamShastra team by email, phone, or WhatsApp for product questions or account help.
            </p>
            <SupportChannels />
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
            <strong>Android app</strong>
            <p className="section-copy">
              Download TeamShastra on{" "}
              <a href={playStoreUrl}>Google Play</a>.
            </p>
          </div>
          <div className="contact-item">
            <strong>New workspaces</strong>
            <p className="section-copy">
              Create a company at <a href={signupUrl}>{signupUrl.replace("https://", "")}</a> or open{" "}
              <a href={appUrl}>{appUrl.replace("https://", "")}</a>.
            </p>
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="section-inner banner">
          <div>
            <h2>Create your company workspace.</h2>
            <p>Download on Google Play, or sign up on the web and start with jobs, attendance, billing, and expenses.</p>
          </div>
          <div className="hero-actions">
            <a className="button primary" href={playStoreUrl}>
              Get it on Google Play
            </a>
            <a className="button secondary" href={signupUrl}>
              Get started
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
