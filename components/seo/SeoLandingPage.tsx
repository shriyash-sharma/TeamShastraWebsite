import Link from "next/link";
import type { SeoPageContent } from "@/lib/seo/types";
import { dedupeFeatureHighlights } from "@/lib/seo/feature-highlights";
import { betaStatus, loginUrl, playStoreUrl, signupUrl } from "@/lib/site";
import { SeoBreadcrumbs } from "./SeoBreadcrumbs";
import { SeoCaseStudy } from "./SeoCaseStudy";
import { SeoCta } from "./SeoCta";
import { SeoFaq } from "./SeoFaq";
import { SeoIndustries } from "./SeoIndustries";
import { SeoLocalAreas } from "./SeoLocalAreas";
import { SeoLocalContext } from "./SeoLocalContext";
import { SeoStructuredData } from "./SeoStructuredData";

type Props = {
  content: SeoPageContent;
};

export function SeoLandingPage({ content }: Props) {
  const faqTitle = content.cityName
    ? `Field service FAQs for ${content.cityName}`
    : `FAQs about ${content.eyebrow}`;

  const featureHighlights = dedupeFeatureHighlights(content.featureHighlights);
  const internalLinks = content.internalLinks.filter(
    (link, index, links) =>
      links.findIndex((item) => item.href === link.href && item.label === link.label) === index
  );

  return (
    <main className="seo-page">
      <SeoStructuredData content={content} />

      <section className="page-hero">
        <div className="section-inner">
          <SeoBreadcrumbs items={content.breadcrumbs} />
          <span className="eyebrow">{content.eyebrow}</span>
          <h1>{content.h1}</h1>
          <p className="page-lead">{content.heroLead}</p>
          <div className="hero-actions">
            <a className="button primary" href={playStoreUrl}>Get it on Google Play</a>
            <a className="button secondary" href={signupUrl}>Start Free Trial</a>
            <a className="button ghost" href={loginUrl}>Login</a>
          </div>
          <p className="beta-note">{betaStatus}</p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner seo-prose">
          <h2>{content.whyTitle}</h2>
          {content.whyParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
          <h3>{content.cityName ? `What slows ${content.cityName} field teams down` : "Common challenges across India"}</h3>
          <ul className="list">
            {content.challenges.map((challenge) => (
              <li key={challenge}>{challenge}</li>
            ))}
          </ul>
          {content.cityName ? (
            <p>
              Jobs, attendance, GST invoices, staff salary, purchases, stock, and reports work the same in every city — see the{" "}
              <Link href="/features">full feature list</Link> and <Link href="/pricing">pricing</Link>.
            </p>
          ) : null}
        </div>
      </section>

      {content.localContext && content.cityName && content.stateName ? (
        <SeoLocalContext context={content.localContext} cityName={content.cityName} stateName={content.stateName} />
      ) : null}

      <SeoIndustries
        industries={content.industries}
        title={content.cityName ? `Field work we see in ${content.cityName}` : "Industries we serve across India"}
        cityName={content.cityName}
      />

      <section className="section">
        <div className="section-inner seo-prose">
          <h2>{content.cityName ? `Example scenarios in ${content.cityName}` : "Example scenarios"}</h2>
          <p className="section-copy">
            Realistic scenarios showing how businesses use TeamShastra to solve field workforce and service operations challenges.
          </p>
          {content.useCases.map((useCase) => (
            <article className="seo-use-case" key={useCase.title}>
              <h3>{useCase.title}</h3>
              <p className="seo-use-case-industry">{useCase.industry}</p>
              <p><strong>Problem:</strong> {useCase.problem}</p>
              <p><strong>Solution:</strong> {useCase.solution}</p>
              <p><strong>Benefits:</strong> {useCase.benefits.join(" · ")}</p>
            </article>
          ))}
        </div>
      </section>

      {content.caseStudy ? <SeoCaseStudy caseStudy={content.caseStudy} /> : null}

      {featureHighlights.length > 0 ? (
        <section className="section alt">
          <div className="section-inner">
            <div className="section-head">
              <h2>{content.cityName ? `One app for ${content.cityName} field teams` : "Feature highlights"}</h2>
              <p className="section-copy">
                {content.cityName
                  ? `GST invoicing, attendance, work orders, expenses, and AMC contracts for ${content.cityName} businesses — in the same workspace as your jobs.`
                  : "How TeamShastra helps businesses manage jobs, attendance, GST invoices, staff salary, expenses, and field operations."}
              </p>
            </div>
            <div className="card-grid seo-feature-grid">
              {featureHighlights.map((feature, index) => (
                <article className="card" key={`feature-highlight-${index}`}>
                  <h3>{feature.href ? <Link href={feature.href}>{feature.title}</Link> : feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {content.benefits.length > 0 ? (
        <section className="section">
          <div className="section-inner seo-prose">
            <h2>Benefits for your team</h2>
            <ul className="list seo-benefits-list">
              {content.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {content.localAreas.length > 0 && content.cityName ? (
        <SeoLocalAreas areas={content.localAreas} cityName={content.cityName} />
      ) : null}

      <SeoFaq items={content.faqs} title={faqTitle} />

      <section className="section">
        <div className="section-inner">
          <div className="section-head">
            <h2>Related resources</h2>
            <p className="section-copy">Explore more TeamShastra solutions, city pages, and product information.</p>
          </div>
          <nav className="seo-internal-links" aria-label="Related pages">
            {internalLinks.map((link, index) => (
              <Link key={`${link.href}-${index}`} href={link.href}>{link.label}</Link>
            ))}
          </nav>
        </div>
      </section>

      <SeoCta
        title={content.cityName ? `Get started with TeamShastra in ${content.cityName}` : "Get started with TeamShastra across India"}
        text={`Create a workspace and evaluate ${content.eyebrow.toLowerCase()} workflows for your team.`}
      />
    </main>
  );
}
