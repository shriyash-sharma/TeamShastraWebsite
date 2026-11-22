import type { CityLocalContext } from "@/lib/seo/types";

type Props = {
  context: CityLocalContext;
  cityName: string;
  stateName: string;
};

export function SeoLocalContext({ context, cityName, stateName }: Props) {
  const items = [
    { title: `GST in ${stateName}`, text: `GST state code ${context.gstStateCode}. ${context.placeOfSupply}` },
    { title: "Professional Tax", text: context.professionalTax },
    { title: "App language", text: context.language },
    { title: "Seasonal pattern", text: context.season }
  ];

  return (
    <section className="section">
      <div className="section-inner">
        <div className="section-head">
          <h2>Running a service business in {cityName}</h2>
          <p className="section-copy">
            Tax and language notes for {cityName}. This is general information, not tax advice — confirm your own case with your CA.
          </p>
        </div>
        <div className="card-grid">
          {items.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
