export const spacing = {
  sp0: '0px',
  sp4: '4px',
  sp8: '8px',
  sp16: '16px',
  sp24: '24px',
  sp32: '32px',
  sp64: '64px',
  sp128: '128px',
  sp256: '256px',
};

export type SpacingEnum = keyof typeof spacing;

export const screens = {
  // Values extracted from bootstrap 4
  // https://getbootstrap.com/docs/4.5/layout/overview/#responsive-breakpoints
  phone: 576,
  tablet: 760,
  laptop: 992,
  desktop: 1200,
  ultrawide: 1925,
};

export type AvailableThemes = 'light' | 'dark';

export type AppTheme = {
  name: AvailableThemes;
  spacing: typeof spacing;
  screens: typeof screens;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    backgroundInverted: string;
    textMain: string;
    textLighter: string;
    textOnInverted: string;
  };
};

const dark: AppTheme = {
  name: 'dark',
  spacing,
  screens,
  colors: {
    primary: '',
    secondary: '',
    background: '#24292D',
    backgroundInverted: '#E9ECEE',
    textMain: '#FAFBFD',
    textLighter: '',
    textOnInverted: '#24292D',
  },
};

const light: AppTheme = {
  name: 'dark',
  spacing,
  screens,
  colors: {
    primary: '',
    secondary: '',
    background: '#E9ECEE',
    backgroundInverted: '#24292D',
    textMain: '#24292D',
    textLighter: '#5B5F68',
    textOnInverted: '#FAFBFD',
  },
};

const themes: {
  [key in AvailableThemes]: AppTheme;
} = {
  dark,
  light,
};

export default themes;
