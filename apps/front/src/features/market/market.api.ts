import { useQuery } from '@tanstack/react-query';
import {
  IAPIError,
  IMarketDriverCard,
  MarketDriverCardFilters
} from '@gordon/models';
import { api, handleRes } from '@/services/api/api.utils';
import ms from 'ms';
import { isNotEmpty } from '@gordon/utils';

export const useMarketDrivers = (
  filters: MarketDriverCardFilters,
  unmodifiableFilters?: MarketDriverCardFilters
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
}: MarketDriverCardFilters) =>
  api.cards.drivers.market
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
