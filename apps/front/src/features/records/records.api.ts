import { api } from '@/services/api/rpc.api';
import { handleRes } from '@/services/api/api.utils';
import { IAPIError, IRecord } from '@gordon/models';
import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

export const useDriverRecords = (id: string) =>
  useQuery<IRecord[], IAPIError>({
    queryKey: ['driverRecords', id],
    queryFn: () => fetchDriverRecords(id),
    staleTime: ms('10m')
  });

const fetchDriverRecords = (id: string) =>
  api.drivers[':id'].records.$get({ param: { id } }).then(handleRes);
