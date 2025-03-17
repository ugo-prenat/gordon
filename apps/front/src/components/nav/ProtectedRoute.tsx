import { Outlet, useNavigate } from '@tanstack/react-router';
import { useAuthStore } from '@/services/store/auth/auth.stores';
import { fetchAuthenticateUser } from '@/features/auth/auth.api';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { useTranslation } from '@/services/i18n/i18n.hooks';
import { wait } from '@gordon/utils';

export const ProtectedRoute = () => {
  const t = useTranslation();
  const navigate = useNavigate();
  const { isAuthenticated, authenticateUser } = useAuthStore();

  const handleAuthenticateUser = () =>
    fetchAuthenticateUser()
      .then((user) => wait(1000).then(() => authenticateUser(user)))
      .catch(() => {
        toast.error(t('session.killed'));
        navigate({ to: '/' });
      });

  useEffect(() => {
    if (!isAuthenticated) handleAuthenticateUser();
  }, []);

  if (!isAuthenticated)
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        loading chef
      </div>
    );

  return <Outlet />;
};
