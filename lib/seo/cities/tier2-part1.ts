import type { CityProfile } from "../types";

/** Factory for tier-2/3 city profiles with unique local data. */
function city(partial: CityProfile): CityProfile {
  return partial;
}

export const tier2Cities: CityProfile[] = [
  city({
    slug: "indore",
    name: "Indore",
    state: "Madhya Pradesh",
    tier: "tier-2",
    localAreas: ["Pithampur", "Vijay Nagar", "Scheme 54", "Rau", "Sanwer Road", "AB Road", "Palasia", "MR 10"],
    nearbyCitySlugs: ["bhopal", "nagpur", "udaipur", "raipur"],
    metaDescription: "Workforce management software for Indore businesses. Manage distribution, retail, textile, and service teams across Pithampur and Vijay Nagar.",
    challenges: ["Pithampur auto and pharma clusters need multi-shift maintenance coordination", "Distribution and FMCG networks cover Malwa region with limited supervisor visibility", "Food processing units require hygiene-compliant service documentation", "Retail chains across Indore manage store maintenance and security staff", "Growing IT and BPO offices in Vijay Nagar need facility vendor management", "Seasonal agri-business peaks require temporary workforce scaling"],
    whyIntro: "Indore is Central India's commercial hub, known for pharmaceuticals, automobile components, food processing, and a thriving retail economy. Distribution companies route sales and service teams across Madhya Pradesh, while Pithampur factories run maintenance crews around the clock. TeamShastra helps Indore businesses replace manual coordination with GPS attendance, digital work orders, and field team visibility.",
    industries: [
      { name: "Distribution & retail", description: "Indore's wholesale markets and retail chains coordinate sales reps, delivery staff, and store maintenance teams." },
      { name: "Automobile & manufacturing", description: "Pithampur industrial area hosts auto component and engineering plants with dedicated maintenance operations." },
      { name: "Pharma & food processing", description: "Pharma units and snack food manufacturers require documented facility and equipment maintenance." },
      { name: "Textiles", description: "Processing and garment units manage shift workers and equipment service across industrial zones." },
      { name: "Service centers", description: "Two-wheeler, appliance, and equipment service networks handle high daily field visit volumes." }
    ],
    useCases: [
      { title: "FMCG distribution sales team across Malwa", industry: "FMCG", problem: "A distributor tracked 25 sales reps visiting 300 retailers weekly with no visit proof.", solution: "Retailer check-in, order notes, and weekly territory coverage dashboards.", benefits: ["Visit verification", "Territory analytics", "Improved retail coverage"] },
      { title: "Auto component plant maintenance in Pithampur", industry: "Manufacturing", problem: "PM schedules for CNC and press machines were tracked in notebooks.", solution: "Machine-linked recurring work orders with checklist completion.", benefits: ["PM automation", "Machine service history", "Reduced downtime"] },
      { title: "Appliance service franchise", industry: "Service centers", problem: "45 technicians handled 80+ daily calls with phone-based dispatch.", solution: "Complaint-to-work-order flow with nearest-tech assignment.", benefits: ["Faster dispatch", "Same-day closure", "Customer history"] },
      { title: "Food processing plant pest control", industry: "Food processing", problem: "Monthly treatments at 12 units required regulatory documentation.", solution: "Recurring treatment work orders with chemical logs and photos.", benefits: ["Compliance records", "Treatment proof", "Schedule adherence"] },
      { title: "Retail chain store maintenance", industry: "Retail", problem: "15 stores needed coordinated HVAC and electrical maintenance.", solution: "Store-wise AMC work orders with vendor technician tracking.", benefits: ["Store-wise logs", "AMC compliance", "Vendor accountability"] }
    ],
    caseStudy: { companyName: "Malwa Distribution Services (illustrative example)", location: "Indore — Vijay Nagar and Pithampur", problem: ["No sales visit verification", "Missed factory PM visits", "Phone-based service dispatch"], results: ["28% more verified retail visits", "35% more PM visits on schedule", "40% faster service dispatch"] },
    faqs: [
      { question: "Is TeamShastra suitable for distribution companies in Indore?", answer: "Yes. Sales and delivery teams use visit check-in, route tracking, and territory reports." },
      { question: "Can Pithampur manufacturing plants use TeamShastra?", answer: "Yes. Maintenance crews use PM work orders and equipment service history." },
      { question: "Does TeamShastra support food processing compliance?", answer: "Yes. Treatment and maintenance checklists with photo proof support regulatory needs." },
      { question: "Can appliance service centers track technicians?", answer: "Yes. Daily dispatch, arrival verification, and completion proof are supported." },
      { question: "How long does implementation take?", answer: "Most Indore businesses pilot in 1–2 weeks and expand over 3–4 weeks." },
      { question: "Does TeamShastra support GPS attendance?", answer: "Yes. GPS check-in verifies attendance at plants, stores, and customer sites." },
      { question: "Is offline mode available?", answer: "Yes. Field teams sync when connectivity returns." },
      { question: "Can retail chains manage multi-store maintenance?", answer: "Yes. Store-wise work orders and vendor tracking support retail operations." },
      { question: "Does TeamShastra work on Android?", answer: "Yes. Android and PWA support mobile workflows." },
      { question: "Can businesses manage Indore and Bhopal teams?", answer: "Yes. Multi-branch support covers MP operations." }
    ]
  }),
  city({
    slug: "nagpur",
    name: "Nagpur",
    state: "Maharashtra",
    tier: "tier-2",
    localAreas: ["MIDC Hingna", "MIHAN", "Kamptee Road", "Civil Lines", "Wardha Road", "Butibori", "Sitabuldi", "Dharampeth"],
    nearbyCitySlugs: ["indore", "nashik", "bhopal", "raipur"],
    metaDescription: "Workforce management software for Nagpur businesses. Track field teams across MIHAN, Hingna MIDC, and Butibori with attendance and work orders.",
    challenges: ["MIHAN aerospace and logistics zone requires multi-vendor facility coordination", "Butibori industrial estate runs factory maintenance across diverse sectors", "Orange belt logistics connects Nagpur to central India with transport workforce needs", "Government and defense establishments require documented service attendance", "Growing healthcare infrastructure dispatches field staff across Vidarbha", "Summer heat impacts outdoor maintenance and construction crews"],
    whyIntro: "Nagpur sits at India's geographic center, making it a logistics, manufacturing, and government services hub. MIHAN SEZ, Hingna MIDC, and Butibori industrial estates employ thousands of maintenance and operations staff, while healthcare and logistics networks extend across Vidarbha. TeamShastra helps Nagpur operators manage distributed field teams with verifiable attendance and structured work orders.",
    industries: [
      { name: "Logistics & warehousing", description: "Central India's logistics hub coordinates warehouse staff, drivers, and hub operations." },
      { name: "Aerospace & manufacturing", description: "MIHAN and Hingna host aerospace, engineering, and component manufacturing." },
      { name: "Healthcare", description: "Hospital networks and diagnostic chains dispatch staff across Nagpur and Vidarbha." },
      { name: "Government contracting", description: "Civil and maintenance contractors serve government and defense establishments." },
      { name: "Retail & distribution", description: "Regional distribution centers coordinate sales and delivery teams." }
    ],
    useCases: [
      { title: "MIHAN logistics warehouse staffing", industry: "Logistics", problem: "120 warehouse workers across 4 MIHAN facilities with shift attendance disputes.", solution: "Geofenced shift check-in and handover documentation.", benefits: ["Shift accuracy", "Handover logs", "Billing clarity"] },
      { title: "Butibori factory maintenance", industry: "Manufacturing", problem: "Contractor served 6 factories with overlapping breakdown calls.", solution: "Priority work order queue with zone-based technician dispatch.", benefits: ["Faster response", "Factory-wise history", "Priority handling"] },
      { title: "Government building electrical maintenance", industry: "Government contracting", problem: "Audit-required documentation for every maintenance visit.", solution: "GPS-stamped work orders with photo reports and supervisor approval.", benefits: ["Audit trails", "Photo proof", "Approval workflow"] },
      { title: "Diagnostic home collection", industry: "Healthcare", problem: "30 phlebotomists across Nagpur with missed appointments.", solution: "Route work orders with patient location check-in.", benefits: ["Route optimization", "Collection proof", "Fewer missed visits"] },
      { title: "Orange transport fleet coordination", industry: "Agriculture logistics", problem: "Seasonal transport crews during harvest with manual attendance.", solution: "Depot geofence check-in and trip-linked task tracking.", benefits: ["Seasonal scaling", "Depot attendance", "Trip records"] }
    ],
    caseStudy: { companyName: "Vidarbha Operations Group (illustrative example)", location: "Nagpur — MIHAN and Butibori", problem: ["Warehouse shift disputes", "Missed factory PM visits", "Paper government service records"], results: ["30% fewer attendance disputes", "38% more PM visits completed", "100% digital government visit records"] },
    faqs: [
      { question: "Can MIHAN logistics companies use TeamShastra?", answer: "Yes. Warehouse geofencing and shift attendance support MIHAN operations." },
      { question: "Is TeamShastra suitable for Butibori factories?", answer: "Yes. Maintenance work orders and equipment logs support industrial estates." },
      { question: "Can government contractors maintain audit records?", answer: "Yes. GPS-stamped visits and photo reports support compliance." },
      { question: "Does TeamShastra support healthcare field teams?", answer: "Yes. Home collection and visit verification are supported." },
      { question: "How long does implementation take?", answer: "Nagpur businesses typically pilot in 1–2 weeks." },
      { question: "Does TeamShastra support GPS attendance?", answer: "Yes." },
      { question: "Is offline mode available?", answer: "Yes." },
      { question: "Can seasonal workforce be managed?", answer: "Yes. Flexible team and shift management supports seasonal scaling." },
      { question: "Does TeamShastra work on Android?", answer: "Yes." },
      { question: "Can Nagpur and Indore teams be managed together?", answer: "Yes. Multi-branch support is available." }
    ]
  }),
  city({
    slug: "nashik",
    name: "Nashik",
    state: "Maharashtra",
    tier: "tier-2",
    localAreas: ["Satpur MIDC", "Ambad", "Sinnar", "Igatpuri", "Gangapur Road", "CIDCO", "Wine City", "Trimbak Road"],
    nearbyCitySlugs: ["mumbai", "pune", "nagpur", "aurangabad"],
    metaDescription: "Workforce management software for Nashik businesses. Manage manufacturing, wine industry, and service teams across Satpur MIDC and Sinnar.",
    challenges: ["Satpur and Ambad MIDC factories run maintenance teams across automotive and manufacturing", "Wine and food processing industry needs hygiene-compliant facility services", "Sinnar industrial growth creates new facility management demand", "Nashik-Pune highway logistics connects industrial corridors with transport staff", "Construction boom in CIDCO areas requires coordinated MEP crews", "Seasonal tourism in Igatpuri affects hospitality staffing"],
    whyIntro: "Nashik bridges Mumbai and Pune industrially, with major MIDC estates, a growing wine and food processing sector, and expanding residential development. Manufacturing maintenance, logistics, and home service networks all require better field coordination. TeamShastra supports Nashik businesses with attendance tracking, work orders, and mobile service reports.",
    industries: [
      { name: "Manufacturing & MIDC", description: "Satpur, Ambad, and Sinnar industrial areas run diverse manufacturing with maintenance needs." },
      { name: "Wine & food processing", description: "Nashik's wine valley and food units require facility and equipment service compliance." },
      { name: "Logistics", description: "Highway-linked logistics hubs coordinate transport and warehouse staff." },
      { name: "Construction & real estate", description: "CIDCO and suburban development drives MEP and finishing service demand." },
      { name: "Automotive components", description: "Auto supply chain units in MIDC need equipment maintenance tracking." }
    ],
    useCases: [
      { title: "Satpur MIDC maintenance contractor", industry: "Manufacturing", problem: "Served 10 MIDC clients with paper job sheets.", solution: "Digital work orders with machine-wise service history.", benefits: ["Digital records", "Machine history", "Faster dispatch"] },
      { title: "Wine facility HVAC and cleaning", industry: "Food & beverage", problem: "5 wineries needed documented sanitation and HVAC PM visits.", solution: "Compliance checklists with photo proof per facility.", benefits: ["Hygiene documentation", "PM scheduling", "Audit support"] },
      { title: "Highway logistics depot staff", industry: "Logistics", problem: "Driver and loader attendance across 3 depots disputed.", solution: "Depot geofence attendance and shift exports.", benefits: ["Depot attendance", "Shift reports", "Reduced disputes"] },
      { title: "Residential society MEP services", industry: "Construction", problem: "20 new societies needed warranty-period defect tracking.", solution: "Defect work orders with photo documentation and builder sign-off.", benefits: ["Defect tracking", "Builder reports", "Warranty documentation"] },
      { title: "Two-wheeler service network", industry: "Service centers", problem: "60 daily service calls across Nashik city.", solution: "Nearest-service-center dispatch with arrival check-in.", benefits: ["Faster dispatch", "Arrival proof", "Service history"] }
    ],
    caseStudy: { companyName: "Godavari Industrial Services (illustrative example)", location: "Nashik — Satpur and Sinnar", problem: ["Paper MIDC job records", "Missed winery PM visits", "Depot attendance disputes"], results: ["70% less paperwork", "45% more PM visits on time", "25% fewer depot disputes"] },
    faqs: [
      { question: "Can Satpur MIDC factories use TeamShastra?", answer: "Yes. Maintenance work orders and equipment logs are supported." },
      { question: "Is TeamShastra suitable for wine facility maintenance?", answer: "Yes. Compliance checklists and photo proof support winery operations." },
      { question: "Can logistics depots verify attendance?", answer: "Yes. Geofenced depot check-in supports transport operations." },
      { question: "Does TeamShastra support construction defect tracking?", answer: "Yes. Defect work orders with photo proof and sign-off are available." },
      { question: "How long does implementation take?", answer: "1–2 weeks for pilot, 3–4 weeks for full rollout." },
      { question: "Does TeamShastra support GPS attendance?", answer: "Yes." },
      { question: "Is offline mode available?", answer: "Yes." },
      { question: "Can Nashik and Mumbai teams be managed together?", answer: "Yes." },
      { question: "Does TeamShastra work on Android?", answer: "Yes." },
      { question: "Can service centers dispatch technicians?", answer: "Yes. Daily dispatch and arrival verification are supported." }
    ]
  }),
  city({
    slug: "surat",
    name: "Surat",
    state: "Gujarat",
    tier: "tier-2",
    localAreas: ["Ring Road", "Hazira", "Ichhapore", "Pandesara", "Udhna", "Varachha", "Adajan", "Sachin GIDC"],
    nearbyCitySlugs: ["ahmedabad", "vadodara", "rajkot", "mumbai"],
    metaDescription: "Workforce management software for Surat businesses. Manage diamond, textile, and chemical industry teams across Pandesara and Hazira.",
    challenges: ["Diamond processing units manage security and facility staff across dense commercial zones", "Textile mills in Pandesara run multi-shift operations with complex attendance", "Hazira petrochemical zone requires strict maintenance documentation", "Sachin GIDC factories need coordinated MEP and equipment service", "Rapid urban growth creates demand for apartment and commercial facility services", "Monsoon flooding in low-lying areas disrupts field team schedules"],
    whyIntro: "Surat is one of the world's fastest-growing cities, powered by diamonds, textiles, chemicals, and petrochemicals. Textile mills run thousands of shift workers, Hazira's industrial zone demands compliance-ready maintenance, and the city's construction boom drives facility service demand. TeamShastra helps Surat operators manage these high-volume field and site workforces.",
    industries: [
      { name: "Diamond & gems", description: "Diamond processing and trading hubs manage security, facility, and support staff." },
      { name: "Textiles & dyeing", description: "Pandesara and Udhna textile estates run shift-based production with equipment maintenance." },
      { name: "Petrochemicals & chemicals", description: "Hazira industrial zone requires documented utility and equipment maintenance." },
      { name: "Manufacturing GIDC", description: "Sachin and Ichhapore GIDC units coordinate maintenance across diverse industries." },
      { name: "Real estate & facility", description: "Adajan and Vesu developments need multi-vendor facility coordination." }
    ],
    useCases: [
      { title: "Textile mill shift attendance", industry: "Textiles", problem: "400 workers across 3 shifts with manual muster rolls.", solution: "Shift rosters with gate geofence check-in.", benefits: ["Shift accuracy", "Payroll exports", "Reduced errors"] },
      { title: "Hazira plant utility maintenance", industry: "Petrochemicals", problem: "Strict documentation for every maintenance intervention.", solution: "Validated work orders with supervisor approval.", benefits: ["Compliance logs", "Approval workflow", "Plant-wise history"] },
      { title: "Diamond hub security management", industry: "Security", problem: "80 guards across processing units with shift gaps.", solution: "Shift planning and relief guard deployment.", benefits: ["Coverage visibility", "Relief dispatch", "Client reports"] },
      { title: "Apartment facility services in Adajan", industry: "Facility management", problem: "12 towers with fragmented vendor coordination.", solution: "Unified work orders for plumbing, electrical, and housekeeping.", benefits: ["Vendor coordination", "Resident complaint tracking", "Tower-wise reports"] },
      { title: "Dyeing unit equipment service", industry: "Textiles", problem: "Boiler and dyeing machine PM frequently delayed.", solution: "Machine-linked PM work orders with escalation.", benefits: ["PM adherence", "Machine logs", "Fewer breakdowns"] }
    ],
    caseStudy: { companyName: "Tapi Industrial Workforce (illustrative example)", location: "Surat — Pandesara and Hazira", problem: ["Muster roll errors", "Missed Hazira PM visits", "Security shift gaps"], results: ["90% attendance accuracy", "42% more PM visits on schedule", "35% fewer shift coverage gaps"] },
    faqs: [
      { question: "Can textile mills in Surat manage shift attendance?", answer: "Yes. Shift rosters and geofenced check-in support mill operations." },
      { question: "Is TeamShastra suitable for Hazira industrial maintenance?", answer: "Yes. Validated work orders and compliance logs support petrochemical zones." },
      { question: "Can diamond industry security be managed?", answer: "Yes. Guard shift management and site check-ins are supported." },
      { question: "Does TeamShastra support apartment facility management?", answer: "Yes. Multi-vendor work orders and complaint tracking are available." },
      { question: "How long does implementation take?", answer: "1–2 weeks pilot, 3–5 weeks full rollout." },
      { question: "Does TeamShastra support GPS attendance?", answer: "Yes." },
      { question: "Is offline mode available?", answer: "Yes." },
      { question: "Can Surat and Ahmedabad teams be managed together?", answer: "Yes." },
      { question: "Does TeamShastra work on Android?", answer: "Yes." },
      { question: "Can dyeing unit equipment PM be automated?", answer: "Yes. Machine-linked recurring work orders are supported." }
    ]
  }),
  city({
    slug: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    tier: "tier-2",
    localAreas: ["Mansarovar", "Malviya Nagar", "Sitapura", "VKI", "Mahindra SEZ", "Ajmer Road", "C-Scheme", "Raja Park"],
    nearbyCitySlugs: ["jodhpur", "udaipur", "delhi", "ahmedabad"],
    metaDescription: "Workforce management software for Jaipur businesses. Manage tourism, solar, manufacturing, and service teams across Sitapura and VKI.",
    challenges: ["Tourism and hospitality seasonality requires flexible staffing across hotels and heritage sites", "Sitapura and VKI industrial areas run manufacturing maintenance teams", "Solar installation companies serve Rajasthan's renewable energy push", "Heritage property maintenance requires careful documented service", "Jaipur-Delhi industrial corridor logistics coordinates transport staff", "Extreme summer heat affects outdoor field team scheduling"],
    whyIntro: "Jaipur combines tourism, handicrafts, manufacturing, and Rajasthan's growing solar industry. Hotels and heritage properties need facility services, Sitapura factories run maintenance crews, and solar EPC companies deploy installation teams across the state. TeamShastra helps Jaipur businesses coordinate these diverse field operations.",
    industries: [
      { name: "Tourism & hospitality", description: "Hotels, palaces, and resorts manage facility, kitchen equipment, and housekeeping staff." },
      { name: "Solar & renewable energy", description: "Rajasthan's solar capacity drives EPC and O&M field teams." },
      { name: "Manufacturing & SEZ", description: "Sitapura and Mahindra SEZ host engineering and manufacturing plants." },
      { name: "Handicrafts & gems", description: "Export units manage security and facility staff across workshops." },
      { name: "Healthcare", description: "Hospital networks dispatch home-care and equipment service teams." }
    ],
    useCases: [
      { title: "Solar installation company across Rajasthan", industry: "Solar", problem: "Installation crews across 20 sites with no progress tracking.", solution: "Project work orders with installation checklists and photos.", benefits: ["Progress tracking", "Installation proof", "Customer handover"] },
      { title: "Heritage hotel facility management", industry: "Hospitality", problem: "3 heritage properties with 50 facility staff and seasonal demand.", solution: "Property-wise attendance, task work orders, and seasonal roster scaling.", benefits: ["Property-wise ops", "Seasonal scaling", "Guest satisfaction"] },
      { title: "Sitapura engineering plant maintenance", industry: "Manufacturing", problem: "Reactive maintenance with no PM schedule.", solution: "Equipment registry with automated PM work orders.", benefits: ["PM automation", "Equipment logs", "Less downtime"] },
      { title: "Water tanker delivery fleet", industry: "Utilities", problem: "Tanker drivers across Jaipur with delivery verification gaps.", solution: "Delivery work orders with location check-in at societies.", benefits: ["Delivery proof", "Route tracking", "Billing accuracy"] },
      { title: "Hospital home nursing dispatch", industry: "Healthcare", problem: "20 nurses across Jaipur with visit tracking gaps.", solution: "Patient visit work orders with care checklist completion.", benefits: ["Visit verification", "Care documentation", "Nurse utilization"] }
    ],
    caseStudy: { companyName: "Pink City Field Operations (illustrative example)", location: "Jaipur — Sitapura and Mansarovar", problem: ["No solar install progress tracking", "Heritage property maintenance gaps", "Reactive factory maintenance"], results: ["Standardized solar install reports", "30% faster facility response at hotels", "40% more PM visits completed"] },
    faqs: [
      { question: "Can solar installation companies in Jaipur use TeamShastra?", answer: "Yes. Project work orders, checklists, and handover sign-off are supported." },
      { question: "Is TeamShastra suitable for hotel facility management?", answer: "Yes. Property-wise attendance and task management support hospitality." },
      { question: "Can Sitapura factories track maintenance?", answer: "Yes. PM scheduling and equipment logs are available." },
      { question: "Does TeamShastra support seasonal workforce scaling?", answer: "Yes. Flexible rosters support tourism seasonality." },
      { question: "How long does implementation take?", answer: "1–2 weeks pilot typical." },
      { question: "Does TeamShastra support GPS attendance?", answer: "Yes." },
      { question: "Is offline mode available for remote solar sites?", answer: "Yes." },
      { question: "Can healthcare home visits be tracked?", answer: "Yes." },
      { question: "Does TeamShastra work on Android?", answer: "Yes." },
      { question: "Can Jaipur and Jodhpur teams be managed together?", answer: "Yes." }
    ]
  }),
  city({
    slug: "lucknow",
    name: "Lucknow",
    state: "Uttar Pradesh",
    tier: "tier-2",
    localAreas: ["Gomti Nagar", "Alambagh", "Amausi", "Chinhat", "Transport Nagar", "Hazratganj", "Aliganj", "Kanpur Road"],
    nearbyCitySlugs: ["kanpur", "delhi", "noida", "patna"],
    metaDescription: "Workforce management software for Lucknow businesses. Manage government, healthcare, and service teams across Gomti Nagar and Transport Nagar.",
    challenges: ["Government and PSU offices require documented contractor attendance", "Growing IT and commercial development in Gomti Nagar needs facility services", "Transport Nagar logistics hub coordinates warehouse and fleet staff", "Healthcare expansion dispatches field staff across Lucknow", "Construction along metro corridor requires coordinated service crews", "Educational institutions manage large facility and security workforces"],
    whyIntro: "Lucknow is Uttar Pradesh's administrative and commercial capital, with growing IT parks, healthcare infrastructure, and logistics operations. Government contractors, hospital networks, and facility vendors all manage distributed teams that benefit from digital attendance and work order tracking. TeamShastra supports Lucknow businesses with field workforce visibility.",
    industries: [
      { name: "Government & PSU contracting", description: "Civil, electrical, and maintenance contractors serve government complexes." },
      { name: "Healthcare", description: "Medical colleges and hospital chains dispatch field and facility staff." },
      { name: "Logistics", description: "Transport Nagar and Amausi logistics zones coordinate warehouse teams." },
      { name: "IT & commercial", description: "Gomti Nagar commercial development drives facility management demand." },
      { name: "Education", description: "Universities and schools manage security and facility staff." }
    ],
    useCases: [
      { title: "Government office maintenance contractor", industry: "Government", problem: "Required timestamped proof for billing audits.", solution: "GPS work orders with photo reports.", benefits: ["Audit trails", "Billing proof", "Department logs"] },
      { title: "Hospital equipment service network", industry: "Healthcare", problem: "Biomedical engineers across 6 hospitals.", solution: "Equipment-linked work orders and calibration schedules.", benefits: ["Equipment history", "Calibration alerts", "Cross-hospital dispatch"] },
      { title: "Transport Nagar warehouse staffing", industry: "Logistics", problem: "Loader attendance across 4 warehouses disputed.", solution: "Warehouse geofence shift attendance.", benefits: ["Shift accuracy", "Billing clarity", "Daily exports"] },
      { title: "University campus security", industry: "Education", problem: "100 guards across 3 campuses with shift gaps.", solution: "Campus geofencing and relief deployment.", benefits: ["Campus coverage", "Relief dispatch", "Compliance reports"] },
      { title: "Gomti Nagar commercial FM", industry: "Facility management", problem: "8 office buildings with separate attendance systems.", solution: "Unified multi-building dashboard.", benefits: ["Central visibility", "SLA tracking", "Client reports"] }
    ],
    caseStudy: { companyName: "Awadh Workforce Solutions (illustrative example)", location: "Lucknow — Gomti Nagar and Alambagh", problem: ["Paper government visit records", "Missed hospital calibration visits", "Warehouse attendance disputes"], results: ["100% digital government records", "50% more calibrations on time", "30% fewer warehouse disputes"] },
    faqs: [
      { question: "Can government contractors in Lucknow use TeamShastra?", answer: "Yes. GPS-stamped work orders and photo reports support audits." },
      { question: "Is TeamShastra suitable for hospital equipment service?", answer: "Yes. Equipment-linked work orders and calibration scheduling are supported." },
      { question: "Can warehouse operators verify attendance?", answer: "Yes. Geofenced shift attendance is available." },
      { question: "Does TeamShastra support campus security management?", answer: "Yes. Multi-campus guard shifts and relief deployment are supported." },
      { question: "How long does implementation take?", answer: "1–2 weeks typical pilot." },
      { question: "Does TeamShastra support GPS attendance?", answer: "Yes." },
      { question: "Is offline mode available?", answer: "Yes." },
      { question: "Can Lucknow and Kanpur teams be managed together?", answer: "Yes." },
      { question: "Does TeamShastra work on Android?", answer: "Yes." },
      { question: "Can FM vendors track SLAs?", answer: "Yes. Response and completion tracking support SLA management." }
    ]
  }),
  city({
    slug: "kanpur",
    name: "Kanpur",
    state: "Uttar Pradesh",
    tier: "tier-2",
    localAreas: ["Panki", "Fazalganj", "Civil Lines", "Kalyanpur", "Rooma", "JK Puri", "Gwaltoli", "Juhi"],
    nearbyCitySlugs: ["lucknow", "delhi", "noida", "bhopal"],
    metaDescription: "Workforce management software for Kanpur businesses. Manage leather, textile, and industrial teams across Panki and Fazalganj.",
    challenges: ["Leather and textile tanneries run shift workers with manual attendance", "Panki industrial area maintains aging factory equipment", "Kanpur-Unnao industrial corridor logistics needs fleet coordination", "Environmental compliance requires documented facility maintenance", "IIT and institutional campuses need facility vendor management", "Ganga pollution remediation projects coordinate field crews"],
    whyIntro: "Kanpur is one of India's oldest industrial cities, with leather, textiles, chemicals, and engineering manufacturing. Factory maintenance, environmental compliance, and logistics operations all require better workforce coordination. TeamShastra helps Kanpur businesses digitize attendance, work orders, and field service documentation.",
    industries: [
      { name: "Leather & textiles", description: "Tanneries and textile units manage shift workers and equipment maintenance." },
      { name: "Engineering & manufacturing", description: "Panki and Fazalganj industrial areas run diverse manufacturing." },
      { name: "Environmental services", description: "Remediation and treatment projects coordinate field crews." },
      { name: "Logistics", description: "Industrial corridor transport and warehouse operations." },
      { name: "Education & institutions", description: "Campus facility and security staff management." }
    ],
    useCases: [
      { title: "Tannery shift attendance", industry: "Leather", problem: "250 shift workers with manual registers.", solution: "Shift geofence check-in with payroll export.", benefits: ["Accurate shifts", "Payroll ready", "Fewer disputes"] },
      { title: "Panki factory boiler maintenance", industry: "Manufacturing", problem: "Boiler PM visits frequently missed.", solution: "Recurring PM work orders with regulatory checklists.", benefits: ["PM adherence", "Compliance logs", "Safety documentation"] },
      { title: "Environmental remediation crew", industry: "Environmental", problem: "Field crews across Ganga belt with no progress tracking.", solution: "Site work orders with daily progress photos.", benefits: ["Progress tracking", "Photo evidence", "Project reporting"] },
      { title: "Industrial transport fleet", industry: "Logistics", problem: "40 trucks with driver attendance gaps.", solution: "Depot check-in and trip-linked tasks.", benefits: ["Driver attendance", "Trip records", "Fleet visibility"] },
      { title: "Campus facility maintenance", industry: "Education", problem: "Fragmented vendor management across campus.", solution: "Unified work orders for electrical, plumbing, and cleaning.", benefits: ["Vendor coordination", "Complaint tracking", "Maintenance logs"] }
    ],
    caseStudy: { companyName: "Ganges Industrial Services (illustrative example)", location: "Kanpur — Panki and Fazalganj", problem: ["Shift register errors", "Missed boiler PM", "No remediation progress tracking"], results: ["85% attendance accuracy", "45% more PM visits on time", "Daily digital remediation reports"] },
    faqs: [
      { question: "Can tanneries in Kanpur manage shift attendance?", answer: "Yes. Shift rosters and geofenced check-in are supported." },
      { question: "Is TeamShastra suitable for factory boiler maintenance?", answer: "Yes. PM scheduling and compliance checklists are available." },
      { question: "Can environmental field crews be tracked?", answer: "Yes. Site work orders with progress photos are supported." },
      { question: "Does TeamShastra support fleet attendance?", answer: "Yes. Depot check-in and trip tracking are available." },
      { question: "How long does implementation take?", answer: "1–2 weeks typical." },
      { question: "Does TeamShastra support GPS attendance?", answer: "Yes." },
      { question: "Is offline mode available?", answer: "Yes." },
      { question: "Can Kanpur and Lucknow teams be managed together?", answer: "Yes." },
      { question: "Does TeamShastra work on Android?", answer: "Yes." },
      { question: "Can campus facility vendors be coordinated?", answer: "Yes. Multi-vendor work orders are supported." }
    ]
  }),
  city({
    slug: "bhopal",
    name: "Bhopal",
    state: "Madhya Pradesh",
    tier: "tier-2",
    localAreas: ["Govindpura", "Mandideep", "Hoshangabad Road", "Arera Colony", "MP Nagar", "Kolar Road", "Berasia Road", "Misrod"],
    nearbyCitySlugs: ["indore", "nagpur", "raipur", "lucknow"],
    metaDescription: "Workforce management software for Bhopal businesses. Manage government, manufacturing, and service teams across Govindpura and Mandideep.",
    challenges: ["Government and PSU establishments require documented contractor services", "Mandideep pharmaceutical zone needs compliance-ready maintenance", "Govindpura industrial area runs factory maintenance teams", "Lake city tourism drives hospitality facility management", "Growing residential development needs multi-vendor coordination", "MP state administrative offices coordinate facility vendors"],
    whyIntro: "Bhopal is Madhya Pradesh's capital with government institutions, pharmaceutical manufacturing in Mandideep, and industrial activity in Govindpura. Contractors serving government offices, pharma plants, and facility vendors all need auditable attendance and service records. TeamShastra supports Bhopal field workforce management.",
    industries: [
      { name: "Government & administration", description: "State government offices and PSU establishments require documented services." },
      { name: "Pharmaceuticals", description: "Mandideep pharma cluster needs validated maintenance records." },
      { name: "Manufacturing", description: "Govindpura industrial area runs diverse production and maintenance." },
      { name: "Hospitality & tourism", description: "Hotels and resorts manage facility and kitchen equipment services." },
      { name: "Healthcare", description: "Hospital networks dispatch equipment and home-care staff." }
    ],
    useCases: [
      { title: "Mandideep pharma plant maintenance", industry: "Pharmaceuticals", problem: "GMP documentation for utility maintenance.", solution: "Validated checklists with supervisor approval.", benefits: ["GMP records", "Approval workflow", "Plant logs"] },
      { title: "Government complex electrical contractor", industry: "Government", problem: "Audit-required visit documentation.", solution: "GPS work orders with timestamped photos.", benefits: ["Audit trails", "Visit proof", "Billing support"] },
      { title: "Govindpura factory PM scheduling", industry: "Manufacturing", problem: "Reactive maintenance culture.", solution: "Equipment PM automation.", benefits: ["PM scheduling", "Equipment history", "Less downtime"] },
      { title: "Hotel kitchen equipment AMC", industry: "Hospitality", problem: "Missed quarterly kitchen equipment visits.", solution: "AMC recurring work orders.", benefits: ["AMC compliance", "Equipment logs", "Guest safety"] },
      { title: "Residential society facility services", industry: "Real estate", problem: "8 societies with different vendor tracking.", solution: "Society-wise work order portal.", benefits: ["Vendor coordination", "Resident complaints", "Service history"] }
    ],
    caseStudy: { companyName: "Capital Region Services (illustrative example)", location: "Bhopal — Mandideep and Govindpura", problem: ["Paper pharma maintenance records", "Government audit gaps", "Reactive factory maintenance"], results: ["100% digital GMP maintenance logs", "Audit-ready government records", "35% more PM visits completed"] },
    faqs: [
      { question: "Can Mandideep pharma plants use TeamShastra?", answer: "Yes. Validated maintenance checklists support GMP compliance." },
      { question: "Is TeamShastra suitable for government contractors?", answer: "Yes. GPS-stamped visits and photo reports support audits." },
      { question: "Can Govindpura factories schedule PM?", answer: "Yes. Equipment-linked recurring work orders are available." },
      { question: "Does TeamShastra support hotel equipment AMC?", answer: "Yes. Recurring visit scheduling and equipment logs are supported." },
      { question: "How long does implementation take?", answer: "1–2 weeks typical." },
      { question: "Does TeamShastra support GPS attendance?", answer: "Yes." },
      { question: "Is offline mode available?", answer: "Yes." },
      { question: "Can Bhopal and Indore teams be managed together?", answer: "Yes." },
      { question: "Does TeamShastra work on Android?", answer: "Yes." },
      { question: "Can residential societies manage vendors?", answer: "Yes. Society-wise work orders are supported." }
    ]
  }),
  city({
    slug: "chandigarh",
    name: "Chandigarh",
    state: "Chandigarh",
    tier: "tier-2",
    localAreas: ["Industrial Area Phase 1", "IT Park", "Mohali", "Panchkula", "Zirakpur", "Manimajra", "Sector 17", "Elante area"],
    nearbyCitySlugs: ["ludhiana", "delhi", "dehradun", "jaipur"],
    metaDescription: "Workforce management software for Chandigarh businesses. Manage IT, government, and service teams across Tricity and IT Park.",
    challenges: ["Tricity sprawl across Chandigarh, Mohali, and Panchkula complicates field team routing", "Government and institutional campuses require documented facility services", "IT Park Mohali manages facility vendors across multiple buildings", "Planned city infrastructure needs coordinated utility maintenance", "Healthcare networks dispatch staff across Tricity", "Corporate offices expect premium SLA-driven facility services"],
    whyIntro: "Chandigarh and the Tricity region combine government institutions, IT parks, corporate offices, and planned urban infrastructure. Facility vendors, security agencies, and service companies manage teams across Chandigarh, Mohali, and Panchkula. TeamShastra provides unified workforce management across this tri-city market.",
    industries: [
      { name: "IT & corporate", description: "Mohali IT Park and Sector 17 corporate offices need facility and security vendors." },
      { name: "Government & institutions", description: "Government campuses and institutions require documented maintenance." },
      { name: "Healthcare", description: "Tricity hospital networks dispatch field and equipment staff." },
      { name: "Retail & hospitality", description: "Malls and hotels manage facility and equipment service teams." },
      { name: "Manufacturing", description: "Industrial Area phases host light manufacturing and engineering." }
    ],
    useCases: [
      { title: "Mohali IT Park facility management", industry: "Facility management", problem: "6 buildings with 80 FM staff.", solution: "Building geofencing and unified work orders.", benefits: ["Multi-building visibility", "SLA reports", "Task tracking"] },
      { title: "Tricity security agency", industry: "Security", problem: "150 guards across Chandigarh, Mohali, Panchkula.", solution: "Cross-city shift management and relief pool.", benefits: ["Tricity coverage", "Relief dispatch", "Client reports"] },
      { title: "Government campus maintenance", industry: "Government", problem: "Documented electrical and civil maintenance required.", solution: "GPS work orders with approval workflow.", benefits: ["Audit records", "Approval chain", "Campus logs"] },
      { title: "Hospital home sample collection", industry: "Healthcare", problem: "25 phlebotomists across Tricity.", solution: "Route work orders with patient check-in.", benefits: ["Route efficiency", "Collection proof", "Daily utilization"] },
      { title: "Mall HVAC AMC provider", industry: "HVAC", problem: "3 malls with missed chiller PM visits.", solution: "Mall-wise AMC scheduling.", benefits: ["PM compliance", "Chiller history", "Energy efficiency"] }
    ],
    caseStudy: { companyName: "Tricity Operations Hub (illustrative example)", location: "Chandigarh — Mohali and Panchkula", problem: ["Fragmented FM across IT Park", "Cross-city guard coverage gaps", "Missed mall HVAC PM"], results: ["Unified IT Park dashboard", "40% faster relief deployment", "50% more PM visits on schedule"] },
    faqs: [
      { question: "Can Mohali IT Park FM vendors use TeamShastra?", answer: "Yes. Multi-building attendance and work orders are supported." },
      { question: "Is TeamShastra suitable for Tricity security agencies?", answer: "Yes. Cross-city shift and relief management are available." },
      { question: "Can government campus contractors maintain audit records?", answer: "Yes. GPS work orders with approval workflows support compliance." },
      { question: "Does TeamShastra support healthcare home collection?", answer: "Yes. Route work orders and patient check-in are supported." },
      { question: "How long does implementation take?", answer: "1–2 weeks typical." },
      { question: "Does TeamShastra support GPS attendance?", answer: "Yes." },
      { question: "Is offline mode available?", answer: "Yes." },
      { question: "Can Chandigarh and Ludhiana teams be managed together?", answer: "Yes." },
      { question: "Does TeamShastra work on Android?", answer: "Yes." },
      { question: "Can mall HVAC AMC be automated?", answer: "Yes. Recurring PM work orders are supported." }
    ]
  })
];
