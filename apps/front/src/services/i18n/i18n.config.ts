import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { useSettings } from '../store/settings/settings.stores';

import en from './en.json';
import fr from './fr.json';

import countries from 'i18n-iso-countries';
import enCountries from 'i18n-iso-countries/langs/en.json';
import frCountries from 'i18n-iso-countries/langs/fr.json';

countries.registerLocale(enCountries);
countries.registerLocale(frCountries);

i18next.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr }
  },
  lng: useSettings.getState().lang
});
