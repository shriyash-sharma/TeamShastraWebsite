import type { Metadata } from "next";
import { betaStatus, loginUrl, pageMetadata, releaseNote, signupUrl } from "@/lib/site";

export const metadata: Metadata = pageMetadata("/contact", "Contact | TeamShastra", "Contact TeamShastra or join the public beta for field service management software testing.");

export default function ContactPage() {
  return (
    <main><section className="page-hero"><div className="section-inner"><span className="eyebrow">Contact</span><h1>Talk to TeamShastra or join the public beta.</h1><p className="page-lead">{betaStatus} {releaseNote} Use this page for beta questions, onboarding interest, and support contact.</p><div className="hero-actions"><a className="button primary" href={signupUrl}>Join Beta</a><a className="button secondary" href={loginUrl}>Login</a></div></div></section><section className="section"><div className="section-inner contact-panel"><div className="contact-item"><strong>Beta questions</strong><p className="section-copy">Email support@teamshastra.com for beta access, testing feedback, or product questions.</p></div><div className="contact-item"><strong>Existing beta users</strong><p className="section-copy">Existing beta users should log in at app.teamshastra.com/login.</p></div><div className="contact-item"><strong>New beta workspaces</strong><p className="section-copy">New testers can start at app.teamshastra.com/signup to create a test company.</p></div></div></section><section className="section alt"><div className="section-inner banner"><div><h2>Join the public beta.</h2><p>Test TeamShastra before the planned production release and share feedback as the platform evolves.</p></div><a className="button primary" href={signupUrl}>Join Beta</a></div></section></main>
  );
}