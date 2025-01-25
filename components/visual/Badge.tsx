interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className = '' }: BadgeProps) {
  return (
    <div
      className={`relative text-sm font-medium text-gray-700 bg-white dark:bg-gray-700 
      inline-flex rounded-lg whitespace-nowrap px-3 py-[3px] tracking-normal 
      before:absolute before:inset-0 before:rounded-lg 
      before:[background-image:linear-gradient(120deg,transparent_0%,theme(colors.amber.400/.12)_33%,theme(colors.pink.400/.12)_66%,theme(colors.amber.200/.12)_100%)] 
      dark:before:[background-image:linear-gradient(120deg,theme(colors.amber.400/.16),theme(colors.amber.600/.16)_50%,transparent_100%)] 
      shadow ${className}`}
    >
      <span className='relative text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-amber-500 dark:to-amber-50'>
        {children}
      </span>
    </div>
  );
}
