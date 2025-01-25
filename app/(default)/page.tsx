import PageHeader from '@/components/page-header';
import SubscribeForm from '@/components/subscribe-form';
import PageContainer from '@/components/common/PageContainer';
import CountdownTimer from '@/components/countdown/CountdownTimer';

export const metadata = {
  title: 'Your Forex Trading Revolution is Coming - NextGen Forex',
  description:
    'Be first to experience lightning-fast trades and unbeatable spreads. Join the waitlist now for exclusive early access to the next generation of forex trading.',
};

export default function Home() {
  return (
    <section>
      <PageContainer>
        <PageHeader
          className='mb-12'
          title='Your Forex Trading Revolution is Coming'
          description='Be among the first to experience lightning-fast trades and unbeatable spreads. Join elite traders accessing institutional-grade technology, ultra-low spreads from 0.0 pips, and next-generation trading tools.'
        >
          Exclusive Launch <span className='text-gray-300 mx-1'>·</span> Limited
          Spots
        </PageHeader>

        <div className='max-w-3xl mx-auto text-center mb-12'>
          <div className='grid md:grid-cols-3 gap-6 mb-8'>
            <div className='p-4 rounded-lg bg-white/10'>
              <h3 className='text-xl font-semibold mb-2'>Superior Trading</h3>
              <p className='text-gray-600 dark:text-gray-400'>
                Revolutionary spreads from 0.0 pips across 100+ forex pairs and
                CFDs
              </p>
            </div>
            <div className='p-4 rounded-lg bg-white/10'>
              <h3 className='text-xl font-semibold mb-2'>Advanced Platform</h3>
              <p className='text-gray-600 dark:text-gray-400'>
                Next-gen MT5 & MT4 platforms with millisecond execution speed
              </p>
            </div>
            <div className='p-4 rounded-lg bg-white/10'>
              <h3 className='text-xl font-semibold mb-2'>Secure & Regulated</h3>
              <p className='text-gray-600 dark:text-gray-400'>
                Bank-grade security and full regulatory compliance for peace of
                mind
              </p>
            </div>
          </div>

          <div className='space-y-4 mb-8'>
            <h2 className='text-2xl font-semibold'>Early Access Privileges</h2>
            <ul className='space-y-2 text-gray-600 dark:text-gray-400'>
              <li>✓ Ultra-Low Spreads from 0.0 Pips</li>
              <li>✓ Lightning-Fast Order Execution</li>
              <li>✓ MetaTrader 5 & 4 Platforms</li>
              <li>✓ 100+ Trading Instruments</li>
              <li>✓ 24/7 Expert Support</li>
            </ul>
          </div>

          <div className='mb-8'>
            <p className='text-lg text-gray-600 dark:text-gray-400'>
              <span className='font-semibold text-amber-600 dark:text-amber-400'>
                Don't miss out:
              </span>{' '}
              Be part of the trading revolution. Lock in lifetime VIP spreads
              and get priority access to our most advanced features. Only 100
              spots available.
            </p>
          </div>
        </div>

        <CountdownTimer />

        <SubscribeForm />
      </PageContainer>
    </section>
  );
}
