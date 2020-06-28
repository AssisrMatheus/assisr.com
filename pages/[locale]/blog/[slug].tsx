/* eslint-disable react/no-danger */
import React from 'react';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { localeMessages } from '../../../components/Providers/LocaleProvider';
import { getPosts, getPostBySlug } from '../../../lib/post';
import { Post } from '../../../interfaces/posts';

const Home: React.FC<HomeContainerProps> = ({ post }) => {
  return (
    <>
      {post && (
        <div>
          <h2>{post.matter.title}</h2>
          {post.body && <div dangerouslySetInnerHTML={{ __html: post.body }} />}
        </div>
      )}
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = (
    await Promise.all(
      Object.keys(localeMessages).map(async (locale) => {
        const posts = await getPosts(locale as string);
        return posts.map((post) => ({ locale, slug: post.slug }));
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
    props.post = post;
  }

  return {
    props,
    unstable_revalidate: 5,
  };
};

type HomeContainerProps = InferGetStaticPropsType<typeof getStaticProps>;

export default Home;
