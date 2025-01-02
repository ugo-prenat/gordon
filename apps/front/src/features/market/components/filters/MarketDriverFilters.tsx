import cleanDeep from 'clean-deep';
import { ChampionshipsFilter } from './fields/ChampionshipsFilter';
import { SeasonsFilter } from './fields/SeasonsFilter';
import { FiltersContainer } from './FiltersContainer';
import { MarketDriverCardFilters } from '@gordon/models';
import { NameFilter } from './fields/NameFilter';

interface IMarketDriverFiltersProps {
  filters: MarketDriverCardFilters;
  unmodifiableFilters?: MarketDriverCardFilters;
  onFiltersChange: (filters: MarketDriverCardFilters) => void;
}

export const MarketDriverFilters = ({
  filters,
  unmodifiableFilters,
  onFiltersChange
}: IMarketDriverFiltersProps) => {
  const onChange = (key: keyof MarketDriverCardFilters) => (value: unknown) =>
    onFiltersChange(cleanDeep({ ...filters, [key]: value }));

  return (
    <FiltersContainer>
      <NameFilter
        value={filters.name}
        unmodifiableValue={unmodifiableFilters?.name}
        onChange={onChange('name')}
      />
      <ChampionshipsFilter
        onChange={onChange('championships')}
        checkedChampionships={filters.championships}
        unmodifiableCheckedChampionships={unmodifiableFilters?.championships}
      />
      <SeasonsFilter
        onChange={onChange('seasons')}
        checkedSeasons={filters.seasons}
        unmodifiableCheckedSeasons={unmodifiableFilters?.seasons}
      />
    </FiltersContainer>
  );
};
