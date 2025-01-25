import { InputHTMLAttributes } from 'react';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  error?: string;
}

export default function Checkbox({ 
  label, 
  error, 
  className = '', 
  ...props 
}: CheckboxProps) {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        className={`form-checkbox ${className}`}
        {...props}
      />
      <span className="text-sm text-gray-500 ml-2">
        {label}
      </span>
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}