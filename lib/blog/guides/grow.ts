import { sources } from "../sources";
import type { Guide } from "../types";

const published = "2026-11-23";

export const growGuides: Guide[] = [
  {
    slug: "start-electrical-contracting-business",
    category: "grow",
    title: "Start Electrical Contractor Business in India | TeamShastra",
    metaDescription:
      "Planning to start electrical contractor business work in your own name? Licences to check, tools and safety gear, first customers, quoting, billing and staff.",
    h1: "Ready to start electrical contractor business work in your own name?",
    primaryKeyword: "start electrical contractor business",
    secondaryKeywords: ["electrical contractor licence", "electrician going independent", "wiring contract quotation"],
    datePublished: published,
    dateModified: published,
    summary:
      "To start electrical contractor business work in India, first find out what licence your state needs for taking wiring jobs in your own name, and get it. Then sort GST registration if your turnover calls for it, buy proper tools and safety gear, and win your first steady customers from builders, societies and shops. Quote clearly, bill properly and hire slowly.",
    sections: [
      {
        id: "from-employee",
        heading: "From electrician to contractor",
        paragraphs: [
          "Most contractors start the same way. You've wired flats for someone else for years, customers ask for you by name, and you realise the owner earns more from your work than you do. Going independent makes sense. It also means you're now responsible for everything a customer's wall hides: the earthing, the load, the joint that will heat up in ten years.",
          "That responsibility is why electrical work, unlike most trades, is licensed."
        ]
      },
      {
        id: "licence",
        heading: "Licences and permits to check before you start",
        paragraphs: [
          "Nationally, safety for electrical installations is governed by the Central Electricity Authority's regulations on measures relating to safety and electric supply. Licensing of electrical contractors, supervisors and wiremen is handled at state level, through your state's electrical inspectorate or licensing board.",
          "Rules, grades and the documents needed differ from state to state. Before you take a wiring job in your own name, visit or call your state's licensing authority and ask three questions: which contractor licence fits the work you'll do, which supervisor or wireman certificates your staff need, and how long approval takes. Keep copies of everything; builders and offices will ask to see them."
        ]
      },
      {
        id: "gst",
        heading: "GST registration",
        paragraphs: [
          "Under section 22 of the CGST Act, you must register once your aggregate turnover in a financial year crosses twenty lakh rupees, or ten lakh in the special category States the Act names. Builders and companies often want a GSTIN on your quote earlier than that, so many contractors register by choice. Our guide to GST registration for service firms explains both routes."
        ]
      },
      {
        id: "tools",
        heading: "Tools and safety gear",
        list: [
          "Insulated hand tools and a good tester you trust",
          "A multimeter and an insulation resistance tester for checking installations",
          "An earth resistance tester if you'll do earthing work",
          "Drill, chasing tool and a sturdy ladder",
          "Rubber gloves, safety shoes and eye protection for everyone on site"
        ],
        after: ["Buy fewer, better tools. A cheap tester that reads wrong is more dangerous than no tester at all."]
      },
      {
        id: "first-customers",
        heading: "Finding your first customers",
        paragraphs: [
          "Builders and small developers need contractors who turn up and finish floors on time. Housing societies need someone for common-area lighting, pumps and DB maintenance. Shops and clinics need quick fixes and small fit-outs. Each of these gives repeat work, which matters more than one big job.",
          "Tell every customer from your old job that you've started on your own, politely and without poaching anyone's contract. Ask architects and interior designers you've worked alongside to recommend you. Do the first few jobs especially well; in this trade, one society secretary talks to ten others."
        ]
      },
      {
        id: "quoting",
        heading: "Quoting and billing",
        paragraphs: [
          "Quote by point or by item, not as one lump sum. List the material brand, the number of points, the DB and the labour separately. Customers compare quotes line by line, and a clear one wins even at a slightly higher price.",
          "Take an advance for material on bigger jobs and bill stage by stage on long projects. Keep every bill and payment in one place from day one, so you know who owes what without searching your phone."
        ]
      },
      {
        id: "staff",
        heading: "Your first staff",
        paragraphs: [
          "Start with one helper you can train and one experienced wireman you trust. ITI courses in trades such as Electrician and Wireman are two years long, so pass-outs come with basics but still need site experience. Make sure anyone working on installations holds whatever permit your state requires.",
          "Pay on time, explain safety rules on day one, and don't let anyone work live circuits to save time. A single accident can end a young contracting business."
        ]
      },
      {
        id: "money-needed",
        heading: "Money you need to start electrical contractor business work",
        paragraphs: [
          "Plan for three things before the first big order: licence and registration fees, a basic tool kit, and working capital for material. The last one surprises people. On a builder's floor, you may buy wire, conduit and DBs weeks before you're paid for the stage.",
          "Keep a cushion that covers at least one month of material for your largest expected job plus your staff's salary, and take advances on material wherever the customer agrees. Growing faster than your cash allows is how many good contractors end up borrowing at bad rates."
        ]
      }
    ],
    helps:
      "TeamShastra helps with the paperwork side of a new contracting firm. Make a quotation PDF with your items and labour, share it on WhatsApp, and turn the approved quote into a job or an invoice without typing it again. Assign wiring jobs to your team, collect photos from site, and keep GST bills and payments in one place.",
    faqs: [
      {
        question: "Do I need a licence to work as an electrical contractor?",
        answer:
          "Yes. Licensing of electrical contractors is done by each state through its electrical inspectorate or licensing board. Ask your state's authority which licence and staff permits fit the work you plan to take."
      },
      {
        question: "Which national rules cover electrical safety?",
        answer:
          "The Central Electricity Authority's regulations on measures relating to safety and electric supply. Your state licensing authority applies them alongside its own licensing rules."
      },
      {
        question: "Should a new electrical contractor register for GST?",
        answer:
          "It's compulsory once turnover crosses the section 22 limit. Many contractors register earlier by choice because builders and companies want a GSTIN on quotes and bills."
      },
      {
        question: "Where do electrical contractors find their first work?",
        answer:
          "Builders, housing societies, shops and clinics, plus referrals from architects and interior designers. Repeat customers matter more than one big job when you're starting."
      }
    ],
    sources: [sources.ceaSafety, sources.cgstSection22, sources.itiTrades],
    sourcesChecked: published,
    legal: true,
    disclaimerNote: "Electrical licensing is set by each state, so treat your state authority's answer as final over anything written here.",
    relatedFeatures: ["quotation-estimate-app"],
    relatedIndustries: ["electrician-workforce-management"],
    relatedGuides: ["start-cctv-installation-business", "gst-registration-for-service-business", "start-appliance-repair-business"]
  },
  {
    slug: "start-appliance-repair-business",
    category: "grow",
    title: "How to Start Appliance Repair Business | TeamShastra",
    metaDescription:
      "How to start appliance repair business work for washing machines, fridges, microwaves and TVs: skills, tools, parts, shop or home visits and visit charges.",
    h1: "How to start appliance repair business for washing machines, fridges and TVs",
    primaryKeyword: "how to start appliance repair business",
    secondaryKeywords: ["washing machine repair business", "visit charge for repair", "repair warranty"],
    datePublished: published,
    dateModified: published,
    summary:
      "Working out how to start appliance repair business work begins with your skills: which appliances and brands you can fix well today. Then buy the right test equipment, line up parts dealers, choose between a walk-in counter and home visits, set a visit charge people accept, and give a short warranty on your repairs. Keep a record of every job from the first one.",
    sections: [
      {
        id: "skills",
        heading: "Start with what you can fix well",
        paragraphs: [
          "Washing machines, refrigerators, microwaves and TVs each need different skills. Front-load washers mean motor and PCB work. Fridges mean gas, compressors and cooling faults. Microwaves carry high-voltage risk. Modern TVs are mostly board-level diagnosis and panel replacement.",
          "Begin with the two you know best and add others as you learn. Customers forgive a technician who says \"I don't handle that model\" far more easily than one who opens it up and makes it worse."
        ]
      },
      {
        id: "training",
        heading: "Training and brand courses",
        paragraphs: [
          "If you're coming from an ITI electronics or refrigeration trade, you have the basics. Brand training adds model-specific know-how; some manufacturers and authorised service centres train technicians who work with them. Ask the service centres in your city.",
          "Learn error codes for the popular models in your area. Half of diagnosis on modern machines starts with what the display is already telling you."
        ]
      },
      {
        id: "tools",
        heading: "Tools and test equipment",
        list: [
          "A good multimeter and a clamp meter",
          "A soldering station and desoldering pump for board work",
          "Gas charging kit and gauges if you'll do fridges",
          "An insulation tester and earthing checker",
          "Bearing pullers and the special spanners washers need",
          "A sturdy trolley or two-wheeler carrier for bringing units in"
        ],
        after: ["Buy the expensive items as jobs demand them. Start with what your first month of work actually needs."]
      },
      {
        id: "parts",
        heading: "Sourcing parts",
        paragraphs: [
          "Find two parts dealers: one for genuine parts when the customer wants original, and one for good compatible parts when price matters. Tell the customer which one you're fitting and price it honestly.",
          "Keep a small stock of parts that fail constantly in your area, such as washer drain pumps, fridge relays and thermostats, and microwave fuses. They save a second trip on a lot of jobs."
        ]
      },
      {
        id: "shop-or-home",
        heading: "Walk-in shop or home service?",
        table: {
          caption: "Walk-in counter versus home service",
          head: ["Point", "Walk-in counter", "Home service"],
          rows: [
            ["Rent", "Needed, even a small shop", "Can start from home"],
            ["Best for", "Microwaves, small TVs, boards", "Washers, fridges, big TVs"],
            ["Customer trust", "Visible shop builds trust", "Reviews and referrals matter more"],
            ["Your time", "Fixed hours at the counter", "Travel between jobs"]
          ]
        },
        after: ["Many repairers do both: home visits for big appliances, with a small counter where boards and small units are bench-repaired."]
      },
      {
        id: "visit-charge",
        heading: "Pricing the visit charge",
        paragraphs: [
          "A visit charge covers your travel and diagnosis, whether or not the customer goes ahead with the repair. Set it based on your real cost of reaching a customer, and say it clearly on the phone before you go. For example, ₹300 to diagnose, adjusted against the repair bill if they proceed.",
          "Quote the repair after you've diagnosed, with parts and labour separate. Don't start work until the customer agrees."
        ]
      },
      {
        id: "warranty",
        heading: "Give a warranty on your repair",
        paragraphs: [
          "Offer a short warranty on your own work, such as thirty days for labour, and pass on whatever warranty the part carries. Write it on the bill. It tells the customer you're confident, and it's often why they call you again instead of the next number on a search page."
        ]
      },
      {
        id: "records",
        heading: "Keep records from the first job",
        paragraphs: [
          "Write down every job: customer, appliance, model, fault, parts used, charge and payment. When the same customer calls a year later, you'll know what you replaced. When a part fails repeatedly, you'll know which supplier to drop."
        ]
      },
      {
        id: "first-customers",
        heading: "How to start appliance repair business marketing on a small budget",
        paragraphs: [
          "Your first customers will come from people who already know you. Tell neighbours, relatives and the shops you buy parts from. Put a simple board outside your home or counter with the appliances you fix and your phone number.",
          "Create a Google Business Profile with your service area, and ask every satisfied customer to save your number under the appliance name, such as \"washing machine repair, Ramesh\". When the machine breaks next year, that saved contact is what they'll search for. Appliance shops without their own technicians may also send you installation and repair calls if you handle their customers well."
        ]
      }
    ],
    helps:
      "TeamShastra keeps each repair as a work order with the customer, problem, priority, photos and the technician assigned. When the job's done, the technician records whether the customer paid by cash, UPI or not yet. Each customer's record shows their past jobs and bills, so repeat calls start with history instead of guesswork.",
    faqs: [
      {
        question: "Which appliance repairs are easiest to start with?",
        answer:
          "The ones you already fix confidently. Many technicians start with washing machines or fridges because of steady demand, then add microwaves and TVs as their board-level skills grow."
      },
      {
        question: "How much should I charge for a home visit?",
        answer:
          "Base it on what it costs you to reach a customer and diagnose the fault. Tell the customer the amount before you go, and say whether it's adjusted against the repair bill."
      },
      {
        question: "Do I need a shop to start an appliance repair business?",
        answer:
          "No. Many start with home visits only. A small counter helps later for bench repairs of boards and small units, and a visible shop can build local trust."
      },
      {
        question: "Should I give a warranty on repairs?",
        answer:
          "Yes, a short one on your labour, plus whatever warranty the part has. Write it on the bill. It builds trust and brings customers back to you."
      }
    ],
    sources: [],
    sourcesChecked: published,
    legal: false,
    relatedFeatures: ["job-work-order-management"],
    relatedIndustries: ["appliance-repair-service-software"],
    relatedGuides: ["start-ac-service-business", "spare-parts-stock-management", "start-electrical-contracting-business"]
  },
  {
    slug: "get-more-customers-for-service-business",
    category: "grow",
    title: "How to Get More Customers for Service Business | TeamShastra",
    metaDescription:
      "How to get more customers for service business owners: Google profile, societies, builders, shop tie-ups, referrals, WhatsApp and turning repairs into AMCs.",
    h1: "How to get more customers for service business work in your own city",
    primaryKeyword: "how to get more customers for service business",
    secondaryKeywords: ["local marketing for technicians", "referral customers", "WhatsApp Business for service"],
    datePublished: published,
    dateModified: published,
    summary:
      "Most local service firms grow from a handful of steady sources: a complete Google Business Profile, housing societies, builders and shop owners, and happy customers who refer others. Add a WhatsApp Business catalogue, offer AMCs to repair customers, and write down where each new job came from so you know which source to spend more time on.",
    sections: [
      {
        id: "local-trade",
        heading: "Local trade grows from trust, not ads",
        paragraphs: [
          "People don't pick an electrician or AC mechanic the way they pick shoes. They ask a neighbour, check a few reviews, and call whoever sounds sensible. Big ad budgets rarely beat a technician the whole building already knows.",
          "That's good news for small firms. The things that bring customers in are mostly free, and they reward doing good work consistently."
        ]
      },
      {
        id: "google-profile",
        heading: "Your Google Business Profile",
        paragraphs: [
          "When someone nearby searches for AC repair or CCTV installation, the map results are often the first thing they see. Fill in your profile properly: the right category, the area you serve, working hours, phone number and real photos of your team and work.",
          "Keep the details the same everywhere: on your profile, your bills and your WhatsApp. Post a photo of a finished job now and then. Google's help pages also explain how to create a link or QR code that customers can use to leave a review."
        ]
      },
      {
        id: "societies-builders",
        heading: "Housing societies, RWAs and builders",
        paragraphs: [
          "One society can mean a hundred households, plus common-area work. Meet the secretary or facility manager, offer a fair rate for common equipment, and ask to put a small notice on the board. Do the society's own job very well; residents notice.",
          "Builders and architects need dependable contractors for handovers and fit-outs. Turn up on time and finish snag lists without reminders, and you'll get the next project without a tender."
        ]
      },
      {
        id: "tie-ups",
        heading: "Shop and office tie-ups",
        paragraphs: [
          "Appliance shops get asked for installation and repair every day. Offer to handle their customers at a fixed rate and leave a stack of cards. Small offices and clinics want one number to call for everything electrical or IT. Being that number brings steady small jobs."
        ]
      },
      {
        id: "referrals",
        heading: "Referrals from happy customers",
        paragraphs: [
          "Your best salesperson is a customer whose problem you fixed quickly. After a job they were pleased with, ask simply: \"If anyone in your building needs this, please share my number.\" Most people are happy to.",
          "Thank people who refer you. A call to say thanks, or priority on their next booking, makes them do it again."
        ]
      },
      {
        id: "whatsapp",
        heading: "WhatsApp Business, catalogue and status",
        paragraphs: [
          "Set up a WhatsApp Business account with your services, area and hours in the profile. Use the catalogue for your common services with clear prices, such as a split AC service or a two-camera installation package.",
          "Post a short status once or twice a week: a before-and-after photo, a seasonal tip, a reminder before summer that ACs need servicing. Customers who saved your number see it without you sending anyone a message."
        ]
      },
      {
        id: "amc-upsell",
        heading: "Turn repair customers into AMC customers",
        paragraphs: [
          "The easiest AMC sale you'll make is to someone who just paid for a repair. They've seen your work and felt the cost of a breakdown. Offer a simple yearly plan right after the job, with the visits and what's covered in writing.",
          "AMC customers bring steady revenue and give you reasons to visit regularly, which brings more referrals from their neighbours."
        ]
      },
      {
        id: "track-sources",
        heading: "How to get more customers for service business growth that lasts: track every source",
        paragraphs: [
          "When a new customer calls, ask how they heard of you and write it down. After three months, count. If most good customers come from one society and a shop tie-up, spend your time there. If the Google profile brings nothing, fix it before giving up on it."
        ],
        table: {
          caption: "Sample source tracker after three months (made-up counts)",
          head: ["Source", "New customers", "Became AMC customers"],
          rows: [
            ["Referrals", "34", "9"],
            ["Google profile", "21", "3"],
            ["Society notice boards", "18", "6"],
            ["Shop tie-up", "12", "1"]
          ]
        }
      },
      {
        id: "seasonal",
        heading: "Use the seasons",
        paragraphs: [
          "Demand in most service trades follows the calendar. AC servicing before summer, pump and inverter checks before the monsoon, CCTV and lighting work before festivals and weddings. Message past customers three or four weeks before their season starts, with a simple offer to book early.",
          "Early bookings spread your work across more weeks, so the peak is less chaotic. They also bring back customers who'd otherwise call whoever answers first in the rush."
        ]
      }
    ],
    helps:
      "TeamShastra keeps one record per customer with phone, address, GSTIN, past jobs, bills and dues, so a returning caller's history is on screen when they ring. AMC contracts sit with their dates and due visits, which makes offering a yearly plan after a repair simple to follow through.",
    faqs: [
      {
        question: "What is the cheapest way to find local service customers?",
        answer:
          "A complete Google Business Profile, a few strong society and shop relationships, and referrals from happy customers. All three cost little and keep working for years."
      },
      {
        question: "How do I get work from housing societies?",
        answer:
          "Meet the secretary or facility manager, offer a fair rate for common-area equipment, and do that first job very well. Residents then call you for their own homes."
      },
      {
        question: "Is WhatsApp Business useful for a repair business?",
        answer:
          "Yes. A clear profile, a catalogue of common services with prices and an occasional status update keep you in front of customers who already saved your number."
      },
      {
        question: "Should I offer an AMC to every repair customer?",
        answer:
          "Offer it to customers whose equipment benefits from regular service. Right after a repair they were happy with is the best moment to ask."
      }
    ],
    sources: [sources.googleReviewTips],
    sourcesChecked: published,
    legal: false,
    relatedFeatures: ["customer-management", "amc-contract-management"],
    relatedIndustries: [],
    relatedGuides: ["get-google-reviews-service-business", "how-to-price-amc-contract", "collect-payments-faster-service-business"]
  },
  {
    slug: "get-google-reviews-service-business",
    category: "grow",
    title: "How to Get Google Reviews for Business | TeamShastra",
    metaDescription:
      "How to get Google reviews for business the right way: ask after the job, share a review link, reply to every review, and avoid what Google's policies forbid.",
    h1: "How to get Google reviews for business without breaking Google's rules",
    primaryKeyword: "how to get Google reviews for business",
    secondaryKeywords: ["ask customers for reviews", "Google review link", "reply to negative review"],
    datePublished: published,
    dateModified: published,
    summary:
      "The honest answer to how to get Google reviews for business is simple: ask every customer after the job is done and paid, send your review link so it takes ten seconds, and reply to every review, good or bad. Never pay for reviews, never offer a discount in return, and never ask only the happy customers. Google treats those as fake engagement.",
    sections: [
      {
        id: "why-reviews",
        heading: "Why reviews matter for a local service",
        paragraphs: [
          "Someone with a leaking AC searches, sees three businesses on the map, and calls the one with recent reviews that mention punctual technicians. That's usually how it works. A handful of recent, specific reviews from real customers can matter more than a long list of old ones.",
          "Reviews also tell you things. Read them for patterns: late arrivals, a technician everyone praises, a price complaint you keep hearing."
        ]
      },
      {
        id: "when-to-ask",
        heading: "When to ask",
        paragraphs: [
          "Ask after the job is finished and paid, when the problem is solved and the customer is relieved. Not while the technician is still working, and not in the same message as a payment reminder.",
          "The best moment is often a few hours later, when you send the bill or the service report. The customer has seen the work and has a minute."
        ]
      },
      {
        id: "sample-message",
        heading: "A short message you can adapt",
        paragraphs: [
          "Keep it personal and short. Something like: \"Thank you for calling us today. When you get a minute, a review on Google helps other people in your area find a reliable technician. Here's the link. Thanks again, and call us anytime the AC gives trouble.\"",
          "Send it to every customer, not only the ones who smiled. That's both fair and what Google's policy expects."
        ]
      },
      {
        id: "review-link",
        heading: "Make it easy with your review link",
        paragraphs: [
          "Google Business Profile lets you create a link or QR code that takes customers straight to the review box. Save it in your phone and on your bills or cards. Fewer taps means more reviews.",
          "Remind customers they need to be signed in to a Google account to post. Many people give up on that screen without knowing why."
        ]
      },
      {
        id: "reply",
        heading: "Reply to every review, including the bad ones",
        paragraphs: [
          "Thank happy customers by name and mention the job, so the reply isn't a copy-paste. For a bad review, stay calm. Say sorry for the experience, give your side briefly without blaming, and offer to fix it by phone. Readers judge you by your reply more than by the complaint.",
          "Never argue in public, and never share a customer's private details in a reply."
        ]
      },
      {
        id: "forbidden",
        heading: "How to get Google reviews for business without risking your profile",
        paragraphs: ["Google's policy on fake and misleading content is strict, and breaking it can get reviews removed or your profile restricted. Per Google's own pages, these are not allowed:"],
        list: [
          "Paying for reviews, in money or in kind",
          "Offering a discount, free service or gift for posting a review, or for changing or removing a bad one",
          "Discouraging negative reviews, or asking only customers you expect to be happy",
          "Telling staff to collect a set number of reviews, or reviews that mention a staff member by name",
          "Writing reviews yourself, or asking family and friends who were never customers"
        ],
        after: [
          "That fourth point surprises many owners. Asking your technicians to collect five reviews each this month, or to ask customers to name them, is something Google's policy lists as a problem. Ask every customer neutrally from the business instead."
        ]
      },
      {
        id: "keep-going",
        heading: "Keep it steady, not a one-week push",
        paragraphs: [
          "A sudden burst of reviews followed by silence looks odd, to customers and to Google. Make the request part of how every job ends, and reviews arrive at a natural pace that reflects your real work."
        ]
      },
      {
        id: "learn-from-reviews",
        heading: "Use reviews to coach your team",
        paragraphs: [
          "Read new reviews in your weekly team meeting. Praise that names a quality, like punctuality, clear explanations or a clean site, tells everyone what customers value. Repeated complaints about the same thing tell you where to train.",
          "Keep it about behaviour, not blame. A review that says the technician arrived late is a reason to look at how jobs were planned that day, not only at the person who was late."
        ]
      }
    ],
    helps:
      "TeamShastra doesn't collect or post reviews. What it does is keep every customer's phone number and job history in one record, and turn a finished job into a service report PDF you can share on WhatsApp. Sending that report, with your own review link in the message, is a natural moment to ask.",
    faqs: [
      {
        question: "Can I offer a discount to customers who leave a Google review?",
        answer:
          "No. Google's policy treats discounts, free services or gifts in exchange for reviews as fake engagement. Ask every customer politely, without any reward attached."
      },
      {
        question: "Can my technicians ask customers for reviews?",
        answer:
          "They can mention it politely, but Google's policy lists telling staff to collect a set number of reviews, or reviews naming a staff member, as a problem. A neutral request from the business is safer."
      },
      {
        question: "How should I reply to a negative Google review?",
        answer:
          "Calmly and briefly: apologise for the experience, give your side without blaming, and offer to fix it by phone. Never share private details or argue in public."
      },
      {
        question: "How do I give customers a direct review link?",
        answer:
          "Google Business Profile lets you create a review link or QR code. Save it on your phone, add it to bills and cards, and include it when you send the bill or report."
      }
    ],
    sources: [sources.googleReviewTips, sources.googleReviewPolicy],
    sourcesChecked: published,
    legal: false,
    relatedFeatures: ["customer-management", "service-report-pdf"],
    relatedIndustries: [],
    relatedGuides: ["get-more-customers-for-service-business", "service-report-format"]
  }
];
