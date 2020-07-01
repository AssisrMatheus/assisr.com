import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import React from 'react';
import { useIntl } from 'react-intl';
import { AppLayout } from '../../components/Layouts/AppLayout';
import { localeMessages } from '../../components/Providers/LocaleProvider';
import AsyncImage from '../../components/UI/AsyncImage';
import { Container } from '../../components/UI/Container';
import PostTeaser from '../../components/UI/PostTeaser';
import { Post } from '../../interfaces/posts';
import { getPosts } from '../../lib/post';

const Home: React.FC<HomeProps> = ({ posts }) => {
  const intl = useIntl();
  return (
    <AppLayout>
      {/* <Header /> */}
      <Container className="mt-24">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="col-span-1 md:col-span-2 flex justify-center">
            <AsyncImage
              className="rounded-full h-48"
              src="/img/profile.jfif"
              alt={`${intl.formatMessage({
                id: 'profile.name',
              })} profile photo`}
            />
          </div>
          <div className="col-span-1 md:col-span-3">
            {posts && posts.length > 0 && (
              <div className="flex flex-col space-y-16">
                {posts.map((post) => (
                  <PostTeaser key={post.slug} post={post} />
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </AppLayout>
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
