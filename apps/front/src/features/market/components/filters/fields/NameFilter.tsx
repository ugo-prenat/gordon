import { ChangeEvent, useState } from 'react';
import { Input } from '@/components/ui/input';
import { useTranslation } from '@/services/i18n/i18n.hooks';
import { useDebounce } from '@/hooks/useDebounce';

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

  const debouncedSearch = useDebounce(onChange, 700);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <Input
      value={inputValue}
      placeholder={t('name')}
      onChange={handleChange}
      disabled={!!unmodifiableValue}
    />
  );
};
