import type { Metadata } from "next";
import { loginUrl, pageMetadata, signupUrl } from "@/lib/site";

export const metadata: Metadata = pageMetadata("/terms", "Terms | TeamShastra", "TeamShastra terms for the public marketing website and application platform.");

export default function TermsPage() {
  return <main><section className="page-hero"><div className="section-inner"><span className="eyebrow">Terms</span><h1>Terms for TeamShastra marketing and application use.</h1><p className="page-lead">Replace this placeholder with approved legal terms before production launch.</p><div className="hero-actions"><a className="button primary" href={signupUrl}>Start Free</a><a className="button secondary" href={loginUrl}>Login</a></div></div></section><section className="section"><div className="section-inner"><h2>Terms placeholder</h2><p className="section-copy">This page is included for footer navigation and sitemap coverage. Add final clauses for account creation, acceptable use, subscriptions, application access, data ownership, and support obligations.</p></div></section></main>;
}