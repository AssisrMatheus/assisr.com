import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import PostLayout from './postLayout';
import Dump from './dump';

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
      }
    }
  }
`;

type PagePost = {
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
  };
};

type PostTemplateProps = {
  data: {
    mdx: {
      body: string;
      frontmatter: {
        title: string;
        date: string;
      };
    };
  };

  pageContext: {
    previous?: PagePost;
    next?: PagePost;
  };
};

const PostTemplate: React.FC<PostTemplateProps> = ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx;
  const { previous, next } = pageContext;
  return (
    <PostLayout>
      <Dump previous={previous} />
      <Dump next={next} />
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <MDXRenderer>{body}</MDXRenderer>
      {previous && (
        <Link to={previous.fields.slug}>
          <p>{previous.frontmatter.title}</p>
        </Link>
      )}
      {next && (
        <Link to={next.fields.slug}>
          <p>{next.frontmatter.title}</p>
        </Link>
      )}
    </PostLayout>
  );
};

export default PostTemplate;
