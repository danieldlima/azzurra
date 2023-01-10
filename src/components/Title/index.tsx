import * as React from 'react';

import { addClassName } from '@root/modules/utils';

interface TitleProps {
  color?: 'white' | 'blue';
  label?: [textLight: string, textBold: string];
  isBlock?: boolean;
  className?: string;
}

function Title({
  className,
  isBlock = true,
  label = ['', ''],
  color = 'blue'
}: TitleProps) {
  const colorClass = {
    white: 'text-white',
    blue: 'text-azzurra-navy-blue'
  };

  return (
    <h3
      className={`mobile-landscape:text-5xl text-5xl sm:text-6xl ${
        colorClass[color]
      }${addClassName(className)}`}
    >
      {label[0]}{' '}
      <span className={isBlock ? 'block' : 'inline-block'}>
        <strong>{label[1]}</strong>
      </span>
    </h3>
  );
}

export default Title;
