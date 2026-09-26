import type { CityProfile } from "../types";
import { buildCityProfile } from "./build-city";

export const tier2Cities: CityProfile[] = [
  buildCityProfile({
    slug: "surat",
    name: "Surat",
    state: "Gujarat",
    tier: "tier-2",
    localAreas: ["Ring Road", "Hazira", "Ichhapore", "Pandesara", "Udhna", "Varachha", "Adajan", "Sachin GIDC"],
    nearbyCitySlugs: ["ahmedabad", "vadodara"],
    flavorChallenge: "A dense concentration of small manufacturing and trading businesses creates a high volume of AMC and installation calls for local service providers",
    caseStudyCompany: "Tapi Field Services"
  }),
  buildCityProfile({
    slug: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    tier: "tier-2",
    localAreas: ["Mansarovar", "Malviya Nagar", "Sitapura", "VKI", "Ajmer Road", "C-Scheme", "Raja Park"],
    nearbyCitySlugs: ["delhi", "ahmedabad"],
    flavorChallenge: "Extreme summer heat drives a seasonal spike in AC and equipment service calls that phone-based dispatch struggles to keep up with",
    caseStudyCompany: "Pink City Field Services"
  }),
  buildCityProfile({
    slug: "lucknow",
    name: "Lucknow",
    state: "Uttar Pradesh",
    tier: "tier-2",
    localAreas: ["Gomti Nagar", "Alambagh", "Amausi", "Chinhat", "Transport Nagar", "Hazratganj", "Aliganj"],
    nearbyCitySlugs: ["delhi", "jaipur"],
    flavorChallenge: "A growing base of commercial and residential customers means more AMC contracts than a notebook can reliably track",
    caseStudyCompany: "Awadh Field Services"
  }),
  buildCityProfile({
    slug: "coimbatore",
    name: "Coimbatore",
    state: "Tamil Nadu",
    tier: "tier-2",
    localAreas: ["Peelamedu", "Singanallur", "Saravanampatti", "Ganapathy", "RS Puram", "Kurichi"],
    nearbyCitySlugs: ["chennai", "bengaluru"],
    flavorChallenge: "A large base of small and mid-sized manufacturing units creates steady demand for equipment service visits that need to be scheduled reliably",
    caseStudyCompany: "Kovai Field Services"
  }),
  buildCityProfile({
    slug: "vadodara",
    name: "Vadodara",
    state: "Gujarat",
    tier: "tier-2",
    localAreas: ["Makarpura GIDC", "Manjusar GIDC", "Alkapuri", "Gotri", "Padra", "Waghodia"],
    nearbyCitySlugs: ["ahmedabad", "surat"],
    flavorChallenge: "Industrial and residential customers both expect fast response, which is hard to guarantee with phone-based dispatch alone",
    caseStudyCompany: "Vishwamitri Field Services"
  }),
  buildCityProfile({
    slug: "indore",
    name: "Indore",
    state: "Madhya Pradesh",
    tier: "tier-2",
    localAreas: ["Pithampur", "Vijay Nagar", "Scheme 54", "Rau", "AB Road", "Palasia"],
    nearbyCitySlugs: ["ahmedabad", "jaipur"],
    flavorChallenge: "A fast-growing retail and residential base means more installation and AMC customers than a manual process can track",
    caseStudyCompany: "Malwa Field Services"
  })
];
