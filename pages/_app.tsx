import { AppProps } from 'next/app';
import React from 'react';
import { LocaleProvider } from '../components/Providers/LocaleProvider';
import { AppThemeProvider } from '../components/Providers/AppThemeProvider';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <AppThemeProvider>
    <LocaleProvider locale={pageProps?.locale}>
      <Component {...pageProps} />
    </LocaleProvider>
  </AppThemeProvider>
);

export default App;
