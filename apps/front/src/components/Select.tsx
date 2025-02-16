import {
  Select as ShdacnSelect,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { cn } from '@/utils/tailwind.utils';

export type SelectOption<T extends string> = {
  value: T;
  label: string;
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
      <SelectTrigger className={cn('w-[180px]', className)}>
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map(({ label, value }, index) => (
            <SelectItem key={index} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </ShdacnSelect>
  );
};
