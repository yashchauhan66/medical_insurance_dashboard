import React from 'react';
import { Input } from '../atoms/Input';

interface FilterInputProps {
  label: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'number';
  placeholder?: string;
}

export const FilterInput: React.FC<FilterInputProps> = ({
  label,
  value,
  onChange,
  type = 'text',
  placeholder,
}) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-900">
        {label}
      </label>
      <Input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};
