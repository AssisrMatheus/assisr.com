import { graphql, useStaticQuery } from 'gatsby';

type MetadataQuery = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      image: string;
      siteUrl: string;
      siteLanguage: string;
      siteLocale: string;
      twitterUsername: string;
      authorName: string;
    };
  };
};

export default () => {
  const { site } = useStaticQuery<MetadataQuery>(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            description
            title
            image
            siteUrl
            siteLanguage
            siteLocale
            twitterUsername
            authorName
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
