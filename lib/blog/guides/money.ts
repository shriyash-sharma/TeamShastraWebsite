import { sources } from "../sources";
import type { Guide } from "../types";

const published = "2026-11-23";

export const moneyGuides: Guide[] = [
  {
    slug: "gst-registration-for-service-business",
    category: "money",
    title: "GST Registration for Service Business | TeamShastra",
    metaDescription:
      "GST registration for service business owners: the ₹20 lakh limit, registering by choice, input credit on parts, and the papers your CA needs every month.",
    h1: "GST registration for service business owners: when it's needed and what changes",
    primaryKeyword: "GST registration for service business",
    secondaryKeywords: ["GST threshold for services", "voluntary GST registration", "input tax credit for service providers"],
    datePublished: published,
    dateModified: published,
    summary:
      "A repair or installation firm must register once its turnover in a financial year crosses ₹20 lakh, or ₹10 lakh in the few states the law calls special category States. You can also register earlier by choice. After that, every sale needs a proper bill, returns go in on time, and you can claim back GST paid on parts and tools you use for work.",
    sections: [
      {
        id: "the-limit",
        heading: "When GST registration for service business becomes compulsory",
        paragraphs: [
          "Section 22 of the CGST Act sets the line. A supplier has to register in the state it supplies from once its aggregate turnover in a financial year goes above twenty lakh rupees. For a few north-eastern states the Act lists as special category States, the figure is ten lakh. A higher forty lakh limit exists, but it's only for businesses that sell goods alone, so a technician who charges for labour doesn't get it.",
          "Aggregate turnover means all your supplies added together, not just the GST-able ones. An electrician who does ₹14 lakh of wiring jobs and sells ₹7 lakh of fans and switches in a year has crossed the line, even if each part of the business looks small on its own.",
          "Once you cross it, section 25 gives you thirty days to apply. You'll need a PAN, and the portal asks for Aadhaar authentication of the person applying."
        ]
      },
      {
        id: "by-choice",
        heading: "Registering before you have to",
        paragraphs: [
          "Section 25(3) lets you register voluntarily even below the limit. Many small firms do it the year they start chasing office and factory work, because a purchase manager often won't raise a work order without a GSTIN on the quote.",
          "The catch is that every rule then applies to you in full. You charge GST on your bills, file returns even in a month with no sales, and you can't simply drop out when it gets inconvenient. Register by choice when the customers you want are asking for it, not because a friend did."
        ]
      },
      {
        id: "why-customers-ask",
        heading: "Why business customers want your GSTIN",
        paragraphs: [
          "A registered customer can take credit for the GST it pays you only if it holds a tax invoice from a registered supplier and that invoice shows up in its records through your filed return. That's section 16(2) in plain words. If you aren't registered, your bill costs them the full amount with nothing to set off, so they'll prefer a vendor who is.",
          "Housing societies and home customers usually can't claim credit, so for them the GSTIN matters less than the price. Look at who pays most of your bills before deciding."
        ]
      },
      {
        id: "input-credit",
        heading: "Claiming back GST on parts, tools and services",
        paragraphs: [
          "When you're registered, GST you pay on things used in your business can reduce the GST you owe on sales. A CCTV installer buying cameras, cable and a crimping kit from a registered dealer can usually claim that tax, provided the conditions in section 16 are met."
        ],
        list: [
          "You hold the supplier's tax invoice and you've actually received the goods or service",
          "The supplier has reported that invoice in its own return, so it appears for you",
          "The supplier has paid the tax, and you've filed your own return",
          "You pay the supplier within 180 days of the invoice; otherwise the credit has to be paid back with interest",
          "You claim it in time: section 16(4) closes the window on 30 November after the financial year ends, or when you file the annual return if that's earlier"
        ],
        after: [
          "Section 17(5) blocks some credits outright. The one that trips up service firms is clause (a): GST on motor vehicles built to carry people, with up to thirteen seats including the driver, can't be claimed except in narrow cases. Repairs and insurance for those vehicles are blocked too. A vehicle that only carries goods isn't in that clause, but confirm with your CA before you claim anything on it."
        ]
      },
      {
        id: "composition",
        heading: "The composition scheme for service providers, at a glance",
        paragraphs: [
          "Section 10(2A) gives small service providers a simpler option. If your turnover last year was fifty lakh rupees or less, you can pay tax at a flat rate set by the government on your turnover instead of the normal rates. The Act caps that rate; check the current figure on CBIC before you plan around it.",
          "It comes with strings. You can't make supplies to other states, you can't collect GST from customers, and you can't claim any input credit. You issue a bill of supply, not a tax invoice. For a firm that buys a lot of costly parts or wants corporate clients, those limits often cost more than the scheme saves."
        ]
      },
      {
        id: "filing-on-time",
        heading: "What filing late actually costs",
        paragraphs: [
          "Two separate charges kick in. Section 47 adds a late fee for each day a return is overdue, up to a cap. Section 50 adds interest on any tax you paid late. The amounts and due dates change through notifications, so check the GST portal each month rather than relying on a figure you heard last year.",
          "Late filing also hurts your customers. Your sale doesn't show in their records until your return is in, so their credit waits. A purchase manager who has to chase you twice will quietly move the next order elsewhere."
        ]
      },
      {
        id: "monthly-folder",
        heading: "The monthly folder to send your CA",
        paragraphs: ["Most owners don't file returns themselves, and they shouldn't have to. What helps is sending your CA the same set of papers by the same date every month."],
        list: [
          "Every sales bill for the month, including cancelled ones, with credit and debit notes",
          "Every purchase and expense bill that shows a supplier GSTIN",
          "A list of payments received and payments made, or the bank statement",
          "Supplier bills still unpaid after five months, so the 180-day rule doesn't catch you",
          "Any advance you took from a customer for work not yet done"
        ],
        after: ["Fix a date, say the fifth, and stick to it. A CA who gets everything at once can file early instead of calling you on the due date."]
      }
    ],
    helps:
      "Your GST tax invoices and bills of supply come out of TeamShastra with your GSTIN, the customer's GSTIN and HSN or SAC on each line. Purchase bills sit next to sales, and the GST reports screen gives your CA ready exports for GSTR-1, GSTR-3B and GSTR-9 plus a full workbook. It doesn't file returns on the GST portal; your CA still does that.",
    faqs: [
      {
        question: "Do I need GST registration if I only charge for labour?",
        answer:
          "Yes, once your aggregate turnover in a financial year crosses twenty lakh rupees, or ten lakh in a special category State. Labour charges count as a supply of services, so they're part of that turnover."
      },
      {
        question: "Can I register for GST below the turnover limit?",
        answer:
          "Yes. Section 25(3) allows voluntary registration. You then follow every rule a registered business follows: charging GST, issuing proper invoices and filing returns on time, even in quiet months."
      },
      {
        question: "Can I claim GST on my work bike or car?",
        answer:
          "Usually not. Section 17(5) blocks credit on motor vehicles meant for carrying people, with thirteen seats or fewer, except for a few uses. Ask your CA about any vehicle before claiming."
      },
      {
        question: "Is the composition scheme good for a repair business?",
        answer:
          "It suits small firms with mostly home customers and few costly purchases. You can't charge GST, claim input credit or supply to other states, so firms with business clients often find normal registration works better."
      },
      {
        question: "What happens if I file a GST return late?",
        answer:
          "You pay a late fee for each day of delay under section 47, and interest on any tax paid late under section 50. The current amounts and due dates are on the GST portal."
      }
    ],
    sources: [
      sources.cgstSection22,
      sources.cgstSection25,
      sources.cgstSection16,
      sources.cgstSection17,
      sources.cgstSection10,
      sources.cgstSection47,
      sources.cgstSection50,
      sources.gstPortal
    ],
    sourcesChecked: published,
    legal: true,
    disclaimerNote: "Turnover limits, scheme rates and fees above are taken from the CGST Act as published by CBIC on the date shown.",
    relatedFeatures: ["gst-billing-invoice", "gst-reports-ca-export"],
    relatedIndustries: [],
    relatedGuides: ["gst-invoice-format-for-service-business", "gstr-1-vs-gstr-3b", "manage-business-expenses"]
  },
  {
    slug: "collect-payments-faster-service-business",
    category: "money",
    title: "How to Collect Payment From Customers Faster | TeamShastra",
    metaDescription:
      "How to collect payment from customers faster in a service business: agree terms early, take advances, bill the same day and follow up without awkwardness.",
    h1: "How to collect payment from customers faster after a service job",
    primaryKeyword: "how to collect payment from customers faster",
    secondaryKeywords: ["pending payments service business", "payment follow-up message", "advance payment for installation"],
    datePublished: published,
    dateModified: published,
    summary:
      "Wondering how to collect payment from customers faster? Settle the terms before the work starts, take an advance on big installs, and ask for payment the moment the job is done. Send the bill the same day with a UPI QR on it, keep one list of who owes what, and follow up on a fixed day each week in a polite, short message.",
    sections: [
      {
        id: "where-money-gets-stuck",
        heading: "Where the money gets stuck",
        paragraphs: [
          "It's rarely a customer who refuses to pay. It's a technician who finished at 7 pm and didn't want to ask. A bill that went out four days late. An office customer whose accountant wants a GST bill and a service report before releasing anything, and nobody sent either.",
          "Each delay feels small. Add them up across forty jobs a month and you're funding your customers' cash flow with your own money, while salaries and supplier bills still fall due on fixed dates."
        ]
      },
      {
        id: "terms-first",
        heading: "Agree payment terms before you pick up a tool",
        paragraphs: [
          "Say it plainly on the call or in the quotation: visit charge, labour, parts, and when each is paid. Home customers pay at completion. Shops and offices may want a few days. Write the number of days on the quote so there's no argument later.",
          "If a customer pushes for credit on a small repair, offer a UPI payment on the spot instead. Most people say yes when the option is right in front of them."
        ]
      },
      {
        id: "advances",
        heading: "Take an advance on installations",
        paragraphs: [
          "For any job where you buy material first, ask for part of the amount upfront. A camera install, a new wiring run, a solar inverter: the parts can cost more than your whole margin, and you shouldn't carry that risk alone.",
          "A common split is an advance that covers the material, then the balance on handover. For example, on a ₹60,000 CCTV job with ₹38,000 of hardware, you might take ₹40,000 with the order and ₹20,000 when the cameras are live. Put the split in writing and send a receipt for the advance the same day."
        ]
      },
      {
        id: "collect-at-completion",
        heading: "How to collect payment from customers faster: ask the moment the job is done",
        paragraphs: [
          "Train your technicians to close every job with the same line: \"Work is done, here's the bill, you can pay by UPI or cash.\" Practise it with them. Many young technicians find asking for money harder than fixing a compressor.",
          "Make the technician record what happened before leaving the site: paid in cash, paid by UPI, or not paid. That one habit tells the office every evening which customers need a call, instead of finding out at month end."
        ]
      },
      {
        id: "bill-same-day",
        heading: "Send the bill on the same day",
        paragraphs: [
          "A bill that reaches the customer while the fixed fan is still spinning gets paid. One that arrives next week gets questioned. Share the PDF on WhatsApp from the site or that evening at the latest.",
          "Put everything needed to pay on the bill itself: your UPI ID, bank account details and a QR code. Every extra step, like asking for your account number, adds a day."
        ]
      },
      {
        id: "follow-up",
        heading: "Follow up without sounding rude",
        paragraphs: ["Pick one day a week, say Monday morning, and go through every unpaid bill. Short, friendly and specific works best. Here's wording you can adapt:"],
        list: [
          "Day 3: \"Hi, sharing the bill for the AC service on 12 March again. You can pay by scanning the QR on it. Thank you.\"",
          "Day 10: \"Hi, a gentle reminder about the ₹2,400 bill for the 12 March service. Please let me know if anything in it needs a correction.\"",
          "Day 20: a phone call from the owner, not the technician, asking if there's a problem with the work"
        ],
        after: [
          "That second message matters. Sometimes the bill isn't paid because something went wrong and the customer is quietly unhappy. Asking opens the door to fixing it."
        ]
      },
      {
        id: "who-owes-what",
        heading: "Keep one list of who owes what",
        paragraphs: [
          "Dues spread across a diary, the technician's phone and your memory never add up. Keep one list with the customer, bill date, amount and what was paid so far. If someone pays half by UPI and promises the rest next week, the balance should be visible to you without asking anyone."
        ],
        table: {
          caption: "A simple pending dues list (sample entries)",
          head: ["Customer", "Bill date", "Bill amount", "Paid so far", "Next step"],
          rows: [
            ["Sharma Clinic", "2 March", "₹8,500 (example)", "₹4,000", "Balance promised Friday"],
            ["Green Park Society", "28 Feb", "₹18,000 (example)", "Nothing", "Owner to call secretary"],
            ["Mehta residence", "5 March", "₹1,200 (example)", "Nothing", "Day 3 message sent"]
          ]
        }
      },
      {
        id: "when-to-stop",
        heading: "When to stop extra work for a customer who hasn't paid",
        paragraphs: [
          "Set your own rule and apply it to everyone. One option: no new non-urgent work once a bill is more than 30 days overdue, unless it's paid or a date is agreed. Breakdowns that affect safety, like a sparking board, you may still attend, and say clearly that the old bill needs clearing.",
          "Tell the customer before the rule applies, not when they call with a fresh problem. It sounds fair when it's announced, and petty when it's sprung on them."
        ]
      }
    ],
    helps:
      "A technician using TeamShastra marks a job completed and records whether the customer paid in cash, by UPI or not yet, so the office sees unpaid jobs the same evening. Bills carry your UPI QR and bank details, part payments are recorded against the bill, and the pending amount stays visible until it's cleared. Each customer's record shows their bills and dues together.",
    faqs: [
      {
        question: "How much advance should I take for an installation job?",
        answer:
          "Enough to cover the material you buy for that job, at least. Agree the split in writing on the quotation and send a receipt for the advance the same day you receive it."
      },
      {
        question: "What's a polite way to remind a customer about payment?",
        answer:
          "Keep it short and specific: the job, the date and the amount, with the bill attached again. Ask if anything needs correcting. A friendly question gets answers faster than a stern demand."
      },
      {
        question: "Should technicians collect payment or the office?",
        answer:
          "For home customers, the technician should ask at completion and record how it was paid before leaving. Office and society bills usually go through the owner or accounts person, with the report attached."
      },
      {
        question: "How often should I follow up on unpaid bills?",
        answer:
          "Once a week, on a fixed day, works for most small firms. It keeps the list short and stops overdue bills from becoming a month-end surprise you can't do much about."
      }
    ],
    sources: [],
    sourcesChecked: published,
    legal: false,
    relatedFeatures: ["gst-billing-invoice", "customer-management", "job-work-order-management"],
    relatedIndustries: [],
    relatedGuides: ["job-wise-profit-calculation", "job-card-format", "get-more-customers-for-service-business"]
  },
  {
    slug: "job-wise-profit-calculation",
    category: "money",
    title: "Job Wise Profit Calculation for Service Firms | TeamShastra",
    metaDescription:
      "Job wise profit calculation for repair and installation work: count parts, technician time, travel and repeat visits to see what each job really earns.",
    h1: "Job wise profit calculation: did that job actually make money?",
    primaryKeyword: "job wise profit calculation",
    secondaryKeywords: ["profit per job", "service job costing", "hidden costs in service business"],
    datePublished: published,
    dateModified: published,
    summary:
      "A job wise profit calculation is simple: take what the customer paid, then subtract every cost that job caused. That means parts, technician time, travel, consumables and any repeat visit. Do it for a handful of jobs each month and you'll quickly see which work pays and which only keeps your team busy.",
    sections: [
      {
        id: "busy-not-profitable",
        heading: "Busy isn't the same as profitable",
        paragraphs: [
          "Plenty of owners finish a month with every technician fully booked and still struggle to pay rent. The work looked good. The bills went out. But somewhere between the second visit to fix a loose connector and the bike running across town for one capacitor, the margin disappeared.",
          "You can't fix that from the monthly total. You need to look at jobs one at a time."
        ]
      },
      {
        id: "the-formula",
        heading: "The basic job wise profit calculation",
        paragraphs: ["Write it on one line: amount billed, minus direct costs, equals job profit. Direct costs are the ones that wouldn't exist without this job."],
        list: [
          "Parts and material used, at what you paid for them",
          "Technician time: their monthly pay divided by working hours, times hours on this job",
          "Travel: fuel, parking, tolls, or the auto fare a helper took",
          "Consumables: gas, tape, sealant, cable ties, cleaning chemicals",
          "Anything bought on the spot from a local shop"
        ],
        after: [
          "Rent, your own salary and the office phone are overheads. Leave them out of the job figure, then check at month end that total job profit covers them."
        ]
      },
      {
        id: "hourly-cost",
        heading: "Working out a technician's cost per hour",
        paragraphs: [
          "Take what you spend on a person in a month, not only the take-home pay. Include your share of any contributions, phone recharge and a fair slice of fuel allowance if it's fixed. Divide by the hours they actually work on jobs, which is less than the hours they're on duty.",
          "For example, if a technician costs you ₹24,000 a month and does about 150 hours of real job time, each job hour costs you ₹160. That's the number to use, even when the job \"only took an hour\"."
        ]
      },
      {
        id: "two-examples",
        heading: "Two worked examples",
        paragraphs: ["Both examples use made-up figures to show the method. Use your own numbers."],
        table: {
          caption: "Example job costing: a camera installation and a repair visit",
          head: ["Item", "4-camera installation (example)", "AC repair visit (example)"],
          rows: [
            ["Amount billed", "₹26,000", "₹1,800"],
            ["Parts and material", "₹17,500", "₹650 (capacitor)"],
            ["Technician time", "6 hours × ₹160 = ₹960", "1.5 hours × ₹160 = ₹240"],
            ["Helper time", "6 hours × ₹90 = ₹540", "None"],
            ["Travel and fuel", "₹300", "₹180"],
            ["Consumables", "₹400", "₹50"],
            ["Job profit", "₹6,300", "₹680"]
          ]
        },
        after: [
          "Now add a repeat visit to the AC job because the capacitor was the wrong rating. Another hour and another ₹180 of travel takes the profit from ₹680 to about ₹340. One avoidable callback halved it."
        ]
      },
      {
        id: "hidden-costs",
        heading: "Costs owners usually forget",
        list: [
          "Repeat visits for the same complaint, which you rarely bill",
          "Free breakdown calls inside an AMC, beyond what the AMC price assumed",
          "Waiting time at a society gate or for a customer who isn't home",
          "Parts taken for a job and never returned to stock",
          "Discounts given on the spot to close an argument"
        ],
        after: [
          "Pick the two that hit you hardest and track only those for a month. You'll know more about your business than a full spreadsheet you never open."
        ]
      },
      {
        id: "pricing-next-job",
        heading: "Using the numbers to price the next job",
        paragraphs: [
          "Once you know a typical repair visit leaves you ₹600 to ₹700 after costs, you can see what a cut-price visit charge, say ₹299 as an example, really does to your margin. If a certain kind of job keeps coming out thin, raise its rate, change how you quote it, or stop chasing it.",
          "Profit per hour is a useful second view. A small job that earns ₹680 in ninety minutes can be better for you than a big install that earns ₹6,300 over two long days with a helper."
        ]
      },
      {
        id: "monthly-habit",
        heading: "Make it a monthly habit, not a project",
        paragraphs: [
          "You don't need to cost every job. Take five from each type of work at month end, cost them on one sheet, and compare with last month. Look for a pattern: a category getting thinner, a technician whose jobs need more return visits, or a supplier whose parts fail early.",
          "Write down one change you'll make next month. Then check if the number moved."
        ]
      },
      {
        id: "per-technician",
        heading: "Profit by technician, not only by job",
        paragraphs: [
          "Once you've costed a few jobs, sort them by who did the work. Two technicians on the same kind of job can produce very different numbers. One finishes in an hour and rarely goes back. The other takes ninety minutes, buys parts on the way and gets a callback every week.",
          "Don't use this to shame anyone. Use it to decide who trains whom, who gets the complex installs and who might need a refresher on one model. Better habits spread faster when the person with the best numbers shows the others how they work."
        ]
      }
    ],
    helps:
      "TeamShastra puts the figures for this in one place. The reports dashboard shows revenue, money in and out, expenses and jobs completed, with drill-down to the rows. Technicians log fuel, parts and travel as expenses with a receipt photo for your approval, and stock goes down when parts are billed, so you can see what was sold against each sale.",
    faqs: [
      {
        question: "Should I include my own salary in job costing?",
        answer:
          "Not in the job figure. Treat it as an overhead with rent and office costs. Then check that the profit from all jobs in the month covers those overheads with something left over."
      },
      {
        question: "How do I count technician time if they're on a monthly salary?",
        answer:
          "Divide what they cost you in a month by the hours they actually spend on jobs. Use that hourly figure for every job, so a slow or repeat visit shows up as a real cost."
      },
      {
        question: "Which jobs usually hide the most cost?",
        answer:
          "Repeat visits for the same fault and free calls inside an annual contract. Neither gets billed, so they look harmless, but both use technician hours and fuel."
      },
      {
        question: "How many jobs should I cost each month?",
        answer:
          "Five from each type of work is enough to see a pattern. The goal is a habit you keep, not a perfect record you abandon after two weeks."
      }
    ],
    sources: [],
    sourcesChecked: published,
    legal: false,
    relatedFeatures: ["business-reports-dashboard", "field-expense-tracking", "inventory-stock-management"],
    relatedIndustries: [],
    relatedGuides: ["how-to-price-amc-contract", "manage-business-expenses", "spare-parts-stock-management"]
  },
  {
    slug: "manage-business-expenses",
    category: "money",
    title: "How to Manage Business Expenses Day to Day | TeamShastra",
    metaDescription:
      "How to manage business expenses in a service firm: separate accounts, a staff cash float, clear categories, receipt rules and a monthly review that sticks.",
    h1: "How to manage business expenses when your team spends money on the move",
    primaryKeyword: "how to manage business expenses",
    secondaryKeywords: ["petty cash for technicians", "expense approval rules", "staff cash float"],
    datePublished: published,
    dateModified: published,
    summary:
      "If you're wondering how to manage business expenses in a service firm, start by keeping business money separate from personal money. Give staff a fixed cash float, ask for a photo of every receipt, sort spends into a few categories and approve them weekly. Then compare the month's expenses with jobs and revenue so you notice when something starts creeping up.",
    sections: [
      {
        id: "small-leaks",
        heading: "Small spends, big leak",
        paragraphs: [
          "Field money goes out in tiny amounts. ₹120 for petrol, ₹40 for parking outside a hospital, ₹350 for a relay from the shop near the site. Nobody notices a single one. By month end it's a number you can't explain, and the technician who spent it can't remember either.",
          "The fix isn't watching every rupee yourself. It's a simple system everyone follows, so the record builds up without chasing anyone."
        ]
      },
      {
        id: "separate-money",
        heading: "Keep business and personal money apart",
        paragraphs: [
          "Open a current account for the business and run every business payment through it. When the owner's family shopping and the supplier's NEFT sit in the same statement, nobody can tell what the business actually spent, including your CA at year end.",
          "If you pay a business bill from your personal account in a pinch, note it the same day and move the money back. Mixing happens in one week; untangling it takes a month."
        ]
      },
      {
        id: "cash-float",
        heading: "Petty cash and a staff cash float",
        paragraphs: [
          "Give each technician who buys things on the road a fixed float, say ₹2,000 as an example, and top it up when they show receipts. The float is company money held by that person, not an advance on salary. Keep it separate from salary advances in your records or both get confused at month end.",
          "Each week, the float should equal cash in hand plus approved receipts. If it doesn't, ask the same day while memory is fresh."
        ]
      },
      {
        id: "categories",
        heading: "Use a short list of expense categories",
        paragraphs: ["Too many categories and staff pick at random. Five or six cover most service businesses:"],
        list: [
          "Fuel and travel",
          "Parts bought on site",
          "Tools and equipment",
          "Consumables such as gas, tape and chemicals",
          "Food and stay on outstation jobs",
          "Office and phone"
        ],
        after: ["Keep the same list for a full year so month-to-month comparisons mean something."]
      },
      {
        id: "receipts",
        heading: "Receipt rules everyone can follow",
        list: [
          "No receipt photo, no reimbursement, except fuel under a small agreed limit",
          "Photo taken the same day, not collected in a pocket for a week",
          "For anything over an agreed amount, ask the shop for a GST bill with your GSTIN",
          "Write the job or customer name on the entry when the spend was for a specific job"
        ],
        after: [
          "That GST bill point matters if you're registered. Under section 16 of the CGST Act, input credit needs a tax invoice from a registered supplier and the goods or services must be used for your business. A handwritten slip from a roadside shop can't give you that."
        ]
      },
      {
        id: "approval",
        heading: "Approve before or after?",
        paragraphs: [
          "For routine spends under a limit you set, approve after: the technician spends, logs it with a photo, and you approve weekly. For anything over that limit, such as a costly part or a hotel stay, the technician calls first.",
          "Reject clearly when a spend isn't allowed and say why. If a rejected amount came out of the float, the person returns it. Being consistent matters more than being strict."
        ]
      },
      {
        id: "gst-credit",
        heading: "GST input credit on eligible bills",
        paragraphs: [
          "Registered firms can often reduce the GST they owe by claiming tax paid on business purchases, as long as the conditions in section 16 are met. Section 17(5) blocks some items, including most vehicles built to carry people and their repairs. Our guide to GST registration for service firms covers the details; your CA will decide what's claimable each month."
        ]
      },
      {
        id: "monthly-review",
        heading: "A monthly review in twenty minutes",
        paragraphs: [
          "At month end, put three numbers side by side for this month and last: total expenses by category, jobs completed, and revenue. If fuel jumped but jobs didn't, look at routes and repeat visits. If on-site parts buying is climbing, your stock of common spares is probably too thin.",
          "Then look at the top three spenders on the team. Not to accuse anyone, but because the biggest spends hide the biggest savings."
        ],
        table: {
          caption: "Example month-end comparison (figures are made up)",
          head: ["Category", "Last month", "This month", "Note"],
          rows: [
            ["Fuel and travel", "₹14,200", "₹17,900", "Two outstation jobs"],
            ["Parts bought on site", "₹6,100", "₹9,800", "Ran out of capacitors twice"],
            ["Consumables", "₹3,400", "₹3,600", "Normal"],
            ["Jobs completed", "182", "176", "Slightly fewer jobs, more spend"]
          ]
        }
      },
      {
        id: "owner-approver",
        heading: "How to manage business expenses when you approve everything yourself",
        paragraphs: [
          "In a small firm, the owner is usually the only approver, and approvals pile up between site visits. Block fifteen minutes on the same morning every week and clear the whole list. Approve what fits the rules, reject what doesn't with a one-line reason, and call about anything unclear.",
          "If you're away for a week, name one trusted person to approve routine spends under a limit. Write the limit down. Coming back to a clean list is far better than coming back to forty pending claims and an anxious team."
        ]
      }
    ],
    helps:
      "With TeamShastra, technicians log each spend in the Android app with an amount, category and receipt photo, even offline. You approve or reject from your phone, and a rejected expense is reversed. Each person's cash in hand works like a float: giving cash raises it, approved spends lower it. Bank and cash balances sit in one view with your invoices and purchase bills.",
    faqs: [
      {
        question: "How much cash float should a technician carry?",
        answer:
          "Enough for about a week of normal spending on fuel and small parts. Start low, watch a month of receipts, then adjust. Top it up only against receipts so the balance always reconciles."
      },
      {
        question: "Should every small expense need a receipt?",
        answer:
          "Aim for yes, with one exception you set in advance, such as fuel under a small limit. A clear rule applied to everyone avoids arguments later."
      },
      {
        question: "Can I claim GST on expenses my technicians pay?",
        answer:
          "Only with a proper tax invoice that meets section 16 conditions, and not for blocked items under section 17(5). Ask staff to collect GST bills for bigger purchases and let your CA decide."
      },
      {
        question: "How often should I approve staff expenses?",
        answer:
          "Weekly suits most small teams. It keeps the list short, memories fresh and the float balanced, without turning approvals into a daily chore for the owner."
      }
    ],
    sources: [sources.cgstSection16, sources.cgstSection17],
    sourcesChecked: published,
    legal: true,
    disclaimerNote: "What you can claim as input credit depends on your registration and the bill itself; your CA has the final word.",
    relatedFeatures: ["field-expense-tracking", "staff-cash-bank-accounts"],
    relatedIndustries: [],
    relatedSolutions: ["field-expense-software-india"],
    relatedGuides: ["gst-registration-for-service-business", "job-wise-profit-calculation", "collect-payments-faster-service-business"]
  }
];
