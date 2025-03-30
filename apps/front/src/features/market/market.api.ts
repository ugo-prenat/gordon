import { useQuery } from '@tanstack/react-query';
import {
  IAPIError,
  IMarketChassisCard,
  IMarketDriverCard,
  MarketChassisCardFilters,
  MarketCardFilters
} from '@gordon/models';
import { api, handleRes } from '@/services/api/api.utils';
import ms from 'ms';
import { isNotEmpty } from '@gordon/utils';

export const useMarketDrivers = (
  filters: MarketCardFilters,
  unmodifiableFilters?: MarketCardFilters
) =>
  useQuery<IMarketDriverCard[], IAPIError>({
    queryKey: ['marketDrivers', filters],
    queryFn: () => fetchMarketDrivers({ ...filters, ...unmodifiableFilters }),
    staleTime: ms('10m')
  });

const fetchMarketDrivers = ({
  driverId,
  name,
  types,
  seasons,
  teamIds,
  championships,
  value
}: MarketCardFilters) =>
  api.market.drivers
    .$get({
      query: {
        name,
        driverId,
        types: types?.join(','),
        seasons: seasons?.join(','),
        teamIds: teamIds?.join(','),
        championships: championships?.join(','),
        value:
          isNotEmpty(value?.min) && isNotEmpty(value?.max)
            ? `${value?.min},${value?.max}`
            : undefined
      }
    })
    .then(handleRes);

export const useMarketChassis = (
  filters: MarketChassisCardFilters,
  unmodifiableFilters?: MarketChassisCardFilters
) =>
  useQuery<IMarketChassisCard[], IAPIError>({
    queryKey: ['marketChassis', filters],
    queryFn: () => fetchMarketChassis({ ...filters, ...unmodifiableFilters }),
    staleTime: ms('10m')
  });

const fetchMarketChassis = ({
  chassisId,
  name,
  teamIds,
  seasons,
  championships,
  value
}: MarketChassisCardFilters) =>
  api.market.chassis
    .$get({
      query: {
        chassisId,
        name,
        teamIds: teamIds?.join(','),
        seasons: seasons?.join(','),
        championships: championships?.join(','),
        value:
          isNotEmpty(value?.min) && isNotEmpty(value?.max)
            ? `${value?.min},${value?.max}`
            : undefined
      }
    })
    .then(handleRes);
