import type { FaqItem } from "./types";

// Competitor comparison pages (/vyapar-alternative and /compare/*). Every competitor fact here was
// read on the competitor's own public pages on `lastChecked`, and points at a numbered source.
// Re-check every source before editing a row, and update `lastChecked` when you do.

export type CompareSource = { label: string; url: string };

export type CompareRow = {
  need: string;
  /** Competitor cell: a fact with `sources`, or a "Not listed…" line without them. */
  them: string;
  sources?: number[];
  us: string;
};

export type ComparePage = {
  slug: string;
  path: string;
  competitor: string;
  /** Short name used in "TeamShastra vs X" (breadcrumbs, table header). */
  shortName: string;
  primaryKeyword: string;
  title: string;
  metaDescription: string;
  h1: string;
  summary: string;
  quickAnswer: string;
  tableIntro: string;
  rows: CompareRow[];
  betterChoice: string[];
  fitsBetter: string[];
  switching: string[];
  switchingLinks: Array<{ href: string; label: string }>;
  faqs: FaqItem[];
  sources: CompareSource[];
  lastChecked: string;
  cardSummary: string;
};

export const compareLastChecked = "2026-11-23";

export function formatCheckedDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}

export const compareDisclaimer =
  "Vyapar, Khatabook, Pagarkhata, myBillBook, myHaazri and Zoho are trademarks of their respective owners. TeamShastra is not affiliated with, endorsed by or sponsored by them. Comparison based on publicly available information on the dates shown; features and prices change, so please check each company's website. Spotted a mistake? Email care@teamshastra.com and we'll fix it.";

export const compareHub = {
  path: "/compare",
  title: "Compare TeamShastra with Other Business Apps | TeamShastra",
  metaDescription:
    "Compare TeamShastra with Vyapar, Khatabook, myBillBook and Zoho FSM. Plain, sourced tables on billing, jobs, attendance and payroll, with each date checked.",
  h1: "Compare TeamShastra with other business apps",
  intro: [
    "Most owners already use something: a billing app on the counter phone, a ledger for udhaar, a payroll register in a drawer. Before you switch, it helps to know which kind of app you have.",
    "Billing-first apps such as Vyapar, Khatabook and myBillBook grew up around the shop counter. They're strong on invoices, stock, payment reminders and, in some cases, e-invoices, barcodes and POS. Field service apps such as Zoho FSM grew up around the job: a request comes in, someone is dispatched, a report goes out.",
    "TeamShastra sits closer to the second group but keeps billing inside. A technician punches in, gets a job, adds photos, and the same app makes the GST bill and works out salary at month end. It doesn't do everything the others do, and each page below says plainly where the other app is the better pick.",
    "Each comparison lists its sources and the date we checked them. If something has changed, email us and we'll correct it."
  ],
  lastChecked: compareLastChecked
};

