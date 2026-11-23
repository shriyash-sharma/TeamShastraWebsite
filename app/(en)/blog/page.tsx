import type { Metadata } from "next";
import Link from "next/link";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { SeoCta } from "@/components/seo/SeoCta";
import { guideCategories, guidePath, guides } from "@/lib/blog";
import { marketingPages, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata("/blog", "Field Service Blog for Indian Businesses | TeamShastra", "Practical guides for Indian field service businesses: dispatch, tracking jobs, GST invoicing, attendance, and running a technician team.");

const content = marketingPages.blog;

export default function BlogPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <PageBreadcrumbs label="Guides" path="/blog" />
          <span className="eyebrow">{content.eyebrow}</span>
          <h1>{content.title}</h1>
          <p className="page-lead">{content.description}</p>
        </div>
      </section>
      {guideCategories.map((category, index) => (
        <section className={index % 2 === 0 ? "section guide-group" : "section alt guide-group"} key={category.id} id={category.id}>
          <div className="section-inner">
            <h2>{category.heading}</h2>
            <div className="seo-index-grid">
              {guides
                .filter((guide) => guide.category === category.id)
                .map((guide) => (
                  <article className="seo-index-card" key={guide.slug}>
                    <h3><Link href={guidePath(guide.slug)}>{guide.h1}</Link></h3>
                    <p>{guide.metaDescription}</p>
                  </article>
                ))}
            </div>
          </div>
        </section>
      ))}
      <SeoCta title={content.bannerTitle} text={content.bannerText} />
    </main>
  );
}
