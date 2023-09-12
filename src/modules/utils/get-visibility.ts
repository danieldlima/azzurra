import { BreakpointKeys } from '@root/modules/hooks';

import { InvestmentStep } from '@templates/Home/components/InvestmentPolicySection';

export interface VisibilityOptions {
  opacity?: [from: number, to: number];
  breakpoint?: BreakpointKeys;
}

const initialOptions: Required<VisibilityOptions> = {
  opacity: [25, 100],
  breakpoint: 'lg'
};

export function getVisibility(
  id: number,
  step: InvestmentStep | undefined,
  options?: VisibilityOptions
) {
  const opacity = options?.opacity ?? initialOptions.opacity;
  const breakpoint = options?.breakpoint || initialOptions.breakpoint;
  let visibility;

  if (!step)
    visibility = `lg:opacity-${opacity[1] ?? initialOptions.opacity[1]}`;
  else {
    if (step?.id === id) {
      visibility = `lg:opacity-${opacity[1] ?? initialOptions.opacity[1]}`;
    } else {
      visibility = `lg:opacity-${opacity[0] ?? initialOptions.opacity[0]}`;
    }
  }

  const opacityValue = Number(visibility.split('-')[1]) / 100;
  const valueBreakpoint =
    breakpoint === 'lg' || breakpoint === 'xl' || breakpoint === '2xl'
      ? opacityValue
      : 1;

  return { className: visibility, style: { opacity: valueBreakpoint } };
}
