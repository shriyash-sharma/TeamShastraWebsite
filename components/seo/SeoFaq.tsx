import type { FaqItem } from "@/lib/seo/types";

type Props = {
  items: FaqItem[];
  title?: string;
};

export function SeoFaq({ items, title = "Frequently asked questions" }: Props) {
  return (
    <section className="section" id="faq">
      <div className="section-inner">
        <div className="section-head">
          <h2>{title}</h2>
          <p className="section-copy">Answers to common questions about TeamShastra for your team and industry.</p>
        </div>
        <div className="seo-faq-list">
          {items.map((item) => (
            <details className="seo-faq-item" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
