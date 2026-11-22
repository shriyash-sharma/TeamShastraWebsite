import Link from "next/link";
import type { ReactNode } from "react";
import { betaStatus, loginUrl, playStoreUrl, signupUrl, type MarketingPage as MarketingPageContent } from "@/lib/site";
import { PageBreadcrumbs } from "./seo/PageBreadcrumbs";

type Props = {
  content: MarketingPageContent;
  /** Path of the page, for the breadcrumb line. */
  path: string;
  /** Screen-reader heading for the card grid, so headings go H1 → H2 → H3. */
  cardsHeading: string;
  children?: ReactNode;
};

export function MarketingPage({ content, path, cardsHeading, children }: Props) {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <PageBreadcrumbs label={content.eyebrow} path={path} />
          <span className="eyebrow">{content.eyebrow}</span>
          <h1>{content.title}</h1>
          <p className="page-lead">{content.description}</p>
          <div className="hero-actions">
            <a className="button primary" href={playStoreUrl}>Get it on Google Play</a>
            <a className="button secondary" href={signupUrl}>{content.cta}</a>
            <a className="button ghost" href={loginUrl}>Login</a>
          </div>
          <p className="beta-note">{betaStatus}</p>
        </div>
      </section>
      <section className="section">
        <h2 className="visually-hidden">{cardsHeading}</h2>
        <div className="section-inner card-grid">
          {content.cards.map((card) => (
            <article className="card" key={card.title}>
              {card.marker ? <div className="icon-box">{card.marker}</div> : null}
              <h3>{card.href ? <Link href={card.href}>{card.title}</Link> : card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>
      {children}
      <section className="section alt">
        <div className="section-inner banner">
          <div>
            <h2>{content.bannerTitle}</h2>
            <p>{content.bannerText}</p>
          </div>
          <div className="hero-actions">
            <a className="button primary" href={playStoreUrl}>Get it on Google Play</a>
            <a className="button secondary" href={signupUrl}>{content.bannerCta}</a>
          </div>
        </div>
      </section>
    </main>
  );
}