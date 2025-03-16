import { updateRootElement } from './services/store/settings/settings.utils';
import { useEffect } from 'react';
import { useSettings } from './services/store/settings/settings.stores';
import { Toaster } from './components/ui/sonner';
import { toast } from 'sonner';
import { useTranslation } from './services/i18n/i18n.hooks';
import { isSessionRefreshed } from './services/api/rpc.api';

export const App = () => {
  const { theme } = useSettings();
  const t = useTranslation();

  useEffect(() => {
    updateRootElement(theme);
  }, []);

  useEffect(() => {
    if (isSessionRefreshed()) toast.success(t('session.refreshed'));
  }, []);

  return (
    <>
      <Toaster />
    </>
  );
};
