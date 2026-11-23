import type { FeatureLanding } from "../types";

export const billingFeatures: FeatureLanding[] = [
  {
    slug: "gst-billing-invoice",
    name: "GST billing & invoices",
    group: "Billing & GST",
    hubSummary: "Tax invoices, bills of supply, proforma, credit and debit notes and challans, with CGST, SGST or IGST set from place of supply.",
    lastUpdated: "2026-11-23",
    primaryKeyword: "GST billing app",
    secondaryKeywords: ["GST invoice app for service business", "tax invoice maker", "bill of supply app"],
    title: "GST Billing App for Service Businesses | TeamShastra",
    metaDescription:
      "TeamShastra is a GST billing app for service businesses. Make tax invoices with the right CGST, SGST or IGST, record payments and share PDFs. Start free.",
    h1: "A GST billing app built into your job workflow",
    intro:
      "The customer won't release payment until the GST bill reaches them on WhatsApp. With a GST billing app sitting next to your jobs, customers and stock, that's a few taps. TeamShastra works out the tax split, makes the PDF and records the payment against the same bill.",
    keywordHeading: "Documents you can make in the GST billing app",
    problem: [
      "Many service owners make bills at night in Word or Excel. They copy the customer's GSTIN from an old message, type the HSN code from memory and work out tax with a calculator. One wrong state and the whole bill has the wrong tax type.",
      "Others use a separate billing tool on the office computer. The technician finishes the job at 4 PM, but the bill goes out two days later when someone sits at that computer. By then the customer has moved on and payment drags.",
      "Then come part payments. The customer pays half by UPI and promises the rest next week. That promise lives only in the owner's head.",
      "Customers notice the delay and the mistakes, and some start doubting your rates rather than paying on time."
    ],
    solution: [
      "Pick the customer, add items from your catalog, and the app fills HSN or SAC codes and rates you saved earlier. The tax is CGST plus SGST when the place of supply is in your state and IGST when it is outside. You do not choose it by hand each time, though an invoice can be overridden when a special case needs it.",
      "Besides tax invoices you can make a bill of supply, a proforma invoice, credit notes, debit notes, delivery challans and purchase orders. A proforma does not touch stock or payments, so it is safe to send as an advance estimate of the bill.",
      "Record a full or part payment against the bill into a bank account or cash. The pending amount stays visible until it is cleared. Save your bank details and UPI ID once and they print on the PDF; with a UPI ID saved, bills with an amount due also carry a scan-to-pay UPI QR. Share the PDF on WhatsApp straight from the invoice."
    ],
    steps: [
      "Fill your GSTIN, state and invoice number prefix in GST settings.",
      "Add your services and products to the catalog with HSN or SAC codes and tax rates.",
      "Open Sales, choose the document type, and pick the customer.",
      "Add items; the app sets CGST and SGST or IGST from the place of supply.",
      "Save and share the PDF on WhatsApp.",
      "Record a payment when the customer pays, in full or in parts."
    ],
    whoFor:
      "Billing screens stay with owners and managers. Technicians never see them. It is made for service businesses that also sell material, such as CCTV installers, inverter and battery dealers, IT and networking firms, and home automation installers.",
    benefits: [
      "The right tax type is set from the place of supply every time",
      "Bills can be made the same day the job is completed",
      "Part payments are tracked until the bill is fully paid",
      "Customers can pay faster by scanning the UPI QR on the bill",
      "Stock and customer balances update from the same document"
    ],
    limits: [
      "Filing returns on the GST portal isn't done here. Hand the GST reports to your CA instead.",
      "There's no link to the GST system for generating invoice reference numbers."
    ],
    faqs: [
      {
        question: "How does the app decide between IGST and CGST plus SGST?",
        answer:
          "It compares your company's state with the place of supply on the bill. If both are the same state, the tax is split into CGST and SGST. If they differ, the full rate is charged as IGST. The split is shown on the invoice and in the PDF so your customer and CA can check it."
      },
      {
        question: "Can I make a bill of supply if I am under composition?",
        answer:
          "Yes. A bill of supply is one of the document types. Composition dealers and sellers of exempt items use it because it does not charge GST to the customer. You can pick it in the same Sales screen where you make tax invoices."
      },
      {
        question: "Is a proforma invoice counted as a sale?",
        answer:
          "No. A proforma invoice is a preview of the bill. Stock stays as it is and no payment due is created. Once they confirm, make the real tax invoice. This keeps your GST reports clean. Proformas are also handy for advance requests."
      },
      {
        question: "Can customers pay by scanning a QR on the bill?",
        answer:
          "Yes, if you save your UPI ID in the invoice format settings. Quotations, invoices and customer debit notes that have an amount due then print a scan-to-pay UPI QR on the PDF. Your bank account details can also be printed for customers who prefer a transfer."
      },
      {
        question: "Do I need a computer to make GST bills?",
        answer:
          "No. Bills can be made on the Android app at the site or in the shop. Owners who like a bigger screen can use the web app at app.teamshastra.com on a laptop. Both show the same bills, customers and catalog."
      },
      {
        question: "Can I add a short description under each item?",
        answer:
          "Yes. An optional item description line can be turned on in GST settings. It appears under the item name on the screen and on the PDF. It is useful for noting a camera model, a cable length or the scope of a service."
      }
    ],
    relatedFeatures: ["quotation-estimate-app", "gst-reports-ca-export", "inventory-stock-management", "customer-management"],
    relatedIndustries: ["cctv-installer-software", "inverter-battery-ups-service-software", "it-networking-amc-software"],
    relatedGuides: ["gst-invoice-format-for-service-business", "bill-of-supply-vs-tax-invoice"],
    compareWith: ["vyapar-alternative", "teamshastra-vs-mybillbook", "teamshastra-vs-khatabook"],
    screenshot: {
      src: "/screenshots/05-sales-quotations.jpg",
      alt: "Sales section in TeamShastra listing GST documents with customer names, totals and payment status"
    },
    existingSolutionLink: { href: "/gst-invoicing-software-india", label: "GST invoicing software overview" }
  },
  {
    slug: "quotation-estimate-app",
    name: "Quotations & estimates",
    group: "Billing & GST",
    hubSummary: "Send a quotation PDF, then turn the approved quote into a job or an invoice without typing it again.",
    lastUpdated: "2026-11-23",
    primaryKeyword: "quotation and estimate app",
    secondaryKeywords: ["quotation maker for service jobs", "estimate PDF app", "convert quote to invoice"],
    title: "Quotation and Estimate App for Service Jobs | TeamShastra",
    metaDescription:
      "Use the TeamShastra quotation and estimate app to send neat PDF quotes on WhatsApp, then turn an approved quote into a job or invoice. Free to start.",
    h1: "From site visit to approved quote with a quotation and estimate app",
    intro:
      "Quote while you're still at the site, before the customer calls the next vendor. TeamShastra works as a quotation and estimate app for service work. Build the quote from your catalog, share it as a PDF, and turn it into a job or a GST invoice once they say yes.",
    keywordHeading: "Why a quotation and estimate app saves typing",
    problem: [
      "A site survey ends with the customer asking, \"Send me the rate.\" The technician tells the owner. The owner types a quotation in Word, saves it with a random name and sends it in the evening. If the customer says yes a week later, the owner has to search for that file.",
      "Then the same items and prices are typed again into a bill. Rates get changed by mistake. The customer points out that the invoice does not match the quote, and the payment waits until it is fixed.",
      "Worst of all, quotes that were never answered are forgotten. Nobody calls back, so orders that were almost won go to a rival.",
      "There is also no single place to see every quote sent this month and its total value."
    ],
    solution: [
      "In TeamShastra a quotation is a proper document in the Sales section. Pick the customer, add items from your catalog with prices and tax, and add terms. The PDF is ready to share on WhatsApp in a moment.",
      "Quotations stay in a list with their status, so you can see which ones are waiting. Call the customer from the quote screen to follow up.",
      "Got a yes? Convert the quotation. Make it a job, and the work order is created for the same customer with the quote attached. Or make it an invoice, and every line, price and tax moves across. The invoice stays editable if something changed on site. The original quote is locked, so you always know what was first promised. With a UPI ID saved, a quote can also carry a scan-to-pay QR for advance payments.",
      "Each quotation keeps its own number series, set in your GST settings, so references stay clean when customers quote them back to you."
    ],
    steps: [
      "Open Sales and create a new quotation for the customer.",
      "Add items from the catalog; edit price, quantity or discount if needed.",
      "Add terms such as validity and payment conditions, then save.",
      "Share the quotation PDF on WhatsApp.",
      "When approved, convert it to a job, to an invoice, or to both."
    ],
    whoFor:
      "Whoever prices the work in your company will use it most. It helps any trade where a site visit comes before the order: CCTV installers, home automation installers, fire safety suppliers, lift maintenance firms and solar installers.",
    benefits: [
      "Quotes look professional and carry your logo and terms",
      "Approved quotes become jobs or invoices without retyping",
      "The first price promised is locked for reference",
      "Open quotes are easy to follow up from one list",
      "Advance payments can be collected through the UPI QR"
    ],
    limits: [
      "Follow-ups on pending quotes are yours to make; no automatic reminders go out.",
      "There is no online page where the customer clicks to accept; approval comes by phone or message."
    ],
    faqs: [
      {
        question: "Can I convert a quotation into a job?",
        answer:
          "Yes. Open the approved quotation and choose to make a job. TeamShastra creates a work order for the same customer and links the quote to it. When the technician finishes, the job collection can use the quote total, which makes cash or UPI collection simpler."
      },
      {
        question: "What happens to the quotation after I turn it into an invoice?",
        answer:
          "The quotation is locked so its original lines and prices stay as they were sent. The new invoice copies everything and stays editable. If the customer asked for an extra camera or a longer cable on site, change the invoice, not the quote."
      },
      {
        question: "Can I send a quote without GST?",
        answer:
          "Yes. Tax on each line comes from the item's rate in your catalog, and items can have a zero rate. Businesses that are not registered under GST can keep tax off. Registered businesses usually show GST on the quote so the final bill matches."
      },
      {
        question: "Is an estimate different from a quotation in the app?",
        answer:
          "In TeamShastra they are the same document. Many customers say estimate and others say quotation. If you are moving from Vyapar, estimates you made there can be imported as quotations so your old records are not lost. Use whichever word your customers prefer."
      },
      {
        question: "Can I follow up on a pending quote from the app?",
        answer:
          "Yes. Open the quotation and use the call or WhatsApp button to reach the customer. The list of quotations shows what is still pending, so you can go through it once a week and call back customers who have not decided yet."
      }
    ],
    relatedFeatures: ["gst-billing-invoice", "job-work-order-management", "customer-management", "vyapar-data-import"],
    relatedIndustries: ["home-automation-installer-software", "cctv-installer-software", "fire-safety-service-software"],
    relatedGuides: ["start-cctv-installation-business", "start-electrical-contracting-business"],
    screenshot: {
      src: "/screenshots/05-sales-quotations.jpg",
      alt: "Quotations list in TeamShastra with each estimate's customer, amount and whether it is pending or converted"
    }
  },
  {
    slug: "gst-reports-ca-export",
    name: "GST reports for your CA",
    group: "Billing & GST",
    hubSummary: "Export GSTR-1, GSTR-3B, GSTR-9, HSN summary and tax summaries in Excel or PDF for your accountant.",
    lastUpdated: "2026-11-23",
    primaryKeyword: "GSTR-1 and GSTR-3B reports",
    secondaryKeywords: ["GST report export for CA", "HSN summary report", "GSTR-9 data"],
    title: "GSTR-1 and GSTR-3B Reports in Excel | TeamShastra",
    metaDescription:
      "Download GSTR-1 and GSTR-3B reports, GSTR-9 data and an HSN summary in Excel or PDF from your own bills. Send them to your CA in one go. Try it free.",
    h1: "Ready GSTR-1 and GSTR-3B reports for your CA every month",
    intro:
      "It's the 10th and your CA wants GSTR-1 by evening. TeamShastra builds GSTR-1 and GSTR-3B reports from the invoices, notes and purchase bills you've already made in the app. Export them to Excel or PDF, send them across, and month end stops eating your weekend.",
    keywordHeading: "What is inside the GSTR-1 and GSTR-3B reports",
    problem: [
      "Around the tenth of each month, the CA's office starts calling. \"Send all sales bills. Send purchase bills. Send credit notes.\" The owner digs through a drawer, a WhatsApp chat and an email inbox. Some bills are photos, some are PDFs, some are missing.",
      "The CA's staff type everything again into their own tool. They find a wrong GSTIN, an HSN code that is missing, and a bill with the wrong tax type. Calls go back and forth. Fees go up because of the extra work.",
      "The owner never really knows how much tax is due until the CA tells them.",
      "If a credit note was made in a hurry and never shared, the CA's numbers and yours do not match, and the gap shows up only after the return is filed."
    ],
    solution: [
      "Because every bill is made inside TeamShastra, the data is already in a clean form. Open GST reports, pick the period, and choose the report. The GSTR-1 view lists outward supplies in the sections your CA expects. The GSTR-3B view shows the tax summary for the month. A GSTR-9 report pulls the year together for the annual return.",
      "An HSN summary groups sales by HSN or SAC code with quantities and tax. Sales, purchase and tax summaries help you see your position before the CA does.",
      "Export any of these to Excel or PDF and share them. Your CA gets one tidy file instead of a pile of photos. Since the same data drives your bills, there is no second copy to go out of sync.",
      "Credit and debit notes made in the app are part of the same data, so returns and corrections are counted in the right month. If you also record purchase bills, your CA can see the input side together with sales."
    ],
    steps: [
      "Make sure every sale and purchase for the month is entered in the app.",
      "Open GST reports in the app.",
      "Choose the month or quarter.",
      "Open GSTR-1, GSTR-3B, the HSN summary or another report to check it on screen.",
      "Export to Excel or PDF and send the file to your CA."
    ],
    whoFor:
      "Anyone with billing access can pull these reports, and your CA gets the files. They suit GST-registered service businesses that bill many small jobs each month, such as IT and networking firms, CCTV installers, appliance repair centres and inverter dealers.",
    benefits: [
      "Month-end GST data is ready without collecting paper bills",
      "Your CA gets clean Excel files, which saves their time and yours",
      "HSN-wise summaries are built automatically",
      "Tax due is visible before filing day",
      "Annual GSTR-9 data comes from the same records"
    ],
    limits: [
      "Nothing is uploaded to the GST portal. Your CA still files the returns.",
      "Bills made outside TeamShastra will not appear unless you enter or import them."
    ],
    faqs: [
      {
        question: "Can TeamShastra file my GSTR-1 directly?",
        answer:
          "No. TeamShastra prepares the report data and exports it as Excel or PDF. Filing is done on the GST portal by you or your CA. Keeping filing outside the app means your CA still checks everything before it is submitted."
      },
      {
        question: "Which periods can I choose for the reports?",
        answer:
          "You pick a date range such as a month or a quarter. Quarterly filers can choose the full quarter. GSTR-9 data is taken for the financial year. The reports read from bills dated inside the range you choose. Pick the right range before exporting."
      },
      {
        question: "Do purchase bills show up in the GST reports?",
        answer:
          "Yes. Purchase bills you record in TeamShastra are part of the purchase and tax summaries. This helps your CA see the input tax side. Make sure each supplier's GSTIN is saved so the data lines up with what suppliers report."
      },
      {
        question: "What is an HSN summary and why does my CA want it?",
        answer:
          "It is a table of your sales grouped by HSN or SAC code, with quantity, taxable value and tax. GST returns ask for this summary. Because codes are saved with each catalog item, TeamShastra can build the table for you instead of your CA sorting bills by hand."
      },
      {
        question: "My old bills are in Vyapar. Will they be in the reports?",
        answer:
          "Only if you bring them in. TeamShastra can import past sales and purchases from Vyapar or a spreadsheet. Once imported, those bills are included in the GST reports for their dates, which is handy if you switch software in the middle of a year."
      }
    ],
    relatedFeatures: ["gst-billing-invoice", "tds-form-26q", "purchase-bills-supplier-management", "vyapar-data-import"],
    relatedIndustries: ["it-networking-amc-software", "appliance-repair-service-software", "inverter-battery-ups-service-software"],
    relatedGuides: ["gstr-1-vs-gstr-3b", "gst-registration-for-service-business"],
    screenshot: null
  },
  {
    slug: "tds-form-26q",
    name: "TDS & Form 26Q",
    group: "Billing & GST",
    hubSummary: "Save TDS sections and rates, see TDS reports and party-wise certificate data, and prepare a quarterly Form 26Q summary.",
    lastUpdated: "2026-11-23",
    primaryKeyword: "TDS management",
    secondaryKeywords: ["Form 26Q data", "TDS report for small business", "TDS rate master"],
    title: "TDS Management and Form 26Q Summary | TeamShastra",
    metaDescription:
      "Simple TDS management for small businesses: save rates, see TDS by party and quarter, log challans and export a Form 26Q summary for your CA. Start free.",
    h1: "TDS management without the spreadsheet",
    intro:
      "Deducting tax on a contractor or rent payment takes a minute; finding the totals at quarter end can take a weekend. For TDS management, save the sections and rates once in TeamShastra. Party-wise TDS totals, challans and a quarterly Form 26Q summary then stay ready for your CA.",
    keywordHeading: "What TDS management covers in the app",
    problem: [
      "Once your business crosses the turnover limit, TDS becomes part of life. You deduct it on certain payments, deposit it with a challan, and file a quarterly return. Each step has its own rate, date and form.",
      "Small firms track this in a spreadsheet that one person understands. The rate for a section is typed wrongly. A challan's BSR code is lost. Quarter end comes, the CA asks for party-wise totals and challan details, and the owner spends a weekend rebuilding them.",
      "Mistakes lead to notices and late fees, which hurt more than the tax itself.",
      "Customers who deduct TDS from your bills add another layer. You must match what they cut against what they report, or you lose a credit you are owed."
    ],
    solution: [
      "In TeamShastra you first set up a TDS rate list: the section and the rate for each type of payment. When TDS applies to a bill, it is worked out from that rate and shown on the document, with the net amount payable.",
      "The TDS report shows deductions for any period. The certificates view groups them by party, with section, rate, taxable amount and TDS for the period, which is what you need when issuing certificates.",
      "For each quarter, record your challans with the BSR code, date, serial and amount. The Form 26Q summary then shows total taxable value, TDS deducted, challan deposits and any TDS still unpaid, with warnings when something is missing, such as your TAN. Export the reports and hand them to your CA.",
      "Bills where a customer deducts TDS from your payment also show the net amount payable, so the money you actually receive is clear on the invoice and in your collections."
    ],
    steps: [
      "Open TDS rates and add each section with its rate.",
      "Apply TDS on bills where it is due; the amount is shown on the document.",
      "Record each TDS challan with BSR code, date, serial number and amount.",
      "Open the TDS report or certificates view for party-wise totals.",
      "At quarter end, open Form 26Q, review warnings and export the summary."
    ],
    whoFor:
      "This is for owners and accounts staff in businesses that must deduct TDS, and for the CAs who file their returns. It is most useful for larger service firms such as IT and networking companies, facility management providers, lift maintenance firms and fire safety contractors.",
    benefits: [
      "Rates are saved once and applied the same way each time",
      "Party-wise totals are ready when certificates are due",
      "Challan details are stored with the quarter they belong to",
      "Warnings point out missing details before the CA finds them",
      "Exports cut down back-and-forth with your accountant"
    ],
    limits: [
      "Filing the quarterly TDS return and downloading official certificates stay with your CA and the tax department's site.",
      "Paying TDS happens through your bank or the tax portal; you record the challan here afterwards."
    ],
    faqs: [
      {
        question: "Can TeamShastra file Form 26Q?",
        answer:
          "No. It prepares a Form 26Q summary with totals, challans and warnings, and you can export the data. The actual return is prepared and filed through the official process by you or your CA. The app helps make sure the numbers are complete before that step."
      },
      {
        question: "How do I record a TDS challan?",
        answer:
          "Open the challan section for the quarter and add the financial year, quarter, section, BSR code, challan date, challan serial number and amount. These details then appear in the Form 26Q summary, and unpaid TDS is shown as the gap between deducted and deposited tax."
      },
      {
        question: "Can I change a TDS rate later?",
        answer:
          "Yes. Edit or add rates in the TDS rate list at any time. Bills that already have TDS keep the amount they were saved with. New bills use the updated rate. This avoids silently changing old records. Old rates can also be removed when no longer needed."
      },
      {
        question: "What do the TDS certificate figures show?",
        answer:
          "They group TDS by party for the period you pick. For each party you see the section, the rate, the taxable amount, the TDS amount and the number of transactions. Use them as the base for the certificates you need to issue."
      },
      {
        question: "Is TDS needed for a small service business?",
        answer:
          "It depends on your turnover, your business type and the payments you make. Many small firms do not deduct TDS at all. Ask your CA whether it applies to you. If it does, keeping it inside the same app as your bills saves a lot of manual work."
      }
    ],
    relatedFeatures: ["gst-reports-ca-export", "gst-billing-invoice", "purchase-bills-supplier-management"],
    relatedIndustries: ["it-networking-amc-software", "lift-elevator-maintenance-software", "facility-management-software"],
    screenshot: null
  }
];
