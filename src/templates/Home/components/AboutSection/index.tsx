import * as React from 'react';

import AboutItem from '@templates/Home/components/AboutItem';

import About from '@components/Icons/About';
import ArrowDown from '@components/Icons/ArrowDown';
import Compass from '@components/Icons/Compass';
import Lighthouse from '@components/Icons/Lighthouse';

const AboutSection = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-20 pt-16 sm:pb-24 sm:pt-12 gap-16">
      <AboutItem
        title="Conheça a Azzurra Capital"
        description="O mundo dos investimentos é um oceano de oportunidades. Por meio da experiência de seus sócios com mais de 20 anos no setor de serviços financeiros, a Azzurra Capital navega em direção à construção e preservação do patrimônio dos nossos clientes. Atuando desde o público afluente ao Private, temos a estrutura de um Multi-Family Oﬃce focado em prover serviços de gestão de recursos no mercado doméstico e global."
        icon={<About className="w-full" />}
      />

      <AboutItem
        title="Por que a Azzurra Capital?"
        description="Com foco no cliente e utilizando uma visão 360°, buscamos entender suas necessidades e construímos relacionamentos por meio da tomada de decisão feita em conjunto."
        icon={<Compass className="w-full" />}
      >
        <div className="relative w-full sm:max-w-6xl sm:hidden">
          <div className="w-full h-0.5 bg-azzurra-navy-blue absolute top-1/2 -transform-x-1/2" />

          <div className="flex flex-row items-center justify-center py-1 px-6 w-fit mx-auto border-2 border-azzurra-navy-blue rounded-full bg-white relative z-10">
            <div className="mt-1.5 text-lg text-azzurra-navy-blue font-medium">
              Foco no cliente: <strong>Visão 360º</strong>
            </div>
            <div className="text-azzurra-opaque-gold w-8 ml-2">
              <ArrowDown className="w-full" />
            </div>
          </div>
        </div>
      </AboutItem>

      <AboutItem
        title="Capacidades & Serviços"
        description="A Azzurra Capital faz um trabalho profundo de análise dos aspectos patrimoniais relacionados à família: verifica como ela é composta, seus membros, os objetivos e as demandas. Um plano de longo prazo é apresentado, propondo um acompanhamento patrimonial e uma estrutura para a sucessão. Após essas etapas, realizamos a execução do plano proposto e acompanhamos todos os seus desdobramentos."
        icon={<Lighthouse className="w-full" />}
      >
        <div className="w-full sm:max-w-6xl flex-row hidden sm:flex">
          <div className="w-2/12 sm:w-20 mb-4 sm:mb-5 text-azzurra-opaque-gold" />

          <div className="w-5/6 flex flex-col pl-4 sm:pl-6">
            <h3 className="text-xl sm:text-2xl font-bold text-azzurra-navy-blue mb-2 sm:mb-4">
              GESTÃO DE RECURSOS
            </h3>

            <p className="text-lg leading-6">
              Gerenciamento de carteiras administradas consolidadas e cotizadas
              em um só sistema. Acessamos o mercado inteiro sem limitações para
              investimentos em ativos.
            </p>
          </div>
        </div>
      </AboutItem>
    </div>
  );
};

export default AboutSection;
