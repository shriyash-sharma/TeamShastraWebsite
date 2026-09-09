import { betaStatus, loginUrl, playStoreUrl, signupUrl } from "@/lib/site";

type Props = {
  title?: string;
  text?: string;
  variant?: "default" | "banner";
};

export function SeoCta({
  title = "Ready to modernize your field operations?",
  text = "Create a TeamShastra workspace and run jobs, attendance, billing, and expenses from one app.",
  variant = "banner"
}: Props) {
  if (variant === "banner") {
    return (
      <section className="section alt">
        <div className="section-inner banner">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
            <p className="seo-cta-note">{betaStatus}</p>
          </div>
          <div className="seo-cta-actions">
            <a className="button primary" href={playStoreUrl}>Get it on Google Play</a>
            <a className="button secondary" href={signupUrl}>Start Free Trial</a>
            <a className="button ghost seo-cta-ghost" href={loginUrl}>Login</a>
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
        <a className="button primary" href={playStoreUrl}>Get it on Google Play</a>
        <a className="button secondary" href={signupUrl}>Start Free Trial</a>
      </div>
    </div>
  );
}
