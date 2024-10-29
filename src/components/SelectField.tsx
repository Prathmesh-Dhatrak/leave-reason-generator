import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SelectFieldProps } from '../types';

export const SelectField: React.FC<SelectFieldProps> = ({
  label,
  icon,
  value,
  onChange,
  options,
  placeholder,
}) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        {icon && <div className="text-gray-500">{icon}</div>}
        <label className="text-sm font-medium">{label}</label>
      </div>
      <Select onValueChange={onChange} value={value}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
