import { sources } from "../sources";
import type { Guide } from "../types";

const published = "2026-11-23";

export const salaryGuides: Guide[] = [
  {
    slug: "staff-salary-calculation-per-day",
    category: "salary",
    title: "Salary Calculation Per Day for Staff | TeamShastra",
    metaDescription:
      "Salary calculation per day for small Indian teams: the 26-day, 30-day and calendar-day methods, half days and unpaid leave, with worked examples to copy.",
    h1: "Salary calculation per day: a simple method for small teams",
    primaryKeyword: "salary calculation per day",
    secondaryKeywords: ["per day salary formula", "per day salary kaise nikale", "salary for 26 days or 30 days"],
    datePublished: published,
    dateModified: published,
    summary:
      "Salary calculation per day is the monthly salary divided by a fixed number of days, then multiplied by the days you pay for. Pick one divisor (26, 30 or the actual days in the month), write it in the appointment letter, and use it every month. Salary-day fights usually come from switching methods, not from the maths.",
    sections: [
      {
        id: "why-it-matters",
        heading: "Why per-day pay causes so many arguments",
        paragraphs: [
          "Picture the first week of the month. Your senior technician took three days off for a wedding in his village, one helper left mid-month, and a new helper joined on the 12th. Each of them needs a part-month salary, and each of them has done the sum on their phone already.",
          "If you used 30 days last month and 26 days this month, someone's number won't match yours. The fix isn't a smarter formula. It's choosing one method, telling people what it is, and sticking to it."
        ]
      },
      {
        id: "three-methods",
        heading: "Three ways to set the divisor",
        paragraphs: [
          "The divisor is the number you divide the monthly salary by to get one day's pay. Small businesses in India usually pick one of three. The table uses a monthly salary of ₹15,600 as an example only."
        ],
        table: {
          caption: "Per-day pay for an example monthly salary of ₹15,600",
          head: ["Method", "Divide by", "Example per-day pay"],
          rows: [
            ["Fixed 26 days", "26 every month", "₹600"],
            ["Fixed 30 days", "30 every month", "₹520"],
            ["Calendar days, February", "28", "₹557.14"],
            ["Calendar days, a 31-day month", "31", "₹503.23"]
          ]
        },
        after: [
          "The 26-day method treats Sundays as already paid, so a day off costs more. The 30-day method is gentler on the employee for each missed day. Calendar days are the most exact but change every month, which confuses people. None of them is wrong. What matters is that your staff know which one you use before the first cut."
        ]
      },
      {
        id: "worked-example",
        heading: "Worked example: a technician with two unpaid days",
        paragraphs: [
          "Say Ravi's monthly salary is ₹18,000 (an example figure) and you use the 26-day method. One day's pay is 18,000 ÷ 26 = ₹692.31. He took two days of unpaid leave this month."
        ],
        list: [
          "Per-day pay: ₹18,000 ÷ 26 = ₹692.31",
          "Cut for two unpaid days: ₹692.31 × 2 = ₹1,384.62",
          "Salary for the month: ₹18,000 − ₹1,384.62 = ₹16,615.38",
          "Round the way you always round (to the nearest rupee is common) and write the rule down"
        ],
        ordered: true,
        after: [
          "If you used 30 days instead, the cut would be ₹1,200 and his pay ₹16,800. That ₹184.62 gap is exactly the kind of thing that turns into a long talk on salary day, so show the working on the payslip."
        ]
      },
      {
        id: "part-days",
        heading: "Half days, late joiners and weekly offs",
        paragraphs: ["These three cases cause the most confusion. Settle each one in writing once."],
        subsections: [
          {
            heading: "Half days",
            paragraphs: [
              "A half day is usually half of one day's pay. With the example above, that's ₹346.15. Decide what counts as a half day: leaving after lunch, reaching after 1 pm, or working less than four hours. Pick one test and use it for everyone."
            ]
          },
          {
            heading: "Someone who joins or leaves mid-month",
            paragraphs: [
              "Pay for the days they were on your books. If Sunil joins on the 12th of a 30-day month and you use calendar days, he's paid for 19 days. With a fixed 26-day divisor, count the working days from the 12th instead, so you don't pay for Sundays twice."
            ]
          },
          {
            heading: "Weekly offs and holidays",
            paragraphs: [
              "For a monthly employee, the weekly off is normally already inside the monthly figure. For a daily-wage worker, it usually isn't paid unless you agree otherwise. Company holidays such as Diwali can be paid or unpaid. Say which in the appointment letter."
            ]
          }
        ]
      },
      {
        id: "daily-and-hourly",
        heading: "Daily-wage and hourly staff",
        paragraphs: [
          "Helpers and seasonal staff are often paid by the day or the hour. Here there's no divisor at all. Multiply the agreed daily wage by the days worked, or the hourly rate by the hours worked.",
          "For example, a helper on ₹650 a day who worked 23 days earns ₹14,950. A part-timer on ₹90 an hour who worked 112 hours earns ₹10,080. Keep the attendance record that backs these numbers, because that's what you'll point to if anyone asks."
        ]
      },
      {
        id: "what-the-law-says",
        heading: "What the law fixes and what it leaves to you",
        paragraphs: [
          "India's Code on Wages, 2019 came into force with the other Labour Codes on 21 November 2025. Per the government's factsheet, minimum wages can be fixed by the hour, day or month, a monthly wage must be paid within seven days of the next month, and you must give a wage slip on or before payment.",
          "We couldn't find an official rule that picks 26 or 30 days for a private small business. That choice sits with you, your appointment letter and your CA. Do check the minimum wage notified for your state and the type of work, because your per-day pay can't fall below it."
        ]
      },
      {
        id: "checklist",
        heading: "Write it down once: a short checklist",
        list: [
          "Which divisor you use (26, 30 or calendar days)",
          "What counts as a half day",
          "Whether weekly offs and company holidays are paid",
          "How many paid leaves a year, and what happens to unused ones",
          "How you round the final figure",
          "The date salary is paid each month"
        ],
        after: [
          "Put this in the appointment letter and read it out once at a team meeting. It takes ten minutes and saves hours of arguing later."
        ]
      }
    ],
    helps:
      "In TeamShastra you open a salary month, set each person's wage as Monthly, Per day or Hourly, and the app works out pay from their check-ins, leave and half days. Weekly offs and paid or unpaid holidays follow the rules you set. You can check every line before you freeze the month and pay.",
    faqs: [
      {
        question: "Should I divide monthly salary by 26 or by 30?",
        answer:
          "Either works if you use it every month and your staff know it. Dividing by 26 makes each missed day cost a little more and treats Sundays as already paid. Dividing by 30 is gentler per day. Write your choice in the appointment letter."
      },
      {
        question: "How do I work out pay for someone who joined in the middle of the month?",
        answer:
          "Count the days they were with you and multiply by the per-day rate. With calendar days, count every day from the joining date. With a fixed 26-day divisor, count only working days from that date so the weekly off isn't paid twice."
      },
      {
        question: "Is a half day exactly half of a day's pay?",
        answer:
          "That's the usual practice, and it's the simplest to explain. The harder part is defining a half day. Pick one test, such as fewer than four hours worked, and apply it to everyone so nobody feels singled out."
      },
      {
        question: "Can per-day pay be lower than the minimum wage?",
        answer:
          "No. Under the Code on Wages, minimum wages apply to every employee, and they can be fixed by the hour, day or month. Check the rate notified for your state and the kind of work, and make sure your per-day figure stays above it."
      },
      {
        question: "When do I have to pay a monthly salary?",
        answer:
          "Per the PIB factsheet on the Code on Wages, monthly wages must be paid within seven days of the next month. If someone resigns or is let go, wages are due within two working days. Plan your salary date so it falls inside that window."
      }
    ],
    sources: [sources.codeOnWages, sources.labourCodes],
    sourcesChecked: published,
    legal: true,
    relatedFeatures: ["staff-salary-payroll", "gps-attendance-app", "leave-management"],
    relatedIndustries: [],
    relatedGuides: ["salary-slip-format", "overtime-calculation-for-staff", "salary-advance-rules-for-employers"]
  },
  {
    slug: "salary-slip-format",
    category: "salary",
    title: "Salary Slip Format for Small Businesses | TeamShastra",
    metaDescription:
      "A salary slip format for small businesses in India: what each payslip should show, a sample layout you can copy, and how to explain cuts so staff trust it.",
    h1: "Salary slip format for a small business, with a sample you can copy",
    primaryKeyword: "salary slip format",
    secondaryKeywords: ["payslip format for small business", "salary slip kaise banaye", "wage slip format"],
    datePublished: published,
    dateModified: published,
    summary:
      "A good salary slip format shows who is being paid, for which month, how many days were paid, every earning, every deduction, and the net amount with the payment date. Since the Code on Wages came into force, you have to give a wage slip on or before payment. Keep it on one page and in plain words.",
    sections: [
      {
        id: "why-a-slip",
        heading: "Why a one-page slip saves you trouble",
        paragraphs: [
          "Many small owners pay salary in cash or by UPI and say the number out loud. That works until someone asks why this month is ₹900 less. Then you're digging through a diary while three people wait.",
          "A slip settles it. When the cut for two missed days and the ₹2,000 advance recovery (example figures) are printed on paper, the conversation is short. It also helps your staff: a bank or a landlord may ask them for proof of income, and the slip is that proof."
        ]
      },
      {
        id: "the-law",
        heading: "What the law asks for",
        paragraphs: [
          "Since 21 November 2025, when the Code on Wages, 2019 and the other Labour Codes took effect, employers must give wage slips, on paper or electronically, on or before the wages are paid (section 50(3) read with rule 34).",
          "The factsheet doesn't print a format for you. The rest of this guide is a practical layout that covers what employees and CAs usually need. If you have PF or ESI registration, your CA may want extra lines."
        ]
      },
      {
        id: "what-to-show",
        heading: "What every salary slip should show",
        subsections: [
          {
            heading: "The top: who, which month, how many days",
            list: [
              "Business name and address",
              "Employee name, role and an ID or phone number",
              "Salary month, for example November 2026",
              "Days in the month and days paid",
              "Wage type: monthly, per day or hourly"
            ]
          },
          {
            heading: "Earnings",
            list: [
              "Fixed salary or wages for the days paid",
              "Overtime, with hours and rate",
              "Bonus or incentive, if any, with a one-line reason",
              "Allowances you pay, such as a fixed travel amount"
            ]
          },
          {
            heading: "Deductions and the net figure",
            list: [
              "Unpaid leave or absence cut, with the number of days",
              "Salary advance recovered this month, and the balance still left",
              "PF, ESI or professional tax if they apply to your business",
              "Any other cut, each on its own line with a reason",
              "Net pay, how it was paid (cash, UPI or bank) and the date"
            ]
          }
        ]
      },
      {
        id: "sample",
        heading: "Sample salary slip layout",
        paragraphs: ["Here's a simple layout for one month. Every amount is an example, not a suggested salary."],
        table: {
          caption: "Example salary slip for November 2026 (all amounts are examples)",
          head: ["Line", "Detail", "Amount"],
          rows: [
            ["Employee", "Imran Shaikh, CCTV technician", ""],
            ["Days paid", "24 of 26 working days", ""],
            ["Monthly salary", "Fixed, 26-day method", "₹18,000"],
            ["Absence cut", "2 unpaid days at ₹692.31", "−\u00a0₹1,384.62"],
            ["Overtime", "6 hours at ₹173.08", "+\u00a0₹1,038.48"],
            ["Advance recovered", "₹2,000 of ₹6,000 taken in October", "−\u00a0₹2,000"],
            ["Advance still left", "To recover over the next two months", "₹4,000"],
            ["Net pay", "Paid by UPI on 5 December 2026", "₹15,653.86"]
          ]
        },
        after: [
          "Notice the line showing the advance still left. Staff ask about it more than anything else. Printing it every month ends the question before it starts."
        ]
      },
      {
        id: "common-mistakes",
        heading: "Mistakes that make staff distrust the slip",
        list: [
          "One lump \"deductions\" line with no breakdown",
          "Different day counts on the slip and in your attendance register",
          "Advance recovery that changes without a word to the employee",
          "Handing the slip over a week after the money, when nobody remembers the details",
          "Spelling the name differently from the bank account, which causes trouble with loans"
        ]
      },
      {
        id: "daily-wage-slips",
        heading: "Slips for daily-wage and hourly staff",
        paragraphs: [
          "Helpers paid by the day often get nothing in writing, and they're the ones most likely to argue about a missing day. The factsheet's wage slip requirement covers daily wagers and contract workers too.",
          "Their slip can be shorter. Show the daily or hourly rate, the dates or hours worked, the total, any advance recovered and the amount paid. If you pay them weekly, give a slip each week. It takes a minute and it's the easiest way to show a helper you're keeping honest records."
        ]
      },
      {
        id: "how-to-share",
        heading: "Paper, PDF or WhatsApp?",
        paragraphs: [
          "The factsheet allows electronic wage slips. In practice, a PDF on WhatsApp works well for field teams, because nobody loses it in a van. Keep your own copy too, month by month, so you can answer a question from last year without guessing.",
          "If someone can't read English comfortably, sit with them for two minutes on their first payday and walk through each line. After that, most people check it themselves."
        ]
      }
    ],
    helps:
      "When you pay salary in TeamShastra, the app makes a payslip PDF showing gross pay, overtime, bonus, salary advances, other deductions, cash with staff and net pay. You can share it on WhatsApp, and each person can open their own paid payslips in the app. An Excel copy is there for your CA.",
    faqs: [
      {
        question: "Is a salary slip compulsory for a small business?",
        answer:
          "Yes. Under the Code on Wages, as the PIB factsheet explains, employers must give wage slips, on paper or electronically, on or before paying wages. It applies to employees across organised and unorganised work. Anything beyond that depends on your setup, so check with your CA."
      },
      {
        question: "Can I send salary slips on WhatsApp?",
        answer:
          "Electronic wage slips are allowed, and a PDF on WhatsApp is how many field teams do it. Make sure it reaches the employee on or before the day you pay, and keep your own copy for each month."
      },
      {
        question: "Should the slip show a salary advance?",
        answer:
          "Yes. Show the amount recovered this month and the balance still left. When the balance is printed every month, staff stop asking how much they still owe, and you avoid disputes when someone leaves."
      },
      {
        question: "Do I need PF and ESI lines on every slip?",
        answer:
          "Only if those schemes apply to your business and the employee. Many small teams aren't registered yet. If you are, your CA will tell you which lines to add and how to work out each one."
      },
      {
        question: "What's the difference between gross and net pay on a slip?",
        answer:
          "Gross pay is everything earned for the month: salary for days paid, overtime and any bonus. Net pay is what's left after deductions such as unpaid days, advance recovery and any statutory cuts. Net is the amount that actually reaches the employee."
      }
    ],
    sources: [sources.codeOnWages, sources.labourCodes],
    sourcesChecked: published,
    legal: true,
    relatedFeatures: ["salary-advance-payslip", "staff-salary-payroll"],
    relatedIndustries: [],
    relatedGuides: ["staff-salary-calculation-per-day", "salary-advance-rules-for-employers", "overtime-calculation-for-staff"]
  },
  {
    slug: "overtime-calculation-for-staff",
    category: "salary",
    title: "Overtime Calculation for Staff in India | TeamShastra",
    metaDescription:
      "Overtime calculation for monthly and hourly staff in India: find the hourly rate, apply the double rate under the Code on Wages, and record hours properly.",
    h1: "Overtime calculation for monthly and hourly staff",
    primaryKeyword: "overtime calculation",
    secondaryKeywords: ["overtime kaise calculate kare", "overtime rate for employees", "double overtime wages"],
    datePublished: published,
    dateModified: published,
    summary:
      "For overtime calculation, first find the normal hourly rate, then pay at least twice that rate for each hour beyond normal working hours, as the Code on Wages requires. For a monthly employee, the hourly rate comes from the per-day pay divided by normal daily hours. Record the extra hours on the day they happen.",
    sections: [
      {
        id: "when-overtime-happens",
        heading: "When overtime actually happens in a service business",
        paragraphs: [
          "It's rarely planned. A society's main panel trips at 6 pm and the secretary wants it fixed tonight. A camera job on the fourth floor runs late because the ladder didn't reach. In May, every AC technician in town is working past nine.",
          "Your team will remember those nights. If the extra pay is guessed at the end of the month, someone always feels short-changed. A clear method fixes that."
        ]
      },
      {
        id: "the-law",
        heading: "What the Code on Wages says about overtime",
        paragraphs: [
          "The four Labour Codes took effect on 21 November 2025. According to the PIB factsheet on the Code on Wages, section 14 says employers must pay overtime at a rate not less than twice the normal wages for work beyond regular working hours.",
          "On working hours, the same factsheet says section 13 and rule 6 cap work at 48 hours a week, and at 12 hours in a day where flexible arrangements apply, including rest intervals. States can add their own rules for shops and establishments, so check with your state labour department or your CA for anything specific to your type of business. This guide isn't legal advice."
        ]
      },
      {
        id: "monthly-staff",
        heading: "Step by step for a monthly employee",
        paragraphs: ["Take an example: Kiran earns ₹15,600 a month, your divisor is 26 days, and a normal day is 8 hours."],
        list: [
          "Per-day pay: ₹15,600 ÷ 26 = ₹600",
          "Normal hourly rate: ₹600 ÷ 8 = ₹75",
          "Overtime rate at twice the normal rate: ₹150 an hour",
          "Extra hours this month: 6",
          "Overtime pay: 6 × ₹150 = ₹900"
        ],
        ordered: true,
        after: [
          "The amounts are only an example. If your divisor or normal hours are different, the hourly rate changes, so use the same numbers you use for absence cuts. Don't use 26 days for cutting pay and 30 days for overtime. Staff notice."
        ]
      },
      {
        id: "hourly-staff",
        heading: "Step by step for hourly or daily-wage staff",
        paragraphs: [
          "Hourly workers are simpler. If a helper is on ₹90 an hour (an example rate), overtime is at least ₹180 an hour. For a daily-wage worker, divide the day's wage by the normal hours in that day to get the hourly figure, then double it.",
          "Say a helper earns ₹640 for an 8-hour day. The hourly rate is ₹80 and overtime is at least ₹160 an hour. Three extra hours on a Saturday job means ₹480 on top of the day's wage."
        ]
      },
      {
        id: "holidays-and-offs",
        heading: "Work on a weekly off or a holiday",
        paragraphs: [
          "The Diwali week call-out and the Sunday emergency are where overtime arguments get heated. Some owners pay a full extra day, some give another day off, some pay the overtime rate for every hour.",
          "Whatever you do, decide it before the busy season and tell the team. If you plan to give a day off in place of pay, check with your CA first, because the Code talks about overtime wages, not swaps. And keep these days on the attendance record like any other, so the payslip can show them clearly."
        ]
      },
      {
        id: "recording",
        heading: "Record hours the same day, not at month end",
        paragraphs: [
          "Overtime disputes usually aren't about the rate. They're about the hours. A technician says he worked till ten; the supervisor remembers eight.",
          "Fix the record on the day. A check-out time in an attendance app, a signed job sheet with the finish time, or even a WhatsApp message to the owner at check-out is better than memory. Agree in advance who can approve overtime, so a technician doesn't add three hours on their own."
        ],
        list: [
          "Note the check-in and check-out time every day",
          "Write the reason for overtime: which job, which customer",
          "Have one person approve it within the week",
          "Show hours, rate and amount as a separate line on the payslip"
        ]
      },
      {
        id: "customer-billing",
        heading: "Should the customer pay for the late hours?",
        paragraphs: [
          "Sometimes. If a customer asks for an after-hours visit, many businesses charge a call-out or night visit fee. Put it in your rate card or the quote so it isn't a surprise.",
          "Keep the two things separate in your head, though. What you charge the customer is a business decision. What you pay your technician for overtime is set by the law and your agreement with them, whether or not the customer paid extra."
        ]
      }
    ],
    helps:
      "TeamShastra's staff salary can add overtime to the month, and the payslip shows it on its own line. Check-in and check-out times come from the attendance app, so you have the hours on record when someone asks. You set the rule; the app does the sum and keeps it the same for everyone.",
    faqs: [
      {
        question: "What's the overtime rate in India now?",
        answer:
          "Section 14 of the Code on Wages, as the PIB factsheet puts it, requires overtime at not less than twice the normal wages for work beyond regular hours. The Code took effect with the other Labour Codes on 21 November 2025. Check state rules with your CA for your type of business."
      },
      {
        question: "How do I find the hourly rate for a monthly employee?",
        answer:
          "Divide the monthly salary by your fixed day count to get per-day pay, then divide that by the normal hours in a day. Use the same day count you use for leave cuts, so both calculations agree."
      },
      {
        question: "Does travel time to a site count as overtime?",
        answer:
          "That comes down to your agreement and the rules that apply to your business. Many owners count travel between jobs as working time but not the morning trip from home. Whatever you decide, write it down and apply it to everyone."
      },
      {
        question: "Can I give a day off instead of paying overtime?",
        answer:
          "Talk to your CA before you do this. PIB's factsheet on the Code talks about overtime wages at twice the normal rate, not about swapping hours for leave. Before setting up a time-off system, get advice on how it fits the law."
      },
      {
        question: "Who should approve overtime?",
        answer:
          "Pick one person, usually the owner or the supervisor who assigned the job. They check the hours within the week, while everyone still remembers the job. Late approvals are where most arguments start."
      }
    ],
    sources: [sources.codeOnWages, sources.labourCodes],
    sourcesChecked: published,
    legal: true,
    relatedFeatures: ["staff-salary-payroll", "gps-attendance-app"],
    relatedIndustries: ["hvac-service-management"],
    relatedGuides: ["staff-salary-calculation-per-day", "salary-slip-format"]
  },
  {
    slug: "salary-advance-rules-for-employers",
    category: "salary",
    title: "Salary Advance to Employee: Rules for Owners | TeamShastra",
    metaDescription:
      "Giving a salary advance to an employee? How to agree it in writing, recover it in fair parts, show it on the payslip and settle it if the person leaves.",
    h1: "Salary advance to an employee: how to give it and get it back fairly",
    primaryKeyword: "salary advance",
    secondaryKeywords: ["advance salary rules", "advance salary deduction", "employee advance record"],
    datePublished: published,
    dateModified: published,
    summary:
      "When you give a salary advance to an employee, write down the amount, the date and how much will be cut each month, and get it signed or acknowledged. Recover it in parts the person can live on, show the balance on every payslip, and settle what's left in the final pay if they leave. Wage deduction rules now apply to all employees, so check with your CA before cutting more than you agreed.",
    sections: [
      {
        id: "why-it-goes-wrong",
        heading: "Why advances go wrong in small teams",
        paragraphs: [
          "It's usually kind. A technician's mother is in hospital, or school fees are due, and you hand over ₹5,000 (an example amount) from the cash box. Nobody writes it down because it feels rude to.",
          "Three months later, you think ₹3,000 is still due. He thinks he paid it all back in October. Neither of you is lying; neither of you has a record. That's how good people leave on bad terms."
        ]
      },
      {
        id: "the-law",
        heading: "What the law expects",
        paragraphs: [
          "On 21 November 2025 the Code on Wages, 2019 came into force. Its PIB factsheet says the provisions on timely payment and unauthorised deductions from wages, which earlier covered only employees earning up to ₹24,000 a month, now apply to all employees whatever their salary.",
          "In simple terms: what you cut from wages has to be a deduction the law allows, and wages still have to be paid on time, which for a monthly employee means within seven days of the next month. Before you cut a large amount, check with your CA how advance recovery fits the deduction rules for your business. This guide is general information, not legal advice."
        ]
      },
      {
        id: "agree-in-writing",
        heading: "Agree these five things in writing",
        list: [
          "The amount and the date it was given",
          "Cash, UPI or bank transfer, with a reference if there is one",
          "How much will be cut each month, and from which month",
          "What happens if the person leaves before it's repaid",
          "Both signatures, or a WhatsApp message from the employee saying \"received\""
        ],
        after: [
          "A single line in a notebook, signed, is enough for a small team. The point is that both of you can see the same number later."
        ]
      },
      {
        id: "recovery-plan",
        heading: "How much to cut each month",
        paragraphs: [
          "Cutting the whole advance from the next salary looks tidy but often pushes the person straight into needing another one. A fair plan spreads it out.",
          "For example, Deepak earns ₹16,000 a month and takes a ₹6,000 advance. Recovering ₹2,000 a month over three months leaves him ₹14,000 to live on, minus any other cuts. That's easier to agree to than a single ₹6,000 cut."
        ],
        table: {
          caption: "Example recovery plan for a ₹6,000 advance (example figures)",
          head: ["Month", "Cut this month", "Balance left"],
          rows: [
            ["November", "₹2,000", "₹4,000"],
            ["December", "₹2,000", "₹2,000"],
            ["January", "₹2,000", "₹0"]
          ]
        },
        after: [
          "If the person asks to slow it down in a hard month, write the new plan down too. Changing it quietly is what causes mistrust."
        ]
      },
      {
        id: "on-the-payslip",
        heading: "Show it on every payslip",
        paragraphs: [
          "Since wage slips are now required on or before payment, use them. Print two lines: the advance recovered this month and the balance left. When the balance is in front of them every month, most people stop asking.",
          "Also keep advances separate from field money. Cash handed over for diesel or a spare part isn't an advance on salary. Mixing the two is the fastest way to get the numbers wrong."
        ]
      },
      {
        id: "when-someone-leaves",
        heading: "When someone leaves with an advance still open",
        paragraphs: [
          "The factsheet says wages must be paid within two working days of resignation or termination. Work out the final salary, then the advance balance, and show both on the last slip.",
          "If the balance is bigger than the final pay, don't hold the whole salary hostage. Talk it through, write down what's agreed, and ask your CA if you're unsure. A calm settlement costs less than a complaint and a bad name in the market."
        ]
      },
      {
        id: "advance-policy",
        heading: "A simple advance policy for your team",
        list: [
          "Who can ask, and how often (for example, once every three months)",
          "A maximum, such as one month's salary",
          "A standard recovery of two or three monthly parts",
          "No new advance while one is still open, except in an emergency",
          "Every advance recorded the same day"
        ]
      }
    ],
    helps:
      "In TeamShastra, an advance is recorded against the person with its date and amount. The app keeps the amount left, whether it's not cut yet or partly cut, and deducts it when you pay salary. The payslip shows salary advances on their own line, and staff can open their own paid payslips to check.",
    faqs: [
      {
        question: "Can I deduct a salary advance from wages?",
        answer:
          "Recovering an agreed advance is common, but the Code on Wages controls deductions, and the rules on unauthorised deductions now cover every employee. Agree the plan in writing and ask your CA how much you can cut each month for your type of business."
      },
      {
        question: "What should I do if an employee denies taking an advance?",
        answer:
          "This is why the record matters. Show the signed note, the UPI reference or the WhatsApp message saying received. If there's no record, talk calmly and agree a fair figure. Then start writing every advance down from that day."
      },
      {
        question: "How much advance should a small business give?",
        answer:
          "Many owners cap it at one month's salary and recover it over two or three months. The right cap depends on your cash flow. Whatever you choose, apply the same limit to everyone so nobody feels favoured or left out."
      },
      {
        question: "Is an advance taxable for the employee?",
        answer:
          "An advance is usually treated as money paid ahead of salary, and the salary itself is what's counted. Tax questions depend on each case, so ask your CA if the amounts are large or the advance isn't being recovered."
      },
      {
        question: "Should cash for fuel and parts go in the same record?",
        answer:
          "No. Field cash for diesel or spare parts is business money the technician spends and accounts for. A salary advance is the person's own pay given early. Keep them in separate records, or the numbers won't add up."
      }
    ],
    sources: [sources.codeOnWages, sources.labourCodes],
    sourcesChecked: published,
    legal: true,
    relatedFeatures: ["salary-advance-payslip", "staff-cash-bank-accounts", "staff-salary-payroll"],
    relatedIndustries: [],
    relatedGuides: ["salary-slip-format", "staff-salary-calculation-per-day"]
  }
];
