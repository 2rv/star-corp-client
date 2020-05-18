/* eslint-disable react/no-danger */
import React from 'react';
import Document, { Html, Main, NextScript, Head } from 'next/document';
import { ServerStyleSheet as StyledComponentSheets } from 'styled-components';
import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@material-ui/styles';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const styledComponentSheet = new StyledComponentSheets();
    const materialUiSheets = new MaterialUiServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            styledComponentSheet.collectStyles(materialUiSheets.collect(<App {...props} />)),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: [
          <React.Fragment key="styles">
            {initialProps.styles}
            {materialUiSheets.getStyleElement()}
            {styledComponentSheet.getStyleElement()}
          </React.Fragment>,
        ],
      };
    } finally {
      styledComponentSheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link rel="apple-touch-icon" sizes="57x57" href="/static/fav/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/static/fav/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/static/fav/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/static/fav/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/static/fav/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/static/fav/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/static/fav/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/static/fav/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/fav/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/static/fav/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/fav/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/static/fav/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/fav/favicon-16x16.png" />
          <link rel="manifest" href="/static/fav/manifest.json" />
          <meta name="msapplication-TileColor" content="#fafafa" />
          <meta name="msapplication-TileImage" content="/static/fav/ms-icon-144x144.png" />
          <meta name="theme-color" content="#fafafa" />

          <link rel="stylesheet" href="/static/css/main.css" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
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
