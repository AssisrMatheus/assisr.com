import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import '../src/styles/tailwind.css';
import { AppThemeProvider } from '../src/components/Providers/AppThemeProvider';
import { LocaleProvider } from '../src/components/Providers/LocaleProvider';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Matheus Assis Rios</title>
      <link rel="icon" type="image/jfif" href="/img/profile.jfif" />
    </Head>
    <AppThemeProvider>
      <LocaleProvider locale={pageProps?.locale}>
        <Component {...pageProps} />
      </LocaleProvider>
    </AppThemeProvider>
  </>
);

export default App;
