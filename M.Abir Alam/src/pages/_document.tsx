import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className="scroll-smooth" lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Roboto+Mono&display=swap"
          rel="stylesheet"
        />

        <link
          rel="icon"
          type="image/svg+xml"
          href="/favicons/M.Abir_Alam.png"
        />
        <script src="/scripts/no-flash.js"></script>
      </Head>
      <body className="text-text bg-bg">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
