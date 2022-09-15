import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Slider2} from '../components/Slider2';
import Card from '../components/Card';
import {getArticle} from "../API/news";
import {getRecommend} from "../API/mainpagereq";
import {useCurrentUser} from "../store/reducers";
import Breadcrumbs from "../components/Breadcrumbs";
import {useSelector} from "react-redux";
import {checkPhotoPath} from "../helpers/photo";

export default function ArticlePage() {

    const user = useCurrentUser()
    const city = useSelector(state => state?.selectedCity)
    const [recommend, setRecommend] = useState([]);
    const {slug} = useParams();
    const [articleInfo, setArticleInfo] = useState([])
    const [limit, setLimit] = useState(2)

    useEffect(() => {
        (city && user?.id) && getRecommend(user.id, limit, city).then(res => setRecommend(res?.data))
    }, [city, user?.id, limit])

    useEffect(() => {
        getArticle(slug).then(res => setArticleInfo(res))
    }, [slug])

    return (
        <main>

            <Breadcrumbs currentRouteName={articleInfo.title || 'Название статьи'}/>

            <section id="sec-8" className="container pb-5">
                <div className="row gx-xxl-5 mb-5">
                    <div className="col-xl-8 col-xxl-9 article-full">
                        <img src={checkPhotoPath(articleInfo?.image)} alt={articleInfo.title} className="article-page-img order-3"/>
                        <h1 className="order-1 text-center text-md-left">{articleInfo.title}</h1>
                        <div className="d-flex gray-4 fs-12 mb-4 order-2">
                            <img src="/img/icons/bi_calendar-event-fill.svg" alt="дата"/>
                            <div className="ms-2">{articleInfo.createdAtForUser}</div>
                            <img src="/img/icons/time.svg" alt="время" className="ms-4"/>
                            <div className="ms-2">{articleInfo.readingTime} мин</div>
                        </div>
                        <div className="text fw-3 fs-11 order-4">
                            <p>{articleInfo.description}</p>
                        </div>

                    </div>
                    {recommend?.length > 0
                        ?
                        <div className="d-none d-xl-block col-xl-4 col-xxl-3 show-more" >
                            <h3 className='text-center'>Объявления</h3>
                            <div className='h-auto'>
                                {recommend?.map((i) =>
                                    <Card
                                        key={i.id}
                                        uuid={i.uuid}
                                        isVip={i.isVip}
                                        isHot={i.isHot}
                                        className="mb-4"
                                        type="tiled"
                                        pictures={[i.image, i.images]}
                                        title={i.title}
                                        price={i.price}
                                        addressName={i.residentalComplexForUser}
                                        address={i.address}
                                        metro={i.metro}
                                        text={i.description}
                                        date={i.createdAtForUser}
                                        communalPayments={i.communalPriceForUser}
                                        commission={i.commissionForUser}
                                    />
                                )}
                                <button
                                    type="button"
                                    className="mx-auto color-1 fw-5 fs-12 d-flex align-items-center"
                                    onClick={() => setLimit(limit + 2)}
                                >
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
                        :
                        <div className="d-none d-xl-block col-xl-4 col-xxl-3 show-more" >
                            <h3 className='text-center'>Объявления</h3>
                            <div className='text-center'>
                                Не найдены
                            </div>
                        </div>
                    }
                </div>

                <h3 className="text-center text-md-left">Другие статьи по теме</h3>
                <div className="position-relative">
                    <Slider2/>
                </div>
            </section>
        </main>
    )
}
