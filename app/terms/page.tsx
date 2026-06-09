import type { Metadata } from "next";
import { betaStatus, loginUrl, pageMetadata, releaseNote, signupUrl } from "@/lib/site";

export const metadata: Metadata = pageMetadata("/terms", "Terms | TeamShastra", "TeamShastra terms for the public marketing website and application platform.");

export default function TermsPage() {
  return <main><section className="page-hero"><div className="section-inner"><span className="eyebrow">Terms</span><h1>Terms for TeamShastra beta testing and application use.</h1><p className="page-lead">{betaStatus} {releaseNote} Final production terms will be published before launch.</p><div className="hero-actions"><a className="button primary" href={signupUrl}>Join Beta</a><a className="button secondary" href={loginUrl}>Login</a></div></div></section><section className="section"><div className="section-inner"><h2>Beta terms notice</h2><p className="section-copy">TeamShastra is available for public beta testing. Features, pricing, data behavior, and support policies may change before the planned production release.</p></div></section></main>;
}