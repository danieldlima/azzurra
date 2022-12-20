import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { StaticImage } from 'gatsby-plugin-image';
import { Pagination, EffectFade, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

const HeroBanner = () => {
  return (
    <Swiper
      loop
      centeredSlides
      spaceBetween={0}
      slidesPerView={1}
      modules={[Pagination, EffectFade, Autoplay]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      // autoplay={{
      //   delay: 10000,
      //   disableOnInteraction: false
      // }}
      pagination={{
        clickable: true
      }}
    >
      <SwiperSlide>
        <div className="h-screen w-full flex items-center justify-center">
          <StaticImage
            breakpoints={[640, 768, 1024, 1280, 1536, 1920]}
            quality={100}
            width={1920}
            height={1080}
            layout={'fullWidth'}
            className="h-screen w-full"
            src="../../images/azzurra__hero-banner.jpg"
            alt="Imagem"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-screen w-full">
          <StaticImage
            breakpoints={[640, 768, 1024, 1280, 1536, 1920]}
            quality={100}
            width={1920}
            height={1080}
            layout={'fullWidth'}
            className="h-screen w-full flex items-center justify-center"
            src="../../images/azzurra__hero-banner.jpg"
            alt="Imagem"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroBanner;
