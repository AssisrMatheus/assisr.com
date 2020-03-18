import React from 'react';
import { graphql } from 'gatsby';
import HomeLayout from '../components/homeLayout';

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date
        }
      }
    }
  }
`;

type IndexProps = {
  data: {
    allMdx: {
      nodes: {
        id: string;
        excerpt: string;
        frontmatter: {
          title: string;
          date: string;
        };
      }[];
    };
  };
};

const Index: React.FC<IndexProps> = ({ data }) => {
  return (
    <HomeLayout>
      {data.allMdx.nodes.map(({ excerpt, frontmatter }) => (
        <>
          <h1>{frontmatter.title}</h1>
          <p>{frontmatter.date}</p>
          <p>{excerpt}</p>
        </>
      ))}
    </HomeLayout>
  );
};

export default Index;
