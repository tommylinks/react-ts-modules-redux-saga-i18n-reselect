import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import LanguageDetector from 'i18next-browser-languagedetector';
import locales from '../locales';

export default i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    load: 'languageOnly',
    nonExplicitWhitelist: false,
    fallbackLng: ['en'],
    debug: false,
    resources: locales,
    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    // react i18next special options (optional)
    react: {
      wait: true,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default',
      useSuspense: false,
    },
  });
