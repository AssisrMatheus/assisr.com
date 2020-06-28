import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';
import resolveConfig from 'tailwindcss/resolveConfig';
import GlobalStyles from '../UI/GlobalStyles';
import tailwindConfig from '../../tailwind.config';

const tailwind = resolveConfig(tailwindConfig);

export type AppTheme = {
  // Extracted from tailwind.theme.spacing
  spacing: {
    '0': string;
    '1': string;
    '2': string;
    '3': string;
    '4': string;
    '5': string;
    '6': string;
    '8': string;
    '10': string;
    '12': string;
    '16': string;
    '20': string;
    '24': string;
    '32': string;
    '40': string;
    '48': string;
    '56': string;
    '64': string;
    px: string;
  };
  // Extracted from tailwind.theme.screens
  screens: { sm: string; md: string; lg: string; xl: string };
  // Extracted from tailwind.theme.colors
  colors: {
    transparent: string;
    current: string;
    black: string;
    white: string;
    gray: {
      '100': string;
      '200': string;
      '300': string;
      '400': string;
      '500': string;
      '600': string;
      '700': string;
      '800': string;
      '900': string;
    };
    red: {
      '100': string;
      '200': string;
      '300': string;
      '400': string;
      '500': string;
      '600': string;
      '700': string;
      '800': string;
      '900': string;
    };
    orange: {
      '100': string;
      '200': string;
      '300': string;
      '400': string;
      '500': string;
      '600': string;
      '700': string;
      '800': string;
      '900': string;
    };
    yellow: {
      '100': string;
      '200': string;
      '300': string;
      '400': string;
      '500': string;
      '600': string;
      '700': string;
      '800': string;
      '900': string;
    };
    green: {
      '100': string;
      '200': string;
      '300': string;
      '400': string;
      '500': string;
      '600': string;
      '700': string;
      '800': string;
      '900': string;
    };
    teal: {
      '100': string;
      '200': string;
      '300': string;
      '400': string;
      '500': string;
      '600': string;
      '700': string;
      '800': string;
      '900': string;
    };
    blue: {
      '100': string;
      '200': string;
      '300': string;
      '400': string;
      '500': string;
      '600': string;
      '700': string;
      '800': string;
      '900': string;
    };
    indigo: {
      '100': string;
      '200': string;
      '300': string;
      '400': string;
      '500': string;
      '600': string;
      '700': string;
      '800': string;
      '900': string;
    };
    purple: {
      '100': string;
      '200': string;
      '300': string;
      '400': string;
      '500': string;
      '600': string;
      '700': string;
      '800': string;
      '900': string;
    };
    pink: {
      '100': string;
      '200': string;
      '300': string;
      '400': string;
      '500': string;
      '600': string;
      '700': string;
      '800': string;
      '900': string;
    };
    primary: string;
    secondary: string;
    background: string;
    backgroundInverted: string;
    textMain: string;
    textOnInverted: string;
  };
};

const theme: AppTheme = {
  spacing: tailwind.theme.spacing,
  screens: tailwind.theme.screens,
  colors: tailwind.theme.colors,
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
