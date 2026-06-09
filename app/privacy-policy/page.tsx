import type { Metadata } from "next";
import { loginUrl, pageMetadata, signupUrl } from "@/lib/site";

export const metadata: Metadata = pageMetadata("/privacy-policy", "Privacy Policy | TeamShastra", "TeamShastra privacy policy for the public marketing website and application platform.");

export default function PrivacyPolicyPage() {
  return <main><section className="page-hero"><div className="section-inner"><span className="eyebrow">Privacy Policy</span><h1>Privacy information for TeamShastra visitors and users.</h1><p className="page-lead">Replace this placeholder policy with the approved legal text before production launch.</p><div className="hero-actions"><a className="button primary" href={signupUrl}>Start Free</a><a className="button secondary" href={loginUrl}>Login</a></div></div></section><section className="section"><div className="section-inner"><h2>Policy placeholder</h2><p className="section-copy">This page is included for footer navigation and sitemap coverage. Add final privacy terms covering website analytics, application account data, company data, support communication, and retention practices.</p></div></section></main>;
}