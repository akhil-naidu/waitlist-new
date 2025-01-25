import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
  error?: string;
}

export default function Input({ 
  label, 
  icon, 
  error, 
  className = '', 
  ...props 
}: InputProps) {
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
      <input
        className={`form-input text-sm w-full ${icon ? 'pl-10' : 'pl-4'} pr-4 ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}