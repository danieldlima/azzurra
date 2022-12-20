import * as React from 'react';

import DocxFile from '../Icons/DocxFile';

interface DocumentFileCardProps {
  title: string;
  to: string;
}

const DocumentFileCard = ({ to, title }: DocumentFileCardProps) => {
  return (
    <a
      href={to}
      download
      className="download-card__wrapper w-40 lg:w-48 p-3 rounded flex flex-col gap-2.5 lg:gap-2 items-end text-right bg-white hover:bg-azzurra-opaque-gold ease-in-out duration-200 cursor-pointer"
    >
      <div className="download-card__icon w-7">
        <DocxFile />
      </div>

      <span className="font-medium text-sm text-black">{title}</span>
    </a>
  );
};

export default DocumentFileCard;
