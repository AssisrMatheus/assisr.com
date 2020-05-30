import { graphql } from 'gatsby';
import { GatsbyImageProps } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import HomeLayout from '../components/layout/HomeLayout';
import PostTeaser from '../components/UI/PostTeaser';
import Container from '../components/UI/Container';

const IndexWrapper = styled.main``;

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
          locale
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
            childImageSharp: GatsbyImageProps;
          };
        };
        fields: {
          slug: string;
          locale: string;
        };
      }[];
    };
  };
};

const Index: React.FC<IndexProps> = ({ data }) => {
  return (
    <HomeLayout>
      <IndexWrapper>
        <Container>
          {data.allMdx.nodes.map(
            ({
              id,
              excerpt,
              frontmatter: { title, date, cover },
              fields: { locale, slug }
            }) => (
              <div key={id}>
                <PostTeaser
                  title={title}
                  date={date}
                  cover={cover}
                  excerpt={excerpt}
                  url={`/${locale}/${slug}`}
                />
              </div>
            )
          )}
        </Container>
      </IndexWrapper>
    </HomeLayout>
  );
};

export default Index;
