import { sources } from "../sources";
import type { Guide } from "../types";

const published = "2026-11-23";

export const teamGuides: Guide[] = [
  {
    slug: "pf-esi-rules-for-small-business",
    category: "team",
    title: "PF and ESI Rules for Small Business in 2026 | TeamShastra",
    metaDescription:
      "PF and ESI rules for small business owners: when they apply, the new ₹25,000 PF wage ceiling, who pays what, and what you must do every month for your staff.",
    h1: "PF and ESI rules for small business: when they apply and how pay changes",
    primaryKeyword: "PF and ESI rules for small business",
    secondaryKeywords: ["EPF wage ceiling 2026", "ESIC contribution rate", "professional tax for employees"],
    datePublished: published,
    dateModified: published,
    summary:
      "PF becomes compulsory once you have 20 or more employees, and from 17 September 2026 it covers staff earning up to ₹25,000 a month. ESIC coverage is mandatory from 10 employees, with a wage limit ESIC lists as ₹21,000 a month. Both take a share from the employee's salary and add a cost on top for you, so plan for them before you hire the next person.",
    sections: [
      {
        id: "what-changed",
        heading: "What changed with the Labour Codes",
        paragraphs: [
          "The four Labour Codes came into force on 21 November 2025. The Code on Social Security, 2020 now carries the rules that used to sit in the separate PF and ESI Acts. Per the government's factsheet, EPF used to apply only to industries listed in a schedule; under the Code it applies to every establishment with 20 or more employees, whatever the trade.",
          "ESIC coverage used to depend on whether your area was notified. The Code extends it across India. Firms with fewer than 10 employees can join voluntarily if employer and employees agree, and coverage is mandatory even for one worker if the work is hazardous."
        ]
      },
      {
        id: "pf-rules",
        heading: "PF and ESI rules for small business: the PF side",
        paragraphs: [
          "EPFO revised the statutory wage ceiling from ₹15,000 to ₹25,000 a month, effective 17 September 2026. In EPFO's words, employees drawing wages up to ₹25,000 must now become members of the EPF, EPS and EDLI schemes, and contributions are calculated on wages up to that ceiling.",
          "Per EPFO's worked example, the employee contributes 12% of PF wages. Your side splits into 3.67% to the provident fund, 8.33% to the pension scheme, 0.50% for EDLI insurance and 0.50% as admin charges. You deduct the employee's share from salary and deposit both shares with a monthly return called the ECR."
        ]
      },
      {
        id: "esi-rules",
        heading: "The ESI side",
        paragraphs: [
          "ESIC's own pages list the wage limit for coverage as ₹21,000 a month, or ₹25,000 for persons with disability. The current contribution is 0.75% of wages from the employee and 3.25% from the employer.",
          "In return, covered staff and their families get medical care and cash benefits during sickness, maternity or injury at work. For a technician who climbs ladders and works near live wires, that cover is worth explaining to them, not just deducting."
        ]
      },
      {
        id: "worked-example",
        heading: "A worked example for one technician",
        paragraphs: [
          "Here's how the numbers look for a technician on a made-up monthly wage of ₹20,000, all of it counted as PF and ESI wages. Your CA may count allowances differently; the Codes define what's included in wages."
        ],
        table: {
          caption: "Example: PF and ESI on a ₹20,000 monthly wage",
          head: ["Item", "Rate", "Amount (example)"],
          rows: [
            ["Employee PF, deducted from salary", "12%", "₹2,400"],
            ["Employer PF account", "3.67%", "₹734"],
            ["Employer pension (EPS)", "8.33%", "₹1,666"],
            ["Employer EDLI", "0.50%", "₹100"],
            ["Employer PF admin charges", "0.50%", "₹100"],
            ["Employee ESI, deducted from salary", "0.75%", "₹150"],
            ["Employer ESI", "3.25%", "₹650"]
          ]
        },
        after: [
          "Take-home pay drops by ₹2,550 before any professional tax, and your monthly cost for this person rises to about ₹23,250. Tell new hires this at the offer stage. A technician promised ₹20,000 who receives ₹17,450 will think you cheated him, even though you did everything right."
        ]
      },
      {
        id: "professional-tax",
        heading: "Professional tax is a state matter",
        paragraphs: [
          "Professional tax isn't central. Each state that levies it sets its own slabs, and some states don't levy it at all. In Maharashtra, for example, the Sales Tax Department publishes the profession tax rate schedule, and employers deduct it from salary and file returns under their PT registration.",
          "Staff in two states means checking both. A branch in Pune and another in Indore fall under two separate state schedules."
        ]
      },
      {
        id: "monthly-duties",
        heading: "What the owner has to do each month",
        list: [
          "Register the establishment on the EPFO and ESIC portals once you're covered",
          "Add each new joiner and get their UAN and ESI number linked",
          "Work out wages for the month, deduct the employee shares and pay the full amounts by the due dates each body sets",
          "File the monthly ECR with EPFO and the ESIC contribution return",
          "Deduct and pay professional tax where your state levies it",
          "Keep payslips showing every deduction, so a staff member can check their own figures"
        ],
        after: ["Missed deadlines bring interest and penalties, and the arrears grow fast. Many small firms hand the filing to their CA or a payroll consultant and keep their own job simple: correct attendance and correct wages, on time."]
      },
      {
        id: "talking-to-staff",
        heading: "Explaining deductions to your team",
        paragraphs: [
          "Technicians often see PF as money taken away. Show them their passbook once, explain that your share goes in too, and point out the pension and insurance parts. Two minutes at joining saves a resignation over a misunderstanding later.",
          "Be honest about what you don't know. If someone asks about withdrawing PF to fund a wedding, send them to EPFO's own help pages or the CA rather than guessing."
        ]
      }
    ],
    helps:
      "When you run payroll in TeamShastra, it reads attendance, leave, half days and holidays for the month, and you can turn on indicative PF, ESI, professional tax and TDS amounts to plan deductions. Payslips show each figure to the staff member. TeamShastra doesn't file or pay PF, ESI or professional tax; you or your CA still do that on the official portals.",
    faqs: [
      {
        question: "Is PF compulsory for a business with fewer than 20 employees?",
        answer:
          "The Code on Social Security applies EPF to establishments with 20 or more employees. Below that it isn't compulsory, though some smaller firms choose to offer it. Check with your CA before you decide."
      },
      {
        question: "What is the PF wage ceiling now?",
        answer:
          "EPFO raised it from ₹15,000 to ₹25,000 a month, effective 17 September 2026. Employees earning up to that amount must be members, and contributions are calculated on wages up to the ceiling."
      },
      {
        question: "How much ESI does an employer pay?",
        answer:
          "ESIC lists the employer share as 3.25% of wages and the employee share as 0.75%, for staff within the wage limit. Check ESIC's contribution page for the current rates before running payroll."
      },
      {
        question: "Do I need ESI if I have only five technicians?",
        answer:
          "Firms with fewer than 10 employees can join ESIC voluntarily if both sides agree. If the work counts as hazardous, coverage is mandatory even for one worker, so ask your CA how your trade is treated."
      },
      {
        question: "Does professional tax apply in every state?",
        answer:
          "No. It's a state tax with state-set slabs, and not every state levies it. Check your own state's commercial tax or sales tax department for the current schedule."
      }
    ],
    sources: [
      sources.labourCodes,
      sources.socialSecurityCode,
      sources.epfWageCeiling,
      sources.esicCoverage,
      sources.esicContribution,
      sources.maharashtraPt
    ],
    sourcesChecked: published,
    legal: true,
    disclaimerNote: "The ceilings and rates here are as EPFO, ESIC and PIB published them when we checked; payroll rules can change by notification at any time.",
    relatedFeatures: ["staff-salary-payroll", "salary-advance-payslip"],
    relatedIndustries: [],
    relatedGuides: ["staff-salary-calculation-per-day", "retain-good-employees-small-business", "hire-technicians-india"]
  },
  {
    slug: "manage-field-team-efficiently",
    category: "team",
    title: "How to Manage Field Team Without Micromanaging | TeamShastra",
    metaDescription:
      "How to manage field team members you can't see all day: clear roles, a short morning plan, rules everyone knows, fair checks and a weekly review that works.",
    h1: "How to manage field team members you don't see all day",
    primaryKeyword: "how to manage field team",
    secondaryKeywords: ["field staff management tips", "technician daily plan", "managing technicians remotely"],
    datePublished: published,
    dateModified: published,
    summary:
      "If you're working out how to manage field team members who spend the day at customer sites, start with clear roles and a short morning plan. Set a few rules everyone knows, check results rather than hovering, deal with lateness the same way every time, and review the week together. Your technicians want fairness more than freedom.",
    sections: [
      {
        id: "out-of-sight",
        heading: "The hard part: they're out of sight",
        paragraphs: [
          "In a shop you can see who's working. With a field team, your technicians are at a society in Andheri, a clinic in Thane and a godown in Bhiwandi by ten o'clock. All you have is the phone, and each call interrupts the work you're paying for.",
          "Owners usually swing between two extremes: calling every hour, or hearing nothing until a customer complains. Neither works. What works is a routine your team can follow without you."
        ]
      },
      {
        id: "roles",
        heading: "Give everyone one clear role",
        paragraphs: ["Small teams blur roles, and that's where jobs fall through. Write down who does what, even if one person wears two hats."],
        list: [
          "Owner: prices, big customers, salary, hiring and the final call on disputes",
          "Manager or supervisor: assigns jobs, answers technicians' questions, checks the day's work",
          "Technician: does the job, records it properly, collects or notes payment",
          "Helper: supports the technician and learns; never sent alone to a new customer"
        ],
        after: ["Everyone should know whose phone rings first when a customer calls with a complaint."]
      },
      {
        id: "morning-plan",
        heading: "A ten-minute morning plan",
        paragraphs: [
          "Start every day the same way. A quick huddle at the office, or a short voice note in the team group if people go straight to sites. Each technician should know three things before leaving: their jobs in order, what parts to carry, and who to call if they're stuck.",
          "Keep the plan in one place everyone can see. When the 11 am urgent call arrives, you'll know who's closest to finishing and can be moved."
        ]
      },
      {
        id: "house-rules",
        heading: "Rules everyone knows, written once",
        list: [
          "Reporting time and how to mark attendance",
          "Photos before and after every job",
          "How to record payment at completion",
          "What to do if a customer isn't home",
          "When to call the office instead of deciding alone"
        ],
        after: ["Print it or pin it in the group. Rules that live only in the owner's head get applied unevenly, and uneven rules feel personal."]
      },
      {
        id: "check-results",
        heading: "Check the work, not the person",
        paragraphs: [
          "You don't need to know where someone is every minute. You need to know the job was done well. Look at job photos at the end of the day. Read the customer's note. Count repeat visits per technician each month.",
          "If the work is good and customers are happy, leave that person alone. Spend your attention where the photos are missing or callbacks keep coming."
        ]
      },
      {
        id: "late-absent",
        heading: "Handling late or absent staff",
        paragraphs: [
          "Decide your rule once: what counts as late, how many lates make a half day, and what happens when someone doesn't turn up without telling you. Then apply it the same way to your best technician and your newest helper.",
          "Talk privately the first time. Ask what's going on before you cut pay. A technician who's late every Monday might be dropping a child at school, and a fifteen-minute shift in his start time could fix it for good."
        ]
      },
      {
        id: "weekly-review",
        heading: "A weekly review and fair recognition",
        paragraphs: [
          "Once a week, spend fifteen minutes with the team. Share jobs done, callbacks and any customer praise. Name the person who handled a tough customer well. People repeat what gets noticed.",
          "Recognition doesn't have to be money. First pick of next week's jobs, a word in front of the team, or being trusted with a new customer can matter just as much."
        ]
      },
      {
        id: "privacy",
        heading: "A note on location and privacy",
        paragraphs: [
          "Location checks feel very different to staff depending on how they're done. Recording where someone was when they checked in and out is very different from watching them all day. Tell your team exactly what's recorded and why before you start, and stick to what you said."
        ]
      },
      {
        id: "leave-cover",
        heading: "How to manage field team cover when someone is on leave",
        paragraphs: [
          "Leave is where a well-run week falls apart. A technician takes three days off for a family function, his AMC visits are forgotten, and two customers call to complain. Planned leave should trigger a simple handover: list that person's booked jobs, reassign each one, and tell the customers if the technician is changing.",
          "Ask people to request leave a few days ahead except in emergencies, and approve it in one place everyone can see. When the plan for tomorrow already shows who's away, the morning huddle takes care of the rest instead of the owner rescheduling at 9 am."
        ]
      }
    ],
    helps:
      "TeamShastra gives owners, managers and technicians separate roles, so each person sees only what they need. Attendance records the location only at check-in and check-out, never in between. The team performance report shows on-time check-ins, missed checkouts and jobs completed for each person, and technicians can open My performance to see their own numbers.",
    faqs: [
      {
        question: "How do I know my field staff are working without calling them?",
        answer:
          "Look at results: jobs closed, photos added and customer notes at day end. Attendance with a location at check-in shows when the day began. Calls should be for problems, not routine checks."
      },
      {
        question: "Should I fine technicians for coming late?",
        answer:
          "Set a clear, written rule first, such as how many late arrivals count as a half day. Talk to the person the first time before any cut. Fairness and consistency matter more than the size of the penalty."
      },
      {
        question: "How long should a daily team meeting be?",
        answer:
          "Ten minutes is plenty: jobs in order, parts to carry and who to call when stuck. If people go straight to sites, a short voice note in the team group works too."
      },
      {
        question: "Is it fair to track technicians' location?",
        answer:
          "Recording location only at check-in and check-out is a reasonable middle path. Tell staff what's recorded and why before you begin, and don't quietly extend it later."
      }
    ],
    sources: [],
    sourcesChecked: published,
    legal: false,
    relatedFeatures: ["roles-permissions", "gps-attendance-app", "business-reports-dashboard"],
    relatedIndustries: [],
    relatedGuides: ["stop-fake-attendance-field-staff", "handle-more-service-calls-per-day", "retain-good-employees-small-business"]
  },
  {
    slug: "hire-technicians-india",
    category: "team",
    title: "How to Hire Technicians in India | TeamShastra",
    metaDescription:
      "How to hire technicians for a service business in India: where to look, a skills test that works, reference and ID checks, and a first week that sets them up.",
    h1: "How to hire technicians you can trust at a customer's home",
    primaryKeyword: "how to hire technicians",
    secondaryKeywords: ["hiring ITI technicians", "technician skills test", "apprentice technician hiring"],
    datePublished: published,
    dateModified: published,
    summary:
      "Here's how to hire technicians without guesswork: look where trained people already are, such as ITIs, apprentices and trusted references. Give a short hands-on test, check ID and past employers, put the offer in writing, and plan the first week before they arrive. A good hire is someone your customers will happily let into their homes.",
    sections: [
      {
        id: "know-the-role",
        heading: "Know exactly who you're hiring",
        paragraphs: [
          "\"Need a good technician\" isn't a job description. Write down the trade, the level and the work. A helper who can carry, lay cable and learn. A technician who can install and fix common faults alone. A senior who can handle tricky faults and talk to office clients.",
          "Add the practical needs: a two-wheeler and licence, area knowledge, languages, comfort with a smartphone. That list decides where you search and what you test."
        ]
      },
      {
        id: "where-to-look",
        heading: "Where to find technicians",
        list: [
          "References from your best current technicians: they know who's good and won't risk their name on a bad one",
          "Local ITIs: the Directorate General of Training lists trades such as Electrician, Wireman, Electronics Mechanic, and Refrigeration and Air Conditioning Technician, each a two-year course, and Plumber as a one-year course",
          "Apprentices: you can register as an establishment on the Apprenticeship India portal and post openings for trainees",
          "Dealers and distributors you buy from: they meet technicians every day and hear who's looking",
          "Job portals and local classifieds, for volume when you need several people"
        ],
        after: ["Pass-outs need training but come without bad habits. Experienced people come trained but may bring a previous employer's shortcuts. Most teams do best with a mix."]
      },
      {
        id: "job-post",
        heading: "Writing a job post people actually answer",
        paragraphs: [
          "Be specific. Trade, area, timing, salary range, and what the first three months look like. \"AC technician, Pune west, 9:30 to 6:30, ₹18,000 to ₹22,000 based on test (example range), own bike needed\" gets better replies than a paragraph about your company's vision.",
          "Say how to apply in one step: a WhatsApp number and a request for name, area, experience and one photo of their recent work."
        ]
      },
      {
        id: "skills-test",
        heading: "A practical test beats a long interview",
        paragraphs: [
          "Talk for ten minutes, then hand them a real task. Ask an electrician to wire a switchboard with a fault you've planted. Give an AC candidate an indoor unit to clean and a gas pressure to read. Watch how they work as much as whether they finish.",
          "Look for safety habits. Do they switch off and test before touching? Do they tidy up? Do they explain to you, as if you were the customer, what they found? That last bit tells you how they'll be with your customers."
        ]
      },
      {
        id: "checks",
        heading: "References, ID and police verification",
        paragraphs: [
          "Call at least one previous employer and ask two questions: would you hire them again, and why did they leave? Take copies of ID and address proof, and check that the name and photo match the person in front of you.",
          "For staff who'll enter homes, consider police verification. Many state police forces offer citizen services online; check your state police website for an employee or tenant verification service and how long it takes. Tell candidates upfront that you do this. Good people don't mind."
        ]
      },
      {
        id: "offer",
        heading: "Offer letter basics",
        list: [
          "Role, start date and reporting time",
          "Monthly wage, and any deductions they should expect, such as PF or ESI if you're covered",
          "Probation period and notice period",
          "Leave rules and the weekly off",
          "Rules on tools, uniform and company cash"
        ],
        after: ["Keep it to one page in plain language, give a copy, and keep a signed copy yourself."]
      },
      {
        id: "first-week",
        heading: "The first week decides a lot",
        paragraphs: [
          "Pair the new person with a calm senior for the first few days. Give them a simple kit list, the house rules and the phone numbers they'll need. Don't send them alone to your most demanding customer in week one.",
          "End the first week with a short talk: what went well, what was confusing, what they need. People who feel looked after in week one stay longer."
        ]
      },
      {
        id: "mistakes",
        heading: "Mistakes to avoid when deciding how to hire technicians",
        paragraphs: [
          "Most bad hires come from rushing. Summer arrives, calls pile up, and the first person who says they've done AC work gets a kit and a list of jobs. Two weeks later you're apologising to customers."
        ],
        list: [
          "Hiring without a hands-on test because the candidate talked well",
          "Skipping the reference call because the person seemed honest",
          "Promising a salary without explaining deductions",
          "Hiring a friend's relative you can't correct later",
          "Sending a new person alone to your biggest customer in the first month"
        ],
        after: [
          "Plan your hiring a month before the busy season, not during it. A slower start with the right person beats a fast start with the wrong one."
        ]
      }
    ],
    helps:
      "When your new technician joins, add them to TeamShastra by phone number and give them the technician role, so they see only their own jobs, attendance, leave and expenses. They can upload ID documents on their profile for you to approve, and salary is set up for them like everyone else. TeamShastra doesn't post jobs or help you find candidates.",
    faqs: [
      {
        question: "Where can I find trained technicians in India?",
        answer:
          "Start with references from your own team, then local ITIs that teach your trade, apprentices through the Apprenticeship India portal, and the dealers you buy from. Job portals help when you need several people at once."
      },
      {
        question: "What should a technician skills test include?",
        answer:
          "One real task from your daily work, with a planted fault if possible. Watch safety habits and how they explain the problem, not only whether they fix it. Thirty minutes is usually enough."
      },
      {
        question: "Should I do police verification for technicians?",
        answer:
          "For anyone who'll work inside homes, it's worth doing. Check your state police website for a verification service and tell candidates at the start, so it's routine rather than suspicious."
      },
      {
        question: "Is an ITI pass-out ready to work alone?",
        answer:
          "Usually not on day one. They know the basics but need weeks of supervised site work. Pair them with a senior and give them simple jobs first."
      }
    ],
    sources: [sources.itiTrades, sources.apprenticeship],
    sourcesChecked: published,
    legal: true,
    disclaimerNote: "Hiring, verification and apprenticeship rules vary by state and by the size of your business, so confirm what applies to you.",
    relatedFeatures: ["roles-permissions", "staff-salary-payroll"],
    relatedIndustries: [],
    relatedGuides: ["train-new-technicians", "retain-good-employees-small-business", "pf-esi-rules-for-small-business"]
  },
  {
    slug: "retain-good-employees-small-business",
    category: "team",
    title: "How to Retain Employees in Small Business | TeamShastra",
    metaDescription:
      "How to retain employees in small business: pay right and on time, keep fair records, show a path from helper to senior and notice good work early.",
    h1: "How to retain employees in small business when bigger firms come calling",
    primaryKeyword: "how to retain employees in small business",
    secondaryKeywords: ["technician turnover", "keep good technicians", "employee recognition ideas"],
    datePublished: published,
    dateModified: published,
    summary:
      "The answer to how to retain employees in small business is rarely a big raise. It's paying correctly and on time, keeping attendance and leave records people trust, showing a clear path to the next level, and noticing good work out loud. Technicians leave owners who feel unfair long before they leave for money.",
    sections: [
      {
        id: "why-they-leave",
        heading: "Why good technicians actually leave",
        paragraphs: [
          "Ask a few who left and you'll hear the same things. Salary came late again. Half days were cut without explanation. The new guy got the easy jobs. Nobody said anything when they handled the angry customer well. Money is part of it, but it's usually the last straw, not the first.",
          "The good news is that most of these are within your control and cost little to fix."
        ]
      },
      {
        id: "pay-on-time",
        heading: "Pay correctly and on time, every month",
        paragraphs: [
          "Per the government's factsheet on the Code on Wages, monthly wages must be paid within seven days of the next month, a wage slip must be given on or before payment, and someone who leaves must be paid within two working days. Beyond the law, a fixed salary date is the single biggest trust signal a small employer can send.",
          "If you can't pay on the usual date, tell the team before the day, not after. Silence turns a two-day delay into a rumour that the business is in trouble."
        ]
      },
      {
        id: "payslips",
        heading: "Payslips as proof, not paperwork",
        paragraphs: [
          "A payslip that shows days present, leave, overtime, advances recovered and every deduction ends most salary arguments before they start. A technician who can see exactly why this month is ₹600 lower is far less likely to feel cheated.",
          "Hand it over with the salary. Don't make people ask for it."
        ]
      },
      {
        id: "fair-records",
        heading: "Fair attendance and leave records",
        paragraphs: [
          "If one person's late arrival is ignored and another's is cut, the whole team notices. Use the same rules for everyone and let people see their own records. Leave asked for and approved in advance should never turn into an absent mark at month end.",
          "When a mistake happens, and it will, fix it in the next salary and say sorry. Owning a small error builds more loyalty than never making one."
        ]
      },
      {
        id: "career-path",
        heading: "Show a path from helper to senior",
        paragraphs: ["People stay when they can see where they're going. Write down the steps and what it takes to move up."],
        table: {
          caption: "Example growth path for a field service team",
          head: ["Level", "What they do", "What moves them up"],
          rows: [
            ["Helper", "Supports installs, carries, learns", "Can do routine service alone, safe habits"],
            ["Technician", "Handles standard jobs alone", "Low repeat visits, good customer notes"],
            ["Senior technician", "Hard faults, office clients, trains juniors", "Can lead a site and quote small jobs"],
            ["Supervisor", "Plans the day, checks work", "Team results and customer retention"]
          ]
        },
        after: ["Attach a pay range to each level, even a rough one. A helper who knows what a senior earns has a reason to stay and learn."]
      },
      {
        id: "training",
        heading: "Training is a retention tool",
        paragraphs: [
          "Sending someone for a brand's training course, or pairing them with your best senior for a month, tells them you see a future for them here. Technicians who learn a new skill with you tend to stay to use it.",
          "Be clear about it though. If you're paying for an expensive course, agree in writing what happens if they leave soon after."
        ]
      },
      {
        id: "recognition",
        heading: "Respect and recognition",
        list: [
          "Say thank you in front of the team when a customer praises someone",
          "Ask senior technicians for their view before changing how jobs are done",
          "Don't shout at anyone in front of a customer, ever",
          "Remember family events; a day off for a sister's wedding is remembered for years"
        ]
      },
      {
        id: "advances-and-exits",
        heading: "Advances, and talking to people who leave",
        paragraphs: [
          "Handle salary advances the same way for everyone, with the amount and recovery plan written down. Favouritism with advances causes more bad feeling than almost anything else.",
          "When someone does leave, ask why and actually listen. Settle their dues quickly and part on good terms. Former technicians send references, and some come back."
        ]
      },
      {
        id: "monthly-checklist",
        heading: "How to retain employees in small business: a five-minute monthly check",
        list: [
          "Was salary paid on the usual date, with payslips?",
          "Did anyone have a pay correction, and was it explained?",
          "Who handled a hard job or a difficult customer well, and did they hear about it?",
          "Is anyone close to the next level on the growth path?",
          "Did anyone seem unhappy, quiet or distracted, and has someone talked to them?"
        ],
        after: [
          "Go through these questions at the end of each month, on your own or with your supervisor. Most resignations give signs weeks in advance. A short check catches them while there's still time to talk, and costs you nothing but a quiet half hour."
        ]
      }
    ],
    helps:
      "TeamShastra builds salary from the month's attendance, approved leave, half days and holidays, so pay follows records your staff can see. Staff request leave from the app and managers approve it before the day. Advances are recorded with their recovery, and each person can open their own paid payslips in the app.",
    faqs: [
      {
        question: "What makes technicians leave a small business?",
        answer:
          "Late or unexplained salary, uneven rules, and feeling unnoticed come up far more often than pay alone. Fixing those costs little and keeps people longer than a one-time raise."
      },
      {
        question: "When must monthly salary be paid?",
        answer:
          "Per the PIB factsheet on the Code on Wages, within seven days of the next month, with a wage slip given on or before payment. Pick a fixed date inside that window and keep to it."
      },
      {
        question: "Does a growth path really matter for helpers?",
        answer:
          "Yes. When a helper can see the steps to technician and senior, with rough pay for each, they have a reason to learn and stay instead of jumping for a small raise elsewhere."
      },
      {
        question: "Should I pay for training if staff might leave?",
        answer:
          "Training usually helps keep people. For expensive courses, agree in writing beforehand what happens if someone leaves within a set period, so it's fair to both sides."
      }
    ],
    sources: [sources.codeOnWages, sources.labourCodes],
    sourcesChecked: published,
    legal: true,
    disclaimerNote: "The wage payment timings here come from the government's summary of the Code on Wages; state rules may add details.",
    relatedFeatures: ["staff-salary-payroll", "salary-advance-payslip", "leave-management"],
    relatedIndustries: [],
    relatedGuides: ["pf-esi-rules-for-small-business", "train-new-technicians", "salary-slip-format"]
  },
  {
    slug: "train-new-technicians",
    category: "team",
    title: "How to Train New Technicians in a Small Firm | TeamShastra",
    metaDescription:
      "How to train new technicians in a small service firm: day-one safety, a buddy system, a skills checklist by trade and lessons from real job photos.",
    h1: "How to train new technicians without slowing your whole team down",
    primaryKeyword: "how to train new technicians",
    secondaryKeywords: ["technician onboarding plan", "technician skills checklist", "buddy system for technicians"],
    datePublished: published,
    dateModified: published,
    summary:
      "Knowing how to train new technicians well comes down to a plan. Cover safety, tools and customer manners on day one, pair them with a senior, and use a written skills checklist for your trade. Review real job photos and reports together each week, and only send them alone once they've done each task properly in front of someone.",
    sections: [
      {
        id: "sink-or-swim",
        heading: "Why sink-or-swim training costs you",
        paragraphs: [
          "Throwing a new person straight onto jobs feels efficient. Then they forget to isolate the supply, scratch a customer's wall, or quote a price you'd never agree to. You lose a customer, a part, or worse.",
          "A short, structured start costs a few slower weeks and saves months of fixing avoidable mistakes."
        ]
      },
      {
        id: "day-one",
        heading: "Day one: safety, tools and manners",
        list: [
          "Safety: isolate and test before touching, ladder rules, what never to do alone",
          "Tools: what's in the kit, how to look after it, what to do if something breaks",
          "Customer manners: greeting, shoe covers, explaining before starting, cleaning up after",
          "Phone use: how to record a job, take photos and mark payment",
          "Who to call when stuck, and that calling is always better than guessing"
        ],
        after: ["Keep day one off customer sites if you can. A morning at the office with a senior covers more than a day of watching from a corner."]
      },
      {
        id: "buddy",
        heading: "Pair them with a senior",
        paragraphs: [
          "For the first two to four weeks, the new person works alongside one senior. Pick someone patient, not just your fastest technician. Agree what the senior should teach and pay a small allowance for it if you can; teaching is real extra work.",
          "Swap the pairing once in the middle so the new person sees two ways of doing things. They'll pick the better habits of each."
        ]
      },
      {
        id: "checklist",
        heading: "A skills checklist by trade",
        paragraphs: ["Write the tasks for your trade and tick each off only when the new person has done it correctly while a senior watched. Here's a starting list for three trades; edit it for your own work."],
        table: {
          caption: "Starter skills checklist for three trades",
          head: ["Trade", "Must do alone before working solo", "Senior signs off when"],
          rows: [
            ["AC service", "Indoor and outdoor cleaning, drain check, gas pressure reading, capacitor test", "Three clean services with no callback"],
            ["CCTV", "Crimp and test connectors, mount and angle a camera, set recording, share mobile view", "Two installs with correct angles and recording"],
            ["Electrical", "Isolate and test, trace a tripping circuit, replace a switchboard, earthing check", "Faults found and fixed safely three times"]
          ]
        },
        after: ["A checklist turns \"he's not ready yet\" into \"he needs to do the gas reading once more\". That's fairer, and faster."]
      },
      {
        id: "learn-from-jobs",
        heading: "Learning from job photos and service reports",
        paragraphs: [
          "Every job your team completes is a lesson if you keep the photos and notes. Once a week, open a few of the new person's jobs with them. Go through the before and after photos together. Ask what they'd do differently.",
          "Use good reports from your seniors as examples. Showing what a clear, complete service report looks like teaches more than telling someone to write better notes."
        ]
      },
      {
        id: "weekly-sessions",
        heading: "Short weekly sessions for everyone",
        paragraphs: [
          "Thirty minutes on a quiet morning, once a week. One topic: a new model's error codes, a common wiring mistake, how to handle a customer who wants a discount. Let a senior lead some of them.",
          "These sessions help your old hands too. Brand updates, new tools and better methods reach everyone, not just the new joiner."
        ]
      },
      {
        id: "going-solo",
        heading: "When to let them work alone",
        paragraphs: [
          "Not on a fixed date, but when the checklist is complete. Start with simple, nearby jobs from friendly customers, with a senior available on the phone. Review their first ten solo jobs closely.",
          "Tell them clearly that they're now trusted to work alone and why. That moment matters to people. It's often when a new technician decides this is a place to stay."
        ]
      },
      {
        id: "customer-conversations",
        heading: "How to train new technicians to talk to customers",
        paragraphs: [
          "Technical skill gets the job done. How the technician talks decides whether the customer calls you again. New people often go quiet, or say too much and promise things you can't deliver.",
          "Teach three conversations by role-play in the office. The opening: who they are, what they'll check, how long it may take. The bad news: a part has failed, here's the cost, and the choice is the customer's. The close: what was done, what to watch for, and how to pay. Five minutes of practice each, with a senior playing a difficult customer, prepares them better than any lecture.",
          "Tell them what they must never do: argue about price, criticise a previous technician's work in front of the customer, or promise a discount the owner hasn't agreed."
        ]
      }
    ],
    helps:
      "In TeamShastra, technicians add photos and comments to each job, and any job can become a service report PDF with those photos and notes. That gives you real work to review with a new person every week. You can assign a new technician and a senior to the same job, so both see it on their phones.",
    faqs: [
      {
        question: "How long does it take to train a new technician?",
        answer:
          "For an ITI pass-out with basics, plan on two to six weeks of paired work before simple solo jobs, depending on the trade. A written checklist tells you when they're ready, not the calendar."
      },
      {
        question: "Who should train new technicians in a small firm?",
        answer:
          "A patient senior, not necessarily the fastest one. Agree what they'll teach, and give a small allowance if you can, because training slows their own work."
      },
      {
        question: "What should a technician learn on the first day?",
        answer:
          "Safety rules, the tool kit, customer manners and how to record a job on the phone. Keep day one off customer sites where possible so there's time to ask questions."
      },
      {
        question: "How do I check a new technician's work remotely?",
        answer:
          "Ask for before and after photos on every job and read the notes daily. Review a few jobs together each week and talk through what they'd change."
      }
    ],
    sources: [],
    sourcesChecked: published,
    legal: false,
    relatedFeatures: ["job-work-order-management", "service-report-pdf"],
    relatedIndustries: [],
    relatedGuides: ["hire-technicians-india", "service-report-format", "manage-field-team-efficiently"]
  }
];
