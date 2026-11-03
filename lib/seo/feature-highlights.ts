export type FeatureHighlight = {
  title: string;
  description: string;
};

export const platformFeatures: FeatureHighlight[] = [
  { title: "Work orders", description: "Create, assign, track, and close digital jobs with status, comments, today's board, and service or progress report PDFs." },
  { title: "Attendance & punch-time GPS", description: "Location only at check-in and check-out. A company can require GPS, an office radius, or a check-in selfie. Offline punches sync later. No background tracking." },
  { title: "Team map", description: "See who is on duty from check-in, job-start, and job-photo pins, and ask for a work-status update. Not all-day GPS." },
  { title: "Leave management", description: "Mark leave, half day, absent, or holiday, and see who is on duty so dispatch follows real availability." },
  { title: "GST invoices & quotations", description: "Item catalog, quotations, proforma invoices, GST tax invoices, payments, and pending collections for Indian field businesses." },
  { title: "WhatsApp PDF sharing", description: "Share quotation, invoice, and service report PDFs on WhatsApp." },
  { title: "CA-ready GST exports", description: "Download GSTR-1, GSTR-3B, GSTR-9, and a full GST workbook for your CA. TeamShastra does not file returns on the GST portal." },
  { title: "Purchases & suppliers", description: "Record purchase bills and debit notes, and track what you still owe, next to sales." },
  { title: "Field expenses, float & bank", description: "Log expenses by person and category, track cash given to staff, and see bank balances." },
  { title: "Staff salary", description: "Owners set Monthly, Per day, or Hourly wages for a calendar month and see who is still to pay. Freeze the month, then pay from bank or cash." },
  { title: "Advances, off days & payslips", description: "Salary advances keep the amount left and are cut when you pay. Weekly off is unpaid on a per-day wage and included in a monthly salary. Holidays can be paid or unpaid. Share a payslip; staff can open their own." },
  { title: "Customers, AMC & due visits", description: "Customer directory with job history, AMC contracts, and customers due for a visit." },
  { title: "Customer portal", description: "Optional. Invite a customer, then share or hide each job. They can track shared jobs, view photos, and message your team." },
  { title: "Customer support", description: "In-app support chat for your team, plus a website visitor chat for prospects." },
  { title: "Reports", description: "Job summary, technician performance, revenue, money in and out, expenses, staff cash, and attendance." },
  { title: "Indian languages", description: "English, Hindi, Gujarati, Marathi, and Bengali." },
  { title: "Notifications", description: "Alerts when jobs are assigned, updated, or commented — tap to open the relevant screen." },
  { title: "Role-based access", description: "Owners, managers, and technicians see the modules that match their role. Owners run staff salary." },
  { title: "Multi-company workspaces", description: "Switch workspace if you belong to more than one company." },
  { title: "Android, web & home screen", description: "Same company workspace on Android (Google Play), the web at app.teamshastra.com, and as an installable home-screen app. iPhone uses Safari → Add to Home Screen." }
];

export function dedupeFeatureHighlights(
  highlights: FeatureHighlight[]
): FeatureHighlight[] {
  const seen = new Set<string>();
  const deduped: FeatureHighlight[] = [];

  for (const item of highlights) {
    const key = item.title.trim().toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    deduped.push(item);
  }

  return deduped;
}

export function mergeFeatureHighlights(
  primary: FeatureHighlight[],
  secondary: FeatureHighlight[]
): FeatureHighlight[] {
  return dedupeFeatureHighlights([...primary, ...secondary]);
}
