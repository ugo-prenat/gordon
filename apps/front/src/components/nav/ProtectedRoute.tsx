import { Outlet } from '@tanstack/react-router';
import { useAuthStore } from '@/services/store/auth/auth.stores';
import { fetchAuthenticateUser } from '@/features/auth/auth.api';
import { useEffect } from 'react';
import { handleKillSession } from '@/services/api/api.utils';
import { useTranslation } from '@/services/i18n/i18n.hooks';
import { ShinyText } from '../ShinyText';

export const ProtectedRoute = () => {
  const t = useTranslation();
  const { isAuthenticated, authenticateUser } = useAuthStore();

  const handleAuthenticateUser = () =>
    fetchAuthenticateUser().then(authenticateUser).catch(handleKillSession);

  useEffect(() => {
    if (!isAuthenticated) handleAuthenticateUser();
  }, []);

  if (!isAuthenticated)
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <ShinyText text={t('session.loading')} />
      </div>
    );

  return <Outlet />;
};
