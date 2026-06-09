import Image from "next/image";
import Link from "next/link";
import { footerItems } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <Link className="brand" href="/" aria-label="TeamShastra home">
            <Image src="/brand/teamshastra_full_logo_light.svg" width={178} height={48} alt="TeamShastra" />
          </Link>
          <p className="footer-note">Marketing on teamshastra.com. Authenticated product on app.teamshastra.com.</p>
          <p className="footer-credit">
            Project by <a href="https://shriyashsharma.com/projects/teamshastra-field-workforce-management-saas" target="_blank" rel="noopener">Shriyash Sharma</a>
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