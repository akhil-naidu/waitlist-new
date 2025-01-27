export const metadata = {
  title: 'Trading Results - NextGen Forex',
  description:
    'See real results and testimonials from traders using our advanced trading platform. Join successful traders experiencing superior trading conditions.',
};

import PageHeader from '@/components/page-header';
import Cta from '@/components/cta';

const testimonials = [
  {
    quote:
      'Finally, a broker that understands what traders really need. The execution speed and tight spreads have significantly improved my scalping strategy.',
    author: 'Michael Chen',
    role: 'Professional Forex Trader',
    location: 'Singapore',
    stats: {
      trades: '5,000+',
      avgSpread: '0.1 pips',
      execution: '<0.1s',
    },
  },
  {
    quote:
      "The platform's stability and advanced tools have transformed my trading. I've reduced my trading costs by 35% while improving my win rate.",
    author: 'Sarah Williams',
    role: 'Institutional Trader',
    location: 'London',
    stats: {
      trades: '10,000+',
      avgSpread: '0.2 pips',
      execution: '0.08s',
    },
  },
  {
    quote:
      'Their AI-powered analysis tools helped me identify better entry points. My trading accuracy has improved by 40% since joining the beta.',
    author: 'Alex Rodriguez',
    role: 'Algorithmic Trader',
    location: 'New York',
    stats: {
      trades: '15,000+',
      avgSpread: '0.15 pips',
      execution: '0.05s',
    },
  },
];

const results = [
  {
    category: 'Platform Performance',
    stats: [
      {
        label: 'Average Execution Speed',
        value: '0.08s',
        description:
          'Lightning-fast order execution for precise entries and exits',
      },
      {
        label: 'Platform Uptime',
        value: '99.9%',
        description: 'Reliable trading infrastructure you can count on',
      },
      {
        label: 'Active Traders',
        value: '50,000+',
        description: 'Growing community of successful traders',
      },
    ],
  },
  {
    category: 'Trading Conditions',
    stats: [
      {
        label: 'EUR/USD Spread',
        value: '0.0',
        description: 'Industry-leading tight spreads on major pairs',
      },
      {
        label: 'Available Instruments',
        value: '100+',
        description: 'Diverse range of trading opportunities',
      },
      {
        label: 'Success Rate*',
        value: '87%',
        description: 'Of beta users report improved trading results',
      },
    ],
  },
];

