import React from 'react';

import InvestmentPolicyMandala from '@components/Icons/InvestmentPolicyMandala';
import Container from '@components/Layout/Container';
import Title from '@components/Title';

import InvestmentPolicyItem from './components/InvestmentPolicyItem';

function InvestmentPolicySection() {
  return (
    <section id="investment-policy">
      <Container className={'py-20 sm:py-32 px-6 xl:px-0'}>
        <div
          className={
            'flex flex-col lg:flex-row gap-12 md:gap-14 lg:gap-8 justify-between ' +
            'text-left md:text-center lg:text-left'
          }
        >
          <div className="w-full lg:w-5/12 investment-policy__mandala-container">
            <Title
              className={'mb-8 sm:mb-24 md:mb-14'}
              label={['Política de', 'Investimento']}
            />

            <div className="md:w-2/3 lg:w-full md:mx-auto investment-policy__mandala-wrapper">
              <InvestmentPolicyMandala className={'w-full h-full'} />
            </div>
          </div>

          <div className="w-full lg:w-6/12 flex flex-col gap-8">
            <InvestmentPolicyItem
              title={{
                text: '01 | ANÁLISE DO PERFIL DO INVESTIDOR E CARTEIRA ATUAL',
                color: 'gold-100'
              }}
              description={
                'Diagnóstico inicial que será feita a avaliação da expectativa de prazo, liquidez e tolerância ' +
                'ao risco do investidor, para que o planejamento de investimentos possa estar alinhado com as ' +
                'expectativas de maneira realista, na construção de um portfólio personalizado, e que esteja ' +
                'adequado a necessidade dos objetivos.'
              }
            />

            <InvestmentPolicyItem
              title={{
                text: '02 | ANÁLISE DO CENÁRIO MACRO E MICROECONÔMICO',
                color: 'navy-blue'
              }}
              description={
                'Definição da Política de Investimento eficaz, para direcionar e disciplinar ' +
                'investimentos ao longo do tempo, de acordo com ambiente econômico.'
              }
            />

            <InvestmentPolicyItem
              title={{
                text: '03 | ELABORAÇÃO E APRESENTAÇÃO DO PORTFÓLIO',
                color: 'light-blue'
              }}
              description={
                'Respeitando a Política de Investimentos elaborada, serão avaliados os ativos ' +
                'que poderão compor o portfólio, que será personalizado conforme a necessidade ' +
                'de liquidez e o perfil do risco, sendo apresentado as estratégias a serem adotadas ' +
                'para atingir o objetivo do investidor.'
              }
            />

            <InvestmentPolicyItem
              title={{
                text: '04 | IMPLEMENTAÇÃO DA CARTEIRA',
                color: 'opaque-gold'
              }}
              description={
                'A execução da implementação é integralmente realizada pela Azzurra Capital, no formato ' +
                'de carteira administrada ou fundo exclusivo, observado o disposto na Instrução CVM 558/2015.'
              }
            />

            <InvestmentPolicyItem
              title={{
                text: '05 | ACOMPANHAMENTO E REUNIÕES PERIÓDICAS COM O INVESTIDOR',
                color: 'brown'
              }}
              description={
                <>
                  {'O cliente terá acesso ao seu portfólio de maneira eletrônica no site da Azzurra Capital, ' +
                    'para que possa acompanhar o desempenho de seus investimentos, bem como retirar ' +
                    'seu extrato pela plataforma.'}
                  <br />
                  <br />
                  {'É realizado o monitoramento constante das carteiras dos clientes por meio dos ' +
                    'especialistas em investimentos e é estabelecida, em comum acordo com o cliente, ' +
                    'a periodicidade das reuniões para avaliação da estratégia adotada e dos ajustes ' +
                    'do portfólio, quando necessário'}
                </>
              }
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default InvestmentPolicySection;
