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
  images: {
    formats: ["image/avif", "image/webp"],
    // 440 and 500 match the hero phone (220–248 CSS px) on 2x screens, so it isn't served at 640.
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 440, 500]
  },
  // Next always ships polyfills our browserslist doesn't need (vercel/next.js#86785); swap them
  // for the one we do need. Re-check that the alias still applies on every Next upgrade.
  turbopack: {
    resolveAlias: {
      "../build/polyfills/polyfill-module": "./lib/polyfills/modern-polyfill.js",
      "next/dist/build/polyfills/polyfill-module": "./lib/polyfills/modern-polyfill.js"
    }
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" }
        ]
      },
      { source: "/api/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex" }] }
    ];
  },
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
