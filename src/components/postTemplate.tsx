import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import SEO from 'react-seo-component';
import styled from 'styled-components';
import useSiteMetadata from '../hooks/useSiteMetadata';
import PostLayout from './postLayout';

const Image = styled(Img)`
  border-radius: 5px;
`;

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
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
      body
      excerpt
      fields {
        slug
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
        cover: {
          publicURL: string;
          childImageSharp: {
            sizes: any; // FluidObject
          };
        };
      };
      excerpt: string;
      fields: {
        slug: string;
      };
    };
  };

  pageContext: {
    previous?: PagePost;
    next?: PagePost;
  };
};

const PostTemplate: React.FC<PostTemplateProps> = ({ data, pageContext }) => {
  const {
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
    authorName
  } = useSiteMetadata();
  const { frontmatter, body, fields, excerpt } = data.mdx;
  const { title, date, cover } = frontmatter;
  const { previous, next } = pageContext;
  return (
    <PostLayout>
      <SEO
        title={title}
        description={excerpt}
        image={
          cover === null ? `${siteUrl}${image}` : `${siteUrl}${cover.publicURL}`
        }
        pathname={`${siteUrl}${fields.slug}`}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
        author={authorName}
        article
        publishedDate={date}
        modifiedDate={new Date(Date.now()).toISOString()}
      />
      {!!cover && <Image sizes={cover.childImageSharp.sizes} />}
      <h1>{title}</h1>
      <p>{date}</p>
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
