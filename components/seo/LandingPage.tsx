import Image from "next/image";
import Link from "next/link";
import type { LandingSection, LandingView } from "@/lib/seo/landing/view";
import { playStoreUrl, pricingSummary, signupUrl, supportHours, supportPhoneDisplay, supportPhoneWhatsApp } from "@/lib/site";
import { LandingStructuredData } from "./LandingStructuredData";
import { SeoBreadcrumbs } from "./SeoBreadcrumbs";
import { SeoFaq } from "./SeoFaq";

type Props = {
  view: LandingView;
};

function SectionBody({ section }: { section: LandingSection }) {
  const ListTag = section.ordered ? "ol" : "ul";
  return (
    <>
      {section.paragraphs?.map((paragraph) => <p key={paragraph.slice(0, 48)}>{paragraph}</p>)}
      {section.trailingLink ? (
        <p>
          {section.trailingLink.before} <Link href={section.trailingLink.link.href}>{section.trailingLink.link.label}</Link>.
        </p>
      ) : null}
      {section.list ? (
        <ListTag className="list">
          {section.list.map((item) => <li key={item}>{item}</li>)}
        </ListTag>
      ) : null}
      {section.linkedItems ? (
        <ul className="list landing-linked-list">
          {section.linkedItems.map((item) => (
            <li key={item.href}>
              <strong><Link href={item.href}>{item.label}</Link></strong> — {item.text}
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

/** Shared template for /features/<slug> and /industries/<slug>. All copy comes from lib/seo/landing. */
export function LandingPage({ view }: Props) {
  return (
    <main className="seo-page">
      <LandingStructuredData view={view} />

      <section className="page-hero">
        <div className={`section-inner${view.screenshot ? " split-grid landing-hero" : ""}`}>
          <div>
            <SeoBreadcrumbs items={view.breadcrumbs} />
            <span className="eyebrow">{view.eyebrow}</span>
            <h1>{view.h1}</h1>
            <p className="page-lead">{view.intro}</p>
            <div className="hero-actions">
              <a className="button primary" href={playStoreUrl}>Get it on Google Play</a>
              <a className="button secondary" href={signupUrl}>Start free trial</a>
            </div>
          </div>
          {view.screenshot ? (
            <figure className="phone-frame phone-frame-gallery landing-shot">
              <Image
                src={view.screenshot.src}
                alt={view.screenshot.alt}
                width={714}
                height={1599}
                sizes="(max-width: 640px) 62vw, 240px"
                style={{ width: "100%", height: "auto" }}
              />
            </figure>
          ) : null}
        </div>
      </section>

      {view.sections.map((section, index) => (
        <section className={`section${index % 2 === 1 ? " alt" : ""}`} key={section.heading}>
          <div className="section-inner seo-prose">
            <h2>{section.heading}</h2>
            <SectionBody section={section} />
          </div>
        </section>
      ))}

      <SeoFaq
        items={view.faqs}
        title={view.faqTitle}
        id="faq"
        intro={`Straight answers about ${view.name.toLowerCase()} in TeamShastra.`}
        questionHeadings
      />

      <section className="section alt">
        <div className="section-inner">
          <div className="section-head">
            <h2>Keep exploring</h2>
            <p className="section-copy">
              Plans and prices are on the <Link href="/pricing">pricing page</Link>.
            </p>
          </div>
          {view.related.map((group) => (
            <div className="seo-index-group" key={group.heading}>
              <h3>{group.heading}</h3>
              <nav className="seo-internal-links" aria-label={group.heading}>
                {group.links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
              </nav>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-inner banner">
          <div>
            <h2>Try it with your own team</h2>
            <p>
              Starter plan: {pricingSummary.starterPrice}. Growth plan: {pricingSummary.paidPrice}. Every new company
              starts with a 30-day free Growth trial.
            </p>
            <p>
              Questions? WhatsApp or call {supportPhoneDisplay}, {supportHours}.
            </p>
          </div>
          <div className="seo-cta-actions">
            <a className="button primary" href={playStoreUrl}>Get it on Google Play</a>
            <a className="button secondary" href={supportPhoneWhatsApp} target="_blank" rel="noopener noreferrer">WhatsApp support</a>
          </div>
        </div>
      </section>
    </main>
  );
}
