import { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';
import { LocaleProvider } from '../components/Providers/LocaleProvider';
import { AppThemeProvider } from '../components/Providers/AppThemeProvider';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Hammersmith+One&display=swap"
        rel="stylesheet"
      />
    </Head>
    <AppThemeProvider>
      <LocaleProvider locale={pageProps?.locale}>
        <Component {...pageProps} />
      </LocaleProvider>
    </AppThemeProvider>
  </>
);

export default App;
