import type { Metadata } from "next";
import Link from "next/link";
import { cities, tier1CitySlugs, tier2CitySlugs, tier3CitySlugs } from "@/lib/seo/cities";
import { cityHubPath } from "@/lib/seo/content";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "/locations",
  "Field Service Software by City in India | TeamShastra",
  "Field service software for 14 Indian cities, each with local GST, Professional Tax, language, and season notes — Mumbai, Delhi, Bengaluru, Pune, Surat, and more."
);

function CityGroup({ title, slugs }: { title: string; slugs: string[] }) {
  const groupCities = cities.filter((c) => slugs.includes(c.slug));
  if (groupCities.length === 0) return null;
  return (
    <section className="seo-index-group">
      <h2>{title}</h2>
      <div className="seo-index-grid">
        {groupCities.map((city) => (
          <article className="seo-index-card" key={city.slug}>
            <h3>
              <Link href={cityHubPath(city.slug)}>{city.name}</Link>
            </h3>
            <p>{city.state} · GST state code {city.localContext.gstStateCode.split(" ")[0]}</p>
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
            Each city page covers the work local service businesses actually do there, plus the GST place of supply, Professional Tax, app language, and seasonal patterns that matter for that city.
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
