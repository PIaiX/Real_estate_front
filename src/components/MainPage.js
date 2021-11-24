import React from 'react';
import { Slider2 } from './Slider2';
import { Slider1 } from './Slider1';
import { NavLink } from 'react-router-dom';

export default function MainPage() {
    return (
        <main>
            <section id="sec-1">
                <h1 className="main">Мы подобрали для Вас лучшие варианты</h1>
            </section>

            <section id="sec-2" className="container tiles px-5 mb-6">
                <div className="tile">
                    <img src="../img/icons/icon-1.svg" alt="Сдать"/>
                    <div className="links">
                        <NavLink to="/catalog">Купить</NavLink>
                        <a href="#">Сдать</a>
                        <a href="#">Продать</a>
                        <a href="#">Снять</a>
                    </div>
                </div>
                <div className="tile">
                    <img src="../img/icons/icon-2.svg" alt="Недвижимость"/>
                    <div className="links">
                        <a href="#">Дома</a>
                        <a href="#">Дачи</a>
                        <a href="#">Коттеджи</a>
                    </div>
                </div>
                <div className="tile">
                    <img src="../img/icons/icon-3.svg" alt="Паркинг"/>
                    <div className="links">
                        <a href="#">Гараж</a>
                        <a href="#">Паркинг</a>
                    </div>
                </div>
                <div className="tile">
                    <img src="../img/icons/icon-4.svg" alt="Земельные участки"/>
                    <div className="links">
                        <a href="#">Земельные участки</a>
                    </div>
                </div>
                <div className="tile">
                    <img src="../img/icons/icon-5.svg" alt="Коммерческая недвижимость"/>
                    <div className="links">
                        <a href="#">Коммерческая недвижимость</a>
                    </div>
                </div>
                <div className="tile">
                    <img src="../img/icons/icon-6.svg" alt="Ипотека"/>
                    <div className="links">
                        <a href="#">Ипотека</a>
                    </div>
                </div>
                <div className="tile">
                    <img src="../img/icons/icon-7.svg" alt="Дизайн"/>
                    <div className="links">
                        <a href="#">Дизайн</a>
                    </div>
                </div>
                <div className="tile">
                    <img src="../img/icons/icon-8.svg" alt="Ремонт"/>
                    <div className="links">
                        <a href="#">Ремонт</a>
                    </div>
                </div>
                <div className="tile">
                    <img src="../img/icons/icon-9.svg" alt="Грузоперевозки"/>
                    <div className="links">
                        <a href="#">Грузоперевозки</a>
                    </div>
                </div>
                <div className="tile">
                    <img src="../img/icons/icon-10.svg" alt="Услуги риелторов"/>
                    <div className="links">
                        <a href="#">Услуги риелторов</a>
                    </div>
                </div>
            </section>
        
            <section id="sec-3" className="container mb-6">
                <h3>Найти на карте</h3>
                <img src="../img/map.png" alt="Карта" className="w-100"/>
            </section>          

            <section className="sec-4 container mb-6">
                <h3>Срочная продажа</h3>
                <div className="position-relative">
                    <Slider1 />
                </div>
                <div className="text-center mt-2">
                    <a href="#" className="fs-11 fw-5">Смотреть все</a>
                </div>
            </section>

            <section className="sec-4 container mb-6">
                <h3>Часто просматриваемые</h3>
                <div className="position-relative">
                    <Slider1 />
                </div>
                <div className="text-center mt-2">
                    <a href="#" className="fs-11 fw-5">Смотреть все</a>
                </div>
            </section>

            <section className="sec-4 container mb-6">
                <h3>Рекомендованные Вам</h3>
                <div className="position-relative">
                    <Slider1 />
                </div>
                <div className="text-center mt-2">
                    <a href="#" className="fs-11 fw-5">Смотреть все</a>
                </div>
            </section>

            <section id="sec-5">
                <div className="container pb-5">
                    <div className="row gx-5 mb-6">
                        <div className="col-8">
                            <img src="../img/img4.jpg" alt="" className="w-100"/>
                        </div>
                        <div className="col-4 pt-5">
                            <h2>Продаете или покупаете недвижимость?</h2>
                            <div className="d-flex align-items-baseline mt-4">
                                <img src="../img/icons/mark.svg" alt=""/>
                                <div className="color-2 fs-15 ms-3">Юридическая консультация</div>
                            </div>
                            <div className="d-flex align-items-baseline mt-4">
                                <img src="../img/icons/mark.svg" alt=""/>
                                <div className="color-2 fs-15 ms-3">Сопровождение сделок</div>
                            </div>
                            <div className="d-flex align-items-baseline mt-4">
                                <img src="../img/icons/mark.svg" alt=""/>
                                <div className="color-2 fs-15 ms-3">Оформление ипотеки на выгодных условиях</div>
                            </div>
                            <button type="button" className="btn btn-1 fs-15 mx-auto mt-5">Услуги риелтора</button>
                        </div>
                    </div>
                    <h3 className="black">Статьи</h3>
                    <div className="position-relative">
                        <Slider2 />
                    </div>
                </div>
            </section>
        </main>
    )
}
