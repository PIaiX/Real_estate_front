import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import Card from './Card';
import {useEffect} from "react";

SwiperCore.use([Navigation, Pagination]);

export const Slider1 = (props) => {

    const [popular, setPopular] = useState([]);
    const [recommend, setRecommend] = useState([]);

    useEffect(()=>{
        if(props.popular){
            setPopular(props.popular)
        }
        if(props.recommend){
            setRecommend(props.recommend)
        }
    },[props.popular, props.recommend])

    console.log("pop",popular)
    console.log("rec",recommend)

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
            {popular.map((popular) =>
                <SwiperSlide key={popular.id}>
                    <Card
                        images={[
                            '/Real_estate_front/img/img1.jpg',
                            '/Real_estate_front/img/img2.jpg',
                            '/Real_estate_front/img/img3.jpg',
                            '/Real_estate_front/img/img4.jpg'
                        ]}
                        isVip={popular.isVip}
                        isHot={popular.isHot}
                        title={popular.title}
                        price={popular.price}
                        addressName={popular.residentComplexForUser}
                        address={popular.address}
                        metro={popular.metro}
                        text={popular.description}
                        date={popular.createdAtForUser}

                    />
                </SwiperSlide>
            )}
            {recommend.map((recommend) =>
                <SwiperSlide key={recommend.id}>
                    <Card
                        images={[
                            '/Real_estate_front/img/img1.jpg',
                            '/Real_estate_front/img/img2.jpg',
                            '/Real_estate_front/img/img3.jpg',
                            '/Real_estate_front/img/img4.jpg'
                        ]}
                        isVip={recommend.isVip}
                        isHot={recommend.isHot}
                        title={recommend.title}
                        price={recommend.price}
                        addressName={recommend.residentComplexForUser}
                        address={recommend.address}
                        metro={recommend.metro}
                        text={recommend.description}
                        date={recommend.createdAtForUser}
                    />
                </SwiperSlide>
            )}
            <div className="swiper-button-prev">
                <img src="/Real_estate_front/img/icons/prev.svg" alt="предыдущий" className="w-100"/>
            </div>
            <div className="swiper-button-next">
                <img src="/Real_estate_front/img/icons/next.svg" alt="следующий" className="w-100"/>
            </div>
            <div className="swiper-pagination"></div>
        </Swiper>
    )
}