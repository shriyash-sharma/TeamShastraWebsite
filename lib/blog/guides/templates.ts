import type { Guide } from "../types";

const published = "2026-11-23";

export const templateGuides: Guide[] = [
  {
    slug: "service-report-format",
    category: "templates",
    title: "Service Report Format with Free Template | TeamShastra",
    metaDescription:
      "A service report format for technicians: what to include, a blank template, a filled sample and tips on paper versus digital reports customers trust.",
    h1: "Service report format: a template your customers will actually read",
    primaryKeyword: "service report format",
    secondaryKeywords: ["service report template", "technician visit report", "maintenance report sample"],
    datePublished: published,
    dateModified: published,
    summary:
      "A good service report format records who the customer is, what they complained about, what the technician found and did, the parts used, any readings, before-and-after photos, the customer's sign-off and when the next visit is due. Keep it to one page. The template and sample below are written for small Indian service teams and free to copy.",
    sections: [
      {
        id: "why-it-matters",
        heading: "Why the report matters more than it seems",
        paragraphs: [
          "The service report is the only thing the customer keeps after your technician leaves. For a home, it's proof the AC was serviced. For an office or factory, it's what their admin files for an audit, and often what their accounts team wants before releasing your payment.",
          "It also protects you. Say a customer claims three months later that nobody cleaned the filter: a dated report with a photo settles it in a minute."
        ]
      },
      {
        id: "what-to-include",
        heading: "What every service report should include",
        list: [
          "Your business name, phone and GSTIN if registered",
          "Report number and date, with time in and time out",
          "Customer name, site address and contact person",
          "Equipment: type, brand, model and serial number",
          "The complaint as the customer described it",
          "What the technician found",
          "Work done, in plain words",
          "Parts replaced and consumables used",
          "Readings taken, such as gas pressure, voltage or water TDS",
          "Photos from before and after the work",
          "Recommendations, including anything that needs attention soon",
          "Next visit due date, if there's an AMC",
          "Technician's name, and the customer's name and sign-off"
        ]
      },
      {
        id: "template",
        heading: "A blank service report format you can copy",
        paragraphs: ["Copy the rows below into a document or print it. Change the readings rows to suit your trade."],
        table: {
          caption: "Blank service report template",
          head: ["Field", "Fill in"],
          rows: [
            ["Report no. and date", ""],
            ["Time in / time out", ""],
            ["Customer and site address", ""],
            ["Contact person and phone", ""],
            ["Equipment, brand, model, serial no.", ""],
            ["Complaint reported", ""],
            ["Found on inspection", ""],
            ["Work done", ""],
            ["Parts replaced (with quantity)", ""],
            ["Readings", ""],
            ["Photos attached", "Before: yes / no; After: yes / no"],
            ["Recommendations", ""],
            ["Next visit due", ""],
            ["Technician", ""],
            ["Customer name and sign-off", ""]
          ]
        }
      },
      {
        id: "sample",
        heading: "A filled sample",
        paragraphs: ["This is a made-up sample to show the level of detail that helps. The customer and readings are invented."],
        table: {
          caption: "Sample service report for a split AC (all details are invented)",
          head: ["Field", "Sample entry"],
          rows: [
            ["Report no. and date", "SR-0412, 14 April"],
            ["Time in / time out", "11:10 / 12:25"],
            ["Customer and site address", "Sample Dental Clinic, 2nd floor, MG Road"],
            ["Equipment", "1.5 ton split AC, reception, serial no. noted on unit"],
            ["Complaint reported", "Not cooling well since last week"],
            ["Found on inspection", "Filters choked, outdoor coil dusty, gas pressure low"],
            ["Work done", "Cleaned filters and both coils, fixed a leak at the flare joint, topped up gas"],
            ["Parts replaced", "None; flare nut re-tightened"],
            ["Readings", "Gas pressure before and after, outlet air temperature after 15 minutes"],
            ["Recommendations", "Clean filters every two weeks in summer"],
            ["Next visit due", "July, as per AMC"],
            ["Technician", "Ravi K."],
            ["Customer sign-off", "Clinic manager, on the technician's phone"]
          ]
        },
        after: ["Notice the plain language. \"Fixed a leak at the flare joint\" means something to the customer; \"general service done\" doesn't."]
      },
      {
        id: "writing-tips",
        heading: "Writing it so customers trust it",
        paragraphs: [
          "Write what you saw and did, not what you'd normally do. If you couldn't fix something, say so and say why: part not available, power off at the site, customer declined the quote. An honest \"pending\" is better than a vague \"done\".",
          "Take photos from the same angle before and after. A dusty coil next to a clean one does more for your reputation than a paragraph."
        ]
      },
      {
        id: "paper-or-digital",
        heading: "Paper or digital?",
        table: {
          caption: "Paper versus digital service reports",
          head: ["Point", "Paper book", "Digital PDF"],
          rows: [
            ["Cost to start", "A carbon book", "A phone the technician already has"],
            ["Photos", "Not possible", "Attached to the report"],
            ["Reaching the office", "When the technician returns, if the sheet survives", "Same moment"],
            ["Customer copy", "Carbon copy that fades", "Shared on WhatsApp or email"],
            ["Finding an old report", "Searching boxes", "Search by customer or date"]
          ]
        },
        after: [
          "Paper works for a one-person business. Once you have three or more technicians, or office customers who need reports for audits, digital saves more time than it costs to set up."
        ]
      },
      {
        id: "report-vs-job-card",
        heading: "Service report or job card?",
        paragraphs: [
          "They're different documents. A job card goes with the technician into the job: what to do, where, which parts to carry. The service report goes to the customer after: what was found and done. Our job card guide covers the first one."
        ]
      },
      {
        id: "readings-by-trade",
        heading: "Readings worth recording, trade by trade",
        paragraphs: [
          "Readings turn a report from \"checked and OK\" into evidence. Pick the few that matter for your work and record them every time, so you can compare visits."
        ],
        table: {
          caption: "Example readings to record by trade",
          head: ["Trade", "Readings to note"],
          rows: [
            ["AC service", "Gas pressure, outlet air temperature, running current"],
            ["RO purifier", "Input and output TDS, pump pressure, flow"],
            ["CCTV", "Recording days available, cameras online, disk health"],
            ["Electrical", "Earth resistance, insulation resistance, load on each phase"],
            ["Inverter and battery", "Battery voltage, backup time test, charging current"]
          ]
        }
      }
    ],
    helps:
      "TeamShastra turns any job into a service report PDF using what's already on the job: customer details, the work done, comments and the photos taken on site. Share it on WhatsApp before the technician leaves. Reports stay with the job, so you can find an old one by customer when a question comes up months later.",
    faqs: [
      {
        question: "What should a service report contain?",
        answer:
          "Customer and site, equipment details, the complaint, what was found, work done, parts used, readings, photos, recommendations, next visit date and the customer's sign-off. Keep it to one page."
      },
      {
        question: "Is a digital service report valid without a paper signature?",
        answer:
          "For most customers, a dated digital report with photos and the customer's name works well. If a client's process needs a wet signature, ask them in advance and follow what they need."
      },
      {
        question: "How do I write work done in a service report?",
        answer:
          "In plain words, specific to this visit: what you cleaned, fixed, replaced or measured. Avoid phrases like general service done, which tell the customer nothing."
      },
      {
        question: "Can I use this service report template for free?",
        answer:
          "Yes. Copy the blank template on this page into your own document or print it, and adjust the readings rows for your trade."
      }
    ],
    sources: [],
    sourcesChecked: published,
    legal: false,
    relatedFeatures: ["service-report-pdf"],
    relatedIndustries: [],
    relatedSolutions: ["service-report-software"],
    relatedGuides: ["job-card-format", "train-new-technicians", "get-google-reviews-service-business"]
  },
  {
    slug: "job-card-format",
    category: "templates",
    title: "Job Card Format for Service Technicians | TeamShastra",
    metaDescription:
      "A job card format for service technicians: the fields to include, a blank template, a filled sample, and how the office closes each job card at day end.",
    h1: "Job card format for service technicians heading out to a job",
    primaryKeyword: "job card format for service technicians",
    secondaryKeywords: ["job card template", "work order format", "technician job sheet"],
    datePublished: published,
    dateModified: published,
    summary:
      "A job card is what your technician carries into a job. A practical job card format for service technicians lists the job number, priority, address and contact, the problem as reported, who's assigned, parts to carry, time in and out, status and remarks. The office opens it, the technician updates it on site, and the office closes it at day end.",
    sections: [
      {
        id: "what-it-is",
        heading: "What a job card does",
        paragraphs: [
          "Without a job card, a technician leaves with an address on WhatsApp and a vague \"AC not working\". He reaches the site without the right part, can't find the customer, and calls the office three times. The job card fixes that by putting everything needed for the visit in one place before anyone leaves.",
          "It's an instruction going in. The service report, which the customer receives, is a record coming out."
        ]
      },
      {
        id: "fields",
        heading: "Fields in a job card format for service technicians",
        list: [
          "Job number, so everyone refers to the same job",
          "Date created and the slot promised to the customer",
          "Priority: urgent, normal or scheduled",
          "Customer name, address with landmark, and contact number",
          "Equipment and model, if known",
          "Problem as reported, in the customer's words",
          "Assigned technician and helper",
          "Parts and tools to carry",
          "Time in and time out at the site",
          "Status: open, in progress, waiting for part, completed, cancelled",
          "Payment: collected cash, collected UPI, or pending",
          "Remarks for the office"
        ]
      },
      {
        id: "template",
        heading: "A blank job card template",
        paragraphs: ["Print this as a half-page card or keep it as a form. The office fills the top half; the technician fills the bottom half."],
        table: {
          caption: "Blank job card template",
          head: ["Section", "Field", "Filled by"],
          rows: [
            ["Top", "Job no., date, slot, priority", "Office"],
            ["Top", "Customer, address, landmark, phone", "Office"],
            ["Top", "Equipment and model", "Office"],
            ["Top", "Problem as reported", "Office"],
            ["Top", "Assigned to, parts to carry", "Office"],
            ["Bottom", "Time in, time out", "Technician"],
            ["Bottom", "Work done in brief, parts used", "Technician"],
            ["Bottom", "Status and payment", "Technician"],
            ["Bottom", "Remarks for the office", "Technician"]
          ]
        }
      },
      {
        id: "sample",
        heading: "A filled sample job card",
        paragraphs: ["Here's a made-up example so you can see how short each entry can be."],
        table: {
          caption: "Sample job card (all details are invented)",
          head: ["Field", "Sample entry"],
          rows: [
            ["Job no. and date", "JC-1187, 9 May"],
            ["Slot and priority", "3 to 5 pm, urgent"],
            ["Customer", "Sample residence, flat 402, B wing, near the temple gate"],
            ["Equipment", "Front-load washing machine, model on the panel"],
            ["Problem as reported", "Not draining, shows an error code"],
            ["Assigned to", "Suresh, with helper Amit"],
            ["Parts to carry", "Drain pump, filter cap, hose clamps"],
            ["Time in / out", "3:40 / 4:35"],
            ["Status", "Completed, drain pump replaced"],
            ["Payment", "Collected UPI"],
            ["Remarks", "Customer wants an AMC quote"]
          ]
        },
        after: ["That last remark is a lead. A job card is often where the office learns about the next sale."]
      },
      {
        id: "priorities",
        heading: "Setting priority honestly",
        paragraphs: [
          "If everything is urgent, nothing is. Keep urgent for safety issues, no cooling in peak summer for clinics or server rooms, and anything that stops a business. A dripping tap is normal. A scheduled AMC visit is scheduled.",
          "Tell the customer what the priority means in time: urgent within a few hours, normal within a day or two."
        ]
      },
      {
        id: "closing",
        heading: "How the office closes a job card",
        list: [
          "Check the status is final: completed, cancelled, or waiting with a reason",
          "Check payment is recorded, and add pending ones to the follow-up list",
          "Check parts used match what was issued; unused parts back to stock",
          "Turn any remark into an action: a quote, a callback or an AMC offer",
          "Raise the bill if it wasn't done on site"
        ],
        after: ["Do it every evening. Job cards left open for a week become guesses."]
      },
      {
        id: "going-digital",
        heading: "Moving from paper cards to the phone",
        paragraphs: [
          "Paper cards get wet, lost and filled in late. When the job card lives on the technician's phone, the office sees status changes as they happen, photos are attached without a separate step, and nothing needs retyping at night.",
          "Move one technician first, keep paper for a week as a backup, then move the rest. Most technicians switch happily once they stop getting \"did you finish?\" calls."
        ]
      },
      {
        id: "numbering",
        heading: "Job numbers nobody confuses",
        paragraphs: [
          "Job numbers sound like a small detail until two technicians go to the same customer for the same complaint. Use one running series with a short prefix and the number, and never reuse a number, even for cancelled jobs.",
          "Quote the job number in every message: to the technician, to the customer, on the bill. When a customer calls about \"the visit last Tuesday\", the number gets you to the right card in seconds. Running more than one branch? Add a branch letter to the prefix so numbers never clash, and keep the same format on paper and on the phone so nobody has to translate between two systems."
        ]
      }
    ],
    helps:
      "In TeamShastra every job is a work order: customer, title, problem, category and priority, assigned to one person or a small group. It moves through clear stages, technicians add photos and comments, and when it's completed they record whether the customer paid in cash, by UPI or not yet. The office sees each change the same moment.",
    faqs: [
      {
        question: "What is a job card in a service business?",
        answer:
          "It's the instruction a technician takes into a job: customer, address, problem, priority, parts to carry and who's assigned. The technician updates it on site and the office closes it."
      },
      {
        question: "What's the difference between a job card and a service report?",
        answer:
          "A job card goes into the job with the technician. A service report goes to the customer afterwards, recording what was found and done, usually with photos and readings."
      },
      {
        question: "Who should fill in the job card?",
        answer:
          "The office fills the top part when the call comes in. The technician fills time, work done, parts used, status and payment at the site. The office closes it at day end."
      },
      {
        question: "Should job cards be paper or digital?",
        answer:
          "Paper suits a very small team. With several technicians, a job card on the phone saves calls and late-night entries, and the office sees status as it changes."
      }
    ],
    sources: [],
    sourcesChecked: published,
    legal: false,
    relatedFeatures: ["job-work-order-management"],
    relatedIndustries: [],
    relatedSolutions: ["digital-work-orders"],
    relatedGuides: ["service-report-format", "handle-more-service-calls-per-day", "spare-parts-stock-management"]
  }
];
