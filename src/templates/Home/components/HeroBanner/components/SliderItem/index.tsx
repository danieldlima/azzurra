import React, { ReactNode } from 'react';

import AzzurraBrand from '@components/Icons/AzzurraBrand';

interface SliderItemProps {
  title: [top: string, bottom: string];
  description: string;
  staticImage: ReactNode;
}

function SliderItem({ title, description, staticImage }: SliderItemProps) {
  return (
    <div>
      <div
        className={
          'h-screen mobile-landscape:min-h-[700px] w-full after:w-full after:h-full after:bg-black/40 md:after:bg-black/40 ' +
          'lg:after:bg-black/0 after:absolute after:top-0 after:left-0 '
        }
      >
        {staticImage}
      </div>

      <div className="w-full h-text-content-80 z-10 top-0 flex flex-col lg:flex-row items-center absolute justify-center">
        <div className="container max-w-6xl mx-auto">
          <div className={'grid-col-2 mx-auto sm:mx-0 sm:px-4 xl:px-0'}>
            <div className="w-full lg:w-3/5 sm:mx-auto lg:mx-0 px-8 sm:px-0">
              <div className="w-64 sm:w-80 mb-10 sm:mb-20 md:mt-8">
                <AzzurraBrand className="w-full h-auto" color={'white'} />
              </div>

              <h2
                className={
                  'text-xl sm:text-3x md:text-4xl lg:text-5xl mb-2 md:mb-6 text-left font-light text-azzurra-navy-blue'
                }
              >
                <span className="block font-bold text-white">{title[0]}</span>

                <span className="block font-bold text-white">{title[1]}</span>
              </h2>
            </div>

            <div className="w-full lg:w-2/5 sm:mx-auto lg:mx-0 px-8 sm:px-0">
              <p className="text-xl sm:text-3x md:text-4xl lg:text-3xl text-left font-light text-white">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderItem;
