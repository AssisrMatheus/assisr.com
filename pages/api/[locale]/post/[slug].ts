import { NextApiRequest, NextApiResponse } from 'next';
import { getPostBySlug } from '../../../../lib/post';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { locale, slug },
  } = req;
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.end(
    JSON.stringify(await getPostBySlug(locale as string, slug as string))
  );
};
