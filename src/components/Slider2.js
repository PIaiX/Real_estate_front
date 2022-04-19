import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import Article from './Article';
import {useEffect, useState} from "react";
import { getRandomArticle} from "./API/news";
import {useParams} from "react-router-dom";

SwiperCore.use([Navigation, Pagination]);

export const Slider2 = () => {
    const {page} = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        const fin = async () => {
            try {
                let result = await getRandomArticle(page, 5)
                if (result) {
                    setData(result)
                }
            } catch (err) {
                console.log("err")
            }
        }
        fin()
    }, [page])

    return (
        <Swiper className="swiper-3"
            spaceBetween={0}
            slidesPerView={1}
            touchStartPreventDefault={false}
            grabCursor={true}
            breakpoints={{
                576: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                992: {
                    slidesPerView: 3,
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
            {data.map((data)=>
                <SwiperSlide key={data.id}>
                    <Article
                        imgUrl="/real_estate/img/nophoto.jpg"
                        title={data.title}
                        text={data.description}
                        articleUrl={data.slug}
                    />
                </SwiperSlide>
            )}
            <div className="swiper-button-prev">
                <img src="/real_estate/img/icons/prev.svg" alt="предыдущий" className="w-100"/>
            </div>
            <div className="swiper-button-next">
                <img src="/real_estate/img/icons/next.svg" alt="следующий" className="w-100"/>
            </div>
            <div className="swiper-pagination"></div>
        </Swiper>
    )
}

