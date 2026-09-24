import type { Metadata } from "next";
import { betaStatus, loginUrl, pageMetadata, playStoreUrl, pricingSummary, signupUrl } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "/pricing",
  "Pricing | TeamShastra",
  "TeamShastra pricing: Starter is free. Growth starts at ₹99 per user per month (plus GST) after a 1-month free trial. Enterprise pricing on request."
);

const plans = [
  {
    name: "Starter",
    price: "Free",
    text: "For teams getting started with jobs, attendance, and a company workspace.",
    cta: "Get started",
    features: ["Company workspace", "Jobs and attendance", "Team invites"]
  },
  {
    name: "Growth",
    price: "₹99 / user / month",
    priceNote: "+ GST · 1-month free trial",
    text: "For growing field teams that need richer operational controls.",
    cta: "Get started",
    featured: true,
    features: ["Advanced dispatch", "Payroll", "Reporting", "Role management"]
  },
  {
    name: "Enterprise",
    price: "Contact us",
    text: "For multi-location teams that need onboarding and security review.",
    cta: "Contact us",
    features: ["Launch planning", "Security reviews", "Onboarding discussion"]
  }
];

export default function PricingPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <span className="eyebrow">Pricing</span>
          <h1>Start free. Plans start at just ₹99 per user, per month.</h1>
          <p className="page-lead">
            {betaStatus} Signup and login happen on app.teamshastra.com.
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
        <div className="section-inner card-grid">
          {plans.map((plan) => (
            <article className={`price-card${plan.featured ? " featured" : ""}`} key={plan.name}>
              <h3>{plan.name}</h3>
              <div className="price">{plan.price}</div>
              {plan.priceNote ? <p>{plan.priceNote}</p> : null}
              <p>{plan.text}</p>
              <ul className="list">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a className="button primary" href={plan.cta === "Contact us" ? "/contact" : signupUrl}>
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="section-inner">
          <h2>Billing details</h2>
          <ul className="list">
            <li>Growth plan: {pricingSummary.trial}.</li>
            <li>After the trial: {pricingSummary.paidPrice}, billed monthly.</li>
            <li>Refunds: {pricingSummary.refundPolicy}.</li>
            <li>Cancellation: {pricingSummary.cancellationPolicy}.</li>
            <li>Enterprise plans are billed on separately agreed, written commercial terms.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
