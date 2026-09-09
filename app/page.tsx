import type { Metadata } from "next";
import { AppScreenshotGallery, HeroAppPreview } from "@/components/AppScreenshots";
import { SeoFaq } from "@/components/seo/SeoFaq";
import {
  appUrl,
  betaStatus,
  homeFaqs,
  loginUrl,
  pageMetadata,
  playStoreUrl,
  productFeatureList,
  signupUrl
} from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "/",
  "TeamShastra | Field Service Software for Jobs, GST Invoices & Attendance",
  "Field service app for Indian teams: jobs, attendance, GST invoices, purchases, expenses, cash float, and reports. Android on Google Play and web."
);

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://teamshastra.com/#organization",
      name: "TeamShastra",
      url: "https://teamshastra.com/",
      sameAs: [playStoreUrl, appUrl],
      subjectOf: [
        { "@id": "https://teamshastra.com/#website" },
        { "@id": "https://app.teamshastra.com/#application" }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://teamshastra.com/#website",
      name: "TeamShastra",
      url: "https://teamshastra.com/",
      publisher: { "@id": "https://teamshastra.com/#organization" }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://app.teamshastra.com/#application",
      name: "TeamShastra",
      url: "https://app.teamshastra.com/",
      description:
        "Field service management software for Indian companies: jobs, attendance, GST invoices, purchases, expenses, and reports.",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Field Service Management",
      operatingSystem: "Android, Web",
      featureList: productFeatureList,
      downloadUrl: playStoreUrl,
      installUrl: playStoreUrl,
      sameAs: [playStoreUrl, appUrl],
      offers: { "@type": "Offer", url: playStoreUrl, price: "0", priceCurrency: "INR" }
    },
    {
      "@type": "MobileApplication",
      name: "TeamShastra",
      url: playStoreUrl,
      description:
        "Android field service app for jobs, GST invoices, attendance, purchases, and expenses.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "ANDROID",
      featureList: productFeatureList,
      downloadUrl: playStoreUrl,
      installUrl: playStoreUrl,
      offers: { "@type": "Offer", url: playStoreUrl, price: "0", priceCurrency: "INR" }
    },
    {
      "@type": "FAQPage",
      mainEntity: homeFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer }
      }))
    }
  ]
};

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className="hero">
        <div className="section-inner hero-grid">
          <div>
            <span className="eyebrow">Field service software for India</span>
            <h1>TeamShastra</h1>
            <p className="hero-tagline">
              <span>From Job to Payment,</span>
              <span>All in One Place.</span>
            </p>
            <ul className="hero-flow" aria-label="What TeamShastra covers">
              {["Jobs", "Attendance", "GST invoices", "Purchases", "Expenses", "Reports"].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="hero-actions" aria-label="Primary calls to action">
              <a className="button primary" href={playStoreUrl}>Get it on Google Play</a>
              <a className="button secondary" href={signupUrl}>Get started</a>
              <a className="button ghost" href={loginUrl}>Login</a>
            </div>
            <p className="beta-note">{betaStatus}</p>
            <div className="trust-row" aria-label="TeamShastra product surfaces">
              <span>Android app on Google Play</span>
              <span>GST invoices, purchases, and expenses</span>
              <span>Hindi, Gujarati, Marathi, and Bengali</span>
            </div>
          </div>
          <HeroAppPreview />
        </div>
      </section>
      <section className="section" id="features">
        <div className="section-inner">
          <div className="section-head">
            <h2>Jobs, attendance, GST billing, and field money in one workspace.</h2>
            <p className="section-copy">
              TeamShastra is built for Indian field service companies — CCTV installers, electricians, maintenance teams — so office and technicians share the same jobs, invoices, and expenses.
            </p>
          </div>
          <div className="card-grid">
            <article className="card"><div className="icon-box">01</div><h3>Work orders</h3><p>Assign jobs, track today&apos;s board, add before/after photos, and share completion report PDFs.</p></article>
            <article className="card"><div className="icon-box">02</div><h3>Attendance &amp; leave</h3><p>Check in and out (offline-capable), see who is on duty, and mark leave. Location only at punch time — no all-day GPS.</p></article>
            <article className="card"><div className="icon-box">03</div><h3>GST invoices</h3><p>Quotations, tax invoices, payments, WhatsApp PDFs, and CA-ready GST exports.</p></article>
            <article className="card"><div className="icon-box">04</div><h3>Purchases &amp; expenses</h3><p>Purchase bills, supplier balances, field expenses, cash float, and bank.</p></article>
            <article className="card"><div className="icon-box">05</div><h3>Customers &amp; AMC</h3><p>Directory, due visits, optional customer portal, and job history on every site.</p></article>
            <article className="card"><div className="icon-box">06</div><h3>Reports</h3><p>Job summary, technician performance, and revenue for owners and managers.</p></article>
          </div>
        </div>
      </section>
      <AppScreenshotGallery />
      <SeoFaq items={homeFaqs} title="TeamShastra FAQs" />
      <section className="section alt">
        <div className="section-inner banner">
          <div>
            <h2>Get started with TeamShastra.</h2>
            <p>Download the Android app on Google Play, or create a workspace on the web at app.teamshastra.com.</p>
          </div>
          <div className="hero-actions">
            <a className="button primary" href={playStoreUrl}>Get it on Google Play</a>
            <a className="button secondary" href={signupUrl}>Get started</a>
          </div>
        </div>
      </section>
    </main>
  );
}
