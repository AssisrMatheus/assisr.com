import React from 'react';
import HomeLayout from './homeLayout';

const PostLayout: React.FC = ({ children }) => {
  return <HomeLayout>{children}</HomeLayout>;
};

export default PostLayout;
