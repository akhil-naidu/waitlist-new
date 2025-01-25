import { SelectHTMLAttributes } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  icon?: React.ReactNode;
  options: ReadonlyArray<{ value: string; label: string }>;
  error?: string;
}

export default function Select({ 
  label, 
  icon, 
  options, 
  error, 
  className = '', 
  ...props 
}: SelectProps) {
  return (
    <div className="relative">
      <label className="sr-only" htmlFor={props.id}>
        {label}
      </label>
      {icon && (
        <div className="absolute inset-y-0 left-0 text-gray-500/70 dark:text-gray-400/70 pl-4 flex items-center pointer-events-none">
          {icon}
        </div>
      )}
      <select
        className={`form-select text-sm w-full ${icon ? 'pl-10' : 'pl-4'} ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}