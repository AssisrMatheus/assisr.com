module.exports = {
  siteMetadata: {
    title: `assisr`,
    description: `My own personal blog to show how cool programming is.`
  },
  plugins: [
    `gatsby-plugin-typescript`,
    'gatsby-plugin-typescript-checker',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/blog`,
        name: `blog`
      }
    }
  ]
};
