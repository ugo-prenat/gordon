import { api, handleRes } from '@/services/api/api.utils';
import {
  IAPIError,
  ICompleteUserChassisCard,
  ICompleteUserDriverCard,
  IMarketChassisCard,
  IMarketDriverCard,
  IUser,
  Resource
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

export const useUserPossessCard = (id: string, resource: Resource) =>
  useQuery<{ id: string }, IAPIError>({
    queryKey: ['userCard', id, resource],
    queryFn: () => fetchUserPossessCard(id, resource),
    retry: false
  });

const fetchUserPossessCard = (
  id: string,
  resource: Resource
): Promise<{ id: string }> =>
  resource === 'driver'
    ? api.cards.drivers[':id']
        .$get({ param: { id } })
        .then(handleRes)
        .then(({ id }) => ({ id }))
    : api.cards.chassis[':id']
        .$get({ param: { id } })
        .then(handleRes)
        .then(({ id }) => ({ id }));

export const useTradeUserCard = (
  action: TradeAction,
  id: string,
  resource: Resource
) =>
  useMutation<IUser, IAPIError>({
    mutationFn: () => fetchTradeUserCard(action, id, resource),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userCard', id, resource] });
    }
  });

const fetchTradeUserCard = (
  action: TradeAction,
  id: string,
  resource: Resource
): Promise<IUser> => {
  if (resource === 'driver') {
    return action === 'buy'
      ? (api.cards.drivers.buy
          .$post({ json: { cardId: id } })
          .then(handleRes) as Promise<IUser>)
      : (api.cards.drivers.sell
          .$post({ json: { cardId: id } })
          .then(handleRes) as Promise<IUser>);
  }
  return action === 'buy'
    ? (api.cards.chassis.buy
        .$post({ json: { cardId: id } })
        .then(handleRes) as Promise<IUser>)
    : (api.cards.chassis.sell
        .$post({ json: { cardId: id } })
        .then(handleRes) as Promise<IUser>);
};

export const useUserDriverCard = (id: string) =>
  useQuery<ICompleteUserDriverCard, IAPIError>({
    queryKey: ['userDriverCard', id],
    queryFn: () => fetchUserDriverCard(id)
  });

const fetchUserDriverCard = (id: string): Promise<ICompleteUserDriverCard> =>
  api.cards.drivers[':id'].$get({ param: { id } }).then(handleRes);

export const useChassisCard = (id: string) =>
  useQuery<IMarketChassisCard, IAPIError>({
    queryKey: ['chassisCard', id],
    queryFn: () => fetchChassisCard(id),
    staleTime: ms('10m')
  });

const fetchChassisCard = (id: string) =>
  api.market.cards.chassis[':id'].$get({ param: { id } }).then(handleRes);

export const useUserChassisCard = (id: string) =>
  useQuery<ICompleteUserChassisCard, IAPIError>({
    queryKey: ['userChassisCard', id],
    queryFn: () => fetchUserChassisCard(id),
    retry: false
  });

const fetchUserChassisCard = (id: string): Promise<ICompleteUserChassisCard> =>
  api.cards.chassis[':id'].$get({ param: { id } }).then(handleRes);
