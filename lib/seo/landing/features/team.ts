import type { FeatureLanding } from "../types";

export const teamFeatures: FeatureLanding[] = [
  {
    slug: "gps-attendance-app",
    name: "GPS attendance with selfie",
    group: "Team & attendance",
    hubSummary: "Check in and out with location saved at that moment, an optional office radius and an optional live selfie.",
    lastUpdated: "2026-11-23",
    primaryKeyword: "GPS attendance app",
    secondaryKeywords: ["selfie attendance app", "staff hajri app", "field staff attendance"],
    title: "GPS Attendance App with Selfie for Staff | TeamShastra",
    metaDescription:
      "TeamShastra is a GPS attendance app with optional selfie and office radius. Location is saved only at check-in and check-out. Try it free for your staff.",
    h1: "GPS attendance app with selfie check-in for field staff",
    intro:
      "TeamShastra works as a GPS attendance app for teams that do not sit in one office. Staff check in from their phone, and the app saves where they were at that moment. You can add a selfie rule or an office distance rule if you need more proof.",
    keywordHeading: "How the GPS attendance app checks each punch",
    problem: [
      "Your technician says he reached the site at 10. The customer says nobody came till 12. With a paper register or a \"reached\" message on WhatsApp, you cannot check who is right.",
      "Some staff ask a friend to mark them present. Others punch in from home. At month end you argue about half days, and salary is paid on trust, not on proof.",
      "Biometric machines do not help a field team either. They only work if everyone comes to the office first, and most of your work starts at customer sites across the city.",
      "Asking every person to send a location pin on WhatsApp sounds simple, but nobody checks those pins later. They scroll away within a day, and the proof is gone just when the salary question comes up."
    ],
    solution: [
      "Staff tap Check in on the Home screen. TeamShastra saves the location only at that moment, not all day. You can make GPS compulsory, allow check-in only within a set distance of your office pins, and ask for a live selfie (gallery photos are not accepted).",
      "If the phone has no network, the check-in is saved and synced later. That matters in basements, lifts and rural sites where signal drops.",
      "Managers see who is on duty today, and owners can correct a wrong entry with a reason that stays on record. Every person also has an attendance history, so you can open any day of the month and see the check-in and check-out times.",
      "You can set more than one office pin. A company with a main shop and a godown can allow check-in at either place, each with its own radius. Field staff who start at a customer site can be allowed to check in from anywhere, with GPS saved for your review."
    ],
    steps: [
      "In Company settings, choose whether GPS is required and whether a selfie is needed.",
      "Add your office locations and the allowed distance around each one, if you want an office rule.",
      "Staff tap Check in on the Home screen when the shift starts.",
      "The app captures the location and, if turned on, a live selfie from the front camera.",
      "Managers open Team attendance to see who is on duty, not in, or on leave.",
      "Owners fix a wrong punch in the correction screen and type the reason."
    ],
    whoFor:
      "Owners use it to pay salary on proof. Managers use it each morning to see who has started. Technicians use it to show they were on time, which protects them in a dispute too. It fits CCTV installers, cleaning and housekeeping companies, fire safety teams and electricians who start at different sites.",
    benefits: [
      "Proxy and home check-ins become easy to spot",
      "Selfie and office radius rules are optional, so you choose the level of control",
      "Check-ins made without network are not lost",
      "Corrections leave a reason behind, so the record stays honest",
      "Attendance feeds straight into staff salary for the month"
    ],
    limits: [
      "It does not follow staff on a map through the day; location is saved only when they punch.",
      "It does not connect to fingerprint or face-reading machines on the office wall."
    ],
    faqs: [
      {
        question: "Does the app keep checking my staff's location after they check in?",
        answer:
          "No. Location is taken at check-in and at check-out. Nothing runs in between to follow the phone. Many staff are more willing to use an attendance app once they understand this. If you also use the team map, it only shows pins from moments when the person checks in, starts a job or adds a job photo."
      },
      {
        question: "Can staff use a photo from the gallery for the selfie?",
        answer:
          "No. When the selfie rule is on, the app opens the front camera and asks for a live photo at the time of check-in. Pictures already saved in the gallery cannot be picked. This stops people from reusing an old photo to mark attendance."
      },
      {
        question: "How does the office radius rule work?",
        answer:
          "You drop one or more pins for your offices and set how many metres around each pin count as inside. With the rule turned on, a check-in outside every allowed circle is not accepted. Field teams that start at customer sites usually keep this rule off and rely on the saved location instead."
      },
      {
        question: "What happens if a technician checks in with no mobile signal?",
        answer:
          "The check-in is saved on the phone with its time and location. When the phone gets network again, it syncs to your company. The time shown is the time they actually tapped, not the time the sync happened, so a weak signal does not make anyone look late."
      },
      {
        question: "Can I change a wrong check-in time?",
        answer:
          "Yes. Owners can correct an attendance entry or add a missing session for a person. A reason must be written for the change, and that reason stays with the record. This keeps things fair when a phone died or someone forgot to check out at night."
      },
      {
        question: "Is this suitable for staff who never come to the office?",
        answer:
          "Yes. Keep the office radius rule off and turn on GPS and selfie. Staff check in from the first customer site of the day. You still get a time, a location and a face for each punch, which is usually enough to settle doubts at month end."
      }
    ],
    relatedFeatures: ["leave-management", "staff-salary-payroll", "team-location-map", "offline-field-service-app", "hindi-multi-language-app"],
    relatedIndustries: ["cleaning-housekeeping-service-software", "cctv-installer-software", "fire-safety-service-software"],
    screenshot: {
      src: "/screenshots/12-attendance-checkin.jpg",
      alt: "Attendance check-in screen in TeamShastra showing the on-duty status after a staff member taps Check in"
    },
    existingSolutionLink: { href: "/attendance-management-software-india", label: "attendance management software overview" }
  },
  {
    slug: "leave-management",
    name: "Leave management",
    group: "Team & attendance",
    hubSummary: "Staff request leave from the app; managers mark leave, half day, absent or holiday, with a yearly paid-leave quota.",
    lastUpdated: "2026-11-23",
    primaryKeyword: "leave management app",
    secondaryKeywords: ["staff leave tracker", "half day leave record", "chutti register app"],
    title: "Leave Management App for Small Teams | TeamShastra",
    metaDescription:
      "A simple leave management app for small teams. Staff ask for leave on the phone, managers approve it, and half days count correctly in salary. Start free.",
    h1: "Leave management app for staff, half days and holidays",
    intro:
      "TeamShastra includes a leave management app inside the same tool your team uses for jobs and attendance. Staff request a day off on the phone. Managers approve it or mark leave themselves, and the record flows into salary.",
    keywordHeading: "What the leave management app tracks",
    problem: [
      "In a small business, leave is usually a word in passing. \"Sir, I will not come tomorrow.\" The owner agrees, forgets, and at month end the staff member says it was paid leave while the owner remembers it as unpaid.",
      "Half days are worse. A technician leaves at two for a hospital visit. Nobody writes it down. Was it a half day or a full day? Should the salary be cut? Each case becomes a small fight, and good people feel cheated.",
      "Festival holidays add another layer. Some are paid, some are not, and every year the rules are argued again.",
      "When two people take leave on the same busy day, the owner finds out only at 10 AM, when jobs are already promised. A written request a day earlier would have allowed a quick plan, but there is no simple way to ask for one."
    ],
    solution: [
      "In TeamShastra a staff member opens Request leave, picks the date and type, and writes a reason. The owner or manager sees the request and approves or rejects it. Managers can also mark leave, half day, absent or holiday directly for anyone on the team.",
      "Owners can set a yearly paid-leave quota for the company and give a different number to one person if needed. The app keeps count, so you can see how much paid leave someone has used.",
      "Company holidays are added once and can be marked paid or unpaid, including a half holiday. All of this sits next to attendance. When you open staff salary for the month, the days of leave, half days, holidays and absences are already counted. Nobody needs to search a diary to work out pay.",
      "Managers also have a team attendance screen to mark everyone for a day at once. It skips people who already checked in or have leave, which saves time on busy mornings."
    ],
    steps: [
      "Set the yearly paid-leave quota in the leave or salary settings.",
      "Add company holidays and mark each one paid or unpaid.",
      "Staff open Request leave, choose the date and type, and add a reason.",
      "The manager approves or rejects the request from the app.",
      "Managers use Mark leave for anyone who did not ask in advance.",
      "Open staff salary at month end; leave and half days are already in the count."
    ],
    whoFor:
      "Owners use it to stop salary disputes. Managers use it to plan the week knowing who will be away. Staff use it to ask for leave formally and keep their own record. It helps cleaning companies, RO service teams, inverter dealers and any business with ten or more people on the field.",
    benefits: [
      "Every leave request has a date, a type and a reason",
      "Half days are recorded on the day, not argued about later",
      "Paid leave balance is clear to owner and staff",
      "Holidays are set once for the whole company",
      "Salary for the month already reflects every leave entry"
    ],
    limits: [
      "It does not apply state-wise holiday lists for you; owners add their own holidays.",
      "It does not track leave encashment or gratuity."
    ],
    faqs: [
      {
        question: "Can staff apply for leave from their phone?",
        answer:
          "Yes. Staff open Request leave in the app, choose the day, pick full day or half day, and type a short reason. The request goes to the owner and managers. Once approved, it shows on the Today board as on leave and is counted in attendance for that day."
      },
      {
        question: "How is a half day counted in salary?",
        answer:
          "A half day is stored as its own entry, separate from full leave and absence. When the owner opens staff salary for the month, half days are counted as half of a working day. The exact effect depends on the wage type you set for that person, such as monthly or per day."
      },
      {
        question: "Can different staff have different paid leave limits?",
        answer:
          "Yes. You set a yearly paid-leave number for the company. If one senior technician has a different arrangement, you can give that person their own number. The app then tracks how many paid days each person has used against their own limit."
      },
      {
        question: "What is the difference between leave and absent?",
        answer:
          "Leave is a planned day off that was asked for or approved. Absent means the person did not come and did not have approved leave. Keeping them separate helps you see patterns, such as someone who often skips work without informing, and treat it fairly in salary."
      },
      {
        question: "Can I mark a holiday as unpaid?",
        answer:
          "Yes. When you add a company holiday you choose whether it is paid or unpaid. You can also add a half holiday, for example on a festival evening. Staff salary uses these rules automatically when you open the month. Holiday rules apply to the whole team."
      }
    ],
    relatedFeatures: ["gps-attendance-app", "staff-salary-payroll", "technician-dispatch-today-board"],
    relatedIndustries: ["cleaning-housekeeping-service-software", "ro-water-purifier-service-software", "inverter-battery-ups-service-software"],
    screenshot: {
      src: "/screenshots/04-team-attendance.jpg",
      alt: "Team attendance screen in TeamShastra listing which staff are on duty, not in or on approved leave today"
    }
  },
  {
    slug: "team-location-map",
    name: "Team location map",
    group: "Team & attendance",
    hubSummary: "Map pins from check-ins, job starts and job photos, so you see where work happened without all-day tracking.",
    lastUpdated: "2026-11-23",
    primaryKeyword: "field staff location map",
    secondaryKeywords: ["technician location app", "team map for service business", "where is my technician"],
    title: "Field Staff Location Map Without Tracking | TeamShastra",
    metaDescription:
      "See a field staff location map built from check-ins, job starts and job photos. Know where work happened without following phones all day. Try it free.",
    h1: "A field staff location map that respects privacy",
    intro:
      "The team map in TeamShastra is a field staff location map built from real work moments. It places a pin when someone checks in, starts a job or adds a job photo. You see where work happened without watching anyone all day.",
    keywordHeading: "Where the field staff location map gets its pins",
    problem: [
      "Owners want to know their team is where it should be. A customer in one corner of the city says the technician never came. Another technician claims he spent two hours in traffic. Without any location record, you cannot check either story.",
      "The usual fix is a tracking app that follows the phone every minute. Staff hate it. It drains the battery, feels like spying, and good technicians leave for employers who trust them. Some switch off location, and you are back to zero.",
      "What most owners actually need is simpler: proof of where key moments of the day took place.",
      "Asking the technician to share a live location on WhatsApp works once or twice. After that the owner forgets to check, the technician forgets to share, and the habit fades within a week."
    ],
    solution: [
      "TeamShastra only records location at moments that matter for work. A pin is added when a person checks in for the day, when they tap Start on a job, and when they attach a photo to a job. The team map shows these pins with the person's name and the time.",
      "If you need a fresh update, you can ask the team for a work-status update from the map. Staff answer from their phone. Nothing runs quietly in the background.",
      "This gives a fair middle path. You can check that a job was started at the customer's address. Staff know exactly when their location is used, because it is always tied to something they tapped. Combined with photos on the job, it usually settles any doubt about whether a visit happened.",
      "The map can also be turned off as a module if a company does not want it at all. Attendance history and job photos continue to work."
    ],
    steps: [
      "Make sure check-in and job photos are part of your team's routine.",
      "Open the team map from the Team section.",
      "Look at the pins for today: check-in, job start and job photo points.",
      "Tap a pin to see the person, the action and the time.",
      "Send a request for a work-status update if you need to hear from someone now."
    ],
    whoFor:
      "Owners and managers use the map to review the day and answer customer complaints. Technicians benefit because their location is only used for work actions, never at lunch or at home. It is useful for CCTV installers, pest control teams, lift maintenance crews and appliance repair technicians who move between many sites.",
    benefits: [
      "Location proof for key work moments, not a minute-by-minute trail",
      "Staff are more willing to use it because it respects their privacy",
      "Customer complaints about missed visits can be checked quickly",
      "Pins sit next to job photos and timings for a full picture",
      "No extra battery drain from constant location checks"
    ],
    limits: [
      "It does not show a moving dot or the route a person drove.",
      "If a technician never checks in or starts the job, there will be no pin for that work."
    ],
    faqs: [
      {
        question: "Does the team map show where my technician is right now?",
        answer:
          "Not continuously. It shows the latest pin from an action the person took, such as starting a job or adding a photo. If you need to know what someone is doing now, use the request for a work-status update, and they can reply from the app."
      },
      {
        question: "Why does TeamShastra not follow staff all day?",
        answer:
          "Most field service owners need proof of work, not a full trail of personal movement. Constant tracking drains batteries and makes good staff uncomfortable. Pins from check-ins, job starts and job photos give the proof you need while keeping trust inside the team."
      },
      {
        question: "Can the team map be switched off?",
        answer:
          "Yes. The team map is one of the modules an owner can turn off for the company. Attendance and job photos will still work. Some owners keep it off and rely only on check-in locations in attendance history. You can turn it back on later."
      },
      {
        question: "Do staff know when their location is captured?",
        answer:
          "Yes. Location is only taken when they do something on purpose, like tapping Check in, tapping Start on a job, or taking a job photo. Explain this to your team when you start. Clear rules make adoption much smoother than a hidden tracker."
      },
      {
        question: "Can I see pins from last week?",
        answer:
          "The map is built for checking recent work. For older days, open the person's attendance history to see check-in locations, and open the job to see when it was started and which photos were added. Together these give the same proof for past dates."
      }
    ],
    relatedFeatures: ["gps-attendance-app", "job-work-order-management", "technician-dispatch-today-board"],
    relatedIndustries: ["pest-control-service-software", "lift-elevator-maintenance-software", "cctv-installer-software"],
    screenshot: null,
    existingSolutionLink: { href: "/field-employee-tracking", label: "field employee tracking page" }
  },
  {
    slug: "roles-permissions",
    name: "Roles & permissions",
    group: "Team & attendance",
    hubSummary: "Owner, manager and technician roles decide who sees money, salary and settings, plus an optional customer login.",
    lastUpdated: "2026-11-23",
    primaryKeyword: "staff roles and permissions",
    secondaryKeywords: ["owner manager technician roles", "user access control app", "limit staff access"],
    title: "Staff Roles and Permissions in One App | TeamShastra",
    metaDescription:
      "Set staff roles and permissions for owners, managers and technicians in TeamShastra so each person sees only what they need. Invite your team free today.",
    h1: "Staff roles and permissions for owner, manager and technician",
    intro:
      "TeamShastra gives each person a role, and staff roles and permissions decide what they can see and change. Owners see everything, including money and salary. Technicians see their own work. Managers sit in between.",
    keywordHeading: "How staff roles and permissions are split",
    problem: [
      "Shared logins are common in small firms. Everyone uses the owner's phone number to open the billing software. A technician who only needed an address can also see every customer's dues, every supplier rate and the profit on each job.",
      "When someone leaves, they still know the password. Data walks out with them. Salary figures, which should be private, become gossip in the team.",
      "On the other side, a manager who needs to assign jobs cannot do it without asking the owner, because the tool has only one level of access.",
      "Owners also end up doing everything themselves. Without separate logins, they cannot hand over job assignment or attendance to a trusted supervisor. Every small change still comes to their phone, even when they are travelling or with family."
    ],
    solution: [
      "TeamShastra has clear roles. The owner controls the company, settings, staff salary and every report. A manager runs day-to-day work: creating and assigning jobs, reviewing attendance and leave, and, when the sales module is on, handling bills and purchases. A technician sees jobs assigned to them, their own attendance, their own expenses, their own payslips and their own performance.",
      "There is also a customer role for the optional portal. A customer user can only see the jobs you share with them and the photos and comments you mark as visible.",
      "You invite people by phone number, and each person logs in with their own account. If someone leaves, deactivate them and their access stops. Members can upload documents such as ID proof on their profile for the owner to approve, so papers are in one place when needed.",
      "Because every person has their own login, the activity timeline on each job shows exactly who made each change."
    ],
    steps: [
      "Open Team and tap to add a new member.",
      "Enter their name and phone number and choose owner, manager or technician.",
      "The person installs the app and logs in with their own number.",
      "Ask the member to upload ID documents on their profile, then approve them.",
      "When someone leaves, open their profile and deactivate them."
    ],
    whoFor:
      "Owners use roles to keep money and salary private. Managers get enough access to run the day without calling the owner for every small change. Technicians get a clean app that shows only their work. It matters most for growing firms such as IT AMC providers, fire safety companies, lift maintenance firms and home automation installers.",
    benefits: [
      "Salary, profit and supplier rates stay with the owner",
      "Managers can run the daily plan on their own",
      "Each person has their own login, so actions are traceable",
      "Leavers lose access the moment they are deactivated",
      "Customers can be given a narrow view of their own jobs"
    ],
    limits: [
      "Roles are fixed sets; you cannot design a custom role screen by screen.",
      "Owners can turn whole modules off for the company, but not hide one module from one person only."
    ],
    faqs: [
      {
        question: "Can a technician see the company's bills and income?",
        answer:
          "No. Technicians see jobs assigned to them, their own attendance and leave, the expenses they logged, their own paid payslips and their own performance. Sales, purchases, team lists and company reports are not part of the technician role, so bills and income stay out of view."
      },
      {
        question: "What can a manager do that a technician cannot?",
        answer:
          "Managers can create jobs, assign and reassign them, see the whole team on the Today board, review attendance and mark leave or absence. If the sales module is on, they can also work on quotations, invoices and purchases. Staff salary and company settings stay with the owner only."
      },
      {
        question: "Can a manager see staff salary?",
        answer:
          "No. Staff salary is an owner-only area. Managers can review attendance and leave, which feed into pay, but they cannot open salary runs, set wages or see payslips of other people. This keeps pay private even when a manager handles the daily team."
      },
      {
        question: "What happens to a job when I deactivate a technician?",
        answer:
          "Their past jobs, photos and comments stay in the company records with their name. They simply cannot log in anymore. Reassign any open jobs to another person so the work continues without a gap. You can also reactivate the person later if they rejoin, and their old records are still there."
      },
      {
        question: "Can I keep ID proof of staff in the app?",
        answer:
          "Yes. Each member can upload documents such as an Aadhaar copy or a joining letter on their own profile, and the owner approves them. This keeps important papers in one place instead of a drawer or a personal phone, and you know which staff still have papers pending."
      }
    ],
    relatedFeatures: ["customer-portal", "staff-salary-payroll", "multi-company-management", "job-alerts-notifications"],
    relatedIndustries: ["it-networking-amc-software", "fire-safety-service-software", "home-automation-installer-software"],
    screenshot: {
      src: "/screenshots/07-team-members.jpg",
      alt: "Team members list in TeamShastra with each person's role such as owner, manager or technician and their active status"
    }
  }
];
