import type { SeoPageContent } from "@/lib/seo/types";
import { marketingUrl, signupUrl } from "@/lib/site";

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
      url: marketingUrl
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
      offers: { "@type": "Offer", url: signupUrl },
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
