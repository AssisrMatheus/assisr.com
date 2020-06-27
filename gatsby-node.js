const path = require(`path`);

exports.onCreateNode = async ({ node, actions }) => {
  // If the file being processed is an Mdx file
  if (node.internal.type === `Mdx`) {
    const { createNodeField } = actions;

    // Parse the file path
    const parsedPath = path.parse(node.fileAbsolutePath);

    // Find the id from its dir name
    const id = path.parse(parsedPath.dir).name;

    // Remove the locale at the end if any
    const splitName = parsedPath.name.split('.');

    const locale =
      parsedPath.name === 'index' // If it's the index file
        ? 'en' // Get the default language
        : splitName[splitName.length - 1] || 'en'; // Or the locale at the end

    // If the it's the index file the slug is the same as the id, if not it's in the file name
    // Without the locale at its end
    const slug = parsedPath.name === 'index' ? id : splitName[0];

    // Create a slug field in graphql query
    createNodeField({
      name: `slug`,
      node,
      value: slug,
    });

    // Create a idPath field in graphql query
    createNodeField({
      name: `idPath`,
      node,
      value: id,
    });

    // Create a locale field in graphql query
    createNodeField({
      name: `locale`,
      node,
      value: locale,
    });
  }
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  // Gets all published posts
  const result = await graphql(`
    {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        group(field: fields___idPath) {
          nodes {
            fields {
              slug
              idPath
              locale
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  // Gets the group value from the query result
  const posts = result.data.allMdx.group;

  // For each post
  posts.forEach((group, groupIndex) => {
    const postTranslations = group.nodes; // Get all translations

    // create page for each translation
    postTranslations.forEach((post) => {
      // Get the values
      const { locale, slug, idPath } = post.fields;

      // Find if there's a post before this
      const previousPost = groupIndex > 0 ? posts[groupIndex - 1] : undefined;

      // Find if there's a post after this
      const nextPost =
        groupIndex < posts.length ? posts[groupIndex + 1] : undefined;

      let previous;
      // If there's a previousPost
      if (previousPost) {
        // Gets the post with the same translation
        previous = previousPost.nodes.find((x) => x.fields.locale === locale);

        if (!previous) {
          // If not found get the other one
          previous = previousPost.nodes.find((x) => x.fields.locale !== locale);
        }
      }

      let next;
      // If there's a previousPost
      if (nextPost) {
        // Gets the post with the same translation
        next = nextPost.nodes.find((x) => x.fields.locale === locale);

        if (!next) {
          // If not found get the other one
          next = nextPost.nodes.find((x) => x.fields.locale !== locale);
        }
      }

      // Create the page for the current translated post
      createPage({
        path: `${locale}/${slug}`, // The url is the locale+slug
        component: path.resolve('src/components/template/PostTemplate.tsx'),
        context: {
          slug,
          locale,
          idPath,
          previous,
          next,
          // Displays the other translated post if available
          alternative: postTranslations.find((x) => x.fields.slug !== slug),
        },
      });
    });
  });
};
