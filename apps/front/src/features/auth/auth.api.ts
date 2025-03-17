import { handleRes } from '@/services/api/api.utils';
import { api } from '@/services/api/api.utils';
import { IAPIError, IUser, RegistrationUser } from '@gordon/models';
import { useMutation } from '@tanstack/react-query';

export const useAuthRegistration = () =>
  useMutation<{ jwt: string }, IAPIError, RegistrationUser>({
    mutationFn: (user: RegistrationUser) => fetchAuthRegistration(user)
  });

const fetchAuthRegistration = (user: RegistrationUser) =>
  api.auth.register.$post({ json: user }).then(handleRes);

export const fetchAuthRefreshToken = () => api.auth.refresh.$post();

export const fetchAuthenticateUser = () =>
  api.auth.$get().then(handleRes) as Promise<IUser>;
