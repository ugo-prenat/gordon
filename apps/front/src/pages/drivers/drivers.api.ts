import { client } from '@/services/api/api';
import { handleRes } from '@/services/api/api.utils';
import { IAPIError, IDriver, IRecord } from '@gordon/models';
import { useQuery } from '@tanstack/react-query';

export const useDrivers = () =>
  useQuery<IDriver[], IAPIError>({
    queryKey: ['drivers'],
    queryFn: () => fetchDrivers(),
    retry: false
  });

const fetchDrivers = () => client.drivers.$get().then(handleRes);

export const useDriver = (id: string) =>
  useQuery<IDriver, IAPIError>({
    queryKey: ['driver', id],
    queryFn: () => fetchDriver(id),
    retry: false
  });

const fetchDriver = (id: string) =>
  client.drivers[':id'].$get({ param: { id } }).then(handleRes);

export const useDriverRecords = (id: string) =>
  useQuery<IRecord[], IAPIError>({
    queryKey: ['driverRecords', id],
    queryFn: () => fetchDriverRecords(id),
    retry: false
  });

const fetchDriverRecords = (id: string) =>
  client.drivers[':id'].records.$get({ param: { id } }).then(handleRes);
