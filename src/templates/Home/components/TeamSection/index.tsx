import React from 'react';

import JSONData from '@content/TeamSection-pt_BR-JSON-Content.json';

import Container from '@components/Layout/Container';
import SectionMask from '@components/SectionMask';
import Title from '@components/Title';

import PersonCard from './components/PersonCard';

function TeamSection() {
  return (
    <section id="team" className="relative">
      <SectionMask position="top" />

      <div className="px-16 mobile-landscape:px-20 md:px-52 lg:px-20 pt-20 sm:pt-44 pb-36 bg-team-section">
        <Container>
          <div className={'mb-16'}>
            <Title
              color="white"
              label={JSONData.title as never}
              isBlock={false}
              className={'text-center'}
            />
          </div>

          <div
            className={
              'grid row-auto mobile-landscape:grid-cols-2 lg:grid-cols-5 gap-4'
            }
          >
            {JSONData.cards.map((card) => {
              return (
                <PersonCard key={card.id} name={card.name} bio={card.bio} />
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
}
export default TeamSection;
