import {
  CheckboxGroup,
  ICheckboxGroupOption
} from '@/components/CheckboxGroup';
import { useTranslation } from '@/services/i18n/i18n.hooks';

interface ISeasonsFilterProps {
  checkedSeasons: number[] | undefined;
  unmodifiableCheckedSeasons: number[] | undefined;
  onChange: (seasons: number[]) => void;
}

export const SeasonsFilter = ({
  checkedSeasons = [],
  unmodifiableCheckedSeasons = [],
  onChange
}: ISeasonsFilterProps) => {
  const t = useTranslation();

  const options: ICheckboxGroupOption<number>[] = [2024, 2025].map(
    (season) => ({
      value: season,
      id: String(season),
      checked: [...checkedSeasons, ...unmodifiableCheckedSeasons].includes(
        season
      ),
      label: String(season),
      disabled: unmodifiableCheckedSeasons.includes(season)
    })
  );

  return (
    <CheckboxGroup
      id="seasons"
      options={options}
      onChange={onChange}
      label={t('seasons')}
    />
  );
};
