export type FeatureHighlight = {
  title: string;
  description: string;
};

export const platformFeatures: FeatureHighlight[] = [
  { title: "Attendance & GPS", description: "Location-verified check-in and punch-out for field staff, guards, and site workers with geofencing support." },
  { title: "Geofencing", description: "Define approved work zones at customer sites, warehouses, factories, and project locations." },
  { title: "Leave & shift management", description: "Plan rosters, manage leave approvals, and ensure dispatchers know who is available." },
  { title: "Field technician tracking", description: "Real-time visibility into technician location, job status, and daily activity." },
  { title: "Customer management", description: "Maintain customer site history, contacts, open issues, and AMC contract details." },
  { title: "Work orders", description: "Create, assign, track, and close digital work orders with status updates for managers and customers." },
  { title: "Preventive maintenance", description: "Schedule recurring PM visits for AMC contracts, equipment, and facility maintenance." },
  { title: "Digital service reports", description: "Structured checklists, photo evidence, parts usage, and notes replace paper job sheets." },
  { title: "Customer signatures", description: "Capture digital sign-off at site for installation, repair, and maintenance jobs." },
  { title: "Photos & offline sync", description: "Attach before/after photos; field teams work offline and sync when connectivity returns." },
  { title: "Notifications", description: "Alert technicians and supervisors when jobs are assigned, delayed, or completed." },
  { title: "Reports & analytics", description: "Measure completion rates, utilization, SLA performance, and operational throughput." },
  { title: "Role-based permissions", description: "Control access by team, branch, or business unit for supervisors and managers." },
  { title: "Multi-company support", description: "Manage multiple branches, clients, or business units from one account." },
  { title: "PWA, Android & web", description: "Mobile-first workflows for field staff on Android and web, with PWA support." }
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
