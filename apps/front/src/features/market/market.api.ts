import { useQuery } from '@tanstack/react-query';
import { IAPIError, IMarketDriverCard } from '@gordon/models';
import { api } from '@/services/api/api';
import { handleRes } from '@/services/api/api.utils';
import ms from 'ms';

export const useMarketDrivers = () =>
  useQuery<IMarketDriverCard[], IAPIError>({
    queryKey: ['marketDrivers'],
    queryFn: () => fetchMarketDrivers(),
    staleTime: ms('10m')
  });

const fetchMarketDrivers = () => api.market.drivers.$get().then(handleRes);
