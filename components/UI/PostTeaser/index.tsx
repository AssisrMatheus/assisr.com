import moment from 'moment';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Post } from '../../../interfaces/posts';
import Card from '../Card';
import { ParseHtmlContent } from '../ParseHtmlContent';
import { Paragraph } from '../Typography';

const PostWrapper = styled.div`
  > * {
    --bg-opacitya: 23%;
    background-color: #eee;
    background-image: linear-gradient(
      141deg,
      rgba(159, 184, 173, var(--bg-opacitya)) 0%,
      rgba(31, 200, 219, var(--bg-opacitya)) 51%,
      rgba(44, 181, 232, var(--bg-opacitya)) 75%
    );
  }
`;

type PostTeaserProps = { post: Post };

const PostTeaser: React.FC<PostTeaserProps> = ({ post }) => {
  const date = useMemo(() => moment(post.matter.date).format('MMM D, YYYY'), [
    post.matter.date,
  ]);
  return (
    <PostWrapper>
      <Card
        title={post.matter.title}
        actions={<Paragraph className="text-textLighter">{date}</Paragraph>}
      >
        <Paragraph>
          <ParseHtmlContent content={post.excerpt} />
        </Paragraph>
      </Card>
    </PostWrapper>
  );
};

export default PostTeaser;
