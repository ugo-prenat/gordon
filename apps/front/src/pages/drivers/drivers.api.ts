import { client } from '@/services/api/api';
import { handleRes } from '@/services/api/api.utils';
import { APIError, IDriver } from '@gordon/models';
import { useQuery } from '@tanstack/react-query';

export const useDrivers = () =>
  useQuery<IDriver[], APIError>({
    queryKey: ['drivers'],
    queryFn: () => fetchDrivers(),
    retry: false
  });

const fetchDrivers = () => client.drivers.$get().then(handleRes);
