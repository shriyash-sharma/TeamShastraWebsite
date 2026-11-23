import Link from "next/link";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaq } from "@/components/seo/SeoFaq";
import { getHindiPageBySlug, type HindiPage } from "@/lib/seo/landing/hi";
import type { HindiSection } from "@/lib/seo/landing/hi/types";
import { marketingUrl, organizationSchema, playStoreUrl, signupUrl, supportPhoneWhatsApp } from "@/lib/site";

type Props = {
  page: HindiPage;
};

type Crumb = { label: string; href?: string };

export function hindiBreadcrumbs(page: HindiPage): Crumb[] {
  if (page.kind === "home") return [{ label: "होम" }];
  const hub = page.kind === "feature" ? { label: "फ़ीचर", href: "/features" } : { label: "इंडस्ट्री", href: "/industries" };
  return [{ label: "होम", href: "/hi" }, hub, { label: page.name }];
}

/** One @graph per Hindi page. Every string here is also visible on the page. */
function HindiStructuredData({ page }: Props) {
  const pageUrl = `${marketingUrl}${page.path}`;
  const websiteId = `${marketingUrl}/#website`;
  const graph = [
    organizationSchema,
    { "@type": "WebSite", "@id": websiteId, url: `${marketingUrl}/`, name: "TeamShastra" },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: page.title,
      description: page.metaDescription,
      inLanguage: "hi-IN",
      dateModified: page.lastUpdated,
      isPartOf: { "@id": websiteId },
      publisher: { "@id": organizationSchema["@id"] }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: hindiBreadcrumbs(page).map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.label,
        item: crumb.href ? `${marketingUrl}${crumb.href}` : pageUrl
      }))
    },
    {
      "@type": "SoftwareApplication",
      name: "TeamShastra",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Android, Web",
      featureList: page.featureList,
      downloadUrl: playStoreUrl,
      offers: { "@type": "Offer", price: "0", priceCurrency: "INR" }
    },
    {
      "@type": "FAQPage",
      mainEntity: page.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer }
      }))
    }
  ];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }}
    />
  );
}

function SectionBody({ section }: { section: HindiSection }) {
  const ListTag = section.ordered ? "ol" : "ul";
  return (
    <>
      {section.paragraphs?.map((paragraph) => <p key={paragraph.slice(0, 48)}>{paragraph}</p>)}
      {section.list ? (
        <ListTag className="list">
          {section.list.map((item) => <li key={item}>{item}</li>)}
        </ListTag>
      ) : null}
      {section.links ? (
        <div className="seo-index-grid">
          {section.links.map((link) => (
            <article className="seo-index-card" key={link.href}>
              <h3><Link href={link.href}>{link.label}</Link></h3>
              <p>{link.text}</p>
            </article>
          ))}
        </div>
      ) : null}
    </>
  );
}

export function HindiPageView({ page }: Props) {
  const related = page.related.flatMap((slug) => {
    const target = getHindiPageBySlug(slug);
    return target ? [target] : [];
  });

  return (
    <main>
      <HindiStructuredData page={page} />
      <section className="page-hero">
        <div className="section-inner">
          {page.kind === "home" ? null : <SeoBreadcrumbs items={hindiBreadcrumbs(page)} />}
          <LanguageSwitch hindiPath={page.path} englishPath={page.enPath} />
          <span className="eyebrow">{page.eyebrow}</span>
          <h1>{page.h1}</h1>
          <p className="page-lead">{page.intro}</p>
          <div className="hero-actions">
            <a className="button primary" href={playStoreUrl}>Google Play से ऐप लें</a>
            <a className="button secondary" href={signupUrl}>फ्री ट्रायल शुरू करें</a>
          </div>
        </div>
      </section>

      {page.sections.map((section, index) => (
        <section className={index % 2 === 0 ? "section" : "section alt"} key={section.heading}>
          <div className="section-inner seo-prose">
            <h2>{section.heading}</h2>
            <SectionBody section={section} />
          </div>
        </section>
      ))}

      <SeoFaq
        items={page.faqs}
        title="सवाल-जवाब"
        id="faq"
        intro="मालिक और मैनेजर अक्सर यही पूछते हैं।"
        questionHeadings
      />

      {related.length ? (
        <section className="section alt">
          <div className="section-inner seo-prose">
            <h2>हिंदी में और पढ़ें</h2>
            <p className="seo-internal-links">
              {related.map((target) => <Link key={target.path} href={target.path}>{target.name}</Link>)}
              <Link href="/hi">हिंदी होम</Link>
              <Link href="/pricing">कीमत (English)</Link>
            </p>
          </div>
        </section>
      ) : null}

      <section className="section alt">
        <div className="section-inner banner">
          <div>
            <h2>अपनी टीम के साथ आज़माइए</h2>
            <p>हर नई कंपनी को 30 दिन का फ्री Growth ट्रायल मिलता है, सारे फ़ीचर के साथ। सवाल हो तो WhatsApp कीजिए, सोमवार से शनिवार, सुबह 10 से शाम 7 बजे तक।</p>
          </div>
          <div className="seo-cta-actions">
            <a className="button primary" href={playStoreUrl}>Google Play से ऐप लें</a>
            <a className="button secondary" href={supportPhoneWhatsApp}>WhatsApp पर पूछें</a>
          </div>
        </div>
      </section>
    </main>
  );
}
