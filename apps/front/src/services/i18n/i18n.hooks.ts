import { useTranslation as useI18nTranslation } from 'react-i18next';
import { useSettings } from '../store/settings/settings.store';
import { fr as fnsFrLocale } from 'date-fns/locale';

export const useTranslation = () => useI18nTranslation().t;

export const useFnsLocale = () => {
  const { lang } = useSettings();
  return lang === 'fr' ? fnsFrLocale : undefined;
};
