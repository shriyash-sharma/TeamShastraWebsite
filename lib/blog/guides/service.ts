import { sources } from "../sources";
import type { Guide } from "../types";

const published = "2026-11-23";

export const serviceGuides: Guide[] = [
  {
    slug: "amc-contract-format",
    category: "service",
    title: "AMC Contract Format: What to Include | TeamShastra",
    metaDescription:
      "An AMC contract format for service businesses: scope, visits, response time, parts, payment and renewal, with clause headings and a way to track due visits.",
    h1: "AMC contract format: what to put in an annual maintenance contract",
    primaryKeyword: "AMC contract format",
    secondaryKeywords: ["annual maintenance contract", "AMC agreement format", "AMC renewal reminder"],
    datePublished: published,
    dateModified: published,
    summary:
      "A workable AMC contract format covers eight things: the parties, the equipment, what's included, how many visits, how fast you respond to a breakdown, how parts are charged, how and when the customer pays, and how renewal works. Keep it to two pages in plain language. Then track each due visit, because a missed visit is how many AMCs are lost.",
    sections: [
      {
        id: "why-amcs-fail",
        heading: "Why AMCs go sour",
        paragraphs: [
          "The contract usually isn't the problem. The problem is the phone call in month nine: the society secretary says the cameras haven't been checked since March, and he's right. Nobody missed it on purpose. The visit just wasn't on anyone's list.",
          "The second problem is vague scope. The customer thinks a burnt adapter is covered. You think parts are extra. Neither of you can point to a line that settles it. A clear format fixes the second problem. A visit tracker fixes the first."
        ]
      },
      {
        id: "clauses",
        heading: "Clause headings to use",
        paragraphs: ["Here's a skeleton that works for CCTV, AC, RO, fire safety, lift and IT maintenance. Change the details, keep the headings."],
        list: [
          "Parties: your business name, GSTIN if registered, the customer's name and site address",
          "Contract period: start date, end date and number of months",
          "Equipment covered: model, serial number and location for each item",
          "Scope: what a routine visit includes, such as cleaning, checking, settings and a short report",
          "Number of visits: for example four preventive visits a year, roughly every three months",
          "Breakdown calls: whether they're included, how many, and the response time you promise",
          "Parts and consumables: included, excluded, or charged at a discount",
          "Fees and payment: amount, GST shown separately on the invoice, advance or in parts",
          "Customer's duties: site access, power, a contact person, timely reporting of faults",
          "Exclusions: damage from misuse, power surges, water, theft, or third-party work",
          "Renewal: notice period and whether the price can change",
          "Ending the contract early: notice, refund of unused months, or none",
          "Signatures and date"
        ],
        ordered: true
      },
      {
        id: "comprehensive-or-not",
        heading: "Comprehensive or non-comprehensive?",
        paragraphs: [
          "A comprehensive AMC includes parts, usually except a list of costly or wear-and-tear items. A non-comprehensive AMC covers labour and visits only; parts are quoted when needed.",
          "Comprehensive contracts sell well to offices that want one fixed bill. They're risky for you if the equipment is old. Inspect before you quote, list any existing faults in the contract, and price the parts risk honestly. For a ten-year-old split AC, many service firms offer only a non-comprehensive AMC."
        ]
      },
      {
        id: "response-times",
        heading: "Promising a response time you can keep",
        paragraphs: [
          "\"Same day\" sounds good in a sales meeting. In peak summer, with three technicians and forty AMC customers, it's a promise you'll break by June.",
          "Write a time you can meet on your worst week, such as within one working day for city sites and two for outskirts. Define what counts as a response: a phone call, a visit, or a fix. Customers mostly want to know someone is coming. They forgive a part that takes two days if you told them on day one."
        ]
      },
      {
        id: "billing",
        heading: "Billing an AMC",
        paragraphs: [
          "If you're registered under GST, the AMC fee is a supply of services and you issue a tax invoice with the fields rule 46 of the CGST Rules lists. Rule 47 sets a 30-day limit for invoicing a service from the date of supply. If you bill quarterly or in instalments, check with your CA how and when each invoice should be raised.",
          "Show the AMC period on the invoice, for example \"AMC for 4 cameras, 1 April 2026 to 31 March 2027\". When the customer's accountant files it, they'll know what it was for."
        ]
      },
      {
        id: "tracking-visits",
        heading: "Tracking due visits so none are missed",
        paragraphs: [
          "Once you have more than ten AMCs, memory and a wall calendar stop working. You need a list that tells you every Monday which visits fall due this week and which contracts end this month."
        ],
        list: [
          "When you sign an AMC, enter every planned visit date at once",
          "Each Monday, look at visits due in the next seven days and assign them",
          "When the visit is done, close it with photos and a short note",
          "Thirty days before the end date, call about renewal",
          "If a customer cancels a visit, note the reason and the new date"
        ],
        after: [
          "The renewal call is where AMC money is made. A customer who got all four visits on time renews without asking for a discount. One who chased you twice will shop around."
        ]
      },
      {
        id: "sample-schedule",
        heading: "Example visit schedule",
        table: {
          caption: "Example schedule for a one-year AMC with four preventive visits",
          head: ["Visit", "Due in", "What's checked"],
          rows: [
            ["1", "Month 1", "Full inspection, cleaning, settings saved, faults listed"],
            ["2", "Month 4", "Cleaning, recording check, cable joints"],
            ["3", "Month 7", "Before monsoon: housings, seals, earthing"],
            ["4", "Month 10", "Full check and renewal discussion"]
          ]
        }
      }
    ],
    helps:
      "TeamShastra keeps AMC contracts with their customer, site and visit dates. The AMC list shows visits due within 7 days and contracts ending within 30 days. When a job made from an AMC visit is completed, the visit is marked done, with photos and a service report PDF you can share with the customer.",
    faqs: [
      {
        question: "What is an annual maintenance contract?",
        answer:
          "It's a yearly agreement where you service the customer's equipment on a schedule for a fixed fee. It usually includes a set number of preventive visits and may include breakdown calls and parts, depending on what you both agree in writing."
      },
      {
        question: "How many visits should an AMC include?",
        answer:
          "Three or four preventive visits a year is common for cameras, ACs and purifiers. Busy sites or older equipment may need more. Price each visit honestly and don't promise more than your team can actually deliver in peak season."
      },
      {
        question: "Should parts be included in the AMC price?",
        answer:
          "That's the difference between comprehensive and non-comprehensive contracts. Include parts only if you've inspected the equipment and priced the risk. Otherwise cover labour and visits, and quote parts when they fail."
      },
      {
        question: "Do I charge GST on an AMC?",
        answer:
          "If you're registered, the AMC fee is a taxable service and you issue a tax invoice with the details rule 46 requires. Composition suppliers issue a bill of supply instead. Check the rate for your service on CBIC's rate list or with your CA."
      },
      {
        question: "How do I stop missing AMC visits?",
        answer:
          "Enter every visit date when you sign the contract, then review visits due in the next seven days each week. Assign them on Monday and close them with photos. A weekly habit beats any reminder you set once and forget."
      }
    ],
    sources: [sources.rule46, sources.rule47],
    sourcesChecked: published,
    legal: true,
    relatedFeatures: ["amc-contract-management", "service-report-pdf"],
    relatedIndustries: ["cctv-installer-software", "ro-water-purifier-service-software"],
    relatedGuides: ["ro-service-business-guide", "gst-invoice-format-for-service-business"]
  },
  {
    slug: "stop-fake-attendance-field-staff",
    category: "service",
    title: "Fake Attendance by Field Staff: How to Stop It | TeamShastra",
    metaDescription:
      "Fake attendance by field staff costs trust and money. Use punch-time location, office radius and selfies, and roll them out with your team's agreement.",
    h1: "Fake attendance by field staff: practical ways to stop it",
    primaryKeyword: "fake attendance",
    secondaryKeywords: ["proxy attendance", "attendance with location for field staff", "selfie attendance"],
    datePublished: published,
    dateModified: published,
    summary:
      "Fake attendance usually happens because the system makes it easy: a register at the office, or a WhatsApp message anyone can send. Record location at the moment someone punches in, add an office radius where staff start from a fixed place, and use a selfie only where proxy punching is a real problem. Tell your team what's recorded and why before you switch it on.",
    sections: [
      {
        id: "what-it-looks-like",
        heading: "What fake attendance looks like in a field team",
        paragraphs: [
          "It's rarely dramatic. A helper asks a friend to sign the register for him. A technician sends \"reached site\" from home and leaves forty minutes later. Someone punches in from the tea stall outside the godown and says the gate was locked.",
          "Each one is small. Over a month, across a team of eight, it adds up to paid hours nobody worked, and the honest people notice. That last part matters more than the money."
        ]
      },
      {
        id: "why-registers-fail",
        heading: "Why the register and WhatsApp don't work",
        paragraphs: [
          "A paper register only proves someone wrote a time. A WhatsApp message proves a phone was somewhere with signal. Neither tells you where the person was or whether it was really them.",
          "Field staff also don't start at one place. One goes straight to a site, another picks up stock first. A system built for an office gate doesn't fit their day."
        ]
      },
      {
        id: "methods",
        heading: "Methods that actually work",
        subsections: [
          {
            heading: "Location at punch time",
            paragraphs: [
              "Record the phone's location at the moment of check-in and check-out, and nothing in between. You see where the day started and ended. That's usually enough to settle \"I was at the site at ten\"."
            ]
          },
          {
            heading: "Office or site radius",
            paragraphs: [
              "If staff start at the office or a godown, allow check-in only within a set distance of that pin. If you have two branches, add both. This stops the tea-stall punch without watching anyone."
            ]
          },
          {
            heading: "A live selfie at check-in",
            paragraphs: [
              "A photo taken in the app, not picked from the gallery, stops one person punching for another. Use it where proxy punching is a real issue. For a small team that knows each other, it can feel like an insult, so think before you switch it on."
            ]
          },
          {
            heading: "Job start and job photos",
            paragraphs: [
              "When a technician starts a job and adds before-and-after photos, each step carries a time and a place. That tells you more about the working day than any punch."
            ]
          }
        ]
      },
      {
        id: "comparison",
        heading: "Which method fits which problem",
        table: {
          caption: "Attendance methods compared",
          head: ["Problem", "What helps", "What to watch"],
          rows: [
            ["Friend signs the register", "Live selfie at check-in", "Explain why before you start"],
            ["Punching from home", "Location at punch time", "Weak signal in basements"],
            ["Punching outside the office", "Office radius", "Set a sensible distance"],
            ["Arguments about hours on site", "Job start time and photos", "Technicians must actually use them"]
          ]
        }
      },
      {
        id: "privacy",
        heading: "Respect privacy: punch-time, not all-day",
        paragraphs: [
          "Location and photos are personal data. The government notified the Digital Personal Data Protection Rules in November 2025, with an 18-month phased timeline for compliance. Read what applies to your business, or ask your CA or lawyer, before you collect more than you need.",
          "In practice, collect the least that solves your problem. Punch-time location answers almost every question. Following someone around all day doesn't make them more honest. It makes good people look for another job."
        ]
      },
      {
        id: "rolling-out",
        heading: "How to roll it out without a revolt",
        list: [
          "Call a short team meeting and say what problem you're solving",
          "Show the screen they'll use and exactly what it records",
          "Say what you won't do, such as tracking them after check-out",
          "Run it alongside the register for two weeks before you rely on it",
          "Agree how mistakes are fixed, for example a forgotten check-out",
          "Write the rule in the appointment letter for new joiners"
        ],
        ordered: true,
        after: [
          "Teams tend to accept it once they see it also protects them. A technician who's accused of coming late now has a time and a place to show."
        ]
      },
      {
        id: "when-you-find-it",
        heading: "When you find a fake punch",
        paragraphs: [
          "Talk to the person privately first. Show them the record and ask what happened. Sometimes there's a fair answer: the phone died, the site had no signal, the supervisor sent them elsewhere.",
          "If it was deliberate, deal with it the same way every time. A warning the first time, a pay cut only for the time not worked, and a clear line after that. Being consistent matters more than being strict. The team watches how you handle the first case and decides whether the new system is fair."
        ]
      },
      {
        id: "pay-link",
        heading: "Link attendance to pay, carefully",
        paragraphs: [
          "Attendance only matters because it feeds salary. Under the Code on Wages, per the PIB factsheet, wage slips must be given on or before payment, and section 13 limits normal working hours. If attendance drives pay cuts or overtime, your records need to be right.",
          "So check the month before you freeze salary. Fix forgotten check-outs with the person, not behind their back."
        ]
      }
    ],
    helps:
      "TeamShastra records location only at check-in, check-out, job start and job photos, and works offline in basements. A company can require GPS, set one or more office pins with a radius, and turn on a live check-in selfie. There's no all-day tracking. Attendance then feeds staff salary for the month.",
    faqs: [
      {
        question: "What's the simplest way to stop proxy attendance?",
        answer:
          "A live selfie taken in the app at check-in stops one person punching for another. Pair it with punch-time location. Explain the change to your team first, so it doesn't feel like an accusation against the honest ones."
      },
      {
        question: "Is it legal to record my staff's location?",
        answer:
          "Location is personal data, and the Digital Personal Data Protection Rules were notified in November 2025 with a phased timeline. Tell staff what you record and why, collect only what you need, and ask your CA or lawyer what applies to you."
      },
      {
        question: "What if a technician has no signal at check-in?",
        answer:
          "Use an app that saves the punch on the phone and syncs it when signal returns. Basements, lift shafts and rooftops often have none. Without offline saving, honest people get marked late and stop trusting the system."
      },
      {
        question: "Should I track field staff all day?",
        answer:
          "Usually no. Punch-time location answers nearly every question owners ask, and all-day tracking damages trust. If you need more detail, job start times and job photos show the working day without following anyone home."
      },
      {
        question: "How do I handle a forgotten check-out?",
        answer:
          "Agree a rule in advance: the person tells the supervisor the same day, and the supervisor corrects it. Check these corrections before freezing the month's salary, so nobody gets an unexpected cut."
      }
    ],
    sources: [sources.dpdpRules, sources.codeOnWages],
    sourcesChecked: published,
    legal: true,
    relatedFeatures: ["gps-attendance-app", "team-location-map", "offline-field-service-app"],
    relatedIndustries: ["cctv-installer-software"],
    relatedGuides: ["staff-salary-calculation-per-day", "overtime-calculation-for-staff"]
  }
];
