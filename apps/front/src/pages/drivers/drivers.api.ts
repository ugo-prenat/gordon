import { api } from '@/services/api/api';
import { handleRes } from '@/services/api/api.utils';
import { IAPIError, IDriver, IRecord } from '@gordon/models';
import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

export const useDrivers = () =>
  useQuery<IDriver[], IAPIError>({
    queryKey: ['drivers'],
    queryFn: () => fetchDrivers(),
    staleTime: ms('10m')
  });

const fetchDrivers = () => api.drivers.$get().then(handleRes);

export const useDriver = (id: string) =>
  useQuery<IDriver, IAPIError>({
    queryKey: ['driver', id],
    queryFn: () => fetchDriver(id),
    staleTime: ms('10m')
  });

const fetchDriver = (id: string) =>
  api.drivers[':id'].$get({ param: { id } }).then(handleRes);

export const useDriverRecords = (id: string) =>
  useQuery<IRecord[], IAPIError>({
    queryKey: ['driverRecords', id],
    queryFn: () => fetchDriverRecords(id),
    staleTime: ms('10m')
  });

const fetchDriverRecords = (id: string) =>
  api.drivers[':id'].records.$get({ param: { id } }).then(handleRes);
