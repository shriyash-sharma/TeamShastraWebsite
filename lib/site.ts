import type { Metadata } from "next";

export const marketingUrl = "https://teamshastra.com";
export const appUrl = "https://app.teamshastra.com";
export const loginUrl = `${appUrl}/login`;
export const signupUrl = `${appUrl}/signup`;
export const betaStatus = "TeamShastra is in public beta and not yet recommended for production use.";
export const releaseDate = "September 1, 2026";
export const releaseNote = `Planned production release: ${releaseDate}.`;
export const legalUpdatedAt = "August 20, 2026";

/** Brand operated by the founder until a registered entity is formed. */
export const legalOperator = "Shriyash Sharma, operating under the brand TeamShastra";
export const legalJurisdiction = "India";
export const supportEmail = "care@teamshastra.com";
export const privacyEmail = "care@teamshastra.com";
export const transactionalFromEmail = "noreply@mail.teamshastra.com";
export const googleAnalyticsId = "G-QJ5430L068";
/** Matches the live DNS TXT google-site-verification record. */
export const googleSiteVerification = "eEtcmo7R51YXMtRBAWsnqhK7yDAPGXuZBpxihQL4Fbk";

export const privacyUrl = `${marketingUrl}/privacy`;
export const termsUrl = `${marketingUrl}/terms`;
export const cookiesUrl = `${marketingUrl}/cookies`;
export const accountDeletionUrl = `${marketingUrl}/account-deletion`;

export const navItems = [
  { label: "Features", href: "/features" },
  { label: "Solutions", href: "/solutions" },
  { label: "Locations", href: "/locations" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export const footerItems = [
  { label: "Features", href: "/features" },
  { label: "Solutions", href: "/solutions" },
  { label: "Locations", href: "/locations" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
  { label: "Account Deletion", href: "/account-deletion" },
  { label: "Open App", href: appUrl },
  { label: "Login", href: loginUrl },
  { label: "Join Beta", href: signupUrl }
];

export const pages = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/features", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/solutions", priority: 0.88, changeFrequency: "weekly" as const },
  { path: "/locations", priority: 0.88, changeFrequency: "weekly" as const },
  { path: "/industries", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/pricing", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/privacy", priority: 0.4, changeFrequency: "yearly" as const },
  { path: "/account-deletion", priority: 0.4, changeFrequency: "yearly" as const },
  { path: "/privacy-policy", priority: 0.35, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.35, changeFrequency: "yearly" as const },
  { path: "/cookies", priority: 0.35, changeFrequency: "yearly" as const }
];

export function pageMetadata(path: string, title: string, description: string): Metadata {
  const url = `${marketingUrl}${path === "/" ? "" : path}`;

  return {
    title,
    description,
    metadataBase: new URL(marketingUrl),
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    verification: { google: googleSiteVerification },
    openGraph: {
      type: "website",
      siteName: "TeamShastra",
      title,
      description,
      url,
      images: [{ url: "/screenshots/01-home-dashboard.jpg", width: 714, height: 1599, alt: "TeamShastra home dashboard" }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/screenshots/01-home-dashboard.jpg"]
    }
  };
}

export type MarketingPage = {
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  cards: Array<{ title: string; text: string; marker?: string }>;
  bannerTitle: string;
  bannerText: string;
  bannerCta: string;
};

export const marketingPages: Record<string, MarketingPage> = {
  features: {
    eyebrow: "Features",
    title: "What TeamShastra does, in plain language.",
    description: "A short, honest list of what field teams can do in the app today. Company setup, jobs, attendance, customers, quotes, and support — not a catalogue of future ideas.",
    cta: "Join Beta",
    cards: [
      { marker: "1", title: "Work orders", text: "Create a job, assign a technician, track status, add comments and photos, and share a completion report." },
      { marker: "2", title: "Team & attendance", text: "Invite technicians and managers. Check in and out (works offline). Managers can review and correct attendance." },
      { marker: "3", title: "Customers", text: "Keep a customer directory, link jobs, see due visits, and optionally share selected jobs in a customer portal." },
      { marker: "4", title: "Quotes & invoices", text: "Maintain an item list, send quotations, create invoices, and record payments." },
      { marker: "5", title: "Expenses & reports", text: "Log field expenses and cash given to staff. Owners and managers can view reports and revenue." },
      { marker: "6", title: "Alerts & support", text: "Push notifications for jobs and comments. Chat with TeamShastra from the app, or start a visitor chat on this site with your email and mobile number." }
    ],
    bannerTitle: "Test TeamShastra in public beta.",
    bannerText: "Beta signup routes to the application domain. Production use is not recommended until the planned release.",
    bannerCta: "Join Beta"
  },
  industries: {
    eyebrow: "Industries",
    title: "For service businesses that coordinate people, places, and commitments.",
    description: "TeamShastra is available for public beta testing while protected app workflows remain on app.teamshastra.com.",
    cta: "Join Beta",
    cards: [
      { title: "Facilities maintenance", text: "Plan recurring work, emergency visits, and team assignments." },
      { title: "Equipment service", text: "Track inspections, repairs, parts, and field updates." },
      { title: "Installation teams", text: "Coordinate site readiness, crews, schedules, and customer communication." },
      { title: "Utilities and infrastructure", text: "Keep work orders moving across distributed teams." },
      { title: "Home services", text: "Manage visits, technician capacity, and service follow-through." },
      { title: "Inspection operations", text: "Standardize checklists, evidence, and status tracking." }
    ],
    bannerTitle: "Public beta testing is open.",
    bannerText: "Create a beta workspace on the app domain and help validate the product before production release.",
    bannerCta: "Join Beta"
  },
  blog: {
    eyebrow: "Blog",
    title: "Rank-ready resources for field service operators.",
    description: "This page is included in sitemap coverage so TeamShastra can publish updates during public beta and ahead of production release.",
    cta: "Join Beta",
    cards: [
      { title: "How to reduce dispatch delays", text: "Practical ways to keep technicians, jobs, and customer expectations aligned." },
      { title: "What to track in field service software", text: "Metrics that help managers understand throughput, utilization, and service quality." },
      { title: "Why marketing and app domains should stay separate", text: "Use public pages for discovery and protected app routes for authenticated workflows." }
    ],
    bannerTitle: "Follow the beta as it moves toward launch.",
    bannerText: "CTA links from articles route to beta signup on the application domain.",
    bannerCta: "Join Beta"
  }
};