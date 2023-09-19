import React, { Fragment, MouseEvent, useState } from 'react';
import { Element, scroller } from 'react-scroll/modules';

import { useBreakpointType } from '@root/modules/hooks';
import { getVisibility } from '@root/modules/utils';

import { InvestmentPolicyMandala } from '@components/Icons/Mandala/InvestmentPolicy';
import Container from '@components/Layout/Container';
import Title from '@components/Title';

import InvestmentPolicyItem from './components/InvestmentPolicyItem';

export interface InvestmentStep {
  isHover: boolean;
  id: number;
}

export interface InvestmentPolicySectionStep {
  id: number;
  name: string;
  title: string;
  color: string;
  description: string[];
}

export interface InvestmentPolicySectionProps {
  data: {
    title: string[];
    steps: InvestmentPolicySectionStep[];
  };
}

function InvestmentPolicySection({ data }: InvestmentPolicySectionProps) {
  const [investmentStepHovered, setInvestmentStepHovered] = useState<
    InvestmentStep | undefined
  >(undefined);
  const [investmentStep, setInvestmentStep] = useState<
    InvestmentStep | undefined
  >(undefined);

  const breakpoint = useBreakpointType(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  if (!data?.title || !data?.steps.length) return null;

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
              label={data.title as never}
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
            {data.steps.map((step) => {
              return (
                <Element
                  key={step.id}
                  name={step.name}
                  style={
                    getVisibility(step.id + 1, investmentStep, { breakpoint })
                      .style
                  }
                  className={'transition-all'}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <InvestmentPolicyItem
                    title={{
                      text: step.title,
                      color: step.color as never
                    }}
                    description={
                      <>
                        {step.description.map((paragraph, idx) => {
                          return (
                            <Fragment key={idx}>
                              {paragraph}
                              {idx >= step.description.length ? null : (
                                <>
                                  <br />
                                  <br />
                                </>
                              )}
                            </Fragment>
                          );
                        })}
                      </>
                    }
                  />
                </Element>
              );
            })}
          </Element>
        </div>
      </Container>
    </div>
  );
}

export default InvestmentPolicySection;
