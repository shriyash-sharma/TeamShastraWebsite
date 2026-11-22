// Feature × city pages that were retired in favour of one hand-written hub per city
// (/field-service-management-[city]). Keep in sync with lib/seo/cities.
const retiredCityFeatures = [
  "gst-invoicing",
  "attendance-management",
  "work-order-management",
  "expense-management",
  "amc-service-contracts"
];
const citySlugs = [
  "mumbai", "delhi", "pune", "bengaluru", "hyderabad", "chennai", "kolkata", "ahmedabad",
  "surat", "jaipur", "lucknow", "coimbatore", "vadodara", "indore"
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/login", destination: "https://app.teamshastra.com/login", permanent: false },
      { source: "/signup", destination: "https://app.teamshastra.com/signup", permanent: false },
      ...retiredCityFeatures.flatMap((feature) =>
        citySlugs.map((city) => ({
          source: `/${feature}-${city}`,
          destination: `/field-service-management-${city}`,
          permanent: true
        }))
      )
    ];
  }
};

export default nextConfig;