const vyapar: ComparePage = {
  slug: "vyapar-alternative",
  path: "/vyapar-alternative",
  competitor: "Vyapar",
  shortName: "Vyapar",
  primaryKeyword: "Vyapar alternative",
  title: "Vyapar Alternative for Service Businesses | TeamShastra",
  metaDescription:
    "Need a Vyapar alternative because your team works at customer sites? Compare TeamShastra and Vyapar on jobs, attendance, payroll and GST billing, row by row.",
  h1: "A Vyapar alternative for teams that work at customer sites",
  summary:
    "If you run a shop and bill across the counter, Vyapar was made for that and you may want to stay. If your money comes from technicians visiting homes, offices and housing societies, a Vyapar alternative like TeamShastra keeps the job, the visit, the attendance and the GST bill together.",
  quickAnswer:
    "Pick Vyapar for counter billing, barcode scanning, POS, an online store, e-invoices and e-way bills, or an iPhone or desktop app. Pick TeamShastra if you assign jobs to technicians, track AMC visits and pay salary from attendance, and still want GST bills and stock in the same place.",
  tableIntro:
    "Vyapar's column only uses what Vyapar publishes on its own site. Where we couldn't find something, we say it isn't listed rather than guessing that it doesn't exist.",
  rows: [
    { need: "GST bills and quotations", them: "Yes. GST and non-GST bills, estimates and quotations.", sources: [1], us: "Yes. Tax invoices, quotations, proforma invoices, credit notes, debit notes and delivery challans." },
    { need: "e-invoice (IRN) and e-way bill", them: "Yes, e-invoice and e-way bill creation.", sources: [1], us: "No. TeamShastra doesn't create e-invoices or e-way bills." },
    { need: "Barcode and POS counter billing", them: "Yes, a barcode generator and scanner, and POS billing.", sources: [1], us: "No barcode scanning and no POS screen." },
    { need: "Online store", them: "Yes, an online store link you can share with customers.", sources: [1], us: "Not offered." },
    { need: "Stock", them: "Yes, inventory tracking.", sources: [1], us: "Yes. Stock adjustments, with a movement history on every item." },
    { need: "Jobs for technicians", them: "Not listed on Vyapar's public pages as of 23 November 2026.", sources: [], us: "Yes. Create a job, assign a technician, follow its status and attach before and after photos." },
    { need: "Technician attendance", them: "Not listed on Vyapar's public pages as of 23 November 2026. Vyapar does list GPS-based salesman tracking for field sales staff.", sources: [1, 3], us: "Selfie punch-in and punch-out with the GPS point at that moment. No all-day tracking." },
    { need: "Salary and payroll", them: "Not listed on Vyapar's public pages as of 23 November 2026.", sources: [3], us: "Monthly, per day or hourly wages, advances, payslips, and indicative PF, ESI, PT and TDS (not filing)." },
    { need: "AMC and repeat visits", them: "Not listed on Vyapar's public pages as of 23 November 2026.", sources: [3], us: "AMC contracts showing the next due visit, so renewals and service dates don't slip." },
    { need: "Working without internet", them: "Yes, offline billing that syncs when you're back online.", sources: [1], us: "Yes. Check-ins, job updates, photos and expenses sync once the network returns." },
    { need: "Bringing old data in", them: "Tally data import and export.", sources: [1], us: "Imports items, stock, parties, sales, purchases and expenses from Vyapar or Excel, with a preview." },
    { need: "Phones and computers", them: "Android and iOS apps, and a Desktop + Mobile plan.", sources: [1, 2], us: "Android app and the web. There's no iPhone or desktop app." },
    { need: "Languages", them: "Customer support in 9+ Indian languages.", sources: [1], us: "App screens in English, Hindi, Gujarati, Marathi and Bengali." },
    { need: "More than one company", them: "Multiple companies, depending on the plan.", sources: [2], us: "Yes, more than one company under one login." },
    { need: "Who it's built for", them: "Mainly shops, wholesalers and manufacturers, going by its home page.", sources: [1], us: "Service businesses: CCTV, electrical, AC, plumbing, pest control and AMC providers." }
  ],
  betterChoice: [
    "You sell across a counter all day and want barcode scanning, a POS screen and thermal printing to keep the queue moving.",
    "You need e-invoices or e-way bills made from the same app. TeamShastra doesn't make either.",
    "Some of your staff carry iPhones, or the accounts person wants a desktop app on the shop computer.",
    "You'd like an online store link to send to customers on WhatsApp.",
    "Your people in the field are salespeople, and Vyapar's salesman tracking is what you're after."
  ],
  fitsBetter: [
    "Your income comes from visits: installations, repairs, breakdown calls and AMC services. You want to see which technician has which job today without phoning around.",
    "Salary is worked out from attendance, and you'd rather the app cut advances before salary day than argue over a paper register.",
    "You want the job photos, the service report and the GST bill in one record, so the customer gets both on WhatsApp before your technician leaves.",
    "Your technicians would rather read Hindi, Gujarati, Marathi or Bengali on their phones.",
    "You prefer paying per user. Starter is free, and Growth is ₹200 per user, per month, plus GST, after a 30-day free Growth trial."
  ],
  switching: [
    "You don't have to type your Vyapar data again. TeamShastra's import screen takes items, stock, parties, sales, purchases, expenses, notes and estimates from Vyapar or an Excel sheet. It shows a preview with any problem rows marked, and nothing is saved until you confirm.",
    "A calm way to move: keep billing in Vyapar for a week while your technicians start punching in and updating jobs in TeamShastra. Once your first salary day goes through without a fight, bring the bills across too."
  ],
  switchingLinks: [
    { href: "/features/vyapar-data-import", label: "How the Vyapar import works" },
    { href: "/features/gst-billing-invoice", label: "GST billing in TeamShastra" },
    { href: "/features/job-work-order-management", label: "Jobs and work orders" }
  ],
  faqs: [
    {
      question: "Is TeamShastra a good Vyapar alternative for a shop?",
      answer:
        "Usually not. If most of your sales happen at a counter, Vyapar's barcode scanning, POS billing and online store are made for that work, and TeamShastra has none of them. TeamShastra makes sense when the work happens at the customer's place and you need jobs, technician attendance and AMC visits sitting next to your GST bills."
    },
    {
      question: "Will my Vyapar items and parties come across?",
      answer:
        "Yes. The import screen reads items, stock, parties, sales, purchases, expenses, notes and estimates from Vyapar, or from an Excel sheet if you prefer. You match the columns, look through the rows it found and any it couldn't read, and only then save. Most owners do a test import on a few items first."
    },
    {
      question: "Can TeamShastra make e-way bills the way Vyapar does?",
      answer:
        "No. TeamShastra makes GST tax invoices, credit notes, debit notes and delivery challans, but it doesn't generate e-invoices with an IRN or e-way bills. If you move goods that need an e-way bill, you'll still need Vyapar or the government portal for that step, and that's worth knowing before you switch."
    },
    {
      question: "Does TeamShastra follow my technicians all day like salesman tracking?",
      answer:
        "No, and that's on purpose. TeamShastra records the location when a technician punches in or out, starts a job or adds a job photo, and shows those points on a team map. There's no background tracking between those moments, which most technicians are more comfortable with."
    },
    {
      question: "Can I run Vyapar and TeamShastra side by side for a while?",
      answer:
        "Yes, plenty of owners do. A common pattern is to keep the shop counter on Vyapar and run the field team on TeamShastra: jobs, punch-ins, AMC visits and salary. Just decide which app makes the GST bill for each sale, so the same sale isn't billed twice and your returns stay clean."
    },
    {
      question: "How up to date is this Vyapar comparison?",
      answer:
        "We read Vyapar's home page, pricing page and sitemap on 23 November 2026, and every Vyapar fact in the table points to one of those pages. Apps change, so check vyaparapp.in before deciding. If you spot something that has changed, email care@teamshastra.com and we'll correct this page."
    }
  ],
  sources: [
    { label: "Vyapar home page (features, platforms, industries)", url: "https://vyaparapp.in/" },
    { label: "Vyapar plans and pricing (Desktop + Mobile plans, multiple companies)", url: "https://vyaparapp.in/pricing" },
    { label: "Vyapar sitemap, searched for staff, attendance, payroll, job and AMC pages", url: "https://vyaparapp.in/sitemap_index.xml" }
  ],
  lastChecked: compareLastChecked,
  cardSummary: "Billing and stock app for shops, wholesalers and manufacturers, with e-invoices, POS and an online store."
};

