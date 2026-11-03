import type { FeatureProfile } from "./types";

export const features: FeatureProfile[] = [
  {
    slug: "workforce-management",
    name: "Workforce Management",
    shortName: "Workforce",
    headline: "Workforce Management Software",
    description: "Coordinate attendance, jobs, field teams, and daily operations from one platform.",
    metaTitleSuffix: "Workforce Management Software",
    metaDescriptionTemplate:
      "TeamShastra workforce management software helps {city} businesses track attendance, assign jobs, issue GST invoices, and manage field expenses.",
    heroLead:
      "Modern workforce management platform trusted by growing businesses coordinating distributed teams, site visits, and daily operations.",
    focusAreas: ["Attendance & leave", "Field team visibility", "Work order assignment", "Operational reporting"],
    featureHighlights: [
      { title: "GPS attendance", description: "Capture location at check-in and check-out only — never in the background. A company can require it." },
      { title: "Office geofencing", description: "Optionally allow punches only inside a saved office radius. More than one office pin is supported." },
      { title: "Check-in selfie", description: "Optionally require a live camera selfie at check-in. Gallery upload is not accepted when this is on." },
      { title: "Leave management", description: "Mark leave, half day, absent, or holiday, and see who is on duty." },
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
      { title: "Job status visibility", description: "See what jobs are in progress, completed, or need reassignment on today's board." },
      { title: "Manual dispatch", description: "Assign jobs to technicians based on availability and workload." },
      { title: "Digital service reports", description: "Replace paper job sheets with a service report or progress report PDF and before/after photos." },
      { title: "AMC due visits", description: "Schedule recurring service visits and create a job from a due AMC visit." },
      { title: "GST invoices", description: "Create quotations, proforma invoices, and GST tax invoices, record payments, and share PDFs on WhatsApp." },
      { title: "Field expenses", description: "Log technician spend, cash float, and purchase bills next to the job." },
    ]
  },
  {
    slug: "attendance-management",
    name: "Attendance Management",
    shortName: "Attendance",
    headline: "Attendance Management Software",
    description: "Track employee attendance with GPS punch-in/out, optional office geofencing, and leave workflows.",
    metaTitleSuffix: "Attendance Management Software",
    metaDescriptionTemplate:
      "Attendance management software for {city} businesses. GPS check-in, optional office geofencing, and leave tracking for field teams.",
    heroLead:
      "Accurate attendance tracking for distributed teams that work across offices, customer sites, and job locations.",
    focusAreas: ["GPS check-in", "Office geofencing", "Leave workflows", "Attendance reports"],
    featureHighlights: [
      { title: "GPS attendance", description: "Capture location at check-in and check-out only — not continuous background tracking. A company can require GPS." },
      { title: "Office geofencing", description: "Optionally allow punches only inside a saved office radius, including more than one office." },
      { title: "Check-in selfie", description: "Optionally require a live camera selfie at check-in. A gallery photo is not accepted when this is on." },
      { title: "Offline check-in", description: "Attendance keeps working without signal and syncs when connectivity returns." },
      { title: "Leave management", description: "Mark leave, a half day, absent, or a holiday. Owners and managers approve leave requests." },
      { title: "Role-based permissions", description: "Managers see team attendance. Owners run staff salary; each person can open their own paid payslips." },
      { title: "Attendance reports", description: "Review who checked in, leave, and hours logged, and use the same days when you pay salary." }
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
    focusAreas: ["Job assignment", "Status tracking", "Photo evidence", "Completion reports"],
    featureHighlights: [
      { title: "Digital work orders", description: "Replace WhatsApp messages and paper chits with structured, trackable job tickets." },
      { title: "Manager assignment", description: "Managers assign jobs to technicians and reassign as priorities change." },
      { title: "Photo reports", description: "Attach before/after photos and notes so managers can verify work quality remotely." },
      { title: "Service and progress PDFs", description: "Share a service report after the job, or a progress report while it is still open." },
      { title: "Status lifecycle", description: "Track jobs from assigned to in progress to completed, with reopen and cancel paths." },
      { title: "Work order history", description: "Maintain a searchable record of past jobs, parts used, and technician notes." }
    ]
  },
  {
    slug: "employee-tracking",
    name: "Employee Tracking",
    shortName: "Employee Tracking",
    headline: "Employee Tracking Software",
    description: "Visibility into field job status, attendance check-ins, and daily activity — without all-day GPS tracking.",
    metaTitleSuffix: "Employee Tracking Software",
    metaDescriptionTemplate:
      "Employee tracking software for {city} field teams. See job status, punch-time attendance check-ins, and daily activity — no continuous background tracking.",
    heroLead:
      "Job and attendance visibility for field service teams that spend most of the day away from the office, without continuous background GPS tracking.",
    focusAreas: ["Job status", "Punch-time check-ins", "Activity logs", "Privacy-aware design"],
    featureHighlights: [
      { title: "Job status board", description: "See which jobs are assigned, in progress, or completed today." },
      { title: "Punch-time attendance", description: "Confirm check-in and check-out with optional location, not continuous tracking." },
      { title: "No all-day GPS", description: "There is no background location tracking. The team map uses pins from check-in, starting a job, or a job photo." },
      { title: "Activity logs", description: "Track job starts and completions for operational accountability." },
      { title: "Multi-branch support", description: "Manage teams across branches from one dashboard." },
      { title: "Role-based access", description: "Managers see their team's activity; technicians see their own." }
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
      { title: "Service scheduling", description: "Plan preventive visits and breakdown jobs across your customer base." },
      { title: "AMC tracking", description: "Track contract renewals, due visits, and pending service obligations." },
      { title: "Service reports", description: "Standardize completion reports with photos and technician notes." },
      { title: "Technician assignment", description: "Assign jobs to technicians and reassign as priorities change." },
      { title: "Customer portal option", description: "Optionally let customers see the status of jobs you choose to share." },
      { title: "Reports", description: "Job summary, technician performance, and revenue reports for owners and managers." }
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
      { title: "CA-ready GST exports", description: "Download GSTR-1, GSTR-3B, GSTR-9, and a full GST workbook. Invoice lines can include HSN. Not GST portal filing." },
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
    description: "Pay staff salary for a calendar month from Monthly, Per day, or Hourly wages, with advances and payslips.",
    metaTitleSuffix: "Payroll Management Software",
    metaDescriptionTemplate:
      "Payroll software for {city} field teams. Set Monthly, Per day, or Hourly wages, see who is still to pay in a calendar month, cut salary advances, and share payslips.",
    heroLead:
      "Staff salary in the same workspace as attendance, so a calendar month's pay follows the days your field team actually worked.",
    focusAreas: ["Monthly, Per day, or Hourly wages", "Calendar-month salary", "Advances with amount left", "Payslips"],
    featureHighlights: [
      { title: "Salary list", description: "Open a calendar month, search the team, and filter who is paid or still to pay. The month shows a total and what is still to pay." },
      { title: "Set wages", description: "Set Monthly, Per day, or Hourly pay for each person, with the date it starts. Monthly pay can be split by working days, calendar days, or a fixed 26 or 30." },
      { title: "Weekly off and holidays", description: "Weekly off is unpaid on a per-day wage and already included in a monthly salary. Company holidays can be paid or unpaid, including a half holiday. Paid leave can be a yearly quota." },
      { title: "Salary advances", description: "Record an advance and see the amount left — not cut yet, or partly cut. The cut happens when you pay, not when you record it." },
      { title: "Freeze, then pay", description: "Check each person's days, freeze the month so later punches do not change it, then pay from bank or cash. Add a bonus or another deduction if you need to." },
      { title: "Payslips", description: "Share a payslip PDF after pay, or an Excel file for your CA. Each person can open their own paid payslips. Optional overtime and indicative PF, ESI, PT, or TDS are display-only — not Form 16 and not a filing." }
    ]
  },
  {
    slug: "customer-portal",
    name: "Customer Portal",
    shortName: "Customer Portal",
    headline: "Customer Portal Software",
    description: "Invite a customer to track the jobs you share, view photos, and message your team.",
    metaTitleSuffix: "Customer Portal Software",
    metaDescriptionTemplate:
      "Customer portal software for {city} field service companies. Share or hide each job, and let customers view photos and message your team.",
    heroLead:
      "An optional customer login so clients can follow the jobs you choose to share, without a call to the office.",
    focusAreas: ["Share or hide each job", "Job photos", "Messages", "Optional module"],
    featureHighlights: [
      { title: "Off until you turn it on", description: "Customer portal is an opt-in module. It is not enabled for a company until it is turned on." },
      { title: "Share or hide a job", description: "A job stays hidden until you share it. You can hide it again later." },
      { title: "Photos and messages", description: "Customers track shared jobs, view photos, and message your team." },
      { title: "Their own login", description: "Invite a customer with an email and a temporary password. They set their own password next." },
      { title: "No extra app", description: "Customers use the portal in the browser. They do not get the staff app." },
      { title: "WhatsApp the link", description: "Send the portal login link on WhatsApp after the customer is invited." }
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

/**
 * Features with genuine city-level search intent ("gst invoicing software mumbai").
 * Only these are combined with cities to generate /[feature]-[city] pages — the
 * remaining features (payroll, customer portal, multi-language, etc.) are real but
 * people don't search for them by city, so they stay on /features instead.
 */
export const localSeoFeatureSlugs = [
  "field-service-management",
  "gst-invoicing",
  "attendance-management",
  "work-order-management",
  "expense-management",
  "amc-service-contracts"
];
