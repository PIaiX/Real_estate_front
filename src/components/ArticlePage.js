import React from 'react';
import { NavLink } from 'react-router-dom';
import { Slider2 } from './Slider2';
import Card from './Card';

export default function ArticlePage() {
    return (
        <main>
            <div className="container py-3 py-sm-4 py-lg-5">
                <nav aria-label="breadcrumb">
                    <a href="javascript:history.go(-1)" className="d-block d-md-none gray-3">&#10094; Назад</a>
                    <ol className="d-none d-md-flex breadcrumb">
                        <li className="breadcrumb-item">
                            <NavLink to="/">Главная</NavLink>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">Зачем нужен риелтор</li>
                    </ol>
                </nav>
            </div>

            <section id="sec-8" className="container pb-5">
                <div className="row gx-xxl-5 mb-5">
                    <div className="col-xl-8 col-xxl-9 article-full">
                        <img src="/real_estate/img/img2.jpg" alt="Зачем нужен риелтор" className="article-page-img order-3"/>
                        <h1 className="order-1 text-center text-md-left">Зачем нужен риелтор</h1>
                        <div className="d-flex gray-4 fs-12 mb-4 order-2">
                            <img src="/real_estate/img/icons/bi_calendar-event-fill.svg" alt="дата"/>
                            <div className="ms-2">22.10.21</div>
                            <img src="/real_estate/img/icons/time.svg" alt="время" className="ms-4"/>
                            <div className="ms-2">5 мин</div>
                        </div>
                        <div className="text fw-3 fs-11 order-4">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel sed quis purus augue tincidunt facilisis. Dignissim vitae donec vitae elementum turpis eu. Mattis ullamcorper sed auctor pellentesque et auctor hac consequat vivamus. Auctor odio habitant consectetur nisl, cursus pretium tristique sodales viverra. Nullam lacus condimentum adipiscing augue nec volutpat. Congue et facilisis facilisi cum eu mauris. Nullam accumsan nibh sed faucibus non dolor arcu a donec. Convallis sollicitudin id id ultrices augue diam tortor scelerisque sapien.</p>
                            <p>Mauris dictum hac amet aliquam scelerisque semper vestibulum tristique. Cras ultrices mattis lectus ullamcorper adipiscing augue ut. Quis elementum vel non ac mauris pellentesque elementum, hendrerit. Mauris ante nec placerat dignissim.</p>
                            <p>Quam in lorem lectus senectus cum eget duis. Metus, diam mi, ipsum tellus. Rutrum pulvinar vel quisque cursus turpis. Adipiscing a dolor ullamcorper in vel dui pulvinar cras sed. Ornare lorem nascetur at non nibh faucibus elit posuere mattis.</p>
                            <p>Turpis imperdiet eu libero, scelerisque. Ullamcorper turpis nec orci nam quis turpis at. Tincidunt volutpat at suscipit netus nisl ultricies. Nulla non pellentesque tincidunt urna netus. Quis est, commodo ac velit in curabitur magnis sem. Sit quis semper sapien id ut adipiscing blandit dolor nunc. Quis sem vestibulum est, eget sapien. Aenean facilisi turpis arcu, gravida sed id aliquet ipsum quis. Cras amet egestas blandit fames sed eu urna, sit id. Est enim luctus leo auctor viverra. Nunc odio feugiat sagittis ipsum nunc est. Posuere luctus pellentesque blandit ipsum accumsan. Neque bibendum tortor at consectetur in varius malesuada sed integer. Nullam vel, commodo quam hendrerit donec tincidunt id.</p>
                            <p>Eu, suspendisse id elit, auctor nunc, tortor. Egestas ut at semper a varius. Ullamcorper felis aliquam eget nisl vulputate. Viverra urna cursus massa eu faucibus tincidunt eu. Dui facilisi ac blandit dui, elementum tempus. Tincidunt curabitur consequat, fames tellus adipiscing dictum erat. Consectetur amet vitae tellus sit felis integer id. Lectus elit purus ut lorem aenean. Malesuada pulvinar faucibus magnis vel nunc iaculis faucibus in viverra. Blandit sed ut sit nunc vivamus. Amet, sed nascetur curabitur dictum.</p>
                            <p>Imperdiet adipiscing eu integer nulla cursus blandit eget. Sit feugiat curabitur neque elementum. Ut et faucibus eu scelerisque magna malesuada gravida. Vel tellus tincidunt viverra risus scelerisque a, eget odio. Pulvinar adipiscing malesuada nisi neque arcu. Urna vehicula at mi ultricies convallis dictum quisque habitant. Enim fermentum mi scelerisque amet. Laoreet nec in imperdiet molestie nunc, enim in. Arcu tellus lobortis dapibus ultrices semper nibh amet. Sollicitudin habitant amet cras duis. Integer urna, non viverra viverra cras augue urna mauris sed. Quam in egestas ut cursus pretium cursus aliquet non.</p>
                        </div>
                        
                    </div>
                    <div className="d-none d-xl-block col-xl-4 col-xxl-3">
                        <h3>Объявления</h3>
                        <Card 
                        className="mb-4"
                            type="tiled"
                            images={['/real_estate/img/img1.jpg', '/real_estate/img/img2.jpg', '/real_estate/img/img3.jpg', '/real_estate/img/img4.jpg']}
                            title="1-к, квартира 52м2" 
                            price="6 000 000" 
                            addressName="ЖК “Столичный”" 
                            address="Вахитовский район, ул. Четаева 32" 
                            metro="Козья слобода, 7 минут"
                            text='Сдается 1-комнатная квартира в строящемся доме (Дом 3.1), срок сдачи: IV-кв. 2021, общей площадью 51.82 кв.м., на 18 этаже. Жилой комплекс "Столичный"- это современный жилой комплекс, который находится в самом  центре Казани, состоящий из нескольких кварталов, органично сочетающий городской комфорт и природное окружение...'
                            date="Вчера в 21:00"
                            authorName="Колесникова Ирина"
                            authorPhoto="/real_estate/img/photo.png"
                            authorTimeSpan="сентября 2021"
                            phone="+ 7 (952) 879 78 65"
                            communalPayments="Не включая коммунальные платежи"
                            deposit="20 000"
                            commission="50%"
                            prepayment="без предоплаты"
                            tenancy="аренда от года"
                        />
                        <Card 
                        className="mb-4"
                            type="tiled"
                            images={['/real_estate/img/img1.jpg', '/real_estate/img/img2.jpg', '/real_estate/img/img3.jpg', '/real_estate/img/img4.jpg']}
                            title="1-к, квартира 52м2" 
                            price="6 000 000" 
                            addressName="ЖК “Столичный”" 
                            address="Вахитовский район, ул. Четаева 32" 
                            metro="Козья слобода, 7 минут"
                            text='Сдается 1-комнатная квартира в строящемся доме (Дом 3.1), срок сдачи: IV-кв. 2021, общей площадью 51.82 кв.м., на 18 этаже. Жилой комплекс "Столичный"- это современный жилой комплекс, который находится в самом  центре Казани, состоящий из нескольких кварталов, органично сочетающий городской комфорт и природное окружение...'
                            date="Вчера в 21:00"
                            authorName="Колесникова Ирина"
                            authorPhoto="/real_estate/img/photo.png"
                            authorTimeSpan="сентября 2021"
                            phone="+ 7 (952) 879 78 65"
                            communalPayments="Не включая коммунальные платежи"
                            deposit="20 000"
                            commission="50%"
                            prepayment="без предоплаты"
                            tenancy="аренда от года"
                        />
                        <button type="button" className="mx-auto color-1 fw-5 fs-12 d-flex align-items-center">
                            <span className="me-3">Показать еще</span>
                            <svg width="23" height="12" viewBox="0 0 23 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="21.6832" y1="0.730271" x2="10.7468" y2="10.961" stroke="#146492" stroke-width="2"/>
                                <line y1="-1" x2="14.9757" y2="-1" transform="matrix(0.730271 0.683157 0.683157 -0.730271 2 0)" stroke="#146492" stroke-width="2"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <h3 className="text-center text-md-left">Другие статьи по теме</h3>
                <div className="position-relative">
                    <Slider2 />
                </div>
            </section>
        </main>
    )
}
