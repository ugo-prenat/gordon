import {
  CheckboxGroup,
  ICheckboxGroupOption
} from '@/components/CheckboxGroup';
import { CardTypeLogo } from '@/components/pictures/CardTypeLogo';
import { useTranslation } from '@/services/i18n/i18n.hooks';
import { CARD_TYPES, CardType } from '@gordon/models';

interface ITypesFilterProps {
  onChange: (value: CardType[]) => void;
  checkedTypes: CardType[] | undefined;
  unmodifiableCheckedTypes: CardType[] | undefined;
}

export const TypesFilter = ({
  onChange,
  checkedTypes = [],
  unmodifiableCheckedTypes = []
}: ITypesFilterProps) => {
  const t = useTranslation();

  const options: ICheckboxGroupOption<CardType>[] = CARD_TYPES.map((type) => ({
    id: type,
    value: type,
    label: t(`cards.types.${type}`),
    icon: <CardTypeLogo type={type} />,
    disabled: unmodifiableCheckedTypes.includes(type),
    checked: [...checkedTypes, ...unmodifiableCheckedTypes].includes(type)
  }));

  return (
    <CheckboxGroup
      id="types"
      options={options}
      onChange={onChange}
      label={t('cards.types')}
    />
  );
};
