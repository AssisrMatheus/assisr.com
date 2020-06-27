import remark from 'remark';
import html from 'remark-html';
import mdx from 'remark-mdx';
import matter from 'gray-matter';

export const mdxStringToHtml = async (content: string) =>
  (await remark().use(mdx).use(html).process(content)).toString();

export const mdxStringToFrontmatter = async (content: string) =>
  matter(content, { excerpt: true, excerpt_separator: '<!-- end -->' });
