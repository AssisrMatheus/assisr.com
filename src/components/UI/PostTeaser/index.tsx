import React from 'react';
import Img, { GatsbyImageProps } from 'gatsby-image';
import { Link } from 'gatsby';
import { PostTeaserContainer } from './styles';

type PostTeaserProps = {
  title: string;
  date: string;
  excerpt: string;
  cover?: {
    publicURL: string;
    childImageSharp: GatsbyImageProps;
  };
  url: string;
};

const PostTeaser: React.FC<PostTeaserProps> = ({
  title,
  date,
  excerpt,
  cover,
  url
}) => (
  <PostTeaserContainer>
    <Link to={url}>
      {!!cover && <Img sizes={cover.childImageSharp.sizes} />}
      <h1>{title}</h1>
      <p>{date}</p>
      <p>{excerpt}</p>
    </Link>
  </PostTeaserContainer>
);

export default PostTeaser;
