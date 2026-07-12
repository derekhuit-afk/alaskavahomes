/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://www.akmilitaryhomeloans.com/:path*",
        permanent: true, // 301
      },
    ];
  },
};

module.exports = nextConfig;
