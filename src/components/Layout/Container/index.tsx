import React, { ReactNode } from 'react';

import { addClassName } from '@root/modules/utils';

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`w-full sm:max-w-6xl mx-auto${addClassName(className)}`}>
      {children}
    </div>
  );
}

export default Container;
