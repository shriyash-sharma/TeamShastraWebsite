import type { Metadata } from "next";
import Link from "next/link";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoCta } from "@/components/seo/SeoCta";
import { compareDisclaimer, compareHub, comparePages, formatCheckedDate } from "@/lib/seo/compare";
import { marketingUrl, organizationSchema, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "/compare",
  "Compare TeamShastra with Other Business Apps | TeamShastra",
  "Compare TeamShastra with Vyapar, Khatabook, myBillBook and Zoho FSM. Plain, sourced tables on billing, jobs, attendance and payroll, with each date checked."
);

export default function CompareHubPage() {
  const pageUrl = `${marketingUrl}${compareHub.path}`;
  const graph = [
    organizationSchema,
    {
      "@type": "CollectionPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: compareHub.title,
      description: compareHub.metaDescription,
      inLanguage: "en-IN",
      dateModified: compareHub.lastChecked,
      publisher: { "@id": organizationSchema["@id"] }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${marketingUrl}/` },
        { "@type": "ListItem", position: 2, name: "Compare", item: pageUrl }
      ]
    },
    {
      "@type": "ItemList",
      itemListElement: comparePages.map((page, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: `TeamShastra vs ${page.shortName}`,
        url: `${marketingUrl}${page.path}`
      }))
    }
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }}
      />
      <section className="page-hero">
        <div className="section-inner">
          <SeoBreadcrumbs items={[{ label: "Home", href: "/" }, { label: "Compare" }]} />
          <span className="eyebrow">Comparisons</span>
          <h1>{compareHub.h1}</h1>
          <p className="page-lead">{compareHub.intro[0]}</p>
          <p className="compare-checked">Last checked: {formatCheckedDate(compareHub.lastChecked)}</p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner seo-prose">
          <h2>Billing apps and field service apps are different tools</h2>
          {compareHub.intro.slice(1).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <p>
            Want the full picture first? See <Link href="/features">every TeamShastra feature</Link> or{" "}
            <Link href="/pricing">our plans and pricing</Link>.
          </p>
        </div>
      </section>

      <section className="section alt" aria-labelledby="compare-list-heading">
        <div className="section-inner">
          <div className="section-head">
            <h2 id="compare-list-heading">Pick the app you use today</h2>
            <p className="section-copy">Each page has a sourced table, when the other app is the better pick, and how to move over.</p>
          </div>
          <div className="seo-index-grid">
            {comparePages.map((page) => (
              <article className="seo-index-card" key={page.slug}>
                <h3><Link href={page.path}>TeamShastra vs {page.shortName}</Link></h3>
                <p>{page.cardSummary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner seo-prose">
          <p className="compare-disclaimer">{compareDisclaimer}</p>
        </div>
      </section>

      <SeoCta
        title="See how TeamShastra fits your team"
        text="Start with a 30-day free Growth trial with all features. After that, the workspace moves to the free Starter plan unless you upgrade."
      />
    </main>
  );
}
