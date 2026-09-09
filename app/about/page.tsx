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
  "Learn about TeamShastra, a field service management platform for owners, managers, and technicians."
);

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <span className="eyebrow">About</span>
          <h1>TeamShastra helps service teams run field operations from one workspace.</h1>
          <p className="page-lead">
            {betaStatus} The public website explains the product. Signup, login, and company workspaces live on app.teamshastra.com.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={signupUrl}>
              Get started
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
              teamshastra.com is the public marketing website for product information and policy pages. app.teamshastra.com is the application for signup, login, and company workspaces.
            </p>
          </div>
          <div className="card">
            <h3>How to start</h3>
            <ul className="list">
              <li>Visitor reads the marketing website.</li>
              <li>Visitor clicks Get started.</li>
              <li>Visitor lands on app.teamshastra.com/signup.</li>
              <li>Visitor creates a company workspace and begins using TeamShastra.</li>
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
            <h2>Get started with TeamShastra.</h2>
            <p>
              {betaStatus}
            </p>
          </div>
          <a className="button primary" href={signupUrl}>
            Get started
          </a>
        </div>
      </section>
    </main>
  );
}
