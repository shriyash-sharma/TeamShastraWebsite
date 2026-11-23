import type { FeatureLanding } from "../types";

export const moneyFeatures: FeatureLanding[] = [
  {
    slug: "inventory-stock-management",
    name: "Stock & inventory",
    group: "Stock, purchases & money",
    hubSummary: "A catalog with stock levels that move with sales, purchases, returns and adjustments, plus a full movement history.",
    lastUpdated: "2026-11-23",
    primaryKeyword: "inventory management app",
    secondaryKeywords: ["stock management for service business", "spare parts stock app", "stock register app"],
    title: "Inventory Management App for Service Firms | TeamShastra",
    metaDescription:
      "An inventory management app for service firms. Stock goes down with each sale, up with each purchase, and every move is logged. Try TeamShastra free.",
    h1: "Inventory management app for parts, cameras and spares",
    intro:
      "Three DVRs on the shelf, or two? With an inventory management app tied to your bills, you don't have to walk to the godown to find out. Selling reduces stock, buying adds it back, and every change goes into a movement history you can check later.",
    keywordHeading: "How the inventory management app keeps count",
    problem: [
      "A service business carries more stock than people think: cameras, DVRs, cable rolls, filters, compressors, batteries, chemicals. It sits in the shop, in a godown and in the back of technicians' bikes.",
      "Nobody updates the stock book when a technician takes two cameras for a job. One is used, one comes back a week later, or does not. When a customer asks for a model, the owner says yes, then finds the shelf empty.",
      "Once a year, someone counts everything and the numbers never match the book. The gap is written off as loss, and nobody can say where it went.",
      "Purchases are a second gap. A new lot of cameras arrives, the bill goes into a file, and the stock book is updated on Sunday, if at all. Until then nobody knows the real count."
    ],
    solution: [
      "In TeamShastra each product or spare is a catalog item with its price, tax rate and HSN code. Turn on stock tracking for the items you want to count.",
      "From then on, stock moves on its own. A sale or delivery challan reduces it. A purchase bill adds to it. A return brings it back. If you count the shelf and find a difference, record a stock adjustment with a reason.",
      "Each of these moves lands in the movement history. Open an item and you can see each in and out, with the date and the document that caused it. When a number looks wrong, you can trace it in a minute instead of guessing. Because the catalog is the same one used in quotations and invoices, prices and codes stay the same everywhere.",
      "Quotations and proforma invoices do not touch stock, so a quote that never turns into a sale will not distort your count."
    ],
    steps: [
      "Open the Catalog and add your products and spare parts.",
      "Set the price, tax rate and HSN code, and turn on stock tracking.",
      "Enter the opening quantity for each item.",
      "Make sales and purchase bills as usual; stock updates by itself.",
      "Use Adjust stock after a physical count, and write the reason.",
      "Open an item's movement history to see every change."
    ],
    whoFor:
      "Whoever buys and sells material in your business will spend most time on this screen. It helps businesses with a lot of small parts, such as CCTV installers, RO water purifier service shops, inverter and battery dealers, IT hardware suppliers and pest control firms that track chemicals.",
    benefits: [
      "Stock changes with every sale and purchase without extra entries",
      "Every change can be traced to a bill or an adjustment",
      "Physical counts can be matched with a clear reason",
      "One catalog feeds quotes, bills and stock",
      "You know what is in hand before promising a customer"
    ],
    limits: [
      "Stock is one count for the business, not split by technician or godown.",
      "Barcode scanning isn't available."
    ],
    faqs: [
      {
        question: "Does stock go down when a technician uses a part on a job?",
        answer:
          "Stock goes down when the part is billed on a sale or sent on a delivery challan. Using a part on a job without billing it does not change stock by itself. Many owners bill all parts used, or record an adjustment, so the count stays correct."
      },
      {
        question: "Does a proforma invoice reduce my stock?",
        answer:
          "No. A proforma is only a preview of a bill, so it does not move stock or create a payment due. Stock changes when you make the real tax invoice or bill of supply. Quotations also leave stock unchanged. Delivery challans do move stock."
      },
      {
        question: "How do I fix stock after counting the shelf?",
        answer:
          "Open the item and record a stock adjustment for the difference. Add a reason such as damaged, found extra or counting error. The adjustment appears in the movement history, so later you can see why the number changed. Monthly counts keep surprises small."
      },
      {
        question: "Can I track services and products in the same catalog?",
        answer:
          "Yes. Services such as installation charges or AMC visits can sit in the catalog with a SAC code and no stock tracking. Products like cameras or filters can have stock tracking on. Both can go on the same quotation or invoice."
      },
      {
        question: "Can I bring my item list from Vyapar or Excel?",
        answer:
          "Yes. The data import tool can bring in your catalog and opening stock from Vyapar or a spreadsheet. You match the columns and see a preview with any problem rows before anything is saved. HSN codes, tax rates and units can come across with the items."
      }
    ],
    relatedFeatures: ["purchase-bills-supplier-management", "gst-billing-invoice", "vyapar-data-import"],
    relatedIndustries: ["cctv-installer-software", "ro-water-purifier-service-software", "inverter-battery-ups-service-software"],
    relatedGuides: ["ro-service-business-guide", "spare-parts-stock-management"],
    screenshot: null
  },
  {
    slug: "purchase-bills-supplier-management",
    name: "Purchases & suppliers",
    group: "Stock, purchases & money",
    hubSummary: "Record purchase bills and debit notes, and see how much you owe each supplier at a glance.",
    lastUpdated: "2026-11-23",
    primaryKeyword: "purchase bill tracking",
    secondaryKeywords: ["supplier balance app", "supplier ledger app", "vendor payment tracking"],
    title: "Purchase Bill Tracking and Supplier Dues | TeamShastra",
    metaDescription:
      "Simple purchase bill tracking for service businesses. Record supplier bills, pay in parts, return goods with debit notes and see what you owe. Start free.",
    h1: "Purchase bill tracking that shows what you owe each supplier",
    intro:
      "Your supplier says you still owe for last month's cable order, and you're sure you paid half. Purchase bill tracking in TeamShastra sits beside your sales: record each bill, pay it in full or in parts, and the supplier balance, stock and GST data update together.",
    keywordHeading: "What purchase bill tracking shows you",
    problem: [
      "Suppliers give credit, and that credit is easy to lose track of. A distributor sends material on Monday, another on Thursday, and a third bill arrives by courier. Payments go out by NEFT one week and cash the next.",
      "When the distributor's salesman visits and says you owe ₹48,000, you have no quick way to check. You either pay to keep the relationship or spend an evening matching bills to bank entries.",
      "Returned or damaged goods add to the mess. You sent back a faulty DVR, but the supplier's account still shows it as unpaid.",
      "Purchase bills also need to reach your CA for input tax. When they sit in a drawer or a courier envelope, you may pay more GST than you should simply because the bills were not recorded in time."
    ],
    solution: [
      "In TeamShastra suppliers live in the same party list as customers, filtered by role. Open Purchases and record a purchase bill with the supplier, the items, quantities, rates and tax. Stock goes up and the purchase shows in your GST reports.",
      "When you pay, record the payment against the bill from a bank account or cash. Part payments are fine; the balance stays open until it reaches zero.",
      "If you return goods or get a rate correction, make a debit note against the supplier. Their balance comes down. Raise a purchase order before buying if you like, so the supplier knows exactly what you asked for. The supplier list shows what you owe each one, and dues can be split by how old the bills are, so you know which payments are urgent.",
      "Purchase bills can carry GST with the same place-of-supply rules as sales, so the input tax side of your returns is ready for the CA."
    ],
    steps: [
      "Add the supplier with name, phone and GSTIN.",
      "Open Purchases and record the purchase bill with items and tax.",
      "Pay it later, fully or in parts, from a bank account or cash.",
      "Make a debit note when you return goods or get a price correction.",
      "Open the supplier list to see what is still owed."
    ],
    whoFor:
      "It's built for whoever buys material and pays suppliers. It helps trades that buy a lot on credit from distributors, such as CCTV installers, inverter and battery dealers, home automation installers and IT and networking firms.",
    benefits: [
      "Supplier dues are visible before the salesman calls",
      "Part payments and returns are recorded properly",
      "Stock and GST purchase data update from the same bill",
      "Older dues stand out so they can be paid first",
      "Customers and suppliers share one contact list"
    ],
    limits: [
      "Money to suppliers goes from your bank as usual; here you only record it.",
      "Supplier bills aren't read from photos, so you type them in or import them."
    ],
    faqs: [
      {
        question: "Can a party be both a customer and a supplier?",
        answer:
          "Yes. TeamShastra keeps one party list for everyone you deal with. A firm you buy from and sometimes sell to can have both roles. You see its sales and purchase documents in one place, which makes balances easier to understand."
      },
      {
        question: "How do I record goods returned to a supplier?",
        answer:
          "Make a debit note against that supplier and add the items you returned or the amount of the correction. The supplier's balance goes down by that amount, and stock is adjusted for returned goods. Your CA also sees it in the purchase reports."
      },
      {
        question: "Can I pay a purchase bill in instalments?",
        answer:
          "Yes. Record each payment as it happens, with the amount and the bank account or cash used. The bill stays open until the total paid matches the bill. Each payment is listed on the bill so you can see the full history."
      },
      {
        question: "Do purchase bills affect my stock?",
        answer:
          "Yes. Items on a purchase bill that have stock tracking turned on are added to stock when the bill is saved. This keeps the catalog count in line with what you actually received from suppliers. Service lines without stock tracking are simply recorded as costs."
      },
      {
        question: "What is a purchase order used for?",
        answer:
          "A purchase order is the list of items you ask a supplier to send, with rates you agreed. It is shared as a PDF before the goods arrive. When the bill comes, check it against the order to catch wrong quantities or rates."
      }
    ],
    relatedFeatures: ["inventory-stock-management", "staff-cash-bank-accounts", "gst-reports-ca-export"],
    relatedIndustries: ["inverter-battery-ups-service-software", "home-automation-installer-software", "it-networking-amc-software"],
    relatedGuides: ["gstr-1-vs-gstr-3b", "spare-parts-stock-management"],
    screenshot: null
  },
  {
    slug: "field-expense-tracking",
    name: "Field expenses",
    group: "Stock, purchases & money",
    hubSummary: "Staff log fuel, parts and travel with a receipt photo; the owner approves or rejects each claim.",
    lastUpdated: "2026-11-23",
    primaryKeyword: "field expense tracking",
    secondaryKeywords: ["technician expense app", "petrol claim app", "expense approval app"],
    title: "Field Expense Tracking App for Technicians | TeamShastra",
    metaDescription:
      "Field expense tracking for technicians: log fuel, parts and travel with a receipt photo, and the owner approves or rejects each one. Try TeamShastra free.",
    h1: "Field expense tracking with receipts and owner approval",
    intro:
      "Petrol, a parking slip, a capacitor bought at the local shop: field money disappears in small amounts. TeamShastra handles field expense tracking for teams that spend on the move. A technician logs each spend with a category and a bill photo, you approve or reject it, and the books update.",
    keywordHeading: "How field expense tracking works day to day",
    problem: [
      "Technicians spend money every day. Petrol to reach a far site. A ₹150 connector from a local shop. Auto fare when the bike is in repair. They pay from their own pocket or from cash the owner gave them.",
      "By Saturday they hand over a crumpled list. Some bills are missing. Some amounts look high. The owner either pays without checking, which feels risky, or argues, which feels petty.",
      "Over a year these small amounts add up to a large sum, and nobody can say which jobs or people used most of it.",
      "Some staff stop claiming small amounts because it feels like a fight. Others claim the same fuel bill twice. Both are bad for the business, and neither is visible without a record."
    ],
    solution: [
      "In TeamShastra staff open Expenses and add the amount, the date and a category: fuel, parts, travel, tools, office, miscellaneous or a custom category you create. They attach a photo or file of the receipt.",
      "Each expense says how it was paid: from the cash the person is holding for the company, or from a bank account. The owner sees pending expenses and approves or rejects them. A rejected expense is reversed, so the cash balance goes back to what it was.",
      "Approved expenses show up in the expense report by person and category. Maybe one team spends more on fuel than another, or parts bought locally cost more than expected. You'll spot it and act.",
      "Expenses can be logged even without network and synced later, so a technician on a rooftop or in a basement does not have to remember to do it in the evening. The receipt photo is attached at the time of spending, when the bill is still in hand."
    ],
    steps: [
      "Set up expense categories, or use the built-in ones.",
      "The technician opens Expenses and taps to add a new one.",
      "They enter the amount, choose a category and attach the receipt photo.",
      "They choose whether it was paid from staff cash or a bank account.",
      "The owner reviews pending expenses and approves or rejects each one.",
      "Check the expenses report at month end by person and category."
    ],
    whoFor:
      "Technicians log expenses; owners approve them and read the reports. It fits teams that travel a lot or buy parts on the spot: pest control crews, appliance repair technicians, solar installation teams and lift maintenance staff.",
    benefits: [
      "Every claim has a receipt photo attached",
      "Owners approve each spend instead of paying a weekly lump sum",
      "Rejected claims are reversed in the cash balance automatically",
      "Reports show where money goes by person and category",
      "Staff stop paying out of pocket and waiting for weeks"
    ],
    limits: [
      "Reimbursement isn't automatic. You still pay the person.",
      "Amounts aren't read from receipt photos; the technician types them."
    ],
    faqs: [
      {
        question: "Can technicians add expenses from their phone?",
        answer:
          "Yes. Technicians can open Expenses in the Android app, add the amount and category, and take a photo of the bill. If they are offline at the time, the entry is saved and synced later. The owner then sees it waiting for approval."
      },
      {
        question: "What happens when I reject an expense?",
        answer:
          "The expense is marked rejected and its effect is reversed. If it was paid from a person's staff cash, that cash balance goes back up by the same amount. This stops wrong claims from quietly lowering the cash the person is holding."
      },
      {
        question: "Can I add my own expense categories?",
        answer:
          "Yes. Besides fuel, parts, travel, tools, office and miscellaneous, owners can create categories that fit the business, such as chemical refill, ladder hire or parking. Reports group spending by these categories. Clear categories make month-end review much quicker and show where small spends add up."
      },
      {
        question: "Is a receipt photo required?",
        answer:
          "Staff can attach a photo or a file for each expense, and most owners ask for it. A clear photo of the bill is the easiest way to check an amount later. For small items without a bill, ask staff to write a short note."
      },
      {
        question: "How is this different from staff cash?",
        answer:
          "Staff cash is the money you hand to a person to spend for the company. Expenses are what they spend it on. When an expense is paid from staff cash, the person's cash balance goes down. Together they show money given, money spent and money still with the person."
      }
    ],
    relatedFeatures: ["staff-cash-bank-accounts", "business-reports-dashboard", "offline-field-service-app"],
    relatedIndustries: ["pest-control-service-software", "lift-elevator-maintenance-software", "solar-installation-workforce-software"],
    relatedGuides: ["manage-business-expenses", "job-wise-profit-calculation"],
    screenshot: {
      src: "/screenshots/06-expenses.jpg",
      alt: "Expenses screen in TeamShastra with field spends listed by category such as fuel and parts with their amounts"
    },
    existingSolutionLink: { href: "/field-expense-software-india", label: "field expense software overview" }
  },
  {
    slug: "staff-cash-bank-accounts",
    name: "Staff cash & bank accounts",
    group: "Stock, purchases & money",
    hubSummary: "Give cash to staff, move it between people, settle it back, and see bank and cash balances in one view.",
    lastUpdated: "2026-11-23",
    primaryKeyword: "staff cash tracking",
    secondaryKeywords: ["cash float app", "petty cash for technicians", "bank and cash balance app"],
    title: "Staff Cash Tracking and Bank Balances | TeamShastra",
    metaDescription:
      "Staff cash tracking for field teams: give cash to technicians, record what they spend or collect, settle it back and see every balance. Start free.",
    h1: "Staff cash tracking that settles every rupee",
    intro:
      "You gave a technician cash on Monday for parts and petrol. By Friday, how much should come back? Staff cash tracking in TeamShastra records what you hand over, what they spend and what they return, with your bank accounts and office cash on the same screen.",
    keywordHeading: "What staff cash tracking records",
    problem: [
      "Every morning a few hundred rupees leave the drawer with the technicians. Some is for petrol, some for small parts. In the evening they also bring back cash collected from customers. Nobody writes it all down.",
      "After a month, the owner asks one technician to return the balance. He says he has spent it all. Another says the owner never gave him the last amount. With no record, there is no way to settle it fairly.",
      "Bank balances are another blind spot. Money arrives by UPI in one account, goes out by cheque from another, and the owner checks three apps to know what is really there.",
      "It is not about distrust. Without a written record, even honest staff forget small amounts, and the gap feels like blame."
    ],
    solution: [
      "In TeamShastra, cash handed to a person is recorded as staff cash. Use Add amount to top it up, transfer cash from one person to another, or settle it when they hand money back to the office.",
      "Expenses paid from staff cash lower that person's balance. Each person's cash screen shows money given, money spent and what they should still have. Everyone's balance is on one screen.",
      "Bank accounts work the same way. Add each account, plus the built-in Cash account for money in the office. Payments on invoices and purchase bills go in and out of these accounts. The Bank & Cash view adds bank, office cash and staff-held cash together and shows money in and out by date. Customer wants to pay on the spot? Show the UPI QR for a bank account.",
      "Manual balance adjustments are possible for bank accounts when a figure needs correcting."
    ],
    steps: [
      "Add your bank accounts and check the built-in Cash account.",
      "Give cash to a technician and record it as staff cash.",
      "Staff log expenses paid from that cash in the app.",
      "Transfer cash between staff if one person hands money to another.",
      "Settle the balance when the person returns cash to the office.",
      "Open Bank & Cash to see total funds and money in and out."
    ],
    whoFor:
      "Handing out cash is an owner or manager job; technicians see only their own cash and expenses. It is especially useful where field staff handle money daily, such as appliance repair, RO service, pest control and cleaning businesses.",
    benefits: [
      "Every rupee given to staff has a record",
      "Balances can be settled without arguments",
      "Expenses and cash are linked, so totals add up",
      "Bank, office cash and staff cash are seen together",
      "Customers can pay on the spot by scanning a UPI QR"
    ],
    limits: [
      "Your bank isn't connected, so transactions are entered in the app rather than fetched.",
      "It is not a wallet; money does not move through TeamShastra."
    ],
    faqs: [
      {
        question: "What is staff cash in TeamShastra?",
        answer:
          "It is the money the company has handed to a staff member to use for work, sometimes called a cash float. Each person carries a running balance. Giving cash raises it, expenses paid from it lower it, and settling it back to the office brings it down."
      },
      {
        question: "Can a technician pass cash to another technician?",
        answer:
          "Yes. Record a transfer from one person to another. The first person's balance goes down and the second person's goes up by the same amount. This is common when a senior technician hands over cash to a helper for a job."
      },
      {
        question: "What does the Bank & Cash view show?",
        answer:
          "It shows the total money the business holds: each bank account, the office Cash account and cash held by staff, with each amount counted once. It also lists money in and money out by the date it was recorded, so you can see the day's or month's flow."
      },
      {
        question: "Can I show customers a UPI QR from the app?",
        answer:
          "Yes. A bank account with a UPI ID can show a UPI QR on the phone screen. The customer scans and pays. Record the payment against the invoice so the bill is marked paid and the money appears in that account."
      },
      {
        question: "Who can give or settle staff cash?",
        answer:
          "Giving, transferring and settling staff cash all happen from the same screen. Technicians can see their own balance and add expenses against it. This keeps control with the people who manage money while giving staff a clear view of what they hold."
      }
    ],
    relatedFeatures: ["field-expense-tracking", "salary-advance-payslip", "gst-billing-invoice", "business-reports-dashboard"],
    relatedIndustries: ["appliance-repair-service-software", "ro-water-purifier-service-software", "cleaning-housekeeping-service-software"],
    relatedGuides: ["salary-advance-rules-for-employers", "manage-business-expenses"],
    screenshot: null
  }
];
