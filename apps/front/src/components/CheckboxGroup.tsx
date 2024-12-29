import { cn } from '@/utils/tailwind.utils';
import { Checkbox } from './ui/checkbox';

export interface ICheckboxGroupOption<T extends string | number> {
  id: string;
  value: T;
  label: string;
  checked: boolean;
  icon?: JSX.Element;
  disabled?: boolean;
}

interface ICheckboxGroupProps<T extends string | number> {
  id: string;
  label: string;
  options: ICheckboxGroupOption<T>[];
  onChange: (values: T[]) => void;
}

export const CheckboxGroup = <T extends string | number>({
  id,
  label,
  options,
  onChange
}: ICheckboxGroupProps<T>) => {
  const handleClick = (updatedValue: T) => () => {
    const updatedOptions: ICheckboxGroupOption<T>[] = options.map((option) =>
      option.value === updatedValue
        ? { ...option, checked: !option.checked }
        : option
    );
    onChange(
      updatedOptions.filter(({ checked }) => checked).map(({ value }) => value)
    );
  };

  return (
    <div id={`${id}-checkbox-group`}>
      <p className="text-lg font-bold mb-2">{label}</p>
      <div className="flex flex-col gap-1">
        {options.map(({ id, label, value, checked, disabled, icon }) => (
          <div
            key={value}
            className="flex items-center justify-between gap-2 cursor-pointer rounded-md py-[0.1rem] px-2 hover:bg-muted/40"
            onClick={handleClick(value)}
          >
            <div className="flex items-center gap-2">
              <Checkbox id={id} checked={checked} disabled={disabled} />
              <p
                className={cn('cursor-pointer select-none font-medium', {
                  'text-muted-foreground cursor-default': disabled
                })}
              >
                {label}
              </p>
            </div>
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};
