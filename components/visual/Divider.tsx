interface DividerProps {
  className?: string;
}

export default function Divider({ className = '' }: DividerProps) {
  return (
    <div
      className={`relative flex items-center justify-center gap-10 
        before:h-px before:w-full before:border-b 
        before:[border-image:linear-gradient(to_right,transparent,theme(colors.orange.300/.8),transparent)1] 
        dark:before:[border-image:linear-gradient(to_right,transparent,theme(colors.orange.300/.16),transparent)1] 
        before:shadow-sm before:shadow-white/20 dark:before:shadow-none 
        after:h-px after:w-full after:border-b 
        after:[border-image:linear-gradient(to_right,transparent,theme(colors.orange.300/.8),transparent)1] 
        dark:after:[border-image:linear-gradient(to_right,transparent,theme(colors.orange.300/.16),transparent)1] 
        after:shadow-sm after:shadow-white/20 dark:after:shadow-none ${className}`}
    />
  );
}
