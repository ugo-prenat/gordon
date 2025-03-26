import { MarketCardFilters } from '@gordon/models';
import { useState } from 'react';
import { mergeFilters } from './market.utils';
import { UseNavigateResult } from '@tanstack/react-router';

interface IUseMarketFiltersProps {
  defaultFilters: MarketCardFilters;
  otherFilters: Record<string, unknown>;
  unmodifiableFilters: MarketCardFilters;
  navigate: UseNavigateResult<'/market'>;
}

export const useMarketFilters = ({
  defaultFilters,
  unmodifiableFilters,
  otherFilters,
  navigate
}: IUseMarketFiltersProps) => {
  const [filters, setFilters] = useState<MarketCardFilters>(
    mergeFilters(defaultFilters, unmodifiableFilters)
  );

  const onFiltersChange = (key: keyof MarketCardFilters, value: unknown) => {
    const newFilters = mergeFilters(
      { ...filters, [key]: value },
      unmodifiableFilters
    );
    setFilters(newFilters);
    navigate({ search: { ...otherFilters, ...newFilters } });
  };

  const onClearFilters = () => {
    setFilters({});
    navigate({ search: otherFilters });
  };

  return { filters, onFiltersChange, onClearFilters };
};
