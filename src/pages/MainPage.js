import React from 'react';
import {Slider2} from '../components/Slider2';
import {Slider1} from "../components/Slider1";
import Tile from '../components/Tile';
import {Link, useParams} from 'react-router-dom';
import {animateScroll as scroll} from 'react-scroll';
import {MainBanner} from '../components/MainBanner';
import {useEffect, useState} from "react";
import {getBanner, getPopular, getRecommend} from "../API/mainpagereq";
import {useCurrentUser} from '../store/reducers';
import {getTypesEstate} from '../API/typesEstate';
import {useSelector} from 'react-redux';

export default function MainPage() {
    const currentUser = useCurrentUser()
    const userId = currentUser?.id
    const {page} = useParams();
    const [recommend, setRecommend] = useState([]);
    const [banner, setBanner] = useState([]);
    const [popular, setPopular] = useState([]);
    const [typesEstate, setTypesEstate] = useState([])
    const city = useSelector(state => state?.selectedCity)

    useEffect(() => {
        getBanner()
            .then(data => setBanner(data))
            .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        if (userId && city) {
            getRecommend(userId, 6, city)
                .then(data => setRecommend(data))
                .catch(error => console.log(error))
        }
    }, [userId, city])

    useEffect(() => {
        if (userId && city) {
            getPopular(page, 6, userId, city)
                .then(data => setPopular(data))
                .catch(error => console.log(error))
        }
    }, [page, userId, city])

    useEffect(() => {
        getTypesEstate().then(result => setTypesEstate(result))
    }, [])

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <main>

            <section id="sec-1">
                <MainBanner banners={banner}/>
            </section>

            <section id="sec-2" className="container tiles px-xxl-5 mb-6">
                {
                    typesEstate &&
                    typesEstate.map(type => (
                        <Tile
                            key={type.id}
                            img={`/img/icons/${type.slug}.svg`}
                            titles={[type.name]}
                            hoverLinks={[
                                {name: 'Купить', link: `/catalog/page/1?transactionType=1&typesEstate=${type.id}`},
                                {name: 'Сдать', link: '/advertise'},
                                {name: 'Продать', link: '/advertise'},
                                {name: 'Снять', link: `/catalog/page/1?transactionType=0&typesEstate=${type.id}`}]}
                        />
                    ))
                }
            </section>

            <section id="sec-3" className="container mb-6">
                <h3>Найти на карте</h3>
                <img src="/img/map.png" alt="Карта" className="w-100"/>
            </section>

            <section className="sec-4 container mb-6">
                <h3>Срочная продажа</h3>
                <div className="position-relative">
                    <Slider1/>
                </div>
                <div className="text-center mt-2">
                    <a href="/" className="fs-11 fw-5">
                        Смотреть все
                    </a>
                </div>
            </section>

            <section className="sec-4 container mb-6">
                <h3>Часто просматриваемые</h3>
                <div className="position-relative">
                    <Slider1 popular={popular}/>
                </div>
                <div className="text-center mt-2">
                    <a href="/" className="fs-11 fw-5">
                        Смотреть все
                    </a>
                </div>
            </section>

            <section className="sec-4 container mb-6">
                <h3>Рекомендованные Вам</h3>
                <div className="position-relative">
                    <Slider1 recommend={recommend}/>
                </div>
                <div className="text-center mt-2">
                    <a href="/" className="fs-11 fw-5">
                        Смотреть все
                    </a>
                </div>
            </section>

            <section id="sec-5">
                <div className="container pb-5">
                    <div className="row gx-xxl-5 mb-6">
                        <div className="col-lg-7 col-xl-8">
                            <img src="/img/img4.jpg" alt="" className="w-100"/>
                        </div>
                        <div className="info col-lg-5 col-xl-4 pt-xxl-5 mt-4 mt-lg-0">
                            <h2>Продаете или покупаете недвижимость?</h2>
                            <div className="d-flex align-items-baseline mt-2 mt-sm-4">
                                <img src="/img/icons/mark.svg" alt=""/>
                                <div className="color-2 fs-15 ms-2 ms-sm-3">Юридическая консультация</div>
                            </div>
                            <div className="d-flex align-items-baseline mt-2 mt-sm-4">
                                <img src="/img/icons/mark.svg" alt=""/>
                                <div className="color-2 fs-15 ms-2 ms-sm-3">Сопровождение сделок</div>
                            </div>
                            <div className="d-flex align-items-baseline mt-2 mt-sm-4">
                                <img src="/img/icons/mark.svg" alt=""/>
                                <div className="color-2 fs-15 ms-2 ms-sm-3">Оформление ипотеки на выгодных условиях
                                </div>
                            </div>
                            <button
                                type="button"
                                className="btn btn-1 fs-15 mx-auto mt-4 mt-lg-5"
                            >
                                Услуги риелтора
                            </button>
                        </div>
                    </div>
                    <h3>Статьи</h3>
                    <div className="position-relative">
                        <Slider2/>
                    </div>
                    <div className="text-center mt-4">
                        <Link to="/articles/page/1" onClick={() => scrollToTop()} className="fs-12 color-1 bb-1">Смотреть
                            все статьи</Link>
                    </div>
                </div>
            </section>
        </main>

    );
}
