import React, { useCallback, useContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { screens } from '../../utils/responsiveMediaQuery';
import GlobalStyles from '../UI/GlobalStyles';

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

const themes = {
  dark,
  light,
};

type AvailableThemes = keyof typeof themes;

const getLightThemeMedia = () =>
  window.matchMedia('(prefers-color-scheme: light)');

const getDefaultTheme = (): AvailableThemes => {
  if (process.browser) {
    const theme = localStorage.getItem('appTheme');
    if (theme) {
      return theme as AvailableThemes;
    }

    return getLightThemeMedia().matches ? 'light' : 'dark';
  }

  return 'light';
};

const saveTheme = (theme: AvailableThemes) => {
  if (process.browser) {
    localStorage.setItem('appTheme', theme);
  }
};

type AppThemeContext = {
  appThemeName: AvailableThemes;
  appTheme: AppTheme;
  setTheme: (name: AvailableThemes) => void;
};

const initialState: AppThemeContext = {
  appThemeName: getDefaultTheme(),
  appTheme: themes[getDefaultTheme()],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTheme: () => {},
};

const AppThemeContext = React.createContext<AppThemeContext>(initialState);

/**
 * The AppTheme provider for its react context
 */
export const AppThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [appThemeName, setAppThemeName] = useState<
    AppThemeContext['appThemeName']
  >(initialState.appThemeName);

  const [appTheme, setAppTheme] = useState<AppThemeContext['appTheme']>(
    initialState.appTheme
  );

  const setTheme = useCallback(
    (themeName: AvailableThemes) => {
      if (themeName !== appThemeName) {
        setAppThemeName(themeName);
        setAppTheme(themes[themeName]);
        saveTheme(themeName);
      }
    },
    [appThemeName]
  );

  useEffect(() => {
    const onMediaChange = () => {
      const isLightTheme = getLightThemeMedia().matches;
      const themeName = isLightTheme ? 'light' : 'dark';
      setTheme(themeName);
    };

    const themeName = getDefaultTheme();
    setTheme(themeName);

    const media = getLightThemeMedia();
    media.addEventListener('change', onMediaChange, false);
    return () => {
      media.removeEventListener('change', onMediaChange);
    };
  }, [setTheme]);

  console.log('Utilizing color theme:', appThemeName);

  return (
    <div id="theme-provider">
      <ThemeProvider theme={appTheme}>
        <Normalize />
        <GlobalStyles />
        <AppThemeContext.Provider
          value={{
            appThemeName,
            appTheme,
            setTheme,
          }}
        >
          {children}
        </AppThemeContext.Provider>
      </ThemeProvider>
    </div>
  );
};

export const useAppTheme = () => useContext(AppThemeContext);
