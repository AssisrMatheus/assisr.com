import { AvailableThemes } from '../styles/theme';

export const getLightThemeMedia = () =>
  window.matchMedia('(prefers-color-scheme: light)');

// TODO: https://dev.to/amaltapalov/how-i-set-dark-mode-for-gatsby-website-4ni0
export const getDefaultTheme = (): AvailableThemes => {
  if (typeof localStorage !== `undefined`) {
    const theme = localStorage.getItem('appTheme');
    if (theme) {
      return theme as AvailableThemes;
    }
  }

  if (typeof window !== `undefined`) {
    return getLightThemeMedia().matches ? 'light' : 'dark';
  }

  return 'light';
};

export const saveTheme = (theme: AvailableThemes) => {
  if (localStorage && localStorage.setItem) {
    localStorage.setItem('appTheme', theme);
  }
};
