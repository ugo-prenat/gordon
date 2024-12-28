import cleanDeep from 'clean-deep';
import { ChampionshipsFilter } from './fields/ChampionshipsFilter';
import { FiltersContainer } from './FiltersContainer';
import { MarketDriverCardFilters } from '@gordon/models';

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
  const onChange = (key: keyof MarketDriverCardFilters) => (value: unknown) => {
    onFiltersChange(cleanDeep({ ...filters, [key]: value }));
  };

  return (
    <FiltersContainer>
      <ChampionshipsFilter
        onChange={onChange('championships')}
        checkedChampionships={filters.championships}
        unmodifiableCheckedChampionships={unmodifiableFilters?.championships}
      />
    </FiltersContainer>
  );
};