const khatabook: ComparePage = {
  slug: "teamshastra-vs-khatabook",
  path: "/compare/teamshastra-vs-khatabook",
  competitor: "Khatabook",
  shortName: "Khatabook",
  primaryKeyword: "Khatabook alternative for service business",
  title: "Khatabook Alternative for Service Business | TeamShastra",
  metaDescription:
    "A Khatabook alternative for service business owners whose technicians work on site. Compare the ledger, reminders, GST bills, attendance and salary, sourced.",
  h1: "A Khatabook alternative for service business owners with field teams",
  summary:
    "Khatabook is built around a digital bahi khata: who owes you, who you owe, and a reminder to nudge them. If that's all you need, it does the job and you can stop reading here. If you want a Khatabook alternative for service business work, where technicians go out on jobs and get paid from attendance, TeamShastra covers the jobs and the staff alongside the bills.",
  quickAnswer:
    "Choose Khatabook for a simple udhaar ledger, payment reminders, QR collections and its loan offers. Choose TeamShastra when you also need job assignment, technician attendance, salary and AMC visits next to GST billing. The Khatabook pages we checked don't list a staff attendance or payroll product.",
  tableIntro:
    "Every Khatabook row refers to the main Khatabook app, listed on Google Play as Khatabook Credit Account Book, and to khatabook.com. That's the Khatabook product a field service owner would actually install today.",
  rows: [
    { need: "Udhaar ledger (credit and debit)", them: "Yes, it's the core of the app: track who has paid and who hasn't.", sources: [1, 3], us: "Customer and supplier balances build up from invoices, payments and purchase bills. There's no separate udhaar book." },
    { need: "Payment reminders", them: "Yes, reminders by SMS and WhatsApp.", sources: [3], us: "Share the invoice PDF on WhatsApp; what each customer owes shows on their record." },
    { need: "GST and non-GST invoices", them: "Yes, shared over WhatsApp.", sources: [3], us: "Yes, plus quotations, proforma invoices, credit notes and delivery challans." },
    { need: "Stock", them: "Yes, with low-stock alerts.", sources: [3], us: "Yes, with stock adjustments and a history of every movement." },
    { need: "Collecting money by QR or UPI", them: "Yes, QR and UPI collection.", sources: [3], us: "Your UPI ID and a scan-to-pay UPI QR print on bills with an amount due. You record the payment when it arrives." },
    { need: "Business loans", them: "Loans through NBFC partners, applied for in the app.", sources: [3], us: "Not offered." },
    { need: "Jobs for technicians", them: "Not listed on Khatabook's public pages as of 23 November 2026.", sources: [2], us: "Assign a job, follow its status, attach before and after photos and send a service report PDF." },
    { need: "Staff attendance", them: "Not listed on Khatabook's public pages as of 23 November 2026.", sources: [2], us: "Selfie punch-in with the GPS point at punch time, plus leave requests." },
    { need: "Salary and advances", them: "Not listed on Khatabook's public pages as of 23 November 2026.", sources: [2], us: "Monthly, daily or hourly pay from attendance, advances cut on salary day, payslips." },
    { need: "AMC visits", them: "Not listed on Khatabook's public pages as of 23 November 2026.", sources: [2], us: "AMC contracts with the next due visit on each one." },
    { need: "GST return reports", them: "Not listed on Khatabook's public pages as of 23 November 2026.", sources: [1, 3], us: "GSTR-1, GSTR-3B, GSTR-9 data and an HSN summary in Excel or PDF." },
    { need: "Several businesses", them: "Yes, manage multiple businesses from the same account.", sources: [1], us: "Yes. Switch between your companies after signing in once." },
    { need: "Devices", them: "Android, iPhone (App Store) and desktop.", sources: [1], us: "Android and the web; no iPhone or desktop app." },
    { need: "Languages", them: "English, Hindi and 10+ regional languages.", sources: [3], us: "English, Hindi, Gujarati, Marathi and Bengali." }
  ],
  betterChoice: [
    "All you need is a tidy udhaar book and reminders that go out without you making awkward calls.",
    "You want customers to pay by scanning a QR code at your counter, which Khatabook's QR and UPI collection handles.",
    "You're looking for a small business loan. Khatabook lists loans through NBFC partners; TeamShastra doesn't lend.",
    "Some of your people use iPhones, or you'd like a desktop app on the shop computer.",
    "You want the app in Tamil, Telugu, Kannada or another language beyond the five TeamShastra supports."
  ],
  fitsBetter: [
    "Your technicians go to customer sites, and you need to know who reached which job and whether it's done.",
    "Salary depends on attendance, half days, overtime and advances, and you want the payslip ready without a calculator.",
    "Customers on AMC expect their visits on time, and you'd like the due dates in front of you.",
    "Your CA asks for GSTR-1 and GSTR-3B data in Excel at the start of every month.",
    "Pricing is per user: Starter is free, and Growth costs ₹200 per user, per month, plus GST, with a 30-day free Growth trial first."
  ],
  switching: [
    "Khatabook isn't one of TeamShastra's named import sources. If your customer list or items are in a spreadsheet, TeamShastra's Excel import reads them, shows a preview with problem rows marked, and saves only when you confirm.",
    "Many owners keep Khatabook open for old udhaar entries for a month or two, and start new bills, jobs and attendance in TeamShastra. Once the old dues are collected, the move is finished without any big-bang day."
  ],
  switchingLinks: [
    { href: "/features/vyapar-data-import", label: "Importing from Excel" },
    { href: "/features/staff-salary-payroll", label: "Staff salary and payroll" },
    { href: "/features/gps-attendance-app", label: "GPS attendance with selfie" }
  ],
  faqs: [
    {
      question: "Can Khatabook handle attendance for my technicians?",
      answer:
        "The Khatabook website, its Play Store listing and its sitemap, which we checked on 23 November 2026, don't list a staff attendance or payroll feature. Khatabook focuses on the ledger, reminders, invoices, stock, collections and loans. If attendance and salary matter to you, TeamShastra handles them in the same app as your bills."
    },
    {
      question: "Is TeamShastra a ledger app like Khatabook?",
      answer:
        "Not exactly. TeamShastra doesn't have an udhaar book where you type in credit by hand. Instead, balances come from the invoices you make, the payments you record and your purchase bills. For a service business that bills every job, that usually gives the same answer with less typing."
    },
    {
      question: "Does TeamShastra give business loans?",
      answer:
        "No. TeamShastra doesn't offer loans, credit lines or any lending, and there are no loan offers inside the app. Khatabook lists business loans through its NBFC partners on its Play Store page. If a loan is part of why you use Khatabook, keep that in mind before switching."
    },
    {
      question: "How do I bring my Khatabook customers into TeamShastra?",
      answer:
        "Put your customer list into an Excel sheet, then use TeamShastra's import screen. You match the columns, check the preview and fix any rows it flags before saving. Old udhaar balances are easiest to settle in Khatabook first, so you start TeamShastra with clean numbers and nothing double counted."
    },
    {
      question: "Which app suits a two-person repair business?",
      answer:
        "If it's just you and a helper and you mostly need to remember who owes you, Khatabook is simpler. Once you have a couple of technicians on daily jobs, with attendance, advances and AMC customers to keep track of, TeamShastra starts to save real time each week."
    },
    {
      question: "Why doesn't this page list Khatabook's prices?",
      answer:
        "Khatabook's website and Play Store listing didn't show plan prices when we checked on 23 November 2026, so we haven't guessed. TeamShastra's own prices are on our pricing page: Starter is free and Growth is ₹200 per user, per month, plus GST, after a 30-day free trial."
    },
    {
      question: "What about Pagarkhata, the staff app linked to Khatabook?",
      answer:
        "We looked for it. On 23 November 2026 the Google Play page for com.khatabook.pagarkhata showed that the app wasn't found, and khatabook.com didn't link to a staff app. Because we couldn't read an official page for it that day, we've left Pagarkhata out of the table rather than compare against old information."
    }
  ],
  sources: [
    { label: "Khatabook home page (ledger, desktop and mobile, multiple businesses)", url: "https://khatabook.com/" },
    { label: "Khatabook sitemap, searched for staff, attendance, payroll and job pages", url: "https://khatabook.com/sitemap.xml" },
    { label: "Khatabook Credit Account Book on Google Play (official listing)", url: "https://play.google.com/store/apps/details?id=com.vaibhavkalpe.android.khatabook" }
  ],
  lastChecked: compareLastChecked,
  cardSummary: "Digital udhaar ledger with payment reminders, QR collections, GST bills, stock and business loans."
};

