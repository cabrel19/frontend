import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';
import en from './locales/en.json';
import fr from './locales/fr.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en: { translation: en },
    fr: { translation: fr }
  },
  lng: Localization.locale.startsWith('fr') ? 'fr' : 'en', // Langue par défaut basée sur les paramètres du téléphone
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false // React already safes from xss
  }
});

export default i18n;