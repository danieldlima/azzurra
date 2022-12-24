import * as React from 'react';
import { useContext, useRef } from 'react';

import { HomeContext } from '@root/modules/providers';

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

function DetailsSectionCompass() {
  const {
    aboutSection: { compassItem }
  } = useContext(HomeContext);

  const aboutCompassRef = useRef<HTMLDivElement>(null!);

  const isHidden = !compassItem.isDetailsOpen ? ' hidden ' : '';

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
        title="Por que a Azzurra Capital?"
        description="Com foco no cliente e utilizando uma visão 360°, buscamos entender suas necessidades e construímos relacionamentos por meio da tomada de decisão feita em conjunto."
        icon={<IcCompass className="w-full" />}
      >
        <ButtonCompassDetails
          className={'mt-8 sm:mt-10'}
          arrowAngle={compassItem.isDetailsOpen ? 180 : 0}
          label={
            <>
              Foco no cliente: <strong>Visão 360º</strong>
            </>
          }
        />
      </AboutItem>

      <div
        className={`w-full px-4 p-14 text-left -mt-6 sm:-mt-5 xl:px-0 bg-azzurra-gray-20 -mt-6 ${isHidden}`}
      >
        <Container>
          <GridAboutCard className={'pr-4 lg:pr-0'}>
            <div
              className={
                'flex flex-col gap-8 sm:gap-10 col-start-icon col-end-description lg:col-start-description'
              }
            >
              <div>
                <Text as="h4" size="lg" label={'Nossa visão 360º'} />

                <Text
                  as="p"
                  size="paragraph"
                  fontWeight="normal"
                  color="black"
                  label={
                    'Com foco no cliente e utilizando uma visão 360°, buscamos entender suas necessidades e construímos relacionamentos por meio da tomada de decisão feita em conjunto com o cliente.'
                  }
                />
              </div>

              <div
                className={
                  'w-full max-w-xs max-h-xs sm:max-w-lg sm:max-h-lg mx-auto'
                }
              >
                <AboutMandala className={'w-full h-full'} />
              </div>

              <div className={'flex flex-col gap-6 sm:gap-3'}>
                <Text
                  as="p"
                  size="paragraph"
                  fontWeight="normal"
                  color="black"
                  label={
                    'Com base nas necessidades, expectativas e perfis de risco do cliente, oferecemos uma gestão de ' +
                    'patrimônio sem conflito de interesses, utilizando uma plataforma com arquitetura aberta.'
                  }
                />

                <Text
                  as="p"
                  size="paragraph"
                  fontWeight="normal"
                  color="black"
                  label={
                    'A independência na escolha de parceiros e custodiantes se traduz em eficiência na ' +
                    'execução, acesso a diferentes mercados e custos competitivos.'
                  }
                />

                <Text
                  as="p"
                  size="paragraph"
                  fontWeight="normal"
                  color="black"
                  label={
                    'Nossa remuneração é baseada no patrimônio sob nossa gestão.'
                  }
                />
              </div>

              <div className="mb-4 sm:mb-10 text-black text-white">
                <Text
                  as="h4"
                  size="paragraph"
                  className={'uppercase'}
                  label={'Multi-Family Office'}
                />

                <Text
                  as="p"
                  size="paragraph"
                  fontWeight="normal"
                  color="black"
                  className={'mb-8'}
                  label={
                    'Com foco no cliente e utilizando uma visão 360°, buscamos entender suas necessidades ' +
                    'e construímos relacionamentos por meio da tomada de decisão feita em conjunto com o cliente.'
                  }
                />

                <div
                  className={
                    'grid grid-rows-1 lg:grid-cols-3 gap-10 px-6 sm:px-0'
                  }
                >
                  <CardFamilyOffice
                    title="GESTÃO"
                    description={
                      'Gestão de recursos levando em consideração a política individual de investimentos e teses ' +
                      'de investimento mais aderentes.'
                    }
                    icons={<IcManagement className={'w-full h-full'} />}
                  />

                  <CardFamilyOffice
                    title="Consolidação"
                    description={
                      'Consolidação do patrimônio total do cliente, com tecnologia própria.'
                    }
                    icons={<IcConsolidation className={'w-full h-full'} />}
                  />

                  <CardFamilyOffice
                    title="Centralização"
                    description={
                      'Centralização da intermediação e coordenação de todas as relações que envolvem ' +
                      'o patrimônio do cliente, incluindo aspectos familiares e/ou societários.'
                    }
                    icons={<IcCentralization className={'w-full h-full'} />}
                  />
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
