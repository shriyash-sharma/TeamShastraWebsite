import { sources } from "../sources";
import type { Guide } from "../types";

const published = "2026-11-23";

export const gstGuides: Guide[] = [
  {
    slug: "gst-invoice-format-for-service-business",
    category: "gst",
    title: "GST Invoice Format for Service Businesses | TeamShastra",
    metaDescription:
      "GST invoice format for service businesses: every field rule 46 asks for, SAC codes, CGST and SGST or IGST, the 30-day time limit and a sample layout.",
    h1: "GST invoice format for service businesses: the fields that matter",
    primaryKeyword: "GST invoice format for service",
    secondaryKeywords: ["GST bill format for services", "tax invoice format for service provider", "SAC code on invoice"],
    datePublished: published,
    dateModified: published,
    summary:
      "The GST invoice format for service work is set by rule 46 of the CGST Rules. In short: who you are, who the customer is, a unique number and date, the SAC code and description, the value, and the tax charged. Work inside your State shows CGST and SGST, inter-State work shows IGST with the place of supply, and the bill should go out within 30 days of the job.",
    sections: [
      {
        id: "the-moment",
        heading: "The moment the invoice matters",
        paragraphs: [
          "The technician has finished. The office manager at the client's site says, politely, that accounts will release payment only after they get a proper GST bill on WhatsApp. If your bill is missing their GSTIN or the SAC code, it comes back, and your money waits another week.",
          "Getting the format right once means every bill after that goes through without a second round."
        ]
      },
      {
        id: "rule-46-fields",
        heading: "The fields rule 46 asks for",
        paragraphs: [
          "Rule 46 of the CGST Rules lists what a tax invoice must contain. Here they are in plain words, in the order the rule gives them, for a business that supplies services."
        ],
        list: [
          "Your name, address and GSTIN",
          "A serial number of up to 16 characters, unique for the financial year (letters, numbers, hyphen and slash are allowed)",
          "The date of issue",
          "The customer's name, address and GSTIN, if they're registered",
          "For an unregistered customer, their name, address and State with its code when the value is ₹50,000 or more, or when they ask for it",
          "The HSN code for goods, or the SAC code for services",
          "A description of the service",
          "The total value, and the taxable value after any discount",
          "The rate and amount of each tax: central tax, State tax, integrated tax or cess",
          "For an inter-State supply, the place of supply with the name of the State",
          "Whether tax is payable on reverse charge",
          "Your signature or digital signature, or that of someone you authorise"
        ],
        after: [
          "The rule also says a signature isn't needed on an electronic invoice issued under the Information Technology Act. Rule 46 has a few more lines for exports and for businesses above a notified turnover, which small service firms rarely need."
        ]
      },
      {
        id: "sac-codes",
        heading: "SAC codes: finding the right one",
        paragraphs: [
          "Services are classified with a Services Accounting Code, the services side of the HSN system. Rule 46 asks for the code on the invoice, and lets the government notify how many digits a class of businesses must show.",
          "Don't guess the code from someone else's bill. Look up your service in CBIC's rate list, check it with your CA once, and save it against the service in your billing app so nobody types it fresh each time. Installation, repair and annual maintenance may sit under different codes and rates, so check each one you sell."
        ]
      },
      {
        id: "which-tax",
        heading: "CGST and SGST, or IGST?",
        paragraphs: [
          "Section 9 of the CGST Act levies central tax on intra-State supplies; the State charges its own tax alongside it. So a supply within your own State shows two tax lines on the bill: CGST and SGST.",
          "For a supply in the course of inter-State trade, the bill shows integrated tax (IGST) instead, and rule 46 asks you to print the place of supply with the State name. Service businesses often get stuck on site work across a state border, such as a camera job at a factory just outside your State. Place of supply for services has its own rules, so ask your CA about these cases rather than guessing."
        ]
      },
      {
        id: "time-limit",
        heading: "When to issue the invoice",
        paragraphs: [
          "Rule 47 says an invoice for taxable services must be issued within 30 days of the date of supply. Longer limits apply only to banks, insurers and a few other notified classes.",
          "In practice, bill on the day the job is signed off. Waiting until month end means some jobs slip past the limit, and the customer has moved on to other problems by then.",
          "Section 31 also says you may skip a tax invoice for a supply under ₹200, subject to conditions in the rules. For a service business, that's rare enough to ignore."
        ]
      },
      {
        id: "sample",
        heading: "Sample layout for a service invoice",
        paragraphs: ["Every value below is an example. The rate is left as a placeholder because rates are set by notification and can change."],
        table: {
          caption: "Example GST invoice layout for a service job (all values are examples)",
          head: ["Field", "Example"],
          rows: [
            ["Invoice number and date", "SS/26-27/0142, 18 November 2026"],
            ["Supplier", "Shree Secure Systems, Nashik, with GSTIN"],
            ["Customer", "Green Valley Housing Society, Nashik, with GSTIN"],
            ["Description", "Installation of four CCTV cameras and recorder setup"],
            ["SAC", "As listed by CBIC for your service"],
            ["Taxable value", "₹12,000"],
            ["CGST and SGST", "Rates as notified, with amounts"],
            ["Total", "Taxable value plus tax"],
            ["Reverse charge", "No"],
            ["Signature", "Authorised signatory"]
          ]
        },
        after: [
          "If you also sell cameras, cables and a recorder on the same job, those are goods with their own HSN codes and rates. List them as separate lines so the tax on each is clear."
        ]
      },
      {
        id: "before-sending",
        heading: "A two-minute check before you send it",
        list: [
          "Customer's GSTIN matches their letterhead or purchase order",
          "Serial number follows on from the last one, with no gaps",
          "Each line has the right SAC or HSN code",
          "CGST and SGST for in-State work, IGST for inter-State",
          "Totals match the quote the customer approved"
        ]
      }
    ],
    helps:
      "TeamShastra makes GST tax invoices from a job or an approved quotation. It works out CGST and SGST or IGST, lets invoice lines carry HSN or SAC codes, and sends the PDF on WhatsApp. Part payments and pending collections stay on the same invoice, so you can see who still owes you.",
    faqs: [
      {
        question: "What's the difference between HSN and SAC on an invoice?",
        answer:
          "HSN codes classify goods and SAC codes classify services. Rule 46 asks for the code for whatever you supply. If one job has both parts and labour, list each on its own line with its own code."
      },
      {
        question: "Do I need the customer's GSTIN on every invoice?",
        answer:
          "Only if they're registered. For an unregistered customer, rule 46 asks for name, address and State when the value is ₹50,000 or more, or when they ask for those details to be shown. A registered business customer will want their GSTIN printed so they can claim credit."
      },
      {
        question: "How long do I have to raise a GST invoice for a service?",
        answer:
          "Rule 47 sets 30 days from the date of supply for most service businesses. It's safer to bill the same day the job is signed off, so nothing slips past the limit."
      },
      {
        question: "Can my invoice number restart every month?",
        answer:
          "Rule 46 asks for a serial number that's unique for the financial year. You can use more than one series, such as one per branch, but don't repeat a number within the same year."
      },
      {
        question: "Does an e-signed PDF need a physical signature?",
        answer:
          "Rule 46 says a signature or digital signature isn't required on an electronic invoice issued under the Information Technology Act. For paper invoices, sign or have an authorised person sign."
      }
    ],
    sources: [sources.rule46, sources.rule47, sources.cgstSection9, sources.cgstSection31, sources.cbicRates],
    sourcesChecked: published,
    legal: true,
    relatedFeatures: ["gst-billing-invoice", "quotation-estimate-app", "gst-reports-ca-export"],
    relatedIndustries: ["cctv-installer-software"],
    relatedGuides: ["bill-of-supply-vs-tax-invoice", "gstr-1-vs-gstr-3b"]
  },
  {
    slug: "bill-of-supply-vs-tax-invoice",
    category: "gst",
    title: "Bill of Supply vs Tax Invoice: Which to Issue | TeamShastra",
    metaDescription:
      "Bill of supply vs tax invoice: when composition and exempt suppliers issue a bill of supply, what it must show, and where delivery challans and proformas fit.",
    h1: "Bill of supply vs tax invoice: which one should you issue?",
    primaryKeyword: "bill of supply vs tax invoice",
    secondaryKeywords: ["bill of supply format", "composition dealer bill", "delivery challan under GST"],
    datePublished: published,
    dateModified: published,
    summary:
      "In the bill of supply vs tax invoice choice, the law decides for you. A registered person paying normal GST issues a tax invoice. A person on the composition scheme, or one supplying exempt goods or services, issues a bill of supply instead, and it shows no tax. Delivery challans and proformas are different documents again and don't replace either one.",
    sections: [
      {
        id: "why-it-confuses",
        heading: "Why small service firms mix them up",
        paragraphs: [
          "A new RO dealer registers under the composition scheme because his CA said it's simpler. Then a hotel asks him for a GST bill so they can claim credit, and he prints a tax invoice with CGST and SGST on it. That's a mistake the law doesn't allow.",
          "The other way round happens too. An AC repair shop on normal GST hands out a cash memo with no tax shown. Both problems start from not knowing which document belongs to which business."
        ]
      },
      {
        id: "the-rule",
        heading: "What section 31 says",
        paragraphs: [
          "Section 31(3)(c) of the CGST Act says a registered person supplying exempted goods or services, or paying tax under section 10 (the composition levy), shall issue a bill of supply instead of a tax invoice.",
          "Everyone else who's registered and makes taxable supplies issues a tax invoice under section 31 and rule 46. There's no third option where you pick based on what the customer wants."
        ]
      },
      {
        id: "composition",
        heading: "Who's on the composition scheme for services",
        paragraphs: [
          "Section 10(2A) lets a registered person whose aggregate turnover in the preceding financial year didn't exceed ₹50 lakh, and who isn't eligible for the main composition scheme, pay tax at a lower prescribed rate. It's the route most small service businesses use.",
          "There are conditions. Among others, you can't make inter-State outward supplies, and you can't supply services through an e-commerce operator that collects tax at source. If you plan to take jobs in a neighbouring State, talk to your CA before opting in.",
          "Composition suppliers can't charge tax on their bills, and their customers can't claim input credit on them. That's why some business customers prefer a supplier on normal GST."
        ]
      },
      {
        id: "comparison",
        heading: "Side by side",
        table: {
          caption: "Tax invoice and bill of supply compared",
          head: ["Point", "Tax invoice", "Bill of supply"],
          rows: [
            ["Who issues it", "Registered person making taxable supplies", "Composition supplier, or a supplier of exempt goods or services"],
            ["Shows tax rate and amount", "Yes (rule 46)", "No (rule 49 lists no tax fields)"],
            ["Customer can claim input credit", "Yes, if eligible", "No"],
            ["Rule that lists the contents", "Rule 46", "Rule 49"],
            ["Can skip below ₹200", "Yes, with conditions (section 31(3)(b))", "Yes, with conditions (proviso to section 31(3)(c))"]
          ]
        }
      },
      {
        id: "bill-of-supply-contents",
        heading: "What a bill of supply must show",
        paragraphs: ["Rule 49 lists the details. It's a shorter list than a tax invoice."],
        list: [
          "Your name, address and GSTIN",
          "A serial number of up to 16 characters, unique for the financial year",
          "The date of issue",
          "The customer's name, address and GSTIN or UIN, if registered",
          "The HSN or SAC code",
          "A description of the goods or services",
          "The value after any discount",
          "Your signature or digital signature, or that of an authorised person"
        ],
        after: ["Composition suppliers usually also print a line saying they're a composition taxable person. Check the exact wording with your CA."]
      },
      {
        id: "challan-and-proforma",
        heading: "Delivery challans and proforma invoices",
        subsections: [
          {
            heading: "Delivery challan",
            paragraphs: [
              "Rule 55 lets the sender issue a delivery challan instead of an invoice when goods move for job work, or for reasons other than a supply, among a few other cases. A service business uses it when, for example, it sends a faulty compressor to a repair workshop or moves spare stock to a second godown.",
              "Rule 55 lists what the challan needs: its date and number, both parties' details, the HSN code and description, quantity, taxable value, tax rate and amount when the goods go to a consignee for supply, place of supply for inter-State movement, and a signature. It isn't a bill, and it doesn't replace one when you later sell."
            ]
          },
          {
            heading: "Proforma invoice",
            paragraphs: [
              "A proforma is a priced offer, often used when a society or company needs a document to raise an advance or get approval. Treat it like a detailed quote. Issue the real tax invoice or bill of supply when the supply happens, with its own serial number."
            ]
          }
        ]
      },
      {
        id: "switching",
        heading: "If you move from composition to normal GST",
        paragraphs: [
          "Growing businesses often cross the turnover limit or start taking jobs in another State. From the day you move to normal GST, stop issuing bills of supply for taxable work and start issuing tax invoices. Use a fresh series or clearly mark the change so your CA can see the switch in your records."
        ]
      }
    ],
    helps:
      "TeamShastra issues GST tax invoices, proforma invoices (with no stock or payment impact), delivery challans, credit notes and debit notes, each with its own numbering. Quotes turn into invoices once the customer approves, so the proforma and the final bill stay linked. Check with your CA which documents your registration needs.",
    faqs: [
      {
        question: "Can a composition dealer issue a tax invoice?",
        answer:
          "No. Section 31(3)(c) of the CGST Act says a person paying tax under the composition levy issues a bill of supply instead of a tax invoice, and the bill doesn't show tax. The customer can't claim input credit on it."
      },
      {
        question: "Is GST charged on a bill of supply?",
        answer:
          "No tax is shown on a bill of supply. Rule 49 lists its contents and there's no field for the tax rate or amount. A composition supplier pays its own tax to the government at the prescribed rate on its turnover."
      },
      {
        question: "Can a service provider use the composition scheme?",
        answer:
          "Section 10(2A) of the CGST Act allows it for registered persons with aggregate turnover up to ₹50 lakh in the preceding financial year, subject to conditions such as no inter-State outward supplies. Confirm with your CA that you qualify before opting in."
      },
      {
        question: "Is a proforma invoice a tax document?",
        answer:
          "Treat it as an offer, not a bill. It helps the customer get approval or pay an advance. Issue the tax invoice or bill of supply, with its own serial number, when the supply actually happens."
      },
      {
        question: "When do I use a delivery challan?",
        answer:
          "Rule 55 covers moving goods without an invoice in cases such as job work or movement that isn't a supply. Sending a part for outside repair or shifting stock between your own places are common examples for service businesses."
      }
    ],
    sources: [sources.cgstSection31, sources.cgstSection10, sources.rule49, sources.rule46, sources.rule55],
    sourcesChecked: published,
    legal: true,
    relatedFeatures: ["gst-billing-invoice", "quotation-estimate-app"],
    relatedIndustries: ["ro-water-purifier-service-software"],
    relatedGuides: ["gst-invoice-format-for-service-business", "gstr-1-vs-gstr-3b"]
  },
  {
    slug: "gstr-1-vs-gstr-3b",
    category: "gst",
    title: "GSTR-1 vs GSTR-3B: What Each Return Is For | TeamShastra",
    metaDescription:
      "GSTR-1 vs GSTR-3B in plain words: what each return reports, how the due dates work, who files quarterly, and the monthly pack to send your CA.",
    h1: "GSTR-1 vs GSTR-3B: what each return is for",
    primaryKeyword: "GSTR-1 vs GSTR-3B",
    secondaryKeywords: ["difference between GSTR-1 and GSTR-3B", "what to send CA for GST return", "GST return monthly checklist"],
    datePublished: published,
    dateModified: published,
    summary:
      "In GSTR-1 vs GSTR-3B, GSTR-1 lists the details of your outward supplies, invoice by invoice for business customers, while GSTR-3B is the summary return where you report totals, claim input credit and pay the tax. Both are monthly for most regular taxpayers, with a quarterly option for notified classes. Check current due dates on gst.gov.in rather than relying on any article.",
    sections: [
      {
        id: "the-ca-call",
        heading: "The call every owner gets around the 10th",
        paragraphs: [
          "Your CA's assistant phones: send the sales data, the purchase bills, and tell us about that credit note from last month. You forward forty WhatsApp PDFs and hope nothing's missing.",
          "Knowing what each return actually needs lets you send one clean pack instead. You don't have to file yourself. You just need to understand what your CA is filing."
        ]
      },
      {
        id: "gstr-1",
        heading: "GSTR-1: details of what you sold",
        paragraphs: [
          "Section 37 of the CGST Act asks every registered person, apart from a few classes such as composition taxpayers, to furnish details of outward supplies for each tax period. That statement is GSTR-1.",
          "It lists your sales for the period, along with credit notes, debit notes and corrections. Section 37 also says these details are communicated to the people you supplied, which is how your business customers see your invoices for their own credit. If you leave out an invoice, the customer chases you, not the tax office."
        ]
      },
      {
        id: "gstr-3b",
        heading: "GSTR-3B: the summary and the payment",
        paragraphs: [
          "Section 39 asks registered persons, again apart from composition taxpayers and a few others, to furnish a return of inward and outward supplies, input tax credit availed, tax payable and tax paid. GSTR-3B is that return.",
          "It's where the money moves. You report total sales and tax, claim credit on eligible purchases, and pay the difference. A mistake here changes the tax you actually pay, while a mistake in GSTR-1 mostly annoys your customers."
        ]
      },
      {
        id: "side-by-side",
        heading: "Side by side",
        table: {
          caption: "GSTR-1 and GSTR-3B compared",
          head: ["Point", "GSTR-1", "GSTR-3B"],
          rows: [
            ["What it is", "Statement of outward supplies", "Summary return with tax payment"],
            ["Law", "CGST Act, section 37", "CGST Act, section 39"],
            ["Level of detail", "Details of each supply, shared with registered customers", "Totals"],
            ["Input tax credit", "Not claimed here", "Claimed here"],
            ["Tax paid", "No", "Yes"],
            ["Composition taxpayers", "Don't file it", "Don't file it; they file under section 39(2) instead"]
          ]
        }
      },
      {
        id: "due-dates",
        heading: "Due dates and the quarterly option",
        paragraphs: [
          "The Act sets a basic date pattern, but the government can and does change dates by notification, and it can let notified classes of taxpayers file quarterly. Many small businesses file quarterly under such a notification.",
          "Because these dates move, we won't print them here. Check the current due dates on gst.gov.in each month, or ask your CA to send you a calendar at the start of the year. Put a reminder two days before each date so nothing is filed late."
        ]
      },
      {
        id: "corrections",
        heading: "Credit notes and corrections",
        paragraphs: [
          "Service work throws up corrections all the time. A customer disputes two hours of labour, a camera is returned, or an invoice went out with the wrong GSTIN. Don't edit the old invoice and send it again with the same number.",
          "Issue a credit note against the original invoice when the value goes down, or a debit note when it goes up, and send both to your CA with that month's pack. Your CA reports them in the right return. If the customer's GSTIN was wrong, tell your CA quickly, because their credit depends on it."
        ]
      },
      {
        id: "monthly-pack",
        heading: "The monthly pack to send your CA",
        list: [
          "All sales invoices for the month, with customer GSTINs",
          "Credit notes and debit notes issued",
          "Purchase bills from suppliers, so the CA can match credit",
          "Advances received for work not yet done",
          "Any cancelled invoice, with the reason",
          "A note of anything unusual: an inter-State job, a reverse charge purchase, a big refund"
        ],
        ordered: true,
        after: [
          "Send it as one workbook or one folder by the same date each month. Your CA will thank you and, more usefully, make fewer mistakes."
        ]
      },
      {
        id: "composition",
        heading: "If you're on the composition scheme",
        paragraphs: [
          "Composition taxpayers are left out of both sections 37 and 39(1). Section 39(2) asks them to file a return of turnover, inward supplies, tax payable and tax paid for each financial year, and they pay tax on their own schedule. Which forms apply this year is a question for your CA."
        ]
      }
    ],
    helps:
      "TeamShastra prepares GSTR-1, GSTR-3B and GSTR-9 exports plus a full GST workbook from the invoices, credit notes and purchase bills already in the app, so you can send your CA one file. It does not file anything on the GST portal; your CA still reviews and files.",
    faqs: [
      {
        question: "What's the main difference between GSTR-1 and GSTR-3B?",
        answer:
          "GSTR-1 reports the details of your sales, invoice by invoice for registered customers. GSTR-3B is the summary return where you report totals, claim input credit and pay tax. One describes what you sold; the other settles what you owe."
      },
      {
        question: "Do I file GSTR-1 if I had no sales this month?",
        answer:
          "Regular taxpayers generally still file, often as a nil return. Check the current filing rules for nil returns on gst.gov.in or with your CA, because the process has been simplified over time."
      },
      {
        question: "Can I file GST returns quarterly?",
        answer:
          "Section 39 lets the government notify classes of taxpayers who file quarterly, and small businesses are often eligible. Tax may still be paid monthly. Check with your CA whether you qualify; they can set it up."
      },
      {
        question: "What happens if GSTR-1 and GSTR-3B don't match?",
        answer:
          "Mismatches can lead to questions from the department. Often the cause is a missed invoice or credit note. Reconcile both from the same sales list each month and the problem mostly goes away."
      },
      {
        question: "Who should check the returns before filing?",
        answer:
          "Your CA files, but you should look at the sales total and tax payable before they press submit. You know if a big job is missing or a cancelled bill slipped in. Two minutes of your time catches mistakes that take weeks to correct later."
      },
      {
        question: "Does a billing app file returns for me?",
        answer:
          "Not this one. TeamShastra prepares exports and a workbook for your CA, and the filing happens on the GST portal. Some other tools do file, so check what any app you consider actually does."
      }
    ],
    sources: [sources.cgstSection37, sources.cgstSection39, sources.gstPortal],
    sourcesChecked: published,
    legal: true,
    relatedFeatures: ["gst-reports-ca-export", "gst-billing-invoice", "purchase-bills-supplier-management"],
    relatedIndustries: [],
    relatedGuides: ["gst-invoice-format-for-service-business", "bill-of-supply-vs-tax-invoice"]
  }
];
