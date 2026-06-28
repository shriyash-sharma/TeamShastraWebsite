import { betaStatus, loginUrl, releaseNote, signupUrl } from "@/lib/site";

type Props = {
  title?: string;
  text?: string;
  variant?: "default" | "banner";
};

export function SeoCta({
  title = "Ready to modernize your field operations?",
  text = "Join the TeamShastra public beta, create a test workspace, and evaluate workforce management workflows before the planned production release.",
  variant = "banner"
}: Props) {
  if (variant === "banner") {
    return (
      <section className="section alt">
        <div className="section-inner banner">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
            <p className="seo-cta-note">{betaStatus} {releaseNote}</p>
          </div>
          <div className="seo-cta-actions">
            <a className="button primary" href={signupUrl}>Start Free Trial</a>
            <a className="button secondary" href={loginUrl}>Book Demo</a>
            <a className="button ghost seo-cta-ghost" href="/contact">Talk to Expert</a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="seo-inline-cta">
      <h3>{title}</h3>
      <p>{text}</p>
      <div className="hero-actions">
        <a className="button primary" href={signupUrl}>Start Free Trial</a>
        <a className="button secondary" href="/contact">Request Pricing</a>
      </div>
    </div>
  );
}
