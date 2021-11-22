import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

SwiperCore.use([Navigation]);

export const Slider2 = () => {
    return (
        <Swiper className="swiper-3"
            spaceBetween={16}
            slidesPerView={3}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            >
            <SwiperSlide>
                <article>
                    <img src="../img/img2.jpg" alt="Зачем нужен риелтор?"/>
                    <div className="py-3 px-4">
                        <h2 className="mb-3">Зачем нужен риелтор?</h2>
                        <div className="text">Риэлтор, в первую очередь, является переговорщиком между продавцом и покупателем. Продавец хочет продать дороже, покупатель хочет купить дешевле — это неоспоримая истина. Именно баланс цены определяет, состоится ли сделка или нет. Поэтому агент должен знать, за какую стоимость каждая конкретная квартира будет востребована на рынке. Такое знание можно получить только из опыта прошлых сделок, знания конъюнктуры по каждому району города и (что самое важное) понимание того, какой спрос на подобные объекты есть сейчас.</div>
                        <a href="#" className="d-block text-center color-2 fs-11 fw-6">Читать далее</a>
                    </div>
                </article>
            </SwiperSlide>
            <SwiperSlide>
                <article>
                    <img src="../img/img2.jpg" alt="" className="w-100"/>
                </article>
            </SwiperSlide>
            <SwiperSlide>slide 3</SwiperSlide>
            <SwiperSlide>slide 4</SwiperSlide>
            <SwiperSlide>slide 5</SwiperSlide>
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
        </Swiper>
    )
}

