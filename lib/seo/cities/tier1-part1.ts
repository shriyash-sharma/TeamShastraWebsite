import type { CityProfile } from "../types";

/** Shared benefits copy used across city pages — localized in content builder. */
export const standardBenefits = [
  "Reduce paperwork and manual coordination across field teams",
  "Increase technician and field staff productivity with clearer daily schedules",
  "Improve SLA performance with real-time job status and dispatch visibility",
  "Improve customer satisfaction through faster response and digital proof of work",
  "Reduce operational costs by eliminating duplicate data entry and missed visits",
  "Gain better workforce visibility across branches, sites, and territories",
  "Improve compliance with attendance records, service reports, and audit trails",
  "Monitor operations in real time from web dashboard and mobile apps"
];

export const tier1Cities: CityProfile[] = [
  {
    slug: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    tier: "tier-1",
    localAreas: ["Andheri", "Powai", "Navi Mumbai", "Thane", "BKC", "Lower Parel", "Malad", "Goregaon", "Vikhroli", "Turbhe MIDC"],
    nearbyCitySlugs: ["pune", "nashik", "thane", "nagpur"],
    metaDescription:
      "Workforce management software for Mumbai businesses. Track field teams across Andheri, BKC, Navi Mumbai, and Thane with GPS attendance, work orders, and service reports.",
    challenges: [
      "Extreme traffic makes route planning and SLA adherence difficult for field teams moving between Andheri, BKC, and Navi Mumbai",
      "Large facility management companies manage hundreds of staff across high-rise buildings with manual attendance registers",
      "Logistics and last-mile delivery operators struggle to verify actual site visits across dense urban zones",
      "Electrical and MEP contractors coordinate dozens of technicians across concurrent construction projects",
      "Corporate offices in Lower Parel and BKC expect rapid response from AMC and housekeeping vendors",
      "Monsoon season disrupts field schedules and makes paper-based job tracking unreliable"
    ],
    whyIntro:
      "Mumbai is India's commercial capital, where service businesses operate at scale across skyscrapers, industrial estates, ports, and residential townships. Field teams here rarely work from a single location — facility staff rotate across buildings, technicians navigate unpredictable traffic, and logistics crews complete dozens of stops per shift. TeamShastra gives Mumbai operators a single platform to manage attendance, dispatch, work orders, and proof of service without relying on phone calls and spreadsheets.",
    industries: [
      { name: "Financial services & corporate offices", description: "Banks, insurance firms, and BFSI back-offices in BKC and Lower Parel depend on facility vendors, security agencies, and IT maintenance teams that need auditable attendance and SLA-driven work orders." },
      { name: "Facility management", description: "Large FM companies manage housekeeping, HVAC, electrical, and security staff across 20–300+ sites in Mumbai and Navi Mumbai, making centralized workforce visibility essential." },
      { name: "Construction & MEP", description: "High-rise projects across the western suburbs require coordinated electrical, plumbing, fire-fighting, and elevator maintenance crews with daily site reporting." },
      { name: "Logistics & warehousing", description: "Bhiwandi, Taloja, and Navi Mumbai warehouses run delivery fleets and hub staff who need GPS-verified attendance and dispatch." },
      { name: "Hospitality & retail chains", description: "Hotels, restaurants, and retail outlets across Mumbai manage shift-based staff, preventive maintenance, and equipment service visits." },
      { name: "Healthcare & diagnostics", description: "Hospitals, labs, and home-care providers dispatch nurses, sample collection staff, and biomedical engineers across the city." }
    ],
    useCases: [
      {
        title: "Facility management company across 25 commercial towers",
        industry: "Facility management",
        problem: "A Mumbai-based FM company managed 280 housekeeping and maintenance staff across 25 buildings in Andheri, Goregaon, and BKC using WhatsApp groups and paper registers. Supervisors could not verify attendance, and clients frequently disputed billing due to missing service proof.",
        solution: "TeamShastra introduced GPS attendance with geofencing per building, digital work orders for daily tasks, and photo-based completion reports shared with client facility heads.",
        benefits: ["GPS attendance per building", "Digital work orders with task checklists", "Photo reports for client billing", "Reduced attendance disputes", "Supervisor dashboard for all 25 sites"]
      },
      {
        title: "Electrical contractor serving South Mumbai commercial clients",
        industry: "Electrical services",
        problem: "A contractor with 45 electricians handled breakdown calls, AMC visits, and new installation projects simultaneously. Job assignments went through phone calls, and completed work was rarely documented with customer sign-off.",
        solution: "Dispatchers assign jobs through TeamShastra, electricians receive mobile work orders, capture photos and signatures on-site, and managers track open jobs by zone.",
        benefits: ["Faster job assignment", "Customer signatures on every visit", "Before/after photo documentation", "Zone-wise technician tracking", "Improved AMC renewal conversations"]
      },
      {
        title: "Last-mile logistics operator in Navi Mumbai",
        industry: "Logistics",
        problem: "A delivery company with 120 riders across Turbhe and Airoli hubs faced challenges verifying shift attendance and tracking failed delivery revisits.",
        solution: "Riders check in at hub geofences, receive route-linked tasks, and mark delivery outcomes with photo proof for disputed cases.",
        benefits: ["Hub-based geofence attendance", "Delivery outcome tracking", "Failed delivery revisit assignment", "Daily rider productivity reports"]
      },
      {
        title: "HVAC AMC provider for Mumbai hotels",
        industry: "HVAC services",
        problem: "An HVAC service company maintained chillers and split units for 18 hotels. Preventive maintenance schedules were tracked in Excel, and technicians often missed quarterly visits.",
        solution: "TeamShastra schedules recurring PM work orders, alerts technicians before due dates, and records checklist completion with photos at each property.",
        benefits: ["Automated PM scheduling", "Visit reminders for technicians", "Checklist-based service reports", "Hotel-wise service history"]
      },
      {
        title: "Security agency deploying guards across MMR",
        industry: "Security services",
        problem: "A security agency staffed 400+ guards across residential societies, warehouses, and corporate parks. Shift changes and relief guard deployment were managed manually, causing coverage gaps.",
        solution: "Shift rosters, relief guard assignments, and site check-ins through TeamShastra give control room staff real-time visibility of who is on duty at each location.",
        benefits: ["Shift and relief management", "Site check-in verification", "Coverage gap alerts", "Client-wise guard deployment reports"]
      },
      {
        title: "Water purifier service network in western suburbs",
        industry: "Home services",
        problem: "A water purifier brand's Mumbai franchise handled 200+ daily service calls across Malad, Kandivali, and Borivali with a small coordination team struggling to track technician locations.",
        solution: "Customer complaints convert to work orders, nearest available technician gets assigned, and service completion with parts used is recorded before leaving the site.",
        benefits: ["Nearest-tech dispatch", "Parts usage tracking", "Same-day closure rates improved", "Customer service history per device"]
      }
    ],
    caseStudy: {
      companyName: "Harborline Facility Services (illustrative example)",
      location: "Mumbai — Andheri, BKC, and Navi Mumbai",
      problem: [
        "Manual attendance across 22 commercial buildings",
        "Lost work orders and missed preventive maintenance visits",
        "Poor visibility into technician location during peak traffic hours",
        "Client disputes over billed man-hours without proof of service"
      ],
      results: [
        "38% faster work order completion after digital dispatch",
        "25% reduction in travel-related delays through better zone assignment",
        "80% reduction in paper-based reporting",
        "Improved client satisfaction scores on quarterly FM reviews"
      ]
    },
    faqs: [
      { question: "Is TeamShastra suitable for facility management companies in Mumbai?", answer: "Yes. Facility management companies use TeamShastra to manage attendance, daily tasks, and work orders across multiple buildings in Andheri, BKC, Thane, and Navi Mumbai with geofencing and photo reports." },
      { question: "Can logistics companies in Mumbai use TeamShastra for rider tracking?", answer: "Yes. Logistics and delivery businesses use GPS attendance, hub geofencing, and task tracking to verify rider shifts and delivery outcomes across Mumbai Metropolitan Region." },
      { question: "Does TeamShastra support offline mode in areas with poor network?", answer: "Yes. Field staff can complete work orders, capture photos, and record attendance offline in basement parking, industrial zones, and areas with weak connectivity, syncing when network returns." },
      { question: "Can security agencies in Mumbai manage guard shifts with TeamShastra?", answer: "Yes. Security agencies use shift management, site check-ins, and relief guard assignment to maintain coverage across residential, commercial, and warehouse sites." },
      { question: "How long does implementation take for a Mumbai business?", answer: "Most teams begin with a pilot across one zone or business unit within 1–2 weeks, then expand to additional sites. Full rollout for multi-site FM companies typically takes 3–6 weeks." },
      { question: "Can TeamShastra track technicians during Mumbai monsoon disruptions?", answer: "Yes. Real-time job status and rescheduling help managers adapt when rain or flooding affects travel, keeping customers informed about revised visit windows." },
      { question: "Does TeamShastra support multiple branches across MMR?", answer: "Yes. Businesses operating in Mumbai, Thane, and Navi Mumbai can manage branches, teams, and territories from one account with role-based access." },
      { question: "Can HVAC and MEP contractors in Mumbai use work order management?", answer: "Yes. Contractors assign breakdown and AMC jobs, attach checklists, capture photos, and maintain equipment service history per client site." },
      { question: "Is GPS attendance available for field teams in Mumbai?", answer: "Yes. GPS-based check-in and geofencing verify attendance at customer sites, warehouses, and project locations." },
      { question: "Can retail chains in Mumbai manage store maintenance teams?", answer: "Yes. Retail operators schedule preventive maintenance, track vendor technicians, and maintain service records across multiple store locations." },
      { question: "Does TeamShastra work on Android phones used by technicians?", answer: "Yes. TeamShastra offers Android and web access, with PWA support for field staff who need mobile-first workflows." },
      { question: "Can healthcare field staff in Mumbai be managed with TeamShastra?", answer: "Yes. Home-care providers, sample collection teams, and equipment service engineers use TeamShastra for visit scheduling, attendance, and digital service reports." }
    ]
  },
  {
    slug: "delhi",
    name: "Delhi",
    state: "Delhi NCR",
    tier: "tier-1",
    localAreas: ["Connaught Place", "Dwarka", "Rohini", "Okhla", "Nehru Place", "Saket", "Mayur Vihar", "Anand Vihar", "ITO", "Karol Bagh"],
    nearbyCitySlugs: ["noida", "gurugram", "faridabad", "ghaziabad"],
    metaDescription:
      "Workforce management software for Delhi businesses. Manage field teams, security staff, and service operations across Delhi NCR with GPS attendance and work orders.",
    challenges: [
      "Government and PSU contractors must maintain strict attendance and service documentation for audits",
      "Security agencies deploy thousands of guards across government buildings, malls, and residential colonies",
      "Healthcare providers dispatch home-care nurses and sample collection staff across wide geographic zones",
      "Extreme weather — heat, fog, and pollution — disrupts field schedules and travel planning",
      "Corporate services firms coordinate multi-site teams across Delhi and adjoining NCR cities",
      "Telecom and tower maintenance crews work in remote pockets of the NCR with intermittent connectivity"
    ],
    whyIntro:
      "Delhi NCR is one of India's largest employment hubs for security services, government contracting, healthcare field operations, and corporate facility management. Businesses here manage staff across government complexes, hospitals, metro corridors, and sprawling residential colonies. TeamShastra helps Delhi operators replace manual registers and phone-based coordination with GPS attendance, digital work orders, and audit-ready service records.",
    industries: [
      { name: "Government contractors", description: "Civil, electrical, and maintenance contractors serving government buildings need documented attendance, work orders, and completion proof for billing and compliance." },
      { name: "Security agencies", description: "Delhi has one of India's largest security workforces, with guards deployed across shifts at offices, malls, banks, and residential societies." },
      { name: "Healthcare & diagnostics", description: "Hospitals, polyclinics, and diagnostic chains dispatch phlebotomists, nurses, and biomedical engineers across Delhi and NCR." },
      { name: "Corporate services", description: "IT parks, coworking spaces, and enterprise offices in Nehru Place, Saket, and Aerocity rely on FM, cleaning, and HVAC vendors." },
      { name: "Hospitality", description: "Hotels, banquets, and restaurant chains manage kitchen equipment service, housekeeping shifts, and facility maintenance." },
      { name: "Telecom & infrastructure", description: "Tower maintenance, fiber rollout, and network equipment service teams operate across dense urban and semi-urban NCR zones." }
    ],
    useCases: [
      {
        title: "Security agency with 500 guards across Delhi",
        industry: "Security services",
        problem: "A Delhi security agency deployed guards at 80+ client sites but relied on paper muster rolls. Clients reported coverage gaps during shift changes, and billing disputes were frequent.",
        solution: "TeamShastra manages shift rosters, guard check-ins at geofenced sites, and relief deployment from a central control dashboard.",
        benefits: ["Verified shift attendance", "Relief guard assignment", "Site-wise coverage reports", "Reduced billing disputes"]
      },
      {
        title: "Government building maintenance contractor",
        industry: "Government contracting",
        problem: "A contractor handling electrical and civil maintenance for government offices needed timestamped proof of every visit for audit submissions.",
        solution: "Work orders are assigned with mandatory photo reports, GPS-stamped check-in, and supervisor approval before closure.",
        benefits: ["Audit-ready service records", "GPS-stamped visits", "Supervisor approval workflow", "Department-wise job history"]
      },
      {
        title: "Home healthcare provider in South Delhi",
        industry: "Healthcare",
        problem: "A home nursing company coordinated 35 nurses visiting patients in Saket, Greater Kailash, and Dwarka with no central visibility of visit completion.",
        solution: "Nurses receive daily visit schedules, check in at patient locations, and complete care checklists with family sign-off.",
        benefits: ["Visit verification at patient home", "Care checklist completion", "Family sign-off capture", "Nurse utilization reports"]
      },
      {
        title: "Telecom tower maintenance team",
        industry: "Telecom",
        problem: "A telecom vendor maintained towers across outer Delhi and NCR with technicians submitting reports via WhatsApp photos that were hard to organize.",
        solution: "Structured work orders per tower site, offline-capable checklists, and photo uploads synced to a searchable maintenance log.",
        benefits: ["Tower-wise maintenance history", "Offline checklist support", "Organized photo evidence", "Faster fault resolution tracking"]
      },
      {
        title: "Commercial cleaning company for corporate parks",
        industry: "Cleaning services",
        problem: "A cleaning company staffed 120 workers across 15 corporate parks in Gurgaon-Delhi corridor with inconsistent attendance tracking.",
        solution: "Geofenced attendance per building, shift planning, and daily task work orders with photo proof of completed areas.",
        benefits: ["Building-level geofencing", "Shift roster management", "Task-based work orders", "Client-ready daily reports"]
      },
      {
        title: "HVAC service provider for Delhi hospitals",
        industry: "HVAC",
        problem: "Hospital HVAC systems require strict preventive maintenance schedules. A service company missed quarterly visits at 3 of 12 hospitals due to manual scheduling.",
        solution: "Recurring PM work orders with escalation alerts ensure technicians complete hospital visits on schedule with checklist documentation.",
        benefits: ["Recurring PM automation", "Escalation for overdue visits", "Hospital compliance checklists", "Equipment service logs"]
      }
    ],
    caseStudy: {
      companyName: "Capital Guard & Facility Solutions (illustrative example)",
      location: "Delhi — Central, South, and East Delhi",
      problem: [
        "Paper-based guard attendance across 60 client sites",
        "No real-time view of relief guard deployment",
        "Missed facility maintenance tasks at government offices",
        "Difficulty producing audit documentation for government contracts"
      ],
      results: [
        "42% reduction in attendance-related billing disputes",
        "30% faster relief guard deployment during shift gaps",
        "90% of maintenance jobs closed with photo proof",
        "Improved compliance scores on government contract reviews"
      ]
    },
    faqs: [
      { question: "Can security agencies in Delhi use TeamShastra?", answer: "Yes. Security agencies manage guard shifts, site check-ins, relief deployment, and attendance reports across Delhi and NCR client locations." },
      { question: "Is TeamShastra suitable for government contractors in Delhi?", answer: "Yes. Contractors use GPS-verified attendance, structured work orders, and photo reports to maintain audit-ready documentation for government clients." },
      { question: "Does TeamShastra support healthcare field teams in Delhi?", answer: "Yes. Home healthcare, diagnostics, and equipment service teams use visit scheduling, location check-in, and digital service reports." },
      { question: "Can TeamShastra manage teams across Delhi and Noida together?", answer: "Yes. Multi-branch and multi-city support allows NCR businesses to manage Delhi, Noida, Gurugram, and Faridabad teams from one platform." },
      { question: "Does TeamShastra work offline in low-connectivity areas?", answer: "Yes. Technicians in outer Delhi and semi-urban NCR zones can work offline and sync when connectivity returns." },
      { question: "Can attendance be tracked using GPS in Delhi?", answer: "Yes. GPS attendance and geofencing verify check-ins at client sites, government buildings, and project locations." },
      { question: "How long does implementation take?", answer: "Most Delhi businesses start with a pilot team in 1–2 weeks and expand across sites over 3–6 weeks depending on team size." },
      { question: "Can telecom maintenance teams use TeamShastra?", answer: "Yes. Tower and network maintenance teams use work orders, offline checklists, and photo documentation per site." },
      { question: "Does TeamShastra support shift management for 24/7 operations?", answer: "Yes. Security, healthcare, and facility teams with rotating shifts use roster planning and shift-wise attendance." },
      { question: "Can cleaning companies track staff across multiple corporate buildings?", answer: "Yes. Geofenced attendance and task-based work orders help cleaning companies verify work completion per floor and building." },
      { question: "Is TeamShastra available on Android for field staff?", answer: "Yes. Android app and PWA support enable mobile workflows for guards, technicians, and service staff." },
      { question: "Can TeamShastra help with SLA tracking for corporate clients?", answer: "Yes. Work order timestamps, response tracking, and completion reports help meet SLA requirements for enterprise FM contracts." }
    ]
  }
];
