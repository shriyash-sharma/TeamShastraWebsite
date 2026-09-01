import Image from "next/image";
import Link from "next/link";
import { CookieSettingsButton } from "@/components/CookieConsent";
import { betaStatus, footerItems, legalOperator, supportEmail } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <Link className="brand" href="/" aria-label="TeamShastra home">
            <Image src="/brand/teamshastra_full_logo_light.svg" width={178} height={48} alt="TeamShastra" />
          </Link>
          <p className="footer-note">{betaStatus}</p>
          <p className="footer-credit">Operated by {legalOperator}</p>
          <p className="footer-credit">
            Support: <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
            {" · "}
            <CookieSettingsButton />
          </p>
        </div>
        <div className="footer-links">
          {footerItems.map((item) => item.href.startsWith("http") ? (
            <a key={item.href} href={item.href}>{item.label}</a>
          ) : (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}