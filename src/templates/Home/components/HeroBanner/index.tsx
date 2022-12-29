import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { StaticImage } from 'gatsby-plugin-image';
import { Pagination, EffectFade, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

import SectionMask from '@components/SectionMask';

import SliderItem from './components/SliderItem';

const initialPagination = {
  clickable: true,
  horizontalClass: 'bottom-32 sm:bottom-20 z-10',
  bulletClass:
    `inline-block w-5 h-5 rounded-full mx-2 bg-azzurra-gray-60 opacity-60 border-x border-y ` +
    'border-opacity-70 border-white border-opacity-70 cursor-pointer',
  bulletActiveClass: 'bg-azzurra-dark-gold opacity-100 border-opacity-100'
};

const HeroBanner = () => {
  return (
    <div className="max-h-screen-75 mobile-landscape:min-h-[700px] relative overflow-hidden">
      <Swiper
        loop={false}
        className="azzurra-swiper-slider"
        centeredSlides
        spaceBetween={0}
        slidesPerView={1}
        modules={[Pagination, EffectFade, Autoplay]}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false
        }}
        pagination={initialPagination}
      >
        <SwiperSlide className="azzurra-swiper-slider__wrapper">
          <SliderItem
            title={['Bons ventos para', 'os seus investimentos!']}
            description={
              'Conheça a Azzurra Capital, a gestora de recursos que vai ' +
              'guiar a jornada rumo ao seu futuro.'
            }
            staticImage={
              <StaticImage
                breakpoints={[320, 640, 768, 1024, 1280, 1536, 1920]}
                quality={100}
                width={1920}
                height={1080}
                layout={'fullWidth'}
                imgClassName={'w-[150%] -left-2/4 sm:w-full sm:left-0'}
                className="h-screen mobile-landscape:min-h-[700px] w-full flex items-center justify-center"
                src="../../../../images/azzurra__hero-banner.jpg"
                alt="Imagem"
              />
            }
          />
        </SwiperSlide>
      </Swiper>
      <SectionMask />
    </div>
  );
};

export default HeroBanner;
