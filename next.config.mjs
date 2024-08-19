import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'v5.airtableusercontent.com',
            port: '',
            pathname: '/**',
          },
          { 
            protocol: "https",
            hostname: "firebasestorage.googleapis.com",
            port: "",
            pathname: "/v0/**",
          },
        ],
      },
};

export default withNextIntl(nextConfig);