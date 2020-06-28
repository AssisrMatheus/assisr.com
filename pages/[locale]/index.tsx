import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import React from 'react';
import {
  localeMessages,
  useLocale,
} from '../../components/Providers/LocaleProvider';

import { Header } from '../../components/UI/Header';
import { Post } from '../../interfaces/posts';
import { getPosts } from '../../lib/post';
import { Container } from '../../components/UI/Container';
import PostTeaser from '../../components/UI/PostTeaser';

const Home: React.FC<HomeProps> = ({ posts }) => {
  const locale = useLocale();
  return (
    <>
      <Header />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="col-span-1 md:col-span-2" />
          <div className="col-span-1 md:col-span-3">
            {posts && posts.length > 0 && (
              <div className="flex flex-col space-y-16">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href="/[locale]/blog/[slug]"
                    as={`/${locale}/blog/${post.slug}`}
                  >
                    <a>
                      <PostTeaser post={post} />
                    </a>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      ...Object.keys(localeMessages).map((locale) => ({ params: { locale } })),
    ],
    fallback: false,
  };
};

type HomeGetStaticProps = { locale?: string; posts?: Post[] };

export const getStaticProps: GetStaticProps<HomeGetStaticProps> = async ({
  params,
}) => {
  const props: HomeGetStaticProps = { ...params };

  if (params && params.locale) {
    const posts = await getPosts(params.locale as string);
    props.posts = posts;
  }

  return {
    props,
    unstable_revalidate: 5,
  };
};

type HomeProps = InferGetStaticPropsType<typeof getStaticProps>;

export default Home;
