export type FeatureHighlight = {
  title: string;
  description: string;
};

export const platformFeatures: FeatureHighlight[] = [
  { title: "Work orders", description: "Create, assign, track, and close digital jobs with status, comments, today's board, and completion report PDFs." },
  { title: "Attendance & punch-time GPS", description: "Optional location at check-in and check-out for field staff. Offline punches sync later. No continuous background tracking." },
  { title: "Leave management", description: "Managers mark leave and see who is on duty so dispatch is based on real availability." },
  { title: "GST invoices & quotations", description: "Item catalog, quotations, GST tax invoices, payments, and pending collections for Indian field businesses." },
  { title: "WhatsApp PDF sharing", description: "Share quotation, invoice, and job completion PDFs on WhatsApp." },
  { title: "CA-ready GST exports", description: "Export GST workbooks for your CA. TeamShastra does not file returns on the GST portal." },
  { title: "Purchases & suppliers", description: "Record purchase bills and track what you still owe, next to sales." },
  { title: "Field expenses, float & bank", description: "Log expenses by person and category, track cash given to staff, and see bank balances." },
  { title: "Customers, AMC & due visits", description: "Customer directory with job history, AMC contracts, and customers due for a visit." },
  { title: "Customer portal", description: "Optionally share selected jobs so clients see only the work you choose." },
  { title: "Reports", description: "Job summary, technician performance, and revenue views for owners and managers." },
  { title: "Indian languages", description: "English, Hindi, Gujarati, Marathi, and Bengali." },
  { title: "Notifications", description: "Alerts when jobs are assigned, updated, or commented — tap to open the relevant screen." },
  { title: "Role-based access", description: "Owners, managers, and technicians see the modules that match their role." },
  { title: "Multi-company workspaces", description: "Switch workspace if you belong to more than one company." },
  { title: "Android & web", description: "Same company workspace on Android (Google Play) and web at app.teamshastra.com." }
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
