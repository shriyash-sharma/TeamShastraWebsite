import { betaStatus, loginUrl, releaseNote, signupUrl, type MarketingPage as MarketingPageContent } from "@/lib/site";

type Props = {
  content: MarketingPageContent;
};

export function MarketingPage({ content }: Props) {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <span className="eyebrow">{content.eyebrow}</span>
          <h1>{content.title}</h1>
          <p className="page-lead">{content.description}</p>
          <div className="hero-actions">
            <a className="button primary" href={signupUrl}>{content.cta}</a>
            <a className="button secondary" href={loginUrl}>Login</a>
          </div>
          <p className="beta-note">{betaStatus} {releaseNote}</p>
        </div>
      </section>
      <section className="section">
        <div className="section-inner card-grid">
          {content.cards.map((card) => (
            <article className="card" key={card.title}>
              {card.marker ? <div className="icon-box">{card.marker}</div> : null}
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section alt">
        <div className="section-inner banner">
          <div>
            <h2>{content.bannerTitle}</h2>
            <p>{content.bannerText}</p>
          </div>
          <a className="button primary" href={signupUrl}>{content.bannerCta}</a>
        </div>
      </section>
    </main>
  );
}