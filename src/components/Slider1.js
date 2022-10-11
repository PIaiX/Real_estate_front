import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import Card from './Card';
import {useEffect} from "react";

SwiperCore.use([Navigation, Pagination]);

export const Slider1 = (props) => {

    const [popular, setPopular] = useState([]);
    const [recommend, setRecommend] = useState([]);
    const [hotAds, setHotAds] = useState([])
    const [userAds, setUserAds] = useState([]);

    useEffect(() => {
        if (props.recommend) {
            setRecommend(props.recommend)
        }
    }, [props.recommend])

    useEffect(() => {
        if (props.userAds) {
            setUserAds(props.userAds)
        }
    }, [props.userAds])

    useEffect(() => {
        if (props.popular) {
            setPopular(props.popular)
        }
    }, [props.popular])

    useEffect(() => {
        if (props.hotAds) {
            setHotAds(props.hotAds)
        }
    }, [hotAds])

    return (
        <Swiper
            className="swiper-4"
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
            {popular?.map((popular) =>
                <SwiperSlide key={popular.id}>
                    <Card
                        id={recommend.id}
                        wishlistStatus={recommend.wishlistStatus}
                        uuid={recommend.uuid}
                        pictures={[popular.image, popular.images]}
                        isVip={popular.isVip}
                        isHot={popular.isHot}
                        title={popular.title}
                        price={popular.price}
                        addressName={popular.residentComplexForUser}
                        address={popular.address}
                        metro={popular.metro}
                        text={popular.description}
                        date={popular.createdAtForUser}
                        totalArea={popular?.totalArea}
                        estateName={popular?.estate?.name}
                        buildingTypeForUser={popular?.buildingTypeForUser}
                        realEstateTypeForUser={popular?.estate?.realEstateTypeForUser}
                        acres={popular?.acres}
                    />
                </SwiperSlide>
            )}
            {recommend?.map((recommend) =>
                <SwiperSlide key={recommend.id}>
                    <Card
                        id={recommend.id}
                        wishlistStatus={recommend.wishlistStatus}
                        uuid={recommend.uuid}
                        pictures={[recommend.image, recommend.images]}
                        isVip={recommend.isVip}
                        isHot={recommend.isHot}
                        title={recommend.title}
                        price={recommend.price}
                        addressName={recommend.residentComplexForUser}
                        address={recommend.address}
                        metro={recommend.metro}
                        text={recommend.description}
                        date={recommend.createdAtForUser}
                        totalArea={recommend?.totalArea}
                        estateName={recommend?.estate?.name}
                        buildingTypeForUser={recommend?.buildingTypeForUser}
                        realEstateTypeForUser={recommend?.estate?.realEstateTypeForUser}
                        acres={recommend?.acres}
                    />
                </SwiperSlide>
            )}
            {userAds?.map(userAds =>
                <SwiperSlide key={userAds.id}>
                    <Card
                        id={userAds.id}
                        wishlistStatus={userAds.wishlistStatus}
                        uuid={userAds.uuid}
                        pictures={[userAds.image, userAds.images]}
                        isVip={userAds.isVip}
                        isHot={userAds.isHot}
                        title={userAds.title}
                        price={userAds.price}
                        addressName={userAds.residentalComplexForUser}
                        address={userAds.address}
                        metro={userAds.metro}
                        text={userAds.description}
                        date={userAds.createdAtForUser}
                        routeName={props?.routeName}
                        totalArea={userAds?.totalArea}
                        estateName={userAds?.estate?.name}
                        buildingTypeForUser={userAds?.buildingTypeForUser}
                        realEstateTypeForUser={userAds?.estate?.realEstateTypeForUser}
                        acres={userAds?.acres}
                    />
                </SwiperSlide>
            )}
            {hotAds?.map(hotAd =>
                <SwiperSlide key={hotAd.id}>
                    <Card
                        id={hotAd.id}
                        wishlistStatus={hotAd.wishlistStatus}
                        uuid={hotAd.uuid}
                        pictures={[hotAd.image, hotAd.images]}
                        isVip={hotAd.isVip}
                        isHot={hotAd.isHot}
                        title={hotAd.title}
                        price={hotAd.price}
                        addressName={hotAd.residentComplexForUser}
                        address={hotAd.address}
                        metro={hotAd.metro}
                        text={hotAd.description}
                        date={hotAd.createdAtForUser}
                        totalArea={hotAd?.totalArea}
                        estateName={hotAd?.estate?.name}
                        buildingTypeForUser={hotAd?.buildingTypeForUser}
                        realEstateTypeForUser={hotAd?.estate?.realEstateTypeForUser}
                        acres={hotAd?.acres}
                    />
                </SwiperSlide>
            )}
            <div className="swiper-button-prev">
                <img src="/img/icons/prev.svg" alt="предыдущий" className="w-100"/>
            </div>
            <div className="swiper-button-next">
                <img src="/img/icons/next.svg" alt="следующий" className="w-100"/>
            </div>
            <div className="swiper-pagination"></div>
        </Swiper>
    )
}