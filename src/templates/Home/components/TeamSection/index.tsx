import React from 'react';

import Container from '@components/Layout/Container';
import SectionMask from '@components/SectionMask';
import Title from '@components/Title';

import PersonCard from './components/PersonCard';

function TeamSection() {
  return (
    <section id="team" className="relative">
      <SectionMask position="top" />

      <div className="px-16 mobile-landscape:px-20 md:px-52 lg:px-20 pt-20 sm:pt-64 pb-36 bg-team-section">
        <Container>
          <div
            className={
              'grid row-auto mobile-landscape:grid-cols-2 lg:grid-cols-3 gap-12'
            }
          >
            <div>
              <Title color="white" label={['Conheça', 'nosso time']} />
            </div>

            <PersonCard
              name="leandro alves"
              bio={{
                fullName: 'LEANDRO CALDEIRA ALVES',
                text:
                  'Possui mais de 7 anos de experiência em importantes instituições financeiras no Exterior ' +
                  'como Financial Advisor. Atuou em grande instituição financeira brasileira por mais de 8 anos. ' +
                  'Graduado em Gestão Comercial, com MBA em Gestão de Negócios pela Fundação Getúlio Vargas, ' +
                  'MBA em Gestão Comercial pela Fundação Dom Cabral. Possui certificação CPA-20 pela ANBIMA.'
              }}
            />

            <PersonCard
              name="ANTONIO CARLOS"
              bio={{
                fullName: 'ANTONIO CARLOS GOMES JUNIOR',
                text:
                  'Há 10 anos atuando como Financial Advisor e Corretor de Seguros de Vida e Previdência, ' +
                  'trabalhou em grandes bancos como gestor de negócios na área de financiamentos. Tem MBA ' +
                  'em Finanças pela FGV, cursos de Estratégias de Investimentos e Gestão de Portfólios pela ' +
                  'Wharton (Penn University - USA), e título de International Financial Advisor por plataformas ' +
                  'de investimentos globais. É um profissional com certificação de Planejador Financeiro ' +
                  'Pessoal CFP e registrado na CVM como Consultor de Investimentos Mobiliários.'
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
              name="RODRIGO MELATI"
              bio={{
                fullName: 'RODRIGO MELATI',
                text:
                  'Economista, professor de certificação para gestores pela FK Partners, certificado em fusões ' +
                  'e aquisições pelo INSPER. Atuou em áreas de planejamento comercial em multinacionais ' +
                  'e começou no mercado financeiro como assessor de investimentos, sendo convidado a integrar ' +
                  'a área macroeconômica de um dos maiores escritórios da XP. Atuou também com carteiras ' +
                  'administradas e foi gestor de fundos de investimentos em renda variável.'
              }}
            />
          </div>
        </Container>
      </div>
    </section>
  );
}
export default TeamSection;
