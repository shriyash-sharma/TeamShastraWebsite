import type { Metadata } from "next";
import Link from "next/link";
import { cities } from "@/lib/seo/cities";
import { features } from "@/lib/seo/features";
import { solutions } from "@/lib/seo/solutions";
import { buildCityFeatureSlug } from "@/lib/seo/slugs";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "/solutions",
  "Workforce & Field Service Solutions India | TeamShastra",
  "Field service management, attendance tracking, technician management, work orders, and industry solutions for Indian businesses. Links to city pages nationwide."
);

export default function SolutionsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <span className="eyebrow">Solutions</span>
          <h1>Workforce and field service solutions for India</h1>
          <p className="page-lead">
            Industry-specific and feature-focused solutions for field service, attendance, technician management, work orders, and more — with links to city pages across India.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <h2>Feature solutions</h2>
          <div className="card-grid">
            {features.map((feature) => (
              <article className="card" key={feature.slug}>
                <h3>{feature.headline}</h3>
                <p>{feature.description}</p>
                <nav className="seo-index-links" aria-label={`${feature.name} city links`}>
                  <Link href={`/${buildCityFeatureSlug(feature.slug, "mumbai")}`}>Mumbai</Link>
                  <Link href={`/${buildCityFeatureSlug(feature.slug, "delhi")}`}>Delhi</Link>
                  <Link href={`/${buildCityFeatureSlug(feature.slug, "bengaluru")}`}>Bengaluru</Link>
                  <Link href={`/${buildCityFeatureSlug(feature.slug, "pune")}`}>Pune</Link>
                  <Link href="/locations">All cities</Link>
                </nav>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="section-inner">
          <h2>Industry solutions</h2>
          <div className="card-grid">
            {solutions.map((solution) => (
              <article className="card" key={solution.slug}>
                <h3><Link href={`/${solution.slug}`}>{solution.title}</Link></h3>
                <p>{solution.metaDescription}</p>
                <nav className="seo-index-links" aria-label={`${solution.title} city links`}>
                  {solution.relatedCitySlugs.slice(0, 4).map((citySlug) => {
                    const city = cities.find((c) => c.slug === citySlug);
                    return city ? (
                      <Link key={citySlug} href={`/${buildCityFeatureSlug("workforce-management", citySlug)}`}>
                        {city.name}
                      </Link>
                    ) : null;
                  })}
                </nav>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner seo-prose">
          <h2>Browse by city</h2>
          <p>Find workforce management and field service pages for your city.</p>
          <p><Link href="/locations">View all {cities.length} cities →</Link></p>
        </div>
      </section>
    </main>
  );
}
