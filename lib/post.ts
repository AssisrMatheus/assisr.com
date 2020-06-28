import fs from 'fs';
import moment from 'moment';
import path from 'path';
import { Post } from '../interfaces/posts';
import { mdxStringToFrontmatter, mdxStringToHtml } from './markdown';

const postsDirectory = path.join(process.cwd(), 'posts');
const defaultLocale = 'en';

const readDirAsync = (dir: string, full?: boolean) => {
  return new Promise<string[]>((resolve, reject) => {
    fs.readdir(dir, { encoding: 'utf8' }, (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(full ? files.map((file) => path.join(dir, file)) : files);
      }
    });
  });
};

const readFileAsync = (file: string) => {
  return new Promise<string>((resolve, reject) => {
    fs.readFile(file, { encoding: 'utf8' }, (err, fileString) => {
      if (err) {
        reject(err);
      } else {
        resolve(fileString);
      }
    });
  });
};

const postsInDirectory = async () => {
  // Get the list of posts
  const postFolders = await readDirAsync(postsDirectory);

  // Converts it to the full path
  const fullFolderPaths = postFolders.map((slug) =>
    path.join(postsDirectory, slug)
  );

  // Get all locale files for this post
  const postLocales = await Promise.all(
    fullFolderPaths.map((folderName) => readDirAsync(folderName, true))
  );

  // Converts the folder to a more complete object
  return postLocales
    .flat()
    .map((postPath) => ({ path: postPath, ...path.parse(postPath) }))
    .filter((x) => x.ext === '.mdx')
    .map((postMeta) => {
      // Split the filename
      const splitName = postMeta.name.split('.');

      // Find the locale
      const locale =
        postMeta.name === 'index' // If it's the index file
          ? defaultLocale // it's the default locale
          : splitName[splitName.length - 1]; // It's in the file name

      // Get the slug
      const slug =
        locale === defaultLocale ? path.parse(postMeta.dir).name : splitName[0];
      return { ...postMeta, slug, locale };
    });
};

export const getPostContent = async (
  {
    locale,
    slug,
    path: postPath,
  }: {
    slug: string;
    locale: string;
    root: string;
    dir: string;
    base: string;
    ext: string;
    name: string;
    path: string;
  },
  skipBody?: boolean
): Promise<Post> => {
  const content = await readFileAsync(postPath);
  const {
    data: matter,
    excerpt: initialExcerpt,
  } = await mdxStringToFrontmatter(content);

  const post: Post = {
    locale,
    slug,
    matter: {
      ...(matter as Post['matter']),
      date: matter?.date?.toISOString(),
    },
  };

  const body = !skipBody ? await mdxStringToHtml(content) : undefined;

  if (body) {
    post.body = body;
  }

  const excerpt = initialExcerpt
    ? await mdxStringToHtml(initialExcerpt)
    : undefined;

  if (excerpt) {
    post.excerpt = excerpt;
  }

  return post;
};

export const getPosts = async (locale: string): Promise<Post[]> => {
  const posts = (await postsInDirectory()).filter((x) => x.locale === locale);
  const postsWithContent = await Promise.all(
    posts.map((x) => getPostContent(x, true))
  );
  return postsWithContent.sort((post1, post2) =>
    moment(post1.matter.date).isBefore(moment(post2.matter.date)) ? -1 : 1
  );
};

export const getPostBySlug = async (
  locale: string,
  slug: string
): Promise<Post | undefined> => {
  const posts = await postsInDirectory();
  const post = posts
    .filter((x) => x.locale === locale)
    .find((x) => x.slug === slug);
  return post ? getPostContent(post) : undefined;
};
