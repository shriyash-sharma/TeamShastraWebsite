import type { CityProfile, CityTier } from "../types";
import { coreIndustries } from "./industries";

type CityInput = {
  slug: string;
  name: string;
  state: string;
  tier: CityTier;
  localAreas: string[];
  nearbyCitySlugs: string[];
  /** One honest, city-specific operating observation — no invented stats or industries. */
  flavorChallenge: string;
  caseStudyCompany: string;
};

/**
 * Builds an honest, grounded CityProfile. Content is intentionally consistent across
 * cities because the underlying facts (product capabilities, target industries) are
 * the same everywhere — differentiation comes from real local geography, not invented
 * statistics or industries the product doesn't serve.
 */
export function buildCityProfile(input: CityInput): CityProfile {
  const { slug, name, state, tier, localAreas, nearbyCitySlugs, flavorChallenge, caseStudyCompany } = input;
  const area1 = localAreas[0];
  const area2 = localAreas[1] ?? localAreas[0];

  return {
    slug,
    name,
    state,
    tier,
    localAreas,
    nearbyCitySlugs,
    metaDescription: `Field service software for ${name} businesses. GST invoicing, attendance, work orders, and AMC tracking for CCTV installers, electricians, and maintenance teams across ${area1} and ${area2}.`,
    challenges: [
      "Jobs get assigned over phone calls and WhatsApp, with no shared record of what was promised or completed",
      "GST invoices are created in a separate app, disconnected from the job and photos the technician just finished",
      "AMC and annual maintenance visits are tracked in a spreadsheet and often missed",
      "Field expenses and cash given to technicians are tracked in chat threads, not against a job",
      "Attendance across more than one branch has no single, shared record for payroll",
      flavorChallenge
    ],
    whyIntro: `${name} is home to a large base of CCTV installers, electrical contractors, and maintenance providers coordinating technicians across ${area1}, ${area2}, and other business areas in ${state}. TeamShastra replaces phone calls, WhatsApp threads, and paper registers with a single workspace for jobs, GST invoicing, attendance, and AMC tracking.`,
    industries: coreIndustries,
    useCases: [
      {
        title: "CCTV installer job assignment and billing",
        industry: "CCTV & security",
        problem: `A ${name} CCTV and security installer assigned jobs by phone and kept quotations in WhatsApp, separate from GST invoices.`,
        solution: "Jobs, before/after photos, and GST invoices now live in the same TeamShastra workspace.",
        benefits: ["Job-linked photos", "GST invoices tied to the job", "One customer record"]
      },
      {
        title: "AMC due-visit tracking",
        industry: "Maintenance & AMC",
        problem: `A ${name} maintenance provider tracked AMC renewal and visit dates in a spreadsheet, and visits were sometimes missed.`,
        solution: "AMC contracts show which customers are due or overdue for a visit.",
        benefits: ["Due-visit visibility", "Fewer missed renewals", "Visit history per customer"]
      },
      {
        title: "Electrical contractor team attendance",
        industry: "Electrical",
        problem: `An electrical contractor with technicians working across ${area1} and ${area2} had no shared attendance record for payroll.`,
        solution: "Technicians check in and out at each site, and payroll draws from the same attendance data.",
        benefits: ["Shared attendance record", "Payroll-ready data", "Fewer manual corrections"]
      }
    ],
    caseStudy: {
      companyName: `${caseStudyCompany} (illustrative example)`,
      location: `${name} — ${area1} and ${area2}`,
      problem: [
        "Jobs assigned by phone call with no shared record",
        "GST invoices created separately from completed jobs",
        "AMC visit dates tracked in a spreadsheet"
      ],
      results: [
        "Job assignment and status now visible to every manager",
        "GST invoices created from the same workspace as the job",
        "AMC due visits tracked against a list instead of a spreadsheet"
      ]
    },
    faqs: [
      { question: `Is TeamShastra suitable for CCTV and security installers in ${name}?`, answer: `Yes. Installation and AMC companies in ${name} use TeamShastra to assign jobs, capture photos, and issue GST invoices.` },
      { question: `Can electrical contractors in ${name} use TeamShastra?`, answer: "Yes. Electricians assign and track jobs, and issue GST invoices against completed work." },
      { question: "Does TeamShastra work offline in areas with poor network?", answer: "Yes. Attendance check-in and work order updates work offline and sync when the connection returns." },
      { question: "Does TeamShastra track technicians all day with GPS?", answer: "No. Location is only captured at attendance check-in and check-out, not continuously in the background." },
      { question: `Can a ${name} business with more than one branch use TeamShastra?`, answer: "Yes. Multi-company workspace support lets a business manage more than one branch or company from one account." },
      { question: "Does TeamShastra file GST returns on the government portal?", answer: "No. It creates GST invoices and CA-ready export workbooks. Your CA files returns on the GST portal." },
      { question: "Is TeamShastra available on Android?", answer: "Yes. TeamShastra is available on Android (Google Play) and on the web." },
      { question: `Can a business with technicians across ${area1} and ${area2} manage them from one account?`, answer: "Yes. Job assignment and attendance work the same way across every site your technicians visit." }
    ]
  };
}
