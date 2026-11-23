import { sources } from "../sources";
import type { Guide } from "../types";

const published = "2026-11-23";

export const startGuides: Guide[] = [
  {
    slug: "start-cctv-installation-business",
    category: "start",
    title: "How to Start a CCTV Installation Business | TeamShastra",
    metaDescription:
      "Planning a CCTV installation business in India? Skills, suppliers, GST and Udyam registration, your first customers, quoting and AMCs, in honest steps.",
    h1: "How to start a CCTV installation business in India",
    primaryKeyword: "CCTV installation business",
    secondaryKeywords: ["how to start CCTV business", "CCTV installer business plan", "CCTV dealer and installer"],
    datePublished: published,
    dateModified: published,
    summary:
      "To start a CCTV installation business, learn the work on real sites first, pick one or two reliable suppliers, register where you need to, and win your first customers through people who already trust you. Quote clearly, document every install with photos, and offer an AMC from day one. Steady AMC income matters more than one big project.",
    sections: [
      {
        id: "learn-first",
        heading: "Learn the work on real sites first",
        paragraphs: [
          "Plenty of installers who last didn't start with a shop. They spent a year or two with someone else, crimping cables on rooftops, fixing a recorder that wouldn't show channel 3, and learning why a camera facing the sun shows nothing at noon.",
          "If you can't do that, at least learn these by hand: running and terminating cable neatly, setting up a recorder and hard disk, IP addressing for network cameras, mobile viewing setup, and earthing basics. Customers judge you on the first visit. A messy cable job loses the referral."
        ]
      },
      {
        id: "suppliers",
        heading: "Choose suppliers before you choose customers",
        paragraphs: [
          "Your margin and your reputation both depend on the distributor. Look for one who keeps stock, gives you a proper GST bill, and handles warranty replacements without making you wait three weeks.",
          "Start with one or two camera brands, not six. You'll learn their menus, their common faults and their warranty process. Carrying every brand looks impressive and ties up cash in stock that doesn't move."
        ]
      },
      {
        id: "registrations",
        heading: "Registrations to think about",
        subsections: [
          {
            heading: "GST",
            paragraphs: [
              "Section 22 of the CGST Act requires registration once your aggregate turnover in a financial year exceeds ₹20 lakh, or ₹10 lakh in special category States. Many business customers, such as societies, offices and shops, want a GST bill anyway, so some installers register earlier. Talk to your CA about which suits you, and whether the composition scheme fits."
            ]
          },
          {
            heading: "Udyam",
            paragraphs: [
              "Udyam registration on the Ministry of MSME's portal is free and paperless. It records you as a micro or small enterprise. Use only the government portal; it warns about fake sites that charge for the same thing."
            ]
          },
          {
            heading: "Local licences",
            paragraphs: [
              "Your State or city may need a shop and establishment registration or a trade licence once you have premises or staff. Rules differ, so check with your local office or CA."
            ]
          }
        ]
      },
      {
        id: "money",
        heading: "What you need to start, roughly",
        paragraphs: [
          "Tools come first: a good drill, a ladder that actually reaches, a crimping kit, a cable tester, a test monitor and a laptop. Add a two-wheeler with a carrier. A small stock of cable, connectors and a couple of spare cameras saves you trips.",
          "Keep cash aside for the gap between buying stock and getting paid. Societies and offices can take thirty days to release money. That gap, not the tools, is what sinks most new installers."
        ]
      },
      {
        id: "first-customers",
        heading: "Your first ten customers",
        list: [
          "Shops and clinics in your own area, where people already know your face",
          "Housing society committees, through one resident who vouches for you",
          "Electricians and builders who need someone for the camera part of a job",
          "Old customers of the installer you trained with, only if you left on good terms",
          "A Google Business Profile with real photos of your own installs"
        ],
        after: [
          "Don't promise the lowest price. Promise a neat job, a clear bill and a callback within a day. That's what customers repeat to their neighbours."
        ]
      },
      {
        id: "quoting",
        heading: "Quoting so you don't lose money",
        paragraphs: [
          "Visit the site before you quote. Count camera points, measure cable runs, check where the recorder will sit and whether there's power. Write the quote line by line: each camera, the recorder, hard disk, cable by length, connectors, power supply, labour.",
          "Say what's not included, such as civil work, conduit or extra cable beyond the estimate. A common dispute is a cable run that turned out twice as long. A line saying \"extra cable charged per metre at the rate shown\" saves that conversation."
        ]
      },
      {
        id: "after-install",
        heading: "After the install: photos, handover and AMC",
        paragraphs: [
          "Take photos of the recorder setup, cable joints and each camera's view. Show the customer how to use the mobile app before you leave, and write down the password handover. When something breaks in six months, those photos tell you what was there.",
          "Offer an AMC at handover, when the customer is happiest with you. A few quarterly visits a year across many sites gives you income in the slow months and keeps you first in line when they want more cameras."
        ]
      }
    ],
    helps:
      "TeamShastra lets an installer quote from the site, turn the approved quote into a job and a GST invoice, and keep before-and-after photos on the job. AMC contracts show which visits are due this week. As the team grows, check-in, salary and staff advances sit in the same app.",
    faqs: [
      {
        question: "Do I need GST registration to start a CCTV business?",
        answer:
          "Section 22 of the CGST Act requires registration once aggregate turnover crosses ₹20 lakh in a year, or ₹10 lakh in special category States. Many installers register earlier because business customers want GST bills. Pick the route that suits you with your CA's help."
      },
      {
        question: "Is Udyam registration necessary?",
        answer:
          "It isn't a licence to work, but it's free on the Ministry of MSME's portal and records you as a small enterprise. Use only the official portal, which warns visitors about fake sites that charge a fee."
      },
      {
        question: "How many brands should a new installer stock?",
        answer:
          "One or two. You'll learn their settings and common faults, and your distributor will look after you better. Carrying many brands ties up cash in stock and makes warranty claims harder to track."
      },
      {
        question: "How much can a CCTV installer earn?",
        answer:
          "Earnings vary with your area, your pricing and how many AMCs you hold. We won't give a figure, because any number would be a guess. Track your margin on each job and your monthly AMC income, and you'll know your own answer."
      },
      {
        question: "What should go in a CCTV quote?",
        answer:
          "Each camera, the recorder, hard disk size, cable by length, connectors, power supply and labour on separate lines. Add what's excluded, such as civil work, and the rate for extra cable. Clear quotes prevent most payment disputes."
      }
    ],
    sources: [sources.cgstSection22, sources.udyam],
    sourcesChecked: published,
    legal: false,
    relatedFeatures: ["quotation-estimate-app", "job-work-order-management", "amc-contract-management"],
    relatedIndustries: ["cctv-installer-software"],
    relatedGuides: ["amc-contract-format", "gst-invoice-format-for-service-business", "start-electrical-contracting-business"]
  },
  {
    slug: "start-ac-service-business",
    category: "start",
    title: "How to Start an AC Service Business in India | TeamShastra",
    metaDescription:
      "Thinking of an AC service business? Skills and tools, brand tie-ups, GST and Udyam, pricing service and gas work, and getting through the summer rush.",
    h1: "How to start an AC service business in India",
    primaryKeyword: "AC service business",
    secondaryKeywords: ["AC repair business", "AC mechanic business", "AC service centre setup"],
    datePublished: published,
    dateModified: published,
    summary:
      "An AC service business runs on two seasons: a rush from April to June when everyone's AC fails at once, and quieter months you fill with AMCs and installations. Learn the trade properly, buy tools that keep you safe, price each type of job clearly, and build a customer list before summer arrives. Your first summer decides your reputation.",
    sections: [
      {
        id: "season",
        heading: "Plan around the season, not the calendar",
        paragraphs: [
          "In March your phone is quiet. By the second week of April, it doesn't stop. Customers want a service yesterday, half the calls are gas top-ups, and every technician in town is booked till evening.",
          "If you start in May, you'll be overwhelmed and make mistakes. Start in the cooler months. Use that time to practise, build supplier links and sign a few AMCs, so the rush feels like work and not chaos."
        ]
      },
      {
        id: "skills",
        heading: "Skills you need before your first customer",
        list: [
          "Wet servicing of split and window units without flooding the customer's wall",
          "Reading pressure and finding leaks before topping up gas",
          "Vacuuming and brazing for installation and pipe repairs",
          "Basic electrical faults: capacitor, contactor, PCB symptoms",
          "Mounting outdoor units safely at height"
        ],
        after: [
          "Short courses help, but nothing replaces a season working under an experienced mechanic. Customers can tell within five minutes whether you know what you're doing."
        ]
      },
      {
        id: "tools",
        heading: "Tools and safety",
        paragraphs: [
          "The basic kit is a gauge manifold, vacuum pump, brazing set, flaring tool, clamp meter, leak detector, pressure washer and a strong ladder. A safety belt for outdoor units on upper floors isn't optional. One fall ends a business.",
          "Buy tools that last rather than the cheapest. A vacuum pump that dies in May costs you a week of jobs."
        ]
      },
      {
        id: "registrations",
        heading: "Registrations",
        paragraphs: [
          "Under section 22 of the CGST Act, you must register for GST once aggregate turnover in a financial year exceeds ₹20 lakh, or ₹10 lakh in special category States. Offices, shops and hotels will often ask for a GST bill, so think about this early with your CA.",
          "Signing up for Udyam costs nothing; it's done online on the MSME ministry's portal. Depending on your State and city, you may also need a shop registration or trade licence once you take premises or hire staff."
        ]
      },
      {
        id: "pricing",
        heading: "Price each kind of job separately",
        table: {
          caption: "Common AC job types and how to price them",
          head: ["Job", "How to price"],
          rows: [
            ["General service", "Fixed price per unit; extra for jet wash or chemical wash"],
            ["Gas top-up or refill", "Based on leak test and gas used; never a blind top-up"],
            ["Installation", "Fixed labour plus copper pipe and stand by length"],
            ["Uninstallation and shifting", "Fixed, with pump-down included"],
            ["Repairs", "Visit charge plus parts, quoted before work starts"],
            ["AMC", "Yearly fee for a set number of services, parts as agreed"]
          ]
        },
        after: [
          "Write your rates down and share them on WhatsApp before the visit. Bad reviews for AC mechanics often start with a bill that was a surprise.",
          "Keep a separate rate for high-rise outdoor units that need ropes or a stand, and say so on the rate card. It's honest pricing for real extra risk, and customers accept it when they see it written before you arrive."
        ]
      },
      {
        id: "customers",
        heading: "Getting customers before summer",
        paragraphs: [
          "Offer pre-summer servicing to housing societies in February and March at a group rate. Ten units on one visit fills a day and gives you ten households who now have your number.",
          "Tie up with local AC dealers who need installers. Small offices and clinics like an AMC that promises a service before the heat. Builders handing over flats need installation teams in batches."
        ]
      },
      {
        id: "summer",
        heading: "Surviving the rush",
        list: [
          "Fix a daily call limit per technician and stick to it",
          "Group calls by area so nobody crosses the city twice",
          "Give AMC customers priority, as you promised",
          "Tell new callers an honest date instead of \"today\"",
          "Collect payment on completion, not \"later this week\""
        ],
        after: [
          "You'll be tempted to hire anyone in April. A bad helper with a pressure washer damages a customer's wall and your name. Hire in winter and train them."
        ]
      }
    ],
    helps:
      "TeamShastra gives an AC team a today board of who's free, busy or on leave, so summer calls are assigned quickly. Technicians start jobs, add photos and record payment on the phone. AMC visits show up when they're due, and GST invoices go to the customer on WhatsApp.",
    faqs: [
      {
        question: "Do I need a licence to start an AC repair business?",
        answer:
          "Licence needs depend on where you work. You may need a shop registration or trade licence, and GST once turnover crosses the limit in section 22 of the CGST Act. Check local rules with your CA."
      },
      {
        question: "When is the best time to start an AC service business?",
        answer:
          "Start in the cooler months, such as October to February. You'll have time to practise, sign AMCs and build a customer list. Starting in April means learning under pressure, which leads to mistakes and complaints."
      },
      {
        question: "How should I price a gas top-up?",
        answer:
          "Test for leaks first, then price on the gas actually used plus labour. A top-up without fixing the leak brings the customer back angry in a month. Explain this before you start, so they understand the charge."
      },
      {
        question: "Is an AC AMC worth offering?",
        answer:
          "Yes, if you can keep the visits. AMCs bring income in the slow months and loyal customers in the rush. Don't sign more than your team can serve in May, because a missed AMC visit in peak summer loses the contract."
      },
      {
        question: "How many technicians do I need at the start?",
        answer:
          "Many owners start alone or with one helper and add people before the next summer. Grow when your calls are consistently more than you can finish, not because of one busy week."
      }
    ],
    sources: [sources.cgstSection22, sources.udyam],
    sourcesChecked: published,
    legal: false,
    relatedFeatures: ["technician-dispatch-today-board", "amc-contract-management", "gst-billing-invoice"],
    relatedIndustries: ["hvac-service-management"],
    relatedGuides: ["amc-contract-format", "overtime-calculation-for-staff", "start-appliance-repair-business"]
  },
  {
    slug: "ro-service-business-guide",
    category: "start",
    title: "RO Service Business: Visits, Stock and AMC | TeamShastra",
    metaDescription:
      "Running an RO service business? Plan filter-change visits, keep the right spare stock, sell AMCs that renew, and register for GST and Udyam when needed.",
    h1: "RO service business: visits, spare stock and AMCs that renew",
    primaryKeyword: "RO service business",
    secondaryKeywords: ["water purifier service business", "RO AMC", "RO filter change schedule"],
    datePublished: published,
    dateModified: published,
    summary:
      "An RO service business lives on repeat visits: filter changes, membrane replacements and yearly AMCs across hundreds of homes. Keep a schedule for every installed unit, stock the parts that fail most, and call before the customer calls you. Renewals, not new installs, are what keep the business steady.",
    sections: [
      {
        id: "how-it-earns",
        heading: "How an RO service business really earns",
        paragraphs: [
          "Installing a new purifier is a one-time job. The steady work is what follows: sediment and carbon filters every few months, a membrane every year or two depending on water quality, and the odd pump or SMPS failure.",
          "Each installed unit is a customer for years if you show up on time. Miss a filter change, and the next time the water tastes bad they'll call whoever's number is on the sticker their neighbour has."
        ]
      },
      {
        id: "schedule",
        heading: "Build a visit schedule for every unit",
        paragraphs: [
          "Write down, for every unit you install or service: the customer's name, address, phone, model, install date, last filter change, and next due date. Water quality changes how often filters clog, so note the TDS reading at install."
        ],
        table: {
          caption: "Example schedule for one household unit (intervals vary with water quality)",
          head: ["Part", "Typical check", "Note"],
          rows: [
            ["Sediment filter", "Every visit", "Clogs fastest with borewell or tanker water"],
            ["Carbon filters", "At planned intervals", "Taste and smell are the early sign"],
            ["RO membrane", "Yearly check", "Replace when output TDS or flow falls"],
            ["Pump and SMPS", "Each visit", "Listen for noise; check voltage"],
            ["Tank and taps", "Each visit", "Clean and check for leaks"]
          ]
        },
        after: [
          "These are common practices, not a rule. Follow the manufacturer's guidance for the models you service."
        ]
      },
      {
        id: "spare-stock",
        heading: "Keep the right spare stock",
        paragraphs: [
          "Running out of a common filter means a second trip, which kills your margin on small jobs. Keep a small van stock of the parts that fail most and refill it every week from the godown.",
          "Count stock once a week. Filters walk away quietly, a few at a time, and you only notice at month end when the numbers don't match."
        ],
        list: [
          "Sediment and carbon filters for your three most common models",
          "Two or three membranes",
          "Pumps, SMPS units, solenoid valves and float valves",
          "Pipes, connectors, taps and clamps",
          "A TDS meter for every technician"
        ]
      },
      {
        id: "amc",
        heading: "Selling RO AMCs that renew",
        paragraphs: [
          "An RO AMC usually covers a set number of service visits and some filter changes for a yearly fee. Say clearly whether the membrane is included. That one line causes more arguments than anything else.",
          "Call before the due date. When the customer hears from you first, renewing feels natural. Thirty days before the AMC ends, send a short WhatsApp with what you did this year and the renewal amount."
        ]
      },
      {
        id: "registrations",
        heading: "Registrations",
        paragraphs: [
          "Section 22 of the CGST Act requires GST registration once your aggregate turnover in a financial year exceeds ₹20 lakh, or ₹10 lakh in special category States. Many small RO dealers ask their CA about the composition scheme; it has its own conditions.",
          "Udyam registration is free on the Ministry of MSME's portal. Local shop or trade licences depend on your city."
        ]
      },
      {
        id: "complaints",
        heading: "Handling \"the water tastes strange\" calls",
        paragraphs: [
          "These calls come in bunches after the monsoon, or when a society switches from municipal water to tankers. Usually a filter is choked, not broken, but the customer is worried about their children drinking it.",
          "Answer the same day, even if the visit is tomorrow. Tell them to use boiled water until you reach. On the visit, check TDS in and out, show them the reading, and explain what you changed. A customer who sees the meter trusts the bill. Note the reading on the job so the next technician knows the history."
        ]
      },
      {
        id: "team",
        heading: "Running a team of RO technicians",
        list: [
          "Give each technician an area, so they learn the water and the customers",
          "Plan the next day's visits the evening before",
          "Ask for a TDS reading and a photo on every visit",
          "Collect cash or UPI on the spot and record it the same day",
          "Count van stock every Saturday"
        ],
        after: [
          "Cash handling is where small RO businesses lose money quietly. A clear record of what each technician collected, every day, keeps everyone honest without a fight."
        ]
      }
    ],
    helps:
      "TeamShastra keeps each customer's AMC and due visits, so filter-change calls are planned instead of remembered. Technicians record parts used, photos and payment on the job. Stock reduces with each sale, and you can see the cash each person holds before they leave for the day.",
    faqs: [
      {
        question: "How often should RO filters be changed?",
        answer:
          "Each model and water source is different. Borewell and tanker water clog filters faster than municipal supply. Follow the manufacturer's guidance, check TDS and flow on each visit, and adjust the schedule for each area."
      },
      {
        question: "Should an RO AMC include the membrane?",
        answer:
          "Some do and some don't. Membranes are costly, so many businesses offer two AMC types: one with filters only, and one that includes the membrane at a higher fee. Write clearly which one the customer chose."
      },
      {
        question: "How do I get more RO AMC renewals?",
        answer:
          "Keep every promised visit, then contact the customer about thirty days before the end date with a short summary of the year. Customers who never had to chase you rarely shop around."
      },
      {
        question: "How much stock should a technician carry?",
        answer:
          "Enough filters and small parts for the day's visits plus a few common spares. Refill from the godown weekly and count it. Too much van stock gets damaged or goes missing; too little means repeat trips."
      },
      {
        question: "Do I need GST registration for an RO service business?",
        answer:
          "Once aggregate turnover crosses the limit in section 22 of the CGST Act, yes. Below it, registration is optional. Many dealers ask their CA about the composition scheme, which has its own conditions."
      }
    ],
    sources: [sources.cgstSection22, sources.udyam],
    sourcesChecked: published,
    legal: false,
    relatedFeatures: ["amc-contract-management", "inventory-stock-management", "staff-cash-bank-accounts"],
    relatedIndustries: ["ro-water-purifier-service-software"],
    relatedGuides: ["amc-contract-format", "bill-of-supply-vs-tax-invoice"]
  }
];
