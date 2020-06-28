/* eslint-disable jsx-a11y/alt-text */
import React, { useMemo } from 'react';
import twemoji from 'twemoji';
import Link from 'next/link';
import { useLocale } from '../../Providers/LocaleProvider';
import { ParseHtmlContent } from '../ParseHtmlContent';

const LanguageSwitcher: React.FC = () => {
  const locale = useLocale();
  const lib = useMemo(
    () => ({
      img: (attribs: any) => (
        <img
          {...attribs}
          className="emoji h-8 flex items-center justify-center"
        />
      ),
    }),
    []
  );
  return locale === 'en' ? (
    <Link href="/[locale]" as="/pt">
      <a className="h-8 w-8 transform transition-transform duration-75 ease-out hover:scale-125 focus:outline-none">
        <ParseHtmlContent
          content={twemoji.parse('🇬🇧', {
            folder: 'svg',
            ext: '.svg',
          })}
          componentLibrary={lib}
        />
      </a>
    </Link>
  ) : (
    <Link href="/[locale]" as="/en">
      <a className="h-8 w-8 transform transition-transform duration-75 ease-out hover:scale-125 focus:outline-none">
        <ParseHtmlContent
          content={twemoji.parse('🇧🇷', {
            folder: 'svg',
            ext: '.svg',
          })}
          componentLibrary={lib}
        />
      </a>
    </Link>
  );
};

export default LanguageSwitcher;
