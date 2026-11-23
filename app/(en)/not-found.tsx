import type { Metadata } from "next";
import Link from "next/link";
import { navItems, signupUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found | TeamShastra",
  robots: { index: false, follow: true }
};

export default function NotFound() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <span className="eyebrow">404</span>
          <h1>We couldn&apos;t find that page.</h1>
          <p className="page-lead">
            The link may be old or mistyped. These pages cover what TeamShastra does for field service teams.
          </p>
          <nav className="seo-internal-links" aria-label="Popular pages">
            <Link href="/">Home</Link>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/faq">FAQ</Link>
          </nav>
          <div className="hero-actions">
            <a className="button primary" href={signupUrl}>Get started</a>
          </div>
        </div>
      </section>
    </main>
  );
}
