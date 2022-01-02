import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
              <Head>
                <link rel="icon" type="image/x-icon" href="/favicons/circle-avatar.png" />
                <link rel="apple-touch-icon" type="image/x-icon" href="/favicons/favicon.ico"></link>
              </Head>
              <body>
                <Main />
                <NextScript />
              </body>
            </Html>
        );
    }
}