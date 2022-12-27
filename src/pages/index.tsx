import * as React from 'react';

import type { HeadFC, PageProps } from 'gatsby';

import Home from '@templates/Home';

import Navigation from '@components/Layout/Navigation';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Navigation />
      <Home />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap"
        rel="stylesheet"
      />

      <title>Azzurra Capital - Nosso site está em construção</title>

      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Azzurra Capital" />
      <meta
        property="og:description"
        content="Azzurra Capital - Construindo e preservando seu patrimônio, juntos!"
      />
      <meta property="og:url" content="http://azzurracapital.com.br/" />
      <meta property="og:site_name" content="Azzurra Capital" />
      <meta
        property="og:image"
        content="http://azzurracapital.com.br/images/azzurra__social-media.jpg"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="628" />
      <meta property="og:image:type" content="image/jpg" />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
};
