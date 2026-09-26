import type { Metadata } from "next";
import Link from "next/link";
import { SeoFaq } from "@/components/seo/SeoFaq";
import { pageMetadata, playStoreUrl, signupUrl } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "/vyapar-alternative",
  "TeamShastra vs Vyapar: A Field Service Alternative | TeamShastra",
  "How TeamShastra compares to Vyapar for businesses that send technicians to customer sites. Import your Vyapar catalog, parties, sales, and stock in minutes."
);

const rows: Array<{ capability: string; vyapar: string; teamshastra: string }> = [
  { capability: "GST invoicing & quotations", vyapar: "Yes", teamshastra: "Yes" },
  { capability: "Stock & inventory tracking", vyapar: "Yes, with barcode scanning", teamshastra: "Yes, with a stock movement ledger" },
  { capability: "GST return exports (GSTR-1/3B/9, HSN)", vyapar: "Yes", teamshastra: "Yes" },
  { capability: "TDS rates, reports & Form 26Q", vyapar: "Not on Vyapar's public feature list", teamshastra: "Yes" },
  { capability: "Job assignment & work orders for field technicians", vyapar: "Not on Vyapar's public feature list", teamshastra: "Yes — assign, track status, before/after photos" },
  { capability: "Technician attendance (GPS check-in/out)", vyapar: "Salesman GPS tracking for sales reps", teamshastra: "Yes — punch-time GPS for the whole field team, feeding payroll" },
  { capability: "AMC / recurring service contract due-visit tracking", vyapar: "Not on Vyapar's public feature list", teamshastra: "Yes" },
  { capability: "Payroll", vyapar: "Not on Vyapar's public feature list", teamshastra: "Yes, owner-only, linked to attendance" },
  { capability: "Optional customer portal", vyapar: "Not on Vyapar's public feature list", teamshastra: "Yes, opt-in" },
  { capability: "POS billing / online store", vyapar: "Yes", teamshastra: "Not offered" },
  { capability: "Regional Indian languages in-app", vyapar: "Not specified on Vyapar's site", teamshastra: "English, Hindi, Gujarati, Marathi, Bengali" },
  { capability: "Platforms", vyapar: "Android, iOS, Windows, Mac", teamshastra: "Android and web (no iOS or desktop app)" },
  { capability: "Built for", vyapar: "Retail shops, kirana stores, pharmacies, restaurants, salons, manufacturers", teamshastra: "CCTV installers, electricians, maintenance & AMC providers, equipment service, home services" }
];

const faqs = [
  {
    question: "Can I import my Vyapar data into TeamShastra?",
    answer: "Yes. TeamShastra supports bulk import of your catalog, parties, sales, purchases, expenses, and stock from Vyapar, with a dry-run preview before anything is saved to your workspace."
  },
  {
    question: "Is TeamShastra a direct replacement for Vyapar?",
    answer: "It depends on your business. If you run a fixed-location shop with counter sales and no field team, Vyapar's retail-specific tools — barcode scanning, POS billing, an online store — may fit better. If you send technicians to customer sites for installation, repair, or AMC visits, TeamShastra adds job assignment, technician attendance, and AMC due-visit tracking on top of GST billing and stock."
  },
  {
    question: "Does TeamShastra do everything Vyapar does?",
    answer: "No. TeamShastra covers the GST invoicing, stock, and accounting overlap, but does not include Vyapar's retail-specific tools like barcode scanning, POS counter billing, or an online store."
  },
  {
    question: "Does TeamShastra have an iOS or desktop app like Vyapar?",
    answer: "No. TeamShastra is available on Android (Google Play) and the web at app.teamshastra.com. Vyapar offers Android, iOS, Windows, and Mac apps."
  },
  {
    question: "Where does this comparison come from?",
    answer: "Vyapar's column reflects the features publicly described on vyaparapp.in as of this page's last update. If Vyapar has since added capabilities not shown there, this comparison may not reflect them — check their site for their current feature list."
  }
];

export default function VyaparAlternativePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://teamshastra.com/" },
                  { "@type": "ListItem", position: 2, name: "TeamShastra vs Vyapar", item: "https://teamshastra.com/vyapar-alternative" }
                ]
              },
              {
                "@type": "FAQPage",
                mainEntity: faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: { "@type": "Answer", text: faq.answer }
                }))
              }
            ]
          })
        }}
      />
      <section className="page-hero">
        <div className="section-inner">
          <span className="eyebrow">Comparison</span>
          <h1>TeamShastra vs Vyapar</h1>
          <p className="page-lead">
            Vyapar is billing, inventory, and accounting software built for retail shops and counter-sale
            businesses. TeamShastra is field service management software — job assignment, technician
            attendance, and AMC tracking — with GST invoicing and stock built in, for businesses that send
            technicians to customer sites rather than sell across a counter.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={playStoreUrl}>Get it on Google Play</a>
            <a className="button secondary" href={signupUrl}>Get started</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner seo-prose">
          <h2>Feature-by-feature comparison</h2>
          <p>
            Vyapar&apos;s column reflects the features described on their own site. Where a capability isn&apos;t
            part of Vyapar&apos;s public feature list, we say so rather than assuming it doesn&apos;t exist.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th scope="col">Capability</th>
                  <th scope="col">Vyapar</th>
                  <th scope="col">TeamShastra</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.capability}>
                    <th scope="row">{row.capability}</th>
                    <td>{row.vyapar}</td>
                    <td>{row.teamshastra}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="section-inner seo-prose">
          <h2>Already using Vyapar? Bring your data with you.</h2>
          <p>
            TeamShastra can bulk-import your catalog, parties (customers and suppliers), sales, purchases,
            expenses, and stock directly from Vyapar. You get a preview of what will be imported before
            anything is saved, so you can check it matches your books first.
          </p>
          <p>
            <Link href="/gst-invoicing-software-india">See GST invoicing details</Link> ·{" "}
            <Link href="/field-service-management-software-india">See field service management</Link> ·{" "}
            <Link href="/pricing">View pricing</Link>
          </p>
        </div>
      </section>

      <SeoFaq items={faqs} title="TeamShastra vs Vyapar: FAQs" id="faq-comparison" />
    </main>
  );
}
