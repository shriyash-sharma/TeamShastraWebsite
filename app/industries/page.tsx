import type { Metadata } from "next";
import Link from "next/link";
import { MarketingPage } from "@/components/MarketingPage";
import { industryLandingPath, industryLandings, rewrittenIndustrySolutions } from "@/lib/seo/landing/industries";
import { solutionMap } from "@/lib/seo/solutions";
import { marketingPages, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "/industries",
  "Industries | CCTV, Electricians & Field Service | TeamShastra",
  "Software for all field service businesses: CCTV, AC, electricians, plumbers, solar, RO, pest control, appliance repair, IT, fire safety, lifts and more."
);

export default function IndustriesPage() {
  return (
    <MarketingPage content={marketingPages.industries}>
      <section className="section" aria-labelledby="business-type-heading">
        <div className="section-inner">
          <div className="section-head">
            <h2 id="business-type-heading">Software for your type of business</h2>
            <p className="section-copy">Each guide explains how that trade really works, where it goes wrong, and which parts of TeamShastra help.</p>
          </div>
          <div className="seo-index-grid">
            {industryLandings.map((industry) => (
              <article className="seo-index-card" key={industry.slug}>
                <h3><Link href={industryLandingPath(industry.slug)}>{industry.name}</Link></h3>
                <p>{industry.hubSummary}</p>
              </article>
            ))}
            {rewrittenIndustrySolutions.map((item) => (
              <article className="seo-index-card" key={item.slug}>
                <h3><Link href={`/${item.slug}`}>{item.name}</Link></h3>
                <p>{solutionMap[item.slug]?.metaDescription}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </MarketingPage>
  );
}
