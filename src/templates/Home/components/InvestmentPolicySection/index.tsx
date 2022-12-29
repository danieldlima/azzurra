import React, { MouseEvent, useState } from 'react';
import { Element, scroller } from 'react-scroll/modules';

import { useBreakpointType } from '@root/modules/hooks';
import { getVisibility } from '@root/modules/utils';

import InvestmentPolicyMandala from '@components/Icons/InvestmentPolicyMandala';
import Container from '@components/Layout/Container';
import Title from '@components/Title';

import InvestmentPolicyItem from './components/InvestmentPolicyItem';

export interface InvestmentStep {
  isHover: boolean;
  id: number;
}

function InvestmentPolicySection() {
  const [investmentStepHovered, setInvestmentStepHovered] = useState<
    InvestmentStep | undefined
  >(undefined);
  const [investmentStep, setInvestmentStep] = useState<
    InvestmentStep | undefined
  >(undefined);

  const breakpoint = useBreakpointType(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  function handleBtnToTop(e: MouseEvent<SVGPathElement>) {
    const target = e.currentTarget as SVGPathElement;
    const id = target?.getAttribute('data-id');

    if (id && breakpoint === 'xs') {
      scroller.scrollTo(`investment-step-${id}`, {
        duration: 600,
        delay: 100,
        smooth: true,
        offset: -80
      });
    }
  }

  const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    const nameId = e.currentTarget.getAttribute('name');
    const id = (nameId || '').split('-').at(-1);

    if (id) {
      setInvestmentStepHovered({ isHover: true, id: Number(id) });
    }
  };

  function handleMouseLeave() {
    setInvestmentStepHovered(undefined);
  }

  return (
    <div id="investment-policy">
      <Container className={'py-20 sm:py-32 mobile-landscape:pb-16'}>
        <div
          className={
            'relative flex flex-col mobile-landscape:flex-row lg:flex-row gap-12 md:gap-14 justify-between ' +
            'lg:gap-14 mobile-landscape:gap-4 text-left mobile-landscape:text-left md:text-center lg:text-left'
          }
        >
          <div
            className={
              'mobile-landscape:sticky mobile-landscape:top-20 mobile-landscape:left-0 mobile-landscape:h-fit ' +
              'mobile-landscape:pr-0 mobile-landscape:w-5/12 sm:relative sm:top-0 sm:h-auto w-full lg:w-5/12' +
              'sticky top-20 left-0 h-fit sm:relative sm:top-0 sm:h-auto w-full lg:w-5/12 px-6 xl:px-0 ' +
              'investment-policy__mandala-container'
            }
          >
            <Title
              className={'mb-8 sm:mb-24 md:mb-14'}
              label={['Política de', 'Investimento']}
            />
            <div
              className={
                'md:w-2/3 mobile-landscape:w-full lg:w-full md:mx-auto investment-policy__mandala-wrapper'
              }
            >
              <InvestmentPolicyMandala
                className={'w-full h-full'}
                onClick={handleBtnToTop}
                onVisibility={setInvestmentStep}
                investmentStep={investmentStepHovered}
                breakpoint={breakpoint}
              />
            </div>
          </div>

          <Element
            name={'investment-policy-steps'}
            className="w-full mobile-landscape:w-7/12 lg:w-6/12 flex flex-col gap-8 px-6 xl:px-0"
          >
            <Element
              name={'investment-step-1'}
              style={getVisibility(1, investmentStep, { breakpoint }).style}
              className={'transition-all'}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
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
            </Element>

            <Element
              name={'investment-step-2'}
              style={getVisibility(2, investmentStep, { breakpoint }).style}
              className={'transition-all'}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
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
            </Element>

            <Element
              name={'investment-step-3'}
              style={getVisibility(3, investmentStep, { breakpoint }).style}
              className={'transition-all'}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
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
            </Element>

            <Element
              name={'investment-step-4'}
              style={getVisibility(4, investmentStep, { breakpoint }).style}
              className={'transition-all'}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
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
            </Element>

            <Element
              name={'investment-step-5'}
              style={getVisibility(5, investmentStep, { breakpoint }).style}
              className={'transition-all'}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
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
            </Element>
          </Element>
        </div>
      </Container>
    </div>
  );
}

export default InvestmentPolicySection;
