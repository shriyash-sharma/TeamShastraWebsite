export const appScreenshots = [
  {
    src: "/screenshots/01-home-dashboard.jpg",
    title: "Home dashboard",
    alt: "TeamShastra home dashboard with profile, check-in, and job overview",
    caption: "Check in, create a job, and see today's overview."
  },
  {
    src: "/screenshots/02-attendance-checkin.jpg",
    title: "Attendance",
    alt: "TeamShastra attendance screen showing on-duty status and check-out",
    caption: "On-duty status, location, and check-out from the field."
  },
  {
    src: "/screenshots/03-home-overview.jpg",
    title: "Overview",
    alt: "TeamShastra home overview with job counts and quick actions",
    caption: "Job counts and quick actions on one screen."
  },
  {
    src: "/screenshots/04-recent-work-orders.jpg",
    title: "Recent jobs",
    alt: "Recent work orders listed on the TeamShastra home screen",
    caption: "Recent work orders without leaving Home."
  },
  {
    src: "/screenshots/05-work-orders.jpg",
    title: "Work orders",
    alt: "TeamShastra work orders list with status, assignee, and search",
    caption: "Search, filter, and assign jobs."
  },
  {
    src: "/screenshots/06-team.jpg",
    title: "Team",
    alt: "TeamShastra team members list with roles and status",
    caption: "Invite technicians and managers."
  },
  {
    src: "/screenshots/07-customers.jpg",
    title: "Customers",
    alt: "TeamShastra customers directory",
    caption: "Keep customers next to the jobs they need."
  }
] as const;

export const heroScreenshots = [
  appScreenshots[4],
  appScreenshots[0],
  appScreenshots[5]
] as const;
