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
      {
        source: '/Engineering/fundamentals-of-energy-engineering',
        destination: '/fundamentals-of-energy-engineering',
        permanent: true, // 301 Permanent Redirect
      },
       {
        source: '/marketing/image-optimization-in-next-js',
        destination: '/image-optimization-in-next-js',
        permanent: true, // 301 Permanent Redirect
      },
          {
        source: '/development/next-js-a-full-stack-developer',
        destination: '/next-js-a-full-stack-developer',
        permanent: true, // 301 Permanent Redirect
      },
     {
        source: '/development/tailwind-css-revolutionize-web-development',
        destination: '/tailwind-css-revolutionize-web-development',
        permanent: true, // 301 Permanent Redirect
      },
        {
        source: '/development/supercharge-your-web-performance',
        destination: '/supercharge-your-web-performance',
        permanent: true, // 301 Permanent Redirect
      },
         {
        source: '/development/next-js-a-full-stack-developer',
        destination: '/next-js-a-full-stack-developer',
        permanent: true, // 301 Permanent Redirect
      },
         {
        source: '/artificiali/applications-of-ai-in-healthcare',
        destination: '/role-of-artificial-intelligence-in-healthcare',
        permanent: true, // 301 Permanent Redirect
      },
         {
        source: '/Engineering/tunnel-ventilation',
        destination: '/tunnels-ventilation',
        permanent: true, // 301 Permanent Redirect
      },
         {
        source: '/Engineering/hospital-hvac-system',
        destination: '/hospital-hvac-system',
        permanent: true, // 301 Permanent Redirect
      },
         {
        source: '/Engineering/room-heating-by-perforated-solar-air-collector',
        destination: '/room-heating-by-perforated-solar-air-collector',
        permanent: true, // 301 Permanent Redirect
      },
         {
        source: '/Engineering/hvac-load-calculation',
        destination: '/hvac-load-calculation',
        permanent: true, // 301 Permanent Redirect
      },
         {
        source: '/Engineering/hvac-and-indoor-air-quality',
        destination: '/hvac-and-indoor-air-quality',
        permanent: true, // 301 Permanent Redirect
      },
         {
        source: '/equipment/how-chiller-work',
        destination: '/how-chillers-work-operation-and-maintenance-tips',
        permanent: true, // 301 Permanent Redirect
      },
         {
        source: '/Engineering/hvac-system-designing-for-hospitals',
        destination: '/hospital-hvac-system',
        permanent: true, // 301 Permanent Redirect
      },
         {
        source: '/Engineering/hvac-system-designing-for-hospitals',
        destination: '/hospital-hvac-system',
        permanent: true, // 301 Permanent Redirect
      },
         {
        source: '/artificialf/ai',
        destination: '/ai',
        permanent: true, // 301 Permanent Redirect
      },
         {
        source: '/artificialf/building-management-systems-bms',
        destination: '/building-management-systems-bms',
        permanent: true, // 301 Permanent Redirect
      },
         {
        source: '/Engineering/centrifugal-liquid-chiller-operation-and-maintenance',
        destination: '/equipment',
        permanent: true, // 301 Permanent Redirect
      },
         {
        source: '/marketing/saifullah',
        destination: '/equipment',
        permanent: true, // 301 Permanent Redirect
      },
         {
        source: '/marketing/revit-mep-2025-cooling-and-heating-load-calculation-p-1',
        destination: '/revit-2025-hvac-load-calculation-tutorial-1',
        permanent: true, // 301 Permanent Redirect
      },
         {
        source: '/marketing/tailwind-css-a-game-changer-in-web-development',
        destination: '/dev',
        permanent: true, // 301 Permanent Redirect
      },
         {
        source: '/artificiali/ai',
        destination: '/ai',
        permanent: true, // 301 Permanent Redirect
      },
         {
        source: '/Engineering/energy-engineering',
        destination: '/revit-2025-hvac-load-calculation-tutorial-1',
        permanent: true, // 301 Permanent Redirect
      },
         {
        source: '/Engineering/role-of-ai-in-mep-indutry',
        destination: '/role-of-artificial-intelligence-in-healthcare',
        permanent: true, // 301 Permanent Redirect
      }
    ];
  },
  
  
};

export default nextConfig;
