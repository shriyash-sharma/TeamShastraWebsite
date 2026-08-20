/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/login", destination: "https://app.teamshastra.com/login", permanent: false },
      { source: "/signup", destination: "https://app.teamshastra.com/signup", permanent: false }
    ];
  }
};

export default nextConfig;
