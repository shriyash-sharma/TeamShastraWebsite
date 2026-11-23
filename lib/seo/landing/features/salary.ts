import type { FeatureLanding } from "../types";

export const salaryFeatures: FeatureLanding[] = [
  {
    slug: "staff-salary-payroll",
    name: "Staff salary & payroll",
    group: "Salary",
    hubSummary: "Monthly, per-day or hourly wages worked out from attendance, with holidays, overtime, deductions and a still-to-pay total.",
    lastUpdated: "2026-11-23",
    primaryKeyword: "payroll app for small business",
    secondaryKeywords: ["staff salary calculation app", "salary register app", "daily wage calculator"],
    title: "Payroll App for Small Business Staff | TeamShastra",
    metaDescription:
      "A payroll app for small business owners. Salary comes from attendance, leave and holidays, then you pay by bank or cash and share payslips. Start free.",
    h1: "Staff salary made simple with a payroll app for small business",
    intro:
      "Salary day shouldn't need a calculator, a register and three arguments. This is a payroll app for small business owners who pay technicians, helpers and office staff each month. Pay is worked out from the attendance and leave already recorded in TeamShastra; you check it, freeze the month and pay.",
    keywordHeading: "What the payroll app for small business calculates",
    problem: [
      "On the first of every month the owner sits with the attendance register, a calculator and a notebook of advances. One person is on a monthly salary. Two helpers are paid per day. A part-time accountant is paid by the hour. Each needs a different sum.",
      "Mistakes creep in. A half day is counted as a full day. A Sunday is paid for a daily worker who should not get it. A holiday is missed. Staff check their own count, find a difference, and the trust between owner and worker takes a hit.",
      "Large payroll software is built for HR departments and feels too heavy. A spreadsheet breaks the moment someone edits the wrong cell.",
      "By the time the sums are done, it is the fifth or sixth of the month and staff are already asking when they will be paid."
    ],
    solution: [
      "In TeamShastra the owner sets wages for each person once: Monthly, Per day or Hourly. You also set how weekly off works for them and how many hours make a day. A monthly salary is spread over the calendar days of the month, so weekly off is already included. For per-day workers, weekly off is unpaid unless you choose otherwise.",
      "When you open a month, the app reads attendance, leave, half days and company holidays for everyone. Paid holidays add to pay; unpaid ones do not. You can add overtime, a bonus or other deductions, and see indicative PF, ESI, professional tax or TDS amounts if you use them.",
      "The Payroll list shows a Due now total and who is still to pay. Freeze the month when it looks right, then record payment from a bank account or cash. If you pay part now, the month stays part paid and Pay remaining finishes it later. Owners appear in the list too, like any other employee, if they draw a salary."
    ],
    steps: [
      "Open Payroll and tap Set wages for each person: Monthly, Per day or Hourly.",
      "Add the company's holidays, choosing paid or unpaid for each one.",
      "Pick the month to see each person's present days, half days, leave and weekly offs.",
      "Add overtime, bonus or deductions where needed.",
      "Freeze the month once the numbers are checked.",
      "Tap Pay, choose a bank account or cash, and record the payment."
    ],
    whoFor:
      "This is an owner-only feature, because pay is private. It suits businesses with a mix of monthly staff and daily helpers, such as cleaning and housekeeping companies, CCTV installers, inverter and battery dealers, and solar installation crews. Managers never see salary figures.",
    benefits: [
      "Salary is worked out from the same attendance your team already marks",
      "Monthly, per-day and hourly staff are handled side by side",
      "Holiday and weekly-off rules are applied the same way for everyone",
      "A Due now total shows what is still owed this month",
      "Part payments are allowed and the balance is tracked"
    ],
    limits: [
      "PF, ESI, PT and TDS amounts are shown as a guide only; the app does not file them with the government.",
      "Yearly income tax forms for employees aren't prepared by the app."
    ],
    faqs: [
      {
        question: "How does the app handle a per-day worker's Sunday?",
        answer:
          "For a per-day wage, weekly off is unpaid by default because the person is paid only for days worked. For a monthly salary, the month's pay already covers weekly offs, so nothing extra is added. You set the weekly off days for each person when you set their wages."
      },
      {
        question: "Can I pay a salary in two parts?",
        answer:
          "Yes. If you pay less than the full amount, the month is saved as part paid. Later, tap Pay remaining to clear the balance. The Payroll list keeps showing that person under amounts still due until the whole month is settled, so nothing is forgotten."
      },
      {
        question: "Will my managers be able to see everyone's salary?",
        answer:
          "No. Staff salary is only for the owner role. Managers can mark attendance and approve leave, which affect pay, but they cannot open the Payroll screens. Each staff member can only see their own paid payslips in the app. Owners can still share a payslip directly."
      },
      {
        question: "Does the app file PF and ESI for my staff?",
        answer:
          "No. If you turn them on, TeamShastra shows indicative PF, ESI, professional tax or TDS amounts in the salary calculation so you can plan deductions. Filing and paying them to the government is still done by you or your CA on the official portals."
      },
      {
        question: "Can my CA get the salary data?",
        answer:
          "Yes. Salary details can be exported to Excel for your CA. Payslips can be shared as PDF files. This saves you from typing the same figures into another tool when your accountant asks for the month's payroll. Most CAs prefer the Excel file."
      },
      {
        question: "What if I find a mistake after freezing the month?",
        answer:
          "Correct the attendance or wage detail and recalculate before you record the payment. If a payment was already recorded with a wrong amount, you can edit that payment. Setting it to zero undoes it, so you can pay again with the right figure."
      }
    ],
    relatedFeatures: ["salary-advance-payslip", "gps-attendance-app", "leave-management", "staff-cash-bank-accounts"],
    relatedIndustries: ["cleaning-housekeeping-service-software", "cctv-installer-software", "inverter-battery-ups-service-software"],
    compareWith: ["teamshastra-vs-mybillbook", "teamshastra-vs-khatabook"],
    screenshot: null
  },
  {
    slug: "salary-advance-payslip",
    name: "Salary advances & payslips",
    group: "Salary",
    hubSummary: "Record an advance, see how much is left, cut it from pay, and share a payslip PDF each person can open.",
    lastUpdated: "2026-11-23",
    primaryKeyword: "salary advance and payslip",
    secondaryKeywords: ["staff advance register", "payslip app for small business", "salary slip PDF"],
    title: "Salary Advance and Payslip Tracking App | TeamShastra",
    metaDescription:
      "Track every salary advance and payslip in one place. See the amount left, cut it when you pay, and share a payslip PDF with staff. Try TeamShastra free.",
    h1: "Keep each salary advance and payslip on record",
    intro:
      "Say a helper took a ₹2,000 advance on the 12th (just an example) and by salary day nobody remembers it. In TeamShastra each salary advance and payslip sits with the person it belongs to. Note the advance once, see what's still left to cut, and it comes off when you pay.",
    keywordHeading: "How salary advance and payslip records work together",
    problem: [
      "A helper asks for ₹2,000 for a family need. You hand it over from the cash drawer and say you will adjust it later. Two months pass. Did you cut it? Half of it? The helper says it was already adjusted. Your notebook says otherwise.",
      "Staff also ask for proof of salary. A bank wants a salary slip for a loan, or a landlord asks for income proof. Writing one by hand on a letterhead takes time and looks informal.",
      "Without a record that both sides can see, advances and pay become a matter of memory, and memory always favours the person remembering.",
      "Advances also hide the real cost of a person. If you do not know how much is still to be recovered, you cannot plan cash for the month or decide on the next request."
    ],
    solution: [
      "Open a person's salary profile and add the advance with its date and amount. Starting fresh? Add any advance already given as an opening balance. The record shows the amount left: not cut yet, partly cut or fully cleared.",
      "When you pay that person's salary, the app suggests the advance cut. You can take the full balance or only part of it, so a large advance can be spread over a few months. The amount left updates after each payment.",
      "After payment, a payslip PDF is ready. It lists earnings, deductions and the advance cut for that month. Share it on WhatsApp or keep it on file. Each staff member can also open My payslips in their own app to see their paid payslips at any time. Per-day staff can get a daily wage payment slip instead.",
      "Because advances live with salary, you always know your real monthly cost of each person."
    ],
    steps: [
      "Open the person in Payroll and add an advance with the amount and date.",
      "Check the advance list to see the amount left for each person.",
      "When paying salary, choose how much of the advance to cut this month.",
      "Record the payment from a bank account or cash.",
      "Share the payslip PDF with the staff member.",
      "Staff open My payslips in their app to view past paid months."
    ],
    whoFor:
      "No more forgotten advances, and every person gets proper proof of pay. Staff use My payslips to check their own pay history without asking the office. It is most useful where advances are common, such as appliance repair shops, pest control teams, cleaning crews and RO service businesses.",
    benefits: [
      "Every advance has a date, an amount and a running balance",
      "Large advances can be recovered over several months",
      "Payslips show the advance cut clearly, so staff are not surprised",
      "Staff can see their own payslips without calling the owner",
      "Proper slips help staff with bank loans and rent agreements"
    ],
    limits: [
      "It records advances you give; it does not lend money or pay staff on your behalf.",
      "Staff cannot see other people's payslips or the full salary list."
    ],
    faqs: [
      {
        question: "Can I recover a big advance over several months?",
        answer:
          "Yes. When you pay salary, you decide how much of the advance to cut that month. Cut part of it now and the rest stays as the amount left for next time. The advance list always shows what is still to be recovered from each person."
      },
      {
        question: "What does a staff member see on their payslip?",
        answer:
          "The payslip PDF shows the month, the person's name, earnings, any deductions, the advance amount cut and the net amount paid. It is created after you record a payment for that month. Staff can open their own paid payslips in the app under My payslips."
      },
      {
        question: "Is there a slip for daily wage workers?",
        answer:
          "Yes. For people paid per day, TeamShastra offers a daily wage payment slip. It suits helpers and casual staff who are paid often and want a simple record of each payment rather than a full monthly payslip. It can be shared on WhatsApp like any payslip."
      },
      {
        question: "I already gave advances before using the app. How do I add them?",
        answer:
          "When you set wages for a person, you can enter an opening advance. This is the balance they still owe you from before. From then on, new advances and every cut are added on top, so the running balance stays correct from day one."
      },
      {
        question: "Can staff see the payslips of other people?",
        answer:
          "No. My payslips shows only the logged-in person's own paid payslips. The full salary list, wages and other people's slips are visible only to the owner. This keeps pay private within the team. Owners also appear in the salary list if they draw pay."
      }
    ],
    relatedFeatures: ["staff-salary-payroll", "staff-cash-bank-accounts", "roles-permissions"],
    relatedIndustries: ["appliance-repair-service-software", "pest-control-service-software", "cleaning-housekeeping-service-software"],
    screenshot: null
  }
];
