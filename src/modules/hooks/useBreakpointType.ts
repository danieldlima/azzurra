import { useMemo } from 'react';

export type BreakpointKeys = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const useBreakpointType = (width: number): BreakpointKeys => {
  return useMemo(() => {
    if (typeof window !== 'undefined' && (width || window.innerWidth)) {
      switch (true) {
        case width > 0 && width < 600:
          return 'xs';
        case width >= 600 && width < 960:
          return 'sm';
        case width >= 960 && width < 1280:
          return 'md';
        case width >= 1280 && width < 1600:
          return 'lg';
        default:
          return 'xl';
      }
    }

    return 'xs';
  }, [width]);
};
