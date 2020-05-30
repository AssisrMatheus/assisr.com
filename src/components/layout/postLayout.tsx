import React from 'react';
import HomeLayout from './homeLayout';
import MDXRendererProvider from '../wrappers/mdxRendererProvider';

const PostLayout: React.FC = ({ children }) => {
  return (
    <HomeLayout>
      <MDXRendererProvider>{children}</MDXRendererProvider>
    </HomeLayout>
  );
};

export default PostLayout;
