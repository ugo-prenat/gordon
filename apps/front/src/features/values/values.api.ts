import { api } from '@/services/api/rpc.api';
import { handleRes } from '@/services/api/api.utils';
import {
  CardTypeWithValues,
  DriverCardsValuesTimeRange,
  IAPIError,
  IFrontDriverCardValue
} from '@gordon/models';
import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

export const useDriverCardsValues = (
  id: string,
  type: CardTypeWithValues,
  range: DriverCardsValuesTimeRange
) =>
  useQuery<IFrontDriverCardValue[], IAPIError>({
    queryKey: ['driverCardsValues', id, type, range],
    queryFn: () => fetchDriverCardsValues(id, type, range),
    staleTime: ms('10m')
  });

const fetchDriverCardsValues = (
  id: string,
  type: CardTypeWithValues,
  range: DriverCardsValuesTimeRange
) =>
  api.drivers[':id'].values
    .$get({ param: { id }, query: { type, range } })
    .then(handleRes);
