import type { Metadata } from "next";
import { loginUrl, pageMetadata, signupUrl } from "@/lib/site";

export const metadata: Metadata = pageMetadata("/pricing", "Pricing | TeamShastra", "Simple TeamShastra pricing for field service management teams. Start free on the app domain.");

const plans = [
  { name: "Starter", price: "Free", text: "For small teams evaluating scheduling, dispatch, and company setup.", cta: "Start Free", features: ["Company creation", "Core job tracking", "Team workspace"] },
  { name: "Growth", price: "Custom", text: "For growing field teams that need richer operational controls.", cta: "Try TeamShastra", featured: true, features: ["Advanced dispatch", "Reporting", "Role management"] },
  { name: "Enterprise", price: "Custom", text: "For multi-location teams with complex service workflows.", cta: "Get Started", features: ["Custom onboarding", "Security reviews", "Dedicated support"] }
];

export default function PricingPage() {
  return (
    <main>
      <section className="page-hero"><div className="section-inner"><span className="eyebrow">Pricing</span><h1>Start with a clear path from marketing visit to active company.</h1><p className="page-lead">Use teamshastra.com for public discovery and app.teamshastra.com for signup, login, billing, and authenticated account work.</p><div className="hero-actions"><a className="button primary" href={signupUrl}>Start Free</a><a className="button secondary" href={loginUrl}>Login</a></div></div></section>
      <section className="section"><div className="section-inner card-grid">{plans.map((plan) => <article className={`price-card${plan.featured ? " featured" : ""}`} key={plan.name}><h3>{plan.name}</h3><div className="price">{plan.price}</div><p>{plan.text}</p><ul className="list">{plan.features.map((feature) => <li key={feature}>{feature}</li>)}</ul><a className="button primary" href={signupUrl}>{plan.cta}</a></article>)}</div></section>
    </main>
  );
}