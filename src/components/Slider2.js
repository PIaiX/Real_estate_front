import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import Article from './Article';
import {useEffect, useState} from "react";
import { getRandomArticle} from "../API/news";
import {useParams} from "react-router-dom";
import {checkPhotoPath} from "../helpers/photo";

SwiperCore.use([Navigation, Pagination]);

export const Slider2 = () => {
    const {page} = useParams()
    const [randomArticle, setRandomArticles] = useState([])

    useEffect(() => {
        getRandomArticle(page, 5).then((result) =>setRandomArticles(result))
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
            {randomArticle?.map((randomArticle)=>
                <SwiperSlide key={randomArticle.id}>
                    <Article
                        imgUrl={checkPhotoPath(randomArticle.image)}
                        title={randomArticle.title}
                        text={randomArticle.description}
                        articleUrl={randomArticle.slug}
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

