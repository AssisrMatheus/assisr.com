/* eslint-disable react/no-danger */
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import React from 'react';
import { AppLayout } from '../../../src/components/Layouts/AppLayout';
import { localeMessages } from '../../../src/components/Providers/LocaleProvider';
import { getPostSlugs, getPostBySlug } from '../../../src/lib/post';
import { Post } from '../../../src/interfaces/posts';
import { mdToHtml } from '../../../src/lib/markdown';
import { ParseHtmlContent } from '../../../src/components/UI/ParseHtmlContent';
import { Container } from '../../../src/components/UI/Container';

const Home: React.FC<HomeContainerProps> = ({ post }) => {
  return (
    <AppLayout>
      <Container>
        {post && (
          <div>
            <h2>{post.matter.title}</h2>
            <ParseHtmlContent content={post.content} />
          </div>
        )}
      </Container>
    </AppLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = (
    await Promise.all(
      // For all locales
      Object.keys(localeMessages).map(async (locale) => {
        // Get all posts for the locale
        const slugs = await getPostSlugs(locale);
        return slugs.map((slug) => ({ locale, slug }));
      })
    )
  )
    .flat()
    .map((x) => ({ params: x }));

  return {
    paths,
    fallback: false,
  };
};

type HomeContainerGetStaticProps = { locale?: string; post?: Post };

export const getStaticProps: GetStaticProps<HomeContainerGetStaticProps> = async ({
  params,
}) => {
  const props: HomeContainerGetStaticProps = { ...params };

  if (params && params.locale && params.slug) {
    const post = await getPostBySlug(
      params.locale as string,
      params.slug as string
    );
    props.post = { ...post, content: await mdToHtml(post.content) };
  }

  return {
    props,
    revalidate: 5,
  };
};

type HomeContainerProps = InferGetStaticPropsType<typeof getStaticProps>;

export default Home;
