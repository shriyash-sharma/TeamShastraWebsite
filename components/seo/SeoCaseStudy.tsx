import type { CaseStudy } from "@/lib/seo/types";

type Props = {
  caseStudy: CaseStudy;
};

export function SeoCaseStudy({ caseStudy }: Props) {
  return (
    <section className="section">
      <div className="section-inner">
        <div className="section-head">
          <h2>How businesses improve operations with TeamShastra</h2>
          <p className="section-copy">
            The following is an illustrative example showing typical outcomes — not an actual customer case study.
          </p>
        </div>
        <article className="seo-case-study">
          <header>
            <h3>{caseStudy.companyName}</h3>
            <p className="seo-case-location">{caseStudy.location}</p>
          </header>
          <div className="seo-case-grid">
            <div>
              <h4>Before TeamShastra</h4>
              <ul className="list">
                {caseStudy.problem.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>After TeamShastra</h4>
              <ul className="list seo-results-list">
                {caseStudy.results.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="seo-disclaimer">
            <strong>Note:</strong> {caseStudy.companyName} is a fictional illustrative example. Results shown are representative of outcomes businesses may achieve and are not guarantees.
          </p>
        </article>
      </div>
    </section>
  );
}
