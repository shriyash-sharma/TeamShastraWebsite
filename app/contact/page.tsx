import type { Metadata } from "next";
import { loginUrl, pageMetadata, signupUrl } from "@/lib/site";

export const metadata: Metadata = pageMetadata("/contact", "Contact | TeamShastra", "Contact TeamShastra or start free on the app domain for field service management software.");

export default function ContactPage() {
  return (
    <main><section className="page-hero"><div className="section-inner"><span className="eyebrow">Contact</span><h1>Talk to TeamShastra or start free today.</h1><p className="page-lead">Use this public marketing page for discovery and lead generation. Use the app domain for login and signup.</p><div className="hero-actions"><a className="button primary" href={signupUrl}>Start Free</a><a className="button secondary" href={loginUrl}>Login</a></div></div></section><section className="section"><div className="section-inner contact-panel"><div className="contact-item"><strong>Sales and product questions</strong><p className="section-copy">Replace this placeholder with the official TeamShastra sales email or contact form endpoint.</p></div><div className="contact-item"><strong>Existing users</strong><p className="section-copy">Existing users should log in at app.teamshastra.com/login.</p></div><div className="contact-item"><strong>New companies</strong><p className="section-copy">New teams should start at app.teamshastra.com/signup to create a company.</p></div></div></section><section className="section alt"><div className="section-inner banner"><div><h2>Move from interest to setup.</h2><p>Signup is the next step for new TeamShastra companies.</p></div><a className="button primary" href={signupUrl}>Get Started</a></div></section></main>
  );
}