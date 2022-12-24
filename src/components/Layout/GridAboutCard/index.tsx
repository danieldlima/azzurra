import React, { ReactNode } from 'react';

import { addClassName } from '@root/modules/utils';

interface GridAboutCardProps {
  children: ReactNode;
  className?: string;
}

function GridAboutCard({ children, className }: GridAboutCardProps) {
  return (
    <div
      className={`grid grid-cols-about-card grid-areas-about-card gap-x-4 sm:gap-x-10${addClassName(
        className
      )}`}
    >
      {children}
    </div>
  );
}

export default GridAboutCard;
