import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import PostLayout from './postLayout';

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
};

const PostTemplate: React.FC<PostTemplateProps> = ({ data }) => {
  const { frontmatter, body } = data.mdx;
  return (
    <PostLayout>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <MDXRenderer>{body}</MDXRenderer>
    </PostLayout>
  );
};

export default PostTemplate;
