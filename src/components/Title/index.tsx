import * as React from 'react';

import { addClassName } from '@root/modules/utils';

interface TitleProps {
  color?: 'white' | 'blue';
  label?: [textLight: string, textBold: string];
  className?: string;
}

function Title({ className, label = ['', ''], color = 'blue' }: TitleProps) {
  const colorClass = {
    white: 'text-white',
    blue: 'text-azzurra-navy-blue'
  };

  return (
    <h3
      className={`text-5xl sm:text-7xl ${colorClass[color]}${addClassName(
        className
      )}`}
    >
      {label[0]}{' '}
      <span className="block">
        <strong>{label[1]}</strong>
      </span>
    </h3>
  );
}

export default Title;
