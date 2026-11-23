// English page → Hindi page, for hreflang. No imports, so lib/site.ts can read it without a cycle.
// Keep in step with the `enPath` of every entry in lib/seo/landing/hi/*.ts (a test checks this).

export const hindiPathByEnglishPath: Readonly<Record<string, string>> = {
  "/": "/hi",
  "/features/gps-attendance-app": "/hi/features/gps-attendance-app",
  "/features/staff-salary-payroll": "/hi/features/staff-salary-payroll",
  "/features/salary-advance-payslip": "/hi/features/salary-advance-payslip",
  "/features/gst-billing-invoice": "/hi/features/gst-billing-invoice",
  "/features/quotation-estimate-app": "/hi/features/quotation-estimate-app",
  "/features/job-work-order-management": "/hi/features/job-work-order-management",
  "/features/amc-contract-management": "/hi/features/amc-contract-management",
  "/features/field-expense-tracking": "/hi/features/field-expense-tracking",
  "/features/hindi-multi-language-app": "/hi/features/hindi-multi-language-app",
  "/industries/cctv-installer-software": "/hi/industries/cctv-installer-software",
  "/industries/ro-water-purifier-service-software": "/hi/industries/ro-water-purifier-service-software",
  "/industries/appliance-repair-service-software": "/hi/industries/appliance-repair-service-software",
  "/hvac-service-management": "/hi/hvac-service-management"
};

export function hindiPathFor(englishPath: string): string | undefined {
  return hindiPathByEnglishPath[englishPath];
}
