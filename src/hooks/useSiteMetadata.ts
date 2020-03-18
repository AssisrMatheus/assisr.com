import { graphql, useStaticQuery } from 'gatsby';

type MetadataQuery = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
    };
  };
};

export default () => {
  const { site } = useStaticQuery<MetadataQuery>(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
