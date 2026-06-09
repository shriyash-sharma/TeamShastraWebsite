import type { Metadata } from "next";
import Link from "next/link";
import { betaStatus, loginUrl, pageMetadata, releaseNote, signupUrl } from "@/lib/site";

export const metadata: Metadata = pageMetadata("/privacy-policy", "Privacy Policy | TeamShastra", "TeamShastra privacy policy for the public marketing website and application platform.");

export default function PrivacyPolicyPage() {
  return <main><section className="page-hero"><div className="section-inner"><span className="eyebrow">Privacy Policy</span><h1>Privacy information for TeamShastra visitors and beta users.</h1><p className="page-lead">{betaStatus} {releaseNote} The current privacy policy is available at /privacy.</p><div className="hero-actions"><Link className="button primary" href="/privacy">View Privacy Policy</Link><a className="button secondary" href={loginUrl}>Login</a><a className="button ghost" href={signupUrl}>Join Beta</a></div></div></section><section className="section"><div className="section-inner"><h2>Current policy page</h2><p className="section-copy">Use <Link href="/privacy">teamshastra.com/privacy</Link> for the Play Store and public privacy policy URL.</p></div></section></main>;
}