/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState, useContext, useEffect, useCallback } from 'react';
import themes, { AvailableThemes, AppTheme } from '../../styles/theme';
import {
  getDefaultTheme,
  getLightThemeMedia,
  saveTheme
} from '../../utils/theming';

type AppThemeContext = {
  appThemeName: AvailableThemes;
  appTheme: AppTheme;
  setTheme: (name: AvailableThemes) => void;
};

const initialState: AppThemeContext = {
  appThemeName: getDefaultTheme(),
  appTheme: themes[getDefaultTheme()],
  setTheme: () => {}
};

const AppThemeContext = React.createContext<AppThemeContext>(initialState);

/**
 * The AppTheme provider for its react context
 */
export const AppThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children
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

    const media = getLightThemeMedia();
    media.addEventListener('change', onMediaChange, false);
    return () => {
      media.removeEventListener('change', onMediaChange);
    };
  }, [setTheme]);

  console.log('Utilizing color theme:', appThemeName);

  return (
    <AppThemeContext.Provider
      value={{
        appThemeName,
        appTheme,
        setTheme
      }}
    >
      {children}
    </AppThemeContext.Provider>
  );
};

/**
 * A hook that returns the current AppTheme context state
 */
export const useAppTheme = () => useContext(AppThemeContext);
