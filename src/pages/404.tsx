import * as React from 'react';

import { HeadFC, PageProps } from 'gatsby';

import ButtonLink from '@components/Buttons/ButtonLink';
import ContentPage from '@components/ContentPage';
import ArrowLeft from '@components/Icons/ArrowLeft';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <ContentPage isDescription={false}>
      <h1 className="mb-10 text-xl sm:text-2x md:text-3xl lg:text-4xl text-center md:text-left font-light text-azzurra-navy-blue">
        <span className="block">Desculpe, não conseguimos encontrar</span>
        <span className="block text-white font-bold">
          o que você estava procurando.
        </span>
      </h1>

      <ButtonLink
        href="/"
        icon={<ArrowLeft />}
        title="Voltar a página inicial"
        align="justify-between"
        width="w-fit"
      />
    </ContentPage>
  );
};

export default NotFoundPage;

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
    </>
  );
};
