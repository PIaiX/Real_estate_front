import React, {useEffect, useState} from 'react';
import CardUserResponse from "./CardUserResponse";
import {Swiper, SwiperSlide} from "swiper/react";

const Slider3 = (props) => {

    const [responses, setResponses] = useState({
        items: [],
        meta: {}
    })

    useEffect(() => {
        props.responses && setResponses({
            items: props.responses.data,
            meta: props.responses.meta
        })
    }, [props.responses])

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
            {responses?.items?.map((response) =>
                <SwiperSlide key={response.id}>
                    <CardUserResponse
                        userId={response.user.id}
                        userName={response.user.fullName}
                        rating={response.user.rating}
                        avatar={response.user.avatar}
                        subService={response.service.subService}
                        serviceDes={response.service.description}
                        description={response.description}
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
    );
};

export default Slider3;
