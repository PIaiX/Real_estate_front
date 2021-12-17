import React, {useState, useCallback} from 'react';
import { NavLink } from 'react-router-dom';
import { Slider1 } from './Slider1';
import BtnFav from '../utilities/BtnFav';
import ShowPhone from '../utilities/ShowPhone';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Thumbs, EffectFade } from 'swiper';
import ImageViewer from 'react-simple-image-viewer';

SwiperCore.use([Navigation, Thumbs, EffectFade]);

export default function CardPage() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const images = [
        '/real_estate/img/img1.jpg',
        '/real_estate/img/img2.jpg',
        '/real_estate/img/img3.jpg',
        '/real_estate/img/img1.jpg',
        '/real_estate/img/img2.jpg',
        '/real_estate/img/img3.jpg',
        '/real_estate/img/img1.jpg',
        '/real_estate/img/img2.jpg',
        '/real_estate/img/img3.jpg',
    ];

    const openImageViewer = useCallback((index) => {
        console.log(index);
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return (
        <main>
            <div className="container py-4">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <NavLink to="/catalog">Недвижимость в Казани</NavLink>
                        </li>
                        <li className="breadcrumb-item">
                            <NavLink to="/catalog">Аренда</NavLink>
                        </li>
                        <li className="breadcrumb-item">
                            <NavLink to="/catalog">1 комнатные</NavLink>
                        </li>
                        <li className="breadcrumb-item">
                            <NavLink to="/catalog">Вахитовский район</NavLink>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">Четаева 32</li>
                    </ol>
                </nav>
            </div>
            <section className="sec-6 container pb-5">
                <h1>1-к, квартира 52м2</h1>
                <div className="d-flex align-items-center mb-2 mb-xxl-3">
                    <img src="/real_estate/img/icons/pin.svg" alt="адрес"/>
                    <div className="fs-09 ms-2">
                        <div>ЖК “Столичный”</div>
                        <div>Казань, Вахитовский район, ул. Четаева, 32</div>
                    </div>
                </div>
                <div className="d-flex align-items-center mb-2 mb-xxl-3">
                    <img src="/real_estate/img/icons/metro.svg" alt="адрес"/>
                    <div className="fs-09 ms-2">
                        <div>Козья слобода, 7 минут</div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-8 d-flex justify-content-between align-items-center">
                        <div className="d-flex">
                            <button type="button" className="btn-pin">
                                <svg viewBox="0 0 15 18" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 18C7.5 18 15 11.6033 15 6.75C15 4.95979 14.2098 3.2429 12.8033 1.97703C11.3968 0.711159 9.48912 0 7.5 0C5.51088 0 3.60322 0.711159 2.1967 1.97703C0.790176 3.2429 2.96403e-08 4.95979 0 6.75C0 11.6033 7.5 18 7.5 18ZM7.5 10.125C6.50544 10.125 5.55161 9.76942 4.84835 9.13649C4.14509 8.50355 3.75 7.64511 3.75 6.75C3.75 5.85489 4.14509 4.99645 4.84835 4.36351C5.55161 3.73058 6.50544 3.375 7.5 3.375C8.49456 3.375 9.44839 3.73058 10.1517 4.36351C10.8549 4.99645 11.25 5.85489 11.25 6.75C11.25 7.64511 10.8549 8.50355 10.1517 9.13649C9.44839 9.76942 8.49456 10.125 7.5 10.125Z"/>
                                </svg>
                            </button>
                            <BtnFav />
                            <button type="button" className="btn-notice">
                                <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.4455 1.8619C9.23354 0.64323 11.0164 0.643231 11.8044 1.8619L19.2732 13.4121C20.1337 14.7429 19.1784 16.4981 17.5937 16.4981H2.65624C1.0715 16.4981 0.116258 14.7429 0.976768 13.4121L8.4455 1.8619Z" className="fill-color"/>
                                    <path d="M10.8489 4.96997V8.97397C10.8489 9.18397 10.8442 9.38931 10.8349 9.58997C10.8255 9.79064 10.8115 9.99364 10.7929 10.199C10.7789 10.3996 10.7602 10.6073 10.7369 10.822C10.7135 11.0366 10.6879 11.263 10.6599 11.501H9.73587C9.70787 11.263 9.6822 11.0366 9.65887 10.822C9.63553 10.6073 9.61453 10.3996 9.59587 10.199C9.58187 9.99364 9.5702 9.79064 9.56087 9.58997C9.55153 9.38931 9.54687 9.18397 9.54687 8.97397V4.96997H10.8489ZM9.25287 14.203C9.25287 14.077 9.2762 13.958 9.32287 13.846C9.36953 13.734 9.43487 13.636 9.51887 13.552C9.60287 13.468 9.70087 13.4026 9.81287 13.356C9.92487 13.3046 10.0462 13.279 10.1769 13.279C10.3029 13.279 10.4219 13.3046 10.5339 13.356C10.6459 13.4026 10.7439 13.468 10.8279 13.552C10.9119 13.636 10.9772 13.734 11.0239 13.846C11.0752 13.958 11.1009 14.077 11.1009 14.203C11.1009 14.3336 11.0752 14.455 11.0239 14.567C10.9772 14.679 10.9119 14.777 10.8279 14.861C10.7439 14.945 10.6459 15.0103 10.5339 15.057C10.4219 15.1036 10.3029 15.127 10.1769 15.127C10.0462 15.127 9.92487 15.1036 9.81287 15.057C9.70087 15.0103 9.60287 14.945 9.51887 14.861C9.43487 14.777 9.36953 14.679 9.32287 14.567C9.2762 14.455 9.25287 14.3336 9.25287 14.203Z" fill="#fff"/>
                                </svg>
                            </button>
                        </div>
                        <div className="d-flex fs-09">
                            <div className="color-2">Вчера в 21:00</div>
                            <div className="d-flex color-2 ms-4">
                                <img src="/real_estate/img/icons/eye-fill.svg" alt="Просмотры"/>
                                <span className="ms-2">Просмотры: 24 (7 за сегодня)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8 mb-5">
                        <div className="position-relative">
                            <Swiper className="main-slider mb-4"
                                modules={[Thumbs, EffectFade]}
                                effect="fade"
                                thumbs={{ swiper: thumbsSwiper }}
                                slidesPerView={1}
                                navigation={{
                                    nextEl: '.swiper-button-next',
                                    prevEl: '.swiper-button-prev',
                                }}
                            >
                                {
                                    images.map((src, i) => (
                                        <SwiperSlide key={'main-img-'+i}>
                                            <img
                                            className="main-slider-img"
                                            src={src}
                                            alt={'фото'+i}
                                            />
                                            <button type="button" data-target={i} onClick={ () => openImageViewer(i)}>
                                                <img src="/real_estate/img/icons/img-full.svg" alt="увеличить фото"/>
                                            </button>
                                        </SwiperSlide>
                                    ))
                                }
                                <div className="swiper-button-prev">
                                    <img src="/real_estate/img/icons/prev.svg" alt="предыдущий" className="w-100"/>
                                </div>
                                <div className="swiper-button-next">
                                    <img src="/real_estate/img/icons/next.svg" alt="следующий" className="w-100"/>
                                </div>
                            </Swiper>
                            <div className="labels">
                                <div className="vip">
                                    <img src="/real_estate/img/icons/vip.svg" alt="vip"/>
                                    <span>VIP</span>
                                </div>
                                <div className="hot">
                                    <img src="/real_estate/img/icons/hot.svg" alt="hot"/>
                                    <span>Hot</span>
                                </div>
                            </div>

                            {isViewerOpen && (
                                <ImageViewer
                                src={ images }
                                currentIndex={ currentImage }
                                disableScroll={ false }
                                closeOnClickOutside={ true }
                                onClose={ closeImageViewer }
                                />
                            )}
                        </div>
                        
                        <div className="position-relative px-5">
                            <Swiper
                                className="thumbs-slider"
                                modules={[Thumbs]}
                                watchSlidesProgress={true}
                                onSwiper={setThumbsSwiper}
                                slidesPerView={7}
                                spaceBetween={16}
                                navigation={{
                                    nextEl: '.swiper-button-next',
                                    prevEl: '.swiper-button-prev',
                                }}
                            >
                                {
                                    images.map((src, index) => (
                                        <SwiperSlide key={'thumb-img-'+index}>
                                            <img
                                            src={src}
                                            alt={'фото'+index}
                                            />
                                        </SwiperSlide>
                                    ))
                                }
                                <div className="swiper-button-prev">
                                    <img src="/real_estate/img/icons/prev3.svg" alt="предыдущий" className="w-100"/>
                                </div>
                                <div className="swiper-button-next">
                                    <img src="/real_estate/img/icons/next3.svg" alt="следующий" className="w-100"/>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                    <div className="col-4 mb-5">
                        <div className="frame text-end px-5 py-5 mb-4">
                            <div className="title-font black fw-7 fs-20 mb-3">40 000 ₽/мес</div>
                            <div className="fs-11 gray-3">
                                Не включая коммунальные платежи
                                <br />Залог 20 000 ₽, комиссия 50%
                                <br />без предоплаты, аренда от года
                            </div>
                        </div>
                        <div className="frame author px-5 pt-5 pb-4">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <h4>Колесникова Ирина</h4>
                                    <div className="gray-3 fs-11 mb-2">На сайте с июля 2021</div>
                                    <div className="color-1 fs-11"><a href="/">Еще 4 объекта</a></div>
                                </div>
                                <img src="/real_estate/img/photo.png" alt="Колесникова Ирина"/>
                            </div>
                            <ShowPhone className="mt-4 fs-15" phone="+ 7 (952) 879 78 65"/>
                            <button type="button" className="btn btn-1 w-100 fs-15 mt-3">Написать сообщение</button>
                        </div>
                    </div>
                    <div className="col-8">
                        <h4>Описание</h4>
                        <p className="fs-11">Сдается 1-комнатная квартира в строящемся доме (Дом 3.1), общей площадью 51.82 кв.м., на 5 этаже. Жилой комплекс "Столичный"- это современный жилой комплекс, который находится в самом  центре Казани, состоящий из нескольких кварталов, органично сочетающий городской комфорт и природное окружение</p>

                        <h4 className="mt-5 mb-3">Характерстики</h4>
                        <div className="row">
                            <div className="col-4">
                                <div class="specification fs-11">
                                    <div class="left">
                                        <span>Комнат</span>
                                    </div>
                                    <div class="right">
                                        <span>2</span>
                                    </div>
                                </div>
                                <div class="specification fs-11">
                                    <div class="left">
                                        <span>Общая площадь</span>
                                    </div>
                                    <div class="right">
                                        <span>40 м<sup>2</sup></span>
                                    </div>
                                </div>
                                <div class="specification fs-11">
                                    <div class="left">
                                        <span>Жилая площадь</span>
                                    </div>
                                    <div class="right">
                                        <span>35 м<sup>2</sup></span>
                                    </div>
                                </div>
                                <div class="specification fs-11">
                                    <div class="left">
                                        <span>Площадь кухни</span>
                                    </div>
                                    <div class="right">
                                        <span>10 м<sup>2</sup></span>
                                    </div>
                                </div>
                                <div class="specification fs-11">
                                    <div class="left">
                                        <span>Этаж</span>
                                    </div>
                                    <div class="right">
                                        <span>5/15</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 offset-2">
                                <div class="specification fs-11">
                                    <div class="left">
                                        <span>Планировка</span>
                                    </div>
                                    <div class="right">
                                        <span>Изолированная</span>
                                    </div>
                                </div>
                                <div class="specification fs-11">
                                    <div class="left">
                                        <span>Ремонт</span>
                                    </div>
                                    <div class="right">
                                        <span>Евроремонт</span>
                                    </div>
                                </div>
                                <div class="specification fs-11">
                                    <div class="left">
                                        <span>Санузел</span>
                                    </div>
                                    <div class="right">
                                        <span>Раздельный</span>
                                    </div>
                                </div>
                                <div class="specification fs-11">
                                    <div class="left">
                                        <span>Балкон/Лоджия</span>
                                    </div>
                                    <div class="right">
                                        <span>Лоджия</span>
                                    </div>
                                </div>
                                <div class="specification fs-11">
                                    <div class="left">
                                        <span>Лифт</span>
                                    </div>
                                    <div class="right">
                                        <span>Есть грузовой</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h4 className="mt-5">Дополнительная информация</h4>

                        <h4 className="mt-5 mb-3">О здании</h4>
                        <div className="row">
                            <div className="col-4">
                                <div class="specification fs-11">
                                    <div class="left">
                                        <span>Тип дома</span>
                                    </div>
                                    <div class="right">
                                        <span>Кирпичный</span>
                                    </div>
                                </div>
                                <div class="specification fs-11">
                                    <div class="left">
                                        <span>Лифт</span>
                                    </div>
                                    <div class="right">
                                        <span>Грузовой/пассажирский</span>
                                    </div>
                                </div>
                                <div class="specification fs-11">
                                    <div class="left">
                                        <span>Год постройки</span>
                                    </div>
                                    <div class="right">
                                        <span>2015</span>
                                    </div>
                                </div>
                                <div class="specification fs-11">
                                    <div class="left">
                                        <span>Высота потолков</span>
                                    </div>
                                    <div class="right">
                                        <span>2.7 м</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h4 className="mt-5">На карте</h4>
                        <img src="/real_estate/img/map.png" alt="Карта" className="w-100"/>
                    </div>
                </div>
                
            </section>

  

            <section className="sec-4 container mb-6">
                <h3>Похожие объявления</h3>
                <div className="position-relative">
                    <Slider1 />
                </div>
            </section>

            <section className="sec-4 container mb-6">
                <h3>Рекомендованные Вам</h3>
                <div className="position-relative">
                    <Slider1 />
                </div>
            </section>
        </main>
    )
}
