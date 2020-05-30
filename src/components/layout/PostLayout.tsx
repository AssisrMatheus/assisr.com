import React from 'react';
import HomeLayout from './HomeLayout';
import MDXRendererProvider from '../wrappers/MDXRendererProvider';

const PostLayout: React.FC = ({ children }) => {
  return (
    <HomeLayout>
      <MDXRendererProvider>{children}</MDXRendererProvider>
    </HomeLayout>
  );
};

export default PostLayout;
