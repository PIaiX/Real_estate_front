import React, {useEffect, useState} from 'react';
import {Slider2} from '../components/Slider2';
import {Slider1} from "../components/Slider1";
import Tile from '../components/Tile';
import {Link, NavLink, useParams} from 'react-router-dom';
import {MainBanner} from '../components/MainBanner';
import {getBanner, getPopular, getRecommend} from "../API/mainpagereq";
import {useCurrentUser} from '../store/reducers';
import {getTypesEstate} from '../API/typesEstate';
import {useSelector} from 'react-redux';
import {getCatalog} from "../API/catalog";
import getForMap from "../API/ymap";
import {getServicesTypes} from "../API/services";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import {servicesTypesLocal} from "../helpers/services";
import Loader from "../components/Loader";
import TileServices from "../components/TileServices";
import YMap from "../components/YMap";
import OffcanvasCards from '../components/OffcanvasCards';

export default function MainPage() {
    const currentUser = useCurrentUser()
    const userId = currentUser?.id
    const {page} = useParams();
    const axiosPrivate = useAxiosPrivate()
    const [recommend, setRecommend] = useState([]);
    const [banner, setBanner] = useState([]);
    const [popular, setPopular] = useState([]);
    const [hotAds, setHotAds] = useState([])
    const [typesEstate, setTypesEstate] = useState([])
    const [servicesTypes, setServicesTypes] = useState({
        isLoading: false,
        data: [],
        error: null,
    })
    const city = useSelector(state => state?.selectedCity)

    // ymaps data
    const [mapData, setMapData] = useState([])
    const [ids, setIds] = useState([])
    const [cards, setCards] = useState([])

    useEffect(() => {
        getForMap(city).then(items => setMapData(items))
    }, [city])

    useEffect(() => {
        if (ids?.length) {
            const result = []

            mapData.forEach(item => {
                ids.forEach(id => {
                    if (id === item.id) {
                        result.push(item)
                    }
                })
            })

            setCards(result)
        }
    }, [ids])

    useEffect(() => {
        getBanner()
            .then(data => setBanner(data))
    }, [])

    useEffect(() => {
        if (userId && city) {
            getRecommend(userId, 6, city)
                .then(data => setRecommend(data))
        }
    }, [userId, city])

    useEffect(() => {
        if (userId && city) {
            getPopular(page, 6, userId, city)
                .then(data => setPopular(data))
        }
    }, [page, userId, city])

    useEffect(() => {
        if (userId && city) {
            getCatalog(1, 6, '', city, {isHot: true, estateId: 1})
                .then(data => setHotAds(data?.body?.data))
        }
    }, [city])

    useEffect(() => {
        getTypesEstate().then(result => setTypesEstate(result))
    }, [])

    useEffect(() => {
        getServicesTypes(axiosPrivate)
            .then(res => {
                setServicesTypes({isLoading: true, data: res})
            })
            .catch(error => setServicesTypes({isLoading: true, error: error}))
    }, [])

    const findPhoto = (name) => {
        let photo
        servicesTypesLocal.find(i => {
            if (i.name === name) {
                return photo = i.imageLocal
            }
        })
        return photo
    }

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
                <TileServices
                    img='/img/icons/ipoteka.svg'
                    name='Ипотека'
                    dynamic={false}
                />
                {
                    servicesTypes &&
                    servicesTypes.isLoading
                        ? servicesTypes?.data?.map(service => (
                            <TileServices
                                key={service.id}
                                img={findPhoto(service.name)}
                                name={service.name}
                                slug={service.slug}
                                dynamic={true}
                            />
                        ))
                        : <div className='p-5 w-100 d-flex justify-content-center'><Loader color='#146492'/></div>
                }
            </section>

            <section id="sec-3" className="container mb-6">
                <div className="main-page__ymaps-container">
                    <h3>Найти на карте</h3>
                    <YMap
                        items={mapData}
                        className='main-page__ymaps'
                        callback={ids => setIds(ids)}
                    />
                    <OffcanvasCards
                        className="main-page__offcanvas-cards"
                        cards={cards}
                        hideOffcanvas={() => {
                            setCards([])
                            setIds([])
                        }}
                    />
                </div>
            </section>

            {!(hotAds === undefined || hotAds?.length === 0) &&
                <section className="sec-4 container mb-6">
                    <h3>Срочная продажа</h3>
                    <div className="position-relative">
                        <Slider1 hotAds={hotAds}/>
                    </div>
                </section>
            }

            {!(popular === undefined || popular?.length === 0) &&
                <section className="sec-4 container mb-6">
                    <h3>Часто просматриваемые</h3>
                    <div className="position-relative">
                        <Slider1 popular={popular}/>
                    </div>
                </section>
            }

            {!(recommend === undefined || recommend?.length === 0) &&
                <section className="sec-4 container mb-6">
                    <h3>Рекомендованные Вам</h3>
                    <div className="position-relative">
                        <Slider1 recommend={recommend}/>
                    </div>
                </section>
            }

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
                            <NavLink
                                to='/service/uslugiRieltora'
                                className="btn btn-1 fs-15 mx-auto mt-4 mt-lg-5"
                            >
                                Услуги риелтора
                            </NavLink>
                        </div>
                    </div>
                    <h3>Статьи</h3>
                    <div className="position-relative">
                        <Slider2/>
                    </div>
                    <div className="text-center mt-4">
                        <Link to="/articles" className="fs-12 color-1 bb-1">Смотреть
                            все статьи</Link>
                    </div>
                </div>
            </section>
        </main>

    );
}
