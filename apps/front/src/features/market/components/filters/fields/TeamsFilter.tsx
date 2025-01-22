import { CheckboxGroup } from '@/components/CheckboxGroup';

import { Alert } from '@/components/Alert';
import { ICheckboxGroupOption } from '@/components/CheckboxGroup';
import { Input } from '@/components/ui/input';
import { useTeams } from '@/features/teams/teams.api';
import { useTranslation } from '@/services/i18n/i18n.hooks';
import { ChangeEvent, useMemo, useState } from 'react';
import { TeamLogo } from '@/components/pictures/TeamLogo';

interface ITeamsFilterProps {
  checkedTeamIds: string[] | undefined;
  unmodifiableCheckedTeamIds: string[] | undefined;
  onChange: (teamIds: string[]) => void;
}

export const TeamsFilter = ({
  onChange,
  checkedTeamIds,
  unmodifiableCheckedTeamIds
}: ITeamsFilterProps) => {
  const t = useTranslation();

  const { data, isLoading, isError, error, refetch } = useTeams();

  const [inputSearch, setInputSearch] = useState('');

  const filteredTeams = useMemo(
    () =>
      (data || []).filter(({ id, name }) =>
        [id.toLowerCase(), name.toLowerCase()].some((value) =>
          value.includes(inputSearch.toLowerCase())
        )
      ),
    [data, inputSearch]
  );

  const isInputDisabled = isLoading || isError;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInputSearch(e.target.value);

  console.log(data, filteredTeams);

  const options: ICheckboxGroupOption<string>[] = filteredTeams.map(
    ({ id, name, darkLogoPath, lightLogoPath }) => ({
      id,
      value: id,
      label: name,
      icon: (
        <TeamLogo
          id={id}
          darkLogoPath={darkLogoPath}
          lightLogoPath={lightLogoPath}
          className="w-6 h-6"
        />
      ),
      checked: checkedTeamIds?.includes(id) || false,
      disabled: unmodifiableCheckedTeamIds?.includes(id) || false
    })
  );

  return (
    <div>
      {isLoading && <div>Loading teams...</div>}
      {isError && (
        <Alert
          error={error}
          severity="error"
          action={refetch}
          text={t('page.market.teams.retrieve.error')}
        />
      )}

      <p className="text-base font-bold mb-2">{t('teams')}</p>

      <Input
        className="mb-3"
        value={inputSearch}
        onChange={handleChange}
        placeholder={t('page.marlet.filters.teams.search')}
        disabled={isInputDisabled}
      />
      {data && (
        <CheckboxGroup id="teams" options={options} onChange={onChange} />
      )}
    </div>
  );
};
