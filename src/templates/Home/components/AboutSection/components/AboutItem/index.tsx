import React, { ReactElement } from 'react';

import Container from '@components/Layout/Container';
import GridAboutCard from '@components/Layout/GridAboutCard';
import Text from '@components/Text';

interface AboutItemProps {
  children?: ReactElement | string | null;
  icon: JSX.Element;
  title?: string;
  id?: string;
  description: string[];
  className?: string;
}

const AboutItem = ({
  title,
  description,
  icon,
  children,
  id,
  className = ''
}: AboutItemProps) => {
  return (
    <div id={id} className={`w-full px-4 lg:px-0 ${className}`}>
      <Container>
        <GridAboutCard>
          <div
            className={`w-full mb-4 sm:mb-5 text-azzurra-opaque-gold grid-in-icon`}
          >
            {icon}
          </div>

          <div className="w-5/6 flex flex-col grid-in-description">
            <Text label={title} className={'mb-2 sm:mb-4'} />

            {description.map((text, idx) => (
              <Text
                key={idx}
                as="p"
                size="paragraph"
                fontWeight="normal"
                color="black"
                className={'mb-2 sm:mb-4'}
                label={text}
              />
            ))}
          </div>
        </GridAboutCard>
      </Container>

      {children}
    </div>
  );
};

export default AboutItem;
