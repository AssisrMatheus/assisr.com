import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import { InlineJs } from '../src/components/UI/InlineJs';
import { noFlashScript } from '../src/utils/noFlash';

class MyDocument extends Document {
  public static async getInitialProps(ctx: DocumentContext) {
    // Ref: https://github.com/vercel/next.js/blob/master/examples/with-styled-components/pages/_document.js
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          {/* Ref: https://github.com/vercel/next.js/discussions/12533#discussioncomment-17987 */}
          <InlineJs id="no-flash-darkmode" code={noFlashScript} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
