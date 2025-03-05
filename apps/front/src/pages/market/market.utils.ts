import { MarketDriverCardFilters } from '@gordon/models';
import { MarketTab } from './market.models';
import cleanDeep from 'clean-deep';

export const buildTabTitle = (tab: MarketTab) => `page.market.tabTitle.${tab}`;

export const mergeFilters = (
  filters: MarketDriverCardFilters,
  unmodifiableFilters: MarketDriverCardFilters
): MarketDriverCardFilters =>
  cleanDeep({
    ...filters,
    ...unmodifiableFilters,
    name: unmodifiableFilters.name?.trim() || filters.name?.trim(),
    championships: [
      ...(filters.championships || []),
      ...(unmodifiableFilters.championships || [])
    ],
    value: {
      min: filters.value?.min,
      max: filters.value?.max
    },
    seasons: [
      ...new Set([
        ...(filters.seasons || []),
        ...(unmodifiableFilters.seasons || [])
      ])
    ],
    teamIds: [
      ...new Set([
        ...(filters.teamIds || []),
        ...(unmodifiableFilters.teamIds || [])
      ])
    ],
    types: [
      ...new Set([
        ...(filters.types || []),
        ...(unmodifiableFilters.types || [])
      ])
    ]
  });
