import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import BtnFav from '../utilities/BtnFav';
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
                <div className="card-mini">
                    <div className="slider">
                        <img src="../img/img1.jpg" alt="фото" className="active"/>
                        <img src="../img/img2.jpg" alt="фото"/>
                        <img src="../img/img3.jpg" alt="фото"/>
                        <img src="../img/img4.jpg" alt="фото"/>
                        <div className="box"></div>
                    </div>
                    <div className="p-3">
                        <div className="d-flex justify-content-between mb-3">
                            <div className="color-1 title-font fw-7 fs-11">1-к, квартира 52м2</div>
                            <div className="title-font black fw-7 fs-11">6 000 000 ₽</div>
                        </div>
                        <div className="address d-flex align-items-start mb-3">
                            <img src="../img/icons/pin.svg" alt="адрес"/>
                            <div className="fs-09 ms-2">
                                <div className="mb-1">ЖК “Столичный”</div>
                                <div>Вахитовский район, ул. Четаева 32</div>
                            </div>
                        </div>
                        <div className="text mb-4">
                            Новый дом. Консьерж. Квартира после евро ремонта. Полы ламинат. Кондиционеры. Рядом школа и деский сад...
                        </div>
                        <div className="text-end color-2 fs-09 fw-3">Вчера в 21:00</div>
                    </div>
                    <div className="labels">
                        <div className="vip">
                            <img src="../img/icons/vip.svg" alt="vip"/>
                            <span>VIP</span>
                        </div>
                        <div className="hot">
                            <img src="../img/icons/hot.svg" alt="hot"/>
                            <span>Hot</span>
                        </div>
                    </div>
                    <BtnFav/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <Card 
                url="../img/img3.jpg" 
                title="1-к, квартира 52м2" 
                price="6 000 000 ₽" 
                addressName="ЖК “Столичный”" 
                address="Вахитовский район, ул. Четаева 32" 
                text="Новый дом. Консьерж. Квартира после евро ремонта. Полы ламинат. Кондиционеры. Рядом школа и деский сад..."
                date="Вчера в 21:00"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Card 
                url="../img/img3.jpg" 
                title="1-к, квартира 52м2" 
                price="6 000 000 ₽" 
                addressName="ЖК “Столичный”" 
                address="Вахитовский район, ул. Четаева 32" 
                text="Новый дом. Консьерж. Квартира после евро ремонта. Полы ламинат. Кондиционеры. Рядом школа и деский сад..."
                date="Вчера в 21:00"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Card 
                url="../img/img3.jpg" 
                title="1-к, квартира 52м2" 
                price="6 000 000 ₽" 
                addressName="ЖК “Столичный”" 
                address="Вахитовский район, ул. Четаева 32" 
                text="Новый дом. Консьерж. Квартира после евро ремонта. Полы ламинат. Кондиционеры. Рядом школа и деский сад..."
                date="Вчера в 21:00"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Card 
                url="../img/img3.jpg" 
                title="1-к, квартира 52м2" 
                price="6 000 000 ₽" 
                addressName="ЖК “Столичный”" 
                address="Вахитовский район, ул. Четаева 32" 
                text="Новый дом. Консьерж. Квартира после евро ремонта. Полы ламинат. Кондиционеры. Рядом школа и деский сад..."
                date="Вчера в 21:00"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Card 
                url="../img/img3.jpg" 
                title="1-к, квартира 52м2" 
                price="6 000 000 ₽" 
                addressName="ЖК “Столичный”" 
                address="Вахитовский район, ул. Четаева 32" 
                text="Новый дом. Консьерж. Квартира после евро ремонта. Полы ламинат. Кондиционеры. Рядом школа и деский сад..."
                date="Вчера в 21:00"
                />
            </SwiperSlide>
            <div className="swiper-button-prev">
                <img src="../img/icons/prev.svg" alt="предыдущий" className="w-100"/>
            </div>
            <div className="swiper-button-next">
                <img src="../img/icons/next.svg" alt="следующий" className="w-100"/>
            </div>
            <div className="swiper-pagination"></div>
        </Swiper>
    )
}