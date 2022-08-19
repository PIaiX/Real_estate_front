import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Slider1} from '../components/Slider1';
import BtnFav from '../components/BtnFav';
import ShowPhone from '../components/ShowPhone';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Thumbs, EffectFade} from 'swiper';
import ImageViewer from 'react-simple-image-viewer';
import InputFile from '../components/InputFile';
import {getAdsPage} from "../API/adspage";
import {getRecommend} from "../API/mainpagereq";
import {useCurrentUser} from "../store/reducers";
import BtnRep from "../components/BtnRep";
import Breadcrumbs from '../components/Breadcrumbs';
import {useSelector} from "react-redux";
import YMap from "../components/YMap";
import {GeolocationControl, Map, ObjectManager, Placemark, YMaps, ZoomControl} from "react-yandex-maps";
import YMapContainer from "../components/YMapContainer";

SwiperCore.use([Navigation, Thumbs, EffectFade]);

export default function CardPage() {

    const [pageTop, setPageTop] = useState(false);
    const [ads, setAds] = useState({})
    const [recommend, setRecommend] = useState([])
    const {uuid} = useParams()
    const user = useCurrentUser()
    const userId = user?.id
    const city = useSelector(state => state?.selectedCity)

    useEffect(() => {
        const adsget = async () => {
            const result = uuid && await getAdsPage(uuid)
            if (result) {
                setAds(result)
            }
        }
        adsget()
    }, [uuid])

    useEffect(() => {
        const recommend = async () => {
            try {
                const result = userId && await getRecommend(userId, 6, city)
                if (result) {
                    setRecommend(result)
                }
            } catch (error) {
                console.log(error)
            }
        }
        recommend()
    }, [userId])

    useEffect(() => {
        function updateScroll() {
            let st = window.pageYOffset;
            if (st > 200) {
                setPageTop(true);
            } else {
                setPageTop(false);
            }
        }

        window.addEventListener('scroll', updateScroll);
        updateScroll();
        return () => window.removeEventListener('scroll', updateScroll);
    }, []);

    const sait = 'https://api.antontig.beget.tech/uploads/';

    const images = [].concat(ads?.image, ads?.images?.map(i => i?.image)).map(i => i ? `${sait}${i}` : '/img/nophoto.jpg')

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    const [roomsType, setRoomsType] = useState('')

    useEffect(() => {
        const rr = [0, 1, 2, 3, 4, 5, 6]
        setRoomsType(rr.find(i => i === ads?.roomType))
    }, [ads?.roomType])

    const Words = () => {
        if (ads?.user?.realEstatesCount < 1) {
            return 'объект'
        } else if (ads?.user?.realEstatesCount >= 1 && ads?.user?.realEstatesCount < 4) {
            return 'объекта'
        } else {
            return "объктов"
        }
    }

    return (
        <main>
            <div className={(pageTop) ? "card-page-top py-2 d-md-none" : "card-page-top d-none py-2"}>
                <div className="container">

                    <div className="d-flex">
                        <button type="button" className="btn-pin">
                            <svg viewBox="0 0 15 18" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.5 18C7.5 18 15 11.6033 15 6.75C15 4.95979 14.2098 3.2429 12.8033 1.97703C11.3968 0.711159 9.48912 0 7.5 0C5.51088 0 3.60322 0.711159 2.1967 1.97703C0.790176 3.2429 2.96403e-08 4.95979 0 6.75C0 11.6033 7.5 18 7.5 18ZM7.5 10.125C6.50544 10.125 5.55161 9.76942 4.84835 9.13649C4.14509 8.50355 3.75 7.64511 3.75 6.75C3.75 5.85489 4.14509 4.99645 4.84835 4.36351C5.55161 3.73058 6.50544 3.375 7.5 3.375C8.49456 3.375 9.44839 3.73058 10.1517 4.36351C10.8549 4.99645 11.25 5.85489 11.25 6.75C11.25 7.64511 10.8549 8.50355 10.1517 9.13649C9.44839 9.76942 8.49456 10.125 7.5 10.125Z"/>
                            </svg>
                        </button>
                        <BtnFav realEstateId={ads?.id} wishlist={ads?.wishlistStatus}/>
                        <BtnRep realEstateId={ads?.id} reportStatus={ads?.reportStatus} type="reportAd"/>
                    </div>
                </div>
            </div>
            <div className="container py-3 py-sm-4 py-lg-5">
                <Breadcrumbs currentRouteName={ads.title || 'Объявление'}/>
            </div>
            <section id="sec-7" className="container pb-5">
                <h1>{ads.title} м<sup>2</sup></h1>
                <div className="d-flex align-items-center mb-2 mb-xxl-3">
                    <img src="/img/icons/pin.svg" alt="адрес"/>
                    <div className="fs-11 fw-6 ms-2 ms-sm-4">
                        <div>ЖК "{ads?.residentalComplexForUser}"</div>
                        <div>{ads.address}</div>
                    </div>
                </div>
                <div className="d-flex align-items-center mb-2 mb-xxl-3">
                    <img src="/img/icons/metro.svg" alt="адрес"/>
                    <div className="fs-11 fw-6 ms-2 ms-sm-4">
                        <div>{ads.metro}</div>
                    </div>
                </div>
                <div className="row mt-4 mt-lg-5 mb-3">
                    <div className="col-lg-8 d-flex justify-content-between align-items-center">
                        <div className="btns">
                            <button type="button" className="btn-pin">
                                <svg viewBox="0 0 15 18" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.5 18C7.5 18 15 11.6033 15 6.75C15 4.95979 14.2098 3.2429 12.8033 1.97703C11.3968 0.711159 9.48912 0 7.5 0C5.51088 0 3.60322 0.711159 2.1967 1.97703C0.790176 3.2429 2.96403e-08 4.95979 0 6.75C0 11.6033 7.5 18 7.5 18ZM7.5 10.125C6.50544 10.125 5.55161 9.76942 4.84835 9.13649C4.14509 8.50355 3.75 7.64511 3.75 6.75C3.75 5.85489 4.14509 4.99645 4.84835 4.36351C5.55161 3.73058 6.50544 3.375 7.5 3.375C8.49456 3.375 9.44839 3.73058 10.1517 4.36351C10.8549 4.99645 11.25 5.85489 11.25 6.75C11.25 7.64511 10.8549 8.50355 10.1517 9.13649C9.44839 9.76942 8.49456 10.125 7.5 10.125Z"/>
                                </svg>
                            </button>
                            <BtnFav realEstateId={ads?.id} wishlist={ads?.wishlistStatus}/>
                            <BtnRep realEstateId={ads?.id} reportStatus={ads?.reportStatus} type="reportAd"/>
                        </div>
                        <div className="d-flex fs-09">
                            <div className="color-2">{ads?.createdAtForUser}</div>
                            <div className="d-flex color-2 ms-4">
                                <img src="/img/icons/eye-fill.svg" alt="Просмотры"/>
                                <span className="d-none d-md-block ms-2">Просмотры:</span>
                                <span className="ms-1">{ads.viewsCount}</span>
                                <span className="d-none d-md-block ms-1">({ads.todayViewsCount} за сегодня)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 mb-4 mb-sm-5">
                        <div className="position-relative">
                            <Swiper className="main-slider mb-3 mb-xl-4"
                                    modules={[Thumbs, EffectFade]}
                                    effect="fade"
                                    thumbs={{swiper: thumbsSwiper}}
                                    slidesPerView={1}
                                    navigation={{
                                        nextEl: '.swiper-button-next',
                                        prevEl: '.swiper-button-prev',
                                    }}
                            >
                                {
                                    images.map((src, i) => (
                                        <SwiperSlide key={'main-img-' + i}>
                                            <img
                                                className="main-slider-img"
                                                src={src}
                                                alt={'фото' + i}
                                            />
                                            <button type="button" data-target={i} onClick={() => openImageViewer(i)}>
                                                <img src="/img/icons/img-full.svg"
                                                     alt="увеличить фото" className="img-fluid"/>
                                            </button>
                                        </SwiperSlide>
                                    ))
                                }
                                <div className="swiper-button-prev">
                                    <svg viewBox="0 0 24 47" xmlns="http://www.w3.org/2000/svg">
                                        <line y1="-2" x2="30.9413" y2="-2"
                                              transform="matrix(-0.660679 -0.750669 0.709114 -0.705094 23.4434 43.4565)"/>
                                        <line y1="-2" x2="30.9413" y2="-2"
                                              transform="matrix(-0.660679 0.750669 0.709114 0.705094 23.4424 3)"/>
                                    </svg>
                                </div>
                                <div className="swiper-button-next">
                                    <svg viewBox="0 0 24 47" xmlns="http://www.w3.org/2000/svg">
                                        <line y1="-2" x2="30.9413" y2="-2"
                                              transform="matrix(0.660679 0.750669 -0.709114 0.705094 0 3)"/>
                                        <line y1="-2" x2="30.9413" y2="-2"
                                              transform="matrix(0.660679 -0.750669 -0.709114 -0.705094 0.000976562 43.4565)"/>
                                    </svg>
                                </div>
                            </Swiper>
                            <div className="labels">
                                {ads?.isVip ?
                                    <div className="vip">
                                        <img src="/img/icons/vip.svg" alt="vip"/>
                                        <span>Vip</span>
                                    </div>
                                    : ""}
                                {ads?.isHot ?
                                    <div className="hot">
                                        <img src="/img/icons/hot.svg" alt="hot"/>
                                        <span>Hot</span>
                                    </div>
                                    : ''}
                            </div>

                            {isViewerOpen && (
                                <ImageViewer
                                    src={images}
                                    currentIndex={currentImage}
                                    disableScroll={false}
                                    closeOnClickOutside={true}
                                    onClose={closeImageViewer}
                                />
                            )}
                        </div>

                        <div className="position-relative px-md-4 px-xl-5">
                            <Swiper
                                className="thumbs-slider"
                                modules={[Thumbs]}
                                watchSlidesProgress={true}
                                onSwiper={setThumbsSwiper}
                                slidesPerView={4}
                                spaceBetween={6}
                                breakpoints={{
                                    576: {
                                        slidesPerView: 4,
                                        spaceBetween: 10,
                                    },
                                    768: {
                                        slidesPerView: 5,
                                        spaceBetween: 16,
                                    },
                                    992: {
                                        slidesPerView: 4,
                                        spaceBetween: 16,
                                    },
                                    1200: {
                                        slidesPerView: 5,
                                        spaceBetween: 16,
                                    },
                                    1400: {
                                        slidesPerView: 6,
                                        spaceBetween: 16,
                                    },
                                    1660: {
                                        slidesPerView: 7,
                                        spaceBetween: 16,
                                    }
                                }}
                                navigation={{
                                    nextEl: '.swiper-button-next',
                                    prevEl: '.swiper-button-prev',
                                }}
                            >
                                {
                                    images.map((src, index) => (
                                        <SwiperSlide key={'thumb-img-' + index}>
                                            <img
                                                src={src}
                                                alt={'фото' + index}
                                            />
                                        </SwiperSlide>
                                    ))
                                }
                                <div className="swiper-button-prev">
                                    <svg viewBox="0 0 24 47" xmlns="http://www.w3.org/2000/svg">
                                        <line y1="-2" x2="30.9413" y2="-2"
                                              transform="matrix(-0.660679 -0.750669 0.709114 -0.705094 23.4434 43.4565)"/>
                                        <line y1="-2" x2="30.9413" y2="-2"
                                              transform="matrix(-0.660679 0.750669 0.709114 0.705094 23.4424 3)"/>
                                    </svg>
                                </div>
                                <div className="swiper-button-next">
                                    <svg viewBox="0 0 24 47" xmlns="http://www.w3.org/2000/svg">
                                        <line y1="-2" x2="30.9413" y2="-2"
                                              transform="matrix(0.660679 0.750669 -0.709114 0.705094 0 3)"/>
                                        <line y1="-2" x2="30.9413" y2="-2"
                                              transform="matrix(0.660679 -0.750669 -0.709114 -0.705094 0.000976562 43.4565)"/>
                                    </svg>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4 mb-sm-5">
                        <div className="row row-cols-md-2 row-cols-lg-1">
                            <div>
                                {ads?.transactionType ?
                                    <div className="frame text-md-end p-3 p-sm-4 p-xxl-5 mb-4">
                                        <div className="title-font black fw-7 fs-20 mb-2 mb-sm-3">
                                            {ads?.price} ₽
                                        </div>
                                    </div>
                                    :
                                    <div className="frame text-md-end p-3 p-sm-4 p-xxl-5 mb-4">
                                        <div className="title-font black fw-7 fs-20 mb-2 mb-sm-3">{ads?.price} ₽/мес
                                        </div>
                                        <div className="fs-11 gray-3">
                                            {ads?.communalPrice ? `Коммунальные платежи: ${ads?.communalPrice} ₽` : "Не включая коммунальные платежи"}
                                            <br/>Залог {ads?.pledge} ₽, коммисия: {ads?.commissionForUser}
                                            <br/>Предоплата: {ads?.prepaymentTypeForUser},
                                            аренда {ads?.rentalTypeForUser}
                                        </div>
                                    </div>}
                            </div>
                            <div>
                                <div className="frame author p-3 px-sm-4 pt-sm-4 pb-sm-3 px-xxl-5 pt-xxl-5 pb-xxl-4">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h4>{ads.user?.fullName}</h4>
                                            <div className="gray-3 fs-11 mb-2">На сайте
                                                с {ads.user?.createdAtForUser}</div>
                                            <div className="color-1 fs-11">
                                                <a href="/">
                                                    Еще {ads?.user?.realEstatesCount} <Words/>
                                                </a>
                                            </div>
                                        </div>
                                        {(ads?.user?.avatar) ?
                                            <img src={`${sait}${ads?.user?.avatar}`} alt="Колесникова Ирина"/>
                                            :
                                            <img src="/img/nophoto.jpg" alt="Колесникова Ирина"/>
                                        }
                                    </div>
                                    <ShowPhone className="mt-4 fs-15" phone={ads.user?.phoneForUser}/>
                                    <button type="button" data-bs-toggle="modal" data-bs-target="#write-message"
                                            className="btn btn-1 w-100 fs-15 px-3 mt-2 mt-xl-3">Написать сообщение
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-10 col-xl-8">
                        <h4>Описание</h4>
                        <p className="fs-11 text-break">
                            {ads?.description}
                        </p>

                        <h4 className="mt-4 mt-sm-5 mb-3">Характерстики</h4>
                        <div className="column-2">
                            <div className="specification fs-11">
                                <div className="left">
                                    <span>Комнат</span>
                                </div>
                                <div className="right">
                                    <span>{ads.roomsForUser}</span>
                                </div>
                            </div>
                            <div className="specification fs-11">
                                <div className="left">
                                    <span>Общая площадь</span>
                                </div>
                                <div className="right">
                                    <span>{ads.totalArea} м<sup>2</sup></span>
                                </div>
                            </div>
                            <div className="specification fs-11">
                                <div className="left">
                                    <span>Жилая площадь</span>
                                </div>
                                {(ads?.livingArea !== null) ?
                                    <div className="right">
                                        <span>{ads.livingArea} м<sup>2</sup></span>
                                    </div>
                                    :
                                    <div className="right">
                                        <span>{ads.livingAreaForUser}</span>
                                    </div>}
                            </div>
                            <div className="specification fs-11">
                                <div className="left">
                                    <span>Площадь кухни</span>
                                </div>
                                {(ads?.kitchenArea !== null) ?
                                    <div className="right">
                                        <span>{ads.kitchenArea} м<sup>2</sup></span>
                                    </div>
                                    :
                                    <div className="right">
                                        <span>{ads.kitchenAreaForUser}</span>
                                    </div>
                                }
                            </div>
                            <div className="specification fs-11">
                                <div className="left">
                                    <span>Этаж</span>
                                </div>
                                <div className="right">
                                    <span>{ads["floor"]}/{ads.maxFloorForUser}</span>
                                </div>
                            </div>
                            <div className="specification fs-11">
                                <div className="left">
                                    <span>Планировка</span>
                                </div>
                                <div className="right">
                                    <span>{ads.layoutForUser}</span>
                                </div>
                            </div>
                            <div className="specification fs-11">
                                <div className="left">
                                    <span>Ремонт</span>
                                </div>
                                <div className="right">
                                    <span>{ads.repairTypeForUser}</span>
                                </div>
                            </div>
                            <div className="specification fs-11">
                                <div className="left">
                                    <span>Санузел</span>
                                </div>
                                <div className="right">
                                    <span>{ads.WCTypeForUser}</span>
                                </div>
                            </div>
                            <div className="specification fs-11">
                                <div className="left">
                                    <span>Балкон/Лоджия</span>
                                </div>
                                <div className="right">
                                    <span>{ads.balconyTypeForUser}</span>
                                </div>
                            </div>
                            <div className="specification fs-11">
                                <div className="left">
                                    <span>Лифт</span>
                                </div>
                                <div className="right">
                                    <span>{ads.elevatorTypeForUser}</span>
                                </div>
                            </div>
                        </div>

                        <h4 className="mt-4 mt-sm-5 mb-3">Дополнительная информация</h4>
                        <div className="row row-cols-2 row-cols-md-3 gx-2 gx-sm-4">
                            {ads.hasGroundParking ?
                                <div className="d-flex align-items-center fs-11 mb-2">
                                    <img src="/img/icons/parking.svg" alt="Парковка"
                                         className="icon-mini"/>
                                    <span className="ms-2 ms-sm-3">Парковка</span>
                                </div>
                                : ""}
                            {ads?.hasConditioner ?
                                <div className="d-flex align-items-center fs-11 mb-2">
                                    <img src="/img/icons/air-conditioner.svg" alt="Кондиционер"
                                         className="icon-mini"/>
                                    <span className="ms-2 ms-sm-3">Кондиционер</span>
                                </div>
                                : ''}

                            {ads?.hasFurniture ?
                                <div className="d-flex align-items-center fs-11 mb-2">
                                    <img src="/img/icons/furniture.svg" alt="Мебель"
                                         className="icon-mini"/>
                                    <span className="ms-2 ms-sm-3">Мебель</span>
                                </div>
                                : ''}

                            {ads?.hasBathroom ?
                                <div className="d-flex align-items-center fs-11 mb-2">
                                    <img src="/img/icons/bath.svg" alt="Ванна" className="icon-mini"/>
                                    <span className="ms-2 ms-sm-3">Ванна</span>
                                </div>
                                : ''}

                            {ads?.hasRefrigerator ?
                                <div className="d-flex align-items-center fs-11 mb-2">
                                    <img src="/img/icons/fridge.svg" alt="Холодильник"
                                         className="icon-mini"/>
                                    <span className="ms-2 ms-sm-3">Холодильник</span>
                                </div>
                                : ''}

                            {ads?.hasWashingMachine ?
                                <div className="d-flex align-items-center fs-11 mb-2">
                                    <img src="/img/icons/washer.svg" alt="Стиральная машина"
                                         className="icon-mini"/>
                                    <span className="ms-2 ms-sm-3">Стиральная машина</span>
                                </div>
                                : ""}
                            {ads?.withPets ?
                                <div className="d-flex align-items-center fs-11 mb-2">
                                    <img src="/img/icons/pets.svg" alt="Можно с животными"
                                         className="icon-mini"/>
                                    <span className="ms-2 ms-sm-3">Можно с животными</span>
                                </div>
                                : ''}
                            {ads?.withKids ? <div className="d-flex align-items-center fs-11 mb-2">
                                    <img src="/img/icons/kids.svg" alt="Можно с детьми"
                                         className="icon-mini"/>
                                    <span className="ms-2 ms-sm-3">Можно с детьми</span>
                                </div>
                                : ''}
                        </div>

                        <h4 className="mt-4 mt-sm-5 mb-3">О здании</h4>
                        <div className="column-2">
                            <div className="specification fs-11">
                                <div className="left">
                                    <span>Тип дома</span>
                                </div>
                                <div className="right">
                                    <span>{ads.houseBuildingTypeForUser}</span>
                                </div>
                            </div>
                            <div className="specification fs-11">
                                <div className="left">
                                    <span>Лифт</span>
                                </div>
                                <div className="right">
                                    <span>{ads.elevatorTypeForUser}</span>
                                </div>
                            </div>
                            <div className="specification fs-11">
                                <div className="left">
                                    <span>Год постройки</span>
                                </div>
                                <div className="right">
                                    <span>{ads.yearOfConstructionForUser}</span>
                                </div>
                            </div>
                            <div className="specification fs-11">
                                <div className="left">
                                    <span>Высота потолков</span>
                                </div>
                                <div className="right">
                                    <span>{ads.ceilingHeightForUser} м</span>
                                </div>
                            </div>
                            <div className="specification fs-11">
                                <div className="left">
                                    <span>Пандус</span>
                                </div>
                                {ads?.hasRamp ?
                                    <div className="right">
                                        <span>Есть</span>
                                    </div>
                                    :
                                    <div className="right">
                                        <span>Нет</span>
                                    </div>
                                }
                            </div>
                            <div className="specification fs-11">
                                <div className="left">
                                    <span>Мусоропровод</span>
                                </div>
                                <div className="right">
                                    <span>Нет</span>
                                </div>
                            </div>
                            <div className="specification fs-11">
                                <div className="left">
                                    <span>Парковка</span>
                                </div>
                                {ads?.hasGroundParking ?
                                    <div className="right">
                                        <span>Наземная</span>
                                    </div>
                                    :
                                    ''}
                                {ads?.hasMoreLayerParking ?
                                    <div className="right">
                                        <span>Многоуровневая</span>
                                    </div>
                                    :
                                    ''}
                                {ads?.hasUnderGroundParking ?
                                    <div className="right">
                                        <span>Подземная</span>
                                    </div>
                                    :
                                    ''}
                            </div>
                        </div>
                        <h4 className="mt-4 mt-sm-5">На карте</h4>
                        <img src="/img/map.png" alt="Карта" className="w-100"/>
                        {/*<Map
                            state={{
                                center: [+ads?.latitude, +ads?.longitude],
                                zoom: 12,
                                controls: [],
                            }}
                            options={{
                                restrictMapArea: true,
                                autoFitToViewport: 'always',
                                yandexMapDisablePoiInteractivity: false,
                                mapAutoFocus: false
                            }}
                        >
                            <ZoomControl
                                options={{
                                    size: "small",
                                    position: {
                                        top: '28px',
                                        right: '46px'
                                    }
                                }}
                            />
                            <GeolocationControl
                                options={{
                                    position: {
                                        top: '94px',
                                        right: '46px'
                                    }
                                }}
                            />
                            <ObjectManager
                                options={{
                                    clusterize: true,
                                    clusterDisableClickZoom: true
                                }}
                                objects={{
                                    openBalloonOnClick: false,
                                    // preset: 'islands#greenDotIcon',
                                    iconLayout: 'default#image',
                                    // Своё изображение иконки метки.
                                    iconImageHref: '/img/icons/Ymaps/default-placemark.svg',
                                    // Размеры метки.
                                    iconImageSize: [36, 55],
                                    // Смещение левого верхнего угла иконки относительно
                                    // её "ножки" (точки привязки).
                                    // iconImageOffset: [-5, -38]
                                }}
                                clusters={{
                                    openBalloonOnClick: false,
                                    clusterIcons: [
                                        {
                                            href: '/img/icons/Ymaps/default-cluster.svg',
                                            size: [40, 40],
                                            offset: [-20, -20]
                                        },
                                        {
                                            href: '/img/icons/Ymaps/default-cluster.svg',
                                            size: [60, 60],
                                            offset: [-30, -30]
                                        }
                                    ]
                                }}
                            />
                            <Placemark
                                geometry={[+ads?.latitude, +ads?.longitude]}
                                options={{
                                    openBalloonOnClick: false,
                                    iconLayout: 'default#image',
                                    iconImageHref: '/img/icons/Ymaps/default-placemark.svg',
                                    iconImageSize: [36, 55],
                                }}
                            />
                        </Map>*/}
                    </div>
                </div>
            </section>

            <section className="sec-4 container mb-6">
                <h3>Похожие объявления</h3>
                <div className="position-relative">
                    <Slider1/>
                </div>
            </section>

            {!(recommend === undefined || recommend?.length === 0) &&
                <section className="sec-4 container mb-6">
                    <h3>Рекомендованные Вам</h3>
                    <div className="position-relative">
                        <Slider1 recommend={recommend}/>
                    </div>
                </section>
            }

            <div className="mobile-btns d-block d-md-none py-2 py-sm-3">
                <div className="container">
                    <div className="row row-cols-2 gx-2 gx-sm-3">
                        <div>
                            <ShowPhone className="fs-12" phone={ads.user?.phoneForUser}/>
                        </div>
                        <div>
                            <button type="button" className="fs-12 btn btn-1 w-100 px-2">Написать сообщение</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="write-message" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="btn-close" data-bs-dismiss="modal">
                                <svg viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.00006 1.18237L15 15.9049"/>
                                    <path d="M14.9999 1.18237L1.00001 15.9049"/>
                                </svg>
                            </button>
                            <form className="message-form">
                                <div className="d-flex align-items-center">
                                    <div className="photo me-2 me-sm-4">
                                        <img src="/img/photo.png" alt="Колесникова Ирина"/>
                                        <div className="indicator online"/>
                                    </div>
                                    <div>
                                        <h4>Колесникова Ирина</h4>
                                        <div className="gray-2 fs-09">Сейчас онлайн</div>
                                    </div>
                                </div>
                                <textarea className="mt-3" rows="4" placeholder="Введите сообщение"/>
                                <div className="d-flex align-items-center mt-3">
                                    <InputFile multiple={false}/>
                                    <button type="submit" className="btn btn-1 w-100 flex-1 fs-12 ms-4">ОТПРАВИТЬ
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
