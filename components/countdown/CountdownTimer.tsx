'use client';

import { useEffect, useState } from 'react';
import { calculateTimeLeft } from '@/utils/countdown';
import TimeUnit from './TimeUnit';

// Set a fixed launch date 25 days from a specific date to ensure server/client match
const LAUNCH_DATE = new Date('2024-03-15T00:00:00Z').getTime();

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(LAUNCH_DATE));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(LAUNCH_DATE));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='max-w-3xl mx-auto text-center mb-12'>
      <div className='relative flex items-center justify-center gap-10 mb-8'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8'>
          <TimeUnit value={timeLeft.days} label='Days' />
          <TimeUnit value={timeLeft.hours} label='Hours' />
          <TimeUnit value={timeLeft.minutes} label='Minutes' />
          <TimeUnit value={timeLeft.seconds} label='Seconds' />
        </div>
      </div>

      <div className='text-center space-y-4'>
        <p className='text-lg font-semibold text-orange-600 dark:text-orange-400 animate-pulse'>
          Early Access Closing Soon
        </p>
        <p className='text-sm text-gray-600 dark:text-gray-400'>
          Lock in your VIP trading conditions before launch
        </p>
      </div>
    </div>
  );
}
