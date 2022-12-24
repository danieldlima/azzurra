import React from 'react';

import Container from '@components/Layout/Container';

function TeamSection() {
  return (
    <div className="p-20 bg-team-section">
      <Container>
        <div className={'grid grid-rows-2 lg:grid-cols-3 gap-10'}>
          <div>
            <h3 className={'text-7xl text-white'}>
              Conheça <strong>nosso time</strong>
            </h3>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default TeamSection;