const mybillbook: ComparePage = {
  slug: "teamshastra-vs-mybillbook",
  path: "/compare/teamshastra-vs-mybillbook",
  competitor: "myBillBook",
  shortName: "myBillBook",
  primaryKeyword: "myBillBook alternative",
  title: "myBillBook Alternative for Field Service Teams | TeamShastra",
  metaDescription:
    "Considering a myBillBook alternative for technician work? Compare e-invoices, staff attendance, payroll deductions, jobs and AMC with TeamShastra, sourced.",
  h1: "A myBillBook alternative for businesses that send out technicians",
  summary:
    "myBillBook is a billing and accounting app with e-invoices, e-way bills, POS and an online store, and it has a staff attendance and payroll section too. If you want a myBillBook alternative because your work is jobs at customer sites, TeamShastra adds job assignment, service reports and AMC visits. It doesn't make e-invoices or e-way bills.",
  quickAnswer:
    "Stay with myBillBook if e-invoices, e-way bills, godowns, barcodes or an iPhone and PC app matter most. Look at TeamShastra if your day runs on technician jobs and AMC visits, and you'd like salary to show indicative PF, ESI, PT and TDS figures, which myBillBook says its payroll isn't designed for.",
  tableIntro:
    "myBillBook facts come from its own home page and feature pages. TeamShastra facts come from the app as it works today.",
  rows: [
    { need: "GST invoices and quotations", them: "Yes, plus purchase orders and POS billing.", sources: [1], us: "Yes, plus proforma invoices, credit notes, debit notes and delivery challans." },
    { need: "e-invoice and e-way bill", them: "Yes. e-invoices and e-way bills from the sales invoice.", sources: [2, 4], us: "No. Neither is made in TeamShastra." },
    { need: "Barcode, godown and online store", them: "Yes, each has its own feature page.", sources: [4], us: "None of these are offered." },
    { need: "Staff attendance", them: "Present, absent, half day, paid leave, weekly off and overtime.", sources: [3], us: "Selfie punch-in and punch-out with the GPS point at punch time, plus leave requests and approvals." },
    { need: "Where staff are", them: "myHaazri Android app: check-in location, and live location while the person is sharing it.", sources: [3], us: "Location at punch-in, job start and job photos, shown on a team map. No live tracking." },
    { need: "Salary and advances", them: "Daily or monthly salary, advances, loans and bonuses, worked out automatically.", sources: [3], us: "Monthly, per day or hourly pay, advances cut on salary day, payslips to share." },
    { need: "PF, ESI, PT and payroll TDS", them: "Its page says the payroll is not designed for PF or ESI calculation, professional tax or payroll TDS.", sources: [3], us: "Shows indicative PF, ESI, PT and TDS amounts as a guide. It doesn't file them." },
    { need: "Jobs and work orders", them: "Not listed on myBillBook's public pages as of 23 November 2026.", sources: [4], us: "Yes, with status, technician, before and after photos and a service report PDF." },
    { need: "AMC visits", them: "Not listed on myBillBook's public pages as of 23 November 2026.", sources: [4], us: "AMC contracts with the next due visit on each." },
    { need: "Following up on dues", them: "SMS and WhatsApp payment reminders.", sources: [2], us: "Invoices and service reports shared on WhatsApp; dues sit on each customer's record." },
    { need: "GST and tax reports", them: "GST reports from your invoices.", sources: [2], us: "GSTR-1, GSTR-3B, GSTR-9 data, HSN summary and Form 26Q TDS reports." },
    { need: "Devices", them: "PC, web, Android and iOS.", sources: [1], us: "Android and the web only." },
    { need: "Team access", them: "Multiple users, per its Manage Users feature page.", sources: [4], us: "Fixed roles that decide what each person can see and change." }
  ],
  betterChoice: [
    "You make e-invoices or e-way bills regularly and want them generated straight from the invoice.",
    "You run a counter or a store and need barcodes, POS billing, godowns or an online catalogue.",
    "Your office works on a PC, or some of your staff carry iPhones.",
    "You want to watch a field person's live location while they're sharing it. myHaazri shows that; TeamShastra doesn't."
  ],
  fitsBetter: [
    "The working day is a list of jobs: who's going where, what's finished and what's waiting for a part.",
    "You want a service report PDF with before and after photos sent to the customer as soon as the job closes.",
    "AMC customers expect visits on schedule, and you'd like each contract to show when the next one is due.",
    "Salary day should show indicative PF, ESI, PT and TDS amounts so you can plan, even though filing stays with your CA.",
    "Your technicians would rather use Hindi, Gujarati, Marathi or Bengali, and you'd rather pay per user: Starter is free, Growth is ₹200 per user, per month, plus GST."
  ],
  switching: [
    "myBillBook isn't a named import source in TeamShastra. If you can get your items and customers into an Excel sheet, TeamShastra's import screen reads it, flags rows it can't use and saves only after you check the preview.",
    "If e-way bills are part of your week, keep myBillBook for those dispatches and run your technicians, attendance and service bills in TeamShastra. Decide which app owns each kind of bill, so your GST numbers don't count a sale twice."
  ],
  switchingLinks: [
    { href: "/features/vyapar-data-import", label: "Importing items and parties from Excel" },
    { href: "/features/staff-salary-payroll", label: "How salary works in TeamShastra" },
    { href: "/features/amc-contract-management", label: "AMC contract tracking" }
  ],
  faqs: [
    {
      question: "Does TeamShastra generate e-way bills like myBillBook?",
      answer:
        "No. myBillBook lists e-invoice and e-way bill generation from a sales invoice; TeamShastra does neither. TeamShastra makes GST tax invoices, credit and debit notes and delivery challans, and exports GST reports for your CA. If you move goods that need e-way bills, plan to keep a tool for that."
    },
    {
      question: "myBillBook's payroll skips PF and ESI. What does TeamShastra do?",
      answer:
        "myBillBook's staff payroll page says it isn't designed for PF, ESI, professional tax or payroll TDS. TeamShastra can show indicative PF, ESI, PT and TDS amounts inside the salary calculation, so you can plan deductions. It doesn't file anything with the government, and your CA should still confirm the final figures."
    },
    {
      question: "Can I see my technician's live location in TeamShastra?",
      answer:
        "No. TeamShastra saves the location when someone punches in or out, starts a job or adds a job photo, and shows those points on a team map. myBillBook's myHaazri app shows live location while the person keeps sharing. Pick based on how much tracking your team is comfortable with."
    },
    {
      question: "My office uses a PC. Can I run TeamShastra there?",
      answer:
        "Yes, in a browser. Open app.teamshastra.com on the office computer and sign in; it's the same workspace your technicians use on their Android phones. There isn't a separate desktop program to install, which also means there's nothing to update on each computer."
    },
    {
      question: "How do I move my items and customers over from myBillBook?",
      answer:
        "Get the items and customers into an Excel sheet first. Then open TeamShastra's import screen, match the columns, read through the preview and fix any rows it flags. Nothing is saved until you confirm, so a small test import with ten items is a safe way to begin."
    },
    {
      question: "When were these myBillBook facts checked?",
      answer:
        "On 23 November 2026, using myBillBook's home page, its GST billing page, its staff attendance and payroll page and its feature list. Every myBillBook cell in the table links to one of those. If something has changed since, email care@teamshastra.com and we'll update the page."
    }
  ],
  sources: [
    { label: "myBillBook home page (devices, POS, quotations, multi-user)", url: "https://mybillbook.in/" },
    { label: "myBillBook GST billing and invoicing", url: "https://mybillbook.in/s/features/gst-billing-and-invoicing/" },
    { label: "myBillBook staff attendance and payroll (myHaazri, what it is not designed for)", url: "https://mybillbook.in/s/features/staff-attendance-payroll/" },
    { label: "myBillBook feature list (e-way bill, barcode, godown, online store)", url: "https://mybillbook.in/s/features/" }
  ],
  lastChecked: compareLastChecked,
  cardSummary: "Billing and accounting app with e-invoices, e-way bills, POS, godowns and a staff attendance section."
};

