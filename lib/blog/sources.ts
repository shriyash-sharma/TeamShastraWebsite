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
  udyam: { label: "Udyam Registration portal (Ministry of MSME)", url: "https://udyamregistration.gov.in/" }
} satisfies Record<string, GuideSource>;

/** Domains the tests accept as official sources. */
export const officialDomains = ["pib.gov.in", "cbic.gov.in", "cbic-gst.gov.in", "gst.gov.in", "udyamregistration.gov.in", "labour.gov.in", "indiacode.nic.in"];
