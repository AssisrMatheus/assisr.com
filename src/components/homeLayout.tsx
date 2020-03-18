import React from 'react';
import SEO from 'react-seo-component';
import useSiteMetadata from '../hooks/useSiteMetadata';
import AppStyles from '../styles/globalStyles';
import Header from './header';

const HomeLayout: React.FC = ({ children }) => {
  const {
    description,
    title,
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername
  } = useSiteMetadata();
  return (
    <AppStyles>
      <SEO
        title={title}
        titleTemplate={title}
        description={description || 'nothin’'}
        image={image}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />
      <Header siteTitle={title} siteDescription={description} />
      {children}
    </AppStyles>
  );
};

export default HomeLayout;
