import { api, handleRes } from '@/services/api/api.utils';
import {
  IAPIError,
  ICompleteUserDriverCard,
  IMarketDriverCard,
  IUser
} from '@gordon/models';
import { useMutation, useQuery } from '@tanstack/react-query';
import ms from 'ms';
import { TradeAction } from './components/CardTradeBtn';
import { queryClient } from '@/services/api/queryClient.api';

export const useDriverCard = (id: string) =>
  useQuery<IMarketDriverCard, IAPIError>({
    queryKey: ['driverCard', id],
    queryFn: () => fetchDriverCard(id),
    staleTime: ms('10m')
  });

const fetchDriverCard = (id: string) =>
  api.market.cards.drivers[':id'].$get({ param: { id } }).then(handleRes);

export const useUserDriverCard = (id: string) =>
  useQuery<ICompleteUserDriverCard, IAPIError>({
    queryKey: ['userDriverCard', id],
    queryFn: () => fetchUserDriverCard(id),
    retry: false
  });

const fetchUserDriverCard = (id: string): Promise<ICompleteUserDriverCard> =>
  api.cards.drivers[':id'].$get({ param: { id } }).then(handleRes);

export const useTradeUserDriverCard = (action: TradeAction, id: string) =>
  useMutation<IUser, IAPIError>({
    mutationFn: () => fetchTradeUserDriverCard(action, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userDriverCard', id] });
    }
  });

const fetchTradeUserDriverCard = (
  action: TradeAction,
  id: string
): Promise<IUser> =>
  action === 'buy'
    ? (api.cards.drivers.buy
        .$post({ json: { cardId: id } })
        .then(handleRes) as Promise<IUser>)
    : (api.cards.drivers.sell
        .$post({ json: { cardId: id } })
        .then(handleRes) as Promise<IUser>);
