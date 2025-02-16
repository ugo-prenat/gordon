import { FC } from 'react';
import { Select, SelectOption } from '@/components/Select';
import { useTranslation } from '@/services/i18n/i18n.hooks';
import { CARD_TYPES_WITH_VALUES, CardTypeWithValues } from '@gordon/models';

export const CardTypeSelect: FC<{
  type: CardTypeWithValues;
  onChange: (type: CardTypeWithValues) => void;
  disabled: boolean;
}> = ({ type, onChange, disabled }) => {
  const t = useTranslation();

  const options: SelectOption<CardTypeWithValues>[] =
    CARD_TYPES_WITH_VALUES.map((option) => ({
      value: option,
      label: t(`cards.types.${option}`)
    }));

  return (
    <Select
      value={type}
      options={options}
      label={t('type')}
      onChange={onChange}
      disabled={disabled}
      className="w-[115px]"
    />
  );
};
