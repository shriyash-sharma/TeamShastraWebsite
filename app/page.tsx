import type { Metadata } from "next";
import { appUrl, betaStatus, loginUrl, pageMetadata, releaseNote, signupUrl } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "/",
  "TeamShastra | Field Service Management Software",
  "TeamShastra is in public beta for field service teams testing scheduling, dispatch, work tracking, and company workflows before production release."
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
            <span className="eyebrow">Public beta · Planned release July 1, 2026</span>
            <h1>TeamShastra</h1>
            <p className="hero-copy">Field service management software for teams testing cleaner scheduling, faster dispatch, better job visibility, and company workflows before production launch.</p>
            <div className="hero-actions" aria-label="Primary calls to action">
              <a className="button primary" href={signupUrl}>Join Beta</a>
              <a className="button secondary" href={loginUrl}>Login</a>
              <a className="button ghost" href={appUrl}>Open App</a>
            </div>
            <p className="beta-note">{betaStatus} {releaseNote}</p>
            <div className="trust-row" aria-label="TeamShastra domain strategy">
              <span>Marketing site indexed</span>
              <span>Application separated</span>
              <span>Beta signup routes to app.teamshastra.com</span>
            </div>
          </div>
          <div className="product-board" aria-label="TeamShastra application preview">
            <div className="board-top"><strong>Dispatch Command Center</strong><span className="status-pill">Live operations</span></div>
            <div className="board-columns">
              <div className="metric-stack">
                <div className="metric-row"><span>Jobs today</span><span className="metric-value">42</span></div>
                <div className="metric-row"><span>On time</span><span className="metric-value">94%</span></div>
                <div className="metric-row"><span>Open quotes</span><span className="metric-value">18</span></div>
                <div className="metric-row"><span>Teams active</span><span className="metric-value">7</span></div>
              </div>
              <div className="route-stack">
                <div className="route-card"><div><strong>Install inspection</strong><br /><span className="section-copy">Assigned to North Crew</span></div><span className="route-time">09:30</span></div>
                <div className="route-card"><div><strong>Preventive service</strong><br /><span className="section-copy">Parts checked, route optimized</span></div><span className="route-time">11:15</span></div>
                <div className="route-card"><div><strong>Customer follow-up</strong><br /><span className="section-copy">Invoice ready for review</span></div><span className="route-time">14:00</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="features">
        <div className="section-inner">
          <div className="section-head">
            <h2>Built for the daily rhythm of field teams.</h2>
            <p className="section-copy">TeamShastra connects office teams, technicians, supervisors, and customers without mixing the public website with authenticated application workflows.</p>
          </div>
          <div className="card-grid">
            <article className="card"><div className="icon-box">01</div><h3>Schedule and dispatch</h3><p>Plan visits, assign technicians, and keep routes visible from one operational view.</p></article>
            <article className="card"><div className="icon-box">02</div><h3>Create test companies</h3><p>Beta users can create a company on the app domain and evaluate setup before production use.</p></article>
            <article className="card"><div className="icon-box">03</div><h3>Track service work</h3><p>See job status, customer context, notes, and team activity as work moves through the day.</p></article>
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="section-inner banner">
          <div>
            <h2>Test TeamShastra before the production release.</h2>
            <p>{betaStatus} {releaseNote} Beta CTAs send visitors to signup at app.teamshastra.com.</p>
          </div>
          <a className="button primary" href={signupUrl}>Join Beta</a>
        </div>
      </section>
    </main>
  );
}