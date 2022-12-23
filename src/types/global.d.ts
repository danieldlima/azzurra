import { FC } from 'react';

declare global {
  interface IconBaseProps {
    className?: string;
  }

  type ReactFC<P = unknown | FC> = FC<P>;
}
