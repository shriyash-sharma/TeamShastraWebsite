import type { IndustryFocus } from "@/lib/seo/types";

type Props = {
  industries: IndustryFocus[];
  title: string;
  cityName?: string;
};

export function SeoIndustries({ industries, title, cityName }: Props) {
  return (
    <section className="section alt">
      <div className="section-inner">
        <div className="section-head">
          <h2>{title}</h2>
          <p className="section-copy">
            {cityName
              ? `TeamShastra supports diverse industries across ${cityName} with attendance, dispatch, work orders, and service documentation.`
              : "TeamShastra supports diverse industries across India with attendance, dispatch, work orders, and service documentation."}
          </p>
        </div>
        <div className="card-grid">
          {industries.map((industry) => (
            <article className="card" key={industry.name}>
              <h3>{industry.name}</h3>
              <p>{industry.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
