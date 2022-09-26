import React from 'react';
import {Swiper, SwiperSlide} from "swiper/swiper-react";
import Card from "./Card";

const Slider3 = (props) => {



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