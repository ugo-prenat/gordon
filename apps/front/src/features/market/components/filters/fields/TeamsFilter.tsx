import { Alert } from '@/components/Alert';
import {
  CheckboxGroup,
  ICheckboxGroupOption
} from '@/components/CheckboxGroup';
import { Input } from '@/components/ui/input';
import { useTeams } from '@/features/teams/teams.api';
import { useTranslation } from '@/services/i18n/i18n.hooks';
import { ChangeEvent, useMemo, useState } from 'react';
import { TeamLogo } from '@/components/pictures/TeamLogo';
import { Skeleton } from '@/components/Skeleton';
import { isEmpty, isNotEmpty } from '@gordon/utils';
import { Description } from '@/components/typography';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/utils/tailwind.utils';

interface ITeamsFilterProps {
  checkedTeamIds: string[] | undefined;
  unmodifiableCheckedTeamIds: string[] | undefined;
  onChange: (teamIds: string[]) => void;
}

export const TeamsFilter = ({
  onChange,
  checkedTeamIds = [],
  unmodifiableCheckedTeamIds = []
}: ITeamsFilterProps) => {
  const t = useTranslation();

  const { data, isLoading, isError, error } = useTeams();

  const MIN_TEAMS_TO_SHOW = 10;

  const [inputSearch, setInputSearch] = useState('');
  const [showAllTeams, setShowAllTeams] = useState(false);

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

  const handleToggleShowAllTeams = () => setShowAllTeams(!showAllTeams);

  const options: ICheckboxGroupOption<string>[] = filteredTeams
    .map(({ id, name, darkLogoPath, lightLogoPath }) => ({
      id,
      value: id,
      label: name,
      icon: (
        <TeamLogo
          id={id}
          className="w-6 h-6"
          darkLogoPath={darkLogoPath}
          lightLogoPath={lightLogoPath}
        />
      ),
      checked:
        [...checkedTeamIds, ...unmodifiableCheckedTeamIds].includes(id) ||
        false,
      disabled: unmodifiableCheckedTeamIds?.includes(id) || false
    }))
    .sort((a, b) => Number(b.checked) - Number(a.checked))
    .slice(0, showAllTeams ? undefined : MIN_TEAMS_TO_SHOW);

  return (
    <div>
      <p className="text-base font-bold mb-2">{t('teams')}</p>

      <Input
        className="mb-3"
        value={inputSearch}
        onChange={handleChange}
        disabled={isInputDisabled}
        placeholder={t('page.market.filters.teams.search')}
      />
      {isLoading && <LoadingState />}
      {isError && (
        <Alert
          error={error}
          severity="error"
          text={t('page.market.teams.retrieve.error')}
        />
      )}
      {data && isNotEmpty(options) && (
        <>
          <CheckboxGroup id="teams" options={options} onChange={onChange} />
          <ShowMoreOrLessButton
            showAllTeams={showAllTeams}
            onChange={handleToggleShowAllTeams}
          />
        </>
      )}
      {isEmpty(options) && (
        <Description>{t('page.market.filters.teams.noResults')}</Description>
      )}
    </div>
  );
};

const ShowMoreOrLessButton = ({
  showAllTeams,
  onChange
}: {
  showAllTeams: boolean;
  onChange: () => void;
}) => {
  const t = useTranslation();

  return (
    <Description
      onClick={onChange}
      className="flex items-center gap-1 cursor-pointer hover:text-primary mt-2"
    >
      <ChevronDown
        className={cn('w-5 h-5 transition-transform duration-200', {
          'rotate-180': showAllTeams
        })}
      />
      {t(`showMore.${!showAllTeams}`)}
    </Description>
  );
};

const LoadingState = () => (
  <div className="flex flex-col gap-2">
    <Skeleton className="w-full h-5" />
    <Skeleton className="w-full h-5" />
    <Skeleton className="w-full h-5" />
    <Skeleton className="w-full h-5" />
    <Skeleton className="w-full h-5" />
  </div>
);
