export type Post = {
  locale: string;
  slug: string;
  matter: {
    title: string;
    date: string;
    published?: boolean;
  };
  body?: string;
  excerpt?: string;
};
