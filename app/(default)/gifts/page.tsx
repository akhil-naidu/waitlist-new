export const metadata = {
  title: 'Exclusive Gifts - NextGen Forex',
  description:
    'Join our waitlist and receive exclusive benefits including free deposits, educational resources, and VIP trading conditions.',
};

import PageHeader from '@/components/page-header';
import Cta from '@/components/cta';

export default function Gifts() {
  const gifts = [
    {
      title: 'Free $100 Welcome Deposit',
      description:
        'Start trading with a $100 deposit bonus credited to your account upon first deposit.',
      icon: '💰',
      terms: 'Available for the first 100 waitlist members',
    },
    {
      title: 'VIP Trading Conditions',
      description:
        'Lock in lifetime access to our most competitive spreads from 0.0 pips on major pairs.',
      icon: '⭐',
      terms: 'Permanent benefit for early access members',
    },
    {
      title: 'Premium Educational Package',
      description:
        'Get free access to our complete trading course library worth $2,997.',
      icon: '📚',
      terms: 'Lifetime access to all current and future courses',
    },
    {
      title: 'Priority Account Manager',
      description:
        'Receive dedicated support from a senior account manager for personalized assistance.',
      icon: '👨‍💼',
      terms: 'Available for the first 6 months',
    },
    {
      title: 'Advanced Trading Tools',
      description:
        'Free access to our suite of professional trading tools and indicators worth $497/month.',
      icon: '🛠️',
      terms: 'Free for the first 12 months',
    },
    {
      title: 'Private Trading Community',
      description:
        'Join our exclusive community of successful traders for networking and insights.',
      icon: '🤝',
      terms: 'Lifetime membership included',
    },
  ];

  return (
    <>
      <section>
        <div className='pt-32 pb-12 md:pt-44 md:pb-20'>
          <div className='px-4 sm:px-6'>
            <PageHeader
              title='Exclusive Waitlist Benefits'
              description='Join our waitlist today and unlock premium trading benefits worth over $5,000. Limited time offer for the first 100 members only.'
            >
              Early Access Rewards
            </PageHeader>

            <div className='max-w-6xl mx-auto mt-16'>
              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {gifts.map((gift) => (
                  <div
                    key={gift.title}
                    className='relative flex flex-col p-6 bg-gradient-to-tr from-white/70 to-white/50 dark:bg-gradient-to-b dark:from-gray-700/50 dark:to-gray-700/40 rounded-lg'
                  >
                    {/* Border with dots in corners */}
                    <div
                      className='absolute -inset-1.5 bg-orange-500/15 dark:bg-gray-800/50 rounded-lg -z-10 
                        before:absolute before:inset-y-0 before:left-0 before:w-[7px] 
                        before:bg-[length:7px_7px] before:[background-position:top_center,bottom_center] 
                        before:bg-no-repeat before:[background-image:radial-gradient(circle_at_center,theme(colors.orange.500/.56)_1px,transparent_1px),radial-gradient(circle_at_center,theme(colors.orange.500/.56)_1px,transparent_1px)] 
                        dark:before:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600)_1px,transparent_1px),radial-gradient(circle_at_center,theme(colors.gray.600)_1px,transparent_1px)] 
                        after:absolute after:inset-y-0 after:right-0 after:w-[7px] 
                        after:bg-[length:7px_7px] after:[background-position:top_center,bottom_center] 
                        after:bg-no-repeat after:[background-image:radial-gradient(circle_at_center,theme(colors.orange.500/.56)_1px,transparent_1px),radial-gradient(circle_at_center,theme(colors.orange.500/.56)_1px,transparent_1px)] 
                        dark:after:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600)_1px,transparent_1px),radial-gradient(circle_at_center,theme(colors.gray.600)_1px,transparent_1px)]'
                    />
                    <div className='text-4xl mb-4'>{gift.icon}</div>
                    <h3 className='text-xl font-semibold mb-2'>{gift.title}</h3>
                    <p className='text-gray-600 dark:text-gray-400 mb-4 flex-grow'>
                      {gift.description}
                    </p>
                    <div className='text-sm text-orange-600 dark:text-orange-400 pt-4 border-t border-gray-200 dark:border-gray-700'>
                      {gift.terms}
                    </div>
                  </div>
                ))}
              </div>

              <div className='mt-16 text-center'>
                <div className='inline-flex items-center p-4 bg-orange-50 dark:bg-gray-800 rounded-lg'>
                  <span className='text-2xl mr-3'>⚡</span>
                  <p className='text-sm text-gray-800 dark:text-gray-200'>
                    <span className='font-semibold'>Act fast:</span> These
                    exclusive benefits are only available for the first 100
                    waitlist members.
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
