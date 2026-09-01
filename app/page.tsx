import type { Metadata } from "next";
import { AppScreenshotGallery, HeroAppPreview } from "@/components/AppScreenshots";
import { appUrl, betaStatus, loginUrl, pageMetadata, signupUrl } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "/",
  "TeamShastra | Field Service Management Software",
  "TeamShastra is in public beta for field service teams testing scheduling, dispatch, work tracking, and company workflows."
);

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://teamshastra.com/#organization",
      name: "TeamShastra",
      url: "https://teamshastra.com/",
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
      applicationCategory: "Field Service Management Software",
      operatingSystem: "Web",
      offers: { "@type": "Offer", url: signupUrl }
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
            <span className="eyebrow">Public beta</span>
            <h1>TeamShastra</h1>
            <p className="hero-tagline">
              <span>From Job to Payment,</span>
              <span>All in One Place.</span>
            </p>
            <ul className="hero-flow" aria-label="What TeamShastra covers">
              {["Jobs", "Teams", "Attendance", "Photos", "Billing", "Expenses"].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="hero-actions" aria-label="Primary calls to action">
              <a className="button primary" href={signupUrl}>Join Beta</a>
              <a className="button secondary" href={loginUrl}>Login</a>
              <a className="button ghost" href={appUrl}>Open App</a>
            </div>
            <p className="beta-note">{betaStatus}</p>
            <div className="trust-row" aria-label="TeamShastra domain strategy">
              <span>Marketing site indexed</span>
              <span>Application separated</span>
              <span>Beta signup routes to app.teamshastra.com</span>
            </div>
          </div>
          <HeroAppPreview />
        </div>
      </section>
      <section className="section" id="features">
        <div className="section-inner">
          <div className="section-head">
            <h2>Built for the daily rhythm of field teams.</h2>
            <p className="section-copy">TeamShastra connects office teams, technicians, supervisors, and customers without mixing the public website with authenticated application workflows.</p>
          </div>
          <div className="card-grid">
            <article className="card"><div className="icon-box">01</div><h3>Work orders</h3><p>Create jobs, assign technicians, track today&apos;s board, and keep before/after photos on the timeline.</p></article>
            <article className="card"><div className="icon-box">02</div><h3>Team and attendance</h3><p>Invite staff, check in and out, and let managers see who is on duty.</p></article>
            <article className="card"><div className="icon-box">03</div><h3>Sales, expenses, reports</h3><p>Quotations, invoices, field expenses, and summaries — with chat support when you need help.</p></article>
          </div>
        </div>
      </section>
      <AppScreenshotGallery />
      <section className="section alt">
        <div className="section-inner banner">
          <div>
            <h2>Test TeamShastra in public beta.</h2>
            <p>{betaStatus} Beta CTAs send visitors to signup at app.teamshastra.com.</p>
          </div>
          <a className="button primary" href={signupUrl}>Join Beta</a>
        </div>
      </section>
    </main>
  );
}