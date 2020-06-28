import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import useDarkMode from 'use-dark-mode';
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
  spacing: typeof spacing;
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

const theme: AppTheme = {
  spacing,
  colors: {
    primary: 'var(--primary)',
    secondary: 'var(--secondary)',
    background: 'var(--background)',
    backgroundInverted: 'var(--background-inverted)',
    textMain: 'var(--text-main)',
    textLighter: 'var(--text-lighter)',
    textOnInverted: 'var(--text-on-inverted)',
  },
};

type AppThemeContext = {
  isDark: boolean;
  enable: () => void;
  disable: () => void;
  toggle: () => void;
};

const initialState: AppThemeContext = {
  isDark: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  enable: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  disable: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggle: () => {},
};

const AppThemeContext = React.createContext<AppThemeContext>(initialState);

/**
 * The AppTheme provider for its react context
 */
export const AppThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { value: isDark, enable, disable, toggle } = useDarkMode(
    initialState.isDark
  );

  return (
    <div id="theme-provider">
      <ThemeProvider theme={theme}>
        <Normalize />
        <GlobalStyles />
        <AppThemeContext.Provider
          value={{
            isDark,
            enable,
            disable,
            toggle,
          }}
        >
          {children}
        </AppThemeContext.Provider>
      </ThemeProvider>
    </div>
  );
};

export const useAppTheme = () => useContext(AppThemeContext);
