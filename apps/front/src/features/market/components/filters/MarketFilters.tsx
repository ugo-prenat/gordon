import { ChampionshipsFilter } from './fields/ChampionshipsFilter';
import { SeasonsFilter } from './fields/SeasonsFilter';
import { FiltersContainer } from './FiltersContainer';
import { MarketCardFilters } from '@gordon/models';
import { NameFilter } from './fields/NameFilter';
import { TeamsFilter } from './fields/TeamsFilter';
import { TypesFilter } from './fields/TypesFilter';
import { ValuesFilter } from './fields/ValuesFilter';

interface IMarketFiltersProps {
  filters: MarketCardFilters;
  unmodifiableFilters?: MarketCardFilters;
  onFiltersChange: (key: keyof MarketCardFilters, value: unknown) => void;
}

export const MarketFilters = ({
  filters,
  unmodifiableFilters,
  onFiltersChange
}: IMarketFiltersProps) => {
  const onChange = (key: keyof MarketCardFilters) => (value: unknown) =>
    onFiltersChange(key, value);

  return (
    <FiltersContainer>
      <NameFilter
        value={filters.name}
        driverId={unmodifiableFilters?.driverId}
        unmodifiableValue={unmodifiableFilters?.name}
        onChange={onChange('name')}
      />
      <ValuesFilter onChange={onChange('value')} value={filters.value} />
      <TeamsFilter
        onChange={onChange('teamIds')}
        checkedTeamIds={filters.teamIds}
        unmodifiableCheckedTeamIds={unmodifiableFilters?.teamIds}
      />
      <ChampionshipsFilter
        onChange={onChange('championships')}
        checkedChampionships={filters.championships}
        unmodifiableCheckedChampionships={unmodifiableFilters?.championships}
      />
      <TypesFilter
        onChange={onChange('types')}
        checkedTypes={filters.types}
        unmodifiableCheckedTypes={unmodifiableFilters?.types}
      />
      <SeasonsFilter
        onChange={onChange('seasons')}
        checkedSeasons={filters.seasons}
        unmodifiableCheckedSeasons={unmodifiableFilters?.seasons}
      />
    </FiltersContainer>
  );
};
