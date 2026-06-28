import type { FeatureProfile } from "./types";

export const features: FeatureProfile[] = [
  {
    slug: "workforce-management",
    name: "Workforce Management",
    shortName: "Workforce",
    headline: "Workforce Management Software",
    description: "Coordinate attendance, shifts, field teams, and daily operations from one platform.",
    metaTitleSuffix: "Workforce Management Software",
    metaDescriptionTemplate:
      "TeamShastra workforce management software helps {city} businesses track attendance, manage field teams, assign work orders, and improve service operations.",
    heroLead:
      "Modern workforce management platform trusted by growing businesses coordinating distributed teams, site visits, and daily operations.",
    focusAreas: ["Attendance & shifts", "Field team visibility", "Work order dispatch", "Operational reporting"],
    featureHighlights: [
      { title: "GPS attendance", description: "Verify check-ins at customer sites, branches, and project locations across the city." },
      { title: "Geofencing", description: "Define site boundaries so attendance and job start events are captured automatically." },
      { title: "Shift management", description: "Plan rosters for security, maintenance, delivery, and multi-shift manufacturing teams." },
      { title: "Leave management", description: "Track approvals and availability so dispatchers always know who is on duty." },
      { title: "Work orders", description: "Assign, track, and close jobs with status updates visible to managers and customers." },
      { title: "Offline sync", description: "Field teams in low-connectivity areas can continue working and sync when back online." }
    ]
  },
  {
    slug: "field-service-management",
    name: "Field Service Management",
    shortName: "Field Service",
    headline: "Field Service Management Software",
    description: "Dispatch technicians, manage service visits, and deliver faster customer resolutions.",
    metaTitleSuffix: "Field Service Management Software",
    metaDescriptionTemplate:
      "Field service management software for {city} service companies. Dispatch technicians, track visits, capture signatures, and improve SLA performance.",
    heroLead:
      "End-to-end field service platform for businesses that send technicians, engineers, and service staff to customer locations every day.",
    focusAreas: ["Technician dispatch", "SLA tracking", "Digital service reports", "Customer communication"],
    featureHighlights: [
      { title: "Technician tracking", description: "See where field staff are, what jobs are in progress, and which visits need reassignment." },
      { title: "Smart dispatch", description: "Balance workloads and route the right technician based on skills, proximity, and availability." },
      { title: "Digital service reports", description: "Replace paper job sheets with structured reports, photos, and customer sign-off." },
      { title: "Preventive maintenance", description: "Schedule recurring service visits for AMC contracts, utilities, and facility clients." },
      { title: "Customer management", description: "Keep site history, contact details, and open issues accessible before every visit." },
      { title: "Notifications", description: "Alert technicians and supervisors when jobs are assigned, delayed, or completed." }
    ]
  },
  {
    slug: "attendance-management",
    name: "Attendance Management",
    shortName: "Attendance",
    headline: "Attendance Management Software",
    description: "Track employee attendance with GPS, geofencing, shifts, and leave workflows.",
    metaTitleSuffix: "Attendance Management Software",
    metaDescriptionTemplate:
      "Attendance management software for {city} businesses. GPS check-in, geofencing, shift planning, and leave tracking for field and site teams.",
    heroLead:
      "Accurate attendance tracking for distributed teams that work across offices, warehouses, customer sites, and remote locations.",
    focusAreas: ["GPS check-in", "Geofencing", "Shift rosters", "Leave workflows"],
    featureHighlights: [
      { title: "GPS attendance", description: "Capture location-verified punch-in and punch-out for field and site-based staff." },
      { title: "Geofencing", description: "Restrict or validate attendance within approved work zones and client premises." },
      { title: "Shift management", description: "Create rotating shifts for security, housekeeping, manufacturing, and 24/7 operations." },
      { title: "Leave management", description: "Manage leave requests, balances, and approvals without spreadsheet chaos." },
      { title: "Role-based permissions", description: "Give supervisors visibility by team, branch, or business unit." },
      { title: "Attendance reports", description: "Export daily, weekly, and monthly attendance for payroll and compliance review." }
    ]
  },
  {
    slug: "work-order-management",
    name: "Work Order Management",
    shortName: "Work Orders",
    headline: "Work Order Management Software",
    description: "Create, assign, track, and close work orders with full field visibility.",
    metaTitleSuffix: "Work Order Management Software",
    metaDescriptionTemplate:
      "Work order management software for {city} operations teams. Assign jobs, track progress, capture proof of work, and improve completion rates.",
    heroLead:
      "Digital work order system for maintenance, installation, and service teams that need clear accountability from assignment to closure.",
    focusAreas: ["Job assignment", "Status tracking", "Photo evidence", "Customer sign-off"],
    featureHighlights: [
      { title: "Digital work orders", description: "Replace WhatsApp messages and paper chits with structured, trackable job tickets." },
      { title: "Assignment rules", description: "Route jobs to the right technician based on territory, skill, or priority." },
      { title: "Photo reports", description: "Attach before/after photos and notes so managers can verify work quality remotely." },
      { title: "Customer signatures", description: "Capture digital acceptance at site for AMC, installation, and repair jobs." },
      { title: "SLA tracking", description: "Monitor response and resolution times for enterprise and facility clients." },
      { title: "Work order history", description: "Maintain a searchable record of past jobs, parts used, and technician notes." }
    ]
  },
  {
    slug: "employee-tracking",
    name: "Employee Tracking",
    shortName: "Employee Tracking",
    headline: "Employee Tracking Software",
    description: "Real-time visibility into field employee location, job progress, and daily activity.",
    metaTitleSuffix: "Employee Tracking Software",
    metaDescriptionTemplate:
      "Employee tracking software for {city} field teams. Monitor site visits, job progress, attendance, and daily activity in real time.",
    heroLead:
      "Real-time employee tracking for sales, service, delivery, and inspection teams that spend most of the day away from the office.",
    focusAreas: ["Live location", "Visit verification", "Route history", "Activity logs"],
    featureHighlights: [
      { title: "Field employee tracking", description: "See which team members are on site, in transit, or available for the next assignment." },
      { title: "Visit verification", description: "Confirm customer visits with timestamps, GPS coordinates, and job-linked check-ins." },
      { title: "Route visibility", description: "Review daily movement patterns to optimize territories and reduce unnecessary travel." },
      { title: "Activity logs", description: "Track job starts, breaks, and completions for operational accountability." },
      { title: "Multi-branch support", description: "Manage tracking across branches, warehouses, and regional hubs from one dashboard." },
      { title: "Privacy-aware controls", description: "Configure tracking during work hours with role-based access for supervisors." }
    ]
  },
  {
    slug: "service-management",
    name: "Service Management",
    shortName: "Service Ops",
    headline: "Service Management Software",
    description: "Run installation, repair, AMC, and recurring service operations with full control.",
    metaTitleSuffix: "Service Management Software",
    metaDescriptionTemplate:
      "Service management software for {city} businesses. Manage AMC contracts, technician visits, service reports, and customer satisfaction.",
    heroLead:
      "Service operations platform for businesses that manage recurring maintenance, on-demand repairs, and customer-facing field work.",
    focusAreas: ["AMC management", "Service scheduling", "Customer satisfaction", "Recurring visits"],
    featureHighlights: [
      { title: "Service scheduling", description: "Plan preventive and breakdown visits across large customer portfolios." },
      { title: "AMC tracking", description: "Track contract renewals, visit frequency, and pending service obligations." },
      { title: "Service reports", description: "Standardize reports with checklists, photos, parts used, and customer feedback." },
      { title: "Technician management", description: "Assign the right engineer based on product type, skills, and territory." },
      { title: "Customer communication", description: "Keep customers informed about visit windows, delays, and completion status." },
      { title: "Analytics", description: "Measure first-time fix rate, repeat complaints, and technician productivity." }
    ]
  }
];

export const featureMap = Object.fromEntries(features.map((f) => [f.slug, f])) as Record<string, FeatureProfile>;

export const cityFeatureSlugs = features.map((f) => f.slug);
