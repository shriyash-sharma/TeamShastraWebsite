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
      "TeamShastra workforce management software helps {city} businesses track attendance, assign jobs, issue GST invoices, and manage field expenses.",
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
    description: "Dispatch technicians, manage service visits, GST invoices, and field expenses from one workspace.",
    metaTitleSuffix: "Field Service Management Software",
    metaDescriptionTemplate:
      "Field service management software for {city} service companies. Dispatch technicians, track jobs, issue GST invoices, and log field expenses.",
    heroLead:
      "End-to-end field service platform for businesses that send technicians, engineers, and service staff to customer locations every day.",
    focusAreas: ["Technician dispatch", "GST invoicing", "Digital service reports", "Field expenses"],
    featureHighlights: [
      { title: "Technician tracking", description: "See where field staff are, what jobs are in progress, and which visits need reassignment." },
      { title: "Smart dispatch", description: "Balance workloads and route the right technician based on skills, proximity, and availability." },
      { title: "Digital service reports", description: "Replace paper job sheets with structured reports, photos, and customer sign-off." },
      { title: "Preventive maintenance", description: "Schedule recurring service visits for AMC contracts, utilities, and facility clients." },
      { title: "GST invoices", description: "Create quotations and GST tax invoices, record payments, and share PDFs on WhatsApp." },
      { title: "Field expenses", description: "Log technician spend, cash float, and purchase bills next to the job." },
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
    description: "Visibility into field job status and visit check-ins, job progress, and daily activity.",
    metaTitleSuffix: "Employee Tracking Software",
    metaDescriptionTemplate:
      "Employee tracking software for {city} field teams. Monitor site visits, job progress, attendance, and daily activity in real time.",
    heroLead:
      "Field visit verification for sales, service, delivery, and inspection teams that spend most of the day away from the office.",
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
  },
  {
    slug: "gst-invoicing",
    name: "GST Invoicing",
    shortName: "GST Invoices",
    headline: "GST Invoicing Software",
    description: "Create GST tax invoices, quotations, and payments for Indian field service companies.",
    metaTitleSuffix: "GST Invoicing Software",
    metaDescriptionTemplate:
      "GST invoicing software for {city} field service teams. Quotations, tax invoices, WhatsApp PDFs, payments, purchase bills, and CA-ready GST exports.",
    heroLead:
      "Billing built for Indian field service companies that need GST invoices, collections, and purchase bills in the same app as jobs and attendance.",
    focusAreas: ["GST tax invoices", "Quotations", "Payments & collections", "CA-ready GST exports"],
    featureHighlights: [
      { title: "GST tax invoices", description: "Issue GST invoices from your catalog with CGST/SGST or IGST as applicable." },
      { title: "Quotations", description: "Send quotes, then convert them into invoices when the customer confirms." },
      { title: "Payments & pending collections", description: "Record payments and see what customers still owe." },
      { title: "WhatsApp PDFs", description: "Share invoice and quotation PDFs on WhatsApp instead of printing." },
      { title: "CA-ready GST exports", description: "Export GST workbooks for your accountant. Not GST portal filing." },
      { title: "Purchases", description: "Record supplier bills and pending payables next to sales." }
    ]
  },
  {
    slug: "expense-management",
    name: "Expense Management",
    shortName: "Expenses",
    headline: "Field Expense Management Software",
    description: "Track field expenses, staff cash float, and bank balances alongside jobs.",
    metaTitleSuffix: "Field Expense Management Software",
    metaDescriptionTemplate:
      "Field expense software for {city} service teams. Log expenses by person, track cash float given to technicians, and see bank balances with sales and purchases.",
    heroLead:
      "Money tracking for field businesses that give cash to technicians, pay suppliers, and need expense records next to job history.",
    focusAreas: ["Field expenses", "Cash float", "Bank balances", "Purchase payables"],
    featureHighlights: [
      { title: "Field expenses", description: "Log spend by person and category instead of WhatsApp photo dumps." },
      { title: "Cash float", description: "Track cash given to staff and what remains after field expenses." },
      { title: "Bank balances", description: "See collections and payments against company bank accounts." },
      { title: "Purchase bills", description: "Record supplier purchases and what is still payable." },
      { title: "Job-linked operations", description: "Keep expenses in the same workspace as jobs, attendance, and invoices." },
      { title: "Owner reports", description: "Review spend and revenue without a separate spreadsheet." }
    ]
  },
  {
    slug: "payroll-management",
    name: "Payroll Management",
    shortName: "Payroll",
    headline: "Payroll Management Software",
    description: "Run monthly payroll with per-employee pay profiles, salary advances, and locked pay runs.",
    metaTitleSuffix: "Payroll Management Software",
    metaDescriptionTemplate:
      "Payroll management software for {city} field service teams. Per-employee pay profiles, paid holidays, salary advances, and monthly payroll runs from draft to paid.",
    heroLead:
      "Payroll built into the same workspace as attendance and jobs, so pay reflects the days your field team actually worked.",
    focusAreas: ["Per-employee pay profiles", "Salary advances", "Paid holidays", "Draft-to-paid payroll runs"],
    featureHighlights: [
      { title: "Pay profiles", description: "Set monthly, daily, or hourly pay per employee, and change it over time as roles evolve." },
      { title: "Salary advances", description: "Record advances paid by cash, UPI, or bank, and deduct them automatically from the next payout." },
      { title: "Paid holidays", description: "Configure paid holidays so payroll reflects real working days, not just a flat monthly rate." },
      { title: "Monthly payroll runs", description: "Generate payroll from attendance data, review as a draft, then lock and mark it paid." },
      { title: "Owner-only visibility", description: "Payroll stays restricted to owners; managers and technicians never see pay data." },
      { title: "Linked to attendance", description: "Payroll pulls from the same attendance and leave records already tracked for the team." }
    ]
  },
  {
    slug: "customer-portal",
    name: "Customer Portal",
    shortName: "Customer Portal",
    headline: "Customer Portal Software",
    description: "Give customers a self-serve view of the jobs, invoices, and visits you choose to share.",
    metaTitleSuffix: "Customer Portal Software",
    metaDescriptionTemplate:
      "Customer portal software for {city} field service companies. Share selected job status, invoices, and visit history with customers without giving them full account access.",
    heroLead:
      "An optional customer-facing view so clients can check job status and history without a phone call to your office.",
    focusAreas: ["Shared job visibility", "Invoice access", "Visit history", "Controlled access"],
    featureHighlights: [
      { title: "Selective sharing", description: "Choose which jobs and updates a customer can see — nothing is shared by default." },
      { title: "Job status", description: "Customers see where their job stands without calling or messaging your team." },
      { title: "Invoice visibility", description: "Share GST invoices and payment status directly with the customer." },
      { title: "Visit history", description: "Customers can review past visits and completion reports for their own records." },
      { title: "No extra app", description: "Customers access their portal view without installing a separate app." },
      { title: "Reduced call volume", description: "Fewer status-check calls to your office and technicians." }
    ]
  },
  {
    slug: "amc-service-contracts",
    name: "AMC & Service Contracts",
    shortName: "AMC & Contracts",
    headline: "AMC & Service Contract Management Software",
    description: "Track annual maintenance contracts, renewal dates, and customers due for a visit.",
    metaTitleSuffix: "AMC & Service Contract Management Software",
    metaDescriptionTemplate:
      "AMC and service contract software for {city} maintenance and installation businesses. Track contract renewals, due visits, and recurring service obligations in one place.",
    heroLead:
      "Stop tracking AMC renewals in a spreadsheet — see exactly which customers are due for a visit before they call to ask.",
    focusAreas: ["Contract tracking", "Due-visit alerts", "Renewal visibility", "Service history"],
    featureHighlights: [
      { title: "AMC records", description: "Keep annual maintenance contract details against each customer, not in a separate file." },
      { title: "Due-visit lists", description: "See which customers are due or overdue for a scheduled visit." },
      { title: "Renewal visibility", description: "Track contract end dates so renewals don't get missed." },
      { title: "Visit-linked history", description: "Every AMC visit connects back to the job history for that customer." },
      { title: "Technician assignment", description: "Assign AMC visits to technicians the same way as any other job." },
      { title: "Customer portal option", description: "Optionally let customers see their own contract and visit status." }
    ]
  },
  {
    slug: "purchase-supplier-management",
    name: "Purchase & Supplier Management",
    shortName: "Purchases",
    headline: "Purchase & Supplier Management Software",
    description: "Record purchase bills, track supplier balances, and see cash flow next to sales.",
    metaTitleSuffix: "Purchase & Supplier Management Software",
    metaDescriptionTemplate:
      "Purchase and supplier management software for {city} field service businesses. Record purchase bills, track what you owe suppliers, and manage cash float and bank balances.",
    heroLead:
      "Keep purchases, supplier balances, and cash on hand in the same workspace as sales — not a separate ledger.",
    focusAreas: ["Purchase bills", "Supplier balances", "Cash float", "Bank balances"],
    featureHighlights: [
      { title: "Purchase bills", description: "Record supplier bills as they come in, item by item." },
      { title: "Supplier balances", description: "See what you still owe each supplier at a glance." },
      { title: "Cash float", description: "Track cash handed to staff for field purchases and expenses." },
      { title: "Bank balances", description: "View bank balances next to collections and payments, not in a separate app." },
      { title: "Sales-linked view", description: "Compare what's coming in from sales against what's going out to suppliers." },
      { title: "Owner reports", description: "Payables and cash position without exporting to a spreadsheet." }
    ]
  },
  {
    slug: "multi-language-support",
    name: "Multi-language Support",
    shortName: "Multi-language",
    headline: "Multi-language Field Service Software",
    description: "Run field operations in English, Hindi, Gujarati, Marathi, or Bengali.",
    metaTitleSuffix: "Multi-language Field Service Software",
    metaDescriptionTemplate:
      "Field service software for {city} teams in their own language — English, Hindi, Gujarati, Marathi, or Bengali — so technicians work faster with less training.",
    heroLead:
      "Technicians work faster in the language they're comfortable in — TeamShastra supports five Indian languages out of the box.",
    focusAreas: ["Regional-language app", "Technician onboarding", "Reduced training time", "Wider hiring pool"],
    featureHighlights: [
      { title: "Five languages", description: "English, Hindi, Gujarati, Marathi, and Bengali, switchable per user." },
      { title: "Per-user setting", description: "Each team member picks their own language; it doesn't change what managers see." },
      { title: "Faster onboarding", description: "New technicians start using the app without an English-fluency requirement." },
      { title: "Same feature set", description: "Every language covers the same jobs, attendance, invoicing, and expense features." },
      { title: "Wider hiring pool", description: "Hire and retain field staff who are more comfortable in a regional language." },
      { title: "Consistent data", description: "Language is a display setting only — records stay consistent across the team." }
    ]
  },
  {
    slug: "customer-support-helpdesk",
    name: "Customer Support & Help Desk",
    shortName: "Customer Support",
    headline: "Customer Support & Help Desk Software",
    description: "In-app support chat for your team, plus a website chat for visitors and prospects.",
    metaTitleSuffix: "Customer Support & Help Desk Software",
    metaDescriptionTemplate:
      "Customer support software for {city} field service businesses. In-app chat for your team and a website visitor chat, with staff notifications and callback requests.",
    heroLead:
      "A support thread inside the app your team already uses, plus a visitor chat on your own website for prospects.",
    focusAreas: ["In-app support chat", "Website visitor chat", "Staff notifications", "Callback requests"],
    featureHighlights: [
      { title: "In-app chat", description: "Company staff message TeamShastra support directly from the app, no separate ticketing tool." },
      { title: "Website visitor chat", description: "Prospects start a chat on this site with just an email and mobile number." },
      { title: "Staff notifications", description: "Support replies and callback requests notify platform staff in-app and by push." },
      { title: "Callback requests", description: "A customer can ask for a callback, which is tracked until a staff member marks it handled." },
      { title: "Grounded auto-replies", description: "Common questions can get an instant answer sourced only from TeamShastra's own documentation." },
      { title: "No lost threads", description: "Every conversation stays in one thread per company or visitor, not scattered across channels." }
    ]
  }
];

export const featureMap = Object.fromEntries(features.map((f) => [f.slug, f])) as Record<string, FeatureProfile>;

export const cityFeatureSlugs = features.map((f) => f.slug);
