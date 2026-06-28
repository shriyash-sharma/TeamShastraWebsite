import Link from "next/link";
import type { SeoPageContent } from "@/lib/seo/types";
import { betaStatus, loginUrl, releaseNote, signupUrl } from "@/lib/site";
import { SeoBreadcrumbs } from "./SeoBreadcrumbs";
import { SeoCaseStudy } from "./SeoCaseStudy";
import { SeoCta } from "./SeoCta";
import { SeoFaq } from "./SeoFaq";
import { SeoIndustries } from "./SeoIndustries";
import { SeoLocalAreas } from "./SeoLocalAreas";
import { SeoStructuredData } from "./SeoStructuredData";

type Props = {
  content: SeoPageContent;
};

export function SeoLandingPage({ content }: Props) {
  const faqTitle = content.cityName
    ? `FAQs about ${content.eyebrow} in ${content.cityName}`
    : `FAQs about ${content.eyebrow}`;

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
            <a className="button primary" href={signupUrl}>Start Free Trial</a>
            <a className="button secondary" href={loginUrl}>Book Demo</a>
            <a className="button ghost" href="/contact">Request Pricing</a>
          </div>
          <p className="beta-note">{betaStatus} {releaseNote}</p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner seo-prose">
          <h2>{content.whyTitle}</h2>
          {content.whyParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
          <h3>Local challenges {content.cityName ? `in ${content.cityName}` : "across India"}</h3>
          <ul className="list">
            {content.challenges.map((challenge) => (
              <li key={challenge}>{challenge}</li>
            ))}
          </ul>
        </div>
      </section>

      <SeoIndustries
        industries={content.industries}
        title={content.cityName ? `Industries in ${content.cityName}` : "Industries we serve across India"}
        cityName={content.cityName}
      />

      <section className="section">
        <div className="section-inner seo-prose">
          <h2>Local use cases{content.cityName ? ` in ${content.cityName}` : ""}</h2>
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

      <SeoCaseStudy caseStudy={content.caseStudy} />

      <section className="section alt">
        <div className="section-inner">
          <div className="section-head">
            <h2>Feature highlights</h2>
            <p className="section-copy">How TeamShastra helps businesses manage attendance, field teams, work orders, and service operations.</p>
          </div>
          <div className="card-grid seo-feature-grid">
            {content.featureHighlights.map((feature) => (
              <article className="card" key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

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
            {content.internalLinks.map((link) => (
              <Link key={link.href + link.label} href={link.href}>{link.label}</Link>
            ))}
          </nav>
        </div>
      </section>

      <SeoCta
        title={content.cityName ? `Get started with TeamShastra in ${content.cityName}` : "Get started with TeamShastra across India"}
        text={`Create a beta workspace and evaluate ${content.eyebrow.toLowerCase()} workflows for your team. No production commitment required during public beta.`}
      />
    </main>
  );
}
