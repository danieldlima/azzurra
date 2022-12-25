import React from 'react';

import Container from '@components/Layout/Container';

import PersonCard from './components/PersonCard';

function TeamSection() {
  return (
    <div className="px-16 md:px-52 lg:px-20 pt-20 pb-36 bg-team-section">
      <Container>
        <div className={'grid row-auto lg:grid-cols-3 gap-12'}>
          <div>
            <h3 className={'text-5xl sm:text-7xl text-white'}>
              Conheça{' '}
              <span className="block">
                <strong>nosso time</strong>
              </span>
            </h3>
          </div>

          <PersonCard />
          <PersonCard />
          <PersonCard />
          <PersonCard />
          <PersonCard />
        </div>
      </Container>
    </div>
  );
}
export default TeamSection;
