import Image from "next/image";
import { appScreenshots, heroScreenshots } from "@/lib/screenshots";

export function HeroAppPreview() {
  return (
    <div className="hero-shots" aria-label="TeamShastra app screenshots" data-testid="hero-app-preview">
      {heroScreenshots.map((shot, index) => (
        <figure
          key={shot.src}
          className={`phone-frame${index === 0 ? " phone-frame-left" : ""}${index === 1 ? " phone-frame-front" : ""}${index === 2 ? " phone-frame-right" : ""}`}
        >
          <Image
            src={shot.src}
            alt={shot.alt}
            width={714}
            height={1599}
            sizes="(max-width: 920px) 220px, 248px"
            priority={index === 1}
            style={{ width: "100%", height: "auto" }}
          />
        </figure>
      ))}
    </div>
  );
}

export function AppScreenshotGallery() {
  return (
    <section className="section alt shot-section" aria-labelledby="app-screens-heading">
      <div className="section-inner">
        <div className="section-head">
          <h2 id="app-screens-heading">The real TeamShastra app.</h2>
          <p className="section-copy">
            Live screens from the product — home, work orders, attendance, sales, expenses, team, customers, and reports.
          </p>
        </div>
        <div className="shot-gallery" data-testid="app-screenshot-gallery">
          {appScreenshots.map((shot) => (
            <figure className="shot-card" key={shot.src}>
              <div className="phone-frame phone-frame-gallery">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={714}
                  height={1599}
                  sizes="(max-width: 640px) 42vw, 180px"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <figcaption>
                <strong>{shot.title}</strong>
                <span>{shot.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
