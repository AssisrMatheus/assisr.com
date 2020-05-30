import React from 'react';
import SEO from 'react-seo-component';
import useSiteMetadata from '../../hooks/useSiteMetadata';
import Header from '../UI/Header';
import { AppThemeProvider } from '../wrappers/AppTheme';
import StyledComponents from '../wrappers/StyledComponents';

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
    <>
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

      <AppThemeProvider>
        <StyledComponents>
          <Header siteTitle={title} siteDescription={description} />
          {children}
        </StyledComponents>
      </AppThemeProvider>
    </>
  );
};

export default HomeLayout;
