import { NextPageContext } from 'next';
import React from 'react';
import { getLocale } from '../src/utils/locale';
import { redirect } from '../src/utils/next';

// eslint-disable-next-line mdx/no-unescaped-entities
const Page = () => <h1>Home without locale</h1>;

Page.getInitialProps = async (ctx: NextPageContext) => {
  const locale = getLocale(ctx);
  redirect(`/[locale]`, `/${locale}`, ctx.req, ctx.res);
};

export default Page;
