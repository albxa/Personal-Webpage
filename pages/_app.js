/*
 * Arber Mahmuti
 * Version: 1.0
 * Date: 2024-11-24
 * Description: This file serves as the custom App component for the Next.js application. 
 * It wraps all pages with the necessary providers, including the i18next provider for internationalization.
 */

import '../styles/globals.css'; // Import global CSS styles
import i18n from '../i18n'; // Import i18n configuration for translations
import { I18nextProvider } from 'react-i18next'; // React integration for i18next

function MyApp({ Component, pageProps }) {
  /*
   * MyApp Component:
   * Wraps all pages with the I18nextProvider to provide internationalization (i18n) support across the app.
   * - Component: The current page being rendered.
   * - pageProps: Props specific to the current page.
   */
  return (
    <I18nextProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nextProvider>
  );
}

export default MyApp;
