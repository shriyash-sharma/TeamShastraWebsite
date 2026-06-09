import Image from "next/image";
import Link from "next/link";
import { loginUrl, navItems, signupUrl } from "@/lib/site";

export function Header() {
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <Link className="brand" href="/" aria-label="TeamShastra home">
          <Image src="/brand/teamshastra_full_logo_light.svg" width={180} height={48} alt="TeamShastra" priority />
        </Link>
        <div className="nav-links">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </div>
        <div className="nav-actions">
          <a className="button secondary" href={loginUrl}>Login</a>
          <a className="button primary" href={signupUrl}>Start Free</a>
        </div>
      </nav>
    </header>
  );
}