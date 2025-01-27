import {
  ChartIcon,
  SpeedIcon,
  SecurityIcon,
  SupportIcon,
  GlobalIcon,
  ToolsIcon,
} from '@/utils/icons';

const features = [
  {
    category: 'Trading Conditions',
    items: [
      {
        title: 'Ultra-Low Spreads',
        description:
          'Trade major pairs with spreads from 0.0 pips, optimizing your trading costs and potential profits.',
        icon: <SpeedIcon />,
      },
      {
        title: 'Lightning-Fast Execution',
        description:
          'Experience institutional-grade execution speed with average order processing under 0.1 seconds.',
        icon: <SpeedIcon />,
      },
      {
        title: '100+ Trading Instruments',
        description:
          'Access a wide range of forex pairs, commodities, indices, and cryptocurrencies from one platform.',
        icon: <GlobalIcon />,
      },
    ],
  },
  {
    category: 'Trading Platforms',
    items: [
      {
        title: 'Advanced MT5 Platform',
        description:
          'Trade with the latest MetaTrader 5 featuring advanced charting, automated trading, and professional tools.',
        icon: <ChartIcon />,
      },
      {
        title: 'Mobile Trading',
        description:
          'Stay connected to markets with our powerful mobile apps for iOS and Android devices.',
        icon: <GlobalIcon />,
      },
      {
        title: 'Trading Tools Suite',
        description:
          'Access professional trading tools including economic calendar, market analysis, and risk calculators.',
        icon: <ToolsIcon />,
      },
    ],
  },
  {
    category: 'Security & Support',
    items: [
      {
        title: 'Bank-Grade Security',
        description:
          'Trade confidently with our advanced encryption and secure fund protection measures.',
        icon: <SecurityIcon />,
      },
      {
        title: '24/7 Expert Support',
        description:
          'Get assistance anytime with our multilingual support team of trading professionals.',
        icon: <SupportIcon />,
      },
      {
        title: 'Regulated Platform',
        description:
          'Operate with peace of mind knowing we maintain strict regulatory compliance and transparency.',
        icon: <SecurityIcon />,
      },
    ],
  },
];

export default function TradingFeatures() {
  return (
    <section className='pb-12 md:pb-20'>
      <div className='px-4 sm:px-6'>
        <div className='max-w-5xl mx-auto'>
          {features.map((section, index) => (
            <div
              key={section.category}
              className={`mb-16 ${
                index !== features.length - 1
                  ? 'border-b border-orange-400/20 pb-16'
                  : ''
              }`}
            >
              <h2 className='text-3xl font-bold mb-8 text-center'>
                {section.category}
              </h2>
              <div className='grid md:grid-cols-3 gap-8'>
                {section.items.map((feature) => (
                  <div
                    key={feature.title}
                    className='flex flex-col p-6 bg-gradient-to-tr from-white/70 to-white/50 dark:bg-gradient-to-b dark:from-gray-700/50 dark:to-gray-700/40 rounded-lg'
                  >
                    <div className='flex items-center mb-4'>
                      <div className='w-8 h-8 flex items-center justify-center bg-orange-600/10 rounded-lg mr-3'>
                        {feature.icon}
                      </div>
                      <h3 className='font-semibold text-xl'>{feature.title}</h3>
                    </div>
                    <p className='text-gray-600 dark:text-gray-400'>
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
