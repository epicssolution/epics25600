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
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.epicssolution.com', // WWW version
          },
        ],
        destination: 'https://epicssolution.com/', // non-WWW version
        permanent: true,
      },
    ];
  },
  };
  
  export default nextConfig;
  
