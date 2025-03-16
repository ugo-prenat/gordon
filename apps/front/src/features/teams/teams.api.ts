import { useQuery } from '@tanstack/react-query';
import { IAPIError, ITeam } from '@gordon/models';
import { handleRes, api } from '@/services/api/api.utils';
import ms from 'ms';

export const useTeams = () =>
  useQuery<ITeam[], IAPIError>({
    queryKey: ['teams'],
    queryFn: () => fetchTeams(),
    staleTime: ms('1h')
  });

const fetchTeams = () => api.teams.$get().then(handleRes);
