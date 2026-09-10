import type { Metadata } from "next";

export const marketingUrl = "https://teamshastra.com";
export const appUrl = "https://app.teamshastra.com";
export const loginUrl = `${appUrl}/login`;
export const signupUrl = `${appUrl}/signup`;
export const androidPackage = "com.teamshastra.mobile";
export const playStoreUrl = `https://play.google.com/store/apps/details?id=${androidPackage}`;
export const betaStatus =
  "TeamShastra is field service management software for owners, managers, and technicians.";
export const legalUpdatedAt = "September 9, 2026";

/** Product capabilities used in listing copy, schema, and AI crawlers. */
export const productFeatureList = [
  "Jobs and work orders with photos and completion reports",
  "Team attendance, leave, and today's board",
  "GST invoices, quotations, and payments",
  "Purchase bills and supplier balances",
  "Field expenses, cash float, and bank balances",
  "Job, performance, and revenue reports",
  "Customers, AMC due visits, and optional customer portal",
  "English, Hindi, Gujarati, Marathi, and Bengali"
];

export const homeFaqs = [
  {
    question: "What is TeamShastra?",
    answer:
      "TeamShastra is field service management software for Indian companies. Owners, managers, and technicians run jobs, attendance, GST invoices, purchases, expenses, and reports from one Android and web workspace."
  },
  {
    question: "Does TeamShastra support GST invoices?",
    answer:
      "Yes. Create quotations and GST tax invoices, record payments and pending collections, share PDFs on WhatsApp, and export CA-ready GST workbooks. TeamShastra does not file returns on the GST portal."
  },
  {
    question: "Can field teams log expenses and cash?",
    answer:
      "Yes. Log field expenses by person and category, track cash given to staff (float), and see bank balances next to sales and purchases."
  },
  {
    question: "Is TeamShastra available in Hindi and other Indian languages?",
    answer:
      "Yes. The app supports English, Hindi, Gujarati, Marathi, and Bengali."
  },
  {
    question: "Does TeamShastra track GPS all day?",
    answer:
      "No. Location is optional at check-in and check-out only. There is no all-day background GPS tracking."
  },
  {
    question: "Who is TeamShastra for?",
    answer:
      "B2B field service companies such as CCTV installers, electricians, maintenance teams, and similar businesses. A company admin creates the workspace or invites staff. It is not a consumer or children's app."
  }
];

/** Legal operator of the TeamShastra brand. */
export const legalOperator =
  "Shri CCTV And Home Automation Services, operating under the brand TeamShastra";
export const legalAdmin = "Jagrati Mukati";
/** Contributor credits on About only — not the legal operator. */
export const engineeringCredit = "Shriyash Sharma";
export const qeCredit = "Jagrati Mukati";
export const legalJurisdiction = "India";
export const supportEmail = "care@teamshastra.com";
export const privacyEmail = "care@teamshastra.com";
/** Public support / operator phone (India). */
export const supportPhoneDisplay = "+91 76970 12040";
export const supportPhoneE164 = "+917697012040";
export const supportPhoneTel = `tel:${supportPhoneE164}`;
export const supportPhoneWhatsApp = `https://wa.me/${supportPhoneE164.replace("+", "")}`;
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
  { label: "Get it on Google Play", href: playStoreUrl },
  { label: "Login", href: loginUrl },
  { label: "Get started", href: signupUrl }
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
    keywords: [
      "field service management software",
      "GST invoicing software India",
      "field service attendance app",
      "job management software India",
      "technician dispatch software",
      "field expense tracking",
      "CCTV installer software"
    ],
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
    description: "Jobs, attendance, GST invoices, purchases, expenses, reports, and a customer portal — what field teams can do in the app today.",
    cta: "Get started",
    cards: [
      { marker: "1", title: "Work orders", text: "Create a job, assign a technician, move status, add comments and before/after photos, see today's board, and share a completion report PDF." },
      { marker: "2", title: "Team & attendance", text: "Invite technicians and managers. Check in and out with optional location (works offline). Managers review duty, mark leave, and correct records. No all-day GPS tracking." },
      { marker: "3", title: "Customers & AMC", text: "Customer directory with job history, AMC contracts, customers due for a visit, and an optional customer portal for jobs you share." },
      { marker: "4", title: "GST invoices & quotations", text: "Catalog, quotations, GST tax invoices, payments, and pending collections. Share PDFs on WhatsApp. Export CA-ready GST workbooks (not GST portal filing)." },
      { marker: "5", title: "Purchases & suppliers", text: "Record purchase bills, track what you still owe suppliers, and keep sales and purchases in the same workspace." },
      { marker: "6", title: "Expenses, float & bank", text: "Log field expenses by person and category. Track cash given to staff (float) and bank balances next to collections." },
      { marker: "7", title: "Reports", text: "Job summary, technician performance, and revenue views for owners and managers." },
      { marker: "8", title: "Languages", text: "English, Hindi, Gujarati, Marathi, and Bengali — built for Indian field teams." },
      { marker: "9", title: "Alerts & support", text: "Push notifications for jobs and comments. Chat with TeamShastra from the app, or start a visitor chat on this site with your email and mobile number." }
    ],
    bannerTitle: "Create your company workspace.",
    bannerText: "Download on Google Play or sign up on the web at app.teamshastra.com. Use this site for product information, privacy, and support.",
    bannerCta: "Get started"
  },
  industries: {
    eyebrow: "Industries",
    title: "For service businesses that coordinate people, places, and payments.",
    description: "TeamShastra is for Indian field service companies — CCTV installers, electricians, maintenance crews, and similar teams. Sign up on app.teamshastra.com or download on Google Play.",
    cta: "Get started",
    cards: [
      { title: "CCTV & security installers", text: "Assign installation and AMC jobs, capture site photos, and invoice with GST." },
      { title: "Electricians & electrical contractors", text: "Dispatch licensed electricians, track visits, and collect payment against invoices." },
      { title: "Facilities maintenance", text: "Plan recurring work, emergency visits, attendance, and team assignments." },
      { title: "Equipment service", text: "Track inspections, repairs, parts, purchase bills, and field updates." },
      { title: "Home services", text: "Manage visits, technician capacity, expenses, and customer follow-through." },
      { title: "Installation teams", text: "Coordinate site readiness, crews, photos, quotations, and completion reports." }
    ],
    bannerTitle: "Ready for your field team.",
    bannerText: "Create a company workspace and start with jobs, attendance, GST invoices, and expenses.",
    bannerCta: "Get started"
  },
  blog: {
    eyebrow: "Blog",
    title: "Rank-ready resources for field service operators.",
    description: "Notes and guides for field service operators using TeamShastra.",
    cta: "Get started",
    cards: [
      { title: "How to reduce dispatch delays", text: "Practical ways to keep technicians, jobs, and customer expectations aligned." },
      { title: "What to track in field service software", text: "Metrics that help managers understand throughput, utilization, and service quality." },
      { title: "Why marketing and app domains should stay separate", text: "Use public pages for discovery and protected app routes for authenticated workflows." }
    ],
    bannerTitle: "Start using TeamShastra.",
    bannerText: "Article CTAs open signup on the application domain.",
    bannerCta: "Get started"
  }
};