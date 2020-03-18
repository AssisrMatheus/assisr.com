import React from 'react';
import useSiteMetadata from '../hooks/useSiteMetadata';
import AppStyles from '../styles/globalStyles';
import Header from './header';

const HomeLayout: React.FC = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <AppStyles>
      <Header siteTitle={title} siteDescription={description} />
      {children}
    </AppStyles>
  );
};

export default HomeLayout;
