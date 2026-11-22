import type { CityProfile } from "../types";
import { buildCityProfile } from "./build-city";

/** Shared benefits copy used across city pages. */
export const standardBenefits = [
  "Issue GST invoices, quotations, and WhatsApp PDFs from the same workspace as jobs",
  "Track field expenses, cash float, bank balances, and purchase bills without a second app",
  "Reduce paperwork and manual coordination across field teams",
  "Keep AMC contracts and due visits against each customer instead of a spreadsheet",
  "Capture before/after photos as proof of completed work",
  "Track attendance at punch time only — GPS, an office radius, or a check-in selfie if the company requires it, with no background tracking",
  "Pay staff salary for a calendar month from the same attendance, with Monthly, Per day, or Hourly wages and payslips",
  "Monitor operations from the web dashboard and Android app"
];

export const tier1Cities: CityProfile[] = [
  buildCityProfile({
    slug: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    tier: "tier-1",
    localAreas: ["Andheri", "Powai", "Navi Mumbai", "Thane", "BKC", "Lower Parel", "Malad", "Bhiwandi"],
    nearbyCitySlugs: ["pune", "surat", "ahmedabad"],
    metaDescription: "Field service app for Mumbai: society CCTV and AMC jobs, monsoon rescheduling, Maharashtra GST invoices, and Marathi for technicians. Free to start.",
    whyIntro: "Mumbai service businesses work in housing societies, offices, and warehouses spread from Colaba to Virar and across the harbour to Navi Mumbai. A technician can spend more time on the local train or the Western Express Highway than on the job itself.",
    intro: [
      "Much of the work here is society-driven: CCTV and intercom upkeep for cooperative housing societies, rewiring in older buildings, and AMC visits for offices in BKC, Lower Parel, and Andheri. A society usually wants a gate entry, the secretary's sign-off, and photos before it releases payment.",
      "TeamShastra keeps each society as a customer with its own job history, so before/after photos, the service report PDF, and the GST invoice sit together — the paper trail a committee asks for at its next meeting."
    ],
    localContext: {
      gstStateCode: "27 (Maharashtra)",
      placeOfSupply: "Jobs in Mumbai, Thane, and Navi Mumbai are all inside Maharashtra, so installation invoices normally carry CGST + SGST. A site in Daman or Gujarat is usually IGST, because for work on a building the place of supply is where the building is. Confirm edge cases with your CA.",
      professionalTax: "Maharashtra levies Professional Tax on salaries. TeamShastra can show an indicative PT deduction on each payslip — check the current slab with your CA.",
      language: "Technicians can use the app in Marathi or Hindi while the office works in English. Each person picks their own language.",
      season: "The June–September monsoon brings waterlogging and train delays, so jobs often move the same morning. Coastal salt air also means more corrosion call-outs for outdoor cameras and fittings."
    },
    challenges: [
      "Crossing the city by train, highway, or harbour makes it hard to promise a time slot without knowing who is already nearby",
      "Housing societies want gate passes, committee sign-off, and photo proof before they pay",
      "Monsoon rescheduling happens at short notice and gets lost in WhatsApp threads",
      "Older buildings turn up extra work that needs a fresh quotation before the technician carries on"
    ],
    industries: [
      { name: "Society CCTV & intercom", description: "Installers maintaining cameras, DVRs, and intercoms for cooperative housing societies on yearly AMCs." },
      { name: "Electrical rewiring", description: "Contractors upgrading wiring and DBs in older buildings across the western and central suburbs." },
      { name: "Office & commercial AMC", description: "Maintenance teams covering offices in BKC, Lower Parel, and Andheri with scheduled visits." },
      { name: "Warehouse sites", description: "Electrical and security teams servicing warehouses in Bhiwandi and the Thane belt." }
    ],
    useCases: [
      {
        title: "Society CCTV AMC with committee proof",
        industry: "CCTV & security",
        problem: "A Malad installer serviced cameras for twenty societies, but committee members kept asking for proof of each visit.",
        solution: "Each society is a customer with an AMC contract; every visit adds photos and a service report PDF shared on WhatsApp.",
        benefits: ["Visit proof per society", "AMC due list", "Faster payment release"]
      },
      {
        title: "Revised quote during a rewiring job",
        industry: "Electrical",
        problem: "In an old Dadar building, the technician found damaged wiring beyond the original quote and had to call the office to price it.",
        solution: "The office revises the quotation from the catalog and shares the PDF; once approved, it becomes the GST invoice for the same job.",
        benefits: ["Quote to invoice in one job", "Customer approval on record", "No retyping"]
      },
      {
        title: "Monsoon morning rescheduling",
        industry: "Maintenance",
        problem: "Heavy rain left half the team stuck on delayed trains and the office unsure which jobs would actually happen.",
        solution: "Today's board shows who has checked in; the office reassigns or puts jobs on hold, and a customer on the optional portal sees the new status.",
        benefits: ["Real availability", "On-hold status", "Fewer missed promises"]
      }
    ],
    caseStudy: {
      companyName: "Harborline Field Services",
      location: "Mumbai — Andheri, Powai, and Navi Mumbai",
      problem: ["Society AMC visits tracked in a diary", "Photos scattered across technicians' phones", "Invoices made at month end from memory"],
      results: ["Each society's visits and photos on one customer record", "Service report shared at the gate after every visit", "GST invoices raised the same day the job closes"]
    },
    faqs: [
      { question: "Can I keep each housing society as a separate customer with its own AMC?", answer: "Yes. Each society gets its own customer record, AMC contract, and visit history, and you can see which societies are due for a visit." },
      { question: "Can my Mumbai technicians use the app in Marathi?", answer: "Yes. TeamShastra is available in Marathi, Hindi, English, Gujarati, and Bengali, and each person picks their own language." },
      { question: "Is a job in Navi Mumbai or Thane CGST + SGST or IGST?", answer: "Both are in Maharashtra, so a Mumbai business normally charges CGST + SGST. Your CA should confirm any cross-state job." },
      { question: "Does attendance work in basements or on the train with no network?", answer: "Yes. Check-in and job updates work offline and sync when the phone is back online." }
    ]
  }),
  buildCityProfile({
    slug: "delhi",
    name: "Delhi",
    state: "Delhi NCR",
    tier: "tier-1",
    localAreas: ["Nehru Place", "Okhla", "Dwarka", "Rohini", "Karol Bagh", "Saket", "Gurugram", "Noida"],
    nearbyCitySlugs: ["jaipur", "lucknow"],
    metaDescription: "Field service software for Delhi NCR: AC, CCTV, and electrical jobs across Delhi, Gurugram, and Noida, with correct IGST for cross-state work. Hindi app.",
    whyIntro: "A Delhi service business rarely stays inside Delhi. One team can cover Nehru Place in the morning, a Gurugram office after lunch, and a Noida housing society by evening — three different states for GST.",
    intro: [
      "Demand here is shaped by the weather: AC, inverter, and electrical calls jump in May and June, while the October–November festive season brings lighting, CCTV, and new installations for shops and homes. Resident welfare associations (RWAs) and market associations often buy CCTV and maintenance for a whole colony or market.",
      "TeamShastra lets the office see the whole NCR team on one board, keep each RWA or shop as a customer, and raise the right GST invoice for where the work was done."
    ],
    localContext: {
      gstStateCode: "07 (Delhi)",
      placeOfSupply: "A job in Delhi is CGST + SGST for a Delhi-registered business, but an installation in Gurugram or Faridabad (Haryana, 06) or Noida and Ghaziabad (Uttar Pradesh, 09) is usually IGST, because the place of supply for work on a building is where the building is. Your CA should confirm how you are registered.",
      professionalTax: "Delhi does not levy Professional Tax, so payslips for Delhi-based staff usually carry no PT. Staff paid from a Haryana or UP registration should be checked with your CA.",
      language: "The app works fully in Hindi, so technicians can read jobs and check in in Hindi while managers use English.",
      season: "May–June heat drives a spike in AC and power-backup calls. Winter fog and early darkness shorten outdoor install days, and the festive season fills the calendar with lighting and CCTV jobs."
    },
    challenges: [
      "Teams cross into Haryana and Uttar Pradesh daily, and invoices need the right tax for each site",
      "Summer AC demand doubles the job list faster than a phone-and-register system can handle",
      "RWAs and market associations want one invoice and one service record for many sites",
      "Fog and traffic make arrival times unpredictable, so customers call the office for updates"
    ],
    industries: [
      { name: "AC & power backup service", description: "Technicians servicing ACs, inverters, and UPS units through the summer peak." },
      { name: "RWA & market CCTV", description: "Installers covering colonies, gated societies, and market associations on yearly contracts." },
      { name: "Office maintenance", description: "Electrical and facility teams for offices in Nehru Place, Okhla, and Gurugram." },
      { name: "Festive installations", description: "Lighting, electrical, and CCTV crews handling the October–November rush for shops and homes." }
    ],
    useCases: [
      {
        title: "Delhi team billing a Gurugram site",
        industry: "Electrical",
        problem: "A Dwarka contractor kept invoicing Gurugram jobs with the wrong tax type and had to issue corrections.",
        solution: "The customer's GSTIN and state sit on the customer record, so each GST invoice carries the right state for the job.",
        benefits: ["Correct state on invoices", "Fewer credit notes", "Clean GSTR-1 export"]
      },
      {
        title: "Summer AC surge",
        industry: "AC service",
        problem: "In June a Rohini service company had more calls than it could assign by phone, and some customers were never called back.",
        solution: "Every call becomes a job on today's board with an owner; unassigned jobs stay visible until someone takes them.",
        benefits: ["No forgotten calls", "Load per technician", "Faster closures"]
      },
      {
        title: "Market association CCTV contract",
        industry: "CCTV & security",
        problem: "A Karol Bagh installer looked after cameras for dozens of shops under one association contract.",
        solution: "The association is the customer with an AMC; each shop visit is a job with photos, all on one history.",
        benefits: ["One contract, many visits", "Photo record", "Due-visit list"]
      }
    ],
    caseStudy: {
      companyName: "Capital Field Solutions",
      location: "Delhi NCR — Okhla, Gurugram, and Noida",
      problem: ["Cross-state jobs invoiced with the wrong tax", "Summer calls handled on a personal phone", "No shared view across three cities"],
      results: ["Customer state on every invoice", "Every summer call logged as a job", "One board for the whole NCR team"]
    },
    faqs: [
      { question: "Can one Delhi workspace manage technicians in Gurugram and Noida?", answer: "Yes. Jobs and attendance work the same at every site; managers see the whole NCR team on today's board." },
      { question: "Is the TeamShastra app available in Hindi?", answer: "Yes. Technicians and managers can each switch the app to Hindi." },
      { question: "Does a Delhi business pay Professional Tax on salaries?", answer: "Delhi does not levy Professional Tax. Check with your CA if you also pay staff from another state's registration." },
      { question: "Can I handle the summer AC rush without missing calls?", answer: "Yes. Log every call as a job, assign it from today's board, and unassigned jobs stay visible until someone takes them." }
    ]
  }),
  buildCityProfile({
    slug: "pune",
    name: "Pune",
    state: "Maharashtra",
    tier: "tier-1",
    localAreas: ["Hinjewadi", "Kharadi", "Wakad", "Baner", "Hadapsar", "PCMC", "Chakan", "Talegaon"],
    nearbyCitySlugs: ["mumbai", "ahmedabad"],
    metaDescription: "Field service software for Pune: IT-park maintenance, Chakan and PCMC plant visits, society CCTV, Marathi app, and Maharashtra GST invoices.",
    whyIntro: "Pune service companies split their day between IT parks in Hinjewadi and Kharadi, manufacturing plants in Chakan, Bhosari, and Talegaon, and the fast-growing housing societies of Wakad and Baner.",
    intro: [
      "Each customer type works differently. Plants want visits inside a shift window with a signed service report for their maintenance file. IT parks want vendor gate passes and a clean record of what was done. New societies want CCTV and access control installed before residents move in.",
      "TeamShastra gives one workspace for all three: plant visits with service report PDFs, society installs with photos, and GST invoices raised from the same job."
    ],
    localContext: {
      gstStateCode: "27 (Maharashtra)",
      placeOfSupply: "Pune and Mumbai are both in Maharashtra, so a Pune business doing a job in Mumbai normally still charges CGST + SGST. Work on a building outside Maharashtra is usually IGST. Confirm with your CA.",
      professionalTax: "Maharashtra levies Professional Tax on salaries. TeamShastra can show an indicative PT line on payslips; your CA should confirm the slab.",
      language: "Marathi and Hindi are both available, so a mixed team of local and migrant technicians can each use the language they read best.",
      season: "The June–September monsoon and the Hinjewadi and Chakan traffic stretch travel times, so a two-visit afternoon often becomes one."
    },
    challenges: [
      "Plants only allow visits inside a shift window and want a signed report for their maintenance file",
      "IT parks need vendor passes and a record of who entered and when",
      "Travel between Hinjewadi, Chakan, and Hadapsar eats half the day if jobs aren't planned by area",
      "Society handovers bring bursts of install work with tight deadlines"
    ],
    industries: [
      { name: "Plant maintenance", description: "Electrical and equipment service teams visiting auto and engineering units in Chakan, Bhosari, and Talegaon." },
      { name: "IT park facilities", description: "Maintenance contractors servicing offices and common areas in Hinjewadi, Kharadi, and Magarpatta." },
      { name: "Society CCTV & access control", description: "Installers fitting cameras and access systems in new societies in Wakad, Baner, and Hadapsar." },
      { name: "Electrical contractors", description: "Teams wiring new flats and commercial fit-outs across PCMC and the city." }
    ],
    useCases: [
      {
        title: "Shift-window plant visits",
        industry: "Equipment service",
        problem: "A Bhosari service company kept missing a plant's maintenance window because the technician was still at the previous job.",
        solution: "Jobs are planned on today's board by area, and the plant gets a service report PDF with photos at the end of each visit.",
        benefits: ["Visits inside the window", "Report for the plant file", "Job history per machine site"]
      },
      {
        title: "Society handover install",
        industry: "CCTV & security",
        problem: "A Wakad installer had to finish CCTV in four new towers before handover, with crews reporting by phone.",
        solution: "Each tower is a job with progress report PDFs and photos, so the builder sees what's done without a site visit.",
        benefits: ["Progress report per tower", "Photo proof", "Fewer status calls"]
      },
      {
        title: "Marathi and Hindi in one team",
        industry: "Electrical",
        problem: "Half of a Hadapsar contractor's technicians read Marathi best and half read Hindi.",
        solution: "Each technician sets their own app language; the office keeps working in English.",
        benefits: ["Fewer misread jobs", "Faster adoption", "One workspace"]
      }
    ],
    caseStudy: {
      companyName: "Deccan Service Networks",
      location: "Pune — Chakan, Hinjewadi, and Wakad",
      problem: ["Plant visits missed their shift window", "Paper job sheets lost before reaching the office", "Builders calling daily for install progress"],
      results: ["Visits planned by area on today's board", "Service report PDF shared at the end of each visit", "Progress reports with photos sent to builders"]
    },
    faqs: [
      { question: "Can I share a service report with a Chakan plant after each visit?", answer: "Yes. Each job can produce a service report or progress report PDF with photos, shared on WhatsApp or downloaded for the plant's file." },
      { question: "Is a Pune-to-Mumbai job CGST + SGST or IGST?", answer: "Both cities are in Maharashtra, so it is normally CGST + SGST. Your CA should confirm anything outside the state." },
      { question: "Can my team use TeamShastra in Marathi?", answer: "Yes. Marathi, Hindi, English, Gujarati, and Bengali are available, chosen per person." },
      { question: "Can I track progress on a multi-tower society install?", answer: "Yes. Make a job per tower or phase, add photos, and share a progress report PDF with the builder." }
    ]
  }),
  buildCityProfile({
    slug: "bengaluru",
    name: "Bengaluru",
    state: "Karnataka",
    tier: "tier-1",
    localAreas: ["Whitefield", "Electronic City", "HSR Layout", "Koramangala", "Marathahalli", "Peenya", "Yelahanka", "Hosur Road"],
    nearbyCitySlugs: ["chennai", "coimbatore"],
    metaDescription: "Field service software for Bengaluru: tech-park and apartment maintenance, Peenya equipment service, IGST for Hosur jobs, and Karnataka PT on payslips.",
    whyIntro: "Bengaluru field teams lose more time to traffic than to weather. A technician on the Outer Ring Road can manage two visits in an afternoon only if the jobs are planned by area.",
    intro: [
      "Typical work is split between large apartment complexes, tech parks along the ORR and in Whitefield and Electronic City, and the industrial units of Peenya. Apartment associations buy CCTV and access-control AMCs, while tech parks usually require vendor registration and gate passes before a technician can enter.",
      "TeamShastra lets the office plan jobs by area on today's board, keep each apartment association's AMC and visit history, and invoice Karnataka and Tamil Nadu customers correctly."
    ],
    localContext: {
      gstStateCode: "29 (Karnataka)",
      placeOfSupply: "Jobs inside Karnataka are normally CGST + SGST. Hosur, just past Electronic City, is in Tamil Nadu (33), so an installation there is usually IGST. Ask your CA if you work across the border often.",
      professionalTax: "Karnataka levies Professional Tax on salaries above a threshold. TeamShastra can show an indicative PT line on payslips; confirm the slab with your CA.",
      language: "Kannada isn't available in the app yet. Teams usually work in English, and Hindi is available for technicians who prefer it.",
      season: "The weather is mild, but June–October showers and traffic on the ORR, Hosur Road, and Old Airport Road make arrival times hard to promise."
    },
    challenges: [
      "Traffic means a job across town can take most of an afternoon, so dispatch has to think by area",
      "Tech parks need vendor passes, so a last-minute technician swap can mean no entry",
      "Apartment associations want visit proof before they renew an AMC",
      "Jobs in Hosur cross into Tamil Nadu and need a different tax on the invoice"
    ],
    industries: [
      { name: "Apartment CCTV & access control", description: "Installers maintaining cameras, boom barriers, and access systems for large apartment associations." },
      { name: "Tech-park facilities", description: "Electrical and maintenance contractors working in Whitefield, Electronic City, and ORR offices." },
      { name: "Industrial equipment service", description: "Service teams visiting machine shops and units in Peenya and Bommasandra." },
      { name: "Electrical contractors", description: "Teams handling villa, apartment, and office fit-out wiring across the city." }
    ],
    useCases: [
      {
        title: "Area-based dispatch on the ORR",
        industry: "Maintenance",
        problem: "A Marathahalli company sent technicians criss-crossing the city and fit in only three jobs a day.",
        solution: "Today's board shows who is free and where they checked in, so the office assigns nearby jobs together.",
        benefits: ["Fewer cross-city trips", "More jobs per day", "Free/busy at a glance"]
      },
      {
        title: "Apartment association AMC renewal",
        industry: "CCTV & security",
        problem: "An HSR Layout installer lost an AMC renewal because the association said visits weren't happening.",
        solution: "Every AMC visit adds photos and a service report to the association's customer record, ready to share at renewal time.",
        benefits: ["Visit proof", "Due-visit list", "Easier renewals"]
      },
      {
        title: "Hosur job from a Bengaluru office",
        industry: "Electrical",
        problem: "An Electronic City contractor invoiced Hosur jobs like local ones and had to correct them later.",
        solution: "The customer's state on the record carries through to the GST invoice, and the GST workbook gives the CA the split.",
        benefits: ["Right state on invoice", "Fewer corrections", "CA-ready export"]
      }
    ],
    caseStudy: {
      companyName: "Bengaluru Field Networks",
      location: "Bengaluru — Whitefield, HSR Layout, and Peenya",
      problem: ["Three jobs a day lost to traffic", "AMC renewals lost for lack of proof", "Hosur jobs invoiced with the wrong tax"],
      results: ["Jobs grouped by area on today's board", "Photo and report history ready at renewal", "Customer state carried onto every invoice"]
    },
    faqs: [
      { question: "Is a job in Hosur IGST for a Bengaluru business?", answer: "Hosur is in Tamil Nadu, so installation work there is usually IGST for a Karnataka-registered business. Your CA should confirm." },
      { question: "Is TeamShastra available in Kannada?", answer: "Not yet. The app is in English, Hindi, Marathi, Gujarati, and Bengali. Most Bengaluru teams use English." },
      { question: "Can I prove AMC visits to an apartment association?", answer: "Yes. Each visit is a job with photos and a service report PDF on the association's customer record." },
      { question: "Can I show Karnataka Professional Tax on payslips?", answer: "Yes. Payslips can include an indicative PT deduction. It is not a tax filing — your CA handles that." }
    ]
  }),
  buildCityProfile({
    slug: "hyderabad",
    name: "Hyderabad",
    state: "Telangana",
    tier: "tier-1",
    localAreas: ["HITEC City", "Gachibowli", "Kondapur", "Madhapur", "Kukatpally", "Secunderabad", "Patancheru", "Jeedimetla"],
    nearbyCitySlugs: ["bengaluru", "chennai"],
    metaDescription: "Field service software for Hyderabad: gated-community CCTV, summer AC demand, pharma-belt maintenance, IGST for Andhra jobs, and Telangana PT on payslips.",
    whyIntro: "Hyderabad keeps adding new gated communities, villas, and office towers in the west of the city, while the industrial and pharma belts of Patancheru and Jeedimetla need steady maintenance in the north.",
    intro: [
      "New communities in Gachibowli, Kondapur, and Kokapet bring CCTV, intercom, and electrical installation work, followed by AMCs once residents move in. Pharma and industrial units expect documented service visits for their own records, and summer heat from April to June brings a rush of AC calls.",
      "TeamShastra helps the office keep installs, AMC visits, and summer service calls on one board, with service reports for industrial clients and GST invoices for every job."
    ],
    localContext: {
      gstStateCode: "36 (Telangana)",
      placeOfSupply: "Jobs inside Telangana are normally CGST + SGST. Andhra Pradesh is a separate state (37) since 2014, so installation work there is usually IGST. Check with your CA.",
      professionalTax: "Telangana levies Professional Tax on salaries. Payslips in TeamShastra can show an indicative PT line; confirm the slab with your CA.",
      language: "Telugu isn't available in the app yet. Hindi is widely understood and available, along with English.",
      season: "April–June is very hot, so AC and electrical calls peak. Monsoon showers from June to September cause flooding on some roads and delay visits."
    },
    challenges: [
      "New gated communities need installation crews first and an AMC team later",
      "Industrial clients want a documented record of every service visit",
      "Summer AC calls arrive faster than the office can assign them by phone",
      "Customers just across the Andhra Pradesh border need a different tax on the invoice"
    ],
    industries: [
      { name: "Gated-community CCTV & intercom", description: "Installers fitting and maintaining cameras and intercoms in Gachibowli, Kondapur, and Kokapet." },
      { name: "Industrial & pharma maintenance", description: "Electrical and utility service teams for units in Patancheru, Jeedimetla, and IDA estates." },
      { name: "AC & electrical service", description: "Technicians handling the April–June cooling peak across homes and offices." },
      { name: "Office fit-out & facilities", description: "Contractors servicing towers in HITEC City and the Financial District." }
    ],
    useCases: [
      {
        title: "From install to AMC in a new community",
        industry: "CCTV & security",
        problem: "A Kondapur installer finished a community's CCTV but had no record to start the AMC from.",
        solution: "The installation job, photos, and invoice stay on the community's customer record, and the AMC contract picks up from there.",
        benefits: ["Install history kept", "AMC due visits", "One customer record"]
      },
      {
        title: "Documented visits for a pharma unit",
        industry: "Industrial maintenance",
        problem: "A Patancheru client asked for a written record of every electrical maintenance visit.",
        solution: "Every visit produces a service report PDF with photos and the technician's name, shared after the job.",
        benefits: ["Report per visit", "Photo evidence", "Client-ready records"]
      },
      {
        title: "Summer AC call peak",
        industry: "AC service",
        problem: "In May a Kukatpally service company lost track of who was handling which call.",
        solution: "Each call becomes a job with an owner on today's board, so nobody is left waiting for a callback.",
        benefits: ["Every call owned", "Workload per technician", "Fewer follow-up calls"]
      }
    ],
    caseStudy: {
      companyName: "Hyderabad Service Collective",
      location: "Hyderabad — Gachibowli, Kondapur, and Patancheru",
      problem: ["Install records lost before AMC started", "Industrial clients asking for visit reports", "Summer calls tracked on paper"],
      results: ["Install, photos, and AMC on one customer", "Service report PDF after each industrial visit", "Every summer call logged as a job"]
    },
    faqs: [
      { question: "Is a job in Andhra Pradesh IGST for a Hyderabad business?", answer: "Usually yes — Andhra Pradesh is a separate state, so installation work there is normally IGST. Your CA should confirm." },
      { question: "Is TeamShastra available in Telugu?", answer: "Not yet. The app supports English, Hindi, Marathi, Gujarati, and Bengali." },
      { question: "Can I give an industrial client a report for every visit?", answer: "Yes. Every job can generate a service report or progress report PDF with photos." },
      { question: "Can I run CCTV installs and AMCs for the same community?", answer: "Yes. The install job and the AMC contract both sit on the community's customer record." }
    ]
  }),
  buildCityProfile({
    slug: "chennai",
    name: "Chennai",
    state: "Tamil Nadu",
    tier: "tier-1",
    localAreas: ["OMR", "Guindy", "Ambattur", "Sriperumbudur", "Oragadam", "Velachery", "Porur", "Anna Nagar"],
    nearbyCitySlugs: ["coimbatore", "bengaluru"],
    metaDescription: "Field service software for Chennai: OMR apartments, Sriperumbudur and Oragadam plant visits, northeast-monsoon rescheduling, and Tamil Nadu GST invoices.",
    whyIntro: "Chennai service teams cover a long city: apartments and IT offices along OMR, factories in Sriperumbudur, Oragadam, and Ambattur, and older neighbourhoods in the centre.",
    intro: [
      "Heat and humidity keep AC and electrical work busy most of the year. The bigger disruption is the northeast monsoon from October to December, when heavy rain and the occasional cyclone stop outdoor installations and flood roads for days.",
      "TeamShastra lets the office put jobs on hold and bring them back without losing track, keep plant visits documented, and raise GST invoices for each job."
    ],
    localContext: {
      gstStateCode: "33 (Tamil Nadu)",
      placeOfSupply: "Work inside Tamil Nadu is normally CGST + SGST. Sri City is in Andhra Pradesh (37) and Puducherry is a separate territory (34), so installations there are usually IGST. Confirm with your CA.",
      professionalTax: "In Tamil Nadu, Professional Tax is collected half-yearly by local bodies such as the Greater Chennai Corporation. TeamShastra can show an indicative PT line on payslips; your CA should confirm the amount.",
      language: "Tamil isn't available in the app yet. Teams usually work in English, with Hindi available for technicians who prefer it.",
      season: "October–December northeast monsoon rain and cyclone warnings pause outdoor work, then a backlog follows. AC demand stays high from March to September."
    },
    challenges: [
      "Monsoon backlogs mean dozens of jobs move at once and some get forgotten",
      "Plants in Sriperumbudur and Oragadam are far from the city and need visits planned in advance",
      "AC work stays busy most of the year, so the board never really empties",
      "Customers in Sri City or Puducherry need IGST on the invoice"
    ],
    industries: [
      { name: "Plant & equipment service", description: "Teams servicing auto and electronics units in Sriperumbudur, Oragadam, and Ambattur." },
      { name: "Apartment CCTV & AMC", description: "Installers maintaining cameras and intercoms for OMR and Velachery apartments." },
      { name: "AC & electrical service", description: "Technicians handling the long Chennai cooling season for homes and offices." },
      { name: "Office maintenance", description: "Facility contractors for IT offices along OMR and in Guindy." }
    ],
    useCases: [
      {
        title: "Clearing the monsoon backlog",
        industry: "Installation",
        problem: "After a week of December rain, a Velachery installer had forty postponed jobs and no list of them.",
        solution: "Postponed jobs go on hold and stay on the board, so the office brings them back in order when the rain stops.",
        benefits: ["Nothing forgotten", "On-hold status", "Clear backlog"]
      },
      {
        title: "Planned plant visits in Oragadam",
        industry: "Equipment service",
        problem: "An Ambattur company sent technicians to Oragadam without the parts or history they needed.",
        solution: "The plant's job history and photos are on its customer record, and parts billed on the invoice come out of stock with a movement history.",
        benefits: ["History before the visit", "Parts tracked", "Fewer repeat trips"]
      },
      {
        title: "Year-round AC service team",
        industry: "AC service",
        problem: "An Anna Nagar AC business tracked jobs and staff cash in two notebooks.",
        solution: "Jobs, field expenses, and cash given to technicians live in the same workspace.",
        benefits: ["Expenses per technician", "Staff cash balance", "One record"]
      }
    ],
    caseStudy: {
      companyName: "Chennai Field Operations",
      location: "Chennai — OMR, Ambattur, and Oragadam",
      problem: ["Monsoon-postponed jobs tracked in WhatsApp", "Plant visits without history or parts", "Expenses and staff cash in notebooks"],
      results: ["On-hold jobs kept on the board until done", "Plant history checked before each visit", "Expenses and staff cash recorded per person"]
    },
    faqs: [
      { question: "How do I manage jobs postponed by the northeast monsoon?", answer: "Put them on hold. They stay on the board and come back when you are ready, so nothing is lost." },
      { question: "Is a job in Sri City or Puducherry IGST?", answer: "Usually yes for a Tamil Nadu business, since Sri City is in Andhra Pradesh and Puducherry is a separate territory. Your CA should confirm." },
      { question: "Is TeamShastra available in Tamil?", answer: "Not yet. The app supports English, Hindi, Marathi, Gujarati, and Bengali." },
      { question: "Can payslips show Tamil Nadu Professional Tax?", answer: "Payslips can include an indicative PT line. It is not a filing; your CA handles the half-yearly payment." }
    ]
  }),
  buildCityProfile({
    slug: "kolkata",
    name: "Kolkata",
    state: "West Bengal",
    tier: "tier-1",
    localAreas: ["Salt Lake", "New Town", "Rajarhat", "Howrah", "Park Street", "EM Bypass", "Dum Dum", "Behala"],
    nearbyCitySlugs: ["lucknow", "delhi"],
    metaDescription: "Field service software for Kolkata: old-building rewiring, New Town CCTV, Puja-season planning, a Bengali app, and West Bengal GST and PT on payslips.",
    whyIntro: "Kolkata mixes old and new. Central neighbourhoods have century-old buildings that need careful electrical work, while Salt Lake, New Town, and Rajarhat keep adding offices and housing complexes.",
    intro: [
      "Site directions matter here: narrow lanes, shared entrances, and older buildings make it hard to explain over the phone where the panel or camera is. The festive calendar matters too — Durga Puja in September or October brings lighting and electrical work, then a slowdown in offices.",
      "TeamShastra keeps site notes and photos on each customer, so the next technician knows where to go, and the whole team can use the app in Bengali."
    ],
    localContext: {
      gstStateCode: "19 (West Bengal)",
      placeOfSupply: "Kolkata, Howrah, and Salt Lake are all in West Bengal, so jobs there are normally CGST + SGST. Installations in Jharkhand, Odisha, or Bihar are usually IGST. Check with your CA.",
      professionalTax: "West Bengal levies Professional Tax on salaries. TeamShastra can show an indicative PT line on payslips; confirm the slab with your CA.",
      language: "The app is fully available in Bengali, so technicians can read jobs and check in in Bengali while the office uses English.",
      season: "June–September monsoon and high humidity slow outdoor work. The Durga Puja season brings a burst of lighting and electrical jobs, followed by a quieter office period."
    },
    challenges: [
      "Old buildings and narrow lanes make site directions hard to pass on by phone",
      "Puja-season demand arrives all at once and needs extra crews for a few weeks",
      "Monsoon humidity causes repeat faults that need a visit history to diagnose",
      "Technicians are more comfortable reading Bengali than English"
    ],
    industries: [
      { name: "Old-building electrical work", description: "Contractors rewiring and maintaining older buildings in central and north Kolkata." },
      { name: "CCTV for complexes & offices", description: "Installers covering New Town, Rajarhat, and Salt Lake Sector V." },
      { name: "Festive lighting & electrical", description: "Crews handling Puja-season lighting and temporary electrical work." },
      { name: "Small-unit equipment service", description: "Service teams visiting engineering and workshop units in Howrah." }
    ],
    useCases: [
      {
        title: "Site notes for hard-to-find panels",
        industry: "Electrical",
        problem: "A Behala contractor's technicians kept calling the office to find the meter room in older buildings.",
        solution: "Each customer keeps photos and comments from past jobs, so the next technician sees exactly where to go.",
        benefits: ["Fewer calls", "Photo history", "Faster first visit"]
      },
      {
        title: "Puja-season crew planning",
        industry: "Lighting & electrical",
        problem: "In the weeks before Puja, a Howrah firm doubled its jobs and lost track of temporary staff.",
        solution: "Temporary technicians are invited for the season, check in daily, and get paid per day from the same attendance.",
        benefits: ["Per-day wages", "Daily attendance", "Clear payout"]
      },
      {
        title: "A Bengali-first team",
        industry: "CCTV & security",
        problem: "A Dum Dum installer's technicians avoided the job app because it was only in English.",
        solution: "Each technician switches TeamShastra to Bengali; the office stays in English.",
        benefits: ["Better adoption", "Fewer misread jobs", "Same workspace"]
      }
    ],
    caseStudy: {
      companyName: "Howrah Bridge Field Services",
      location: "Kolkata — Salt Lake, Howrah, and Behala",
      problem: ["Technicians calling for site directions", "Puja-season staff paid from a register", "An English-only app nobody used"],
      results: ["Site photos and notes on every customer", "Per-day wages from daily attendance", "Team using the app in Bengali"]
    },
    faqs: [
      { question: "Is TeamShastra available in Bengali?", answer: "Yes. Each person can switch the app to Bengali, Hindi, English, Marathi, or Gujarati." },
      { question: "Can I pay temporary Puja-season staff per day?", answer: "Yes. Set a per-day wage, and salary for the month is worked out from attendance." },
      { question: "Is a job in Howrah or Salt Lake CGST + SGST?", answer: "Both are in West Bengal, so it is normally CGST + SGST for a Kolkata business. Your CA should confirm cross-state work." },
      { question: "Can technicians see notes from earlier visits?", answer: "Yes. Photos and comments from past jobs stay on the customer's history." }
    ]
  }),
  buildCityProfile({
    slug: "ahmedabad",
    name: "Ahmedabad",
    state: "Gujarat",
    tier: "tier-1",
    localAreas: ["SG Highway", "GIFT City", "Naroda", "Vatva", "Sanand", "Bopal", "Maninagar", "Prahladnagar"],
    nearbyCitySlugs: ["vadodara", "surat", "jaipur"],
    metaDescription: "Field service software for Ahmedabad: GIDC equipment service, shop and society CCTV, summer AC peaks, a Gujarati app, and Gujarat GST invoices.",
    whyIntro: "Ahmedabad's service work is split between the industrial estates of Naroda, Vatva, and Sanand, the offices along SG Highway and in GIFT City, and thousands of shops and housing societies across the city.",
    intro: [
      "Industrial customers in the GIDC estates want planned maintenance and a report for each visit. Shops and societies want CCTV and electrical work done quickly and billed with GST. April to June heat makes AC and cooling work the busiest part of the year, and the Navratri–Diwali stretch slows offices while lighting work picks up.",
      "TeamShastra runs both sides from one workspace, in Gujarati if the team prefers: industrial visits with service reports, and quick shop jobs with WhatsApp invoices."
    ],
    localContext: {
      gstStateCode: "24 (Gujarat)",
      placeOfSupply: "Ahmedabad, Sanand, and Gandhinagar are in Gujarat, so jobs there are normally CGST + SGST. Work in Rajasthan or Maharashtra is usually IGST. Confirm with your CA.",
      professionalTax: "Gujarat levies Professional Tax on salaries. TeamShastra can show an indicative PT line on payslips; your CA should confirm the slab.",
      language: "The app is fully available in Gujarati, so technicians and managers can each work in Gujarati, Hindi, or English.",
      season: "April–June heat drives AC and cooling calls. Navratri and Diwali slow office work but add lighting and electrical jobs."
    },
    challenges: [
      "GIDC plants want scheduled maintenance with a written report for each visit",
      "Shop owners expect the invoice on WhatsApp the same day the job is done",
      "Summer AC calls overload a phone-based office",
      "A growing list of AMC customers no longer fits in a spreadsheet"
    ],
    industries: [
      { name: "GIDC equipment service", description: "Maintenance teams for units in Naroda, Vatva, Odhav, and Sanand." },
      { name: "Shop & society CCTV", description: "Installers covering markets, showrooms, and housing societies across the city." },
      { name: "AC & electrical service", description: "Technicians handling the April–June cooling peak." },
      { name: "Office facilities", description: "Contractors maintaining offices on SG Highway and in GIFT City." }
    ],
    useCases: [
      {
        title: "Planned GIDC maintenance",
        industry: "Equipment service",
        problem: "A Vatva service company had no record of which machines it had serviced at each plant.",
        solution: "Each plant is a customer with an AMC and due visits; every visit adds a service report and photos.",
        benefits: ["Due-visit list", "Report per visit", "Plant history"]
      },
      {
        title: "Same-day WhatsApp invoices for shops",
        industry: "CCTV & security",
        problem: "A Maninagar installer billed shops at month end, and payments came late.",
        solution: "The technician closes the job, the office raises a GST invoice from it, and the PDF goes out on WhatsApp the same day.",
        benefits: ["Faster billing", "Pending collections list", "Payments recorded"]
      },
      {
        title: "A Gujarati-first team",
        industry: "Electrical",
        problem: "A Naroda contractor's technicians preferred Gujarati and avoided English apps.",
        solution: "Each person sets TeamShastra to Gujarati; the owner can keep using English.",
        benefits: ["Easier adoption", "Fewer mistakes", "One workspace"]
      }
    ],
    caseStudy: {
      companyName: "Sabarmati Field Services",
      location: "Ahmedabad — Naroda, Vatva, and SG Highway",
      problem: ["No machine history per plant", "Shop invoices sent at month end", "Technicians avoiding an English app"],
      results: ["Plant visits and reports on one record", "Invoices on WhatsApp the day the job closes", "Team working in Gujarati"]
    },
    faqs: [
      { question: "Is TeamShastra available in Gujarati?", answer: "Yes. Each person can use Gujarati, Hindi, English, Marathi, or Bengali." },
      { question: "Can I schedule maintenance visits for GIDC plants?", answer: "Yes. Add an AMC contract for each plant and see which ones are due or overdue for a visit." },
      { question: "Can I send the GST invoice on WhatsApp after the job?", answer: "Yes. Create the invoice from the job and share the PDF on WhatsApp." },
      { question: "Does Gujarat Professional Tax show on payslips?", answer: "Payslips can show an indicative PT deduction. Your CA handles the actual payment." }
    ]
  })
];
