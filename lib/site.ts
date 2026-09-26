import type { Metadata } from "next";

export const marketingUrl = "https://teamshastra.com";
export const appUrl = "https://app.teamshastra.com";
export const loginUrl = `${appUrl}/login`;
export const signupUrl = `${appUrl}/signup`;
export const androidPackage = "com.teamshastra.mobile";
export const playStoreUrl = `https://play.google.com/store/apps/details?id=${androidPackage}`;
export const betaStatus =
  "TeamShastra is field service management software for owners, managers, and technicians.";
export const legalUpdatedAt = "September 24, 2026";

/** Product capabilities used in listing copy, schema, and AI crawlers. */
export const productFeatureList = [
  "Jobs and work orders with photos and completion reports",
  "Team attendance, leave, and today's board",
  "GST invoices, quotations, credit/debit notes, and payments",
  "GST exports for your CA: GSTR-1, GSTR-3B, GSTR-9, and HSN summary",
  "TDS rates, reports, and Form 26Q certificates",
  "Stock and inventory with a full movement ledger",
  "Purchase bills and supplier balances",
  "Field expenses, cash float, and bank balances",
  "Payroll: pay profiles, salary advances, monthly payroll runs",
  "Job, performance, and revenue reports",
  "Customers, AMC due visits, and optional customer portal",
  "Multi-company workspaces from one login",
  "In-app and website customer support chat",
  "English, Hindi, Gujarati, Marathi, and Bengali"
];

/** Plain-language pricing summary reused on the pricing page, Terms, and llms.txt. */
export const pricingSummary = {
  starterPrice: "Free",
  paidPrice: "₹99 per user, per month, plus applicable GST",
  trial: "1-month free trial on the Growth plan, no charge until the trial ends",
  refundPolicy:
    "Payments are non-refundable once a billing period starts, but you can cancel anytime to stop future billing",
  cancellationPolicy:
    "Paid access continues until the end of the current billing period, after which the workspace continues on the free Starter plan"
};

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
    question: "How much does TeamShastra cost?",
    answer:
      "The Starter plan is free. The Growth plan starts at ₹99 per user, per month (plus applicable GST), with a 1-month free trial before billing begins. Enterprise pricing is available on request. See teamshastra.com/pricing for details."
  },
  {
    question: "Does TeamShastra offer payroll?",
    answer:
      "Yes. Owners can set per-employee pay profiles (monthly, daily, or hourly), record paid holidays and salary advances, and run monthly payroll from draft to locked to paid."
  },
  {
    question: "Does TeamShastra support TDS?",
    answer:
      "Yes. TeamShastra supports TDS rate configuration, TDS reports, and Form 26Q certificates alongside GST invoicing."
  },
  {
    question: "Does TeamShastra track stock and inventory?",
    answer:
      "Yes. A catalog with stock tracking and a movement ledger covers sales, purchases, returns, and adjustments."
  },
  {
    question: "Can I manage more than one company in TeamShastra?",
    answer:
      "Yes. Multi-company workspaces let one login switch between more than one company."
  },
  {
    question: "Can I import my data from Vyapar?",
    answer:
      "Yes. TeamShastra supports bulk import of catalog, parties, sales, purchases, and expenses from Vyapar, with a dry-run preview before anything is saved."
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

/** FAQs specific to billing and plans, shown on /pricing and aggregated on /faq. */
export const pricingFaqs = [
  {
    question: "Is there a free plan?",
    answer: `Yes. The Starter plan is ${pricingSummary.starterPrice.toLowerCase()}, with a company workspace, jobs, attendance, and team invites.`
  },
  {
    question: "How much does the Growth plan cost?",
    answer: `${pricingSummary.paidPrice}, billed monthly, after a ${pricingSummary.trial.toLowerCase()}.`
  },
  {
    question: "Can I get a refund after I'm billed?",
    answer: pricingSummary.refundPolicy + "."
  },
  {
    question: "What happens if I cancel?",
    answer: pricingSummary.cancellationPolicy + "."
  },
  {
    question: "Is there a setup fee?",
    answer: "No. There is no separate setup fee for the Starter or Growth plans."
  },
  {
    question: "How is Enterprise pricing decided?",
    answer: "Enterprise plans are billed on separately agreed, written commercial terms. Contact us to discuss your team size and requirements."
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

export const pages = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/features", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/solutions", priority: 0.88, changeFrequency: "weekly" as const },
  { path: "/locations", priority: 0.88, changeFrequency: "weekly" as const },
  { path: "/industries", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/pricing", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/faq", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/vyapar-alternative", priority: 0.75, changeFrequency: "monthly" as const },
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
      "CCTV installer software",
      "TDS software India",
      "stock and inventory software for field service"
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
      { marker: "4", title: "GST invoices & quotations", text: "Catalog, quotations, GST tax invoices, credit notes, debit notes, delivery challans, payments, and pending collections. Share PDFs on WhatsApp." },
      { marker: "5", title: "GST & TDS compliance", text: "Export CA-ready GSTR-1, GSTR-3B, GSTR-9, and HSN summary workbooks (not GST portal filing). TDS rate configuration, reports, and Form 26Q certificates." },
      { marker: "6", title: "Stock & inventory", text: "A catalog with stock tracking and a movement ledger across sales, purchases, returns, and adjustments." },
      { marker: "7", title: "Purchases & suppliers", text: "Record purchase bills, track what you still owe suppliers, and keep sales and purchases in the same workspace." },
      { marker: "8", title: "Expenses, float & bank", text: "Log field expenses by person and category. Track cash given to staff (float) and bank balances next to collections." },
      { marker: "9", title: "Payroll", text: "Owner-only payroll: per-employee pay profiles (monthly, daily, or hourly), paid holidays, salary advances, and one-off adjustments. Run monthly payroll from draft to locked to paid." },
      { marker: "10", title: "Multi-company workspaces", text: "One login can switch between more than one company, each with its own jobs, customers, and books." },
      { marker: "11", title: "Reports", text: "Job summary, technician performance, and revenue views for owners and managers." },
      { marker: "12", title: "Languages", text: "English, Hindi, Gujarati, Marathi, and Bengali — built for Indian field teams." },
      { marker: "13", title: "Alerts", text: "Push notifications for jobs and comments, tapping straight through to the relevant screen." },
      { marker: "14", title: "Customer support", text: "Chat with TeamShastra from inside the app, or start a visitor chat on this site with your email and mobile number — a real person (or our support assistant) replies in the thread." },
      { marker: "15", title: "Switching from Vyapar", text: "Bulk import your catalog, parties, sales, purchases, and expenses from Vyapar, with a dry-run preview before anything is saved." }
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