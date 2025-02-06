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
        source: '(?:/marketing/revit-mep-2025-tutorial-1-hvac-load-calculation(?:Revit)?|/marketing/revit-mep-2025-cooling-and-heating-load-calculation-p-1|/marketing/revit-mep-2025-tutorial-1-hvac-load-calculation|/revit-2025-hvac-load-calculation-tutorial-1|/revit-2025-hvac-load-|/how-chillers-work-|/Epics|/marketing/asif-khan|/marketing/marketing-and-ai)',
        destination: '/revit/revit-mep-tutorial-1',
        permanent: true,
      },
      {
        source: '/artificial/building-management-systems-bms',
        destination: '/building-management-systems-bms',
        permanent: true,
      },
      {
        source: '/Engineering/fundamentals-of-energy-engineering',
        destination: '/fundamentals-of-energy-engineering',
        permanent: true,
      },
      {
        source: '/marketing/image-optimization-in-next-js',
        destination: '/image-optimization-in-next-js',
        permanent: true,
      },
      {
        source: '/development/next-js-a-full-stack-developer',
        destination: '/next-js-a-full-stack-developer',
        permanent: true,
      },
      {
        source: '/development/tailwind-css-revolutionize-web-development',
        destination: '/tailwind-css-revolutionize-web-development',
        permanent: true,
      },
      {
        source: '/development/supercharge-your-web-performance',
        destination: '/supercharge-your-web-performance',
        permanent: true,
      },
      {
        source: '/artificiali/applications-of-ai-in-healthcare',
        destination: '/role-of-artificial-intelligence-in-healthcare',
        permanent: true,
      },
      {
        source: '/Engineering/tunnel-ventilation',
        destination: '/tunnels-ventilation',
        permanent: true,
      },
      {
        source: '(?:/Engineering/hospital-hvac-system|/hospital-hvac-system|/Engineering/hvac-system-designing-for-hospitals)',
        destination: '/hospital-hvac',
        permanent: true,
      },
      {
        source: '/equipment/how-chiller-work',
        destination: '/how-chillers-work-operation-and-maintenance-tips',
        permanent: true,
      },
      {
        source: '/artificialf/ai',
        destination: '/ai',
        permanent: true,
      },
      {
        source: '/artificialf/building-management-systems-bms',
        destination: '/building-management-systems-bms',
        permanent: true,
      },
      {
        source: '/Engineering/centrifugal-liquid-chiller-operation-and-maintenance',
        destination: '/equipment',
        permanent: true,
      },
      {
        source: '/marketing/saifullah',
        destination: '/equipment',
        permanent: true,
      },
      {
        source: '/marketing/tailwind-css-a-game-changer-in-web-development',
        destination: '/dev',
        permanent: true,
      },
      {
        source: '/Engineering/energy-engineering',
        destination: '/revit-2025-hvac-load-calculation-tutorial-1',
        permanent: true,
      },
      {
        source: '/Engineering/role-of-ai-in-mep-industry',
        destination: '/role-of-artificial-intelligence-in-healthcare',
        permanent: true,
      },
      {
        source: '/artificial/applications-of-ai-in-healthcare',
        destination: '/role-of-artificial-intelligence-in-healthcare',
        permanent: true,
      },
      {
        source: '/Engineering/hvac-cooling-load-calculation',
        destination: '/hvac-load-calculation',
        permanent: true,
      },
      {
        source: '/Engineering/chiller-operation-and-maintenance',
        destination: '/how-chillers-work-operation-and-maintenance-tips',
        permanent: true,
      },
      {
        source: '/tunnel-ventilation',
        destination: '/tunnels-ventilation',
        permanent: true,
      },
      {
        source: '/hvac-cooling-load-calculation',
        destination: '/hvac-load-calculation',
        permanent: true,
      },
      {
        source: '/Engineering/tunnels-ventilation',
        destination: '/tunnels-ventilation',
        permanent: true,
      },
      {
        source: '/development/tailwind-css-a-game-changer-in-web-development',
        destination: '/tailwind-css-revolutionize-web-development',
        permanent: true,
      },
      {
        source: '/marketing/building-management-systems-bms',
        destination: '/building-management-systems-bms',
        permanent: true,
      },
      {
        source: '/equipment/how-chiller-works',
        destination: '/how-chillers-work-operation-and-maintenance-tips',
        permanent: true,
      },
      {
        source: '/marketing/use-of-ai-in-digital-marketing-details',
        destination: '/role-of-artificial-intelligence-in-healthcare',
        permanent: true,
      },
      {
        source: '/hospital-hvac-system',
        destination: '/hospital-hvac',
        permanent: true,
      },
      {
        source: '/development/applications-of-ai-in-healthcare',
        destination: '/role-of-artificial-intelligence-in-healthcare',
        permanent: true,
      },
      {
        source: '/artificial-intelligence-',
        destination: '/role-of-artificial-intelligence-in-healthcare',
        permanent: true,
      },
      {
        source: '/high-income-skills',
        destination: '/high-income-skill',
        permanent: true,
      },
      {
        source: '/(data-analyses|data-visualization)',
        destination: '/data-visualization1',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
