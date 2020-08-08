import languageParser from 'accept-language-parser';
import cookie from 'js-cookie';
import { NextPageContext } from 'next';
import nextCookie from 'next-cookies';
import { localeMessages } from '../components/Providers/LocaleProvider';

export const getLocale = (ctx: NextPageContext): string => {
  let languageCode = '';

  if (ctx.req) {
    // Server side
    // If we have locale in the route, use that first
    if (ctx.query && ctx.query.locale) {
      // Locale is defined by router
      languageCode = ctx.query.locale as string;
    }

    // If not, find the current locale from the cookie
    const cookies = nextCookie(ctx);
    const cookieLocale = cookies.locale;
    if (cookieLocale) {
      languageCode = cookieLocale;
    }

    // Locale not defined, choose best locale for user on possible options
    const acceptedLanguage = ctx.req.headers['accept-language'];

    if (acceptedLanguage) {
      const bestLocale = languageParser.pick(
        Object.keys(localeMessages),
        acceptedLanguage
      );
      if (bestLocale) {
        languageCode = bestLocale;
      }
    }
  } else {
    // Client side
    const { query } = ctx;
    // If we have locale in the route, use that first
    if (query.locale) {
      // Locale is defined by the url
      languageCode = query.locale as string;
    }

    // If not, find the current locale from the cookie
    const cookies = nextCookie(ctx);
    const cookieLocale = cookies.locale;
    if (cookieLocale) {
      languageCode = cookieLocale;
    }

    // Locale is defined by the browser settings
    if (
      window &&
      window.navigator.languages &&
      window.navigator.languages.length > 0
    ) {
      const twoLetterCodes = window.navigator.languages.filter(
        (x) => x.length === 2
      );
      if (twoLetterCodes && twoLetterCodes.length > 0) {
        [languageCode] = twoLetterCodes;
      }
    }
  }

  if (!languageCode) {
    console.warn(
      `getLocale: Missing locale data. Using default locale: "en" as fallback.`
    );
    languageCode = 'en';
  }

  if (process.browser) {
    const cookies = nextCookie(ctx);
    const cookieLocale = cookies.locale;
    if (!cookieLocale) {
      cookie.set('locale', languageCode, { expires: 1 });
    }
  }

  return languageCode;
};
