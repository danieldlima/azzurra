import * as React from 'react';

interface ButtonProps {
    href?: string;
    title?: string;
    icon?: React.ReactElement<any, any>;
    align?: 'justify-center' | 'justify-left' | 'justify-between';
    width?: 'max-w-boxPdf' | 'w-fit';
}

export const ButtonLink = ({ title, href, icon, align = 'justify-left', width = 'max-w-boxPdf' }: ButtonProps) => {
  return (
      <div className={`${align} ${width} text-white p-3 rounded mx-auto md:mx-0 flex flex-row items-center hover:bg-azzurra-dark-gold bg-azzurra-gold ease-in-out duration-200 cursor-pointer mb-10 md:mb-0`}>
          <div>
              {icon}
          </div>
          <a href={href} className="block text-lg font-light ml-3">
              {title}
          </a>
      </div>
  )
}

export default ButtonLink;
