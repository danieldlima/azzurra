import React, { ReactNode } from 'react';

import Text from '@components/Text';

interface CardFamilyOfficeProps {
  icons: ReactNode;
  title: string;
  description: string;
}

function CardFamilyOffice({
  title,
  description,
  icons
}: CardFamilyOfficeProps) {
  return (
    <div
      className={
        'flex flex-col bg-white hover:bg-azzurra-opaque-gold rounded-lg p-6 justify-start cursor-help'
      }
    >
      <div className={'mb-6 w-20 h-20 mx-auto text-azzurra-brown'}>{icons}</div>

      <div className={'text-center'}>
        <Text
          as="h4"
          size="custom"
          color="black"
          className={'uppercase text-2xl'}
          label={title}
        />

        <Text
          as="p"
          size="paragraph"
          fontWeight="normal"
          color="black"
          className={'transition-all'}
          label={description}
        />
      </div>
    </div>
  );
}

export default CardFamilyOffice;
