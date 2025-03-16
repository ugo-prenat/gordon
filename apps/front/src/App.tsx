import { updateRootElement } from './services/store/settings/settings.utils';
import { useEffect } from 'react';
import { useSettings } from './services/store/settings/settings.stores';
import { Toaster } from './components/ui/sonner';
import { toast } from 'sonner';
import { useTranslation } from './services/i18n/i18n.hooks';
import { isSessionKilled, isSessionRefreshed } from './services/api/api.utils';

export const App = () => {
  const { theme } = useSettings();
  const t = useTranslation();

  useEffect(() => {
    updateRootElement(theme);
  }, []);

  useEffect(() => {
    if (isSessionRefreshed()) toast.success(t('session.refreshed'));
    if (isSessionKilled()) toast.error(t('session.killed'));
  }, []);

  return (
    <>
      <Toaster />
    </>
  );
};
