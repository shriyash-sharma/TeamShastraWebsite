import type { Metadata } from "next";
import {
  betaStatus,
  engineeringCredit,
  engineeringCreditUrl,
  legalOperator,
  loginUrl,
  pageMetadata,
  playStoreUrl,
  qeCredit,
  signupUrl
} from "@/lib/site";
import Link from "next/link";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";

export const metadata: Metadata = pageMetadata(
  "/about",
  "About TeamShastra — Field Service Software Built in India",
  "TeamShastra is a sub-brand of Shri CCTV And Home Automation Services, built for its own installers: jobs, attendance, GST bills and salary in one app."
);

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <PageBreadcrumbs label="About" path="/about" />
          <span className="eyebrow">About</span>
          <h1>TeamShastra helps service teams run field operations from one workspace.</h1>
          <p className="page-lead">
            {betaStatus} The public website explains the product. Signup, login, and company workspaces live on app.teamshastra.com.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={playStoreUrl}>
              Get it on Google Play
            </a>
            <a className="button secondary" href={signupUrl}>
              Get started
            </a>
            <a className="button ghost" href={loginUrl}>
              Login
            </a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="section-inner split-grid">
          <div>
            <h2>Built inside a CCTV and home automation business.</h2>
            <p className="section-copy">
              TeamShastra is a sub-brand of {legalOperator.split(",")[0]}, a CCTV and home automation installer with more than ten
              years of work behind it, from its shop in Barwaha, Madhya Pradesh, and its teams in Wagholi and Hadapsar, Pune. The app
              started as the tool that business needed for its own installers, and the same teams still run their work on it every day.
            </p>
            <p className="section-copy">
              That is why it handles the parts of service work that generic office software skips: cameras and cable that leave the
              store for a site, installs that take two or three days, AMC visits that come round every quarter, and photos a customer
              asks for before paying. Read how it fits a <Link href="/industries/cctv-installer-software">CCTV installation team</Link> or a{" "}
              <Link href="/industries/home-automation-installer-software">home automation installer</Link>.
            </p>
          </div>
          <div className="card">
            <h3>Who runs TeamShastra</h3>
            <ul className="list">
              <li>
                <strong>Business:</strong> {legalOperator.split(",")[0]}
              </li>
              <li>
                <strong>Brand:</strong> TeamShastra
              </li>
              <li>
                <strong>Registered:</strong> GST-registered proprietorship in Madhya Pradesh since January 2020
              </li>
              <li>
                <strong>Locations:</strong> Barwaha (Madhya Pradesh); Wagholi and Hadapsar (Pune)
              </li>
              <li>
                Contact details, privacy and terms are on the <Link href="/contact">contact page</Link>.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section alt">
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
              <li>Visitor downloads the Android app on Google Play, or clicks Get started for the web app.</li>
              <li>Web signup lands on app.teamshastra.com/signup.</li>
              <li>Visitor creates a company workspace and begins using TeamShastra.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section">
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
                <strong>Engineering:</strong>{" "}
                <a href={engineeringCreditUrl} target="_blank" rel="noopener noreferrer">
                  {engineeringCredit}
                </a>
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
          <div className="hero-actions">
            <a className="button primary" href={playStoreUrl}>
              Get it on Google Play
            </a>
            <a className="button secondary" href={signupUrl}>
              Get started
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
