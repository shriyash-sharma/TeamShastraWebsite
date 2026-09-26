import type { IndustryFocus } from "../types";

/**
 * The industries TeamShastra is actually built for, shared across every city page.
 * Kept identical everywhere because it's factually true everywhere — these are the
 * confirmed target industries (see lib/site.ts marketing copy), not a per-city claim.
 */
export const coreIndustries: IndustryFocus[] = [
  { name: "CCTV & security installers", description: "Installation and AMC companies that assign jobs, capture site photos, and invoice with GST." },
  { name: "Electrical contractors", description: "Licensed electricians dispatching teams for installation, repair, and maintenance visits." },
  { name: "Facilities maintenance", description: "Maintenance crews coordinating recurring work, attendance, and team assignments across client sites." },
  { name: "Equipment service", description: "Repair and AMC providers tracking inspections, parts, and purchase bills alongside field visits." },
  { name: "Home services & installation teams", description: "Multi-technician teams coordinating site visits, quotations, and completion reports." }
];
