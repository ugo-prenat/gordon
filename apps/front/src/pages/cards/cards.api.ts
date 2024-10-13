import { api } from '@/services/api/api';
import { handleRes } from '@/services/api/api.utils';
import {
  IAPIError,
  IMarketDriverCard,
  USER_DRIVER_CARDS_TYPE_ID
} from '@gordon/models';
import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

export const useDriverCard = (id: string) =>
  useQuery<IMarketDriverCard, IAPIError>({
    queryKey: ['driverCard', id],
    queryFn: () => fetchDriverCard(id),
    staleTime: ms('10m')
  });

const fetchDriverCard = (id: string) =>
  api.cards[USER_DRIVER_CARDS_TYPE_ID][':id']
    .$get({ param: { id } })
    .then(handleRes);
