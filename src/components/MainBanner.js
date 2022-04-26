import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Autoplay} from 'swiper';
import CardBanner from "./CardBanner";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export const MainBanner = (props) => {

    const [banners, setBanners] = useState([]);
    useEffect(() => {
        if (props.banners) {
            setBanners(props.banners)
        } else {
            console.log("error")
        }
    }, [props.banners])

    const url = 'https://api.antontig.beget.tech'

    return (
            <Swiper
                className="swiper-home"
                loop={true}
                slidesPerView={1}
                effect='fade'
                pagination={
                    {
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true,
                    }}
                autoplay={{
                    delay: 5000
                }}
            >
                {banners.map((i) =>
                        <SwiperSlide key={i.id}>
                            <CardBanner
                                image={i.image}
                                url={url}
                                description={i.description}
                            />
                        </SwiperSlide>
                )}
                <div className="swiper-pagination"></div>
            </Swiper>
    )
}