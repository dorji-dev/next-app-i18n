import en from './src/i18n/messages/de.json';
 
type Messages = typeof en;
 
declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}
}