import {
  CheckboxGroup,
  ICheckboxGroupOption
} from '@/components/CheckboxGroup';
import { ChampionshipLogo } from '@/components/pictures/ChampionshipLogo';
import { useTranslation } from '@/services/i18n/i18n.hooks';
import { Championship, CHAMPIONSHIPS } from '@gordon/models';

interface IChampionshipsFilterProps {
  checkedChampionships: Championship[] | undefined;
  unmodifiableCheckedChampionships: Championship[] | undefined;
  onChange: (championships: Championship[]) => void;
}

export const ChampionshipsFilter = ({
  checkedChampionships = [],
  unmodifiableCheckedChampionships = [],
  onChange
}: IChampionshipsFilterProps) => {
  const t = useTranslation();

  const options: ICheckboxGroupOption<Championship>[] = CHAMPIONSHIPS.map(
    (championship) => ({
      id: championship,
      value: championship,
      checked: [
        ...checkedChampionships,
        ...unmodifiableCheckedChampionships
      ].includes(championship),
      label: t(`championships.${championship}`),
      icon: <ChampionshipLogo championship={championship} classname="w-7" />,
      disabled: unmodifiableCheckedChampionships.includes(championship)
    })
  );

  return (
    <CheckboxGroup
      id="championships"
      options={options}
      onChange={onChange}
      label={t('championships')}
    />
  );
};
