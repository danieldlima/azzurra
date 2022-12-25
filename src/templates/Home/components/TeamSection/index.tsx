import React from 'react';

import Container from '@components/Layout/Container';
import SectionMask from '@components/SectionMask';
import Title from '@components/Title';

import PersonCard from './components/PersonCard';

function TeamSection() {
  return (
    <section className="relative">
      <SectionMask position="top" />

      <div className="px-16 md:px-52 lg:px-20 pt-20 sm:pt-64 pb-36 bg-team-section">
        <Container>
          <div className={'grid row-auto lg:grid-cols-3 gap-12'}>
            <div>
              <Title color="white" label={['Conheça', 'nosso time']} />
            </div>

            <PersonCard
              name="leandro alves"
              bio={{ fullName: 'leandro alves' }}
            />

            <PersonCard
              name="gilvan rudge"
              bio={{
                fullName: 'Gilvam Rudge Filho',
                text:
                  'Formado em Relações Internacionais pela FAAP, atuou em instituições financeiras nas bolsas ' +
                  'do Brasil, Nova Iorque, Chicago e Londres, com mais de 15 anos de experiência. Foi broker ' +
                  'de mercado futuro na ICAP Brasil e financial advisor institucional no Private do Banco Wells Fargo, ' +
                  'se especializando em fundos offshore e produtos estruturados.'
              }}
            />

            <PersonCard
              name="Robson Guedes"
              bio={{
                fullName: 'Robson Guedes'
              }}
            />

            <PersonCard
              name="Leonardo Prates"
              bio={{
                fullName: 'Leonardo Prates'
              }}
            />

            <PersonCard
              name="Marco Fuoco"
              bio={{
                fullName: 'Marco Fuoco'
              }}
            />
          </div>
        </Container>
      </div>
    </section>
  );
}
export default TeamSection;
