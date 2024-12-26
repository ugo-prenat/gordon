import { api } from '@/services/api/rpc.api';
import { handleRes } from '@/services/api/api.utils';
import { IAPIError, IDriver } from '@gordon/models';
import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

export const useDriver = (id: string) =>
  useQuery<IDriver, IAPIError>({
    queryKey: ['driver', id],
    queryFn: () => fetchDriver(id),
    staleTime: ms('10m')
  });

const fetchDriver = (id: string) =>
  api.drivers[':id'].$get({ param: { id } }).then(handleRes);
