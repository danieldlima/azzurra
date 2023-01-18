import React, { ReactNode, useState } from 'react';

import AzzurraBrand from '@components/Icons/AzzurraBrand';
import Modal from '@components/Modal';

interface SliderItemProps {
  title: [top: string, bottom: string];
  description: string;
  minHeight?: string;
  onOpen?: (make: boolean) => void;
  element: ReactNode;
}

function SliderItem({
  title,
  description,
  element,
  minHeight = 'h-full'
}: SliderItemProps) {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prevState) => !prevState);
  };

  console.log('open ->', open);

  return (
    <div className={minHeight}>
      <div
        className={
          'after:bg-black/40 md:after:bg-black/40 lg:after:bg-black/50 after:absolute ' +
          'after:top-0 after:left-0 after:pointer-events-none ' +
          `h-screen ${minHeight} mobile-landscape:min-h-[700px] w-full after:w-full after:h-full `
        }
      >
        {element}
      </div>

      <div className="w-full h-content-custom z-10 top-0 flex flex-col lg:flex-row items-center absolute justify-center">
        <div className="container max-w-6xl mx-auto">
          <div className={'mx-auto sm:mx-0 px-8 sm:px-4 xl:px-0'}>
            <div className="w-full lg:w-3/5 sm:mx-auto lg:mx-0 sm:px-0">
              <div
                className={
                  'animate-[entrance-b_0.7s_ease-out_0s_1_normal_forwards] sm:animate-entrance-l ' +
                  'opacity-0 w-64 xl:w-80 mb-10 sm:mb-16'
                }
              >
                <AzzurraBrand className="w-full h-auto" color={'white'} />
              </div>

              <h2
                className={
                  'animate-[entrance-b_0.7s_ease-out_0.6s_1_normal_forwards] sm:animate-entrance-l opacity-0 text-xl ' +
                  'sm:text-3x md:text-4xl lg:text-5xl mb-2 md:mb-6 text-left font-light text-azzurra-navy-blue'
                }
              >
                <span className="block font-bold text-white">{title[0]}</span>

                <span className="block font-bold text-white">{title[1]}</span>
              </h2>
            </div>

            <div
              className={
                'animate-[entrance-b_0.7s_ease-out_1s_1_normal_forwards] sm:animate-entrance-l opacity-0 ' +
                'w-full lg:w-2/5 sm:mx-auto lg:mx-0 sm:px-0 mb-6'
              }
            >
              <p className="ltext-xl sm:text-3x md:text-4xl lg:text-3xl text-left font-light text-white">
                {description}
              </p>
            </div>

            <div
              className={
                'animate-[entrance-b_0.7s_ease-out_1.4s_1_normal_forwards] sm:animate-entrance-l opacity-0 '
              }
            >
              <button
                onClick={handleToggle}
                className={
                  'border-2 rounded-full px-8 text-white px-8 py-1.5 text-white uppercase text-lg font-bold ' +
                  'transition-all bg-white/0 hover:text-azzurra-navy-blue hover:bg-white active:scale-90 ' +
                  'active:shadow-highlight'
                }
              >
                <span className="inline-block leading-none">
                  Assista ao vídeo
                </span>
              </button>
            </div>

            <Modal onClose={handleToggle} open={open}>
              <div
                className={'w-full h-full bg-backdrop-dark backdrop-blur-2xl'}
              >
                <div
                  className={
                    'entrance-opacity w-full h-full rounded overflow-hidden'
                  }
                >
                  <video
                    autoPlay
                    controls
                    loop
                    preload="auto"
                    poster="./images/azzurra__hero-banner.webp"
                    className={
                      'w-full h-full video[poster]:w-full video[poster]:h-full'
                    }
                  >
                    <source
                      src="./video/azzurra__hero-video.webm"
                      type="video/webm"
                    />
                    <source
                      src="./video/azzurra__hero-video.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderItem;
