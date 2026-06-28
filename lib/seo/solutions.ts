import type { SolutionPage } from "./types";

export const solutions: SolutionPage[] = [
  {
    slug: "field-service-management-software-india",
    title: "Field Service Management Software India",
    metaDescription: "TeamShastra field service management software for Indian businesses. Dispatch technicians, track visits, capture digital reports, and improve SLA performance nationwide.",
    eyebrow: "Field Service Management",
    headline: "Field Service Management Software for Businesses Across India",
    lead: "End-to-end field service platform for Indian companies that dispatch technicians, engineers, and service staff to customer locations every day — from metro cities to tier-2 industrial towns.",
    challenges: [
      "Technicians spread across cities with no real-time visibility for dispatchers",
      "Paper job sheets and WhatsApp coordination create lost work orders",
      "SLA penalties from enterprise clients due to poor response tracking",
      "AMC and preventive maintenance schedules tracked in spreadsheets",
      "Customer disputes without photo evidence or digital sign-off",
      "Multi-branch operations across states with fragmented processes"
    ],
    industries: [
      { name: "HVAC & MEP services", description: "Commercial and residential HVAC companies managing AMC contracts across Indian cities." },
      { name: "Electrical contractors", description: "Licensed electrical contractors dispatching teams for installation, repair, and maintenance." },
      { name: "Facility management", description: "FM companies managing technicians across multiple commercial buildings and campuses." },
      { name: "Equipment service", description: "OEM and third-party service providers for industrial and commercial equipment." },
      { name: "Telecom & utilities", description: "Network maintenance and utility service teams across urban and semi-urban India." }
    ],
    useCases: [
      { title: "Pan-India HVAC AMC provider", industry: "HVAC", problem: "200+ AMC clients across 8 cities with missed PM visits.", solution: "Centralized AMC scheduling with city-wise technician dispatch.", benefits: ["AMC compliance", "City-wise dispatch", "Client equipment history"] },
      { title: "Multi-city electrical contractor", industry: "Electrical", problem: "Technicians across Delhi, Mumbai, and Bengaluru with no unified system.", solution: "Branch-wise work orders with cross-city reporting.", benefits: ["Multi-branch visibility", "Digital work orders", "Customer signatures"] },
      { title: "OEM equipment service network", industry: "Equipment service", problem: "Authorized service centers with inconsistent reporting.", solution: "Standardized service checklists and photo reports.", benefits: ["Standardized reports", "Warranty tracking", "Center performance"] }
    ],
    caseStudy: {
      companyName: "AllIndia Service Networks (illustrative example)",
      location: "India — Multi-city operations",
      problem: ["Fragmented dispatch across branches", "Lost paper job sheets", "SLA penalties on enterprise contracts"],
      results: ["40% faster job closure", "85% reduction in paperwork", "Improved SLA compliance across branches"]
    },
    faqs: [
      { question: "Is TeamShastra suitable for multi-city field service operations in India?", answer: "Yes. Multi-branch support lets businesses manage technicians across cities from one platform." },
      { question: "Can HVAC companies manage AMC contracts nationwide?", answer: "Yes. Recurring PM scheduling and city-wise dispatch support pan-India AMC operations." },
      { question: "Does TeamShastra support digital service reports?", answer: "Yes. Structured reports with photos, checklists, and customer signatures replace paper job sheets." },
      { question: "Can field technicians work offline?", answer: "Yes. Offline mode supports low-connectivity areas with sync when network returns." },
      { question: "How long does implementation take?", answer: "Most businesses pilot in one city within 1–2 weeks and expand to additional branches over 4–8 weeks." }
    ],
    relatedCitySlugs: ["mumbai", "delhi", "bengaluru", "pune", "hyderabad", "chennai"],
    relatedSolutionSlugs: ["technician-management-software", "digital-work-orders", "service-report-software", "hvac-service-management"]
  },
  {
    slug: "attendance-management-software-india",
    title: "Attendance Management Software India",
    metaDescription: "Attendance management software for Indian businesses. GPS check-in, geofencing, shift management, and leave tracking for field and site teams.",
    eyebrow: "Attendance Management",
    headline: "Attendance Management Software for Indian Workforces",
    lead: "Accurate attendance tracking for Indian businesses with distributed teams — field staff, site workers, security guards, factory shifts, and multi-location operations.",
    challenges: [
      "Field employees check in from customer sites with no verification",
      "Manual muster rolls and biometric gaps at remote locations",
      "Multi-shift factories with complex roster management",
      "Security guard attendance disputes with clients",
      "Leave and availability not visible to dispatchers",
      "Payroll disputes due to inaccurate attendance records"
    ],
    industries: [
      { name: "Security services", description: "Guard agencies managing shift attendance across hundreds of client sites." },
      { name: "Manufacturing", description: "Factory shift workers across industrial estates." },
      { name: "Facility management", description: "Housekeeping and maintenance staff across multiple buildings." },
      { name: "Sales & distribution", description: "Field sales teams visiting retailers and distributors." },
      { name: "Construction", description: "Site workers across project locations." }
    ],
    useCases: [
      { title: "Security agency with 1000+ guards", industry: "Security", problem: "Paper muster rolls across 150 client sites.", solution: "Site geofence check-in with shift roster management.", benefits: ["Verified attendance", "Shift compliance", "Client billing accuracy"] },
      { title: "Factory multi-shift attendance", industry: "Manufacturing", problem: "3-shift operations with manual registers.", solution: "Shift rosters with gate geofencing.", benefits: ["Shift accuracy", "Payroll exports", "Reduced disputes"] }
    ],
    caseStudy: {
      companyName: "Bharat Guard Services (illustrative example)",
      location: "India — Multi-state security operations",
      problem: ["Paper muster rolls", "Client billing disputes", "Shift coverage gaps"],
      results: ["95% attendance accuracy", "40% fewer billing disputes", "Real-time coverage visibility"]
    },
    faqs: [
      { question: "Can attendance be tracked using GPS?", answer: "Yes. GPS check-in and geofencing verify attendance at customer sites, factories, and project locations." },
      { question: "Does TeamShastra support shift management?", answer: "Yes. Rotating shifts, roster planning, and shift-wise attendance are supported." },
      { question: "Can security agencies manage guard attendance?", answer: "Yes. Site geofencing and shift management support large guard workforces." },
      { question: "Is leave management included?", answer: "Yes. Leave requests, approvals, and availability tracking help dispatchers plan assignments." }
    ],
    relatedCitySlugs: ["delhi", "mumbai", "bengaluru", "pune", "chennai", "hyderabad"],
    relatedSolutionSlugs: ["field-employee-tracking", "security-guard-management-software", "construction-workforce-software"]
  },
  {
    slug: "technician-management-software",
    title: "Technician Management Software",
    metaDescription: "Technician management software for Indian service companies. Dispatch, track, and manage field technicians with GPS, work orders, and digital service reports.",
    eyebrow: "Technician Management",
    headline: "Technician Management Software for Service Companies",
    lead: "Manage field technicians from assignment to completion — dispatch, GPS tracking, work orders, photo reports, and customer sign-off in one platform.",
    challenges: ["No visibility into technician location and job status", "Skill mismatch — wrong technician sent to jobs", "Paperwork and photo evidence lost after visits", "Customer complaints about delayed or missed visits", "Technician utilization not measured", "Training and certification not linked to job assignment"],
    industries: [
      { name: "HVAC & electrical", description: "Licensed technicians for installation and repair." },
      { name: "Appliance service", description: "Authorized and third-party appliance repair networks." },
      { name: "Telecom", description: "Network installation and maintenance technicians." },
      { name: "Solar & renewable", description: "Installation and O&M technician teams." },
      { name: "Industrial maintenance", description: "Factory and plant maintenance technicians." }
    ],
    useCases: [
      { title: "Appliance service network", industry: "Appliance service", problem: "100+ daily calls with phone dispatch.", solution: "Nearest-skilled technician auto-assignment.", benefits: ["Faster dispatch", "Skill matching", "First-visit resolution"] }
    ],
    caseStudy: { companyName: "TechServe India (illustrative example)", location: "India", problem: ["Phone-based dispatch", "No technician tracking", "Lost service records"], results: ["45% faster dispatch", "30% better utilization", "Digital service history per customer"] },
    faqs: [
      { question: "Can technicians be assigned based on skills?", answer: "Yes. Skill tags help dispatchers route jobs to qualified technicians." },
      { question: "Does TeamShastra track technician location?", answer: "Yes. Real-time location and job status visibility for supervisors." },
      { question: "Can customers sign off on completed work?", answer: "Yes. Digital signatures capture customer acceptance at site." }
    ],
    relatedCitySlugs: ["mumbai", "delhi", "pune", "bengaluru"],
    relatedSolutionSlugs: ["field-service-management-software-india", "digital-work-orders", "electrician-workforce-management"]
  },
  {
    slug: "field-employee-tracking",
    title: "Field Employee Tracking Software",
    metaDescription: "Field employee tracking software for Indian businesses. Monitor site visits, job progress, attendance, and daily activity for sales and service teams.",
    eyebrow: "Field Employee Tracking",
    headline: "Field Employee Tracking for Sales and Service Teams",
    lead: "Real-time visibility into field employee location, visit verification, and daily activity for businesses that manage teams outside the office.",
    challenges: ["No proof that field staff visited assigned locations", "Sales reps' territory coverage unknown", "Service teams' daily routes not optimized", "Privacy concerns with always-on tracking", "Multi-city field teams with no central dashboard"],
    industries: [
      { name: "Sales & distribution", description: "FMCG, pharma, and retail sales teams." },
      { name: "Service operations", description: "Field service and repair teams." },
      { name: "Inspection & audit", description: "Quality and compliance inspection teams." },
      { name: "Delivery & logistics", description: "Last-mile delivery and courier teams." }
    ],
    useCases: [{ title: "FMCG sales territory tracking", industry: "FMCG", problem: "30 reps, 500 retailers, no visit proof.", solution: "Retailer geofence check-in with visit notes.", benefits: ["Visit verification", "Territory coverage", "Order linkage"] }],
    caseStudy: { companyName: "RouteWise India (illustrative example)", location: "India", problem: ["No visit verification", "Unknown territory gaps"], results: ["28% more verified visits", "Better territory planning"] },
    faqs: [{ question: "Is field tracking privacy-compliant?", answer: "Yes. Tracking can be configured for work hours with role-based supervisor access." }],
    relatedCitySlugs: ["delhi", "mumbai", "bengaluru", "pune"],
    relatedSolutionSlugs: ["attendance-management-software-india", "sales-team-management-software", "employee-tracking-bengaluru"]
  },
  {
    slug: "digital-work-orders",
    title: "Digital Work Orders Software",
    metaDescription: "Digital work order software for Indian businesses. Create, assign, track, and close work orders with photos, signatures, and real-time status updates.",
    eyebrow: "Work Order Management",
    headline: "Digital Work Orders for Field and Maintenance Teams",
    lead: "Replace paper chits and WhatsApp messages with structured digital work orders — from creation and assignment to photo evidence and customer sign-off.",
    challenges: ["Work orders lost in phone messages and paper", "No status visibility for managers and customers", "Photo evidence and signatures not captured", "SLA tracking impossible with manual processes", "Work order history not searchable"],
    industries: [
      { name: "Maintenance & FM", description: "Building and facility maintenance work orders." },
      { name: "Installation", description: "Equipment and system installation jobs." },
      { name: "Repair & breakdown", description: "On-demand repair and emergency service." },
      { name: "Preventive maintenance", description: "Scheduled PM and AMC visit work orders." }
    ],
    useCases: [{ title: "FM daily task work orders", industry: "Facility management", problem: "Daily cleaning tasks untracked.", solution: "Building-wise task work orders with photo proof.", benefits: ["Task accountability", "Photo reports", "Client billing"] }],
    caseStudy: { companyName: "WorkFlow Digital (illustrative example)", location: "India", problem: ["Lost paper work orders", "No status tracking"], results: ["90% digital work orders", "Faster closure rates"] },
    faqs: [{ question: "Can work orders include photos and signatures?", answer: "Yes. Photo attachments and digital customer signatures are supported." }],
    relatedCitySlugs: ["mumbai", "delhi", "pune", "chennai"],
    relatedSolutionSlugs: ["work-order-management-mumbai", "field-service-management-software-india", "maintenance-management-software"]
  },
  {
    slug: "service-report-software",
    title: "Service Report Software",
    metaDescription: "Digital service report software for Indian field teams. Standardized checklists, photos, customer signatures, and automated report generation.",
    eyebrow: "Service Reports",
    headline: "Digital Service Report Software for Field Teams",
    lead: "Standardize field service documentation with digital checklists, photo evidence, parts usage logs, and customer sign-off — replacing paper job sheets across India.",
    challenges: ["Inconsistent paper reports across technicians", "Photos and evidence not attached to job records", "Customer sign-off missing on completed work", "Reports not accessible for billing and audits", "Checklist compliance not enforced"],
    industries: [
      { name: "HVAC & MEP", description: "Service reports for cooling and building systems." },
      { name: "Equipment service", description: "OEM and third-party equipment maintenance reports." },
      { name: "Facility management", description: "Daily and periodic facility service reports." },
      { name: "Healthcare equipment", description: "Biomedical and diagnostic equipment service reports." }
    ],
    useCases: [{ title: "HVAC service report standardization", industry: "HVAC", problem: "Inconsistent technician reports.", solution: "Mandatory checklist templates per equipment type.", benefits: ["Consistent reports", "Equipment history", "AMC billing support"] }],
    caseStudy: { companyName: "ReportPro Services (illustrative example)", location: "India", problem: ["Inconsistent paper reports"], results: ["100% standardized digital reports", "Faster billing cycles"] },
    faqs: [{ question: "Can service reports include mandatory checklists?", answer: "Yes. Customizable checklists ensure consistent documentation per job type." }],
    relatedCitySlugs: ["bengaluru", "hyderabad", "mumbai", "delhi"],
    relatedSolutionSlugs: ["field-service-management-software-india", "digital-work-orders", "hvac-service-management"]
  },
  {
    slug: "facility-management-software",
    title: "Facility Management Software",
    metaDescription: "Facility management software for Indian FM companies. Manage attendance, work orders, and service reports across multiple buildings and client sites.",
    eyebrow: "Facility Management",
    headline: "Facility Management Software for Multi-Site Operations",
    lead: "Coordinate housekeeping, maintenance, security, and MEP teams across multiple buildings with geofenced attendance, task work orders, and client-ready reports.",
    challenges: ["Staff across 20–300+ sites with no central visibility", "Client disputes over billed man-hours", "Daily tasks not verified with proof", "Multiple vendors and team types to coordinate", "SLA tracking across diverse client contracts"],
    industries: [
      { name: "Commercial FM", description: "Office towers, tech parks, and corporate campuses." },
      { name: "Residential FM", description: "Apartment complexes and township management." },
      { name: "Retail FM", description: "Mall and retail chain facility services." },
      { name: "Industrial FM", description: "Factory and warehouse facility management." }
    ],
    useCases: [{ title: "Multi-tower commercial FM", industry: "Commercial FM", problem: "25 buildings, 300 staff.", solution: "Building geofencing and daily task work orders.", benefits: ["Multi-building dashboard", "Photo task proof", "Client SLA reports"] }],
    caseStudy: { companyName: "MetroFM Solutions (illustrative example)", location: "India", problem: ["Fragmented multi-site ops", "Client billing disputes"], results: ["38% faster task completion", "25% fewer billing disputes"] },
    faqs: [{ question: "Can FM companies manage 50+ buildings?", answer: "Yes. Multi-site dashboards with building-wise geofencing and reporting." }],
    relatedCitySlugs: ["mumbai", "bengaluru", "delhi", "pune"],
    relatedSolutionSlugs: ["attendance-management-software-india", "digital-work-orders", "cleaning-staff-management"]
  },
  {
    slug: "maintenance-management-software",
    title: "Maintenance Management Software",
    metaDescription: "Maintenance management software for Indian businesses. Schedule preventive maintenance, track breakdowns, and maintain equipment service history.",
    eyebrow: "Maintenance Management",
    headline: "Maintenance Management Software for Industrial and Commercial Teams",
    lead: "Move from reactive breakdown repairs to planned preventive maintenance with equipment registries, automated PM schedules, and complete service history.",
    challenges: ["Reactive maintenance culture with unplanned downtime", "PM schedules in Excel with missed visits", "No equipment service history for decision-making", "Breakdown priority not managed systematically", "Parts usage not tracked per job"],
    industries: [
      { name: "Manufacturing", description: "Factory equipment and production line maintenance." },
      { name: "HVAC & MEP", description: "Building systems preventive maintenance." },
      { name: "Healthcare equipment", description: "Biomedical equipment calibration and maintenance." },
      { name: "Utilities", description: "Infrastructure and utility system maintenance." }
    ],
    useCases: [{ title: "Factory PM automation", industry: "Manufacturing", problem: "Notebook-based PM tracking.", solution: "Machine-linked recurring work orders.", benefits: ["PM automation", "Equipment history", "Reduced downtime"] }],
    caseStudy: { companyName: "MaintPro Industrial (illustrative example)", location: "India", problem: ["Reactive maintenance only"], results: ["40% more PM visits on schedule", "20% less unplanned downtime"] },
    faqs: [{ question: "Can PM schedules be automated?", answer: "Yes. Recurring work orders trigger based on equipment schedules and AMC contracts." }],
    relatedCitySlugs: ["pune", "chennai", "ahmedabad", "coimbatore"],
    relatedSolutionSlugs: ["digital-work-orders", "facility-management-software", "utility-workforce-management"]
  },
  {
    slug: "construction-workforce-software",
    title: "Construction Workforce Software",
    metaDescription: "Construction workforce management software for Indian contractors. Track site attendance, manage subcontractors, and coordinate MEP crews across projects.",
    eyebrow: "Construction",
    headline: "Construction Workforce Software for Indian Contractors",
    lead: "Manage construction site attendance, subcontractor crews, MEP coordination, and defect tracking across residential and commercial projects.",
    challenges: ["Site worker attendance across multiple projects", "Subcontractor crew coordination and accountability", "MEP defect tracking during warranty period", "Safety documentation for site visits", "Project-wise labor reporting for billing"],
    industries: [
      { name: "Residential construction", description: "Builder and contractor site operations." },
      { name: "Commercial construction", description: "Office and mall project management." },
      { name: "MEP contracting", description: "Electrical, plumbing, and fire-fighting crews." },
      { name: "Infrastructure", description: "Road, metro, and civil project crews." }
    ],
    useCases: [{ title: "Multi-site contractor attendance", industry: "Construction", problem: "Workers across 8 active sites.", solution: "Project geofence check-in.", benefits: ["Site attendance", "Labor reports", "Billing accuracy"] }],
    caseStudy: { companyName: "BuildTrack Contractors (illustrative example)", location: "India", problem: ["Manual site attendance"], results: ["90% attendance accuracy", "Project-wise labor visibility"] },
    faqs: [{ question: "Can construction site attendance be geofenced?", answer: "Yes. Project site geofencing verifies worker check-in." }],
    relatedCitySlugs: ["mumbai", "pune", "bengaluru", "hyderabad"],
    relatedSolutionSlugs: ["attendance-management-software-india", "electrician-workforce-management", "plumbing-service-software"]
  },
  {
    slug: "security-guard-management-software",
    title: "Security Guard Management Software",
    metaDescription: "Security guard management software for Indian agencies. Manage guard shifts, site check-ins, relief deployment, and client billing across hundreds of sites.",
    eyebrow: "Security Services",
    headline: "Security Guard Management Software for Indian Agencies",
    lead: "Manage guard shifts, site coverage, relief deployment, and attendance verification for security agencies operating across residential, commercial, and industrial sites.",
    challenges: ["Guard attendance disputes with clients", "Shift coverage gaps during relief deployment", "Manual muster rolls across hundreds of sites", "Billing based on unverified man-hours", "No real-time view of site coverage"],
    industries: [
      { name: "Commercial security", description: "Office towers, malls, and banks." },
      { name: "Residential security", description: "Societies and township guard services." },
      { name: "Industrial security", description: "Factory and warehouse guard deployment." },
      { name: "Government security", description: "Government building and institution security." }
    ],
    useCases: [{ title: "500-guard agency operations", industry: "Security", problem: "80 sites, paper muster rolls.", solution: "Site geofence check-in with shift roster.", benefits: ["Verified attendance", "Coverage dashboard", "Client reports"] }],
    caseStudy: { companyName: "Sentinel Guard Services (illustrative example)", location: "India", problem: ["Billing disputes", "Coverage gaps"], results: ["42% fewer disputes", "30% faster relief deployment"] },
    faqs: [{ question: "Can security agencies manage 24/7 shifts?", answer: "Yes. Shift rosters, relief pools, and site check-ins support round-the-clock operations." }],
    relatedCitySlugs: ["delhi", "mumbai", "bengaluru", "chennai"],
    relatedSolutionSlugs: ["attendance-management-software-india", "facility-management-software"]
  },
  {
    slug: "sales-team-management-software",
    title: "Sales Team Management Software",
    metaDescription: "Sales team management software for Indian field sales teams. Track retailer visits, territory coverage, and meeting outcomes with GPS check-in.",
    eyebrow: "Sales Teams",
    headline: "Sales Team Management Software for Field Sales",
    lead: "Verify field sales visits, measure territory coverage, and log meeting outcomes for FMCG, pharma, and distribution sales teams across India.",
    challenges: ["No proof of retailer and distributor visits", "Territory gaps unknown to managers", "Meeting outcomes not logged systematically", "New rep onboarding without route guidance", "Incentive calculation based on unverified activity"],
    industries: [
      { name: "FMCG distribution", description: "Sales reps visiting retail outlets." },
      { name: "Pharma sales", description: "Medical representative visit tracking." },
      { name: "Industrial sales", description: "B2B field sales teams." },
      { name: "Equipment & machinery", description: "Dealer and customer visit management." }
    ],
    useCases: [{ title: "FMCG retail coverage", industry: "FMCG", problem: "25 reps, 400 retailers.", solution: "Retailer check-in with order notes.", benefits: ["Visit proof", "Coverage reports", "Pipeline visibility"] }],
    caseStudy: { companyName: "SalesRoute India (illustrative example)", location: "India", problem: ["Unverified visits"], results: ["28% more verified visits", "Better territory planning"] },
    faqs: [{ question: "Can retailer visits be verified with GPS?", answer: "Yes. Geofence check-in at retailer locations verifies visit completion." }],
    relatedCitySlugs: ["mumbai", "delhi", "ahmedabad", "indore"],
    relatedSolutionSlugs: ["field-employee-tracking", "attendance-management-software-india"]
  },
  {
    slug: "healthcare-field-workforce-software",
    title: "Healthcare Field Workforce Software",
    metaDescription: "Healthcare field workforce software for Indian providers. Manage home nursing, sample collection, and equipment service teams with visit verification.",
    eyebrow: "Healthcare",
    headline: "Healthcare Field Workforce Software for Indian Providers",
    lead: "Coordinate home nursing, diagnostic sample collection, biomedical equipment service, and home-care visits with scheduling, check-in, and care documentation.",
    challenges: ["Home visit completion not verified", "Sample collection routes inefficient", "Equipment calibration visits missed", "Care documentation not standardized", "Nurse and phlebotomist utilization unknown"],
    industries: [
      { name: "Diagnostics", description: "Home sample collection and lab logistics." },
      { name: "Home healthcare", description: "Nursing and elder care visits." },
      { name: "Biomedical engineering", description: "Hospital equipment service and calibration." },
      { name: "Pharma field", description: "Medical representative and patient support visits." }
    ],
    useCases: [{ title: "Home sample collection network", industry: "Diagnostics", problem: "40 phlebotomists, missed appointments.", solution: "Route work orders with patient check-in.", benefits: ["Route efficiency", "Collection proof", "Utilization reports"] }],
    caseStudy: { companyName: "CarePath Health (illustrative example)", location: "India", problem: ["Missed collections", "Undocumented nursing visits"], results: ["33% more first-visit collections", "Standardized care documentation"] },
    faqs: [{ question: "Can home nursing visits be documented?", answer: "Yes. Care checklists and family sign-off capture visit documentation." }],
    relatedCitySlugs: ["delhi", "mumbai", "bengaluru", "hyderabad"],
    relatedSolutionSlugs: ["field-employee-tracking", "attendance-management-software-india"]
  },
  {
    slug: "utility-workforce-management",
    title: "Utility Workforce Management Software",
    metaDescription: "Utility workforce management software for Indian utilities. Manage field crews for power, water, gas, and infrastructure maintenance operations.",
    eyebrow: "Utilities",
    headline: "Utility Workforce Management for Infrastructure Teams",
    lead: "Coordinate utility field crews for power distribution, water supply, pipeline maintenance, and infrastructure inspections with work orders and safety checklists.",
    challenges: ["Emergency breakdown response coordination", "Safety-critical maintenance documentation", "Crew dispatch across large geographic areas", "Regulatory inspection compliance", "Asset maintenance history not centralized"],
    industries: [
      { name: "Power distribution", description: "Line maintenance and fault repair crews." },
      { name: "Water & sanitation", description: "Pipeline and treatment plant maintenance." },
      { name: "Gas distribution", description: "Pipeline inspection and maintenance teams." },
      { name: "Municipal services", description: "Street lighting and urban infrastructure crews." }
    ],
    useCases: [{ title: "Power line fault response", industry: "Power", problem: "Emergency crew dispatch delays.", solution: "Priority work orders with nearest crew assignment.", benefits: ["Faster response", "Crew tracking", "Fault resolution logs"] }],
    caseStudy: { companyName: "InfraServe Utilities (illustrative example)", location: "India", problem: ["Slow emergency dispatch"], results: ["35% faster fault response", "Complete asset maintenance history"] },
    faqs: [{ question: "Can emergency breakdown crews be prioritized?", answer: "Yes. Priority work order queues route nearest available crews to emergencies." }],
    relatedCitySlugs: ["delhi", "mumbai", "hyderabad", "chennai"],
    relatedSolutionSlugs: ["maintenance-management-software", "telecom-field-operations-software"]
  },
  {
    slug: "telecom-field-operations-software",
    title: "Telecom Field Operations Software",
    metaDescription: "Telecom field operations software for Indian network teams. Manage tower maintenance, fiber rollout, and equipment service with work orders and checklists.",
    eyebrow: "Telecom",
    headline: "Telecom Field Operations Software for Network Teams",
    lead: "Manage tower maintenance, fiber rollout, network equipment service, and site inspections with structured work orders, offline checklists, and photo documentation.",
    challenges: ["Tower maintenance across remote locations", "Fiber rollout progress tracking", "Offline connectivity at tower sites", "Regulatory inspection documentation", "Subcontractor crew coordination"],
    industries: [
      { name: "Tower maintenance", description: "Telecom tower inspection and maintenance." },
      { name: "Fiber rollout", description: "FTTH and backbone fiber deployment." },
      { name: "Network equipment", description: "BTS and switching equipment service." },
      { name: "ISP operations", description: "Last-mile connectivity installation teams." }
    ],
    useCases: [{ title: "Tower maintenance across states", industry: "Tower maintenance", problem: "500 towers, paper checklists.", solution: "Tower-linked work orders with offline checklists.", benefits: ["Tower history", "Offline support", "Inspection compliance"] }],
    caseStudy: { companyName: "NetField Operations (illustrative example)", location: "India", problem: ["Paper tower records"], results: ["100% digital tower maintenance logs", "Faster fault resolution"] },
    faqs: [{ question: "Does TeamShastra work offline at tower sites?", answer: "Yes. Offline checklists and photo capture sync when connectivity returns." }],
    relatedCitySlugs: ["delhi", "mumbai", "bengaluru", "hyderabad"],
    relatedSolutionSlugs: ["utility-workforce-management", "field-service-management-software-india"]
  },
  {
    slug: "hvac-service-management",
    title: "HVAC Service Management Software",
    metaDescription: "HVAC service management software for Indian companies. Manage AMC contracts, chiller maintenance, breakdown dispatch, and service reports.",
    eyebrow: "HVAC Services",
    headline: "HVAC Service Management Software for Indian Companies",
    lead: "Manage HVAC AMC contracts, chiller and VRF maintenance, summer breakdown surges, and commercial cooling service across Indian cities.",
    challenges: ["Summer breakdown volume overwhelms dispatch", "AMC preventive visits frequently delayed", "Chiller maintenance requires specialized checklists", "Client equipment history not maintained", "Multi-city HVAC operations with no unified system"],
    industries: [
      { name: "Commercial HVAC", description: "Office towers, malls, and hotels." },
      { name: "Industrial cooling", description: "Factory and plant HVAC systems." },
      { name: "Residential AMC", description: "Split AC and VRF home service." },
      { name: "Data center cooling", description: "Precision cooling system maintenance." }
    ],
    useCases: [{ title: "200-client AMC provider", industry: "Commercial HVAC", problem: "Missed PM visits across cities.", solution: "Automated AMC scheduling with seasonal priority.", benefits: ["AMC compliance", "Summer priority", "Equipment history"] }],
    caseStudy: { companyName: "CoolServe India (illustrative example)", location: "India", problem: ["Summer dispatch chaos"], results: ["45% faster summer response", "32% more AMC visits on schedule"] },
    faqs: [{ question: "Can HVAC AMC contracts be managed?", answer: "Yes. Recurring PM work orders automate AMC visit scheduling." }],
    relatedCitySlugs: ["hyderabad", "mumbai", "delhi", "chennai"],
    relatedSolutionSlugs: ["field-service-management-software-india", "maintenance-management-software", "service-report-software"]
  },
  {
    slug: "cleaning-staff-management",
    title: "Cleaning Staff Management Software",
    metaDescription: "Cleaning staff management software for Indian FM and housekeeping companies. Track shift attendance, daily tasks, and photo-verified completion.",
    eyebrow: "Cleaning Services",
    headline: "Cleaning Staff Management Software for Housekeeping Teams",
    lead: "Manage housekeeping and cleaning staff across offices, malls, hospitals, and residential buildings with shift attendance, task work orders, and photo proof.",
    challenges: ["Cleaning task completion not verified", "Night shift attendance difficult to monitor", "Client disputes over service quality", "Multiple buildings with different cleaning schedules", "Staff turnover requires rapid onboarding"],
    industries: [
      { name: "Commercial cleaning", description: "Office and mall housekeeping." },
      { name: "Hospital housekeeping", description: "Healthcare facility cleaning with compliance needs." },
      { name: "Residential cleaning", description: "Society and apartment housekeeping." },
      { name: "Industrial cleaning", description: "Factory and warehouse cleaning crews." }
    ],
    useCases: [{ title: "Office tower daily cleaning", industry: "Commercial cleaning", problem: "Floor-wise tasks unverified.", solution: "Floor task work orders with photo proof.", benefits: ["Task accountability", "Photo verification", "Client reports"] }],
    caseStudy: { companyName: "CleanPro Facilities (illustrative example)", location: "India", problem: ["Unverified cleaning tasks"], results: ["Photo-verified daily tasks", "Improved client satisfaction"] },
    faqs: [{ question: "Can cleaning tasks be verified with photos?", answer: "Yes. Task work orders require photo proof of completed areas." }],
    relatedCitySlugs: ["mumbai", "delhi", "bengaluru", "pune"],
    relatedSolutionSlugs: ["facility-management-software", "attendance-management-software-india"]
  },
  {
    slug: "pest-control-management",
    title: "Pest Control Management Software",
    metaDescription: "Pest control management software for Indian service companies. Schedule recurring treatments, track technician routes, and maintain compliance records.",
    eyebrow: "Pest Control",
    headline: "Pest Control Management Software for Service Companies",
    lead: "Schedule recurring pest control treatments, track technician routes, capture treatment documentation, and maintain regulatory compliance records.",
    challenges: ["Recurring treatment schedules missed", "Chemical usage not logged per visit", "Restaurant and food facility compliance documentation", "Technician routes not optimized", "Contract renewal conversations lack service history"],
    industries: [
      { name: "Commercial pest control", description: "Restaurants, hotels, and offices." },
      { name: "Industrial pest control", description: "Food processing and warehouse facilities." },
      { name: "Residential pest control", description: "Society and home treatments." }
    ],
    useCases: [{ title: "Restaurant chain treatments", industry: "Commercial pest control", problem: "400 restaurants, missed monthly treatments.", solution: "Contract-linked recurring work orders.", benefits: ["Treatment scheduling", "Chemical logs", "FSSAI compliance"] }],
    caseStudy: { companyName: "PestGuard Services (illustrative example)", location: "India", problem: ["Missed treatments"], results: ["95% treatment schedule adherence", "Regulatory compliance documentation"] },
    faqs: [{ question: "Can recurring treatments be automated?", answer: "Yes. Contract-linked work orders schedule monthly and quarterly treatments." }],
    relatedCitySlugs: ["bengaluru", "mumbai", "hyderabad", "pune"],
    relatedSolutionSlugs: ["field-service-management-software-india", "service-report-software"]
  },
  {
    slug: "solar-installation-workforce-software",
    title: "Solar Installation Workforce Software",
    metaDescription: "Solar installation workforce software for Indian EPC companies. Track installation crews, project progress, and O&M visits with photo documentation.",
    eyebrow: "Solar & Renewable",
    headline: "Solar Installation Workforce Software for EPC Companies",
    lead: "Coordinate solar installation crews, track project milestones, document handover, and manage O&M visits across rooftop and utility-scale projects.",
    challenges: ["Installation progress not visible to project managers", "Handover documentation incomplete", "O&M visits across remote solar sites", "Crew utilization across multiple projects", "Offline connectivity at rural installation sites"],
    industries: [
      { name: "Rooftop solar EPC", description: "Residential and commercial rooftop installations." },
      { name: "Utility-scale solar", description: "Ground-mounted solar park installations." },
      { name: "Solar O&M", description: "Operations and maintenance for installed capacity." }
    ],
    useCases: [{ title: "Rooftop installation tracking", industry: "Rooftop solar", problem: "20 concurrent installations.", solution: "Project work orders with installation checklists.", benefits: ["Progress tracking", "Handover sign-off", "Installation photos"] }],
    caseStudy: { companyName: "SunTrack EPC (illustrative example)", location: "India", problem: ["No install progress visibility"], results: ["Standardized installation reports", "Faster project handover"] },
    faqs: [{ question: "Can solar O&M work offline at remote sites?", answer: "Yes. Offline inspection checklists sync when connectivity returns." }],
    relatedCitySlugs: ["jaipur", "ahmedabad", "pune", "bengaluru"],
    relatedSolutionSlugs: ["field-service-management-software-india", "construction-workforce-software"]
  },
  {
    slug: "water-purifier-service-management",
    title: "Water Purifier Service Management Software",
    metaDescription: "Water purifier service management software for Indian companies. Dispatch technicians, track AMC visits, and manage high-volume daily service calls.",
    eyebrow: "Water Purifier Service",
    headline: "Water Purifier Service Management for Indian Networks",
    lead: "Handle high-volume daily service calls, AMC visit scheduling, filter replacement tracking, and technician dispatch for water purifier brands and franchises.",
    challenges: ["100+ daily service calls with phone dispatch", "AMC renewal visits missed", "Parts usage not tracked per device", "Customer complaints about delayed service", "Franchise operations with inconsistent processes"],
    industries: [
      { name: "OEM service networks", description: "Brand-authorized service franchises." },
      { name: "Multi-brand service", description: "Third-party purifier repair companies." },
      { name: "AMC providers", description: "Annual maintenance contract management." }
    ],
    useCases: [{ title: "City-wide service franchise", industry: "OEM service", problem: "150 daily calls, phone dispatch.", solution: "Complaint-to-work-order with nearest-tech dispatch.", benefits: ["Faster dispatch", "Device service history", "AMC tracking"] }],
    caseStudy: { companyName: "PureFlow Service Network (illustrative example)", location: "India", problem: ["Phone dispatch chaos"], results: ["50% faster response", "Device-wise service history"] },
    faqs: [{ question: "Can AMC visits be scheduled automatically?", answer: "Yes. Device-linked AMC contracts trigger recurring service work orders." }],
    relatedCitySlugs: ["chennai", "delhi", "mumbai", "bengaluru"],
    relatedSolutionSlugs: ["field-service-management-software-india", "technician-management-software"]
  },
  {
    slug: "electrician-workforce-management",
    title: "Electrician Workforce Management Software",
    metaDescription: "Electrician workforce management software for Indian contractors. Dispatch electricians, track jobs, capture signatures, and manage AMC contracts.",
    eyebrow: "Electrical Services",
    headline: "Electrician Workforce Management for Indian Contractors",
    lead: "Dispatch licensed electricians, track jobs across zones, capture customer signatures, and maintain wiring project documentation for contractors and AMC providers.",
    challenges: ["Electricians dispatched via phone with no job tracking", "Customer signatures rarely collected", "Wiring project documentation for inspection authorities", "AMC visits for housing societies missed", "Multi-zone operations with no central dashboard"],
    industries: [
      { name: "Electrical contracting", description: "Licensed contractors for commercial and residential work." },
      { name: "Industrial electrical", description: "Factory and plant electrical maintenance." },
      { name: "Society AMC", description: "Housing society electrical AMC providers." }
    ],
    useCases: [{ title: "45-electrician contractor", industry: "Electrical contracting", problem: "Zone-based phone dispatch.", solution: "Zone work orders with photo and signature capture.", benefits: ["Zone dispatch", "Digital records", "Customer signatures"] }],
    caseStudy: { companyName: "VoltServe Contractors (illustrative example)", location: "India", problem: ["Lost job records"], results: ["100% digital job records", "Improved AMC renewals"] },
    faqs: [{ question: "Can electrician jobs include photo documentation?", answer: "Yes. Before/after photos and wiring documentation support inspection compliance." }],
    relatedCitySlugs: ["pune", "mumbai", "delhi", "bengaluru"],
    relatedSolutionSlugs: ["technician-management-software", "construction-workforce-software", "digital-work-orders"]
  },
  {
    slug: "plumbing-service-software",
    title: "Plumbing Service Software",
    metaDescription: "Plumbing service software for Indian companies. Dispatch plumbers, track jobs, manage society contracts, and capture completion proof.",
    eyebrow: "Plumbing Services",
    headline: "Plumbing Service Software for Indian Companies",
    lead: "Dispatch plumbers for breakdown calls, society maintenance contracts, and construction projects with work orders, photo proof, and customer sign-off.",
    challenges: ["Emergency plumbing calls need fastest dispatch", "Society contract visits not tracked", "Construction project plumbing phases undocumented", "Customer disputes without completion proof", "Plumber skill matching for specialized jobs"],
    industries: [
      { name: "Residential plumbing", description: "Home breakdown and repair services." },
      { name: "Society maintenance", description: "Apartment complex plumbing AMC." },
      { name: "Commercial plumbing", description: "Office and mall plumbing maintenance." },
      { name: "Construction plumbing", description: "New project plumbing installation." }
    ],
    useCases: [{ title: "Society plumbing AMC", industry: "Society maintenance", problem: "30 societies, missed quarterly visits.", solution: "Society-linked AMC work orders.", benefits: ["AMC compliance", "Society history", "Resident satisfaction"] }],
    caseStudy: { companyName: "PipeLine Services (illustrative example)", location: "India", problem: ["Missed society AMC visits"], results: ["50% more AMC visits on schedule", "Society-wise service history"] },
    faqs: [{ question: "Can emergency plumbing calls be prioritized?", answer: "Yes. Priority work order queues route nearest available plumbers." }],
    relatedCitySlugs: ["mumbai", "pune", "bengaluru", "chennai"],
    relatedSolutionSlugs: ["field-service-management-software-india", "digital-work-orders", "construction-workforce-software"]
  }
];

export const solutionMap = Object.fromEntries(solutions.map((s) => [s.slug, s])) as Record<string, SolutionPage>;

export function getSolution(slug: string): SolutionPage | undefined {
  return solutionMap[slug];
}
