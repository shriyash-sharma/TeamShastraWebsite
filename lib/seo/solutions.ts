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
      { title: "Equipment service network", industry: "Equipment service", problem: "Service centers with inconsistent reporting back to the office.", solution: "Standardized digital service reports with checklists and photos per visit.", benefits: ["Standardized reports", "Service history per customer", "Technician-wise job load"] }
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
      { question: "Does TeamShastra support digital service reports?", answer: "Yes. Work orders support checklists, before/after photos, and completion report PDFs in place of paper job sheets." },
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
      { question: "Does TeamShastra file GST returns on the government portal?", answer: "No. It creates GST invoices and CA-ready export workbooks (GSTR-1, GSTR-3B, GSTR-9, and HSN summary). Your CA files returns on the GST portal." },
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
      { title: "AMC team daily check-in", industry: "Maintenance", problem: "Technicians visiting several customer sites a day with no attendance trail.", solution: "Check-in and check-out at each site, with leave requests handled in the same app.", benefits: ["Site-linked attendance", "Leave visibility", "Owner-only payroll access"] }
    ],
    caseStudy: {
      companyName: "Field Team Records (illustrative example)",
      location: "India",
      problem: ["Manual muster rolls across branches", "Leave requests handled by phone call", "Payroll built from memory, not records"],
      results: ["GPS-verified attendance replacing paper registers", "Leave requests tracked in one place", "Payroll runs built from real attendance data"]
    },
    faqs: [
      { question: "Can attendance be tracked using GPS?", answer: "Yes. Optional location is captured at check-in and check-out. There is no continuous background GPS tracking." },
      { question: "Does TeamShastra support leave management?", answer: "Yes. Leave requests, approvals, and availability help managers plan who is on duty." },
      { question: "Can attendance work offline?", answer: "Yes. Check-in and check-out work offline and sync once the connection returns." },
      { question: "Does attendance feed into payroll?", answer: "Yes. Monthly payroll runs use the same attendance and leave records already tracked for the team." }
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
    metaDescription: "Digital service report software for Indian field teams. Standardized checklists and photo evidence, replacing paper job sheets.",
    eyebrow: "Service Reports",
    headline: "Digital Service Report Software for Field Teams",
    lead: "Standardize field service documentation with digital checklists and photo evidence — replacing paper job sheets across India.",
    challenges: ["Inconsistent paper reports across technicians", "Photos and evidence not attached to job records", "Reports not accessible for billing", "Checklist compliance not enforced"],
    industries: [
      { name: "HVAC & plumbing", description: "Service reports for installation and repair visits." },
      { name: "Equipment service", description: "Repair and AMC visit reports." },
      { name: "Facilities maintenance", description: "Daily and periodic facility service reports." },
      { name: "CCTV & security installers", description: "Installation and commissioning reports." }
    ],
    useCases: [{ title: "HVAC service report standardization", industry: "HVAC", problem: "Inconsistent technician reports.", solution: "A shared checklist template used for every visit.", benefits: ["Consistent reports", "Equipment history", "AMC billing support"] }],
    caseStudy: { companyName: "ReportPro Services (illustrative example)", location: "India", problem: ["Inconsistent paper reports"], results: ["Reports standardized across every technician", "Faster billing cycles"] },
    faqs: [{ question: "Can service reports include checklists?", answer: "Yes. Checklists help standardize documentation per job type." }],
    relatedCitySlugs: ["bengaluru", "hyderabad", "mumbai", "delhi"],
    relatedSolutionSlugs: ["field-service-management-software-india", "digital-work-orders", "hvac-service-management"]
  },
  {
    slug: "facility-management-software",
    title: "Facility Management Software",
    metaDescription: "Facility management software for Indian maintenance crews. Manage attendance, work orders, and service reports across client sites.",
    eyebrow: "Facility Management",
    headline: "Facility Management Software for Maintenance Crews",
    lead: "Coordinate maintenance technicians across several client buildings or sites with attendance, task work orders, and client-ready reports.",
    challenges: ["Staff across several client sites with no central visibility", "Client questions about which tasks were completed and when", "Daily tasks not verified with photo proof", "Coordinating more than one client contract at once"],
    industries: [
      { name: "Commercial facility maintenance", description: "Office and retail site maintenance crews." },
      { name: "Residential maintenance", description: "Apartment and society maintenance vendors." },
      { name: "Equipment & building systems", description: "Vendors maintaining installed equipment across sites." }
    ],
    useCases: [{ title: "Multi-site maintenance vendor", industry: "Facility maintenance", problem: "Several client buildings, no shared task record.", solution: "Site-wise attendance and daily task work orders with photo proof.", benefits: ["Multi-site visibility", "Photo task proof", "Client-ready reports"] }],
    caseStudy: { companyName: "MetroFM Solutions (illustrative example)", location: "India", problem: ["Fragmented multi-site coordination", "Client questions about task completion"], results: ["One dashboard for every client site", "Photo-backed task records for client reviews"] },
    faqs: [{ question: "Can a maintenance crew manage several client sites?", answer: "Yes. Site-wise work orders and attendance help crews serving more than one client location." }],
    relatedCitySlugs: ["mumbai", "bengaluru", "delhi", "pune"],
    relatedSolutionSlugs: ["attendance-management-software-india", "digital-work-orders", "maintenance-management-software"]
  },
  {
    slug: "maintenance-management-software",
    title: "Maintenance Management Software",
    metaDescription: "Maintenance management software for Indian service businesses. Schedule AMC visits, track breakdown jobs, and maintain equipment service history.",
    eyebrow: "Maintenance Management",
    headline: "Maintenance Management Software for Service Teams",
    lead: "Move from reactive breakdown calls to planned AMC visits, with customer-linked service history and due-visit tracking.",
    challenges: ["Reactive maintenance culture with no visit schedule", "AMC due dates tracked in a spreadsheet and missed", "No equipment or customer service history to refer back to", "Breakdown and scheduled visits competing for the same technicians"],
    industries: [
      { name: "HVAC & MEP", description: "Building systems maintenance and AMC providers." },
      { name: "Equipment service", description: "Repair and preventive maintenance for installed equipment." },
      { name: "CCTV & security installers", description: "AMC contracts for installed security systems." },
      { name: "Facilities maintenance", description: "Recurring visit contracts across client sites." }
    ],
    useCases: [{ title: "AMC due-visit tracking", industry: "Maintenance", problem: "Renewal and visit dates tracked in a notebook.", solution: "AMC contracts with due-visit lists so nothing is missed.", benefits: ["Due-visit visibility", "Customer-linked history", "Fewer missed renewals"] }],
    caseStudy: { companyName: "MaintPro Services (illustrative example)", location: "India", problem: ["Reactive maintenance only", "AMC renewals tracked by memory"], results: ["Due-visit list replacing the spreadsheet", "Renewal conversations backed by real visit history"] },
    faqs: [{ question: "Can AMC due visits be tracked automatically?", answer: "Yes. AMC contracts show which customers are due or overdue for a visit." }],
    relatedCitySlugs: ["pune", "chennai", "ahmedabad", "surat"],
    relatedSolutionSlugs: ["digital-work-orders", "facility-management-software", "hvac-service-management"]
  },
  {
    slug: "hvac-service-management",
    title: "HVAC Service Management Software",
    metaDescription: "HVAC service management software for Indian companies. Manage AMC contracts, breakdown dispatch, and service reports.",
    eyebrow: "HVAC Services",
    headline: "HVAC Service Management Software for Indian Companies",
    lead: "Manage HVAC AMC contracts, breakdown visits, and service reports for commercial and residential cooling across Indian cities.",
    challenges: ["Summer breakdown volume is hard to coordinate by phone", "AMC preventive visits get delayed", "Client equipment history is not kept in one place", "Multi-branch HVAC operations with no shared system"],
    industries: [
      { name: "Commercial HVAC", description: "Office and retail cooling system service." },
      { name: "Residential AMC", description: "Split AC and VRF home service." },
      { name: "Industrial cooling", description: "Factory and plant HVAC maintenance." }
    ],
    useCases: [{ title: "AMC provider with a growing client base", industry: "Commercial HVAC", problem: "Preventive visits missed across a growing customer list.", solution: "AMC contracts with due-visit tracking and job-linked service history.", benefits: ["AMC due-visit tracking", "Equipment history", "Shared job records"] }],
    caseStudy: { companyName: "CoolServe India (illustrative example)", location: "India", problem: ["Summer dispatch coordinated by phone", "AMC visits tracked in a spreadsheet"], results: ["Breakdown jobs assigned and tracked as work orders", "AMC due visits tracked against each customer"] },
    faqs: [{ question: "Can HVAC AMC contracts be tracked?", answer: "Yes. AMC contracts and due-visit lists help schedule recurring service." }],
    relatedCitySlugs: ["hyderabad", "mumbai", "delhi", "chennai"],
    relatedSolutionSlugs: ["field-service-management-software-india", "maintenance-management-software", "service-report-software"]
  },
  {
    slug: "solar-installation-workforce-software",
    title: "Solar Installation Workforce Software",
    metaDescription: "Solar installation workforce software for Indian EPC companies. Track installation crews, project progress, and O&M visits with photo documentation.",
    eyebrow: "Solar & Renewable",
    headline: "Solar Installation Workforce Software for EPC Companies",
    lead: "Coordinate solar installation crews, track project progress, document handover, and manage O&M visits across rooftop installation projects.",
    challenges: ["Installation progress not visible to the office", "Handover documentation incomplete or scattered", "O&M visits across sites with no shared record", "Crew workload spread across multiple concurrent projects"],
    industries: [
      { name: "Rooftop solar EPC", description: "Residential and commercial rooftop installation crews." },
      { name: "Solar O&M", description: "Operations and maintenance for installed systems." }
    ],
    useCases: [{ title: "Rooftop installation tracking", industry: "Rooftop solar", problem: "Several concurrent installations with no shared progress view.", solution: "Project work orders with installation checklists and photo evidence.", benefits: ["Progress tracking", "Photo-backed handover", "Installation history per site"] }],
    caseStudy: { companyName: "SunTrack EPC (illustrative example)", location: "India", problem: ["No shared install progress view"], results: ["Installation checklists standardized across crews", "Handover documentation kept with the job record"] },
    faqs: [{ question: "Can solar O&M work offline at remote sites?", answer: "Yes. Offline work order updates sync when connectivity returns." }],
    relatedCitySlugs: ["jaipur", "ahmedabad", "pune", "bengaluru"],
    relatedSolutionSlugs: ["field-service-management-software-india", "technician-management-software"]
  },
  {
    slug: "electrician-workforce-management",
    title: "Electrician Workforce Management Software",
    metaDescription: "Electrician workforce management software for Indian contractors. Dispatch electricians, track jobs, and manage AMC contracts.",
    eyebrow: "Electrical Services",
    headline: "Electrician Workforce Management for Indian Contractors",
    lead: "Assign jobs to licensed electricians, track visits, and maintain job documentation for contractors and AMC providers.",
    challenges: ["Electricians assigned by phone with no shared job record", "Photo proof of completed work rarely collected", "AMC visits for housing societies or offices get missed", "Multi-branch operations with no central dashboard"],
    industries: [
      { name: "Electrical contracting", description: "Licensed contractors for commercial and residential work." },
      { name: "Industrial electrical", description: "Factory and plant electrical maintenance." },
      { name: "Society & office AMC", description: "Recurring electrical AMC contracts." }
    ],
    useCases: [{ title: "Growing electrical contractor", industry: "Electrical contracting", problem: "Jobs assigned by phone with no shared record.", solution: "Work orders with before/after photo capture and job history per customer.", benefits: ["Shared job assignment", "Digital job records", "Photo-backed completion proof"] }],
    caseStudy: { companyName: "VoltServe Contractors (illustrative example)", location: "India", problem: ["Job records kept by memory and phone calls"], results: ["Jobs and photos kept in one digital record", "AMC renewal conversations backed by real visit history"] },
    faqs: [{ question: "Can electrician jobs include photo documentation?", answer: "Yes. Before/after photos support job records and customer conversations." }],
    relatedCitySlugs: ["pune", "mumbai", "delhi", "bengaluru"],
    relatedSolutionSlugs: ["technician-management-software", "digital-work-orders", "maintenance-management-software"]
  },
  {
    slug: "plumbing-service-software",
    title: "Plumbing Service Software",
    metaDescription: "Plumbing service software for Indian companies. Dispatch plumbers, track jobs, manage society contracts, and capture completion photos.",
    eyebrow: "Plumbing Services",
    headline: "Plumbing Service Software for Indian Companies",
    lead: "Assign plumbers to breakdown calls and society maintenance contracts, with work orders and photo proof of completed work.",
    challenges: ["Emergency plumbing calls need fast assignment", "Society contract visits not tracked against a schedule", "Customer disputes without proof of completed work", "Matching the right plumber to a specialized job"],
    industries: [
      { name: "Residential plumbing", description: "Home breakdown and repair services." },
      { name: "Society maintenance", description: "Apartment complex plumbing AMC." },
      { name: "Commercial plumbing", description: "Office and retail plumbing maintenance." }
    ],
    useCases: [{ title: "Society plumbing AMC", industry: "Society maintenance", problem: "Several society contracts, no shared visit schedule.", solution: "AMC contracts with due-visit tracking per society.", benefits: ["AMC due-visit tracking", "Service history per society", "Photo-backed completion proof"] }],
    caseStudy: { companyName: "PipeLine Services (illustrative example)", location: "India", problem: ["AMC visits tracked in a notebook"], results: ["Due-visit tracking replacing the notebook", "Service history kept per society"] },
    faqs: [{ question: "Can society AMC visits be tracked?", answer: "Yes. AMC contracts show which societies are due for a visit." }],
    relatedCitySlugs: ["mumbai", "pune", "bengaluru", "chennai"],
    relatedSolutionSlugs: ["field-service-management-software-india", "digital-work-orders", "maintenance-management-software"]
  }
];

export const solutionMap = Object.fromEntries(solutions.map((s) => [s.slug, s])) as Record<string, SolutionPage>;

export function getSolution(slug: string): SolutionPage | undefined {
  return solutionMap[slug];
}
