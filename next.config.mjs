/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/**', // Allow all paths under this domain
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/(marketing/revit-mep-2025-tutorial-1-hvac-load-calculation(?:Revit)?|marketing/revit-mep-2025-tuotorial-1-hvac-load-calculationRevit|revit-2025-hvac-|marketing/revit-mep-2025-cooling-and-heating-load-calculation|marketing/revit-mep-2025-tuotorial-1-hvac-load-calculation|marketing/revit-mep-2025-cooling-and-heating-load-calculation-p-1|marketing/revit-mep-2025-tutorial-1-hvac-load-calculation|revit-2025-hvac-load-calculation-tutorial-1|revit-2025-hvac-load-|how-chillers-work-|Epics|marketing/asif-khan|marketing/marketing-and-ai)',
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
        source: '/development/(next-js-a-full-stack-developer|what-is-next-js)',
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
        source: '/(Engineering/tunnel-ventilation|Engineering/tunnels-)',
        destination: '/tunnels-ventilation',
        permanent: true,
      },
      {
        source: '/(Engineering/hospital-hvac-system|hospital-hvac-system|Engineering/hvac-system-designing-for-hospitals|Engineering/plumbing-design-for-people-with-disability)',
        destination: '/hospital-hvac',
        permanent: true,
      },
      {
        source: '/(equipment/how-chiller-work|Engineering/chiller-system-greater-than-types-working-o-and-m|Engineering/concepts-of-chiller-in-hvac|Engineering/hvac-)',
        destination: '/how-chillers-work-operation-and-maintenance-tips',
        permanent: true,
      },
      {
        source: '/(artificialf/ai|artificial-|artificial-intelligence-ai-in-hvac|artificiali/ai|marketing/use-of-ai-in-digital-marketing)',
        destination: '/ai',
        permanent: true,
      },
      {
        source: '/(artificialf/building-management-systems-bms|building-management-systems-bms)',
        destination: '/ai-in-building-management-systems-bms',
        permanent: true,
      },
      {
        source: '/Engineering/centrifugal-liquid-chiller-operation-and-maintenance',
        destination: '/centrifugal-chiller-maintenance',
        permanent: true,
      },
      {
        source: '/marketing/saifullah',
        destination: '/equipment',
        permanent: true,
      },
      {
        source: '/marketing/tailwind-css-a-game-changer-in-web-development',
        destination: '/tailwind-css-revolutionize-web-development',
        permanent: true,
      },
      {
        source: '/Engineering/energy-engineering',
        destination: '/revit-2025-hvac-load-calculation-tutorial-1',
        permanent: true,
      },
      {
        source: '/Engineering/(role-of-ai-in-mep-industry|role-of-ai-in-mep-indutry)',
        destination: '/the-impact-of-artificial-intelligence-on-mep-systems',
        permanent: true,
      },
  
      {
        source: '/(Engineering/hvac-cooling-load-calculation|hvac-cooling-load-calculation)',
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
        source: '/(hospital-hvac-system|hvac-system-designing-for-hospitals)',
        destination: '/hospital-hvac',
        permanent: true,
      },
      {
        source: '/(artificial/applications-of-ai-in-healthcare|marketing/use-of-ai-in-digital-marketing-details|development/applications-of-ai-in-healthcare|role-of-artificial-intelligence-in-healthcare)',
        destination: '/role-of-artificial-intelligence',
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
        {
        source: '/(centrifugal-chillers|centrifugal-chiller1)',
        destination: '/centrifugal-chiller-2',
        permanent: true,
      },
       {
        source: '/revit-2025-hvac-load-calculation-report-analyses-tuotorial-2',
        destination: '/revit/revit-mep-tutorial-2',
        permanent: true,
      },  {
        source: '/(fonts/CustomFont.woff2|marketing/URL%20to%20favicon)',
        destination: '/',
        permanent: true,
      }, {
        source: '/absorption-chiller1',
        destination: '/absorption-chiller',
        permanent: true,
      },{
        source: '/Engineering/room-heating-by-perforated-solar-air-collector',
        destination: '/room-heating-by-perforated-solar-air-collector',
        permanent: true,
      },{
        source: '/Engineering/hvac-load-calculation',
        destination: '/hvac-load-calculation',
        permanent: true,
      },
      {
        source: '/(generative-ai|generative-artificial-intelligence)',
        destination: '/generative-artificial-intelligenc',
        permanent: true,
      },
        {
        source: '/artificial-intelligence-in-the-oil-and-gas-industry',
        destination: '/ai-in-the-oil-and-gas-industry',
        permanent: true,
      },  {
        source: '/chilled-water-piping-system',
        destination: '/chilled-water-piping-systems',
        permanent: true,
      },{
        source: '/septic-tank',
        destination: '/what-is-septic-tank',
        permanent: true,
      },{
        source: '/skip-bins-and-construction-waste-management',
        destination: '/skip-bins-and-waste-management',
        permanent: true,
      },{
        source: '/variable-refrigerant-flow-vrf',
        destination: '/variable-refrigerant-flow-vrf-1',
        permanent: true,
      },
      {
        source: '/valves',
        destination: '/valves-and-there-types',
        permanent: true,
      }, {
        source: '/district-cooling-system',
        destination: '/district-cooling-system-DCS',
        permanent: true,
      },{
        source: '/compressors',
        destination: '/compressor-1',
        permanent: true,
      },{
        source: '/dehumidifier',
        destination: '/dehumidifier-1',
        permanent: true, },
      {
        source: '/supercharge-your-web-performancer',
        destination: '/supercharge-your-web-performance-1',
        permanent: true,
      },{
        source: '/maximizing-centrifugal-chiller-efficiency-for-peak-performance',
        destination: '/maximizing-centrifugal-chiller-efficiency-for-peak-performance-1',
        permanent: true, },
    ];
  },
};

export default nextConfig;
