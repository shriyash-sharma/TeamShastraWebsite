import type { Metadata } from "next";
import {
  betaStatus,
  engineeringCredit,
  loginUrl,
  pageMetadata,
  qeCredit,
  signupUrl
} from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "/about",
  "About | TeamShastra",
  "Learn about TeamShastra, a field service management software platform currently in public beta."
);

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <span className="eyebrow">About</span>
          <h1>TeamShastra helps service teams test field operations workflows with less friction.</h1>
          <p className="page-lead">
            {betaStatus} The public website explains the product while the application domain hosts beta signup, login, and test workspaces.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={signupUrl}>
              Join Beta
            </a>
            <a className="button secondary" href={loginUrl}>
              Login
            </a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="section-inner split-grid">
          <div>
            <h2>One brand, two clear surfaces.</h2>
            <p className="section-copy">
              teamshastra.com is the public marketing website for SEO, product education, policy pages, and beta updates. app.teamshastra.com is the application platform for beta signup, login, company creation, and testing.
            </p>
          </div>
          <div className="card">
            <h3>Beta testing path</h3>
            <ul className="list">
              <li>Visitor reads the marketing website.</li>
              <li>Visitor clicks Join Beta.</li>
              <li>Visitor lands on app.teamshastra.com/signup.</li>
              <li>Visitor creates a test company and evaluates TeamShastra during public beta.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="section-inner split-grid">
          <div>
            <h2>Credits</h2>
            <p className="section-copy">
              Contributors who help build and test the product. The operator of the service is listed on Contact, Privacy, and Terms.
            </p>
          </div>
          <div className="card">
            <h3>Product contributors</h3>
            <ul className="list">
              <li>
                <strong>Engineering:</strong> {engineeringCredit}
              </li>
              <li>
                <strong>QE:</strong> {qeCredit}
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="section-inner banner">
          <div>
            <h2>Help test TeamShastra in public beta.</h2>
            <p>
              {betaStatus}
            </p>
          </div>
          <a className="button primary" href={signupUrl}>
            Join Beta
          </a>
        </div>
      </section>
    </main>
  );
}
