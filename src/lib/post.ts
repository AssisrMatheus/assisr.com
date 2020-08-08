import fs from 'fs';
import path from 'path';
import moment from 'moment';
import { Post } from '../interfaces/posts';
import { contentToFrontmatter } from './markdown';

// Return the posts folder with the locale appended to it
const getPostsDirectory = (locale: string) =>
  path.join(process.cwd(), 'posts', locale);

// Asynchronously reads a directory
const readDirAsync = (dir: string, full?: boolean) =>
  new Promise<string[]>((resolve, reject) => {
    fs.readdir(dir, { encoding: 'utf8' }, (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(full ? files.map((file) => path.join(dir, file)) : files);
      }
    });
  });

// Asynchronously reads a file
const readFileAsync = (file: string) =>
  new Promise<string>((resolve, reject) => {
    fs.readFile(file, { encoding: 'utf8' }, (err, fileString) => {
      if (err) {
        reject(err);
      } else {
        resolve(fileString);
      }
    });
  });

// Reads all files for the given directory
export const getPostFilenames = (locale: string) =>
  readDirAsync(getPostsDirectory(locale));

export const getPostSlugs = async (locale: string) =>
  (await getPostFilenames(locale)).map((filename) =>
    filename.replace(/\.md$/, '')
  );

export const getPostBySlug = async (
  locale: string,
  slug: string
): Promise<Post> => {
  // Get the full path for the current post
  const fullPath = path.join(getPostsDirectory(locale), `${slug}.md`);

  // Read the file at the path
  const fileContents = await readFileAsync(fullPath);

  // Get additional data
  const { data, content, excerpt } = await contentToFrontmatter(fileContents);

  return {
    locale,
    slug,
    content,
    excerpt,
    matter: {
      ...(data as Post['matter']),
      date: data?.date?.toISOString(),
    },
  };
};

export const getAllPosts = async (locale: string) => {
  // Get all post files for this locale
  const slugs = await getPostSlugs(locale);

  // For all files, get the post object
  const posts = await Promise.all(
    slugs.map((slug) => getPostBySlug(locale, slug))
  );

  // Sort posts by date in descending order
  return posts.sort((post1, post2) =>
    moment(post1.matter.date).isBefore(moment(post2.matter.date)) ? -1 : 1
  );
};
