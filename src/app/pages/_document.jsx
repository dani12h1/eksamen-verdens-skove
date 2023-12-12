// pages/_document.jsx

import Document, { Html, Head, Main, NextScript } from "next/document";
import favIcon from "../public";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Meta tags, stylesheets, and favicon */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href={favIcon} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
