import React, { ButtonHTMLAttributes } from 'react';

import { addClassName } from '@root/modules/utils';

interface ButtonProps {
  label?: string;
  className?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

function Button({ className, type = 'button', label = 'Button' }: ButtonProps) {
  return (
    <button
      type={type}
      className={
        'w-fit bg-azzurra-navy-blue hover:bg-azzurra-gold-100 text-azzurra-opaque-gold ' +
        'font-bold text-xl rounded px-10 pt-4 pb-3 hover:text-white transition-all ' +
        `leading-none uppercase${addClassName(className)}`
      }
    >
      {label}
    </button>
  );
}

export default Button;
