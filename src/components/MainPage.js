import React from 'react';
import BtnFav from '../utilities/BtnFav';
// Import Swiper React components
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


export default function MainPage() {
    return (
        <div id="main-page">
            <div id="sec-1">
                <h1>Мы подобрали для Вас лучшие варианты</h1>
            </div>

            <div className="container tiles px-5 mb-5">
                <div className="tile">
                    <img src="../img/icons/icon-1.svg" alt="Сдать"/>
                    <div className="links">
                        <a href="#">Купить</a>
                        <a href="#">Сдать</a>
                        <a href="#">Продать</a>
                        <a href="#">Снять</a>
                    </div>
                </div>
                <div className="tile">
                    <img src="../img/icons/icon-2.svg" alt="Недвижимость"/>
                    <div className="links">
                        <a href="#">Дома</a>
                        <a href="#">Дачи</a>
                        <a href="#">Коттеджи</a>
                    </div>
                </div>
                <div className="tile">
                    <img src="../img/icons/icon-3.svg" alt="Паркинг"/>
                    <div className="links">
                        <a href="#">Гараж</a>
                        <a href="#">Паркинг</a>
                    </div>
                </div>
                <div className="tile">
                    <img src="../img/icons/icon-4.svg" alt="Земельные участки"/>
                    <div className="links">
                        <a href="#">Земельные участки</a>
                    </div>
                </div>
                <div className="tile">
                    <img src="../img/icons/icon-5.svg" alt="Коммерческая недвижимость"/>
                    <div className="links">
                        <a href="#">Коммерческая недвижимость</a>
                    </div>
                </div>
                <div className="tile">
                    <img src="../img/icons/icon-6.svg" alt="Ипотека"/>
                    <div className="links">
                        <a href="#">Ипотека</a>
                    </div>
                </div>
                <div className="tile">
                    <img src="../img/icons/icon-7.svg" alt="Дизайн"/>
                    <div className="links">
                        <a href="#">Дизайн</a>
                    </div>
                </div>
                <div className="tile">
                    <img src="../img/icons/icon-8.svg" alt="Ремонт"/>
                    <div className="links">
                        <a href="#">Ремонт</a>
                    </div>
                </div>
                <div className="tile">
                    <img src="../img/icons/icon-9.svg" alt="Грузоперевозки"/>
                    <div className="links">
                        <a href="#">Грузоперевозки</a>
                    </div>
                </div>
                <div className="tile">
                    <img src="../img/icons/icon-10.svg" alt="Услуги риелторов"/>
                    <div className="links">
                        <a href="#">Услуги риелторов</a>
                    </div>
                </div>
            </div>
        
            <div className="container mb-5">
                <h2>Найти на карте</h2>
                <img src="../img/map.png" alt="Карта" className="w-100"/>
            </div>

            

            <div className="container mb-5">
                <h2>Срочная продажа</h2>
                <div className="position-relative">
                    <Swiper className="swiper-4"
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{ clickable: true }}
                        spaceBetween={4}
                        slidesPerView={2}
                        breakpoints={{
                            576: {
                                slidesPerView: 3,
                                spaceBetween: 4,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 16,
                            },
                            1200: {
                                slidesPerView: 4,
                                spaceBetween: 16,
                            }
                        }}
                    >
                        <SwiperSlide>
                            <div className="card-mini">
                                <img src="../img/img3.jpg" alt="фото" className="w-100"/>
                                <div className="p-3">
                                    <div className="d-flex justify-content-between mb-3">
                                        <div className="color-1 title-font fw-7 fs-11">1-к, квартира 52м2</div>
                                        <div className="title-font black fw-7 fs-11">6 000 000 ₽</div>
                                    </div>
                                    <div className="d-flex align-items-start mb-3">
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
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-mini">
                                <img src="../img/img3.jpg" alt="фото" className="w-100"/>
                                <div className="p-3">
                                    <div className="d-flex justify-content-between mb-3">
                                        <div className="color-1 title-font fw-7 fs-11">1-к, квартира 52м2</div>
                                        <div className="title-font black fw-7 fs-11">6 000 000 ₽</div>
                                    </div>
                                    <div className="d-flex align-items-start mb-3">
                                        <img src="../img/icons/pin.svg" alt="адрес"/>
                                        <div className="fs-09 ms-2">
                                            <div className="mb-1">ЖК “Столичный”</div>
                                            <div>Вахитовский район, ул. Четаева 32</div>
                                        </div>
                                    </div>
                                    <div className="text mb-4">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, sit voluptates. A quam officiis nesciunt dolores eum quibusdam vitae dolorum, sit ut in eius amet facilis atque dignissimos exercitationem velit!
                                    </div>
                                    <div className="text-end color-2 fs-09 fw-3">Вчера в 21:00</div>
                                </div>
                                <div className="labels">
                                    <div className="vip">
                                        <img src="../img/icons/vip.svg" alt="VIP"/> 
                                        <span>VIP</span>
                                    </div>
                                    <div className="hot">
                                        <img src="../img/icons/hot.svg" alt="Hot"/> 
                                        <span>Hot</span>
                                    </div>
                                </div>
                                <BtnFav/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-mini">
                                <img src="../img/img3.jpg" alt="фото" className="w-100"/>
                                <div className="p-3">
                                    <div className="d-flex justify-content-between mb-3">
                                        <div className="color-1 title-font fw-7 fs-11">1-к, квартира 52м2</div>
                                        <div className="title-font black fw-7 fs-11">6 000 000 ₽</div>
                                    </div>
                                    <div className="d-flex align-items-start mb-3">
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
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-mini">
                                <img src="../img/img3.jpg" alt="фото" className="w-100"/>
                                <div className="p-3">
                                    <div className="d-flex justify-content-between mb-3">
                                        <div className="color-1 title-font fw-7 fs-11">1-к, квартира 52м2</div>
                                        <div className="title-font black fw-7 fs-11">6 000 000 ₽</div>
                                    </div>
                                    <div className="d-flex align-items-start mb-3">
                                        <img src="../img/icons/pin.svg" alt="адрес"/>
                                        <div className="fs-09 ms-2">
                                            <div className="mb-1">ЖК “Столичный”</div>
                                            <div>Вахитовский район, ул. Четаева 32</div>
                                        </div>
                                    </div>
                                    <div className="text mb-4">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, sit voluptates. A quam officiis nesciunt dolores eum quibusdam vitae dolorum, sit ut in eius amet facilis atque dignissimos exercitationem velit!
                                    </div>
                                    <div className="text-end color-2 fs-09 fw-3">Вчера в 21:00</div>
                                </div>
                                <div className="labels">
                                    <div className="vip">
                                        <img src="../img/icons/vip.svg" alt="VIP"/> 
                                        <span>VIP</span>
                                    </div>
                                    <div className="hot">
                                        <img src="../img/icons/hot.svg" alt="Hot"/> 
                                        <span>Hot</span>
                                    </div>
                                </div>
                                <BtnFav/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-mini">
                                <img src="../img/img3.jpg" alt="фото" className="w-100"/>
                                <div className="p-3">
                                    <div className="d-flex justify-content-between mb-3">
                                        <div className="color-1 title-font fw-7 fs-11">1-к, квартира 52м2</div>
                                        <div className="title-font black fw-7 fs-11">6 000 000 ₽</div>
                                    </div>
                                    <div className="d-flex align-items-start mb-3">
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
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-mini">
                                <img src="../img/img3.jpg" alt="фото" className="w-100"/>
                                <div className="p-3">
                                    <div className="d-flex justify-content-between mb-3">
                                        <div className="color-1 title-font fw-7 fs-11">1-к, квартира 52м2</div>
                                        <div className="title-font black fw-7 fs-11">6 000 000 ₽</div>
                                    </div>
                                    <div className="d-flex align-items-start mb-3">
                                        <img src="../img/icons/pin.svg" alt="адрес"/>
                                        <div className="fs-09 ms-2">
                                            <div className="mb-1">ЖК “Столичный”</div>
                                            <div>Вахитовский район, ул. Четаева 32</div>
                                        </div>
                                    </div>
                                    <div className="text mb-4">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, sit voluptates. A quam officiis nesciunt dolores eum quibusdam vitae dolorum, sit ut in eius amet facilis atque dignissimos exercitationem velit!
                                    </div>
                                    <div className="text-end color-2 fs-09 fw-3">Вчера в 21:00</div>
                                </div>
                                <div className="labels">
                                    <div className="vip">
                                        <img src="../img/icons/vip.svg" alt="VIP"/> 
                                        <span>VIP</span>
                                    </div>
                                    <div className="hot">
                                        <img src="../img/icons/hot.svg" alt="Hot"/> 
                                        <span>Hot</span>
                                    </div>
                                </div>
                                <BtnFav/>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                
            </div>
        </div>
    )
}
