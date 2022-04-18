import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

SwiperCore.use([Navigation, Pagination, Autoplay]);

export const MainBanner = () => {
    return (
        <Swiper className="swiper-home"
            loop={true}
            slidesPerView={1}
            effect='fade'
            pagination={{
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            }}
            autoplay={{
                delay: 5000
            }}
        >
            <SwiperSlide>
                <img src="/real_estate/img/main-slider/bg1.png" alt="слайд 1"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/real_estate/img/main-slider/bg1.png" alt="слайд 2"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/real_estate/img/main-slider/bg1.png" alt="слайд 2"/>
            </SwiperSlide>

            <div className="swiper-pagination"></div>
        </Swiper>
    )
}