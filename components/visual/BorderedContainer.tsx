interface BorderedContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function BorderedContainer({
  children,
  className = '',
}: BorderedContainerProps) {
  return (
    <div className={`relative ${className}`}>
      <div
        className='absolute -inset-3 bg-amber-500/15 dark:bg-transparent dark:bg-gradient-to-b 
          dark:from-gray-700/80 dark:to-gray-700/70 rounded-lg -z-10 
          before:absolute before:inset-y-0 before:left-0 before:w-[15px] 
          before:bg-[length:15px_15px] before:[background-position:top_center,bottom_center] 
          before:bg-no-repeat before:[background-image:radial-gradient(circle_at_center,theme(colors.amber.500/.56)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,theme(colors.amber.500/.56)_1.5px,transparent_1.5px)] 
          dark:before:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,theme(colors.gray.600)_1.5px,transparent_1.5px)] 
          after:absolute after:inset-y-0 after:right-0 after:w-[15px] 
          after:bg-[length:15px_15px] after:[background-position:top_center,bottom_center] 
          after:bg-no-repeat after:[background-image:radial-gradient(circle_at_center,theme(colors.amber.500/.56)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,theme(colors.amber.500/.56)_1.5px,transparent_1.5px)] 
          dark:after:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,theme(colors.gray.600)_1.5px,transparent_1.5px)]'
        aria-hidden='true'
      />
      {children}
    </div>
  );
}
