import * as React from 'react';
import { useContext } from 'react';

import Container from '@root/components/Layout/Container';
import { HomeContext } from '@root/modules/providers';

import AboutItem from '@templates/Home/components/AboutItem';
import ButtonCompassDetails from '@templates/Home/components/ButtonCompassDetails';

import AboutMandala from '@components/Icons/AboutMandala';
import IcCompass from '@components/Icons/Compass';
import GridAboutCard from '@components/Layout/GridAboutCard';
import Text from '@components/Text';

function DetailsSectionCompass() {
  const {
    aboutSection: { compassItem }
  } = useContext(HomeContext);

  const isHidden = !compassItem.isDetailsOpen ? ' hidden ' : '';

  return (
    <div className={'flex flex-col justify-center items-center w-full'}>
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
        className={`w-full px-4 p-14 text-left -mt-6 sm:-mt-5 lg:px-0 bg-azzurra-gray-20 -mt-6 ${isHidden}`}
      >
        <Container>
          <GridAboutCard className={'pr-4 lg:pr-0'}>
            <div
              className={
                'flex flex-col gap-8 sm:gap-10 col-start-icon col-end-description sm:col-start-description'
              }
            >
              <div>
                <Text as="h4" size="lg" label={'Nossa visão 360º'} />

                <Text
                  as="p"
                  size="paragraph"
                  fontWeight="normal"
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
                  label={
                    'Com base nas necessidades, expectativas e perfis de risco do cliente, oferecemos uma gestão de ' +
                    'patrimônio sem conflito de interesses, utilizando uma plataforma com arquitetura aberta.'
                  }
                />

                <Text
                  as="p"
                  size="paragraph"
                  fontWeight="normal"
                  label={
                    'A independência na escolha de parceiros e custodiantes se traduz em eficiência na ' +
                    'execução, acesso a diferentes mercados e custos competitivos.'
                  }
                />

                <Text
                  as="p"
                  size="paragraph"
                  fontWeight="normal"
                  label={
                    'Nossa remuneração é baseada no patrimônio sob nossa gestão.'
                  }
                />
              </div>

              <div className="mb-4 sm:mb-10">
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
                  label={
                    'Com foco no cliente e utilizando uma visão 360°, buscamos entender suas necessidades e construímos relacionamentos por meio da tomada de decisão feita em conjunto com o cliente.'
                  }
                />
              </div>
            </div>
          </GridAboutCard>
        </Container>
      </div>

      <div className={`w-full px-4 lg:px-0 -mt-6 ${isHidden}`}>
        <ButtonCompassDetails label="Fechar" />
      </div>
    </div>
  );
}

export default DetailsSectionCompass;
