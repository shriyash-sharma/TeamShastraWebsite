type Props = {
  areas: string[];
  cityName: string;
};

export function SeoLocalAreas({ areas, cityName }: Props) {
  return (
    <section className="section alt">
      <div className="section-inner">
        <div className="section-head">
          <h2>Business areas we serve in {cityName}</h2>
          <p className="section-copy">
            TeamShastra supports field teams operating across commercial, industrial, and residential zones throughout {cityName} and surrounding areas.
          </p>
        </div>
        <div className="seo-area-tags" role="list">
          {areas.map((area) => (
            <span className="seo-area-tag" role="listitem" key={area}>{area}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
