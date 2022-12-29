import { InvestmentStep } from '@templates/Home/components/InvestmentPolicySection';

export interface VisibilityOptions {
  opacity?: [from: number, to: number];
}

const initialOptions: Required<VisibilityOptions> = {
  opacity: [25, 100]
};

export function getVisibility(
  id: number,
  step: InvestmentStep | undefined,
  options?: VisibilityOptions
): string {
  const opacity = options?.opacity ?? initialOptions.opacity;
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

  return visibility;
}
