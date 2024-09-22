import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { useSettings } from '../store/settings/settings.store';

import en from './en.json';
import fr from './fr.json';

i18next.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr }
  },
  lng: useSettings.getState().lang
});