export default function Results() {
  return (
    <>
      <section>
        <div className='pt-32 pb-12 md:pt-44 md:pb-20'>
          <div className='px-4 sm:px-6'>
            <PageHeader
              title='Real Results from Real Traders'
              description='See how our advanced trading platform is helping traders worldwide achieve superior results. Join successful traders experiencing the next generation of forex trading.'
            >
              Trading Success Stories
            </PageHeader>

            {/* Performance Stats */}
            <div className='max-w-6xl mx-auto mt-16'>
              {results.map((section) => (
                <div key={section.category} className='mb-16'>
                  <h2 className='text-2xl font-bold mb-8 text-center'>
                    {section.category}
                  </h2>
                  <div className='grid md:grid-cols-3 gap-8'>
                    {section.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className='relative flex flex-col p-6 bg-gradient-to-tr from-white/70 to-white/50 dark:bg-gradient-to-b dark:from-gray-700/50 dark:to-gray-700/40 rounded-lg text-center'
                      >
                        <div className='absolute -inset-1.5 bg-orange-600/15 dark:bg-gray-800/50 rounded-lg -z-10' />
                        <div className='text-4xl font-bold text-orange-700 dark:text-orange-500 mb-2'>
                          {stat.value}
                        </div>
                        <h3 className='text-lg font-semibold mb-2'>
                          {stat.label}
                        </h3>
                        <p className='text-gray-600 dark:text-gray-400 text-sm'>
                          {stat.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonials */}
            <div className='max-w-6xl mx-auto mt-20'>
              <h2 className='text-2xl font-bold mb-12 text-center'>
                Trader Testimonials
              </h2>
              <div className='grid md:grid-cols-3 gap-8'>
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.author}
                    className='relative flex flex-col p-6 bg-gradient-to-tr from-white/70 to-white/50 dark:bg-gradient-to-b dark:from-gray-700/50 dark:to-gray-700/40 rounded-lg'
                  >
                    {/* Border with dots in corners */}
                    <div
                      className='absolute -inset-1.5 bg-orange-600/15 dark:bg-gray-800/50 rounded-lg -z-10 
                        before:absolute before:inset-y-0 before:left-0 before:w-[7px] 
                        before:bg-[length:7px_7px] before:[background-position:top_center,bottom_center] 
                        before:bg-no-repeat before:[background-image:radial-gradient(circle_at_center,theme(colors.orange.500/.56)_1px,transparent_1px),radial-gradient(circle_at_center,theme(colors.orange.500/.56)_1px,transparent_1px)] 
                        dark:before:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600)_1px,transparent_1px),radial-gradient(circle_at_center,theme(colors.gray.600)_1px,transparent_1px)] 
                        after:absolute after:inset-y-0 after:right-0 after:w-[7px] 
                        after:bg-[length:7px_7px] after:[background-position:top_center,bottom_center] 
                        after:bg-no-repeat after:[background-image:radial-gradient(circle_at_center,theme(colors.orange.500/.56)_1px,transparent_1px),radial-gradient(circle_at_center,theme(colors.orange.500/.56)_1px,transparent_1px)] 
                        dark:after:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600)_1px,transparent_1px),radial-gradient(circle_at_center,theme(colors.gray.600)_1px,transparent_1px)]'
                    />
                    <div className='mb-4'>
                      <svg
                        className='fill-orange-600/80 w-8 h-8'
                        viewBox='0 0 32 32'
                      >
                        <path d='M10 8c-3.3 0-6 2.7-6 6v10h6V14h-4c0-2.2 1.8-4 4-4V8zm12 0c-3.3 0-6 2.7-6 6v10h6V14h-4c0-2.2 1.8-4 4-4V8z' />
                      </svg>
                    </div>
                    <blockquote className='flex-grow mb-4'>
                      <p className='text-gray-600 dark:text-gray-400'>
                        {testimonial.quote}
                      </p>
                    </blockquote>
                    <div className='pt-4 border-t border-gray-200 dark:border-gray-700'>
                      <cite className='not-italic'>
                        <div className='font-semibold text-gray-800 dark:text-gray-200'>
                          {testimonial.author}
                        </div>
                        <div className='text-sm text-gray-600 dark:text-gray-400'>
                          {testimonial.role} · {testimonial.location}
                        </div>
                      </cite>
                      <div className='mt-3 flex justify-between text-sm'>
                        <div>
                          <div className='font-semibold text-orange-700 dark:text-orange-500'>
                            {testimonial.stats.trades}
                          </div>
                          <div className='text-gray-600 dark:text-gray-400'>
                            Trades
                          </div>
                        </div>
                        <div>
                          <div className='font-semibold text-orange-700 dark:text-orange-500'>
                            {testimonial.stats.avgSpread}
                          </div>
                          <div className='text-gray-600 dark:text-gray-400'>
                            Avg Spread
                          </div>
                        </div>
                        <div>
                          <div className='font-semibold text-orange-700 dark:text-orange-500'>
                            {testimonial.stats.execution}
                          </div>
                          <div className='text-gray-600 dark:text-gray-400'>
                            Execution
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className='mt-16 text-center'>
                <div className='inline-flex items-center p-4 bg-orange-50 dark:bg-gray-800 rounded-lg'>
                  <span className='text-2xl mr-3'>📈</span>
                  <p className='text-sm text-gray-800 dark:text-gray-200'>
                    <span className='font-semibold'>*Results disclaimer:</span>{' '}
                    Trading performance statistics are based on beta user data.
                    Individual results may vary.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
