import { sources } from "../sources";
import type { Guide } from "../types";

const published = "2026-11-23";

export const jobsGuides: Guide[] = [
  {
    slug: "how-to-price-amc-contract",
    category: "jobs",
    title: "How to Price AMC Contract: A Worked Example | TeamShastra",
    metaDescription:
      "How to price AMC contract work: count visits, time, travel, consumables, parts risk and breakdown calls, then set a yearly price that still pays at renewal.",
    h1: "How to price AMC contract work so every visit still pays",
    primaryKeyword: "how to price AMC contract",
    secondaryKeywords: ["AMC pricing", "comprehensive vs non-comprehensive AMC", "AMC renewal price"],
    datePublished: published,
    dateModified: published,
    summary:
      "If you're stuck on how to price AMC contract work, build the price from the bottom up. Count the visits, the time and travel for each, consumables, any parts you include and a sensible number of breakdown calls. Add a risk buffer and your margin, then compare with what the customer would pay for single visits.",
    sections: [
      {
        id: "guessing",
        heading: "The problem with copying a rival's price",
        paragraphs: [
          "Most AMC prices are guesses. A competitor quoted ₹4,000 a year, so you quote ₹3,500 to win. Then the customer calls six times about a remote that won't pair, your technician drives forty minutes each way, and by month eight you're losing money on every call.",
          "The other mistake is pricing so high that the customer does the maths and decides single visits are cheaper. A good AMC price sits between those two, and you can only find it by counting."
        ]
      },
      {
        id: "what-goes-in",
        heading: "How to price AMC contract work, line by line",
        list: [
          "Preventive visits: how many a year, and how long each takes",
          "Travel: time and fuel to reach the site, every visit",
          "Consumables: cleaning chemicals, tape, filters or gas top-ups you include",
          "Parts: none, a list of small parts, or everything except named costly items",
          "Breakdown calls: how many you expect and how many you'll include",
          "Paperwork: the report, the bill and the reminder calls",
          "Risk buffer: older equipment, far sites, or a demanding customer"
        ],
        after: ["Each line has a cost. Add them, then add the margin you want. That's your floor, not your price."]
      },
      {
        id: "comprehensive",
        heading: "Comprehensive or non-comprehensive",
        paragraphs: [
          "A non-comprehensive AMC covers visits and labour. Parts are quoted when they fail. It's easy to price because your biggest unknown is left out.",
          "A comprehensive AMC includes parts, usually except a named list such as compressors or DVR hard disks. Customers like one fixed bill, but you carry the risk. Inspect before you quote, list existing faults in writing, and price parts based on the age and condition of what you saw, not what you hope."
        ]
      },
      {
        id: "worksheet",
        heading: "A pricing worksheet you can copy",
        paragraphs: ["Here's a worksheet for a non-comprehensive AMC on six cameras at an office ten kilometres away. All figures are made-up examples; put in your own."],
        table: {
          caption: "Example AMC pricing worksheet (made-up figures)",
          head: ["Line", "Working", "Yearly cost (example)"],
          rows: [
            ["Preventive visits", "4 visits × 2 hours × ₹160 an hour", "₹1,280"],
            ["Travel", "4 visits × ₹150 fuel and time", "₹600"],
            ["Consumables", "Cleaning kit, ties, tape", "₹400"],
            ["Breakdown calls included", "2 calls × (1.5 hours + travel)", "₹780"],
            ["Admin", "Report, bill, reminders", "₹300"],
            ["Risk buffer", "About 15% of the above", "₹500"],
            ["Cost floor", "Sum of the lines above", "₹3,860"],
            ["Margin", "Your choice, here about 40% on cost", "₹1,540"],
            ["AMC price before GST", "", "₹5,400"]
          ]
        },
        after: [
          "Now check it from the customer's side. If your single visit charge is ₹800, four visits and two breakdown calls would cost them about ₹4,800 separately. At ₹5,400 the AMC needs a clear extra: faster response, priority booking or free minor parts. Either lower the price or add value they can see."
        ]
      },
      {
        id: "breakdowns",
        heading: "Breakdown calls: the line that sinks most AMCs",
        paragraphs: [
          "\"Unlimited breakdown calls\" sounds generous. With older equipment or a nervous customer, it's a blank cheque. Include a fixed number and charge a reduced rate after that, or define what counts as a breakdown, for example equipment not working at all rather than a setting the customer changed.",
          "Track calls per AMC for a year. At renewal, you'll know which customers cost you more than they pay."
        ]
      },
      {
        id: "renewal",
        heading: "Pricing the renewal",
        paragraphs: [
          "Renewal is when you correct last year's guess. Look at what that contract actually cost: visits, calls, parts. If it ran at a loss, raise the price and explain why with facts. If it went smoothly, a small increase or the same price keeps a good customer.",
          "Offer the renewal thirty days before the end date, not after. A customer who's covered without a gap rarely shops around."
        ]
      },
      {
        id: "schedule-visits",
        heading: "Plan the visit schedule so none are missed",
        paragraphs: [
          "Your price assumes you'll do every visit. Missed visits don't save money; they lose renewals. When the contract is signed, put all visit dates on the calendar at once, spaced evenly, and check every week which ones fall due.",
          "Avoid bunching visits for different customers in the same week of the year. Spread them so summer for AC or monsoon for CCTV doesn't bury your team."
        ]
      },
      {
        id: "gst",
        heading: "GST on the AMC bill",
        paragraphs: [
          "If you're registered, the AMC fee is a taxable service, and the tax invoice must carry the details rule 46 of the CGST Rules lists. Rule 47 gives a time limit for issuing an invoice for services. Show the price before GST on your quote and the tax separately, so the customer isn't surprised by the final figure."
        ]
      }
    ],
    helps:
      "TeamShastra saves each AMC with its dates, amount and the gap between visits. Due visits show up on their own, and one tap turns a due visit into a job for your technician. You can see which contracts end in the next 30 days, so you can call about renewal before the customer starts comparing prices.",
    faqs: [
      {
        question: "How much should a yearly AMC cost?",
        answer:
          "There's no standard figure. Add the cost of visits, travel, consumables, included parts and expected breakdown calls, add a risk buffer and your margin, then compare with what single visits would cost the customer."
      },
      {
        question: "Should breakdown calls be unlimited in an AMC?",
        answer:
          "Usually not. Include a fixed number and charge a reduced rate after that. Unlimited calls on old equipment can wipe out the whole contract's profit in a few months."
      },
      {
        question: "Is a comprehensive AMC more profitable?",
        answer:
          "It can be, if you inspect the equipment first and price the parts risk honestly. On old or badly maintained equipment it's often a loss, so many firms offer only non-comprehensive cover there."
      },
      {
        question: "How do I raise the AMC price at renewal?",
        answer:
          "Use last year's real cost: visits, calls and parts. Share the facts with the customer a month before the end date. Most reasonable customers accept an increase they can understand."
      }
    ],
    sources: [sources.rule46, sources.rule47],
    sourcesChecked: published,
    legal: true,
    disclaimerNote: "Prices in the worksheet are invented for the example, and the GST points are a summary; confirm invoicing details for your own contracts.",
    relatedFeatures: ["amc-contract-management"],
    relatedIndustries: ["cctv-installer-software"],
    relatedGuides: ["amc-contract-format", "job-wise-profit-calculation", "handle-more-service-calls-per-day"]
  },
  {
    slug: "handle-more-service-calls-per-day",
    category: "jobs",
    title: "How to Handle More Service Calls Per Day | TeamShastra",
    metaDescription:
      "How to handle more service calls per day with the same team: one call log, time slots, area-wise grouping, the right parts in the bag and fewer repeat visits.",
    h1: "How to handle more service calls per day without hiring yet",
    primaryKeyword: "how to handle more service calls per day",
    secondaryKeywords: ["first-time fix rate", "technician scheduling tips", "service call booking"],
    datePublished: published,
    dateModified: published,
    summary:
      "Learning how to handle more service calls per day is mostly about removing waste. Log every call in one place, book by time slot, group jobs by area, send the technician with the right skill and parts, and fix it the first time. Plan each morning, close out each evening, and you'll often find two or three extra jobs a day in the same team.",
    sections: [
      {
        id: "where-time-goes",
        heading: "Where a technician's day actually goes",
        paragraphs: [
          "Follow one technician for a day and write down the hours. You'll be surprised. Forty minutes waiting for a customer who stepped out. An hour crossing the city twice because jobs were given in the order calls came in. Half an hour going back to the shop for a part. Another visit tomorrow because the first fix didn't hold.",
          "None of that is the technician being lazy. It's the plan, or the lack of one."
        ]
      },
      {
        id: "one-log",
        heading: "One place for every call",
        paragraphs: [
          "Calls come in on the owner's phone, the office landline, WhatsApp and the technician's personal number. Each channel is a place where a job can get lost. Pick one list where every call is written down with the address, problem and contact before anyone promises a time.",
          "That list also tells you something useful at month end: how many calls you got, how many you finished and how many you turned away."
        ]
      },
      {
        id: "time-slots",
        heading: "Book by time slot, not \"sometime today\"",
        paragraphs: [
          "\"Technician will come today\" means the customer waits at home all day, gets annoyed, and goes out exactly when you arrive. Offer two-hour slots instead: 10 to 12, 12 to 2, 3 to 5. Call or message when the technician leaves the previous job.",
          "Fewer wasted trips is the whole point. People who know their slot are home and ready."
        ]
      },
      {
        id: "group-by-area",
        heading: "Group jobs by area",
        paragraphs: [
          "Split your city into a few zones the team already knows, such as east, west, central and the industrial belt. Give each technician most of their jobs in one zone for the day. Slot urgent calls into whoever is nearest, not whoever picks up the phone.",
          "This isn't automatic route planning, just common sense written down. It often saves an hour a day per technician in traffic-heavy cities."
        ]
      },
      {
        id: "skill-and-parts",
        heading: "Right skill, right parts",
        paragraphs: [
          "Match the job to the person. Send your inverter specialist to the battery complaint and your helper-plus-technician pair to the installation. A mismatch means a second visit.",
          "Ask two extra questions when the call comes in: what model, and what exactly is happening? Then the technician leaves with the likely part in the bag. A capacitor, a fuse, a remote, a filter. Carrying a small kit of the ten parts that fail most often removes a lot of return trips."
        ]
      },
      {
        id: "first-time-fix",
        heading: "Cut repeat visits",
        paragraphs: [
          "Every callback is a job you do for free that pushes out a paying one. Track repeat visits per technician and per fault type for a month. If one model keeps coming back, change how you fix it. If one technician has more callbacks, pair them with a senior for a week.",
          "Before leaving any site, the technician should run the equipment for a few minutes with the customer watching. Many callbacks are faults that would have shown up in the next five minutes."
        ]
      },
      {
        id: "morning-evening",
        heading: "How to handle more service calls per day: a morning plan and an evening close",
        paragraphs: [
          "Morning, ten minutes: who's in, jobs by zone, slots confirmed, parts packed. Evening, ten minutes: what closed, what didn't, why, and what carries to tomorrow. Unfinished jobs go to the top of the next day's list, not the bottom.",
          "This rhythm is what lets a team of five do the work that used to need six."
        ]
      },
      {
        id: "when-to-hire",
        heading: "When it really is time to hire",
        paragraphs: [
          "If you're planning well, fixing first time and still turning away calls most days for a month, you've outgrown the team. Hire before your best technician burns out, not after. A helper is often the right first step: it makes your existing technicians faster on installations straight away."
        ]
      },
      {
        id: "peak-season",
        heading: "Getting through the peak season",
        paragraphs: [
          "Every trade has its rush. AC firms have April to June, CCTV installers get festival-season shop fit-outs, and pumps and inverters spike in the monsoon. Plan for it a month ahead: service your own tools, stock the parts that fail most in that season, and move preventive AMC visits earlier so they don't collide with breakdown calls.",
          "During the rush, protect your best technicians' time for the hard jobs and give simpler ones to newer staff with a senior on call. Tell customers honest waiting times. Most people accept a two-day wait they were told about; nobody accepts one they weren't."
        ]
      }
    ],
    helps:
      "TeamShastra's Today board shows who's free, busy, not in or on leave, next to the jobs still waiting, so you assign from facts each morning. Every job is a work order with a priority, and the technician gets a phone alert when it's assigned or updated, with one tap to open it. TeamShastra doesn't plan routes or assign jobs automatically; you decide who goes where.",
    faqs: [
      {
        question: "How many service calls can one technician do in a day?",
        answer:
          "It depends on the trade and your city. Measure your own team for a week and look for the waste: waiting, cross-city travel and repeat visits. Removing those usually adds calls without longer hours."
      },
      {
        question: "Should I give customers a fixed time for the visit?",
        answer:
          "Give a two-hour slot and message when the technician is on the way. Customers are home and ready, and your team spends less time waiting at locked doors."
      },
      {
        question: "What is a first-time fix?",
        answer:
          "Solving the problem on the first visit, without coming back. It depends on asking the right questions when the call comes in, carrying likely parts and testing before leaving."
      },
      {
        question: "Is it better to hire a helper or another technician?",
        answer:
          "If installations slow your technicians down, a helper often adds more capacity for less cost. If you're turning away repair calls daily, you probably need another trained technician."
      }
    ],
    sources: [],
    sourcesChecked: published,
    legal: false,
    relatedFeatures: ["technician-dispatch-today-board", "job-work-order-management", "job-alerts-notifications"],
    relatedIndustries: [],
    relatedGuides: ["manage-field-team-efficiently", "job-card-format", "train-new-technicians"]
  },
  {
    slug: "spare-parts-stock-management",
    category: "jobs",
    title: "Spare Parts Inventory Management Guide | TeamShastra",
    metaDescription:
      "Spare parts inventory management for service businesses: track fast movers, set minimum stock, log parts given to technicians, count monthly and watch dues.",
    h1: "Spare parts inventory management for a busy repair and service team",
    primaryKeyword: "spare parts inventory management",
    secondaryKeywords: ["minimum stock level", "parts issued to technicians", "monthly stock count"],
    datePublished: published,
    dateModified: published,
    summary:
      "Good spare parts inventory management in a service business means three habits. Know your fast-moving parts and keep a minimum of each, write down every part that leaves the shelf with a technician, and count once a month. Most missing stock isn't stolen; it's taken for a job, half used and never logged.",
    sections: [
      {
        id: "where-it-goes",
        heading: "Where the parts disappear",
        paragraphs: [
          "A technician takes three capacitors for a job. He uses one, keeps two in the bike for next time, gives one to a colleague who ran out. A month later the stock book says twelve, the shelf has five, and nobody did anything dishonest.",
          "The other half of the problem is running out. The customer is waiting, the part is \"definitely in the shop\", and it isn't. Now you're buying it retail from a nearby dealer at a worse price, or coming back tomorrow."
        ]
      },
      {
        id: "fast-movers",
        heading: "Start with your fast movers",
        paragraphs: [
          "You don't need to track every screw. List the twenty to thirty parts that go out most often. For an AC business that's capacitors, fan motors, PCBs for common models and gas. For CCTV it's connectors, adaptors, cable and hard disks. For RO it's membranes, filters and pumps.",
          "These few items are most of your parts spend and most of your stock-outs. Get them right first."
        ]
      },
      {
        id: "minimum-levels",
        heading: "Set a minimum stock level for each",
        paragraphs: [
          "For each fast mover, decide the level at which you reorder. A simple way: how many you use in a normal week, times how many weeks your supplier takes to deliver, plus a small cushion.",
          "For example, if you use about six capacitors a week and your dealer delivers in one week, reorder when you're down to eight or nine. Write the minimum on the shelf label. When anyone takes the stock below it, they tell the person who orders."
        ]
      },
      {
        id: "issuing",
        heading: "Logging parts given to a technician or job",
        paragraphs: ["The single biggest fix is writing down what leaves the shelf. Keep it quick or nobody will do it."],
        table: {
          caption: "Sample parts issue log",
          head: ["Date", "Part", "Qty", "Given to", "For job", "Used", "Returned"],
          rows: [
            ["4 March", "Capacitor 2.5 mfd", "3", "Ravi", "Joshi residence AC", "1", "2"],
            ["4 March", "BNC connector", "20", "Imran", "Clinic install", "16", "4"],
            ["5 March", "RO membrane", "1", "Suresh", "Patel flat", "1", "0"]
          ]
        },
        after: ["At day end, the technician fills in used and returned. Anything not used comes back to the shelf the same evening, not next week."]
      },
      {
        id: "returns",
        heading: "Returns of unused and faulty parts",
        paragraphs: [
          "Treat unused and faulty returns differently. Unused parts go back into stock. Faulty parts go into a separate box with a tag: date, job, and what went wrong. That box is your warranty claim pile with the supplier, and it's money if you send it back on time.",
          "If a new part fails within days, note the supplier. A pattern tells you which brand or dealer to drop."
        ]
      },
      {
        id: "monthly-count",
        heading: "A monthly count that doesn't take a whole Sunday",
        paragraphs: [
          "Count only the fast movers every month, and everything else twice a year. Two people, one counts and one writes, in under an hour. Compare with the book and write a reason for every difference: damaged, used without billing, counting error, missing.",
          "\"Used without billing\" is the important one. If parts go into jobs and never onto a bill, you're giving them away. Fix the habit, not just the number."
        ]
      },
      {
        id: "supplier-dues",
        heading: "Watch what you owe suppliers",
        paragraphs: [
          "Parts usually come on credit from two or three dealers, and supplier dues pile up quietly over a busy season. Keep every purchase bill and record each payment against it, including part payments. When the dealer's salesman says you owe a figure, you should be able to check it in a minute.",
          "Returned faulty items should be recorded too, so the supplier's balance reflects what you actually kept."
        ]
      },
      {
        id: "bike-stock",
        heading: "Spare parts inventory management in a technician's bike box",
        paragraphs: [
          "The bike box is the stock room nobody counts. Each technician should carry a small, agreed kit for their trade: the handful of parts that solve most calls. Write the kit list down, with quantities, and check it every Saturday against what's actually in the box.",
          "Refill the kit from the shelf through the issue log, so it's recorded like any other movement. Count a leaving technician's box on his last day, before settling dues. Parts that ride around for months also get damaged, so rotate older stock back to the shelf and send fresh pieces out. A capacitor that has bounced around in the sun for a whole summer is not one you want to fit at a customer's home."
        ]
      }
    ],
    helps:
      "Each part in TeamShastra is a catalog item with stock tracking. Stock goes down when the part is billed on a sale or delivery challan, goes up with a purchase bill or return, and every move is listed in the item's history. After a count, you record an adjustment with a reason. Stock is one count for the business, not split by technician, so keep the issue log alongside.",
    faqs: [
      {
        question: "Which spare parts should a service business stock?",
        answer:
          "The twenty to thirty parts that go out most often in your trade. Check the last three months of jobs and bills to find them, then keep a minimum level of each."
      },
      {
        question: "How do I set a minimum stock level?",
        answer:
          "Multiply weekly usage by the supplier's delivery time in weeks, then add a small cushion. Write the number on the shelf label so everyone knows when to raise a reorder."
      },
      {
        question: "How do I stop technicians keeping extra parts?",
        answer:
          "Log every part that leaves the shelf, with the job it's for, and ask for unused ones back the same evening. A simple routine applied to everyone works better than suspicion."
      },
      {
        question: "How often should I count spare parts?",
        answer:
          "Fast movers monthly, everything else twice a year. Write a reason for every difference you find, especially parts used on jobs but never billed."
      }
    ],
    sources: [],
    sourcesChecked: published,
    legal: false,
    relatedFeatures: ["inventory-stock-management", "purchase-bills-supplier-management"],
    relatedIndustries: [],
    relatedGuides: ["job-wise-profit-calculation", "job-card-format", "collect-payments-faster-service-business"]
  }
];
