import type { Metadata } from "next";
import Link from "next/link";
import { AppScreenshotGallery } from "@/components/AppScreenshots";
import { MarketingPage } from "@/components/MarketingPage";
import { featureGroups, featureLandingPath, featureLandings } from "@/lib/seo/landing/features";
import { marketingPages, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "/features",
  "Features: Jobs, GST Bills, Attendance, Salary | TeamShastra",
  "Every TeamShastra feature in one list: work orders, attendance, GST invoices, salary and TDS, stock, purchases, expenses, reports and Hindi support."
);

export default function FeaturesPage() {
  return (
    <MarketingPage content={marketingPages.features} path="/features" cardsHeading="Main features at a glance">
      <section className="section" aria-labelledby="every-feature-heading">
        <div className="section-inner">
          <div className="section-head">
            <h2 id="every-feature-heading">Explore every feature</h2>
            <p className="section-copy">A detailed guide for each part of the app: the problem it solves, how it works, and what it does not do.</p>
          </div>
          {featureGroups.map((group) => (
            <div className="seo-index-group" key={group}>
              <h3>{group}</h3>
              <div className="seo-index-grid">
                {featureLandings
                  .filter((feature) => feature.group === group)
                  .map((feature) => (
                    <article className="seo-index-card" key={feature.slug}>
                      <h4><Link href={featureLandingPath(feature.slug)}>{feature.name}</Link></h4>
                      <p>{feature.hubSummary}</p>
                    </article>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <AppScreenshotGallery />
    </MarketingPage>
  );
}
