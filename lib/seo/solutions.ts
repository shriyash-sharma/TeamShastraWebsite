import type { SolutionPage } from "./types";

export const solutions: SolutionPage[] = [
  {
    slug: "field-service-management-software-india",
    title: "Field Service Management Software India",
    metaDescription: "TeamShastra field service management software for Indian businesses. Dispatch technicians, track visits, capture digital reports, and manage jobs nationwide.",
    eyebrow: "Field Service Management",
    headline: "Field Service Management Software for Businesses Across India",
    lead: "End-to-end field service platform for Indian companies that dispatch technicians, electricians, and installation staff to customer locations every day — from metro cities to tier-2 industrial towns.",
    challenges: [
      "Technicians spread across a city with no shared view for the person assigning jobs",
      "Paper job sheets and WhatsApp coordination create lost or duplicated work orders",
      "AMC and preventive maintenance visits tracked in spreadsheets get missed",
      "Customer disputes without before/after photo evidence of completed work",
      "Multi-branch operations across cities running on fragmented, disconnected processes",
      "GST invoices created separately from the job, so billing lags behind completed work"
    ],
    industries: [
      { name: "CCTV & security installers", description: "Installation and AMC companies dispatching technicians for camera and security system jobs." },
      { name: "Electrical contractors", description: "Licensed electricians coordinating installation, repair, and maintenance visits." },
      { name: "Facilities maintenance", description: "Maintenance crews serving multiple commercial or residential client sites." },
      { name: "Equipment service", description: "Service providers handling repair and AMC visits for installed equipment." },
      { name: "Home services & installation teams", description: "Multi-technician teams coordinating site visits, quotations, and completion reports." }
    ],
    useCases: [
      { title: "Multi-branch electrical contractor", industry: "Electrical", problem: "Technicians across two or three branches with no unified system for job status.", solution: "Branch-wise work orders with shared visibility for managers across every location.", benefits: ["Multi-branch visibility", "Digital work orders", "Before/after photo proof"] },
      { title: "CCTV installer with growing team", industry: "CCTV", problem: "Jobs assigned by phone call; installation and AMC visits without a shared record.", solution: "Assign work orders to technicians, track status to completion, and attach photos and GST invoices to the same job.", benefits: ["Job-linked photos", "Status tracking", "GST invoices tied to the job"] },
      { title: "Equipment service network", industry: "Equipment service", problem: "Service centers with inconsistent reporting back to the office.", solution: "A service report or progress report PDF, with photos from the job, for every visit.", benefits: ["Service report PDFs", "Service history per customer", "Technician-wise job load"] }
    ],
    caseStudy: {
      companyName: "AllIndia Service Networks (illustrative example)",
      location: "India — Multi-branch operations",
      problem: ["Job assignment by phone call across branches", "Lost paper job sheets", "No shared record of completed work"],
      results: ["Job assignment and status now visible to all managers", "Job sheets replaced with digital work orders and photos", "GST invoices created from the same workspace as the job"]
    },
    faqs: [
      { question: "Is TeamShastra suitable for multi-branch field service operations in India?", answer: "Yes. Multi-company workspace support lets businesses manage technicians across branches from one account." },
      { question: "Can service businesses manage AMC contracts?", answer: "Yes. AMC contracts and customers due for a visit are tracked against each customer." },
      { question: "Does TeamShastra support digital service reports?", answer: "Yes. Share a service report PDF when the job is done, or a progress report while it is open, with before/after photos from the job." },
      { question: "Can field technicians work offline?", answer: "Yes. Attendance check-in and work order updates work offline and sync when the connection returns." },
      { question: "How long does implementation take?", answer: "Most businesses start with one team or branch and expand from there; there is no fixed rollout timeline." }
    ],
    relatedCitySlugs: ["mumbai", "delhi", "bengaluru", "pune", "hyderabad", "chennai"],
    relatedSolutionSlugs: ["gst-invoicing-software-india", "field-expense-software-india", "technician-management-software", "digital-work-orders", "service-report-software", "hvac-service-management"]
  },
  {
    slug: "gst-invoicing-software-india",
    title: "GST Invoicing Software India",
    metaDescription: "GST invoicing software for Indian field service companies. Create tax invoices and quotations, record payments, share PDFs on WhatsApp, and export CA-ready GST workbooks.",
    eyebrow: "GST Invoicing",
    headline: "GST Invoicing Software for Indian Field Service Companies",
    lead: "Issue GST tax invoices, send quotations, collect payments, and keep purchase bills in the same app as jobs and attendance — built for CCTV installers, electricians, and maintenance teams across India.",
    challenges: [
      "Quotations live in WhatsApp while invoices live in another billing app",
      "GST invoices do not match the job and photos the technician just finished",
      "Pending collections are tracked in notebooks, not against invoices",
      "Purchase bills and supplier payables are separate from sales",
      "CAs wait for spreadsheets that do not match GST invoices",
      "Field owners need Hindi (and other Indian languages) on the same billing screens"
    ],
    industries: [
      { name: "CCTV & security installers", description: "Installation and AMC companies that quote on site and invoice after commissioning." },
      { name: "Electrical contractors", description: "Licensed electricians who need GST invoices against job completion." },
      { name: "Maintenance & AMC providers", description: "Recurring service businesses that invoice visits and contracts." },
      { name: "Home service companies", description: "Multi-technician teams that collect part payment in the field." },
      { name: "Equipment service", description: "Repair networks that bill parts and labour with GST." }
    ],
    useCases: [
      { title: "CCTV installer quoting on site", industry: "CCTV", problem: "Quotes sent as WhatsApp photos; invoices typed later in a separate tool.", solution: "Create a quotation from the catalog, share the PDF, then convert to a GST invoice when the job is done.", benefits: ["One catalog", "WhatsApp PDFs", "GST invoices tied to the job"] },
      { title: "Electrical contractor collections", industry: "Electrical", problem: "No view of pending collections by customer.", solution: "Record payments against invoices and see what is still due.", benefits: ["Pending collections", "Payment history", "Customer-wise dues"] }
    ],
    caseStudy: {
      companyName: "Shastra Field Billing (illustrative example)",
      location: "India",
      problem: ["Separate job app and billing app", "Late GST invoices", "Unclear pending dues"],
      results: ["Invoices issued from the same workspace as jobs", "Faster collections", "CA-ready GST exports"]
    },
    faqs: [
      { question: "Does TeamShastra file GST returns on the government portal?", answer: "No. It creates GST invoices and CA-ready exports (GSTR-1, GSTR-3B, GSTR-9, and a full GST workbook). Invoice lines can include HSN. Your CA files returns on the GST portal." },
      { question: "Can I share invoices on WhatsApp?", answer: "Yes. Share quotation and invoice PDFs on WhatsApp." },
      { question: "Are purchases included?", answer: "Yes. Record purchase bills and supplier balances next to sales." },
      { question: "Does billing work in Hindi?", answer: "Yes. English, Hindi, Gujarati, Marathi, and Bengali are supported." }
    ],
    relatedCitySlugs: ["mumbai", "delhi", "bengaluru", "pune", "ahmedabad", "hyderabad"],
    relatedSolutionSlugs: ["field-service-management-software-india", "field-expense-software-india", "technician-management-software"]
  },
  {
    slug: "field-expense-software-india",
    title: "Field Expense Software India",
    metaDescription: "Field expense software for Indian service teams. Log technician expenses, track cash float, bank balances, and purchase bills next to jobs and GST invoices.",
    eyebrow: "Field Expenses",
    headline: "Field Expense, Float, and Bank Software for Indian Teams",
    lead: "Stop tracking technician cash and site spend in chat threads. Log expenses by person, track float given to staff, and see bank balances alongside GST invoices and purchase bills.",
    challenges: [
      "Technicians send expense photos on WhatsApp with no category or owner",
      "Cash given to staff (float) is not reconciled against spend",
      "Bank balances do not match collections and supplier payments",
      "Purchase bills are missing when the CA asks for books",
      "Owners cannot see spend next to job and invoice reports",
      "Multi-branch teams have no shared expense record"
    ],
    industries: [
      { name: "Field installation", description: "Teams that buy parts on site and need expense proof." },
      { name: "AMC maintenance", description: "Technicians who spend travel and consumables against jobs." },
      { name: "Multi-branch service", description: "Owners who issue cash float to managers in more than one location." }
    ],
    useCases: [
      { title: "Technician cash float", industry: "Installation", problem: "Owner gives cash every Monday; leftovers and receipts are unclear.", solution: "Record float given, log expenses by person, and see remaining balance.", benefits: ["Float tracking", "Category spend", "Less leakage"] },
      { title: "Purchase bills with sales", industry: "Electrical", problem: "Supplier bills sit in a folder while invoices are digital.", solution: "Enter purchase bills and payables in the same workspace as GST sales.", benefits: ["Supplier dues", "Matched books", "CA-ready records"] }
    ],
    caseStudy: {
      companyName: "FieldCash Ops (illustrative example)",
      location: "India",
      problem: ["WhatsApp expense photos", "Untracked float"],
      results: ["Expense log by technician", "Clearer cash and bank view"]
    },
    faqs: [
      { question: "Can I track cash given to technicians?", answer: "Yes. Record cash float by person and see it reduce as expenses are logged." },
      { question: "Are bank balances included?", answer: "Yes. Collections and payments can be reflected against bank accounts." },
      { question: "Do expenses sit next to GST invoices?", answer: "Yes. Jobs, invoices, purchases, and expenses share one company workspace." }
    ],
    relatedCitySlugs: ["delhi", "mumbai", "bengaluru", "pune", "jaipur", "surat"],
    relatedSolutionSlugs: ["gst-invoicing-software-india", "field-service-management-software-india", "attendance-management-software-india"]
  },
  {
    slug: "attendance-management-software-india",
    title: "Attendance Management Software India",
    metaDescription: "Attendance management software for Indian field service businesses. GPS check-in, leave tracking, and shift visibility for technicians and site teams.",
    eyebrow: "Attendance Management",
    headline: "Attendance Management Software for Indian Field Teams",
    lead: "Accurate attendance tracking for Indian field service businesses — technicians, installers, and maintenance staff working from customer sites rather than one office.",
    challenges: [
      "Field employees check in from customer sites with no verification",
      "Manual muster rolls at branches and job sites",
      "Leave and availability not visible to the person assigning jobs",
      "Payroll disputes due to inaccurate attendance records",
      "No shared attendance record across more than one branch",
      "Owners want location-verified check-in without all-day background tracking"
    ],
    industries: [
      { name: "CCTV & security installers", description: "Technician teams checking in at installation and AMC sites." },
      { name: "Electrical contractors", description: "Field electricians working across multiple job sites in a day." },
      { name: "Facilities maintenance", description: "Maintenance crews rotating across client sites." },
      { name: "Equipment service & home services", description: "Field staff whose workday happens away from a fixed office." }
    ],
    useCases: [
      { title: "Multi-branch technician attendance", industry: "Field service", problem: "Two branches, no shared attendance record for payroll.", solution: "GPS check-in per technician, visible to managers across every branch.", benefits: ["Shared attendance record", "Payroll-ready exports", "Fewer manual corrections"] },
      { title: "AMC team daily check-in", industry: "Maintenance", problem: "Technicians visiting several customer sites a day with no attendance trail.", solution: "Check-in and check-out, with leave handled in the same app and salary drawn from those days.", benefits: ["Punch-time attendance", "Leave visibility", "Salary from the same attendance"] }
    ],
    caseStudy: {
      companyName: "Field Team Records (illustrative example)",
      location: "India",
      problem: ["Manual muster rolls across branches", "Leave requests handled by phone call", "Payroll built from memory, not records"],
      results: ["GPS-verified attendance replacing paper registers", "Leave requests tracked in one place", "Payroll runs built from real attendance data"]
    },
    faqs: [
      { question: "Can attendance be tracked using GPS?", answer: "Yes. Location is captured at check-in and check-out only, never in the background. A company can require GPS, an office radius, or a check-in selfie." },
      { question: "Does TeamShastra support leave management?", answer: "Yes. Owners or managers can mark leave, a half day, absent, or a holiday, and see who is on duty." },
      { question: "Can attendance work offline?", answer: "Yes. Check-in and check-out work offline and sync once the connection returns." },
      { question: "Does attendance feed into payroll?", answer: "Yes. Staff salary for a calendar month uses the same days: present, half day, leave, holiday, weekly off, and missed punches. Freeze the month, then pay." }
    ],
    relatedCitySlugs: ["delhi", "mumbai", "bengaluru", "pune", "chennai", "hyderabad"],
    relatedSolutionSlugs: ["field-employee-tracking", "technician-management-software", "field-service-management-software-india"]
  },
  {
    slug: "technician-management-software",
    title: "Technician Management Software",
    metaDescription: "Technician management software for Indian service companies. Assign, track, and manage field technicians with GPS attendance, work orders, and digital service reports.",
    eyebrow: "Technician Management",
    headline: "Technician Management Software for Service Companies",
    lead: "Manage field technicians from assignment to completion — job assignment, work orders, GPS attendance, and photo-based proof of work in one platform.",
    challenges: ["No shared view of technician job status for the person assigning work", "Paperwork and photo evidence lost after visits", "Customer complaints about delayed or missed visits", "Technician workload not visible across a growing team", "Training and certification not linked to who gets assigned a job"],
    industries: [
      { name: "Electrical & CCTV installation", description: "Licensed technicians for installation and repair." },
      { name: "Appliance service", description: "Authorized and third-party appliance repair networks." },
      { name: "HVAC & plumbing", description: "Technician teams for installation and repair visits." },
      { name: "Solar installation & O&M", description: "Installation and operations-and-maintenance technician teams." }
    ],
    useCases: [{ title: "Appliance service network", industry: "Appliance service", problem: "100+ daily calls coordinated by phone.", solution: "Convert each call into a work order and assign it to an available technician, with skill and territory visible to the dispatcher.", benefits: ["Faster assignment", "Technician workload visibility", "First-visit resolution tracking"] }],
    caseStudy: { companyName: "TechServe India (illustrative example)", location: "India", problem: ["Phone-based dispatch", "No shared technician workload view", "Lost service records"], results: ["Assignment moved from phone calls to shared work orders", "Better visibility into technician workload", "Digital service history per customer"] },
    faqs: [
      { question: "Can I see which technicians have skills for a job before assigning it?", answer: "Yes. Skill tags help the person assigning jobs pick a suitable technician; assignment itself is a manual decision, not an automated dispatch." },
      { question: "Does TeamShastra show technician job status?", answer: "Yes. Job status visibility and punch-time GPS check-ins for supervisors — not continuous background tracking." },
      { question: "Can customers confirm completed work?", answer: "Yes. Technicians capture before/after photos as proof of completed work." }
    ],
    relatedCitySlugs: ["mumbai", "delhi", "pune", "bengaluru"],
    relatedSolutionSlugs: ["field-service-management-software-india", "digital-work-orders", "electrician-workforce-management"]
  },
  {
    slug: "field-employee-tracking",
    title: "Field Employee Tracking Software",
    metaDescription: "Field employee tracking software for Indian field service teams. Monitor site visits, job progress, attendance, and daily activity for technicians and installers.",
    eyebrow: "Field Employee Tracking",
    headline: "Field Employee Tracking for Service Teams",
    lead: "Visibility into field job status and visit check-ins, job progress, and daily activity for businesses whose technicians work away from the office.",
    challenges: ["No shared record that field staff visited an assigned site", "Job progress not visible until the technician calls in", "Privacy concerns with continuous background tracking", "Multi-branch field teams with no central view"],
    industries: [
      { name: "Field service & repair", description: "Technicians and installers visiting customer sites." },
      { name: "Maintenance & AMC", description: "Recurring visit teams tracking site-by-site progress." },
      { name: "Installation teams", description: "Crews completing multi-day or multi-site installation jobs." }
    ],
    useCases: [{ title: "Multi-site installation tracking", industry: "Installation", problem: "Several sites in progress with no shared status view.", solution: "Job-linked check-in at each site with status updates visible to the office.", benefits: ["Site-linked visit records", "Job progress visibility", "Fewer status-check calls"] }],
    caseStudy: { companyName: "RouteWise India (illustrative example)", location: "India", problem: ["No shared visit record", "Job progress only known by phone call"], results: ["Site check-ins replacing phone updates", "Clearer view of which jobs are in progress"] },
    faqs: [{ question: "Is field tracking privacy-compliant?", answer: "Yes. Location is captured only at attendance check-in/out (and optional office-radius checks). There is no continuous background GPS tracking; access is role-based within your company." }],
    relatedCitySlugs: ["delhi", "mumbai", "bengaluru", "pune"],
    relatedSolutionSlugs: ["attendance-management-software-india", "technician-management-software", "digital-work-orders"]
  },
  {
    slug: "digital-work-orders",
    title: "Digital Work Orders Software",
    metaDescription: "Digital work order software for Indian field service businesses. Create, assign, track, and close work orders with photos and real-time status updates.",
    eyebrow: "Work Order Management",
    headline: "Digital Work Orders for Field and Maintenance Teams",
    lead: "Replace paper chits and WhatsApp messages with structured digital work orders — from creation and assignment to before/after photo evidence and closure.",
    challenges: ["Work orders lost in phone messages and paper", "No status visibility for managers and customers", "Photo evidence not captured or attached to the job", "Work order history not searchable"],
    industries: [
      { name: "Maintenance & facilities", description: "Recurring maintenance work orders across client sites." },
      { name: "Installation", description: "Equipment and system installation jobs." },
      { name: "Repair & breakdown", description: "On-demand repair and emergency service." },
      { name: "AMC & preventive maintenance", description: "Scheduled visit work orders tied to a contract." }
    ],
    useCases: [{ title: "Maintenance crew daily tasks", industry: "Facilities maintenance", problem: "Daily site tasks untracked and unverifiable.", solution: "Site-wise task work orders with photo proof of completion.", benefits: ["Task accountability", "Photo reports", "Client-ready records"] }],
    caseStudy: { companyName: "WorkFlow Digital (illustrative example)", location: "India", problem: ["Lost paper work orders", "No status tracking"], results: ["Work orders replaced with a searchable digital record", "Faster visibility into which jobs are still open"] },
    faqs: [{ question: "Can work orders include photos?", answer: "Yes. Technicians attach before/after photos as proof of completed work." }],
    relatedCitySlugs: ["mumbai", "delhi", "pune", "chennai"],
    relatedSolutionSlugs: ["field-service-management-software-india", "maintenance-management-software", "technician-management-software"]
  },
  {
    slug: "service-report-software",
    title: "Service Report Software",
    metaDescription: "Digital service report software for Indian field teams. Share a service report or progress report PDF with job photos, replacing paper job sheets.",
    eyebrow: "Service Reports",
    headline: "Digital Service Report Software for Field Teams",
    lead: "Replace paper job sheets with a service report or progress report PDF, and keep the visit photos on the job.",
    challenges: ["Inconsistent paper reports across technicians", "Photos and evidence not attached to job records", "No PDF to send the customer after a visit", "The office cannot see progress until someone calls"],
    industries: [
      { name: "HVAC & plumbing", description: "Service reports for installation and repair visits." },
      { name: "Equipment service", description: "Repair and AMC visit reports." },
      { name: "Facilities maintenance", description: "Daily and periodic facility service reports." },
      { name: "CCTV & security installers", description: "Installation and commissioning reports." }
    ],
    useCases: [{ title: "HVAC service report standardization", industry: "HVAC", problem: "Inconsistent technician reports.", solution: "Every visit can share a service report or progress report PDF, with photos from the job.", benefits: ["Service report PDFs", "Photos on the job", "A record the office can send"] }],
    caseStudy: { companyName: "ReportPro Services (illustrative example)", location: "India", problem: ["Inconsistent paper reports"], results: ["Service report PDFs shared from the job", "Visit photos kept with the job record"] },
    faqs: [{ question: "Can service reports include photos?", answer: "Yes. A service report or progress report PDF can include photos and PDFs already attached to the job." }],
    relatedCitySlugs: ["bengaluru", "hyderabad", "mumbai", "delhi"],
    relatedSolutionSlugs: ["field-service-management-software-india", "digital-work-orders", "hvac-service-management"]
  },
  {
    slug: "facility-management-software",
    title: "Facility Management Software",
    metaDescription:
      "Facility management software for vendors who maintain offices, malls and societies: site-wise staff check-in, daily task jobs, photo proof and AMC visits.",
    eyebrow: "Facility Management",
    headline: "Facility Management Software for Multi-Site Maintenance Vendors",
    lead: "TeamShastra is facility management software for vendors who keep buildings running for their clients: offices, malls, hospitals and housing societies. It puts site staff, daily tasks, planned maintenance and client reports in one app.",
    overviewTitle: "What a facility vendor's week looks like",
    overview: [
      "A facility vendor looks after buildings that belong to someone else. One contract covers an office tower, another a hospital wing, a third a gated society. Each site has its own resident staff, such as an electrician, a plumber and a multi-skill technician, plus specialists who come in for pumps, DG sets or the STP.",
      "The client's facility manager wants three things: staff present every shift, small faults fixed the same day, and planned maintenance done on time. They ask for a monthly report and hold back payment when it is late or thin.",
      "Vendors usually run this on site registers and WhatsApp groups per client. Registers are filled after the fact. Complaints raised in a group are lost under newer messages. At month end a supervisor spends two days building reports from photos on five different phones."
    ],
    challenges: [
      "Resident staff spread across many client buildings with paper registers",
      "Complaints raised by the client's team lost in WhatsApp groups",
      "Pump, DG set and STP checks due on different schedules",
      "Clients holding payment until a monthly report arrives",
      "Specialist technicians shared between sites with no clear plan"
    ],
    industries: [
      { name: "Office and commercial buildings", description: "Resident technicians and planned checks for tenants who expect quick fixes." },
      { name: "Housing societies", description: "Common-area upkeep, pumps, lights and lifts handled for a managing committee." },
      { name: "Hospitals and campuses", description: "Sites where a missed check affects patients or students, so proof matters." }
    ],
    useCases: [
      {
        title: "Daily complaint log for a society",
        industry: "Housing society",
        problem: "Residents report a leaking tap or a dead corridor light to the society office, which forwards it to a WhatsApp group.",
        solution: "Each complaint becomes a job for that society with a category such as plumbing or electrical. The resident technician closes it with a photo.",
        benefits: ["Nothing lost in group chats", "Photo for every fix", "Category counts for the monthly review"]
      },
      {
        title: "Planned checks on building equipment",
        industry: "Commercial building",
        problem: "Pump, DG set and fire panel checks are due on different cycles and are remembered only when something fails.",
        solution: "One maintenance contract per equipment group lists its due visits, and the supervisor turns each into a job in one tap.",
        benefits: ["Due list per site", "Visit history at renewal", "Fewer emergency breakdowns"]
      }
    ],
    helps: [
      { feature: "gps-attendance-app", text: "Resident staff check in at the client building with an office pin and radius for that site, so shift presence is on record." },
      { feature: "amc-contract-management", text: "Equipment checks for each building get their own visit schedule and show up as due visits." },
      { feature: "customer-portal", text: "The client's facility manager can log in and follow shared complaint jobs without calling your supervisor." },
      { feature: "service-report-pdf", text: "Reports with photos are created from each completed job, ready to attach to the monthly review." },
      { feature: "staff-salary-payroll", text: "Monthly and per-day site staff are paid from the attendance they marked at the client's building." }
    ],
    benefits: [
      "Site attendance that clients can trust",
      "Every complaint tracked from report to fix",
      "Planned checks listed per building",
      "Monthly reports built from real job records"
    ],
    faqs: [
      {
        question: "Can staff check in only at the client building they are posted to?",
        answer:
          "You can add each client building as an office pin with a radius. With the office rule on, a check-in far from every pin is refused. Staff posted at a building then check in there with location and, if you want, a live selfie. Owners can correct an entry with a written reason."
      },
      {
        question: "How do I prepare a monthly report for a facility client?",
        answer:
          "Filter jobs by that client and month to see complaints and planned visits with their status. Create service report PDFs for key jobs and use the category breakdown to show the mix of work. Many vendors attach these to their invoice for the month."
      },
      {
        question: "Can the client's facility manager see our work directly?",
        answer:
          "Yes, through the customer portal. Invite them by email and share the jobs for their site. They see status and the photos and comments you mark visible, and can reply. Internal notes between your staff stay hidden from them."
      },
      {
        question: "Can one technician cover two client sites in a day?",
        answer:
          "Yes. Assign jobs at both sites to the same person. Their check-in records the first site, and job-start pins show when they reached the second. The Today board shows whether they are free or busy, which helps when a third site calls."
      },
      {
        question: "Does TeamShastra manage building assets like a CAFM system?",
        answer:
          "No. It does not keep an asset register with every pump and panel as a record. Most small and mid-size vendors manage well with contracts per equipment group, jobs, photos and reports, which is what TeamShastra provides."
      }
    ],
    relatedCitySlugs: ["mumbai", "bengaluru", "delhi", "pune"],
    relatedSolutionSlugs: ["attendance-management-software-india", "digital-work-orders", "maintenance-management-software"]
  },
  {
    slug: "maintenance-management-software",
    title: "Maintenance Management Software",
    metaDescription:
      "Maintenance management software for service teams that look after machines and equipment: due visit lists, breakdown jobs, parts used and visit history.",
    eyebrow: "Maintenance Management",
    headline: "Maintenance Management Software for Equipment Service Teams",
    lead: "TeamShastra is maintenance management software for teams that service machines and equipment for their customers. Gensets, pumps, compressors, kitchen equipment and water plants all need planned visits and quick breakdown repair. The app keeps both in one place.",
    overviewTitle: "Planned visits versus breakdown calls",
    overview: [
      "Every maintenance business faces the same tug of war. Planned visits keep machines healthy and customers loyal. Breakdown calls pay well and cannot wait. When the phone rings about a stopped compressor, the planned visit for another customer slips to next week, then the week after.",
      "Customers notice. A restaurant that pays for monthly kitchen equipment service sees the technician only when something breaks. At renewal, it asks why it should keep paying.",
      "Parts add to the strain. A technician replaces a belt, a seal or a sensor and forgets to tell the office. The part is never billed, stock does not match, and next time nobody knows what was changed on that machine."
    ],
    challenges: [
      "Planned visits pushed aside by urgent breakdowns",
      "No record of which parts were changed on which customer's machine",
      "Contract customers seeing the team only when things fail",
      "Parts stock drifting because field use is not billed",
      "Renewal talks without proof of the year's visits"
    ],
    industries: [
      { name: "Genset and pump service", description: "Periodic checks and run tests for backup power and water systems." },
      { name: "Commercial kitchen equipment", description: "Ovens, fryers and refrigeration that restaurants cannot afford to lose." },
      { name: "Water treatment plants", description: "Filters, dosing and motor checks for buildings and small factories." }
    ],
    useCases: [
      {
        title: "Keeping planned visits on time in a busy month",
        industry: "Genset service",
        problem: "Breakdown calls during a heat wave push monthly run tests back for weeks.",
        solution: "The due visits list shows which contracts are behind, so the manager slots them between breakdowns instead of forgetting them.",
        benefits: ["Overdue visits visible", "Better balance of work", "Contract promises kept"]
      }
    ],
    helps: [
      { feature: "amc-contract-management", text: "Each machine contract sets its visit gap, and overdue visits stand out in the due list during a busy month." },
      { feature: "job-work-order-management", text: "Breakdown calls get high priority, and parts changed are noted on the job with photos for the next visit." },
      { feature: "inventory-stock-management", text: "Belts, seals and filters used on site are billed from stock so counts stay true." },
      { feature: "technician-dispatch-today-board", text: "The Today board shows who is free to take an urgent call without dropping a planned visit." },
      { feature: "business-reports-dashboard", text: "Jobs & AMC reports show how many planned visits were done against breakdowns in the period." }
    ],
    benefits: [
      "Planned and breakdown work in one list",
      "Parts history for every customer's machine",
      "Proof of service ready for renewal",
      "Stock that matches what was used on site"
    ],
    faqs: [
      {
        question: "How do I stop planned visits slipping when breakdowns pile up?",
        answer:
          "Look at the due visits list at least twice a week. It shows contracts whose visits are pending or late. Create jobs for them and give them a normal priority, while breakdowns get high priority. Seeing both together helps the manager plan instead of reacting all day."
      },
      {
        question: "Can I see which parts were replaced on a customer's machine last year?",
        answer:
          "Yes, if parts are billed or noted on the job. Open the customer and go through past jobs to see comments, photos and invoice lines. Ask technicians to photograph the old part and the new one, which makes the history clear at a glance."
      },
      {
        question: "Does the app send planned visits to technicians automatically?",
        answer:
          "Due visits are created from each contract's schedule. A manager taps a due visit to turn it into a job, and it can go to the contract's default technician. Keeping that one tap lets you check workload before sending it."
      },
      {
        question: "Can parts be billed on a contract visit where labour is free?",
        answer:
          "Yes. Make an invoice for the parts only and leave labour out, or add labour at zero. Stock reduces and the customer sees exactly what was charged. If the contract covers parts as well, record a stock adjustment instead."
      },
      {
        question: "Is TeamShastra a CMMS?",
        answer:
          "Not in the factory sense. It does not keep a plant-wide asset tree with meter readings. It is built for service businesses that maintain equipment for many customers and need contracts, jobs, parts, reports and billing together."
      }
    ],
    relatedCitySlugs: ["pune", "chennai", "ahmedabad", "surat"],
    relatedSolutionSlugs: ["digital-work-orders", "facility-management-software", "hvac-service-management"]
  },
  {
    slug: "hvac-service-management",
    title: "HVAC Service Management Software",
    metaDescription:
      "HVAC service management software for AC companies: plan servicing before summer, send breakdown calls to free technicians, track gas and parts, bill with GST.",
    eyebrow: "HVAC Services",
    headline: "HVAC Service Management Software for AC Service Companies",
    lead: "TeamShastra is HVAC service management software for companies that install and service split ACs, cassette units, VRF systems and chillers. It handles the summer rush, AMC servicing, gas and parts, and billing.",
    overviewTitle: "The AC service year, season by season",
    overview: [
      "AC service work follows the weather. In March and April, homes and offices want their units serviced before the heat. In May and June, breakdown calls explode: no cooling, water leaking, compressor tripping. In the monsoon, drain and smell complaints rise. Winter is quiet, which is when installations and AMC renewals are pushed.",
      "A typical job is short but needs the right person: a jet-wash service, a gas top-up, a PCB change or a new installation with copper piping and a stand. Technicians carry gas cylinders, copper, insulation and capacitors.",
      "The hard months are when systems fail. Calls come in faster than they can be written down. Gas and parts are used without being billed. AMC customers who paid for priority wait behind walk-in calls and do not renew next year."
    ],
    challenges: [
      "Summer breakdown calls arriving faster than they can be assigned",
      "Pre-summer servicing for AMC customers left too late",
      "Gas, copper pipe and capacitors used without a record",
      "AMC customers waiting behind one-time callers",
      "Installation jobs that need two people and several hours"
    ],
    industries: [
      { name: "Home split AC service", description: "Servicing, gas top-up and repair for families in flats and bungalows." },
      { name: "Office and shop cooling", description: "Cassette and ductable units where a failure stops business for the day." },
      { name: "VRF and chiller maintenance", description: "Larger systems serviced on contract by trained teams." }
    ],
    useCases: [
      {
        title: "Getting AMC servicing done before May",
        industry: "Home AC AMC",
        problem: "Hundreds of AMC homes want servicing in the same few weeks.",
        solution: "Each contract's pre-summer visit shows in the due list from early March, so jobs are spread out before the rush.",
        benefits: ["Servicing finished before peak", "AMC promises kept", "Calmer May and June"]
      }
    ],
    helps: [
      { feature: "technician-dispatch-today-board", text: "In peak summer, the Today board shows which AC technician is free so the next no-cooling call goes out at once." },
      { feature: "amc-contract-management", text: "Pre-summer and monsoon servicing for AMC homes appear as due visits early, before the breakdown season starts." },
      { feature: "inventory-stock-management", text: "Gas, copper pipe, insulation and capacitors are stock items billed on the job, so nothing leaves unrecorded." },
      { feature: "gst-billing-invoice", text: "Bill service, gas and parts on one GST invoice from the phone and collect by UPI before leaving." },
      { feature: "job-work-order-management", text: "Installations are jobs with two people assigned, with photos of the outdoor unit stand and piping." }
    ],
    benefits: [
      "Breakdowns assigned quickly in peak season",
      "AMC servicing spread out before the rush",
      "Gas and parts billed instead of lost",
      "Installation proof with photos"
    ],
    faqs: [
      {
        question: "How do I handle the flood of AC breakdown calls in summer?",
        answer:
          "Log every call as a job the moment it comes in, with priority and a short fault note. Assign from the Today board to whoever is free. Technicians get the job as a phone alert. Put jobs waiting for a part on hold so the board stays honest."
      },
      {
        question: "Can AMC customers be serviced before the peak season?",
        answer:
          "Yes. Set AMC visit dates so the pre-summer service falls in March or early April. The due list shows them in time to plan the work across several weeks, rather than trying to service every AMC home in the first week of May."
      },
      {
        question: "How do I bill gas top-ups and parts correctly?",
        answer:
          "Keep gas, copper per metre, capacitors and other parts as catalog items with their HSN codes and tax. Add what was used to the invoice on site. Stock reduces automatically, and the customer sees each item clearly on the bill."
      },
      {
        question: "Can installation jobs have two technicians?",
        answer:
          "Yes. Assign both people to the job. Each can add photos of the indoor unit, outdoor unit stand, piping and drain. The service report then shows the full installation, which helps if the customer complains about water leaks later."
      },
      {
        question: "Does the app help with VRF and chiller contracts too?",
        answer:
          "Yes. Larger systems usually have formal contracts with monthly or quarterly checks. Create an AMC for each site with its own visit gap and default technician, and share service reports with the client's facility team after every visit."
      }
    ],
    relatedCitySlugs: ["hyderabad", "mumbai", "delhi", "chennai"],
    relatedSolutionSlugs: ["field-service-management-software-india", "maintenance-management-software", "service-report-software"]
  },
  {
    slug: "solar-installation-workforce-software",
    title: "Solar Installation Workforce Software",
    metaDescription:
      "Solar installation workforce software for rooftop installers: survey and quote, run multi-day installs with crew attendance, track panels and do O&M visits.",
    eyebrow: "Solar & Renewable",
    headline: "Solar Installation Workforce Software for Rooftop Installers",
    lead: "TeamShastra is solar installation workforce software for rooftop solar companies. It covers survey and quote, multi-day installs with crew attendance, panel and inverter stock, and cleaning and O&M visits after commissioning.",
    overviewTitle: "From rooftop survey to O&M",
    overview: [
      "A rooftop solar job starts with a roof survey: shading, direction, structure and the electricity bill. A quotation follows with panel capacity, inverter, mounting structure and wiring. Home customers compare two or three quotes, and approval can take weeks.",
      "Installation is crew work. A team of four or five spends two to five days on the roof fixing the structure, mounting panels, running DC cable and installing the inverter and earthing. Material arrives in lots. Helpers are often daily-wage workers, and the crew may move to another roof before this one is finished.",
      "After commissioning, customers expect panel cleaning and checks every few months. Generation drops if panels stay dusty. Many installers lose this repeat income because nobody tracks the visit dates, and the customer finds a cheaper cleaner."
    ],
    challenges: [
      "Several rooftops in progress at once with crews moving between them",
      "Daily-wage helpers whose days on site are hard to confirm",
      "Panels, inverters and structure material arriving in lots",
      "Handover without photos of earthing, wiring and panel layout",
      "Cleaning and O&M visits forgotten after the first year"
    ],
    industries: [
      { name: "Home rooftop solar", description: "Small systems on houses, where trust and clear handover matter most." },
      { name: "Commercial rooftops", description: "Shops, schools and factories with larger systems and formal O&M." },
      { name: "Solar O&M vendors", description: "Teams that clean and check panels for systems installed by others." }
    ],
    useCases: [
      {
        title: "Three rooftops in one week",
        industry: "Home rooftop solar",
        problem: "Crews split across three roofs and nobody knows which is ready for the inverter.",
        solution: "Each rooftop is a job with progress photos and comments, and progress report PDFs keep owners and customers informed.",
        benefits: ["Clear status per roof", "Customer updates", "Less confusion over material"]
      }
    ],
    helps: [
      { feature: "gps-attendance-app", text: "Helpers on the roof check in with a selfie each day, so per-day wages match days actually worked." },
      { feature: "staff-salary-payroll", text: "Per-day crew wages are worked out from attendance at the end of the month, with advances cut when you pay." },
      { feature: "inventory-stock-management", text: "Panels, inverters and structure material are counted from purchase to install, lot by lot." },
      { feature: "service-report-pdf", text: "Progress reports during the install and a final report with earthing and wiring photos at handover." },
      { feature: "amc-contract-management", text: "Panel cleaning and checks after commissioning become scheduled visits that bring repeat income." },
      { feature: "offline-field-service-app", text: "Updates and photos from rooftops with weak signal are saved and synced later." }
    ],
    benefits: [
      "Clear progress for every rooftop",
      "Crew wages backed by attendance",
      "Material tracked through each project",
      "Repeat O&M income that is not forgotten"
    ],
    faqs: [
      {
        question: "How do I pay daily-wage helpers on solar installs fairly?",
        answer:
          "Set each helper's wage as Per day and ask them to check in at the site each morning with a selfie. At month end, staff salary counts present days and half days from attendance. Record advances as they happen and cut them when you pay."
      },
      {
        question: "Can I send customers progress updates during a long install?",
        answer:
          "Yes. Ask the crew lead to add photos and a short comment at the end of each day. Send a progress report PDF from the open job. Home customers especially like seeing panels go up while they are at work."
      },
      {
        question: "Can I track panels and inverters for each project?",
        answer:
          "Record supplier purchase bills so material enters stock, then bill it to the customer on the project invoice. The movement history shows when panels came in and on which invoice they went out, which helps when lots are split between roofs."
      },
      {
        question: "How do I keep up with panel cleaning visits after installation?",
        answer:
          "Create an AMC for customers who pay for cleaning and checks, with a visit gap such as every three months. Due visits show in the list, and one tap creates the job. For others, a next-visit date on the customer works as a reminder."
      },
      {
        question: "Does TeamShastra help with subsidy or net-metering paperwork?",
        answer:
          "No. Government portals and DISCOM paperwork are outside the app. You can attach notes and photos to the job to keep track of where a customer's application stands, but filing is done on the official sites."
      }
    ],
    relatedCitySlugs: ["jaipur", "ahmedabad", "pune", "bengaluru"],
    relatedSolutionSlugs: ["field-service-management-software-india", "technician-management-software"]
  },
  {
    slug: "electrician-workforce-management",
    title: "Electrician Workforce Management Software",
    metaDescription:
      "Electrician workforce management software for contractors: assign wiring and repair jobs, track attendance, bill material with GST and keep site photos.",
    eyebrow: "Electrical Services",
    headline: "Electrician Workforce Management Software for Electrical Contractors",
    lead: "TeamShastra is electrician workforce management software for contractors who run wiring, repair and maintenance work with a team of electricians and helpers. It covers job assignment, attendance, material billing and site photos.",
    overviewTitle: "How an electrical contractor's team really works",
    overview: [
      "An electrical contractor runs several kinds of work at once. A new flat needs full wiring over a week or two. A shop wants new lights and a distribution board. A society calls about a tripping MCB in the pump room. An office wants a monthly check of its panel and earthing.",
      "The team is a mix of skilled electricians and helpers, many paid per day. Material moves constantly: wire coils, conduit, switches, MCBs and fittings. Some is bought by the contractor, some by the client, and confusion about who paid for what is common.",
      "Small repair calls are easy to lose. A helper is sent without the owner knowing. A job is half done and nobody returns. At the end of a wiring project, the client disputes the material bill because there is no record of what was used."
    ],
    challenges: [
      "Wiring projects and small repair calls running side by side",
      "Electricians and helpers on per-day wages across many sites",
      "Wire, MCBs and fittings used without a clear bill",
      "Clients disputing material quantities at the end of a project",
      "Half-finished repair jobs nobody returns to"
    ],
    industries: [
      { name: "Residential wiring", description: "New flats and renovations where wiring runs over many days." },
      { name: "Shop and office electrical", description: "Lighting, panels and repairs for businesses that need quick turnaround." },
      { name: "Society electrical maintenance", description: "Pump rooms, common lights and panels under monthly contracts." }
    ],
    useCases: [
      {
        title: "Material dispute on a wiring project",
        industry: "Residential wiring",
        problem: "The flat owner questions how many coils of wire and switches were used.",
        solution: "Material is billed on the project invoice from the catalog, and photos of the wiring before walls are closed are kept on the job.",
        benefits: ["Clear material bill", "Photo proof of concealed work", "Fewer arguments at payment"]
      }
    ],
    helps: [
      { feature: "job-work-order-management", text: "Small repair calls and long wiring projects are jobs with categories, so a half-done repair stays in the open list." },
      { feature: "gps-attendance-app", text: "Electricians and helpers check in at the site, which settles per-day wage questions." },
      { feature: "gst-billing-invoice", text: "Wire, MCBs and fittings are billed from the catalog with HSN codes on the project invoice." },
      { feature: "service-report-pdf", text: "Photos of conduits and wiring taken before walls are closed go into the report for the client." },
      { feature: "quotation-estimate-app", text: "Send a quote for the project and turn it into the job once the client agrees." }
    ],
    benefits: [
      "Every repair call tracked until done",
      "Per-day wages backed by check-ins",
      "Material billed clearly from the catalog",
      "Photo record of concealed wiring"
    ],
    faqs: [
      {
        question: "How do I keep proof of wiring that will be hidden in walls?",
        answer:
          "Ask the electrician to photograph conduits, junction boxes and wire runs before plastering and add them to the job. These photos stay on the job and go into the service report. They help later when a client wants to add a point or traces a fault."
      },
      {
        question: "Can I bill material and labour separately on one invoice?",
        answer:
          "Yes. Add material such as wire, switches and MCBs as catalog items, and add labour as a service item. Both appear on the same GST invoice with their own HSN or SAC codes, so the client sees exactly what was charged."
      },
      {
        question: "How do I manage helpers paid per day?",
        answer:
          "Set their wage as Per day. They check in at the site each morning from their phone. At month end, staff salary counts the days and half days from attendance. Advances given during the month are cut when you pay."
      },
      {
        question: "Can I handle a society's monthly electrical checks?",
        answer:
          "Yes. Create an AMC contract for the society with a monthly visit gap. Each due visit becomes a job for your electrician, with photos of the panel and pump room. Share the report with the society office after the visit."
      },
      {
        question: "What if the client bought some of the material?",
        answer:
          "Bill only the material you supplied and note client-supplied items in the job comments. This keeps your invoice and stock correct and gives you a written record if there is a question later about who provided what."
      }
    ],
    relatedCitySlugs: ["pune", "mumbai", "delhi", "bengaluru"],
    relatedSolutionSlugs: ["technician-management-software", "digital-work-orders", "maintenance-management-software"]
  },
  {
    slug: "plumbing-service-software",
    title: "Plumbing Service Software",
    metaDescription:
      "Plumbing service software for plumbers and contractors: log leak and blockage calls, send the nearest free plumber, bill fittings and keep society AMC visits.",
    eyebrow: "Plumbing Services",
    headline: "Plumbing Service Software for Plumbers and Plumbing Contractors",
    lead: "TeamShastra is plumbing service software for plumbing contractors and teams who fix leaks, blockages and fittings in homes, shops and housing societies. It keeps emergency calls, society contracts, fittings and payments in order.",
    overviewTitle: "Leaks, blockages and society contracts",
    overview: [
      "Plumbing calls are urgent and messy. A pipe bursts under a kitchen sink. A bathroom drain is blocked. A society's overhead tank overflows at night. Customers want someone within the hour and rarely describe the problem clearly on the phone.",
      "Most plumbers carry a bag of common fittings: taps, elbows, washers, PVC and CPVC pieces, and sealing tape. Bigger jobs, like a bathroom renovation or a new pump line, need material bought on the day. Payment is usually cash or UPI at the door.",
      "Societies are steady work. They need regular checks of tanks, pumps and common lines, plus quick response to resident complaints. Without a system, complaint calls are lost, plumbers buy fittings from their own pocket and are repaid late, and the society secretary has no record of the year's work."
    ],
    challenges: [
      "Emergency leak calls that need the nearest free plumber",
      "Fittings bought on the spot from the plumber's own pocket",
      "Society complaints with no record of what was fixed",
      "Cash and UPI collected at homes not matched to jobs",
      "Repeat leaks at the same flat with no history"
    ],
    industries: [
      { name: "Home plumbing repair", description: "Leaks, blockages and tap and flush repairs in flats and houses." },
      { name: "Society plumbing contracts", description: "Tanks, pumps and common lines looked after on a yearly contract." },
      { name: "Renovation plumbing", description: "Bathroom and kitchen work over several days with more material." }
    ],
    useCases: [
      {
        title: "Night-time tank overflow at a society",
        industry: "Society plumbing contract",
        problem: "The watchman calls at night and the next morning nobody remembers who went.",
        solution: "The call is logged as a high-priority job for the society, and the plumber adds a photo of the fixed float valve.",
        benefits: ["Record of every call", "Photo proof", "Clear history for the committee"]
      }
    ],
    helps: [
      { feature: "technician-dispatch-today-board", text: "An emergency leak goes to the plumber who is free right now, not whoever answers first." },
      { feature: "field-expense-tracking", text: "Fittings bought from a local shop are logged with a bill photo and approved, so plumbers are repaid on time." },
      { feature: "customer-management", text: "A flat with a repeat leak shows its past jobs and photos before anyone is sent." },
      { feature: "amc-contract-management", text: "Society tank cleaning and pump checks appear as due visits through the year." },
      { feature: "staff-cash-bank-accounts", text: "Cash collected at homes is tied to each job and settled with the plumber in the evening." }
    ],
    benefits: [
      "Emergency calls reach a free plumber fast",
      "Fittings and small spends recorded with bills",
      "History for repeat leaks",
      "Society work documented for the committee"
    ],
    faqs: [
      {
        question: "How do I send the right plumber for an emergency leak?",
        answer:
          "Log the call as a high-priority job and open the Today board. Pick a plumber who is free, and they get the job as a phone alert with the address and map pin. If everyone is busy, you can see who is about to finish."
      },
      {
        question: "My plumbers buy fittings on the way. How do I repay them correctly?",
        answer:
          "Ask them to log each purchase as an expense with a bill photo. You approve or reject it. If you gave them cash in the morning, the expense is paid from their staff cash. Bill the fittings to the customer on the invoice so the cost is recovered."
      },
      {
        question: "Can I keep a record of every complaint at a society?",
        answer:
          "Yes. Create the society as a customer and log each resident complaint as a job, with the flat number in the title. Photos and comments stay with each job. At the monthly meeting, filter jobs by the society to show everything done."
      },
      {
        question: "How do I handle a leak that keeps coming back at one flat?",
        answer:
          "Open the customer's history to see earlier visits, photos and parts used. If it is the same fault, reopen the old job instead of creating a new one. The full story then stays together, which helps decide whether a bigger repair is needed."
      },
      {
        question: "Can plumbers collect payment and give a bill on the spot?",
        answer:
          "Yes. Make the invoice on the phone with fittings and labour, and share it on WhatsApp. With your UPI ID saved, the bill carries a scan-to-pay QR. The plumber marks the job as paid by cash or UPI when the customer pays."
      }
    ],
    relatedCitySlugs: ["mumbai", "pune", "bengaluru", "chennai"],
    relatedSolutionSlugs: ["field-service-management-software-india", "digital-work-orders", "maintenance-management-software"]
  }
];

export const solutionMap = Object.fromEntries(solutions.map((s) => [s.slug, s])) as Record<string, SolutionPage>;

export function getSolution(slug: string): SolutionPage | undefined {
  return solutionMap[slug];
}
