import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import Card from './Card';

SwiperCore.use([Navigation, Pagination]);

export const Slider1 = () => {
    return (
        <Swiper className="swiper-4"
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
                576: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                },
                1400: {
                    slidesPerView: 4,
                    spaceBetween: 16,
                }
            }}
            pagination={{
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            }}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
        >
            <SwiperSlide>
                <Card 
                    images={['/real_estate/img/img1.jpg', '/real_estate/img/img2.jpg', '/real_estate/img/img3.jpg', '/real_estate/img/img4.jpg']}
                    title="1-к, квартира 52м2" 
                    price="6 000 000" 
                    addressName="ЖК “Столичный”" 
                    address="Вахитовский район, ул. Четаева 32" 
                    metro="Козья слобода, 7 минут"
                    text='Сдается 1-комнатная квартира в строящемся доме (Дом 3.1), срок сдачи: IV-кв. 2021, общей площадью 51.82 кв.м., на 18 этаже. Жилой комплекс "Столичный"- это современный жилой комплекс, который находится в самом  центре Казани, состоящий из нескольких кварталов, органично сочетающий городской комфорт и природное окружение...'
                    date="Вчера в 21:00"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Card 
                images={['/real_estate/img/img3.jpg']} 
                title="1-к, квартира 52м2" 
                price="6 000 000" 
                addressName="ЖК “Столичный”" 
                address="Вахитовский район, ул. Четаева 32" 
                text="Новый дом. Консьерж. Квартира после евро ремонта. Полы ламинат. Кондиционеры. Рядом школа и деский сад..."
                date="Вчера в 21:00"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Card 
                images={['/real_estate/img/img3.jpg']}
                title="1-к, квартира 52м2" 
                price="6 000 000" 
                addressName="ЖК “Столичный”" 
                address="Вахитовский район, ул. Четаева 32" 
                text="Новый дом. Консьерж. Квартира после евро ремонта. Полы ламинат. Кондиционеры. Рядом школа и деский сад..."
                date="Вчера в 21:00"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Card 
                images={['/real_estate/img/img3.jpg']}
                title="1-к, квартира 52м2" 
                price="6 000 000" 
                addressName="ЖК “Столичный”" 
                address="Вахитовский район, ул. Четаева 32" 
                text="Новый дом. Консьерж. Квартира после евро ремонта. Полы ламинат. Кондиционеры. Рядом школа и деский сад..."
                date="Вчера в 21:00"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Card 
                images={['/real_estate/img/img3.jpg']} 
                title="1-к, квартира 52м2" 
                price="6 000 000" 
                addressName="ЖК “Столичный”" 
                address="Вахитовский район, ул. Четаева 32" 
                text="Новый дом. Консьерж. Квартира после евро ремонта. Полы ламинат. Кондиционеры. Рядом школа и деский сад..."
                date="Вчера в 21:00"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Card 
                images={['/real_estate/img/img3.jpg']}
                title="1-к, квартира 52м2" 
                price="6 000 000" 
                addressName="ЖК “Столичный”" 
                address="Вахитовский район, ул. Четаева 32" 
                text="Новый дом. Консьерж. Квартира после евро ремонта. Полы ламинат. Кондиционеры. Рядом школа и деский сад..."
                date="Вчера в 21:00"
                />
            </SwiperSlide>
            <div className="swiper-button-prev">
                <img src="/real_estate/img/icons/prev.svg" alt="предыдущий" className="w-100"/>
            </div>
            <div className="swiper-button-next">
                <img src="/real_estate/img/icons/next.svg" alt="следующий" className="w-100"/>
            </div>
            <div className="swiper-pagination"></div>
        </Swiper>
    )
}