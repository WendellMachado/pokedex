import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en/translations.json';
import pt from './locales/pt/translations.json';
import es from './locales/es/translations.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    pt: {
      translation: pt,
    },
    es: {
      translation: es,
    },
  },
  lng: 'pt',
  fallbackLng: 'pt',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
