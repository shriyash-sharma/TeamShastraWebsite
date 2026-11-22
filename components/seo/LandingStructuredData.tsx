import type { LandingView } from "@/lib/seo/landing/view";
import { marketingUrl, organizationSchema, playStoreUrl } from "@/lib/site";

type Props = {
  view: LandingView;
};

/** One @graph per landing page. Every string here is also visible on the page. */
export function LandingStructuredData({ view }: Props) {
  const pageUrl = `${marketingUrl}${view.path}`;
  const websiteId = `${marketingUrl}/#website`;

  const graph = [
    organizationSchema,
    { "@type": "WebSite", "@id": websiteId, url: `${marketingUrl}/`, name: "TeamShastra" },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: view.title,
      description: view.metaDescription,
      inLanguage: "en-IN",
      dateModified: view.lastUpdated,
      isPartOf: { "@id": websiteId },
      publisher: { "@id": organizationSchema["@id"] }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: view.breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.label,
        item: crumb.href ? `${marketingUrl}${crumb.href === "/" ? "/" : crumb.href}` : pageUrl
      }))
    },
    {
      "@type": "SoftwareApplication",
      name: "TeamShastra",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Android, Web",
      featureList: view.featureList,
      downloadUrl: playStoreUrl,
      offers: { "@type": "Offer", price: "0", priceCurrency: "INR" }
    },
    {
      "@type": "FAQPage",
      mainEntity: view.faqs.map((faq) => ({
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
