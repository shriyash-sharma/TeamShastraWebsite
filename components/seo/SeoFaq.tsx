import type { FaqItem } from "@/lib/seo/types";

type Props = {
  items: FaqItem[];
  title?: string;
  id?: string;
  intro?: string;
  /** Render each question as an H3 inside its summary (landing pages need H2 → H3). */
  questionHeadings?: boolean;
};

export function SeoFaq({
  items,
  title = "Frequently asked questions",
  id = "faq",
  intro = "Answers to common questions about TeamShastra for your team and industry.",
  questionHeadings = false
}: Props) {
  return (
    <section className="section" id={id}>
      <div className="section-inner">
        <div className="section-head">
          <h2>{title}</h2>
          <p className="section-copy">{intro}</p>
        </div>
        <div className="seo-faq-list">
          {items.map((item) => (
            <details className="seo-faq-item" key={item.question}>
              <summary>{questionHeadings ? <h3 className="seo-faq-question">{item.question}</h3> : item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
