export const appScreenshots = [
  {
    src: "/screenshots/01-home-dashboard.jpg",
    title: "Home dashboard",
    alt: "TeamShastra home dashboard with check-in, create job, and active orders overview",
    caption: "Start the day with check-in, new jobs, and live order counts."
  },
  {
    src: "/screenshots/11-quick-actions.jpg",
    title: "Quick actions",
    alt: "TeamShastra home quick actions for jobs, quotations, invoices, customers, and team",
    caption: "Jump to the next action without digging through menus."
  },
  {
    src: "/screenshots/02-work-orders.jpg",
    title: "Work orders",
    alt: "TeamShastra work orders list with status, priority, customer, and assignees",
    caption: "Search, filter, and keep every job moving."
  },
  {
    src: "/screenshots/03-todays-jobs.jpg",
    title: "Today's jobs",
    alt: "TeamShastra today's jobs board with not started and in progress columns",
    caption: "See what is queued and what is already in progress."
  },
  {
    src: "/screenshots/12-attendance-checkin.jpg",
    title: "Attendance",
    alt: "TeamShastra attendance check-in with on-duty status",
    caption: "Field check-in and check-out when the shift starts."
  },
  {
    src: "/screenshots/04-team-attendance.jpg",
    title: "Team attendance",
    alt: "TeamShastra team attendance screen showing who is on duty or not in",
    caption: "Managers see who is on duty across the team."
  },
  {
    src: "/screenshots/05-sales-quotations.jpg",
    title: "Sales",
    alt: "TeamShastra sales quotations list with totals and status",
    caption: "Quotations ready to send and track."
  },
  {
    src: "/screenshots/06-expenses.jpg",
    title: "Expenses",
    alt: "TeamShastra expenses list with categories and amounts",
    caption: "Capture field spend with clear categories."
  },
  {
    src: "/screenshots/07-team-members.jpg",
    title: "Team",
    alt: "TeamShastra team members list with roles and active status",
    caption: "Owners, managers, and technicians in one roster."
  },
  {
    src: "/screenshots/08-customers.jpg",
    title: "Customers",
    alt: "TeamShastra customers directory with phone, email, and address",
    caption: "Customer records next to the jobs they need."
  },
  {
    src: "/screenshots/09-activity-photos.jpg",
    title: "Job photos",
    alt: "TeamShastra work order activity with before and after photos",
    caption: "Before/after proof stays on the job timeline."
  },
  {
    src: "/screenshots/10-reports-summary.jpg",
    title: "Reports",
    alt: "TeamShastra reports summary with charts for jobs and revenue",
    caption: "A clear view of throughput and revenue."
  }
] as const;

/** Three phones in the homepage hero — front phone is index 1. */
export const heroScreenshots = [
  appScreenshots[2], // work orders
  appScreenshots[0], // home dashboard (front)
  appScreenshots[6] // sales
] as const;
