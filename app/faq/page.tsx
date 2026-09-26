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
    answer: "Yes. Create a job, assign a technician, track status on today's board, and add before/after photos and a completion report PDF."
  },
  {
    question: "Does TeamShastra support AMC and recurring service contracts?",
    answer: "Yes. AMC contracts track renewal dates and show which customers are due or overdue for a visit."
  },
  {
    question: "Is there a customer portal?",
    answer: "Yes, as an optional, opt-in feature. Customers can see only the jobs, invoices, and visit history you choose to share — nothing is shared by default."
  },
  {
    question: "Can I switch to TeamShastra from Vyapar?",
    answer: "Yes. TeamShastra supports bulk import of your catalog, parties, sales, purchases, and expenses from Vyapar, with a dry-run preview before anything is saved. See the Vyapar comparison for details."
  },
  {
    question: "Does TeamShastra have an iOS app?",
    answer: "No. TeamShastra is available on Android (Google Play) and the web at app.teamshastra.com."
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
