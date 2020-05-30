import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import GlobalStyles from '../../styles/globalStyles';
import { useAppTheme } from './AppTheme';

const StyledComponents: React.FC = ({ children }) => {
  const { appTheme } = useAppTheme();
  return (
    <ThemeProvider
      // key={appThemeName || 'light'}
      theme={appTheme}
    >
      <Normalize />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default StyledComponents;
