import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { StaticImage } from 'gatsby-plugin-image';
import { Pagination, EffectFade, Autoplay } from 'swiper';

import HeroImageMask from '@root/images/azzurra__hero-banner--mask--2.png';

import './HeroBanner.styles.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import AzzurraBrand from '@components/Icons/AzzurraBrand';

const HeroBanner = () => {
  return (
    <div className="max-h-screen-75 sm:max-h-screen relative overflow-hidden">
      <Swiper
        loop
        className="azzurra-swiper-slider "
        centeredSlides
        spaceBetween={0}
        slidesPerView={1}
        modules={[Pagination, EffectFade, Autoplay]}
        onSlideChange={(slider) => {
          console.log('slide change', slider.activeIndex);
        }}
        onSwiper={(swiper) => {
          console.log(swiper);
        }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true,
          horizontalClass: 'bottom-32 sm:bottom-20 z-10',
          bulletClass:
            `inline-block w-5 h-5 rounded-full mx-2 bg-azzurra-gray-60 opacity-60 border-x border-y ` +
            'border-opacity-70 border-white border-opacity-70 cursor-pointer',
          bulletActiveClass:
            'bg-azzurra-dark-gold opacity-100 border-opacity-100'
        }}
      >
        <SwiperSlide className="azzurra-swiper-slider__wrapper">
          <div className="h-screen w-full">
            <StaticImage
              breakpoints={[640, 768, 1024, 1280, 1536, 1920]}
              quality={100}
              width={1920}
              height={1080}
              layout={'fullWidth'}
              className="h-screen w-full flex items-center justify-center"
              src="../../../../images/azzurra__hero-banner.jpg"
              alt="Imagem"
            />
          </div>
          <div className="w-full h-text-content-80 z-10 top-0 flex flex-col lg:flex-row items-center absolute justify-center">
            <div className="container max-w-6xl mx-auto">
              <div className="flex flex-col items-center lg:items-start grid-col-2 mx-auto sm:mx-0">
                <div className="w-64 sm:w-96  mb-6 sm:mb-20">
                  <AzzurraBrand className="w-full h-auto" color={'white'} />
                </div>

                <h2 className="text-xl sm:text-3x md:text-4xl lg:text-5xl mb-2 md:mb-6 text-center md:text-left font-light text-azzurra-navy-blue">
                  <span className="block font-bold text-white">
                    Bons ventos para
                  </span>

                  <span className="block font-bold text-white">
                    os seus investimentos!
                  </span>
                </h2>

                <div className="w-full sm:w-2/5 px-8 sm:px-0">
                  <p className="text-xl sm:text-3x md:text-4xl lg:text-3xl text-center md:text-left font-light text-white">
                    Conheça a Azzurra Capital, a gestora de recursos que vai
                    guiar a jornada rumo ao seu futuro.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="azzurra-swiper-slider__wrapper">
          <div className="h-screen w-full">
            <StaticImage
              breakpoints={[640, 768, 1024, 1280, 1536, 1920]}
              quality={100}
              width={1920}
              height={1080}
              layout={'fullWidth'}
              className="h-screen w-full flex items-center justify-center"
              src="../../../../images/azzurra__hero-bg.jpg"
              alt="Imagem"
            />
          </div>
          <div className="w-full h-text-content-80 z-10 top-0 flex flex-col lg:flex-row items-center absolute justify-center">
            <div className="container max-w-6xl mx-auto">
              <div className="flex flex-col items-center lg:items-start grid-col-2 mx-auto sm:mx-0">
                <div className="w-64 sm:w-96  mb-6 sm:mb-20">
                  <AzzurraBrand className="w-full h-auto" color={'white'} />
                </div>

                <h2 className="text-xl sm:text-3x md:text-4xl lg:text-5xl mb-2 md:mb-6 text-center md:text-left font-light text-azzurra-navy-blue">
                  <span className="block font-bold text-white">
                    Bons ventos para
                  </span>

                  <span className="block font-bold text-white">
                    os seus investimentos!
                  </span>
                </h2>

                <div className="w-full sm:w-2/5 px-8 sm:px-0">
                  <p className="text-xl sm:text-3x md:text-4xl lg:text-3xl text-center md:text-left font-light text-white">
                    Conheça a Azzurra Capital, a gestora de recursos que vai
                    guiar a jornada rumo ao seu futuro.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="azzurra-swiper-slider__img-wrapper pointer-events-none">
        <img
          src={HeroImageMask}
          alt=""
          className="azzurra-swiper-slider__img-content"
        />
      </div>
    </div>
  );
};

export default HeroBanner;
