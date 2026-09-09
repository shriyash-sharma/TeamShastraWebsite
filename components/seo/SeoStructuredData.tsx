import type { SeoPageContent } from "@/lib/seo/types";
import { marketingUrl, playStoreUrl, productFeatureList } from "@/lib/site";

type Props = {
  content: SeoPageContent;
};

export function SeoStructuredData({ content }: Props) {
  const pageUrl = `${marketingUrl}${content.path}`;

  const graph = [
    {
      "@type": "Organization",
      "@id": `${marketingUrl}/#organization`,
      name: "TeamShastra",
      url: marketingUrl,
      sameAs: [playStoreUrl]
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: content.breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.label,
        ...(crumb.href ? { item: `${marketingUrl}${crumb.href}` } : { item: pageUrl })
      }))
    },
    {
      "@type": "SoftwareApplication",
      name: "TeamShastra",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, Android",
      description:
        "Field service management software for Indian companies: jobs, attendance, GST invoices, purchases, expenses, and reports.",
      featureList: productFeatureList,
      downloadUrl: playStoreUrl,
      installUrl: playStoreUrl,
      sameAs: [playStoreUrl],
      offers: { "@type": "Offer", url: playStoreUrl, price: "0", priceCurrency: "INR" },
      ...(content.cityName
        ? { areaServed: { "@type": "City", name: content.cityName, containedInPlace: { "@type": "Country", name: "India" } } }
        : { areaServed: { "@type": "Country", name: "India" } })
    },
    {
      "@type": "FAQPage",
      mainEntity: content.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer }
      }))
    },
    {
      "@type": "Product",
      name: content.h1,
      description: content.metaDescription,
      brand: { "@type": "Brand", name: "TeamShastra" },
      url: pageUrl
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": graph
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
  );
}
