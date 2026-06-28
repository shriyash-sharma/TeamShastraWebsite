import Link from "next/link";

type Breadcrumb = { label: string; href?: string };

type Props = {
  items: Breadcrumb[];
};

export function SeoBreadcrumbs({ items }: Props) {
  return (
    <nav className="seo-breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`}>
            {item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
            {index < items.length - 1 ? <span className="seo-breadcrumb-sep" aria-hidden="true">/</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
