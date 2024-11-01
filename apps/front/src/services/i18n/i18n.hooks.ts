import { useTranslation as useI18nTranslation } from 'react-i18next';
import { useSettings } from '../store/settings/settings.stores';
import { fr as fnsFrLocale } from 'date-fns/locale';
import countries from 'i18n-iso-countries';

export const useTranslation = () => useI18nTranslation().t;

export const useFnsLocale = () => {
  const { lang } = useSettings();
  return lang === 'fr' ? fnsFrLocale : undefined;
};

export const useCountryName = (countryCode: string) => {
  const { lang } = useSettings();
  return countries.getName(countryCode, lang);
};
