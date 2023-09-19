import * as React from 'react';

import { useElementSize } from 'usehooks-ts';

import DocumentFileCard from '@components/DocumentFileCard';
import Container from '@components/Layout/Container';
import Text from '@components/Text';

export interface Document {
  id: number;
  title: string;
  file: string;
}

export interface RegulatoryInformationSectionProps {
  data: {
    title: string[];
    description: string[];
    documents: Document[];
  };
}

function RegulatoryInformationSection({
  data
}: RegulatoryInformationSectionProps) {
  const [documentGroupRef, { height }] = useElementSize();

  if (!data) return null;

  return (
    <div id="regulatory-information" className={'mb-20 lg:mb-32'}>
      <div className="relative flex w-full overflow-x-hidden">
        <Container className={'relative flex px-6 xl:px-0'}>
          <div className={'relative w-full lg:w-6/12 lg:pr-8'}>
            <div className={'mb-2 sm:mb-8'}>
              <Text label={data.title} />

              {data.description.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="w-full pb-4 lg:pb-0 normal-case text-xl font-light mb-1"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div>
              <div
                ref={documentGroupRef}
                className={
                  'grid grid-cols-2 grid-rows-4 mobile-landscape:grid-rows-2 mobile-landscape:grid-cols-4 xl:grid-cols-3' +
                  ' xl:grid-rows-3' +
                  ' justify-center lg:justify-start gap-4'
                }
              >
                {data.documents.map((document) => {
                  return (
                    <DocumentFileCard
                      key={document.id}
                      title={document.title}
                      to={document.file}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Container>

        <div
          style={{ height }}
          className={
            'ui__RegulatoryInformationSection__ghost-container absolute bottom-0 left-1/2 w-6/12 hidden lg:flex ' +
            'justify-end bg-regulatory-information bg-cover bg-center rounded-tl-lg rounded-bl-lg'
          }
        />
      </div>
    </div>
  );
}

export default RegulatoryInformationSection;
