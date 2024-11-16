/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '', // Optional, leave empty for default ports (80 for http and 443 for https)
        pathname: '/**', // Allow all paths under this domain
      },
    ],
  },
 async redirects() {
    return [
      {
        source: '/marketing/revit-mep-2025-tutorial-1-hvac-load-calculation',
        destination: '/revit-2025-hvac-load-calculation-tutorial-1',
        permanent: true, // 301 Permanent Redirect
      },
      {
        source: '/artificial/building-management-systems-bms',
        destination: '/building-management-systems-bms',
        permanent: true, // 301 Permanent Redirect
      },
    ];
  },
  
  
};

export default nextConfig;
