import type { Metadata } from "next";

export const marketingUrl = "https://teamshastra.com";
export const appUrl = "https://app.teamshastra.com";
export const loginUrl = `${appUrl}/login`;
export const signupUrl = `${appUrl}/signup`;

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
  { label: "Start Free", href: signupUrl }
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
    title: "Everything field teams need to move from request to completed work.",
    description: "The marketing website explains the product. The authenticated application handles login, signup, company creation, and day-to-day operations.",
    cta: "Try TeamShastra",
    cards: [
      { marker: "S", title: "Scheduling", text: "Assign jobs, balance workloads, and plan the day with clear availability." },
      { marker: "D", title: "Dispatch", text: "Route technicians, update work orders, and keep field activity visible." },
      { marker: "C", title: "Company setup", text: "Send new visitors to signup so they can create a company on the app platform." },
      { marker: "R", title: "Reporting", text: "Measure job completion, technician utilization, and service pipeline health." },
      { marker: "M", title: "Mobile work", text: "Give field users access to the context they need before and during each visit." },
      { marker: "A", title: "Admin controls", text: "Manage teams, roles, and account settings behind authenticated access." }
    ],
    bannerTitle: "Create your company in TeamShastra.",
    bannerText: "Signup always routes to the application domain.",
    bannerCta: "Create Company"
  },
  industries: {
    eyebrow: "Industries",
    title: "For service businesses that coordinate people, places, and commitments.",
    description: "TeamShastra is positioned for discoverable marketing pages on teamshastra.com while keeping protected workflows on app.teamshastra.com.",
    cta: "Get Started",
    cards: [
      { title: "Facilities maintenance", text: "Plan recurring work, emergency visits, and team assignments." },
      { title: "Equipment service", text: "Track inspections, repairs, parts, and field updates." },
      { title: "Installation teams", text: "Coordinate site readiness, crews, schedules, and customer communication." },
      { title: "Utilities and infrastructure", text: "Keep work orders moving across distributed teams." },
      { title: "Home services", text: "Manage visits, technician capacity, and service follow-through." },
      { title: "Inspection operations", text: "Standardize checklists, evidence, and status tracking." }
    ],
    bannerTitle: "Start free on the app domain.",
    bannerText: "Visitors convert from ranked marketing pages into authenticated company creation.",
    bannerCta: "Start Free"
  },
  blog: {
    eyebrow: "Blog",
    title: "Rank-ready resources for field service operators.",
    description: "This page is included in sitemap coverage so TeamShastra can publish keyword-focused content on the public marketing domain.",
    cta: "Start Free",
    cards: [
      { title: "How to reduce dispatch delays", text: "Practical ways to keep technicians, jobs, and customer expectations aligned." },
      { title: "What to track in field service software", text: "Metrics that help managers understand throughput, utilization, and service quality." },
      { title: "Why marketing and app domains should stay separate", text: "Use public pages for discovery and protected app routes for authenticated workflows." }
    ],
    bannerTitle: "Turn readers into active companies.",
    bannerText: "CTA links from articles route directly to signup.",
    bannerCta: "Create Company"
  }
};