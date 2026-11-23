import Link from "next/link";
import { ShareLinks } from "@/components/seo/ShareLinks";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoCta } from "@/components/seo/SeoCta";
import { SeoFaq } from "@/components/seo/SeoFaq";
import { formatGuideDate, getGuide, guideDisclaimerText, guidePath, guidesAuthor, readingTime, type Guide } from "@/lib/blog";
import type { GuideBlock } from "@/lib/blog/types";
import { featureLandingPath, getFeatureLanding } from "@/lib/seo/landing/features";
import { industryLink } from "@/lib/seo/landing/industries";
import { getSolution } from "@/lib/seo/solutions";
import { marketingUrl, organizationSchema } from "@/lib/site";

type Props = {
  guide: Guide;
};

export function guideBreadcrumbs(guide: Guide) {
  return [{ label: "Home", href: "/" }, { label: "Guides", href: "/blog" }, { label: guide.h1 }];
}

function featureLinks(slugs: string[]) {
  return slugs.flatMap((slug) => {
    const feature = getFeatureLanding(slug);
    return feature ? [{ href: featureLandingPath(slug), label: feature.name }] : [];
  });
}

/** One @graph per guide. Every string here is also visible on the page. */
function GuideStructuredData({ guide }: Props) {
  const pageUrl = `${marketingUrl}${guidePath(guide.slug)}`;
  const websiteId = `${marketingUrl}/#website`;
  const graph = [
    organizationSchema,
    { "@type": "WebSite", "@id": websiteId, url: `${marketingUrl}/`, name: "TeamShastra" },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: guide.h1,
      description: guide.metaDescription,
      datePublished: guide.datePublished,
      dateModified: guide.dateModified,
      author: { "@type": "Organization", name: guidesAuthor.name, url: `${marketingUrl}${guidesAuthor.url}` },
      publisher: { "@id": organizationSchema["@id"] },
      image: `${pageUrl}/opengraph-image`,
      inLanguage: "en-IN",
      mainEntityOfPage: pageUrl,
      isPartOf: { "@id": websiteId }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: guideBreadcrumbs(guide).map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.label,
        item: crumb.href ? `${marketingUrl}${crumb.href}` : pageUrl
      }))
    },
    {
      "@type": "FAQPage",
      mainEntity: guide.faqs.map((faq) => ({
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

function BlockBody({ block }: { block: GuideBlock }) {
  const ListTag = block.ordered ? "ol" : "ul";
  return (
    <>
      {block.paragraphs?.map((paragraph) => <p key={paragraph.slice(0, 48)}>{paragraph}</p>)}
      {block.list ? (
        <ListTag className="compare-list">
          {block.list.map((item) => <li key={item}>{item}</li>)}
        </ListTag>
      ) : null}
      {block.table ? (
        <div className="compare-table-wrap table-scroll" role="region" aria-label={block.table.caption} tabIndex={0}>
          <table className="comparison-table">
            <caption className="visually-hidden">{block.table.caption}</caption>
            <thead>
              <tr>
                {block.table.head.map((cell, index) => <th scope="col" key={`${cell}-${index}`}>{cell}</th>)}
              </tr>
            </thead>
            <tbody>
              {block.table.rows.map((row) => (
                <tr key={row.join("|")}>
                  <th scope="row">{row[0]}</th>
                  {row.slice(1).map((cell, index) => <td key={`${cell}-${index}`}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
      {block.after?.map((paragraph) => <p key={paragraph.slice(0, 48)}>{paragraph}</p>)}
    </>
  );
}

export function GuideView({ guide }: Props) {
  const features = featureLinks(guide.relatedFeatures);
  const industries = guide.relatedIndustries.flatMap((slug) => {
    const link = industryLink(slug);
    return link ? [link] : [];
  });
  const otherPages = (guide.relatedSolutions ?? []).flatMap((slug) => {
    const page = getSolution(slug);
    return page ? [{ href: `/${slug}`, label: page.title }] : [];
  });
  const related = guide.relatedGuides.flatMap((slug) => {
    const other = getGuide(slug);
    return other ? [other] : [];
  });

  return (
    <main>
      <GuideStructuredData guide={guide} />
      <section className="page-hero">
        <div className="section-inner seo-prose">
          <SeoBreadcrumbs items={guideBreadcrumbs(guide)} />
          <span className="eyebrow">Guide</span>
          <h1>{guide.h1}</h1>
          <p className="compare-checked">
            Updated <time dateTime={guide.dateModified}>{formatGuideDate(guide.dateModified)}</time> · {readingTime(guide)} min read · By{" "}
            <Link href={guidesAuthor.url}>{guidesAuthor.name}</Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner seo-prose">
          <div className="card compare-quick">
            <h2>Quick answer</h2>
            <p>{guide.summary}</p>
          </div>
          <nav className="guide-toc" aria-label="On this page">
            <h2>On this page</h2>
            <ol>
              {guide.sections.map((section) => (
                <li key={section.id}><a href={`#${section.id}`}>{section.heading}</a></li>
              ))}
              <li><a href="#faq">Questions</a></li>
              {guide.sources.length > 0 ? <li><a href="#sources">Sources</a></li> : null}
            </ol>
          </nav>
        </div>
      </section>

      {guide.sections.map((section, index) => (
        <section className={index % 2 === 0 ? "section alt guide-section" : "section guide-section"} id={section.id} key={section.id}>
          <div className="section-inner seo-prose">
            <h2>{section.heading}</h2>
            <BlockBody block={section} />
            {section.subsections?.map((sub) => (
              <div key={sub.heading}>
                <h3>{sub.heading}</h3>
                <BlockBody block={sub} />
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="section">
        <div className="section-inner seo-prose">
          <div className="card compare-quick guide-helps">
            <h2>How TeamShastra helps</h2>
            <p>{guide.helps}</p>
            <p className="seo-internal-links">
              {features.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
              {industries.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
              {otherPages.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
            </p>
            <ShareLinks url={`${marketingUrl}${guidePath(guide.slug)}`} title={guide.h1} label="Share this guide" />
          </div>
        </div>
      </section>

      <SeoFaq items={guide.faqs} title="Questions owners ask" id="faq" intro="Short answers to what people ask us most about this." />

      {guide.sources.length > 0 ? (
        <section className="section alt" id="sources">
          <div className="section-inner seo-prose">
            <h2>Sources</h2>
            <p>We read each official page below on {formatGuideDate(guide.sourcesChecked)}.</p>
            <ol className="compare-sources">
              {guide.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} rel="noopener" target="_blank">{source.label}</a>
                </li>
              ))}
            </ol>
            {guide.legal ? <p className="compare-disclaimer guide-disclaimer">{guideDisclaimerText(guide)}</p> : null}
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className="section-inner seo-prose">
          <h2>Related guides</h2>
          <div className="seo-index-grid">
            {related.map((other) => (
              <article className="seo-index-card" key={other.slug}>
                <h3><Link href={guidePath(other.slug)}>{other.h1}</Link></h3>
                <p>{other.metaDescription}</p>
              </article>
            ))}
          </div>
          <p className="seo-internal-links">
            <Link href="/blog">All guides</Link>
          </p>
        </div>
      </section>

      <SeoCta
        title="Run salary, GST bills and AMC visits in one app"
        text="Every new company gets a 30-day free Growth trial with all features, then moves to the free Starter plan unless you upgrade."
      />
    </main>
  );
}
