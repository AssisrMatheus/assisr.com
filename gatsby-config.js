const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter MDX Basic',
    description:
      'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@chrisbiscardi'
  },
  plugins: [
    `gatsby-plugin-typescript`,
    'gatsby-plugin-typescript-checker',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: { default: path.resolve('./src/components/layout.tsx') }
      }
      // extensions: ['.mdx', '.md'],
      // gatsbyRemarkPlugins: [
      //   // {
      //   //   resolve: `gatsby-remark-images`,
      //   //   options: {
      //   //     maxWidth: 590
      //   //   }
      //   // },
      //   // {
      //   //   resolve: `gatsby-remark-responsive-iframe`,
      //   //   options: {
      //   //     wrapperStyle: `margin-bottom: 1.0725rem`
      //   //   }
      //   // },
      //   // `gatsby-remark-prismjs`,
      //   // `gatsby-remark-copy-linked-files`,
      //   // `gatsby-remark-smartypants`
      // ]
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/pages/blog`
      }
    },
    'gatsby-transformer-sharp', // Image transformations
    'gatsby-plugin-sharp', // Image transformations
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'en',
        langKeyForNull: 'en',
        useLangKeyLayout: false
        // prefixDefault: false
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-default-mdx-basic',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png' // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-offline'
    // "gatsby-plugin-feed-mdx"
  ]
};
