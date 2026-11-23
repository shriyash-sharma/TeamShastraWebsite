import type { GuideSource } from "./types";

// Official pages the guides cite. Each one was opened and read on 23 Nov 2026. Re-read a page
// before changing any sentence that relies on it, and update `sourcesChecked` on that guide.

const cbic = "https://taxinformation.cbic.gov.in/content/html/tax_repository/gst";

export const sources = {
  codeOnWages: {
    label: "Press Information Bureau: Code on Wages, 2019 factsheet (sections 5, 13, 14, 17 and 50), 23 Nov 2025",
    url: "https://www.pib.gov.in/FactsheetDetails.aspx?Id=150481"
  },
  labourCodes: {
    label: "Press Information Bureau: the four Labour Codes come into effect, 21 Nov 2025",
    url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2192463"
  },
  dpdpRules: {
    label: "Press Information Bureau (MeitY): Government notifies the Digital Personal Data Protection Rules",
    url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2190014"
  },
  cgstSection9: { label: "CBIC: CGST Act, section 9 (levy on intra-State supplies)", url: `${cbic}/acts/2017_CGST_act/active/chapter3/section9_v1.00.html` },
  cgstSection10: { label: "CBIC: CGST Act, section 10 (composition levy)", url: `${cbic}/acts/2017_CGST_act/active/chapter3/section10_v1.00.html` },
  cgstSection22: { label: "CBIC: CGST Act, section 22 (who must register)", url: `${cbic}/acts/2017_CGST_act/active/chapter6/section22_v1.00.html` },
  cgstSection31: { label: "CBIC: CGST Act, section 31 (tax invoice and bill of supply)", url: `${cbic}/acts/2017_CGST_act/active/chapter7/section31_v1.00.html` },
  cgstSection37: { label: "CBIC: CGST Act, section 37 (details of outward supplies)", url: `${cbic}/acts/2017_CGST_act/active/chapter9/section37_v1.00.html` },
  cgstSection39: { label: "CBIC: CGST Act, section 39 (furnishing of returns)", url: `${cbic}/acts/2017_CGST_act/active/chapter9/section39_v1.00.html` },
  rule46: { label: "CBIC: CGST Rules, rule 46 (tax invoice)", url: `${cbic}/rules/cgst_rules/active/chapter6/rule46_v1.00.html` },
  rule47: { label: "CBIC: CGST Rules, rule 47 (time limit for issuing a tax invoice)", url: `${cbic}/rules/cgst_rules/active/chapter6/rule47_v1.00.html` },
  rule49: { label: "CBIC: CGST Rules, rule 49 (bill of supply)", url: `${cbic}/rules/cgst_rules/active/chapter6/rule49_v1.00.html` },
  rule55: { label: "CBIC: CGST Rules, rule 55 (delivery challan)", url: `${cbic}/rules/cgst_rules/active/chapter6/rule55_v1.00.html` },
  cbicRates: { label: "CBIC: GST rates for goods and services", url: "https://cbic-gst.gov.in/gst-goods-services-rates.html" },
  gstPortal: { label: "GST portal (return due dates and filing)", url: "https://www.gst.gov.in/" },
  udyam: { label: "Udyam Registration portal (Ministry of MSME)", url: "https://udyamregistration.gov.in/" },
  // Prompt 17 (read on 23 Nov 2026).
  cgstSection16: { label: "CBIC: CGST Act, section 16 (who can take input tax credit)", url: `${cbic}/acts/2017_CGST_act/active/chapter5/section16_v1.00.html` },
  cgstSection17: { label: "CBIC: CGST Act, section 17 (blocked credits, sub-section 5)", url: `${cbic}/acts/2017_CGST_act/active/chapter5/section17_v1.00.html` },
  cgstSection25: { label: "CBIC: CGST Act, section 25 (applying for registration, voluntary registration)", url: `${cbic}/acts/2017_CGST_act/active/chapter6/section25_v1.00.html` },
  cgstSection47: { label: "CBIC: CGST Act, section 47 (late fee)", url: `${cbic}/acts/2017_CGST_act/active/chapter9/section47_v1.00.html` },
  cgstSection50: { label: "CBIC: CGST Act, section 50 (interest on late payment of tax)", url: `${cbic}/acts/2017_CGST_act/active/chapter10/section50_v1.00.html` },
  socialSecurityCode: {
    label: "Press Information Bureau: Code on Social Security, 2020 factsheet (EPF and ESIC coverage)",
    url: "https://www.pib.gov.in/FactsheetDetails.aspx?Id=150473"
  },
  epfWageCeiling: {
    label: "EPFO: FAQs on the revised EPF wage ceiling (₹25,000 a month from 17 September 2026)",
    url: "https://pmvbry-cdn.epfindia.gov.in/wp-content/uploads/2026/09/EPFO_Wage_Ceiling_FAQs.pdf"
  },
  esicCoverage: { label: "ESIC: coverage and wage limit", url: "https://esic.gov.in/coverage" },
  esicContribution: { label: "ESIC: contribution rates", url: "https://esic.gov.in/contribution" },
  maharashtraPt: {
    label: "Maharashtra Sales Tax Department: profession tax rate schedule (an example of one state)",
    url: "https://www.mahagst.gov.in/en/profession-tax-and-other-rate-schedule"
  },
  apprenticeship: { label: "Apprenticeship India portal (register as an establishment)", url: "https://www.apprenticeshipindia.gov.in/" },
  itiTrades: { label: "Directorate General of Training: ITI trades under the Craftsmen Training Scheme", url: "https://dgt.gov.in/en/cts-details" },
  ceaSafety: {
    label: "Central Electricity Authority: notified safety regulations, including Measures relating to Safety and Electric Supply",
    url: "https://cea.nic.in/regulations/notified-regulations"
  },
  googleReviewTips: { label: "Google Business Profile Help: tips to get more reviews", url: "https://support.google.com/business/answer/3474122" },
  googleReviewPolicy: {
    label: "Google Maps user-generated content policy: fake and misleading content",
    url: "https://support.google.com/contributionpolicy/answer/7400114"
  }
} satisfies Record<string, GuideSource>;

/** Domains the tests accept as official sources. */
export const officialDomains = [
  "pib.gov.in",
  "cbic.gov.in",
  "cbic-gst.gov.in",
  "gst.gov.in",
  "udyamregistration.gov.in",
  "labour.gov.in",
  "indiacode.nic.in",
  "epfindia.gov.in",
  "esic.gov.in",
  "mahagst.gov.in",
  "apprenticeshipindia.gov.in",
  "dgt.gov.in",
  "cea.nic.in",
  "support.google.com"
];
