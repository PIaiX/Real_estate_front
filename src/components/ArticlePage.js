import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {Slider2} from './Slider2';
import Card from './Card';
import {getArticle} from "./API/news";

export default function ArticlePage() {

    const {slug} = useParams();

    const [data, setData] = useState([])

    useEffect(() => {
        const fin = async () => {
            try {
                let result = await getArticle(slug)
                if (result) {
                    setData(result)
                }
            } catch (err) {
                console.log(err)
            }
        }
        fin()
    }, [slug])
    return (
        <main>
            <div className="container py-3 py-sm-4 py-lg-5">
                <nav aria-label="breadcrumb">
                    <Link to="/articles" className="d-block d-md-none gray-3">&#10094; Назад</Link>
                    <ol className="d-none d-md-flex breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/">Главная</Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link to="/articles/page/1">Статьи</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">{data.title}</li>
                    </ol>
                </nav>
            </div>

            <section id="sec-8" className="container pb-5">
                <div className="row gx-xxl-5 mb-5">
                    <div className="col-xl-8 col-xxl-9 article-full">
                        <img src="/real_estate/img/nophoto.jpg" alt={data.title} className="article-page-img order-3"/>
                        <h1 className="order-1 text-center text-md-left">{data.title}</h1>
                        <div className="d-flex gray-4 fs-12 mb-4 order-2">
                            <img src="/real_estate/img/icons/bi_calendar-event-fill.svg" alt="дата"/>
                            <div className="ms-2">{data.createdAtForUser}</div>
                            <img src="/real_estate/img/icons/time.svg" alt="время" className="ms-4"/>
                            <div className="ms-2">{data.readingTime} мин</div>
                        </div>
                        <div className="text fw-3 fs-11 order-4">
                            <p>{data.description}</p>
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
                            <svg width="23" height="12" viewBox="0 0 23 12" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <line x1="21.6832" y1="0.730271" x2="10.7468" y2="10.961" stroke="#146492"
                                      strokeWidth="2"/>
                                <line y1="-1" x2="14.9757" y2="-1"
                                      transform="matrix(0.730271 0.683157 0.683157 -0.730271 2 0)" stroke="#146492"
                                      strokeWidth="2"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <h3 className="text-center text-md-left">Другие статьи по теме</h3>
                <div className="position-relative">
                    <Slider2/>
                </div>
            </section>
        </main>
    )
}
