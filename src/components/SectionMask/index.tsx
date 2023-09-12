import React from 'react';

import HeroImageMask from '@root/images/azzurra__hero-banner--mask--2.png';

import './SectionMask.styles.scss';

interface SectionMaskPros {
  position?: 'top' | 'bottom';
}

function SectionMask({ position = 'bottom' }: SectionMaskPros) {
  const positionContainer = {
    bottom: '-bottom-0.5',
    top: '-top-0.5'
  };

  const rotate = {
    bottom: 'rotate-0',
    top: 'rotate-180'
  };

  return (
    <div
      className={`section-mask__img-wrapper pointer-events-none ${positionContainer[position]}`}
    >
      <img
        src={HeroImageMask}
        alt=""
        className={`section-mask__img-content ${rotate[position]}`}
      />
    </div>
  );
}

export default SectionMask;
