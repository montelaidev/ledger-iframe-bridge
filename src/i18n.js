import { createInstance } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

const isDevelopment = Boolean(import.meta?.env?.DEV);
const i18nInstance = createInstance();

i18nInstance
  // Load translations from the /locales folder
  .use(Backend)
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    debug: isDevelopment,
    fallbackLng: 'en',
    supportedLngs: ['en', 'es', 'fr', 'zh'],
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
    backend: {
      // Path to load translations from
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    detection: {
      // Order and from where user language should be detected
      order: ['localStorage', 'navigator'],
      // Keys or params to lookup language from
      lookupLocalStorage: 'i18nextLng',
      // Cache user language in localStorage
      caches: ['localStorage'],
    },
    react: {
      useSuspense: true,
    },
  });

export default i18nInstance;
