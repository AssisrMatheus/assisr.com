/* eslint-disable react/no-danger */
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import React, { useMemo } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import tw from 'twin.macro';
import { AppLayout } from '../../../src/components/Layouts/AppLayout';
import { localeMessages } from '../../../src/components/Providers/LocaleProvider';
import { getPostSlugs, getPostBySlug } from '../../../src/lib/post';
import { Post } from '../../../src/interfaces/posts';
import { mdToHtml } from '../../../src/lib/markdown';
import { ParseHtmlContent } from '../../../src/components/UI/ParseHtmlContent';
import { Container } from '../../../src/components/UI/Container';
import AsyncImage from '../../../src/components/UI/AsyncImage';
import Code from '../../../src/components/UI/Code';

const PostContent = styled.section`
  p {
    ${tw`mb-8`}
  }

  blockquote,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  figure {
    ${tw`mb-2`}
  }

  pre {
    ${tw`mb-8`}
  }

  h1 {
    ${tw`text-4xl`}
    ${tw`font-bold`}
  }

  h2 {
    ${tw`text-3xl`}
    ${tw`font-semibold`}
  }

  h3 {
    ${tw`text-2xl`}
    ${tw`font-semibold`}
  }

  h4 {
    ${tw`text-xl`}
    ${tw`font-semibold`}
  }

  img {
    ${tw`object-cover mb-10 mx-auto rounded-lg shadow-xl`}
  }

  a {
    ${tw`text-primary`}
    ${tw`font-bold`}

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Home: React.FC<HomeContainerProps> = ({ post }) => {
  const lib = useMemo(
    () => ({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      pre: (children: any) => (
        <Code
          codeString={children.props.children.trim()}
          language={children.props.className.replace('language-', '')}
        />
      ),
    }),
    []
  );

  return (
    <AppLayout>
      <Container>
        {post && (
          <article>
            <header>
              <AsyncImage
                className="object-cover  mx-auto rounded-lg shadow-xl"
                src={post.matter.cover}
                alt={post.matter.title}
              />
              {post.matter.coverCaption && (
                <p className="text-small mt-4 mx-auto text-center italic opacity-75">
                  {post.matter.coverCaption}
                </p>
              )}
              <h1 className="text-5xl mt-10 font-bold">{post.matter.title}</h1>
              <p className="mb-10 opacity-75">
                {moment(post.matter.date).format('DD MMMM YYYY')} •{' '}
                {moment(post.matter.date).fromNow()}
              </p>
            </header>
            <PostContent>
              <ParseHtmlContent content={post.content} componentLibrary={lib} />
            </PostContent>
          </article>
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
