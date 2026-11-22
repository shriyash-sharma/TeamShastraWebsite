import { marketingUrl } from "@/lib/site";
import { SeoBreadcrumbs } from "./SeoBreadcrumbs";

type Props = {
  /** Label of the current page; Home is added in front. */
  label: string;
  path: string;
};

/** Small breadcrumb line plus its BreadcrumbList JSON-LD, for top-level pages. */
export function PageBreadcrumbs({ label, path }: Props) {
  const items = [{ label: "Home", href: "/" }, { label }];
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${marketingUrl}/` },
      { "@type": "ListItem", position: 2, name: label, item: `${marketingUrl}${path}` }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SeoBreadcrumbs items={items} />
    </>
  );
}
