import type { Metadata } from "next";
import { betaStatus, loginUrl, pageMetadata, releaseNote, signupUrl } from "@/lib/site";

export const metadata: Metadata = pageMetadata("/pricing", "Pricing | TeamShastra", "TeamShastra public beta pricing information for field service teams testing the platform before production release.");

const plans = [
  { name: "Beta", price: "Free", text: "For teams testing scheduling, dispatch, and company setup before production use.", cta: "Join Beta", features: ["Test company creation", "Core job tracking", "Team workspace evaluation"] },
  { name: "Growth", price: "Announced soon", text: "For growing field teams that need richer operational controls after production release.", cta: "Try Beta", featured: true, features: ["Advanced dispatch", "Reporting", "Role management"] },
  { name: "Enterprise", price: "Contact us", text: "For multi-location teams planning future production workflows with TeamShastra.", cta: "Contact Beta Team", features: ["Launch planning", "Security reviews", "Onboarding discussion"] }
];

export default function PricingPage() {
  return (
    <main>
      <section className="page-hero"><div className="section-inner"><span className="eyebrow">Pricing</span><h1>Public beta access is open while pricing is finalized.</h1><p className="page-lead">{betaStatus} {releaseNote} Beta signup, login, and app testing happen on app.teamshastra.com.</p><div className="hero-actions"><a className="button primary" href={signupUrl}>Join Beta</a><a className="button secondary" href={loginUrl}>Login</a></div></div></section>
      <section className="section"><div className="section-inner card-grid">{plans.map((plan) => <article className={`price-card${plan.featured ? " featured" : ""}`} key={plan.name}><h3>{plan.name}</h3><div className="price">{plan.price}</div><p>{plan.text}</p><ul className="list">{plan.features.map((feature) => <li key={feature}>{feature}</li>)}</ul><a className="button primary" href={signupUrl}>{plan.cta}</a></article>)}</div></section>
    </main>
  );
}