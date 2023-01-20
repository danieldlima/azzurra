import * as React from 'react';

import { addClassName } from '@root/modules/utils';

interface ButtonProps {
  href?: string;
  className?: string;
  title?: string;
  icon?: React.ReactElement;
  align?: 'justify-center' | 'justify-left' | 'justify-between';
  width?: 'max-w-boxPdf' | 'w-fit';
}

export const ButtonLink = ({
  title,
  href,
  icon,
  align = 'justify-left',
  width = 'max-w-boxPdf',
  className = 'mx-auto sm:mx-0'
}: ButtonProps) => {
  return (
    <div
      className={
        'text-white p-3 rounded flex flex-row items-center hover:bg-azzurra-dark-gold bg-azzurra-gold ' +
        'ease-in-out duration-200 cursor-pointer mb-10 md:mb-0 ' +
        `${addClassName(`${align} ${width}`)}${addClassName(className)}`
      }
    >
      <div>{icon}</div>
      <a href={href} className="block text-lg font-light ml-3">
        {title}
      </a>
    </div>
  );
};

export default ButtonLink;
