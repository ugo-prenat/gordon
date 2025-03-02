import {
  Select as ShdacnSelect,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { ReactNode } from 'react';

export type SelectOption<T extends string> = {
  value: T;
  label: string;
  icon?: ReactNode;
};

interface ISelectProps<T extends string> {
  options: SelectOption<T>[];
  label: string;
  className?: string;
  value?: SelectOption<T>['value'];
  onChange: (value: T) => void;
  disabled?: boolean;
}

export const Select = <T extends string>({
  options,
  label,
  className,
  value,
  onChange,
  disabled
}: ISelectProps<T>) => {
  return (
    <ShdacnSelect value={value} onValueChange={onChange} disabled={disabled}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map(({ label, value, icon }, index) => (
            <SelectItem key={index} value={value}>
              <div className="flex items-center gap-2">
                {icon}
                {label}
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </ShdacnSelect>
  );
};
