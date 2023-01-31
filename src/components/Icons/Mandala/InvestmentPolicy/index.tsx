import React, {
  MouseEvent,
  MouseEventHandler,
  ReactNode,
  useEffect,
  useState
} from 'react';

import { useLocation } from '@reach/router';

import { BreakpointKeys } from '@root/modules/hooks';
import { addClassName } from '@root/modules/utils';

import { InvestmentStep } from '@templates/Home/components/InvestmentPolicySection';

import { InvestmentPolicyPt } from '@components/Icons/Mandala/InvestmentPolicy/components';
import { InvestmentPolicyEn } from '@components/Icons/Mandala/InvestmentPolicy/components';

interface InvestmentPolicyMandalaProps extends IconBaseProps {
  onClick?: MouseEventHandler<SVGPathElement>;
  onVisibility?: (hoverId: InvestmentStep | undefined) => void;
  investmentStep?: InvestmentStep;
  breakpoint?: BreakpointKeys;
}

export function InvestmentPolicyMandala({
  className,
  onClick,
  onVisibility,
  investmentStep,
  breakpoint = 'xs'
}: InvestmentPolicyMandalaProps) {
  const [step, setStep] = useState<InvestmentStep | undefined>(undefined);
  const location = useLocation();

  const handleMouseEnter = (e: MouseEvent<SVGPathElement>) => {
    const nameId = e.currentTarget.getAttribute('data-id');
    const id = (nameId || '').split('-').at(-1);

    if (id) {
      setStep({ isHover: true, id: Number(id) });
    }
  };

  function handleMouseLeave() {
    setStep(undefined);
  }

  useEffect(() => {
    if (onVisibility) {
      onVisibility(step);
    }

    // eslint-disable-next-line
  }, [step]);

  const isLngEn = /.*(\/en\/?)/g;
  let Component = InvestmentPolicyPt;

  if (location.pathname.match(isLngEn)) Component = InvestmentPolicyEn;

  return (
    <>
      <svg
        className={className + addClassName('scale-105')}
        width="363"
        height="363"
        fill="none"
        viewBox="0 0 363 363"
      >
        <Component
          investmentStep={investmentStep}
          onClick={onClick}
          breakpoint={breakpoint as never}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
        />
      </svg>
    </>
  );
}
