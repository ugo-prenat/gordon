import { api } from '@/services/api/rpc.api';
import { handleRes } from '@/services/api/api.utils';
import {
  CardTypeWithValues,
  IAPIError,
  IFrontDriverCardValue
} from '@gordon/models';
import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

export const useDriverCardsValues = (id: string, type: CardTypeWithValues) =>
  useQuery<IFrontDriverCardValue[], IAPIError>({
    queryKey: ['driverCardsValues', id, type],
    queryFn: () => fetchDriverCardsValues(id, type),
    staleTime: ms('10m')
  });

const fetchDriverCardsValues = (id: string, type: CardTypeWithValues) =>
  api.drivers[':id'].values
    .$get({ param: { id }, query: { type } })
    .then(handleRes);
