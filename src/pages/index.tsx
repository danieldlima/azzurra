import * as React from 'react';

import type { HeadFC, PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import ButtonLink from '@components/Buttons/ButtonLink';
import ContentPage from '@components/ContentPage';
import DocumentFileCard from '@components/DocumentFileCard';
import Mail from '@components/Icons/Mail';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <ContentPage>
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <div className="container__brand-wrapper flex-auto basis-3/6 mb-10 lg:mb-0 w-11/12 lg:w-4/6 lg:pr-16">
          <div className="flex flex-col items-center lg:items-start gap-5 text-center lg:text-left text-white">
            <div>
              <h2 className="font-light text-2xl md:text-2xl lg:text-4xl mb-1">
                Documentos <span className="font-bold">Regulatórios</span>
              </h2>

              <p className="w-full border-b-2 pb-4 lg:border-0 lg:pb-0 normal-case text-xl font-light mb-1">
                Clique abaixo para acessar os arquivos:
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10 lg:mb-16">
              <DocumentFileCard
                to="/documents/5. Formulário de Referência.docx"
                title="Formulário de Referência"
              />

              <DocumentFileCard
                to="/documents/11. Política de Conheça Seu Cliente e Prevenção e Combate à Lavagem de Dinheiro.docx"
                title="conheça seu cliente e prevenção e combate à lavagem de dinheiro"
              />

              <DocumentFileCard
                to="/documents/12. Código de Ética.docx"
                title="código de ética"
              />

              <DocumentFileCard
                to="/documents/13. Regras, Procedimentos e Descrição dos Controles Internos.docx"
                title="regras, procedimentos e descrição dos controles internos"
              />

              <DocumentFileCard
                to="/documents/14. Política de Compra e Venda de Valores Mobiliários.docx"
                title="política de compra e venda de valores mobiliários"
              />

              <DocumentFileCard
                to="/documents/15. Manual Previsto no art. 25 da Instrução CVM 558_15.docx"
                title="manual de segregação de atividades"
              />

              <DocumentFileCard
                to="/documents/16. Política de Gestão de Riscos.docx"
                title="política de gestão de riscos"
              />

              <DocumentFileCard
                to="/documents/17. Política de Rateio e Divisão de Ordens.docx"
                title="política de rateio e divisão de ordens"
              />
            </div>

            <div className="flex flex-row items-center mx-auto md:mx-0 gap-7">
              <StaticImage
                quality={100}
                width={120}
                height={91}
                src="../images/azzurra__ic__anbima--1.png"
                alt="Imagem"
              />

              <StaticImage
                quality={100}
                width={120}
                height={91}
                src="../images/azzurra__ic__anbima--2.png"
                alt="Imagem"
              />
            </div>
          </div>
        </div>

        <div className="container__brand-wrapper flex-auto v text-center lg:text-left w-5/6 lg:w-4/6 lg:w-auto">
          <div className="flex flex-col gap-5">
            <h3 className="border-b pb-4 lg:border-0 lg:pb-0 font-light text-white text-2xl md:text-2xl lg:text-4xl text-center lg:text-left">
              <span className="lg:block">Fale com</span>
              <span className="lg:block font-bold">
                <span className="font-light">a</span> Azurra Capital
              </span>
            </h3>

            <div className="text-white">
              <p className="font-bold text-xl">ENTRE EM CONTATO:</p>
              <a href="tel:+551132631089" className="block text-lg font-light">
                +55 (11) 3263-1089
              </a>
              <a href="tel:+5511944466662" className="block text-lg font-light">
                +55 (11) 94446-6662
              </a>
            </div>

            <div className="text-white normal-case">
              <p className="font-bold text-xl">FAÇA UMA VISITA:</p>

              <p>
                <span className="block">
                  R. Leopoldo Couto Magalhães Júnior, 110
                </span>

                <span className="block">ConJ. 81 - Edifício JK Tower</span>

                <span className="block">Itaim Bibi - São Paulo - SP</span>

                <span className="block">CEP: 04542-000</span>
              </p>
            </div>

            <div className="mx-auto lg:mx-0">
              <ButtonLink
                href="mailto:contato@azzurra.com.br"
                icon={<Mail />}
                title="Envie sua mensagem"
              />
            </div>
          </div>
        </div>
      </div>
    </ContentPage>
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
