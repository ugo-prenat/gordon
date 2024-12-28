import { useQuery } from '@tanstack/react-query';
import {
  IAPIError,
  IMarketDriverCard,
  MarketDriverCardFilters
} from '@gordon/models';
import { api } from '@/services/api/rpc.api';
import { handleRes } from '@/services/api/api.utils';
import ms from 'ms';

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
  name,
  types,
  seasons,
  teamIds,
  championships,
  value
}: MarketDriverCardFilters) =>
  api.market.drivers
    .$get({
      query: {
        name,
        types: types?.join(','),
        seasons: seasons?.join(','),
        teamIds: teamIds?.join(','),
        championships: championships?.join(','),
        value:
          value?.min && value?.max ? `${value.min},${value.max}` : undefined
      }
    })
    .then(handleRes);
