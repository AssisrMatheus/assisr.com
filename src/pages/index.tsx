import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import HomeLayout from '../components/homeLayout';

const IndexWrapper = styled.main``;
const PostWrapper = styled.div``;

const Image = styled(Img)`
  border-radius: 5px;
`;

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
          date(formatString: "YYYY MMMM Do")
          cover {
            publicURL
            childImageSharp {
              sizes(maxWidth: 2000, traceSVG: { color: "#639" }) {
                ...GatsbyImageSharpSizes_tracedSVG
              }
            }
          }
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
          cover: {
            publicURL: string;
            childImageSharp: {
              sizes: any; // FluidObject
            };
          };
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
      <IndexWrapper>
        {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => (
          <PostWrapper key={id}>
            <Link to={fields.slug}>
              {!!frontmatter.cover && (
                <Image sizes={frontmatter.cover.childImageSharp.sizes} />
              )}
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
