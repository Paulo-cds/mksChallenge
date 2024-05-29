/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mks-sistemas.nyc3.digitaloceanspaces.com"
      },
      {
        protocol: "https",
        hostname: "mks-sistemas.nyc3.digitaloceanspaces.com",
      },
    ],
    domains: ["content.wepik.com", "c8.alamy.com"],
  }
};

const path = require('path');

module.exports = nextConfig;
