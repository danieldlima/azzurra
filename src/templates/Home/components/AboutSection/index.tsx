import * as React from 'react';

import Container from '@root/components/Layout/Container';

import IcAbout from '@components/Icons/About';
import IcLighthouse from '@components/Icons/Lighthouse';
import GridAboutCard from '@components/Layout/GridAboutCard';

import AboutItem from './components/AboutItem';
import DetailsSectionCompass from './components/DetailsSectionCompass';

// contact-section
const AboutSection = () => {
  return (
    <section id="about">
      <div className="flex flex-col items-center justify-center pb-20 pt-16 sm:pb-24 sm:pt-12 gap-16">
        <AboutItem
          id="meet-azzurra"
          title="Conheça a Azzurra Capital"
          description="O mundo dos investimentos é um oceano de oportunidades. Por meio da experiência de seus sócios com mais de 20 anos no setor de serviços financeiros, a Azzurra Capital navega em direção à construção e preservação do patrimônio dos nossos clientes. Atuando desde o público afluente ao Private, temos a estrutura de um Multi-Family Oﬃce focado em prover serviços de gestão de recursos no mercado doméstico e global."
          icon={<IcAbout className="w-full" />}
        />

        <DetailsSectionCompass />

        <AboutItem
          id="capacity-and-services"
          title="Capacidades & Serviços"
          description="A Azzurra Capital faz um trabalho profundo de análise dos aspectos patrimoniais relacionados à família: verifica como ela é composta, seus membros, os objetivos e as demandas. Um plano de longo prazo é apresentado, propondo um acompanhamento patrimonial e uma estrutura para a sucessão. Após essas etapas, realizamos a execução do plano proposto e acompanhamos todos os seus desdobramentos."
          icon={<IcLighthouse className="w-full" />}
        >
          <Container>
            <GridAboutCard>
              <div className="grid-in-description mt-8">
                <h4 className="text-xl sm:text-2xl font-bold text-azzurra-navy-blue mb-2 sm:mb-4">
                  GESTÃO DE RECURSOS
                </h4>

                <p className="text-lg leading-6">
                  Gerenciamento de carteiras administradas consolidadas e
                  cotizadas em um só sistema. Acessamos o mercado inteiro sem
                  limitações para investimentos em ativos.
                </p>
              </div>
            </GridAboutCard>
          </Container>
        </AboutItem>
      </div>
    </section>
  );
};

export default AboutSection;
