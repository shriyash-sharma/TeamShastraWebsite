import Image from "next/image";
import { appScreenshots, heroScreenshots } from "@/lib/screenshots";

export function HeroAppPreview() {
  return (
    <div className="hero-shots" aria-label="TeamShastra app screenshots" data-testid="hero-app-preview">
      {heroScreenshots.map((shot, index) => (
        <figure key={shot.src} className={`phone-frame${index === 1 ? " phone-frame-front" : ""}`}>
          <Image
            src={shot.src}
            alt={shot.alt}
            width={714}
            height={1599}
            sizes="(max-width: 920px) 220px, 240px"
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
    <section className="section alt" aria-labelledby="app-screens-heading">
      <div className="section-inner">
        <div className="section-head">
          <h2 id="app-screens-heading">The app, not a mockup.</h2>
          <p className="section-copy">
            These are live TeamShastra screens: home, attendance, work orders, team, and customers.
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
                  sizes="180px"
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
