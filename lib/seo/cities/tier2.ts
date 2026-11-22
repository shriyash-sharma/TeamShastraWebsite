import type { CityProfile } from "../types";
import { buildCityProfile } from "./build-city";

export const tier2Cities: CityProfile[] = [
  buildCityProfile({
    slug: "surat",
    name: "Surat",
    state: "Gujarat",
    tier: "tier-2",
    localAreas: ["Ring Road", "Varachha", "Katargam", "Udhna", "Pandesara", "Sachin GIDC", "Hazira", "Adajan"],
    nearbyCitySlugs: ["ahmedabad", "vadodara", "mumbai"],
    metaDescription: "Field service software for Surat: CCTV for textile markets and diamond units, Hazira plant visits, IGST for Daman and Silvassa jobs, and a Gujarati app.",
    whyIntro: "Surat's service work follows its two big trades. Textile markets on Ring Road and powerloom units in Udhna and Pandesara, and diamond units in Varachha and Katargam, all need security, electrical, and machine upkeep.",
    intro: [
      "Diamond and textile businesses care a lot about CCTV coverage and power reliability, and they expect fast response when something fails. Industrial customers in Sachin GIDC and Hazira need scheduled maintenance with reports. Many units also close for a long Diwali break, which is when owners often want installations and upgrades done.",
      "TeamShastra helps a Surat service business handle the quick-response calls and the planned AMC work in one place, in Gujarati."
    ],
    localContext: {
      gstStateCode: "24 (Gujarat)",
      placeOfSupply: "Jobs in Surat and the rest of Gujarat are normally CGST + SGST. Daman and Silvassa are in the Union Territory of Dadra and Nagar Haveli and Daman and Diu (26), so installations there are usually IGST. Confirm with your CA.",
      professionalTax: "Gujarat levies Professional Tax on salaries. TeamShastra can show an indicative PT line on payslips; confirm the slab with your CA.",
      language: "The app is fully available in Gujarati, alongside Hindi for technicians who have moved from other states.",
      season: "Heavy monsoon rain can flood low-lying areas. The Diwali break, when many diamond and textile units close, is the busiest time for installations and upgrades."
    },
    challenges: [
      "Diamond and textile units expect very fast response when cameras or power fail",
      "The Diwali shutdown packs weeks of installation work into a short window",
      "Hazira and Sachin plants need planned maintenance with reports",
      "Jobs in Daman or Silvassa need IGST on the invoice"
    ],
    industries: [
      { name: "Diamond-unit CCTV & security", description: "Installers covering units in Varachha, Katargam, and Mahidharpura." },
      { name: "Textile market & powerloom electrical", description: "Contractors maintaining Ring Road markets and powerloom units in Udhna and Pandesara." },
      { name: "Industrial maintenance", description: "Service teams for plants in Sachin GIDC and Hazira." },
      { name: "Society & home installations", description: "CCTV and electrical crews working in Adajan, Vesu, and Pal." }
    ],
    useCases: [
      {
        title: "Fast response for a diamond unit",
        industry: "CCTV & security",
        problem: "A Varachha installer got urgent camera-failure calls but couldn't tell which technician was closest.",
        solution: "Today's board shows who is on duty and free, so the job is assigned straight away.",
        benefits: ["Faster assignment", "Free/busy view", "Fewer missed calls"]
      },
      {
        title: "The Diwali installation window",
        industry: "Installation",
        problem: "An Udhna contractor had fifteen units to upgrade during the Diwali shutdown and tracked them on paper.",
        solution: "Each unit is a job with photos and a progress report PDF, so the owner sees progress without visiting.",
        benefits: ["Progress per unit", "Photo proof", "Nothing missed"]
      },
      {
        title: "Billing a Silvassa customer",
        industry: "Electrical",
        problem: "A Surat firm invoiced a Silvassa job like a local one and had to issue a correction.",
        solution: "The customer's state and GSTIN on the record carry through to the GST invoice and the CA's workbook.",
        benefits: ["Right state on invoice", "Fewer credit notes", "CA-ready export"]
      }
    ],
    caseStudy: {
      companyName: "Tapi Field Services",
      location: "Surat — Varachha, Udhna, and Sachin GIDC",
      problem: ["Urgent calls assigned by guesswork", "Diwali installs tracked on paper", "Cross-border jobs invoiced wrongly"],
      results: ["Nearest free technician visible on today's board", "Progress reports for every Diwali install", "Correct state on every invoice"]
    },
    faqs: [
      { question: "Can I respond faster to urgent calls from diamond units?", answer: "Yes. Today's board shows who is free, so the office assigns the job straight away." },
      { question: "Is a job in Daman or Silvassa IGST for a Surat business?", answer: "Usually yes, because they are in a Union Territory, not Gujarat. Your CA should confirm." },
      { question: "Is TeamShastra available in Gujarati?", answer: "Yes. Each person can use Gujarati, Hindi, English, Marathi, or Bengali." },
      { question: "Can I track many installs during the Diwali shutdown?", answer: "Yes. Make a job per unit, add photos, and share progress report PDFs with each owner." }
    ]
  }),
  buildCityProfile({
    slug: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    tier: "tier-2",
    localAreas: ["Mansarovar", "Malviya Nagar", "Vaishali Nagar", "Sitapura", "VKI", "C-Scheme", "Johari Bazaar", "Jagatpura"],
    nearbyCitySlugs: ["delhi", "ahmedabad"],
    metaDescription: "Field service software for Jaipur: summer AC peaks, hotel and heritage-property maintenance, showroom CCTV, a Hindi app, and Rajasthan GST invoices.",
    whyIntro: "Jaipur's service calendar is set by the heat and the tourist season. From April to June AC and cooler work dominates; from October to March hotels and heritage properties want maintenance done without disturbing guests.",
    intro: [
      "Beyond homes, much of the work is for hotels, jewellery and textile showrooms in the old city, and industrial units in Sitapura and VKI. Showrooms in Johari Bazaar want CCTV that works every day, and hotels want electrical and AC upkeep with a record of each visit.",
      "TeamShastra lets a Jaipur business handle the summer rush, plan hotel maintenance around the season, and do it all in Hindi."
    ],
    localContext: {
      gstStateCode: "08 (Rajasthan)",
      placeOfSupply: "Jobs inside Rajasthan are normally CGST + SGST. An installation in Delhi, Haryana, or Gujarat is usually IGST. Check with your CA.",
      professionalTax: "Rajasthan does not levy Professional Tax, so payslips for Jaipur staff usually carry no PT.",
      language: "The app works fully in Hindi for technicians and managers, with English available too.",
      season: "April–June heat brings the year's biggest AC and cooler rush. October–March is the tourist season, when hotels want maintenance done quietly and quickly."
    },
    challenges: [
      "Summer AC calls overwhelm a phone-and-register office",
      "Hotels want work done around guests and a record of every visit",
      "Old-city showrooms depend on CCTV and want fast fixes",
      "Customers in Delhi or Gujarat need IGST on the invoice"
    ],
    industries: [
      { name: "AC & cooler service", description: "Technicians handling the April–June peak across homes, shops, and offices." },
      { name: "Hotel & heritage maintenance", description: "Electrical and AC teams looking after hotels and heritage properties." },
      { name: "Showroom CCTV", description: "Installers covering jewellery and textile showrooms in Johari Bazaar and the walled city." },
      { name: "Industrial service", description: "Maintenance teams for units in Sitapura and VKI." }
    ],
    useCases: [
      {
        title: "The April–June AC rush",
        industry: "AC service",
        problem: "A Mansarovar AC business wrote calls on paper and lost some during the peak.",
        solution: "Every call becomes a job with an owner on today's board; unassigned jobs stay visible until handled.",
        benefits: ["No lost calls", "Load per technician", "Faster closures"]
      },
      {
        title: "Hotel maintenance with a visit record",
        industry: "Hospitality maintenance",
        problem: "A C-Scheme hotel asked its contractor for proof of each monthly AC service.",
        solution: "The hotel has an AMC with due visits; every visit adds photos and a service report PDF.",
        benefits: ["Due-visit list", "Report per visit", "Easy renewals"]
      },
      {
        title: "Showroom camera fixes",
        industry: "CCTV & security",
        problem: "A Johari Bazaar installer had no history of which cameras had failed before at each showroom.",
        solution: "Each showroom's past jobs, photos, and comments sit on its customer record.",
        benefits: ["Fault history", "Faster diagnosis", "Customer trust"]
      }
    ],
    caseStudy: {
      companyName: "Pink City Field Services",
      location: "Jaipur — Mansarovar, C-Scheme, and Sitapura",
      problem: ["Summer calls lost on paper", "Hotels asking for proof of service", "No fault history per showroom"],
      results: ["Every summer call tracked as a job", "Service reports for each hotel visit", "Fault history on every showroom record"]
    },
    faqs: [
      { question: "Does a Jaipur business deduct Professional Tax?", answer: "Rajasthan does not levy Professional Tax, so payslips usually carry none." },
      { question: "Is the app available in Hindi?", answer: "Yes. Technicians and managers can each use Hindi or English." },
      { question: "Can I give hotels a report for every maintenance visit?", answer: "Yes. Each visit can produce a service report PDF with photos." },
      { question: "Is a job in Delhi or Gujarat IGST for a Jaipur business?", answer: "Usually yes, since it is outside Rajasthan. Your CA should confirm." }
    ]
  }),
  buildCityProfile({
    slug: "lucknow",
    name: "Lucknow",
    state: "Uttar Pradesh",
    tier: "tier-2",
    localAreas: ["Gomti Nagar", "Hazratganj", "Aliganj", "Indira Nagar", "Alambagh", "Chinhat", "Transport Nagar", "Amausi"],
    nearbyCitySlugs: ["delhi", "jaipur"],
    metaDescription: "Field service software for Lucknow: clinic and hospital maintenance, wedding-season electrical work, foggy-winter scheduling, a Hindi app, and UP GST invoices.",
    whyIntro: "Lucknow's service businesses look after a growing mix of homes, shops, hospitals and clinics, offices, and warehouses around Transport Nagar and Amausi.",
    intro: [
      "Summers are hot, so AC and electrical calls peak from April to June. Winters bring dense fog in December and January, which slows travel and shortens the working day. The November–February wedding season adds lighting, power, and temporary electrical work for venues and homes.",
      "TeamShastra gives a Lucknow team one place for jobs, attendance, and GST invoices, fully in Hindi."
    ],
    localContext: {
      gstStateCode: "09 (Uttar Pradesh)",
      placeOfSupply: "Lucknow, Kanpur, and the rest of Uttar Pradesh are one state, so jobs there are normally CGST + SGST. An installation in Bihar, Uttarakhand, or Delhi is usually IGST. Check with your CA.",
      professionalTax: "Uttar Pradesh does not levy Professional Tax, so payslips for Lucknow staff usually carry no PT.",
      language: "The app works fully in Hindi, so technicians can read jobs and check in in Hindi.",
      season: "April–June heat drives AC calls; December–January fog slows travel; November–February weddings bring lighting and electrical jobs."
    },
    challenges: [
      "Hospitals and clinics want reliable electrical and equipment upkeep with records",
      "Winter fog makes arrival times unpredictable",
      "Wedding-season jobs are short and many, and easy to lose track of",
      "Teams that prefer Hindi avoid English-only apps"
    ],
    industries: [
      { name: "Hospital & clinic maintenance", description: "Electrical and equipment service teams for hospitals, clinics, and diagnostic centres." },
      { name: "Shop & home CCTV", description: "Installers working in Gomti Nagar, Hazratganj, and Aliganj." },
      { name: "Wedding & event electrical", description: "Crews handling lighting and power for venues during the wedding season." },
      { name: "Warehouse electrical", description: "Contractors servicing warehouses around Transport Nagar and Amausi." }
    ],
    useCases: [
      {
        title: "Records for a clinic chain",
        industry: "Healthcare maintenance",
        problem: "A Gomti Nagar contractor maintained power backup for several clinics but kept no visit records.",
        solution: "Each clinic has an AMC with due visits, and each visit adds a service report and photos.",
        benefits: ["Due-visit list", "Report per visit", "Clinic history"]
      },
      {
        title: "Wedding-season jobs",
        industry: "Electrical",
        problem: "An Alambagh firm took dozens of short venue jobs and forgot to bill some.",
        solution: "Every venue job is created, closed, and invoiced in the same workspace, with pending collections listed.",
        benefits: ["Nothing unbilled", "Pending collections", "WhatsApp invoices"]
      },
      {
        title: "Foggy-morning attendance",
        industry: "Field service",
        problem: "On fog days the office couldn't tell who had actually reached a site.",
        solution: "Technicians check in at the site; today's board shows who is in and who isn't.",
        benefits: ["Real attendance", "Better planning", "Salary from the same days"]
      }
    ],
    caseStudy: {
      companyName: "Awadh Field Services",
      location: "Lucknow — Gomti Nagar, Alambagh, and Transport Nagar",
      problem: ["No visit records for clinic AMCs", "Wedding jobs left unbilled", "Attendance guessed on fog days"],
      results: ["Service reports for every clinic visit", "Every venue job invoiced", "Site check-ins on today's board"]
    },
    faqs: [
      { question: "Does a Lucknow business deduct Professional Tax?", answer: "Uttar Pradesh does not levy Professional Tax, so payslips usually carry none." },
      { question: "Is TeamShastra available in Hindi?", answer: "Yes. Each person can use Hindi, English, Marathi, Gujarati, or Bengali." },
      { question: "Can I make sure every wedding-season job is billed?", answer: "Yes. Invoices are created from jobs, and pending collections show what is still unpaid." },
      { question: "Is a job in Kanpur CGST + SGST?", answer: "Yes, normally — Kanpur is in Uttar Pradesh. Your CA should confirm cross-state work." }
    ]
  }),
  buildCityProfile({
    slug: "coimbatore",
    name: "Coimbatore",
    state: "Tamil Nadu",
    tier: "tier-2",
    localAreas: ["Peelamedu", "Ganapathy", "Kurichi", "Singanallur", "Saravanampatti", "RS Puram", "Thudiyalur", "Avinashi Road"],
    nearbyCitySlugs: ["chennai", "bengaluru"],
    metaDescription: "Field service software for Coimbatore: pump and motor service, textile-mill and foundry maintenance, IGST for Kerala jobs, and Tamil Nadu GST invoices.",
    whyIntro: "Coimbatore is known for pumps, motors, textile mills, and foundries, so a large share of local field service is machine work: installing, repairing, and maintaining equipment at farms, mills, and workshops.",
    intro: [
      "Pump and motor service teams travel to farms and villages around the city as well as to factories. Textile mills and foundries in Kurichi, Ganapathy, and Singanallur want planned maintenance with spare parts tracked. The climate is milder than most of Tamil Nadu, so work is steady through the year.",
      "TeamShastra helps a Coimbatore service business track each machine site's history, the parts used, and GST invoices — and customers across the border in Kerala are billed correctly."
    ],
    localContext: {
      gstStateCode: "33 (Tamil Nadu)",
      placeOfSupply: "Jobs inside Tamil Nadu are normally CGST + SGST. Palakkad and the rest of Kerala are a different state (32), so installation work there is usually IGST. Confirm with your CA.",
      professionalTax: "In Tamil Nadu, Professional Tax is collected half-yearly by local bodies. TeamShastra can show an indicative PT line on payslips; confirm the amount with your CA.",
      language: "Tamil isn't available in the app yet. Teams usually use English, with Hindi available for technicians who prefer it.",
      season: "The mild climate keeps work steady year-round. Farm pump work rises before planting seasons, when farmers need pumps running."
    },
    challenges: [
      "Pump and motor jobs at farms are far apart and need parts planned before the trip",
      "Mills and foundries want planned maintenance with spares tracked",
      "Repeat faults need the full history of each machine site",
      "Jobs across the border in Kerala need IGST on the invoice"
    ],
    industries: [
      { name: "Pump & motor service", description: "Technicians installing and repairing pumps and motors at farms, homes, and factories." },
      { name: "Textile-mill maintenance", description: "Electrical and machine service for spinning and weaving mills." },
      { name: "Foundry & engineering units", description: "Service teams for units in Kurichi, Ganapathy, and SIDCO estates." },
      { name: "Home & shop CCTV", description: "Installers covering RS Puram, Saravanampatti, and Peelamedu." }
    ],
    useCases: [
      {
        title: "Farm pump visits with parts planned",
        industry: "Pump & motor service",
        problem: "A Thudiyalur pump service team often reached a farm without the right spare part.",
        solution: "The site's job history shows the pump and past repairs, and the stock list shows which spares are actually on hand.",
        benefits: ["Fewer repeat trips", "Parts tracked", "Site history"]
      },
      {
        title: "Planned mill maintenance",
        industry: "Textile-mill maintenance",
        problem: "A Singanallur contractor's mill visits were scheduled from memory.",
        solution: "Each mill has an AMC with due visits; every visit adds a service report and photos.",
        benefits: ["Due-visit list", "Report per visit", "Spares recorded"]
      },
      {
        title: "Billing a Palakkad customer",
        industry: "Equipment service",
        problem: "A Coimbatore firm billed a Kerala installation as a local job.",
        solution: "The customer's state on the record flows into the GST invoice and the CA's workbook.",
        benefits: ["Right state on invoice", "Fewer corrections", "CA-ready export"]
      }
    ],
    caseStudy: {
      companyName: "Kovai Field Services",
      location: "Coimbatore — Kurichi, Singanallur, and Thudiyalur",
      problem: ["Farm trips without the right spare", "Mill visits scheduled from memory", "Kerala jobs invoiced wrongly"],
      results: ["Site history and stock checked before each trip", "AMC due visits listed for every mill", "Correct state on every invoice"]
    },
    faqs: [
      { question: "Can I track spare parts used on pump and motor jobs?", answer: "Yes. Spares billed on an invoice come out of stock, and the movement history shows every sale, purchase, and adjustment." },
      { question: "Is a job in Palakkad IGST for a Coimbatore business?", answer: "Usually yes, since Kerala is a different state. Your CA should confirm." },
      { question: "Is TeamShastra available in Tamil?", answer: "Not yet. The app supports English, Hindi, Marathi, Gujarati, and Bengali." },
      { question: "Can I schedule recurring maintenance for textile mills?", answer: "Yes. Add an AMC contract per mill and see who is due or overdue." }
    ]
  }),
  buildCityProfile({
    slug: "vadodara",
    name: "Vadodara",
    state: "Gujarat",
    tier: "tier-2",
    localAreas: ["Makarpura GIDC", "Manjusar GIDC", "Nandesari", "Alkapuri", "Gotri", "Waghodia", "Padra", "Sayajigunj"],
    nearbyCitySlugs: ["ahmedabad", "surat"],
    metaDescription: "Field service software for Vadodara: GIDC plant maintenance, monsoon-flood rescheduling, society CCTV, a Gujarati app, and Gujarat GST and PT on payslips.",
    whyIntro: "Vadodara is an industrial city. Engineering and chemical units in Makarpura, Manjusar, Nandesari, and Waghodia rely on contractors for electrical and equipment maintenance, alongside residential work in Alkapuri and Gotri.",
    intro: [
      "Industrial clients here often have strict entry rules and want every visit recorded for their own safety and maintenance files. In heavy monsoon years, low-lying parts of the city flood when the Vishwamitri river rises, and work stops for days before a rush of electrical repairs.",
      "TeamShastra helps a Vadodara contractor keep plant visits documented, bring postponed jobs back after the rain, and run the team in Gujarati."
    ],
    localContext: {
      gstStateCode: "24 (Gujarat)",
      placeOfSupply: "Vadodara, Bharuch, and Ahmedabad are all in Gujarat, so jobs there are normally CGST + SGST. Work in Maharashtra or Madhya Pradesh is usually IGST. Confirm with your CA.",
      professionalTax: "Gujarat levies Professional Tax on salaries. TeamShastra can show an indicative PT line on payslips; confirm the slab with your CA.",
      language: "The app is fully available in Gujarati, with Hindi and English too.",
      season: "In heavy monsoon years, flooding in low-lying areas stops work for days, followed by a rush of electrical repairs."
    },
    challenges: [
      "Plants have strict entry rules and want a record of every visit",
      "Monsoon flooding postpones many jobs at once",
      "After the floods, repair calls spike and need clear priorities",
      "Industrial and residential work compete for the same technicians"
    ],
    industries: [
      { name: "Plant electrical maintenance", description: "Contractors servicing engineering and chemical units in Makarpura, Manjusar, and Nandesari." },
      { name: "Equipment service", description: "Teams repairing and maintaining machines for GIDC units." },
      { name: "Society CCTV", description: "Installers covering Gotri, Alkapuri, and new societies on the city edge." },
      { name: "Residential electrical", description: "Electricians handling home wiring and post-flood repairs." }
    ],
    useCases: [
      {
        title: "Documented plant visits",
        industry: "Plant maintenance",
        problem: "A Makarpura plant asked its contractor for a written record of each maintenance visit.",
        solution: "Each visit produces a service report PDF with photos and the technician's name.",
        benefits: ["Report per visit", "Photo proof", "Plant history"]
      },
      {
        title: "After the floods",
        industry: "Electrical",
        problem: "After heavy rain, a Sayajigunj electrician had more repair calls than staff and no way to prioritise.",
        solution: "Every call becomes a job; postponed jobs go on hold and urgent ones are assigned first from today's board.",
        benefits: ["Clear priorities", "Nothing lost", "Faster recovery"]
      },
      {
        title: "Splitting the team between plants and homes",
        industry: "Field service",
        problem: "A Waghodia contractor couldn't see who was at a plant and who was free for a home call.",
        solution: "Today's board shows who is free, busy, not in, or on leave.",
        benefits: ["Real availability", "Better dispatch", "Fewer clashes"]
      }
    ],
    caseStudy: {
      companyName: "Vishwamitri Field Services",
      location: "Vadodara — Makarpura, Gotri, and Waghodia",
      problem: ["Plant visits without written records", "Flood-season jobs lost in WhatsApp", "No view of who was free"],
      results: ["Service report after every plant visit", "On-hold jobs brought back after the rain", "Free/busy board for the whole team"]
    },
    faqs: [
      { question: "Can I give GIDC plants a report for every visit?", answer: "Yes. Each job can produce a service report or progress report PDF with photos." },
      { question: "How do I handle jobs postponed by monsoon flooding?", answer: "Put them on hold. They stay on the board and come back when you are ready." },
      { question: "Is TeamShastra available in Gujarati?", answer: "Yes. Each person can use Gujarati, Hindi, English, Marathi, or Bengali." },
      { question: "Is a job in Bharuch or Ahmedabad CGST + SGST?", answer: "Normally yes, since both are in Gujarat. Your CA should confirm cross-state work." }
    ]
  }),
  buildCityProfile({
    slug: "indore",
    name: "Indore",
    state: "Madhya Pradesh",
    tier: "tier-2",
    localAreas: ["Vijay Nagar", "Palasia", "AB Road", "Scheme 54", "Rau", "Sanwer Road", "Pithampur", "Bhawarkua"],
    nearbyCitySlugs: ["ahmedabad", "jaipur"],
    metaDescription: "Field service software for Indore: Pithampur and Sanwer Road plant visits, retail and mall maintenance, colony CCTV, a Hindi app, and MP GST and PT.",
    whyIntro: "Indore is central India's commercial hub. Service businesses here cover malls and retail on AB Road and in Vijay Nagar, fast-growing residential colonies, and the industrial belts of Sanwer Road and Pithampur.",
    intro: [
      "Pithampur's auto and pharma units, about an hour from the city, want planned maintenance and a record of each visit, so trips there need planning. In the city, retail and residential customers want quick CCTV and electrical jobs and same-day invoices.",
      "TeamShastra helps an Indore team plan the Pithampur trips, keep plant histories, and bill city jobs quickly — all in Hindi if the team prefers."
    ],
    localContext: {
      gstStateCode: "23 (Madhya Pradesh)",
      placeOfSupply: "Indore and Pithampur are both in Madhya Pradesh, so jobs there are normally CGST + SGST. Installations in Gujarat, Rajasthan, or Maharashtra are usually IGST. Check with your CA.",
      professionalTax: "Madhya Pradesh levies Professional Tax on salaries. TeamShastra can show an indicative PT line on payslips; confirm the slab with your CA.",
      language: "The app works fully in Hindi for technicians and managers.",
      season: "April–June heat drives AC and cooling calls. Monsoon rain from July to September slows trips to the industrial belts."
    },
    challenges: [
      "Pithampur is far enough that a wasted trip costs half a day",
      "Plants want planned maintenance with reports",
      "Retail customers expect same-day fixes and invoices",
      "Fast-growing colonies add new CCTV customers every month"
    ],
    industries: [
      { name: "Industrial maintenance", description: "Electrical and equipment service for auto and pharma units in Pithampur and Sanwer Road." },
      { name: "Retail & mall facilities", description: "Maintenance teams for malls and showrooms on AB Road and in Vijay Nagar." },
      { name: "Colony CCTV", description: "Installers covering new residential colonies and townships." },
      { name: "AC & electrical service", description: "Technicians handling the summer cooling peak." }
    ],
    useCases: [
      {
        title: "Planned Pithampur trips",
        industry: "Industrial maintenance",
        problem: "An Indore contractor's technicians made separate trips to Pithampur for jobs that could have been combined.",
        solution: "Pithampur jobs are grouped on today's board and assigned together, with each plant's history on its record.",
        benefits: ["Fewer trips", "Plant history", "Report per visit"]
      },
      {
        title: "Same-day retail fixes",
        industry: "Facilities maintenance",
        problem: "A Vijay Nagar mall's maintenance contractor billed at month end and payments ran late.",
        solution: "The job closes with photos, the GST invoice is raised from it, and the PDF goes out on WhatsApp.",
        benefits: ["Faster billing", "Pending collections", "Proof of work"]
      },
      {
        title: "A growing colony CCTV business",
        industry: "CCTV & security",
        problem: "A Rau installer's AMC list outgrew a notebook.",
        solution: "Every customer has an AMC with due visits, and the list shows who is due this week.",
        benefits: ["Due-visit list", "Renewals on time", "Customer history"]
      }
    ],
    caseStudy: {
      companyName: "Malwa Field Services",
      location: "Indore — Vijay Nagar, Rau, and Pithampur",
      problem: ["Separate trips to Pithampur", "Retail invoices sent at month end", "AMC list in a notebook"],
      results: ["Pithampur jobs grouped on today's board", "Invoices on WhatsApp the day the job closes", "AMC due visits listed"]
    },
    faqs: [
      { question: "Is a Pithampur job CGST + SGST for an Indore business?", answer: "Normally yes — Pithampur is in Madhya Pradesh. Your CA should confirm cross-state work." },
      { question: "Is TeamShastra available in Hindi?", answer: "Yes. Each person can use Hindi, English, Marathi, Gujarati, or Bengali." },
      { question: "Can payslips show Madhya Pradesh Professional Tax?", answer: "Yes, as an indicative deduction. Your CA handles the actual payment." },
      { question: "Can I plan visits to industrial clients outside the city?", answer: "Yes. Group the jobs on today's board and check each plant's history before the trip." }
    ]
  })
];
