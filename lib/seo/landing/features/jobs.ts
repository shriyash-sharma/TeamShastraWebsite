import type { FeatureLanding } from "../types";

export const jobFeatures: FeatureLanding[] = [
  {
    slug: "job-work-order-management",
    name: "Jobs & work orders",
    group: "Jobs & field work",
    hubSummary: "Create a job, assign people, follow its status from assigned to closed, and keep photos and comments on it.",
    lastUpdated: "2026-11-23",
    primaryKeyword: "work order management app",
    secondaryKeywords: ["job management app", "service job tracking app", "job card app for technicians"],
    title: "Work Order Management App for Field Jobs | TeamShastra",
    metaDescription:
      "A work order management app for Indian service teams. Create jobs, assign technicians, add photos and follow each status to closed. Try it free today.",
    h1: "Work order management app that keeps every job in one place",
    intro:
      "Your customer calls at 11 to ask if yesterday's job is finished, and nobody is sure. A work order management app fixes that. In TeamShastra every job has one record with the customer, the people assigned, its status, photos and comments, so you stop digging through calls and chats.",
    keywordHeading: "What the work order management app records for each job",
    problem: [
      "Most small service firms take jobs on the phone. A customer calls the owner, the owner forwards a voice note to a technician, and the job lives in that chat. Two days later nobody remembers the address, the complaint or the promised time.",
      "The customer calls back, the office asks the technician, the technician asks the helper, and the answer still comes back as \"I think it is done\". Jobs fall between people. Some are visited twice. Some are never visited at all. The owner only finds out when an angry customer posts a review or refuses to pay.",
      "A register book does not help much either. It stays in the office, it cannot hold photos, and it never shows who is working on what right now."
    ],
    solution: [
      "In TeamShastra every job is a work order. You add the customer, a title, the problem, a category and a priority. Then you assign one person or a small group. The job moves through clear stages: not assigned, assigned, in progress, on hold, completed and closed. A closed job can be reopened if the customer calls again.",
      "Technicians open the job on their phone, add before and after photos, and write comments as they go. Each change lands on the activity timeline, so you can see who did what and when. Categories such as installation, repair or AMC visit let you filter the list later.",
      "When the technician finishes, the app asks how the customer paid: cash, UPI or still unpaid. That money is tied to the job instead of a note in someone's pocket. The owner and managers can search all work orders by status, customer or person, and share a report with the customer straight from the job."
    ],
    steps: [
      "Open Work orders and tap the add button to create a job for a customer.",
      "Pick a category and priority, write what the customer needs, and assign one or more team members.",
      "The technician taps Start when they reach the site, then adds photos and comments during the visit.",
      "Put the job on hold if a part is missing, with a comment that explains why.",
      "Mark it completed and record whether the customer paid by cash, UPI or nothing yet.",
      "Review the timeline and close the job, or reopen it later if the problem comes back."
    ],
    whoFor:
      "Every open job is visible without calling anyone. Managers use it to assign and reassign work through the day. Technicians use it as their daily job list with the address, notes and photos in one screen. It suits CCTV installers, AC service companies, appliance repair shops, pest control firms and lift maintenance teams.",
    benefits: [
      "Every job has one record that everyone in the company reads from",
      "Before and after photos settle arguments about what was done",
      "On-hold reasons stop jobs from quietly going cold",
      "Collection at completion ties cash and UPI to the job that earned it",
      "Categories and filters make old jobs easy to find months later"
    ],
    limits: [
      "Choosing who goes where is still your call. The app won't pick the technician for you.",
      "No route planning either: working out the shortest drive between sites stays with your team."
    ],
    faqs: [
      {
        question: "Can I assign one work order to two or three technicians?",
        answer:
          "Yes. A job can have more than one assignee, which suits installs that need a technician and a helper. Each person sees the job in their own list, and anyone assigned can add photos and comments. The timeline shows which person made each change, so you still know who did the work."
      },
      {
        question: "What happens when a job is put on hold?",
        answer:
          "On hold is its own status between in progress and completed. Use it when a part has to be ordered or the customer asks you to come back later. Add a comment with the reason. The job stays visible in the open list, so it does not get forgotten the way a paused WhatsApp chat does."
      },
      {
        question: "Can a closed job be opened again?",
        answer:
          "Yes. If the same fault returns, a manager can reopen the closed job instead of creating a new one. The earlier photos, comments and timeline stay on it. This keeps the full story of that complaint together and helps you see repeat problems at one customer site."
      },
      {
        question: "Do technicians need a laptop to update jobs?",
        answer:
          "No. Technicians use the Android app on their own phone. They can start a job, take photos with the camera and type or dictate comments. Owners and office staff can also use the web app at app.teamshastra.com on a computer if they prefer a bigger screen."
      },
      {
        question: "How do I record payment when the job finishes?",
        answer:
          "When a job is marked completed, the technician can note whether the customer paid in cash, paid by UPI, or has not paid yet. This collection is linked to the job. The office can then follow up on unpaid jobs or raise a GST invoice from the same customer record."
      },
      {
        question: "Can I make my own job categories?",
        answer:
          "Yes. Owners and managers set up work order categories that match the business, such as new installation, breakdown, shifting or annual service visit. Categories help with filters and with the category breakdown report, which shows where most of your work comes from."
      }
    ],
    relatedFeatures: ["technician-dispatch-today-board", "service-report-pdf", "job-alerts-notifications", "customer-management"],
    relatedIndustries: ["cctv-installer-software", "appliance-repair-service-software", "lift-elevator-maintenance-software", "maintenance-management-software"],
    relatedGuides: ["job-card-format", "collect-payments-faster-service-business"],
    screenshot: {
      src: "/screenshots/02-work-orders.jpg",
      alt: "Work orders list in the TeamShastra app showing each job with its status, priority, customer name and assigned technicians"
    },
    existingSolutionLink: { href: "/digital-work-orders", label: "digital work orders overview" }
  },
  {
    slug: "technician-dispatch-today-board",
    name: "Technician dispatch & today board",
    group: "Jobs & field work",
    hubSummary: "A morning view of who is free, busy, not in or on leave, next to the jobs waiting for someone.",
    lastUpdated: "2026-11-23",
    primaryKeyword: "technician dispatch board",
    secondaryKeywords: ["daily job board", "field staff dispatch app", "who is free today"],
    title: "Technician Dispatch Board for Daily Jobs | TeamShastra",
    metaDescription:
      "Use the TeamShastra technician dispatch board to see who is free, busy or on leave today and hand out waiting jobs in minutes. Free to start on Android.",
    h1: "A technician dispatch board for planning today's work",
    intro:
      "It's 9:40, three calls are waiting and you can't tell who has reached their first site. TeamShastra's Today board is a technician dispatch board for exactly that morning rush. It shows who's free, busy, not in yet or on leave, and which jobs are still waiting, so you assign from facts instead of guesses.",
    keywordHeading: "How the technician dispatch board shows your day",
    problem: [
      "At 9:30 every morning the owner starts dialling. Who has reached the office? Who is still at yesterday's site? Who said he would come late because of a family function? Each call takes two minutes, and with eight technicians the first hour is gone.",
      "Meanwhile new complaints keep coming in. Without a clear picture, the owner gives the urgent job to the person who picks up the phone first, not the person who is actually nearest or free. One technician gets three jobs while another waits in the shop drinking tea.",
      "Late in the afternoon the same confusion repeats. Nobody is sure which morning jobs are finished, so the evening plan is made on memory too.",
      "Customers feel this too. They are promised a visit before noon and get a call at four saying the technician is still busy elsewhere."
    ],
    solution: [
      "TeamShastra builds the board from data your team already enters. When a technician checks in, they show as available. When they start a job, they move to busy. People who have not checked in show as not in, and anyone with approved leave shows as on leave for the day.",
      "Next to the people, the board lists today's jobs in columns such as not started and in progress. A manager can open any waiting job and assign it to someone who is free. The technician gets a push notification on their phone right away.",
      "Because the board reads live job statuses, the afternoon check is quick. Finished jobs drop out of the in-progress column. Jobs on hold stay visible with their comments. You know where the day stands without calling anyone, and you can plan tomorrow from the same screen.",
      "Because the board is built on real actions, it stays honest even on the busiest day of the season."
    ],
    steps: [
      "Ask every technician to check in when they start work, from the Home screen.",
      "Open the Today board to see who is free, busy, not in or on leave.",
      "Look at the not started column for jobs that still need someone.",
      "Open a waiting job and assign it to a free person; they get an alert.",
      "Check the board again after lunch to see what moved to in progress or completed."
    ],
    whoFor:
      "This page is for owners and managers who hand out work each day. Technicians do not need to do anything extra; their check-in and job updates feed the board. It works well for appliance repair teams, RO service shops, pest control crews and cleaning companies with many short visits.",
    benefits: [
      "The morning round of phone calls is replaced by one screen",
      "Urgent jobs go to someone who is actually free",
      "Leave and late arrivals are visible before you plan",
      "Waiting jobs are easy to spot, so none are left without an owner",
      "The same view helps plan the next morning"
    ],
    limits: [
      "Jobs aren't assigned automatically. A manager looks at the board and decides.",
      "Free and busy come from check-ins and job starts, not from following phones on a map."
    ],
    faqs: [
      {
        question: "How does the board know a technician is free?",
        answer:
          "Anyone who has checked in and isn't working on a started job shows as free. When they tap Start on a job, they become busy. This depends on your team using check-in and job start honestly, which is why many owners make check-in part of the daily routine."
      },
      {
        question: "Does the dispatch board show people on leave?",
        answer:
          "Yes. If a leave, half day or holiday has been marked or approved for someone, the board shows them as on leave for that day. That shows up before you assign, so you don't send work to someone who isn't coming."
      },
      {
        question: "Can managers assign jobs from the Today board?",
        answer:
          "Yes. Managers and owners can open a job from the board and assign it to one or more people. The assigned technician receives a push notification and finds the job in their own list. Technicians themselves cannot reassign other people's work."
      },
      {
        question: "Is this the same as a map of where my staff are?",
        answer:
          "No. The board is a list of people and jobs by status. TeamShastra also has a separate team map that shows pins from check-ins, job starts and job photos. Neither feature follows a phone through the day; they only use moments when the person takes an action."
      },
      {
        question: "Can I see yesterday's board?",
        answer:
          "The board is built for today. For earlier days, use the work orders list with a date filter, the attendance history and the job summary report. Together they show who worked, which jobs were completed and which were left open."
      }
    ],
    relatedFeatures: ["job-work-order-management", "gps-attendance-app", "leave-management", "team-location-map"],
    relatedIndustries: ["appliance-repair-service-software", "ro-water-purifier-service-software", "cleaning-housekeeping-service-software", "hvac-service-management"],
    relatedGuides: ["start-ac-service-business", "handle-more-service-calls-per-day"],
    compareWith: ["teamshastra-vs-zoho-fsm"],
    screenshot: {
      src: "/screenshots/03-todays-jobs.jpg",
      alt: "Today's jobs board in TeamShastra with not started and in progress columns listing the day's field visits"
    }
  },
  {
    slug: "service-report-pdf",
    name: "Service report PDF",
    group: "Jobs & field work",
    hubSummary: "Turn a finished or running job into a PDF report with photos and notes you can share with the customer.",
    lastUpdated: "2026-11-23",
    primaryKeyword: "digital service report",
    secondaryKeywords: ["job sheet app", "service report app", "job completion report"],
    title: "Digital Service Report PDF with Photos | TeamShastra",
    metaDescription:
      "Make a digital service report PDF from any job with photos, notes and timings. Share it with the customer on WhatsApp in seconds. Start free on Android.",
    h1: "Send a digital service report the moment a job is done",
    intro:
      "Before your technician packs up the ladder, the customer can already have the report on WhatsApp. TeamShastra builds a digital service report as a PDF from the job itself: customer details, the work done, comments and the photos taken on site.",
    keywordHeading: "What goes into a digital service report",
    problem: [
      "Many service companies still use carbon-copy job sheets. The technician fills one at the site, the customer signs, and the paper goes into a bag. Half of these sheets reach the office crumpled or not at all.",
      "Weeks later the customer says the camera was never fixed or the filter never changed, and there's nothing to show. Society secretaries and office admins often ask for a report before they release payment. Writing one by hand at night, from memory, is slow and looks unprofessional.",
      "Without proof, you either lose the argument or send a technician back for a free visit.",
      "Clients with offices or factories often need a report on file for their own audits. A handwritten note with a smudged signature rarely satisfies their accounts team, so your bill waits in their queue while you prepare something cleaner."
    ],
    solution: [
      "In TeamShastra the report is built from the work order. Every photo, comment and status change your team added is already there. Tap the report button on a completed job and the app creates a service report PDF. While a job is still open, you can create a progress report instead, which is useful for installations that run over several days.",
      "The PDF shows your company name, the customer, the job title, the people who worked on it and the key notes. Before and after photos are placed in the report so the customer can see the change.",
      "You share it on WhatsApp, email or any app on the phone. The customer gets clear proof of the visit, and you keep the same record in the job for later. If they question the work in three months, you open the job and send the report again.",
      "The PDF also carries your branding, so even a small firm looks organised to a large client."
    ],
    steps: [
      "During the visit, the technician adds before and after photos to the job.",
      "They write short comments about what was checked, replaced or advised.",
      "When the work is finished, mark the job completed.",
      "Tap the service report option on the job to create the PDF.",
      "Share the PDF with the customer on WhatsApp or email from the share sheet.",
      "For long installs, send a progress report while the job is still open."
    ],
    whoFor:
      "Owners use reports to look professional and get paid faster. Technicians use them to show their work without arguing. Customers such as housing societies, offices and factories often need them for their own records. Common users include fire safety firms, lift maintenance companies, IT AMC providers and home automation installers.",
    benefits: [
      "No more lost or unreadable paper job sheets",
      "Photos inside the report act as proof of the work done",
      "Progress reports keep clients updated on multi-day work",
      "Reports can be shared again at any time from the job",
      "Customers who need paperwork for approval get it the same day"
    ],
    limits: [
      "The report is not a GST invoice; raise the bill separately from the billing section.",
      "There's no box for the customer to sign with a finger on the technician's phone."
    ],
    faqs: [
      {
        question: "What is the difference between a service report and a progress report?",
        answer:
          "A service report is for a job that is finished. A progress report can be made while the job is still open. Installers use the progress version to update a client during a project that takes several days, then send the full service report once everything is handed over."
      },
      {
        question: "Can I add photos from the site to the report?",
        answer:
          "Yes. Photos that technicians attach to the job are used in the report. Ask your team to take a clear before photo when they arrive and an after photo before they leave. That simple habit makes the PDF far more useful when a customer has questions."
      },
      {
        question: "Does the customer need the app to open the report?",
        answer:
          "No. The report is a normal PDF file. The customer can open it on any phone or computer from WhatsApp or email. If you use the optional customer portal, customers can also see shared jobs and photos after logging in, but that is not required for the PDF."
      },
      {
        question: "Can I make a report for an old job?",
        answer:
          "Yes. Open the job from the work orders list and create the report again. The PDF is made from what is stored on the job, so it will include the photos and comments that are still attached to it. Handy when a client asks for paperwork months later."
      },
      {
        question: "Is the report the same as a job card?",
        answer:
          "It does the same work as a paper job card but in digital form. Instead of filling a printed sheet, the technician updates the job in the app during the visit, and the report is generated from those updates. Nothing has to be typed twice."
      }
    ],
    relatedFeatures: ["job-work-order-management", "customer-portal", "amc-contract-management"],
    relatedIndustries: ["fire-safety-service-software", "lift-elevator-maintenance-software", "home-automation-installer-software"],
    relatedGuides: ["amc-contract-format", "service-report-format"],
    screenshot: {
      src: "/screenshots/09-activity-photos.jpg",
      alt: "Job activity screen in TeamShastra with before and after site photos that are used in the service report PDF"
    },
    existingSolutionLink: { href: "/service-report-software", label: "service report software page" }
  },
  {
    slug: "job-alerts-notifications",
    name: "Job alerts & notifications",
    group: "Jobs & field work",
    hubSummary: "Phone alerts for new jobs, status changes, comments and team announcements that open the right screen.",
    lastUpdated: "2026-11-23",
    primaryKeyword: "job alert notifications",
    secondaryKeywords: ["push notifications for field staff", "technician job alert app", "new job notification"],
    title: "Job Alert Notifications for Technicians | TeamShastra",
    metaDescription:
      "TeamShastra sends job alert notifications to technicians when a job is assigned, updated or commented on. One tap opens the job. Try it free on Android.",
    h1: "Job alert notifications your field team will not miss",
    intro:
      "Nobody should have to phone a technician only to say a new job is waiting. TeamShastra sends job alert notifications to the people involved. A new assignment, a status change or a fresh comment arrives as a push alert, and one tap opens that exact job.",
    keywordHeading: "When job alert notifications are sent",
    problem: [
      "A job given on WhatsApp sits between family forwards, cricket scores and group photos. The technician sees it an hour later, or not at all. The owner thinks the work is moving. The customer is still waiting at home.",
      "Updates get lost too. The office adds a note that the customer changed the time, but the technician never reads it and arrives at the wrong hour. A manager asks a question on the job and the reply never comes.",
      "Calling each person for each small change takes the whole day and still leaves gaps.",
      "New staff suffer most. They are added to five groups on day one, cannot tell which message is an order, and wait for someone to call them. Meanwhile a customer who was told \"he is on the way\" keeps refreshing their phone."
    ],
    solution: [
      "TeamShastra uses push notifications that come from the app itself, so they do not mix with personal chats. When a manager assigns a job, the technician gets an alert at once. When someone changes the status or adds a comment, the people on that job are told.",
      "Owners can also send announcements to the team, such as a holiday notice or a reminder about a safety rule. Every notification opens the screen it is about. A tap on a new comment goes to that job's thread. A tap on an assignment opens the job with the address and notes.",
      "Alerts are also kept inside the app in a notification list. If a technician cleared the phone tray by mistake, they can still see what came in today.",
      "Each person can also adjust their own notification preferences. A manager who does not want every comment can turn some off, while technicians keep job alerts on so they never miss a new assignment."
    ],
    steps: [
      "Install the Android app and allow notifications when the phone asks.",
      "A manager assigns a job; the technician's phone shows the alert.",
      "The technician taps the alert and the job opens with all its details.",
      "Replies and status changes alert the other people on the job.",
      "Open the notification list in the app to see anything missed."
    ],
    whoFor:
      "Technicians rely on alerts to know what to do next. Managers rely on them to hear back when a job moves. Owners use announcements for the whole team. Busy teams with many short visits, such as appliance repair, RO service and pest control businesses, get the most from it.",
    benefits: [
      "Work instructions do not get buried in personal chats",
      "Changes to time or scope reach the technician quickly",
      "Questions on a job get answered in the same thread",
      "One tap from the alert opens the right screen",
      "Team-wide announcements reach everyone at once"
    ],
    limits: [
      "Alerts are push notifications inside the app, not automatic WhatsApp or SMS messages to customers.",
      "If a phone has notifications turned off, the person will only see updates when they open the app."
    ],
    faqs: [
      {
        question: "Which events send a push notification?",
        answer:
          "The main ones are a new job assignment, a change in job status, a new comment on a job you are part of, and announcements from the company. The goal is to alert the people involved in a job, not to send every update to everybody in the company."
      },
      {
        question: "Do customers get these alerts too?",
        answer:
          "Customers who use the optional customer portal can see the jobs you share with them and reply there. The push alerts described on this page are for your own staff. Customers don't get automatic SMS or WhatsApp messages from TeamShastra."
      },
      {
        question: "What should I do if a technician says they get no alerts?",
        answer:
          "First check that the app is allowed to show notifications in the phone settings. Some phones also stop apps in the background to save battery, so allow TeamShastra to run normally. Make sure the person is logged in to the right company if they belong to more than one."
      },
      {
        question: "Can I send a message to the whole team at once?",
        answer:
          "Yes. Owners can post an announcement that goes out as a notification to the team. Use it for shop timings, holiday notices or new rules. It is better than a WhatsApp group because it stays with company work and does not mix with personal chat."
      },
      {
        question: "Does tapping an alert open the right page?",
        answer:
          "Yes. Each notification carries a link to the job or screen it is about. Tap a new assignment and you land on that job. A manager who taps a reply lands in the comment thread. Nobody has to search the job list to find it."
      }
    ],
    relatedFeatures: ["job-work-order-management", "technician-dispatch-today-board", "roles-permissions"],
    relatedIndustries: ["pest-control-service-software", "appliance-repair-service-software", "ro-water-purifier-service-software"],
    relatedGuides: ["handle-more-service-calls-per-day"],
    screenshot: {
      src: "/screenshots/11-quick-actions.jpg",
      alt: "TeamShastra home quick actions that a technician reaches after opening a job alert, with shortcuts to jobs, customers and team"
    }
  }
];
