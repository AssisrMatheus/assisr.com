import flatten from 'flat';
import cookie from 'js-cookie';
import moment from 'moment';
import momentEn from 'moment/locale/en-gb';
import momentBr from 'moment/locale/pt-br';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useMemo } from 'react';
import { IntlProvider } from 'react-intl';
import en from '../../../locales/en.json';
import pt from '../../../locales/pt.json';

export const localeMessages = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  en: flatten(en) as Record<string, any>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pt: flatten(pt) as Record<string, any>,
};

const localeMoment = {
  en: { code: 'en-gb', locale: momentEn },
  pt: { code: 'pt-br', locale: momentBr },
};

type AvailableLocales = keyof typeof localeMessages;

type LocaleContext = {
  locale: AvailableLocales;
  hasProvider: boolean;
};

const initialState: LocaleContext = {
  locale: 'en',
  hasProvider: false,
};

const LocaleContext = React.createContext<LocaleContext>(initialState);

export const LocaleProvider: React.FC<{ locale?: AvailableLocales }> = ({
  locale: propLocale,
  children,
}) => {
  // Get the locale from the query
  const {
    query: { locale: queryLocale },
  } = useRouter();

  // Only run this once at startup
  const locale = useMemo(() => {
    // Prefer the locale in the router, if not available, get the locale given as prop, lastly, get the initial state locale, which is the default locale
    const currentLocale =
      (queryLocale as AvailableLocales | undefined) ||
      propLocale ||
      initialState.locale;

    if (
      currentLocale &&
      Object.keys(localeMessages).findIndex((x) => x === currentLocale) === -1
    ) {
      console.warn(
        `LocaleProvider: Missing locale data for locale: "${queryLocale}". Using default locale: "${initialState.locale}" as fallback.`
      );
      return initialState.locale;
    }
    return currentLocale;
  }, [queryLocale, propLocale]);

  useEffect(() => {
    if (locale && process.browser) {
      cookie.set('locale', locale, { expires: 1 });
    }
  }, [locale]);

  useMemo(() => {
    const momentLocale = localeMoment[locale];
    if (momentLocale) {
      moment.updateLocale(momentLocale.code, momentLocale.locale);
    }
  }, [locale]);

  const messages = useMemo(() => localeMessages[locale], [locale]);

  return (
    <div id="locale-provider">
      <IntlProvider locale={locale} messages={messages}>
        <LocaleContext.Provider
          value={{
            hasProvider: true,
            locale,
          }}
        >
          {children}
        </LocaleContext.Provider>
      </IntlProvider>
    </div>
  );
};

export const useLocaleContext = () => useContext(LocaleContext);

export const useLocale = () => {
  const { locale } = useLocaleContext();
  return useMemo(() => locale, [locale]);
};
