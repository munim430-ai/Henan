/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.sitong-boiler.com' },
      { protocol: 'https', hostname: 'www.hnsitongboiler.com' },
    ],
  },
};

module.exports = nextConfig;
