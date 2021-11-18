import React from 'react'

export default function MainPage() {
    return (
        <div id="main-page">
            <div id="sec-1">
                <h1>Мы подобрали для Вас лучшие варианты</h1>
            </div>

            <div className="container tiles px-5 mb-5">
                <div className="tile">
                    <img src="../img/icons/icon-1.svg" alt="Сдать"/>
                    <div className="links">
                        <a href="#">Купить</a>
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
            </div>
        
            <div className="container mb-5">
                <h2>Найти на карте</h2>
                <img src="../img/map.png" alt="Карта" className="w-100"/>
            </div>

            <div className="container mb-5">
                <h2>Срочная продажа</h2>
                <div className="position-relative">
                    <div className="swiper-4">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide"> слайд 1 </div>
                            <div className="swiper-slide"> слайд 2 </div>
                            <div className="swiper-slide"> слайд 3 </div>
                            <div className="swiper-slide"> слайд 4 </div>
                            <div className="swiper-slide"> слайд 5 </div>
                            <div className="swiper-slide"> слайд 6 </div>
                        </div>
                        <div className="swiper-pagination"></div>
						<div className="swiper-button-prev">
							<img src="img/icons/prev.svg" alt=""/>
						</div>
						<div className="swiper-button-next">
							<img src="img/icons/next.svg" alt=""/>
						</div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
