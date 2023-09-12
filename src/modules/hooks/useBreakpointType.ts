import { useMemo } from 'react';

export type BreakpointKeys = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export const useBreakpointType = (width: number): BreakpointKeys => {
  return useMemo(() => {
    if (typeof window !== 'undefined' && (width || window.innerWidth)) {
      switch (true) {
        case width >= 640 && width < 767:
          return 'sm';
        case width >= 768 && width < 1023:
          return 'md';
        case width >= 1024 && width < 1279:
          return 'lg';
        case width >= 1280 && width < 1535:
          return 'xl';
        case width >= 1536:
          return '2xl';
        default:
          return 'xs';
      }
    }

    return 'xs';
  }, [width]);
};
