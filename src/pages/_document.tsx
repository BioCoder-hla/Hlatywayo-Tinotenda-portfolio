// src/pages/_document.tsx

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    // The `lang="en"` attribute is important for accessibility and SEO.
    <Html lang="en">
      <Head>
        {/* You can add custom fonts or other head tags here later */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
