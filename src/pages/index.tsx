import { graphql } from 'gatsby';
import { GatsbyImageProps } from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import HomeLayout from '../components/layout/HomeLayout';
import Container from '../components/UI/Container';
import PostTeaser from '../components/UI/PostTeaser';
import Grid from '../components/UI/Grid';
import responsiveMediaQuery from '../utils/responsiveMediaQuery';
import Spacing from '../components/UI/Spacing';

const Activity = styled.aside`
  grid-column: span 12;

  ${responsiveMediaQuery('tablet')} {
    grid-column: span 6;
  }

  ${responsiveMediaQuery('laptop')} {
    grid-column: span 4;
  }

  ${responsiveMediaQuery('ultrawide')} {
    grid-column: span 3;
  }
`;
const Posts = styled.section`
  grid-column: span 12;

  ${responsiveMediaQuery('tablet')} {
    grid-column: span 6;
  }

  ${responsiveMediaQuery('laptop')} {
    grid-column: span 8;
  }

  ${responsiveMediaQuery('ultrawide')} {
    grid-column: span 9;
  }
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
      <main>
        <Container>
          <Grid>
            <Activity>Activity</Activity>
            <Posts>
              {data.allMdx.nodes.map(
                ({
                  id,
                  excerpt,
                  frontmatter: { title, date, cover },
                  fields: { locale, slug },
                }) => (
                  <Spacing marginBottom="sp64" key={id}>
                    <PostTeaser
                      title={title}
                      date={date}
                      cover={cover}
                      excerpt={excerpt}
                      url={`/${locale}/${slug}`}
                    />
                  </Spacing>
                )
              )}
            </Posts>
          </Grid>
        </Container>
      </main>
    </HomeLayout>
  );
};

export default Index;
