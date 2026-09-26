import type { CityProfile } from "../types";
import { buildCityProfile } from "./build-city";

/** Shared benefits copy used across city pages. */
export const standardBenefits = [
  "Issue GST invoices, quotations, and WhatsApp PDFs from the same workspace as jobs",
  "Track field expenses, cash float, bank balances, and purchase bills without a second app",
  "Reduce paperwork and manual coordination across field teams",
  "Keep AMC contracts and due visits against each customer instead of a spreadsheet",
  "Capture before/after photos as proof of completed work",
  "Track attendance with optional GPS check-in — no all-day background tracking",
  "Run payroll from the same attendance data already tracked for the team",
  "Monitor operations from the web dashboard and Android app"
];

export const tier1Cities: CityProfile[] = [
  buildCityProfile({
    slug: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    tier: "tier-1",
    localAreas: ["Andheri", "Powai", "Navi Mumbai", "BKC", "Lower Parel", "Malad", "Goregaon", "Vikhroli"],
    nearbyCitySlugs: ["pune", "ahmedabad", "surat"],
    flavorChallenge: "Long commute times across the city make it hard for a manager to know where a technician actually is without a phone call",
    caseStudyCompany: "Harborline Field Services"
  }),
  buildCityProfile({
    slug: "delhi",
    name: "Delhi",
    state: "Delhi NCR",
    tier: "tier-1",
    localAreas: ["Connaught Place", "Dwarka", "Rohini", "Okhla", "Nehru Place", "Saket", "Mayur Vihar", "Karol Bagh"],
    nearbyCitySlugs: ["jaipur", "lucknow"],
    flavorChallenge: "NCR businesses often run technicians across Delhi and neighbouring cities from one small office, with no shared view across the group",
    caseStudyCompany: "Capital Field Solutions"
  }),
  buildCityProfile({
    slug: "pune",
    name: "Pune",
    state: "Maharashtra",
    tier: "tier-1",
    localAreas: ["Hinjewadi", "Kharadi", "Magarpatta", "Hadapsar", "Baner", "Wakad", "PCMC", "Chakan"],
    nearbyCitySlugs: ["mumbai", "ahmedabad"],
    flavorChallenge: "IT-park and industrial-estate clients expect faster response than a phone-based dispatch process can reliably deliver",
    caseStudyCompany: "Deccan Service Networks"
  }),
  buildCityProfile({
    slug: "bengaluru",
    name: "Bengaluru",
    state: "Karnataka",
    tier: "tier-1",
    localAreas: ["Whitefield", "Electronic City", "HSR Layout", "Koramangala", "Marathahalli", "Peenya", "Yelahanka", "Sarjapur Road"],
    nearbyCitySlugs: ["chennai", "coimbatore"],
    flavorChallenge: "Traffic between job sites across the city makes same-day multi-visit scheduling hard to plan by phone",
    caseStudyCompany: "Bengaluru Field Networks"
  }),
  buildCityProfile({
    slug: "hyderabad",
    name: "Hyderabad",
    state: "Telangana",
    tier: "tier-1",
    localAreas: ["HITEC City", "Gachibowli", "Madhapur", "Kondapur", "Uppal", "Financial District", "Secunderabad", "Patancheru"],
    nearbyCitySlugs: ["bengaluru", "chennai"],
    flavorChallenge: "Fast-growing residential and commercial development means new customers to onboard faster than a paper process can keep up",
    caseStudyCompany: "Hyderabad Service Collective"
  }),
  buildCityProfile({
    slug: "chennai",
    name: "Chennai",
    state: "Tamil Nadu",
    tier: "tier-1",
    localAreas: ["OMR", "Guindy", "Ambattur", "Sriperumbudur", "Tambaram", "Velachery", "Porur", "Anna Nagar"],
    nearbyCitySlugs: ["coimbatore", "bengaluru"],
    flavorChallenge: "Coordinating installation and AMC teams across a spread-out city adds overhead to a phone-based dispatch process",
    caseStudyCompany: "Chennai Field Operations"
  }),
  buildCityProfile({
    slug: "kolkata",
    name: "Kolkata",
    state: "West Bengal",
    tier: "tier-1",
    localAreas: ["Salt Lake", "Rajarhat", "New Town", "Howrah", "Park Street", "EM Bypass", "Dum Dum", "Jadavpur"],
    nearbyCitySlugs: ["lucknow", "delhi"],
    flavorChallenge: "Older buildings and dense neighbourhoods make site access notes and directions hard to communicate by phone alone",
    caseStudyCompany: "Howrah Bridge Field Services"
  }),
  buildCityProfile({
    slug: "ahmedabad",
    name: "Ahmedabad",
    state: "Gujarat",
    tier: "tier-1",
    localAreas: ["SG Highway", "GIFT City", "Sanand", "Naroda", "Vatva", "Bopal", "Maninagar", "Prahladnagar"],
    nearbyCitySlugs: ["surat", "vadodara", "jaipur"],
    flavorChallenge: "A fast-growing SME base means more customers and AMC contracts than a spreadsheet can realistically track",
    caseStudyCompany: "Sabarmati Field Services"
  })
];
