'use client';

interface TimeUnitProps {
  value: number;
  label: string;
}

export default function TimeUnit({ value, label }: TimeUnitProps) {
  return (
    <div className='flex flex-col items-center'>
      <div className='relative'>
        <div className='w-20 h-20 bg-gradient-to-tr from-white/90 to-white/70 dark:from-gray-700/80 dark:to-gray-700/70 rounded-lg shadow-lg flex items-center justify-center'>
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
          <span className='text-4xl font-bold text-gray-800 dark:text-gray-200'>
            {value.toString().padStart(2, '0')}
          </span>
        </div>
      </div>
      <span className='text-sm font-medium text-gray-600 dark:text-gray-400 mt-2'>
        {label}
      </span>
    </div>
  );
}
