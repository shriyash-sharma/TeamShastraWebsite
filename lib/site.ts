import type { Metadata } from "next";

export const marketingUrl = "https://teamshastra.com";
export const appUrl = "https://app.teamshastra.com";
export const loginUrl = `${appUrl}/login`;
export const signupUrl = `${appUrl}/signup`;
export const betaStatus = "TeamShastra is in public beta and not yet recommended for production use.";
export const releaseDate = "July 1, 2026";
export const releaseNote = `Planned production release: ${releaseDate}.`;

export const navItems = [
  { label: "Features", href: "/features" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export const footerItems = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Account Deletion", href: "/account-deletion" },
  { label: "Terms", href: "/terms" },
  { label: "Open App", href: appUrl },
  { label: "Login", href: loginUrl },
  { label: "Join Beta", href: signupUrl }
];

export const pages = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/features", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/industries", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/pricing", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/privacy", priority: 0.4, changeFrequency: "yearly" as const },
  { path: "/account-deletion", priority: 0.4, changeFrequency: "yearly" as const },
  { path: "/privacy-policy", priority: 0.35, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.35, changeFrequency: "yearly" as const }
];

export function pageMetadata(path: string, title: string, description: string): Metadata {
  const url = `${marketingUrl}${path === "/" ? "" : path}`;

  return {
    title,
    description,
    metadataBase: new URL(marketingUrl),
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    verification: { google: "replace-with-google-search-console-token" },
    openGraph: {
      type: "website",
      siteName: "TeamShastra",
      title,
      description,
      url,
      images: [{ url: "/brand/teamshastra_app_icon.svg", width: 512, height: 512, alt: "TeamShastra logo" }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/brand/teamshastra_app_icon.svg"]
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
    title: "Everything field teams need to test field-service workflows before launch.",
    description: "TeamShastra is open for public beta testing so teams can try scheduling, dispatch, company setup, and field-work tracking before the planned production release.",
    cta: "Join Beta",
    cards: [
      { marker: "S", title: "Scheduling", text: "Assign jobs, balance workloads, and plan the day with clear availability." },
      { marker: "D", title: "Dispatch", text: "Route technicians, update work orders, and keep field activity visible." },
      { marker: "C", title: "Company setup", text: "Create a test company on the app platform and evaluate the workflow before production use." },
      { marker: "R", title: "Reporting", text: "Measure job completion, technician utilization, and service pipeline health." },
      { marker: "M", title: "Mobile work", text: "Give field users access to the context they need before and during each visit." },
      { marker: "A", title: "Admin controls", text: "Manage teams, roles, and account settings behind authenticated access." }
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