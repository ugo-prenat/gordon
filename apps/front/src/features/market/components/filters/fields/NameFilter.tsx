import { Input } from '@/components/ui/input';
import { useTranslation } from '@/services/i18n/i18n.hooks';
import { useState } from 'react';
import { useDebouncedCallback as useDebounce } from 'use-debounce';

interface INameFilterProps {
  value: string | undefined;
  unmodifiableValue: string | undefined;
  onChange: (name: string) => void;
}

export const NameFilter = ({
  value,
  unmodifiableValue,
  onChange
}: INameFilterProps) => {
  const [inputValue, setInputValue] = useState(
    unmodifiableValue || value || ''
  );
  const t = useTranslation();

  const handleChange = (newValue: string) => {
    setInputValue(newValue);

    useDebounce(() => {
      onChange(newValue);
    }, 700);
  };

  return (
    <Input
      placeholder={t('name')}
      disabled={!!unmodifiableValue}
      value={inputValue}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};
