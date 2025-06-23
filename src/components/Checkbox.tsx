import React from 'react';

interface CheckboxProps {
  id: string;
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  checked = false,
  onChange,
  className = ''
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
      />
      <label htmlFor={id} className="ml-2 text-sm text-gray-700 cursor-pointer">
        {label}
      </label>
    </div>
  );
};

