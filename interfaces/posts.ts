export type Post = {
  locale: string;
  slug: string;
  matter: {
    title: string;
    date: string;
    published?: boolean;
    cover?: string;
    coverCaption?: string;
    tags?: string[];
    externalLink?: string;
    externalName?: 'LinkedIn' | 'AppMasters';
    alternativeLanguage?: string;
  };
  body?: string;
  excerpt?: string;
};
