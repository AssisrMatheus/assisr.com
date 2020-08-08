export type Post = {
  locale: string;
  slug: string;
  content: string;
  excerpt?: string;
  matter: {
    title: string;
    date: string;
    published?: boolean;
    cover?: string;
    coverCaption?: string;
    tags?: string[];
    externalLink?: string;
    externalName?: 'LinkedIn';
    alternativeLanguage?: string;
  };
};
