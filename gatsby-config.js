module.exports = {
  siteMetadata: {
    title: 'assisr',
    description: 'My own personal blog to show how cool programming is.',
    image: `/default-site-image.jpg`,
    siteUrl: `https://assisr.com`,
    siteLanguage: `en`,
    siteLocale: `en`,
    twitterUsername: `@AdowTatep`,
    authorName: `Matheus Assis Rios`
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-typescript-checker',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 640,
              withWebp: true,
              tracedSVG: true
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/blog`
      }
    }
  ]
};
