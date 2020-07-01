import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faExternalLinkAlt,
  faLongArrowAltRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import moment from 'moment';
import Link from 'next/link';
import React, { useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { Post } from '../../../interfaces/posts';
import { useLocale } from '../../Providers/LocaleProvider';
import Card from '../Card';
import { ParseHtmlContent } from '../ParseHtmlContent';

type PostTeaserProps = { post: Post };

const PostTeaser: React.FC<PostTeaserProps> = ({ post }) => {
  const locale = useLocale();
  const date = useMemo(() => moment(post.matter.date).format('MMM D, YYYY'), [
    post.matter.date,
  ]);

  const lib = useMemo(
    () => ({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      p: (attribs: any, children: React.ReactNode) => (
        <p className="text-textLighter" {...attribs}>
          {children}
        </p>
      ),
    }),
    []
  );

  const LinkWrapper = useMemo(
    () => ({ children }: React.PropsWithChildren<unknown>) =>
      post.matter.externalLink ? (
        <a href={post.matter.externalLink} target="_blank" rel="noreferrer">
          {children}
        </a>
      ) : (
        <Link href="/[locale]/blog/[slug]" as={`/${locale}/blog/${post.slug}`}>
          <a>{children}</a>
        </Link>
      ),
    [locale, post.matter.externalLink, post.slug]
  );

  const externalIcon = useMemo(() => {
    switch (post.matter.externalName) {
      case 'LinkedIn':
        return (
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon
              className="h-5 text-textLightest"
              icon={faLinkedin}
            />
            <p className="text-textLightest capitalize">LinkedIn</p>
            <p className="text-textLightest capitalize">·</p>
          </div>
        );
      default:
        return <></>;
    }
  }, [post.matter.externalName]);

  return (
    <motion.div
      whileHover="hover"
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
    >
      <LinkWrapper>
        <Card
          title={post.matter.title}
          image={post.matter.cover}
          actions={
            <div className="flex items-center justify-between font-light">
              <div className="flex items-center space-x-2">
                <p className="text-textLightest capitalize">{date}</p>
              </div>
              {post.matter.externalLink ? (
                <div className="flex items-center space-x-2">
                  <motion.div
                    className="flex items-center space-x-2"
                    variants={{ hover: { x: -10 } }}
                  >
                    {externalIcon}
                    <p className="text-textLightest">
                      <FormattedMessage id="postTeaser.goToArticle" />
                    </p>{' '}
                  </motion.div>
                  <motion.div variants={{ hover: { scale: 1.3 } }}>
                    <FontAwesomeIcon
                      className="h-4 text-textLightest"
                      icon={faExternalLinkAlt}
                    />
                  </motion.div>
                </div>
              ) : (
                <motion.div
                  variants={{ hover: { x: 10 } }}
                  className="flex items-center space-x-2"
                >
                  <p className="text-textLightest">
                    <FormattedMessage id="postTeaser.readMore" />
                  </p>{' '}
                  <FontAwesomeIcon
                    // style={{ marginTop: '0.25rem' }}
                    className="h-4 text-textLightest mt-1"
                    icon={faLongArrowAltRight}
                  />
                </motion.div>
              )}
            </div>
          }
        >
          <ParseHtmlContent content={post.excerpt} componentLibrary={lib} />
        </Card>
      </LinkWrapper>
    </motion.div>
  );
};

export default PostTeaser;
