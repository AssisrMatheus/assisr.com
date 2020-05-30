/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState, useContext, useEffect } from 'react';
import themes, { AvailableThemes, AppTheme } from '../../styles/theme';
import {
  getDefaultTheme,
  getLightThemeMedia,
  saveTheme
} from '../../utils/theming';

type AppThemeContext = {
  appThemeName: AvailableThemes;
  setAppThemeName: (name: AvailableThemes) => void;
  appTheme: AppTheme;
  setAppTheme: (theme: AppTheme) => void;
};

const initialState: AppThemeContext = {
  appThemeName: getDefaultTheme(),
  setAppThemeName: () => {},
  appTheme: themes[getDefaultTheme()],
  setAppTheme: () => {}
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

  useEffect(() => {
    const onMediaChange = () => {
      const isLightTheme = getLightThemeMedia().matches;
      const themeName = isLightTheme ? 'light' : 'dark';
      setAppThemeName(themeName);
      setAppTheme(themes[themeName]);
      saveTheme(themeName);
    };

    const media = getLightThemeMedia();
    media.addEventListener('change', onMediaChange, false);
    return () => {
      media.removeEventListener('change', onMediaChange);
    };
  }, []);

  console.log('Utilizing color theme:', appThemeName);

  return (
    <AppThemeContext.Provider
      value={{
        appThemeName,
        setAppThemeName,
        appTheme,
        setAppTheme
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
