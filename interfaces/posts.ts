export type Post = {
  locale: string;
  slug: string;
  matter: {
    title: string;
    date: string;
    published?: boolean;
    cover?: string;
    coverCaption?: string;
  };
  body?: string;
  excerpt?: string;
};
