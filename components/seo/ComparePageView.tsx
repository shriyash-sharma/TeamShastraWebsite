import Link from "next/link";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoCta } from "@/components/seo/SeoCta";
import { SeoFaq } from "@/components/seo/SeoFaq";
import { compareDisclaimer, formatCheckedDate, type ComparePage } from "@/lib/seo/compare";
import { marketingUrl, organizationSchema, playStoreUrl, signupUrl } from "@/lib/site";

type Props = {
  page: ComparePage;
};

function breadcrumbs(page: ComparePage) {
  const label = `TeamShastra vs ${page.shortName}`;
  return page.path.startsWith("/compare/")
    ? [{ label: "Home", href: "/" }, { label: "Compare", href: "/compare" }, { label }]
    : [{ label: "Home", href: "/" }, { label }];
}

/** One @graph per comparison page. Every string here is also visible on the page. */
function CompareStructuredData({ page }: Props) {
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
      inLanguage: "en-IN",
      dateModified: page.lastChecked,
      isPartOf: { "@id": websiteId },
      publisher: { "@id": organizationSchema["@id"] }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs(page).map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.label,
        item: crumb.href ? `${marketingUrl}${crumb.href}` : pageUrl
      }))
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

export function ComparePageView({ page }: Props) {
  const checked = formatCheckedDate(page.lastChecked);
  return (
    <main>
      <CompareStructuredData page={page} />
      <section className="page-hero">
        <div className="section-inner">
          <SeoBreadcrumbs items={breadcrumbs(page)} />
          <span className="eyebrow">Comparison</span>
          <h1>{page.h1}</h1>
          <p className="page-lead">{page.summary}</p>
          <p className="compare-checked">Last checked: {checked}</p>
          <div className="hero-actions">
            <a className="button primary" href={playStoreUrl}>Get it on Google Play</a>
            <a className="button secondary" href={signupUrl}>Start Free Trial</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner seo-prose">
          <div className="card compare-quick">
            <h2>Quick answer</h2>
            <p>{page.quickAnswer}</p>
          </div>
        </div>
      </section>

      <section className="section alt" id="comparison">
        <div className="section-inner seo-prose">
          <h2>TeamShastra and {page.shortName}, need by need</h2>
          <p>{page.tableIntro}</p>
          <div className="compare-table-wrap" role="region" aria-label={`TeamShastra and ${page.competitor} comparison table`} tabIndex={0}>
            <table className="comparison-table">
              <caption className="visually-hidden">
                What {page.competitor} lists on its public pages and what TeamShastra does, checked {checked}
              </caption>
              <thead>
                <tr>
                  <th scope="col">What you need</th>
                  <th scope="col">{page.competitor}</th>
                  <th scope="col">TeamShastra</th>
                </tr>
              </thead>
              <tbody>
                {page.rows.map((row) => (
                  <tr key={row.need}>
                    <th scope="row">{row.need}</th>
                    <td>
                      {row.them}
                      {row.sources?.map((n) => (
                        <sup key={n}>
                          {" "}
                          <a href={`#source-${n}`} aria-label={`Source ${n}`}>[{n}]</a>
                        </sup>
                      ))}
                    </td>
                    <td>{row.us}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner seo-prose">
          <h2>Where {page.competitor} is the better choice</h2>
          <ul className="compare-list">
            {page.betterChoice.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <h2>Where TeamShastra fits better</h2>
          <ul className="compare-list">
            {page.fitsBetter.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="section alt">
        <div className="section-inner seo-prose">
          <h2>Switching from {page.competitor}</h2>
          {page.switching.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <p className="seo-internal-links">
            {page.switchingLinks.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
            <Link href="/pricing">TeamShastra pricing</Link>
            <Link href="/compare">All comparisons</Link>
          </p>
        </div>
      </section>

      <SeoFaq
        items={page.faqs}
        title={`TeamShastra vs ${page.shortName}: questions owners ask`}
        id="faq-comparison"
        intro={`Straight answers for owners weighing ${page.competitor} against TeamShastra.`}
      />

      <section className="section alt" id="sources">
        <div className="section-inner seo-prose">
          <h2>Sources</h2>
          <p>We read each of these pages on {checked}.</p>
          <ol className="compare-sources">
            {page.sources.map((source, index) => (
              <li key={source.url} id={`source-${index + 1}`}>
                <a href={source.url} rel="nofollow noopener" target="_blank">{source.label}</a>
              </li>
            ))}
          </ol>
          <p className="compare-disclaimer">{compareDisclaimer}</p>
        </div>
      </section>

      <SeoCta
        title="Try TeamShastra with your own team"
        text="Every new company gets a 30-day free Growth trial with all features, then moves to the free Starter plan unless you upgrade."
      />
    </main>
  );
}
