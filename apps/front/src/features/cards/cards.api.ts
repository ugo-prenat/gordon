import { api, handleRes } from '@/services/api/api.utils';
import { IAPIError, IMarketDriverCard } from '@gordon/models';
import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

export const useDriverCard = (id: string) =>
  useQuery<IMarketDriverCard, IAPIError>({
    queryKey: ['driverCard', id],
    queryFn: () => fetchDriverCard(id),
    staleTime: ms('10m')
  });

const fetchDriverCard = (id: string) =>
  api.cards.drivers.market[':id'].$get({ param: { id } }).then(handleRes);