const zohoFsm: ComparePage = {
  slug: "teamshastra-vs-zoho-fsm",
  path: "/compare/teamshastra-vs-zoho-fsm",
  competitor: "Zoho FSM",
  shortName: "Zoho FSM",
  primaryKeyword: "Zoho FSM alternative India",
  title: "Zoho FSM Alternative India for Small Teams | TeamShastra",
  metaDescription:
    "A Zoho FSM alternative India's service owners can try: compare dispatch, live location, attendance, payroll and GST reports with TeamShastra, row by row.",
  h1: "A Zoho FSM alternative India's small service teams can run on Android",
  summary:
    "Zoho FSM is a full field service platform: requests, estimates, work orders, a dispatch console, and live location in paid editions, with Android and iOS apps. TeamShastra is a smaller Zoho FSM alternative India's service owners can try when they also want attendance, salary, GST reports and Hindi or Gujarati screens in the same app.",
  quickAnswer:
    "Choose Zoho FSM for a dispatch console with Gantt and calendar views, live location tracking, maintenance plans, an iPhone app and the rest of Zoho's suite. Choose TeamShastra for jobs, technician attendance, payroll, GST bills and reports in one app, priced per user instead of by appointments.",
  tableIntro:
    "Zoho FSM facts come from Zoho's product page, pricing page and editions help article. Features differ by edition, so we've noted the edition where Zoho does.",
  rows: [
    { need: "Requests, estimates and work orders", them: "Yes, in every edition including Free.", sources: [1], us: "Jobs with status, technician and photos, plus quotations as their own documents." },
    { need: "Assigning work", them: "Dispatch console with Gantt, grid and calendar views.", sources: [2], us: "A Today board where you assign and reassign jobs by hand. No automatic dispatch or route optimisation." },
    { need: "Live location", them: "Maps and location tracking from the Standard edition; field agent live location tracking in paid editions.", sources: [1, 3], us: "No live tracking. Location is saved at punch-in, job start and job photos." },
    { need: "Maintenance plans and AMC", them: "Maintenance plans and asset management from the Professional edition.", sources: [1], us: "AMC contracts that show the next due visit on each customer." },
    { need: "Service reports", them: "Service reports on job completion, with customer feedback, ratings and signatures.", sources: [2], us: "Service report PDF built from the job and shared on WhatsApp." },
    { need: "Invoices", them: "Invoicing and payments in every edition.", sources: [1], us: "GST tax invoices, credit and debit notes and delivery challans." },
    { need: "GST return reports", them: "Not listed on Zoho FSM's public pages as of 23 November 2026.", sources: [1, 3], us: "GSTR-1, GSTR-3B, GSTR-9 data and an HSN summary for your CA." },
    { need: "Technician time", them: "Time sheets on appointments.", sources: [3], us: "Daily selfie punch-in and punch-out with the GPS point, plus leave." },
    { need: "Payroll", them: "Not listed in Zoho FSM's editions as of 23 November 2026.", sources: [3], us: "Salary from attendance, advances, payslips and indicative PF, ESI, PT and TDS." },
    { need: "How pricing works", them: "Chosen by appointments per month for the organisation. Free covers 30 appointments a month; paid editions start at 60.", sources: [1, 3], us: "Per user. Starter is free; Growth is ₹200 per user, per month, plus GST." },
    { need: "Users included", them: "20 users on Free, 200 on Standard and Professional, 500 on Premium.", sources: [3], us: "Every person you add is a user on your plan." },
    { need: "Mobile apps", them: "Android and iOS apps for field agents.", sources: [2], us: "Android app and the web; no iPhone app." },
    { need: "No signal", them: "Offline data access in paid editions.", sources: [3], us: "Works offline and syncs when the signal returns." },
    { need: "Stock and purchases", them: "Services and parts in every edition.", sources: [1], us: "Stock, purchase bills, supplier balances and field expenses." }
  ],
  betterChoice: [
    "You dispatch many technicians a day and want Gantt, grid and calendar views to plan them.",
    "You need to see where field agents are right now, not just where they punched in.",
    "Some technicians use iPhones, which Zoho FSM supports and TeamShastra doesn't.",
    "You already use other Zoho apps and would like field service under the same Zoho account.",
    "You look after equipment with maintenance plans and asset records, which Zoho lists in its Professional edition."
  ],
  fitsBetter: [
    "You want attendance and salary in the same app as the jobs, so month end doesn't need a second system.",
    "Your CA needs GSTR-1, GSTR-3B and HSN data from the bills you made, in Excel or PDF.",
    "Your technicians are more at home in Hindi, Gujarati, Marathi or Bengali than in English.",
    "You do a lot of small visits each month and find per-user pricing easier to plan than pricing by appointments.",
    "Your team is mostly on Android phones, and a lighter app suits them better than a full platform."
  ],
  switching: [
    "There's no direct import from Zoho FSM. If you can get your customers and items into an Excel sheet, TeamShastra's import screen reads it, flags rows it can't use and saves only after you confirm the preview.",
    "Open jobs are best finished in Zoho FSM. Start new jobs, attendance and bills in TeamShastra from the first of a month, so salary and GST periods begin cleanly in one place."
  ],
  switchingLinks: [
    { href: "/features/technician-dispatch-today-board", label: "The Today board" },
    { href: "/features/gst-reports-ca-export", label: "GST reports for your CA" },
    { href: "/features/team-location-map", label: "How the team map works" }
  ],
  faqs: [
    {
      question: "How does Zoho FSM pricing differ from TeamShastra's?",
      answer:
        "Zoho FSM is priced by how many appointments your organisation books a month, with users included per edition; its Free edition covers 30 appointments. TeamShastra is priced per user: Starter is free and Growth is ₹200 per user, per month, plus GST. Which works out cheaper depends on your team size and job count."
    },
    {
      question: "Does TeamShastra have a dispatch console like Zoho FSM?",
      answer:
        "Not in the same way. TeamShastra has a Today board where you see each technician's jobs and assign or move them by hand. Zoho FSM offers a dispatch console with Gantt, grid and calendar views. If you schedule dozens of people across long time slots, Zoho's views may suit you better."
    },
    {
      question: "Will TeamShastra show where my technicians are right now?",
      answer:
        "No. TeamShastra records a location at punch-in, punch-out, job start and when a job photo is added, and puts those points on a team map. It doesn't run live tracking in the background. Zoho FSM lists live location tracking for field agents in its paid editions."
    },
    {
      question: "Can TeamShastra connect to Zoho Books?",
      answer:
        "No. TeamShastra doesn't integrate with Zoho Books, any other Zoho app or Tally. It keeps its own GST invoices, purchases, expenses and reports, and you export GST reports to Excel or PDF for your accountant. If your books have to stay in a Zoho app, check Zoho's own pages on how FSM connects to it."
    },
    {
      question: "Is there an iPhone app for technicians?",
      answer:
        "Not as an App Store app. TeamShastra is on Google Play for Android and runs in any browser at app.teamshastra.com, and an iPhone user can add the web app to the home screen from Safari. Zoho FSM offers native Android and iOS apps, which matters if many of your technicians use iPhones."
    },
    {
      question: "Can my technicians use TeamShastra in Hindi?",
      answer:
        "Yes. Each person can pick English, Hindi, Gujarati, Marathi or Bengali for the app screens, so a technician can work in Hindi while the office stays in English. We didn't find a language list on the Zoho FSM pages we checked, so we haven't compared languages in the table."
    }
  ],
  sources: [
    { label: "Zoho FSM editions and pricing", url: "https://www.zoho.com/fsm/pricing.html" },
    { label: "Zoho FSM product page (dispatch console, mobile apps, service reports)", url: "https://www.zoho.com/fsm/" },
    { label: "Zoho FSM editions and pricing help article (users, time sheets, live location, offline)", url: "https://help.zoho.com/portal/en/kb/fsm/getting-started/articles/fsm-pricing" }
  ],
  lastChecked: compareLastChecked,
  cardSummary: "Full field service platform with a dispatch console, live location, maintenance plans and iOS apps."
};

/** Comparison pages, in the order they appear on /compare. */
export const comparePages: ComparePage[] = [vyapar, khatabook, mybillbook, zohoFsm];

export function getComparePage(slug: string): ComparePage | undefined {
  return comparePages.find((page) => page.slug === slug);
}

/** All visible copy we wrote for a comparison page (for content tests). */
export function compareBodyText(page: ComparePage): string {
  return [
    page.h1,
    page.summary,
    page.quickAnswer,
    page.tableIntro,
    ...page.rows.flatMap((row) => [row.need, row.them, row.us]),
    ...page.betterChoice,
    ...page.fitsBetter,
    ...page.switching,
    ...page.faqs.flatMap((faq) => [faq.question, faq.answer])
  ].join("\n");
}
