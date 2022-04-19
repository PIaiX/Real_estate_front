import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import Card from './Card';
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {getPopular} from "./API/mainpagereq";

SwiperCore.use([Navigation, Pagination]);

export const Slider1 = () => {

    /*const {userId} = useParams();*/
    const {page} = useParams();

    /*const [recommend, setRecommend] = useState([]);*/
    const [popular, setPopular] = useState([]);

    /*useEffect(() => {
        const fun = async () => {
            try {
                let result = await getRecommend(userId, 6)
                if (result) {
                    setRecommend(result)
                }
            } catch (err) {
                console.log("err")
            }
        }
        fun()
    }, [userId])*/

    useEffect(() => {
        const fun = async () => {
            try {
                let result = await getPopular(page, 6)
                if (result) {
                    setPopular(result)
                }
            } catch (err) {
                console.log("err")
            }
        }
        fun()
    }, [page])

    /*console.log(recommend)*/
    console.log(popular)

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
                            '/real_estate/img/img1.jpg',
                            '/real_estate/img/img2.jpg',
                            '/real_estate/img/img3.jpg',
                            '/real_estate/img/img4.jpg'
                        ]}
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
            <SwiperSlide>
                <Card 
                images={['/real_estate/img/img3.jpg']} 
                title="1-к, квартира 52м2" 
                price="6 000 000" 
                addressName="ЖК “Столичный”" 
                address="Вахитовский район, ул. Четаева 32" 
                text="Новый дом. Консьерж. Квартира после евро ремонта. Полы ламинат. Кондиционеры. Рядом школа и деский сад..."
                date="Вчера в 21:00"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Card 
                images={['/real_estate/img/img3.jpg']}
                title="1-к, квартира 52м2" 
                price="6 000 000" 
                addressName="ЖК “Столичный”" 
                address="Вахитовский район, ул. Четаева 32" 
                text="Новый дом. Консьерж. Квартира после евро ремонта. Полы ламинат. Кондиционеры. Рядом школа и деский сад..."
                date="Вчера в 21:00"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Card 
                images={['/real_estate/img/img3.jpg']}
                title="1-к, квартира 52м2" 
                price="6 000 000" 
                addressName="ЖК “Столичный”" 
                address="Вахитовский район, ул. Четаева 32" 
                text="Новый дом. Консьерж. Квартира после евро ремонта. Полы ламинат. Кондиционеры. Рядом школа и деский сад..."
                date="Вчера в 21:00"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Card 
                images={['/real_estate/img/img3.jpg']} 
                title="1-к, квартира 52м2" 
                price="6 000 000" 
                addressName="ЖК “Столичный”" 
                address="Вахитовский район, ул. Четаева 32" 
                text="Новый дом. Консьерж. Квартира после евро ремонта. Полы ламинат. Кондиционеры. Рядом школа и деский сад..."
                date="Вчера в 21:00"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Card 
                images={['/real_estate/img/img3.jpg']}
                title="1-к, квартира 52м2" 
                price="6 000 000" 
                addressName="ЖК “Столичный”" 
                address="Вахитовский район, ул. Четаева 32" 
                text="Новый дом. Консьерж. Квартира после евро ремонта. Полы ламинат. Кондиционеры. Рядом школа и деский сад..."
                date="Вчера в 21:00"
                />
            </SwiperSlide>
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