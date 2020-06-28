import { IncomingMessage, ServerResponse } from 'http';
import Router from 'next/router';

export const redirect = (
  url: string,
  as: string,
  req?: IncomingMessage,
  res?: ServerResponse,
  options?: Record<string, unknown>
): void => {
  // Server side
  if (req && res) {
    res.writeHead(302, { Location: as });
    res.end();
  }

  // Client side
  if (process.browser) {
    Router.replace(url, as, options);
  }
};
