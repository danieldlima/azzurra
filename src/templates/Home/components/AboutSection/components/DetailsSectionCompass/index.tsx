import * as React from 'react';
import { useContext, useRef } from 'react';

import { HomeContext } from '@root/modules/providers';
import { addClassName } from '@root/modules/utils';

import JSONData from '@content/home/pt/AboutSection-JSON-Content.json';

import AboutMandala from '@components/Icons/AboutMandala';
import IcCentralization from '@components/Icons/Centralization';
import IcCompass from '@components/Icons/Compass';
import IcConsolidation from '@components/Icons/Consolidation';
import IcManagement from '@components/Icons/Management';
import Container from '@components/Layout/Container';
import GridAboutCard from '@components/Layout/GridAboutCard';
import Text from '@components/Text';

import AboutItem from '../AboutItem';
import ButtonCompassDetails from '../ButtonCompassDetails';
import CardFamilyOffice from '../CardFamilyOffice';

interface DetailsSectionCompassFeaturesCards {
  id: number;
  title: string;
  description: string;
}

interface DetailsSectionCompassFeatures {
  title: string;
  description: string;
  cards: DetailsSectionCompassFeaturesCards[];
}
interface DetailsSectionCompassContent {
  title: string;
  button: string[] | null;
  description: string[];
  features: DetailsSectionCompassFeatures | null;
}

export interface DetailsSectionCompassProps {
  data: {
    id: string;
    title: string;
    description: string[];
    content: DetailsSectionCompassContent | null;
  };
}

function DetailsSectionCompass({ data }: DetailsSectionCompassProps) {
  const { aboutSection } = useContext(HomeContext);

  const aboutCompassRef = useRef<HTMLDivElement>(null!);

  const { isDetailsOpen } = aboutSection?.compassItem;
  const isHidden = !isDetailsOpen ? ' hidden ' : '';

  const icons = {
    0: <IcManagement className={'w-full h-full'} />,
    1: <IcConsolidation className={'w-full h-full'} />,
    2: <IcCentralization className={'w-full h-full'} />
  };

  function handleClick() {
    const element = document.getElementById('about-compass');

    if (aboutCompassRef.current) {
      aboutCompassRef.current.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      });
    } else if (!aboutCompassRef.current && element) {
      element.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }

  return (
    <div
      id={'about-compass'}
      ref={aboutCompassRef}
      className={'flex flex-col justify-center items-center w-full'}
    >
      <AboutItem
        id="why-azzurra"
        title={data.title}
        description={data.description}
        icon={<IcCompass className="w-full" />}
      >
        <ButtonCompassDetails
          id="explore-our-vision"
          className={'mt-8 sm:mt-10'}
          arrowAngle={aboutSection?.compassItem.isDetailsOpen ? 180 : 0}
          label={
            <>
              {!data.content?.button?.length ? null : data.content?.button[0]}{' '}
              <strong>
                {!data.content?.button?.length ? null : data.content?.button[1]}
              </strong>
            </>
          }
        />
      </AboutItem>

      <div
        className={
          'w-full px-4 text-left -mt-6 sm:-mt-5 xl:px-0 bg-azzurra-gray-20 -mt-6 overflow-hidden transition-all' +
          addClassName(isDetailsOpen ? 'h-auto py-14' : 'h-0')
        }
      >
        <Container>
          <GridAboutCard className={'pr-4 md:pr-0'}>
            <div
              className={
                'flex flex-col gap-8 sm:gap-10 col-start-icon col-end-description lg:col-start-description'
              }
            >
              <div>
                <Text as="h4" size="lg" label={'Nossa visão 360º'} />
              </div>

              <div
                className={
                  'w-full max-w-xs max-h-xs sm:max-w-lg sm:max-h-lg mx-auto'
                }
              >
                <AboutMandala className={'w-full h-full'} />
              </div>

              <div className={'flex flex-col gap-6 sm:gap-3'}>
                {data.content?.description.map((paragraph, idx) => (
                  <Text
                    key={idx}
                    as="p"
                    size="paragraph"
                    fontWeight="normal"
                    color="black"
                    label={paragraph}
                  />
                ))}
              </div>

              <div className="mb-4 sm:mb-10 text-black text-white">
                <Text
                  as="h4"
                  size="paragraph"
                  className={'uppercase'}
                  label={data.content?.features?.title}
                />

                <Text
                  as="p"
                  size="paragraph"
                  fontWeight="normal"
                  color="black"
                  className={'mb-8'}
                  label={data.content?.features?.description}
                />

                <div
                  className={
                    'grid grid-rows-1 md:grid-cols-3 gap-10 px-6 sm:px-0'
                  }
                >
                  {data.content?.features?.cards.map((card) => {
                    return (
                      <CardFamilyOffice
                        key={card.id}
                        title={card.title}
                        description={card.description}
                        icons={icons[card.id as never]}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </GridAboutCard>
        </Container>
      </div>

      <div className={`w-full px-4 lg:px-0 -mt-6 ${isHidden}`}>
        <ButtonCompassDetails label="Fechar" onClick={handleClick} />
      </div>
    </div>
  );
}

export default DetailsSectionCompass;
