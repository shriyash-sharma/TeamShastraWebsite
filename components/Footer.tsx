import Image from "next/image";
import Link from "next/link";
import { CookieSettingsButton } from "@/components/CookieConsent";
import { SupportChannels } from "@/components/ContactChannelIcons";
import { appUrl, betaStatus, legalOperator, loginUrl, playStoreUrl, signupUrl } from "@/lib/site";

const footerGroups = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Solutions", href: "/solutions" },
      { label: "Industries", href: "/industries" },
      { label: "Locations", href: "/locations" },
      { label: "Pricing", href: "/pricing" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" }
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Cookies", href: "/cookies" },
      { label: "Account Deletion", href: "/account-deletion" }
    ]
  },
  {
    title: "Get started",
    links: [
      { label: "Get it on Google Play", href: playStoreUrl },
      { label: "Login", href: loginUrl },
      { label: "Create an account", href: signupUrl },
      { label: "Open the app", href: appUrl }
    ]
  }
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link className="brand" href="/" aria-label="TeamShastra home">
            <Image src="/brand/teamshastra_header_logo.svg" width={240} height={49} alt="TeamShastra" />
          </Link>
          <p className="footer-note">{betaStatus}</p>
          <p className="footer-credit">Operated by {legalOperator}</p>
          <SupportChannels compact />
        </div>
        <div className="footer-groups">
          {footerGroups.map((group) => (
            <div className="footer-group" key={group.title}>
              <p className="footer-group-title">{group.title}</p>
              <div className="footer-links">
                {group.links.map((item) =>
                  item.href.startsWith("http") ? (
                    <a key={item.href} href={item.href}>
                      {item.label}
                    </a>
                  ) : (
                    <Link key={item.href} href={item.href}>
                      {item.label}
                    </Link>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">&copy; {new Date().getFullYear()} TeamShastra. All rights reserved.</p>
        <CookieSettingsButton />
      </div>
    </footer>
  );
}
