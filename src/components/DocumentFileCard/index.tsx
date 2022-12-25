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
      className={
        'group/file-card p-3 rounded flex flex-col gap-2.5 lg:gap-2 items-end text-right ' +
        'text-black hover:text-white bg-white hover:bg-azzurra-navy-blue ease-in-out duration-200 ' +
        'cursor-pointer border border-azzurra-gray-50 hover:border-azzurra-navy-blue'
      }
    >
      <div className="download-card__icon w-7 group-hover/file-card:text-azzurra-opaque-gold">
        <DocxFile />
      </div>

      <span className="font-normal text-sm uppercase">{title}</span>
    </a>
  );
};

export default DocumentFileCard;
