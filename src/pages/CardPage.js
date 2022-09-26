import React, {useCallback, useEffect, useRef, useState} from 'react';
import {NavLink, useParams} from 'react-router-dom';
import BtnFav from '../components/BtnFav';
import ShowPhone from '../components/ShowPhone';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {EffectFade, Navigation, Thumbs} from 'swiper';
import ImageViewer from 'react-simple-image-viewer';
import {createAdResponse, getAdsPage, getResponsesAd} from "../API/adspage";
import {useAccessToken, useCurrentUser} from "../store/reducers";
import BtnRep from "../components/BtnRep";
import Breadcrumbs from '../components/Breadcrumbs';
import {useDispatch} from "react-redux";
import CustomModal from '../components/CustomModal';
import {emitCreateWithRealEstateTopicMessage} from '../API/socketConversations';
import {bindActionCreators} from "redux";
import alertActions from "../store/actions/alert"
import {checkPhotoPath} from '../helpers/photo';
import YMap from '../components/YMap';
import ImageUploading from "react-images-uploading";
import CustomSelect from "../components/CustomSelect";
import {userInfo} from "../API/users";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import Slider3 from "../components/Slider3";

SwiperCore.use([Navigation, Thumbs, EffectFade]);

export default function CardPage() {

    const token = useAccessToken()
    const [pageTop, setPageTop] = useState(false);
    const [ads, setAds] = useState({})
    const {uuid} = useParams()
    const user = useCurrentUser()
    const userId = user?.id
    const [isShowResponseModal, setIsShowResponseModal] = useState(false)
    const [images, setImages] = React.useState([]);
    const maxNumber = 5;
    const [responseData, setResponseData] = useState({
        userId,
        token
    })
    const [userInformation, setUserInformation] = useState({})
    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        setImages(imageList);
    };
    // write message modal
    const [isShowWriteMessageModal, setIsShowWriteMessageModal] = useState(false)
    const [messageInput, setMessageInput] = useState('')
    const [messageInputError, setMessageInputError] = useState('')
    // alert actions
    const dispatch = useDispatch()
    const {setAlert} = bindActionCreators(alertActions, dispatch)
    const [userServices, setUserServices] = useState([])
    const axiosPrivate = useAxiosPrivate()
    const [isValidService, setIsValidService] = useState(false)
    const [responsesAd, setResponsesAd] = useState({})

    useEffect(() => {
        user &&
        userInfo(user?.id)
            .then(res => {
                setUserInformation(res)
            })
    }, [user])

    useEffect(() => {
        getAdsPage(uuid, userId).then(res => setAds(res))
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        setUserServices(userInformation?.services?.map(service => ({
            value: service?.id,
            title: service?.subService?.name
        })))
    }, [userInformation])

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

    useEffect(() => {
        ads?.id && getResponsesAd(ads?.id, token)
            .then((res) => {
                setResponsesAd(res)
            })
    }, [ads?.id])

    const sait = 'https://api.antontig.beget.tech/uploads/';

    const imagesAd = [].concat(ads?.image, ads?.images?.map(i => i?.image)).map(i => i ? `${sait}${i}` : '/img/nophoto.jpg')

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

    useEffect(() => {
        ads?.id && setResponseData(prevState => ({...prevState, realEstateId: ads?.id}))
    }, [ads?.id])

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

    const resetMessage = () => {
        setMessageInput('')
        setMessageInputError('')
        setIsShowWriteMessageModal(false)
    }

    const onSendMessage = (e) => {
        e.preventDefault()
        const message = messageInput.trim()

        if (message.length) {
            emitCreateWithRealEstateTopicMessage(ads?.user?.id, {
                conversationId: 0,
                realEstateId: ads?.id,
                text: messageInput
            })
                .then(() => {
                    setAlert('success', true, 'Сообщение отправлено')
                    resetMessage()
                })
                .catch(() => setAlert('danger', true, 'Что-то пошло не так, не удалось отправить сообщение'))
        } else {
            setMessageInputError('Сообщение не должно быть пустым')
        }
    }

    const mapRef = useRef(null)

    const goToMap = () => {
        if (mapRef !== null) {
            window.scrollTo({
                left: 0,
                top: mapRef.current.offsetTop,
                behavior: "smooth"
            })
        }
    }

    const title = () => {
        return <span>{ads?.title} м<sup>2</sup></span>
    }

    useEffect(() => {
        if (responseData?.serviceId !== undefined) {
            setIsValidService(false)
        }
    }, [responseData?.serviceId])

    const onSubmitInModal = (e) => {
        e.preventDefault()
        if (responseData?.serviceId === undefined) {
            setIsValidService(true)
        } else {
            const formData = new FormData()
            for (const key in responseData) {
                formData.append(key, responseData[key])
            }
            images.forEach(image => {
                formData.append('images[]', image.file)
            })
            createAdResponse(axiosPrivate, formData, token)
                .then(() => {
                    setIsShowResponseModal(false)
                    setResponseData({token, userId, realEstateId: ads?.id})
                    setImages([])
                    setTimeout(() => {setAlert('success', true, 'Отклик успешно отправлен')}, 500)

                })
                .catch(() => {
                    setAlert('danger', true, 'Произошла ошибка')
                })
        }
    }

    return (
        <main>
            <div className={(pageTop) ? "card-page-top py-2 d-md-none" : "card-page-top d-none py-2"}>
                <div className="container">

                    <div className="d-flex">
                        <button
                            type="button"
                            className="btn-pin"
                            onClick={goToMap}
                        >
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
                <Breadcrumbs currentRouteName={title() || 'Объявление'} cardPage={true}/>
            </div>
            <section id="sec-7" className="container pb-5">
                <h1>{ads?.title} м<sup>2</sup></h1>
                <div className="d-flex align-items-center mb-2 mb-xxl-3">
                    <img src="/img/icons/pin.svg" alt="адрес"/>
                    <div className="fs-11 fw-6 ms-2 ms-sm-4">
                        <div>ЖК "{ads?.residentalComplexForUser}"</div>
                        <div className='text-capitalize'>{ads?.address}</div>
                    </div>
                </div>
                <div className="row mt-4 mt-lg-5 mb-3">
                    <div className="col-lg-8 d-flex justify-content-between align-items-center">
                        <div className="btns">
                            <button type="button" className="btn-pin" onClick={goToMap}>
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
                                <span className="ms-1">{ads?.viewsCount}</span>
                                <span className="d-none d-md-block ms-1">({ads?.todayViewsCount} за сегодня)</span>
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
                                    imagesAd.map((src, i) => (
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
                                    src={imagesAd}
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
                                    imagesAd.map((src, index) => (
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
                                            аренда: {ads?.rentalTypeForUser}
                                        </div>
                                    </div>}
                            </div>
                            <div>
                                <div className="frame author p-3 px-sm-4 pt-sm-4 pb-sm-3 px-xxl-5 pt-xxl-5 pb-xxl-4">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h4>{ads?.user?.fullName}</h4>
                                            <div className="gray-3 fs-11 mb-2">На сайте
                                                с {ads?.user?.createdAtForUser}</div>
                                            <div className="color-1 fs-11">
                                                <NavLink to={`/user/${ads?.user?.id}`} state={{fromAd: true}}>
                                                    Еще {ads?.user?.realEstatesCount} <Words/>
                                                </NavLink>
                                            </div>
                                        </div>
                                        <img src={checkPhotoPath(ads?.user?.avatar)} alt={ads?.user?.fullName}/>
                                    </div>
                                    <ShowPhone className="mt-4 fs-15" phone={ads?.user?.phoneForUser}/>
                                    <button
                                        type='button'
                                        className='btn btn-2 w-100 fs-15 px-3 mt-2 mt-xl-3'
                                        onClick={() => {
                                            setIsShowResponseModal(true)
                                        }}
                                    >
                                        Откликнуться
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-1 w-100 fs-15 px-3 mt-2 mt-xl-3"
                                        onClick={() => setIsShowWriteMessageModal(true)}
                                    >
                                        Написать сообщение
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
                                    <span>{ads?.roomsForUser}</span>
                                </div>
                            </div>
                            <div className="specification fs-11">
                                <div className="left">
                                    <span>Общая площадь</span>
                                </div>
                                <div className="right">
                                    <span>{ads?.totalArea} м<sup>2</sup></span>
                                </div>
                            </div>
                            <div className="specification fs-11">
                                <div className="left">
                                    <span>Жилая площадь</span>
                                </div>
                                {(ads?.livingArea !== null) ?
                                    <div className="right">
                                        <span>{ads?.livingArea} м<sup>2</sup></span>
                                    </div>
                                    :
                                    <div className="right">
                                        <span>{ads?.livingAreaForUser}</span>
                                    </div>}
                            </div>
                            <div className="specification fs-11">
                                <div className="left">
                                    <span>Площадь кухни</span>
                                </div>
                                {(ads?.kitchenArea !== null) ?
                                    <div className="right">
                                        <span>{ads?.kitchenArea} м<sup>2</sup></span>
                                    </div>
                                    :
                                    <div className="right">
                                        <span>{ads?.kitchenAreaForUser}</span>
                                    </div>
                                }
                            </div>
                            <div className="specification fs-11">
                                <div className="left">
                                    <span>Этаж</span>
                                </div>
                                <div className="right">
                                    <span>{ads?.floor}/{ads?.maxFloorForUser}</span>
                                </div>
                            </div>
                            <div className="specification fs-11">
                                <div className="left">
                                    <span>Планировка</span>
                                </div>
                                <div className="right">
                                    <span>{ads?.layoutForUser}</span>
                                </div>
                            </div>
                            <div className="specification fs-11">
                                <div className="left">
                                    <span>Ремонт</span>
                                </div>
                                <div className="right">
                                    <span>{ads?.repairTypeForUser}</span>
                                </div>
                            </div>
                            <div className="specification fs-11">
                                <div className="left">
                                    <span>Санузел</span>
                                </div>
                                <div className="right">
                                    <span>{ads?.WCTypeForUser}</span>
                                </div>
                            </div>
                            <div className="specification fs-11">
                                <div className="left">
                                    <span>Балкон/Лоджия</span>
                                </div>
                                <div className="right">
                                    <span>{ads?.balconyTypeForUser}</span>
                                </div>
                            </div>
                            <div className="specification fs-11">
                                <div className="left">
                                    <span>Лифт</span>
                                </div>
                                <div className="right">
                                    <span>{ads?.elevatorTypeForUser}</span>
                                </div>
                            </div>
                        </div>

                        <h4 className="mt-4 mt-sm-5 mb-3">Дополнительная информация</h4>
                        <div className="row row-cols-2 row-cols-md-3 gx-2 gx-sm-4">
                            {ads?.hasGroundParking ?
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
                                    <span>{ads?.houseBuildingTypeForUser}</span>
                                </div>
                            </div>
                            <div className="specification fs-11">
                                <div className="left">
                                    <span>Лифт</span>
                                </div>
                                <div className="right">
                                    <span>{ads?.elevatorTypeForUser}</span>
                                </div>
                            </div>
                            <div className="specification fs-11">
                                <div className="left">
                                    <span>Год постройки</span>
                                </div>
                                <div className="right">
                                    <span>{ads?.yearOfConstructionForUser}</span>
                                </div>
                            </div>
                            <div className="specification fs-11">
                                <div className="left">
                                    <span>Высота потолков</span>
                                </div>
                                <div className="right">
                                    <span>{ads?.ceilingHeightForUser} м</span>
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
                        {ads && (
                            <>
                                <h4 className="mt-4 mt-sm-5" ref={mapRef}>На карте</h4>
                                <YMap
                                    items={[ads]}
                                    className='card-page__ymaps'
                                />
                            </>
                        )}
                    </div>
                </div>
            </section>

            <section className="sec-4 container mb-6">
                <h3>Отклики исполнителей</h3>
                <div className="position-relative">
                    <Slider3 responses={responsesAd}/>
                </div>
            </section>

            <CustomModal
                isShow={isShowWriteMessageModal}
                hideModal={() => resetMessage()}
                closeButton
            >
                <form className="message-form">
                    <div className="d-flex align-items-center">
                        <div className="photo me-2 me-sm-4">
                            <img src={checkPhotoPath(ads?.user?.avatar)} alt={ads?.user?.fullName}/>
                            {/*<div className="indicator online"/>*/}
                        </div>
                        <div>
                            <h4>{ads?.user?.fullName}</h4>
                            {/*<div className="gray-2 fs-09">Сейчас онлайн</div>*/}
                        </div>
                    </div>
                    <textarea
                        className="mt-3"
                        rows="4"
                        placeholder="Введите сообщение"
                        value={messageInput}
                        onChange={e => setMessageInput(e.target.value)}
                    />
                    {messageInputError && (
                        <span className="message-form__error w-100 text-danger">
                            {messageInputError}
                        </span>
                    )}
                    <div className="d-flex align-items-center mt-3">
                        <button
                            type="submit"
                            className="btn btn-1 w-100 flex-1 fs-12 ms-4"
                            onClick={onSendMessage}
                        >
                            ОТПРАВИТЬ
                        </button>
                    </div>
                </form>
            </CustomModal>
            <CustomModal
                isShow={isShowResponseModal}
                setIsShow={setIsShowResponseModal}
                closeButton
                size='lg'
            >
                <form>
                    <div className='text-capitalize mt-4 mb-4'>
                        <div className='fw-bold' style={{color: `${isValidService ? '#DA1E2A' : ''}`}}>
                            Предостовляемая услуга*:
                        </div>
                        <CustomSelect
                            className='custom-select_create-response-ad'
                            checkedOptions={[responseData?.title]}
                            options={userServices}
                            callback={({value, title}) => {
                                setResponseData(prevState => ({...prevState, serviceId: value, title}))
                            }}
                        />
                    </div>
                    <div className='mt-4 mb-4'>
                        <div className='fw-bold'>
                            Комментарий:
                        </div>
                        <textarea
                            onChange={(e) => {
                                setResponseData(prevState => ({...prevState, description: e.target.value}))
                            }}
                        />
                    </div>

                    <div className='mt-4 mb-4'>
                        <div className='fw-bold'>
                            Примеры работ:
                        </div>
                        <ImageUploading
                            multiple
                            value={images}
                            onChange={onChange}
                            maxNumber={maxNumber}
                            dataURLKey="data_url"
                            acceptType={['JPG', 'JPEG', 'PNG']}
                        >
                            {({
                                  imageList,
                                  onImageUpdate,
                                  onImageRemove,
                                  onImageUpload,
                                  dragProps,
                                  onImageRemoveAll
                              }) => (
                                // write your building UI
                                <div className="upload__image-wrapper">
                                    <div className='imgs-box'>
                                        {imageList.map((image, index) => (
                                            <div key={index} className="image-item">
                                                <img src={image['data_url']} alt="" width="100"/>
                                                <div className="image-item__btn-wrapper-in-response">
                                                    <button
                                                        onClick={(e) => {
                                                            e.preventDefault()
                                                            onImageUpdate(index)
                                                        }}
                                                    >
                                                        Изменить
                                                    </button>
                                                    <button
                                                        onClick={(e) => {
                                                            e.preventDefault()
                                                            onImageRemove(index)
                                                        }}
                                                    >
                                                        Удалить
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <button type="button"
                                                className="btn btn-1 px-3 px-sm-4 me-3 me-sm-4"
                                                onClick={onImageUpload}
                                                {...dragProps}
                                        >
                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <line x1="10.75" x2="10.75" y2="21" stroke="white"
                                                      strokeWidth="1.5"/>
                                                <line y1="10.25" x2="21" y2="10.25" stroke="white"
                                                      strokeWidth="1.5"/>
                                            </svg>
                                            <span className="ms-2">Добавить фото</span>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={onImageRemoveAll}
                                        >
                                            Удалить все
                                        </button>
                                    </div>
                                </div>
                            )}
                        </ImageUploading>
                        <div>
                            <span className="fs-08 gray-3 mt-2">Не больше 5 фото, форматы: JPG, JPEG, PNG</span>
                        </div>
                    </div>
                    <button
                        className='btn btn-1 w-100 fs-15 px-3 mt-2 mt-xl-3'
                        onClick={(e) => onSubmitInModal(e)}
                    >
                        Отправить
                    </button>
                </form>
            </CustomModal>
        </main>
    )
}
