export const SETTINGS_STORAGE_KEY = 'settings';

export type Theme = 'light' | 'dark' | 'system';
export const DEFAULT_THEME: Theme = 'system';

export type Lang = 'en' | 'fr';
export const DEFAULT_LANG: Lang = navigator.language.startsWith('fr')
  ? 'fr'
  : 'en';
