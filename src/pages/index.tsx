import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import HomeLayout from '../components/homeLayout';
import Dump from '../components/dump';

const IndexWrapper = styled.main``;

const PostWrapper = styled.div``;

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
        fields {
          slug
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
        fields: {
          slug: string;
        };
      }[];
    };
  };
};

const Index: React.FC<IndexProps> = ({ data }) => {
  return (
    <HomeLayout>
      <Dump data={data} />
      <IndexWrapper>
        {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => (
          <PostWrapper key={id}>
            <Link to={fields.slug}>
              <h1>{frontmatter.title}</h1>
              <p>{frontmatter.date}</p>
              <p>{excerpt}</p>
            </Link>
          </PostWrapper>
        ))}
      </IndexWrapper>
    </HomeLayout>
  );
};

export default Index;
