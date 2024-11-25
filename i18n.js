/*
 * Arber Mahmuti
 * Version: 1.0
 * Date: 2024-11-24
 * Description: i18n configuration file for internationalization using react-i18next.
 * This file sets up language resources, default language, and translation behavior.
 */

import i18n from 'i18next'; // Main i18n library
import { initReactI18next } from 'react-i18next'; // React-specific i18n integration

// Import translation files
import en from './locales/en.json'; // English translations
import de from './locales/de.json'; // German translations

// Initialize i18n
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en }, // English language resource
    de: { translation: de }, // German language resource
  },
  lng: 'en', // Set default language to English
  fallbackLng: 'en', // Fallback language if the selected language is unavailable
  interpolation: {
    escapeValue: false, // React already escapes values, so no need to double escape
  },
});

export default i18n; // Export configured i18n instance
