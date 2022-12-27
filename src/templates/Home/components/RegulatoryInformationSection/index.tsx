import * as React from 'react';
import { useState } from 'react';

import { ParentSize } from '@visx/responsive';

import DocumentFileCard from '@components/DocumentFileCard';
import Container from '@components/Layout/Container';
import Text from '@components/Text';

function RegulatoryInformationSection() {
  const [height, setHeight] = useState(654);

  function onChangeHeight(value: number) {
    setHeight(value);
  }

  return (
    <div id="regulatory-information" className={'mb-20 lg:mb-32'}>
      <div className="relative flex w-full overflow-x-hidden">
        <Container className={'relative flex px-6 xl:px-0'}>
          <div className={'relative w-full lg:w-6/12 lg:pr-8'}>
            <div className={'mb-2 sm:mb-8'}>
              <Text label={'Informações Regulatórias'} />

              <p className="w-full pb-4 lg:pb-0 normal-case text-xl font-light mb-1">
                Clique abaixo para acessar os arquivos:
              </p>
            </div>

            <div>
              <ParentSize
                className={
                  'grid grid-cols-2 grid-rows-4 xl:grid-cols-3 xl:grid-rows-3' +
                  ' justify-center lg:justify-start gap-4'
                }
              >
                {({ height }) => {
                  onChangeHeight(height);

                  return (
                    <>
                      <DocumentFileCard
                        to="/documents/5. Formulário de Referência.docx"
                        title="Formulário de Referência"
                      />

                      <DocumentFileCard
                        to="/documents/11. Política de Conheça Seu Cliente e Prevenção e Combate à Lavagem de Dinheiro.docx"
                        title="conheça seu cliente e prevenção e combate à lavagem de dinheiro"
                      />

                      <DocumentFileCard
                        to="/documents/12. Código de Ética.docx"
                        title="código de ética"
                      />

                      <DocumentFileCard
                        to="/documents/13. Regras, Procedimentos e Descrição dos Controles Internos.docx"
                        title="regras, procedimentos e descrição dos controles internos"
                      />

                      <DocumentFileCard
                        to="/documents/14. Política de Compra e Venda de Valores Mobiliários.docx"
                        title="política de compra e venda de valores mobiliários"
                      />

                      <DocumentFileCard
                        to="/documents/15. Manual Previsto no art. 25 da Instrução CVM 558_15.docx"
                        title="manual de segregação de atividades"
                      />

                      <DocumentFileCard
                        to="/documents/16. Política de Gestão de Riscos.docx"
                        title="política de gestão de riscos"
                      />

                      <DocumentFileCard
                        to="/documents/17. Política de Rateio e Divisão de Ordens.docx"
                        title="política de rateio e divisão de ordens"
                      />
                    </>
                  );
                }}
              </ParentSize>
            </div>
          </div>
        </Container>

        <div
          style={{ height }}
          className={
            'absolute bottom-0 left-1/2 w-6/12 hidden lg:flex justify-end bg-regulatory-information ' +
            'bg-cover bg-center rounded-tl-lg rounded-bl-lg'
          }
        />
      </div>
    </div>
  );
}

export default RegulatoryInformationSection;
