import type { Metadata } from "next";
import Link from "next/link";
import { cities, tier1CitySlugs, tier2CitySlugs, tier3CitySlugs } from "@/lib/seo/cities";
import { features } from "@/lib/seo/features";
import { buildCityFeatureSlug } from "@/lib/seo/slugs";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "/locations",
  "Workforce Management by City | TeamShastra India",
  "TeamShastra workforce management, field service, and attendance software for businesses in Mumbai, Delhi, Bengaluru, Pune, and 40+ Indian cities."
);

function CityGroup({ title, slugs }: { title: string; slugs: string[] }) {
  const groupCities = cities.filter((c) => slugs.includes(c.slug));
  return (
    <section className="seo-index-group">
      <h2>{title}</h2>
      <div className="seo-index-grid">
        {groupCities.map((city) => (
          <article className="seo-index-card" key={city.slug}>
            <h3>
              <Link href={`/${buildCityFeatureSlug("workforce-management", city.slug)}`}>{city.name}</Link>
            </h3>
            <p>{city.state}</p>
            <nav className="seo-index-links" aria-label={`${city.name} solution links`}>
              {features.map((feature) => (
                <Link key={feature.slug} href={`/${buildCityFeatureSlug(feature.slug, city.slug)}`}>
                  {feature.shortName}
                </Link>
              ))}
            </nav>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function LocationsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <span className="eyebrow">Locations</span>
          <h1>TeamShastra for businesses across India</h1>
          <p className="page-lead">
            Workforce management, field service, attendance tracking, and work order software for companies in every major Indian city — with city-specific use cases, industries, and local business context.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <CityGroup title="Tier 1 cities" slugs={tier1CitySlugs} />
          <CityGroup title="Tier 2 cities" slugs={tier2CitySlugs} />
          <CityGroup title="Other business cities" slugs={tier3CitySlugs} />
        </div>
      </section>

      <section className="section alt">
        <div className="section-inner seo-prose">
          <h2>India-wide solutions</h2>
          <p>Explore industry and feature-specific solutions that link to city pages across India.</p>
          <p><Link href="/solutions">View all solutions →</Link></p>
        </div>
      </section>
    </main>
  );
}
