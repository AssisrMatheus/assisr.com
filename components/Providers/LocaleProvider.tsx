import flatten from 'flat';
import cookie from 'js-cookie';
import moment from 'moment';
import momentEn from 'moment/locale/en-ca';
import momentBr from 'moment/locale/pt-br';
import { useRouter } from 'next/router';
import React, {
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from 'react';
import { IntlProvider } from 'react-intl';
import en from '../../locales/en.json';
import pt from '../../locales/pt.json';

export const localeMessages = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  en: flatten(en) as Record<string, any>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pt: flatten(pt) as Record<string, any>,
};

const localeMoment = {
  en: { code: 'en-ca', locale: momentEn },
  pt: { code: 'pt-br', locale: momentBr },
};

type AvailableLocales = keyof typeof localeMessages;

type LocaleContext = {
  locale: AvailableLocales;
  setLocale: (locale: AvailableLocales) => void;
  toggle: () => void;
  hasProvider: boolean;
};

const initialState: LocaleContext = {
  locale: 'en',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setLocale: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggle: () => {},
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
  const initialLocale = useMemo(() => {
    console.log('query', queryLocale, 'props', propLocale);
    // Prefer the locale in the router, if not available, get the locale given as prop, lastly, get the initial state locale, which is the default locale
    const locale =
      (queryLocale as AvailableLocales | undefined) ||
      propLocale ||
      initialState.locale;

    if (
      locale &&
      Object.keys(localeMessages).findIndex((x) => x === locale) === -1
    ) {
      console.warn(
        `LocaleProvider: Missing locale data for locale: "${queryLocale}". Using default locale: "${initialState.locale}" as fallback.`
      );
      return initialState.locale;
    }
    return locale;
  }, [queryLocale, propLocale]);

  const [locale, setLocale] = useState<LocaleContext['locale']>(initialLocale);

  useEffect(() => {
    if (locale !== initialLocale) {
      setLocale(initialLocale);
    }
  }, [locale, initialLocale]);

  useEffect(() => {
    if (locale && process.browser) {
      cookie.set('locale', locale, { expires: 1 });
    }
  }, [locale]);

  const momentLocale = useMemo(() => localeMoment[locale], [locale]);

  useEffect(() => {
    if (momentLocale) {
      moment.updateLocale(momentLocale.code, momentLocale.locale);
    }
  }, [momentLocale]);

  const messages = useMemo(() => localeMessages[locale], [locale]);

  const toggle = useCallback(() => {
    setLocale(locale === 'en' ? 'pt' : 'en');
  }, [setLocale, locale]);

  return (
    <div id="locale-provider">
      <IntlProvider locale={locale} messages={messages}>
        <LocaleContext.Provider
          value={{
            hasProvider: true,
            locale,
            setLocale,
            toggle,
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
