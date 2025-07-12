/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "", // Leave empty for default HTTPS port
        pathname: "/**", // Allow all paths under this domain
      },
    ],
  },
};

module.exports = nextConfig;