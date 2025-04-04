import { api, handleRes } from '@/services/api/api.utils';
import { IUserTeam } from '@gordon/models';

import { IAPIError } from '@gordon/models';
import { useQuery } from '@tanstack/react-query';

export const useMyTeam = () =>
  useQuery<IUserTeam, IAPIError>({
    queryKey: ['myTeam'],
    queryFn: () => fetchMyTeam()
  });

const fetchMyTeam = () => api['my-team'].$get().then(handleRes);
