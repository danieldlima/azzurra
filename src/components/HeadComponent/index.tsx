import * as React from 'react';
import { ReactNode } from 'react';

interface HeadComponentProps {
  children?: ReactNode;
  title?: string;
}

function HeadComponent({
  title = 'Azzurra Capital - Gestão de recursos',
  children
}: HeadComponentProps) {
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

      <title>{title}</title>

      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />

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

      {children}
    </>
  );
}

export default HeadComponent;
