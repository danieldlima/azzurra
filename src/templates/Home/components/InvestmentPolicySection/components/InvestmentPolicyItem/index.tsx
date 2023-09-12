import React, { ReactNode } from 'react';

import Text from '@components/Text';

interface InvestmentPolicyItemProps {
  id?: string;
  title: {
    text: string;
    color: AzzurraColor;
  };
  description: ReactNode;
}

function InvestmentPolicyItem({
  title: { text = '', color = 'black' },
  description
}: InvestmentPolicyItemProps) {
  return (
    <>
      <Text
        as="h3"
        size="paragraph"
        fontWeight="bold"
        color={color}
        className={'mb-0.5 sm:mb-2 uppercase'}
        label={text}
      />

      <Text
        as="p"
        size="paragraph"
        fontWeight="normal"
        color="black"
        label={description}
      />
    </>
  );
}

export default InvestmentPolicyItem;
