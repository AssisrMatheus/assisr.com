import { NextApiRequest, NextApiResponse } from 'next';
import { getPosts } from '../../../../lib/post';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { locale },
  } = req;
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.end(JSON.stringify(await getPosts(locale as string)));
};
