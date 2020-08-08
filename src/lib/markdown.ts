import remark from 'remark';
import html from 'remark-html';
import matter from 'gray-matter';

export const mdToHtml = async (markdown: string) =>
  (await remark().use(html).process(markdown)).toString();

export const contentToFrontmatter = async (content: string) =>
  matter(content, { excerpt: true, excerpt_separator: '<!-- end -->' });
