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
  label?: string;
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
      {label && <p className="text-base font-bold mb-2">{label}</p>}
      <div className="flex flex-col">
        {options.map(({ id, label, value, checked, disabled, icon }) => (
          <div
            key={value}
            className={cn(
              'group flex items-center justify-between gap-3 cursor-pointer rounded-md py-[0.1rem]',
              { 'cursor-default': disabled }
            )}
            onClick={!disabled ? handleClick(value) : undefined}
          >
            <div className="flex items-center gap-3">
              {icon}
              <p
                className={cn(
                  'cursor-pointer text-sm select-none text-muted-foreground font-medium truncate max-w-48',
                  {
                    'group-hover:text-primary': !disabled,
                    'text-muted-foreground cursor-default': disabled
                  }
                )}
              >
                {label}
              </p>
            </div>
            <Checkbox
              id={id}
              checked={checked}
              disabled={disabled}
              className={cn({
                'border-muted-foreground/50 group-hover:border-primary':
                  !disabled || !checked
              })}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
