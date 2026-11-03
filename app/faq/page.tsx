import type { Metadata } from "next";
import Link from "next/link";
import { SeoFaq } from "@/components/seo/SeoFaq";
import { homeFaqs, pageMetadata, pricingFaqs } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "/faq",
  "Frequently Asked Questions | TeamShastra",
  "Answers to common questions about TeamShastra: what it is, GST and TDS, stock, pricing, GPS and privacy, payroll, languages, and switching from Vyapar."
);

const productFaqs = [
  {
    question: "Does TeamShastra support work orders and technician assignment?",
    answer: "Yes. Create a job, assign a team, track status on today's board, add before/after photos, and share a service report or progress report PDF."
  },
  {
    question: "Does TeamShastra support AMC and recurring service contracts?",
    answer: "Yes. AMC contracts track renewal dates and show which customers are due or overdue for a visit."
  },
  {
    question: "Is there a customer portal?",
    answer: "Yes, as an optional module. Invite the customer, then share or hide each job. They can track shared jobs, view photos, and message your team. A job stays hidden until you share it."
  },
  {
    question: "Can I switch to TeamShastra from Vyapar?",
    answer: "Yes. TeamShastra can import catalog, parties, sales, purchases, and expenses from Vyapar or a spreadsheet. You match columns and review valid rows and issues before they are saved. See the Vyapar comparison for details."
  },
  {
    question: "Does TeamShastra have an iOS app?",
    answer:
      "There is no App Store app. On an iPhone, open app.teamshastra.com in Safari, tap Share → Add to Home Screen, and open TeamShastra from the home-screen icon. Android users can install the app from Google Play."
  }
];

const allFaqs = [...homeFaqs, ...productFaqs, ...pricingFaqs];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: allFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer }
      }))
    }
  ]
};

export default function FaqPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className="page-hero">
        <div className="section-inner">
          <span className="eyebrow">FAQ</span>
          <h1>Frequently asked questions about TeamShastra</h1>
          <p className="page-lead">
            What TeamShastra is, what it does, how billing works, and how it compares to tools you may already use.
            For plan-specific details see <Link href="/pricing">Pricing</Link>, and for a feature-by-feature
            comparison with a shop billing app, see <Link href="/vyapar-alternative">TeamShastra vs Vyapar</Link>.
          </p>
        </div>
      </section>
      <SeoFaq items={homeFaqs} title="About TeamShastra" id="faq-about" />
      <SeoFaq items={productFaqs} title="Features" id="faq-features" />
      <SeoFaq items={pricingFaqs} title="Pricing & billing" id="faq-pricing" />
    </main>
  );
}
