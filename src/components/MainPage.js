import React from 'react';
import { Slider2 } from './Slider2';
import { Slider1 } from './Slider1';
import Tile from './utilities/Tile';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { MainBanner } from './MainBanner';

export default function MainPage() {

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <main>
            <section id="sec-1">
                <MainBanner />
                <div className="container d-flex justify-content-center">
                    <h1 className="main">Мы подобрали для Вас лучшие варианты</h1>
                </div>
            </section>

            <section id="sec-2" className="container tiles px-xxl-5 mb-6">
                <Tile
                    img="/real_estate/img/icons/icon-1.svg"
                    titles={['Квартиры', 'Комнаты']}
                    hoverLinks={[
                        {name: 'Купить', link: '/catalog'},
                        {name: 'Сдать', link: '/catalog'},
                        {name: 'Продать', link: '/catalog'},
                        {name: 'Снять', link: '/catalog'}]}
                />

                <Tile
                    img="/real_estate/img/icons/icon-2.svg"
                    titles={['Дома', 'Дачи', 'Коттеджи']}
                    hoverLinks={[
                        {name: 'Купить', link: '/catalog'},
                        {name: 'Сдать', link: '/catalog'},
                        {name: 'Продать', link: '/catalog'},
                        {name: 'Снять', link: '/catalog'}]}
                />

                <Tile
                    img="/real_estate/img/icons/icon-3.svg"
                    titles={['Гараж', 'Паркинг']}
                    hoverLinks={[
                        {name: 'Купить', link: '/catalog'},
                        {name: 'Сдать', link: '/catalog'},
                        {name: 'Продать', link: '/catalog'},
                        {name: 'Снять', link: '/catalog'}]}
                />

                <Tile
                    img="/real_estate/img/icons/icon-4.svg"
                    titles={['Земельные участки']}
                    hoverLinks={[
                        {name: 'Купить', link: '/catalog'},
                        {name: 'Сдать', link: '/catalog'},
                        {name: 'Продать', link: '/catalog'},
                        {name: 'Снять', link: '/catalog'}]}
                />

                <Tile
                    img="/real_estate/img/icons/icon-5.svg"
                    titles={['Коммерческая недвижимость']}
                    hoverLinks={[
                        {name: 'Купить', link: '/catalog'},
                        {name: 'Сдать', link: '/catalog'},
                        {name: 'Продать', link: '/catalog'},
                        {name: 'Снять', link: '/catalog'}]}
                />

                <Tile
                    img="/real_estate/img/icons/icon-6.svg"
                    simpleLink={{title: 'Ипотека', url: '/service'}}
                />

            </section>
        
            <section id="sec-3" className="container mb-6">
                <h3>Найти на карте</h3>
                <img src="/real_estate/img/map.png" alt="Карта" className="w-100"/>
            </section>          

            <section className="sec-4 container mb-6">
                <h3>Срочная продажа</h3>
                <div className="position-relative">
                    <Slider1 />
                </div>
                <div className="text-center mt-2">
                    <a href="/" className="fs-11 fw-5">Смотреть все</a>
                </div>
            </section>

            <section className="sec-4 container mb-6">
                <h3>Часто просматриваемые</h3>
                <div className="position-relative">
                    <Slider1/>
                </div>
                <div className="text-center mt-2">
                    <a href="/" className="fs-11 fw-5">Смотреть все</a>
                </div>
            </section>

            <section className="sec-4 container mb-6">
                <h3>Рекомендованные Вам</h3>
                <div className="position-relative">
                    <Slider1/>
                </div>
                <div className="text-center mt-2">
                    <a href="/" className="fs-11 fw-5">Смотреть все</a>
                </div>
            </section>

            <section id="sec-5">
                <div className="container pb-5">
                    <div className="row gx-xxl-5 mb-6">
                        <div className="col-lg-7 col-xl-8">
                            <img src="/real_estate/img/img4.jpg" alt="" className="w-100"/>
                        </div>
                        <div className="info col-lg-5 col-xl-4 pt-xxl-5 mt-4 mt-lg-0">
                            <h2>Продаете или покупаете недвижимость?</h2>
                            <div className="d-flex align-items-baseline mt-2 mt-sm-4">
                                <img src="/real_estate/img/icons/mark.svg" alt=""/>
                                <div className="color-2 fs-15 ms-2 ms-sm-3">Юридическая консультация</div>
                            </div>
                            <div className="d-flex align-items-baseline mt-2 mt-sm-4">
                                <img src="/real_estate/img/icons/mark.svg" alt=""/>
                                <div className="color-2 fs-15 ms-2 ms-sm-3">Сопровождение сделок</div>
                            </div>
                            <div className="d-flex align-items-baseline mt-2 mt-sm-4">
                                <img src="/real_estate/img/icons/mark.svg" alt=""/>
                                <div className="color-2 fs-15 ms-2 ms-sm-3">Оформление ипотеки на выгодных условиях</div>
                            </div>
                            <button type="button" className="btn btn-1 fs-15 mx-auto mt-4 mt-lg-5">Услуги риелтора</button>
                        </div>
                    </div>
                    <h3>Статьи</h3>
                    <div className="position-relative">
                        <Slider2 />
                    </div>
                    <div className="text-center mt-4">
                        <Link to="/articles/page/1" onClick={() => scrollToTop()} className="fs-12 color-1 bb-1">Смотреть все статьи</Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
