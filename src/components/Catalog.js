import React, {useState, useEffect} from 'react';
import {NavLink, Link, useParams, useSearchParams} from 'react-router-dom';
import CustomSelect from './utilities/CustomSelect';
import CustomSelectMultyDual from './utilities/CustomSelectMultyDual';
import Card from './Card';
import CatalogFilters from './CatalogFilters';
import PaginationCustom from './utilities/PaginationCustom';
import {getCatalog} from './API/catalog';
import {getTypesEstate} from './API/typesEstate';
import useUpdateSizeSecond from './hooks/useUpdateSizeSecond';
import {useSelector} from 'react-redux';
import useWindowDimensions from './hooks/useWindowDimensions';
import useSearchForm from './hooks/useSearchForm';
import {animateScroll as scroll} from 'react-scroll';
import {onSelectHandler, onInputHandler, onMultiCheckboxHandler, onSingleParamQuery} from './utilities/collectDataFromForm'
import YMap from './utilities/YMap';
import CatalogOffcanvasCards from './utilities/CatalogOffcanvasCards';
import {withYMaps} from 'react-yandex-maps';
import useDefineMapCenter from './hooks/useDefineMapCenter';

const Catalog = (props) => {
    const {width} = useWindowDimensions()
    const [view, setView] = useUpdateSizeSecond('991px')
    const {page} = useParams();
    const [searchParams, setSearchParams] = useSearchParams()
    const initialInstantFilters = {
        transactionType: +searchParams.get('transactionType'),
        estateId: +searchParams.get('estateId'),
        orderBy: 'asc'
    }
    const [instantFilters, setInstantFilters] = useState(initialInstantFilters)
    const [estates, setEstates] = useState([])
    const [catalogData, setCatalogData] = useState({})
    const [isClearFilters, setIsClearFilters] = useState(null)
    const [isShowMap, setIsShowMap] = useState(false)
    const [isShowCanvas, setIsShowCanvas] = useState(false)
    const userId = useSelector(state => state.currentUser?.id)
    const [offcanvasCards, setOffcanvasCards] = useState([])
    const {search, setSearch, onSearch} = useSearchForm('')

    const mapCenter = useDefineMapCenter(props.ymaps)

    useEffect(() => {
        const req = async () => {
            const estates = []
            try {
                const response = await getTypesEstate()

                if (response) {
                    response.forEach(type => type.estates.forEach(estate => estates.push({
                        index: estate.id,
                        value: estate.name
                    })))
                    setEstates(estates)
                }
            } catch (error) {
                console.log(error)
            }
        }
        req()
    }, [])

    useEffect(() => {

        const req = async () => {
            try {
                const response = await getCatalog(page, 12, userId, instantFilters)

                if (response) {
                    setCatalogData({
                        meta: response.body,
                        catalog: response.body.data,
                        foundCount: response.body.meta.total
                    })
                }
            } catch (error) {
                console.log(error)
            }
        }
        req()
    }, [page, userId, instantFilters])

    useEffect(() => {
        setSearchParams({
            'transactionType': instantFilters.transactionType,
            'estateId': instantFilters.estateId
        })
    }, [instantFilters.transactionType, instantFilters.estateId])

    const onResetInstantFilters = () => {
        setInstantFilters(initialInstantFilters)
        setIsClearFilters(true)
    }

    const onApplyFilters = (filters) => {
        setInstantFilters(prevInstantFilters => ({
            ...prevInstantFilters,
            ...filters
        }))
    }

    useEffect(() => {
        if (isShowMap) {
            scroll.scrollToTop()

            if (width > '991') {
                setIsShowCanvas(true)
            }
        } else {
            setIsShowCanvas(false)
        }
    }, [isShowMap, width])

    return (
        <main className={`catalog ${isShowMap ? 'shown-map' : null}`}>
            <nav aria-label="breadcrumb">
                <div className="container py-3 py-sm-4 py-lg-5">
                    <Link to="/" className="d-block d-md-none gray-3">&#10094; Назад</Link>
                    <ol className="d-none d-md-flex breadcrumb">
                        <li className="breadcrumb-item">
                            <NavLink to="/">Недвижимость в Казани</NavLink>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">Аренда</li>
                    </ol>
                </div>
            </nav>
            <section className="sec-6 container pb-5">
                <h1 className='catalog__title'>Каталог недвижимости</h1>
                <form className="form-search mb-4 mb-sm-5">
                    <div className="map-search">
                        <button
                            type="button"
                            className="d-flex d-lg-none align-items-center"
                            onClick={() => setIsShowCanvas(prevIsShowCanvas => !prevIsShowCanvas)}
                        >
                            <img src="/Real_estate_front/img/icons/filter.svg" alt="filter"/>
                            <span className="ms-2 fs-11 fw-5 color-1">Фильтры</span>
                        </button>
                        <button
                            type="button"
                            className="d-flex align-items-center"
                            onClick={() => setIsShowMap(prevIsShowMap => !prevIsShowMap)}
                        >
                            <img src="/Real_estate_front/img/icons/pin.svg" alt="map pin"/>
                            <span className="ms-2 fs-11 fw-5 color-2">Показать на карте</span>
                        </button>
                    </div>
                    <CustomSelect
                        className="sel-1"
                        btnClass="btn btn-2 px-2 px-sm-3"
                        options={['Снять', 'Купить']}
                        checkedOpt={instantFilters.transactionType}
                        callback={({checkedIndex}) => onSelectHandler(checkedIndex, 'transactionType', setInstantFilters)}
                    />
                    <CustomSelect
                        className="sel-2"
                        btnClass="btn btn-2 px-2 px-sm-3"
                        options={estates}
                        checkedOpt={instantFilters.estateId}
                        callback={({checkedIndex}) => onSelectHandler(checkedIndex, 'estateId', setInstantFilters)}
                    />
                    <CustomSelectMultyDual
                        className="sel-3"
                        btnClass="btn btn-2 px-2 px-sm-3"
                        checkedDist={[]}
                        checkedSt={[]}
                        districts={['Авиастроительный', 'Вахитовский', 'Кировский', 'Московский', 'Ново-Савиновский', 'Приволжский', 'Советский']}
                        stations={['Авиастроительная', 'Северный вокзал', 'Яшьлек', 'Козья слобода', 'Кремлёвская', 'Площадь Габдуллы Тукая', 'Суконная слобода', 'Аметьево', 'Горки', 'Проспект Победы', 'Дубравная']}
                        callback={(indexes1, indexes2) => {
                            setInstantFilters(prevInstantFilters => {
                                return {
                                    ...prevInstantFilters,
                                    district: [...indexes1],
                                    metro: [...indexes2]
                                }
                            })
                        }}
                    />
                    <input type="search" placeholder="Адрес или ЖК" value={search}
                           onChange={e => setSearch(e.target.value)}/>
                    <button
                        type="submit"
                        className="btn btn-1"
                        onClick={e => onSearch(e, 'addressOrResidentalComplex', setInstantFilters)}
                    >
                        Поиск
                    </button>
                    <div className="popular-queries">
                        <div>Популярные запросы:</div>
                        <button
                            type="button"
                            onClick={() => onSingleParamQuery('roomTypes', [0], setInstantFilters,initialInstantFilters)}
                        >
                            Студия
                        </button>
                        <button
                            type="button"
                            onClick={() => onSingleParamQuery('roomTypes', [1], setInstantFilters,initialInstantFilters)}
                        >
                            1 комнатная
                        </button>
                        <button
                            type="button"
                            onClick={() => onSingleParamQuery('roomTypes', [2], setInstantFilters,initialInstantFilters)}
                        >
                            2 комнатная
                        </button>
                        <button
                            type="button"
                            onClick={() => onSingleParamQuery('roomTypes', [3], setInstantFilters,initialInstantFilters)}
                        >
                            3 комнатная
                        </button>
                        <button
                            type="button"
                            onClick={() => onSingleParamQuery('hasFurniture', true, setInstantFilters,initialInstantFilters)}
                        >
                            С мебелью
                        </button>
                        <button
                            type="button"
                            onClick={() => onSingleParamQuery('hasFurniture', false, setInstantFilters,initialInstantFilters)}
                        >
                            Без мебели
                        </button>
                        <button
                            type="button"
                            onClick={() => onSingleParamQuery('elevatorTypes', [1, 2, 3], setInstantFilters,initialInstantFilters)}
                        >
                            Есть лифт
                        </button>
                        <button
                            type="button"
                            onClick={() => onSingleParamQuery('withPets', true, setInstantFilters,initialInstantFilters)}
                        >
                            Можно с животными
                        </button>
                        <button
                            type="button"
                            onClick={() => onSingleParamQuery('withKids', true, setInstantFilters,initialInstantFilters)}
                        >
                            Можно с детьми
                        </button>
                    </div>
                </form>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="d-lg-none">Найдено {catalogData.foundCount} объявлений</div>
                    <div className="d-flex align-items-center">
                        <button
                            type="button"
                            className="d-none d-lg-flex d-xxl-none align-items-center me-4"
                            onClick={() => setIsShowCanvas(prevIsShowCanvas => !prevIsShowCanvas)}
                        >
                            <img src="/Real_estate_front/img/icons/filter.svg" alt="filter"/>
                            <span className="ms-2 fs-11 fw-5 color-1">Фильтры</span>
                        </button>
                        <span className="gray-2">Сортировать: </span>
                        <CustomSelect
                            className="gray-2"
                            btnClass="fs-11"
                            checkedOpt={instantFilters.orderBy}
                            // ['По популярности', 'Сначала новые', 'Сначала старые', 'Сначала дешевые', 'Сначала дорогие']
                            options={[{index: 'desc', value: 'Сначала новые'}, {index: 'asc', value: 'Сначала старые'}]}
                            callback={({checkedIndex}) => onSelectHandler(checkedIndex, 'orderBy', setInstantFilters)}
                            notDefaultIndexes={true}
                        />
                    </div>
                    {
                        (view === 'tiled') ?
                            <button type="button" onClick={() => {
                                setView('as-a-list')
                            }} className="btn-view fs-11 d-none d-lg-flex">
                                <span className="me-3">Показать списком</span>
                                <svg width="28" height="22" viewBox="0 0 28 22" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect width="28" height="6" rx="1"/>
                                    <rect y="8" width="28" height="6" rx="1"/>
                                    <rect y="16" width="28" height="6" rx="1"/>
                                </svg>
                            </button> :
                            <button type="button" onClick={() => {
                                setView('tiled')
                            }} className="btn-view fs-11 d-none d-lg-flex">
                                <span className="me-3">Показать плиткой</span>
                                <svg width="28" height="22" viewBox="0 0 28 22" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect width="8" height="6" rx="1"/>
                                    <rect x="10" width="8" height="6" rx="1"/>
                                    <rect x="20" width="8" height="6" rx="1"/>
                                    <rect y="8" width="8" height="6" rx="1"/>
                                    <rect x="10" y="8" width="8" height="6" rx="1"/>
                                    <rect x="20" y="8" width="8" height="6" rx="1"/>
                                    <rect y="16" width="8" height="6" rx="1"/>
                                    <rect x="10" y="16" width="8" height="6" rx="1"/>
                                    <rect x="20" y="16" width="8" height="6" rx="1"/>
                                </svg>
                            </button>
                    }
                </div>
                <div className="row">
                    <div className="d-none d-xxl-block col-xxl-3">
                        <div className="fs-11 mb-4">Найдено {catalogData.foundCount} объявлений</div>
                        <form className="shad-box p-4 mb-4">
                            <fieldset className="mb-4">
                                <legend className="title-font fs-12 fw-6 mb-3">Количество комнат</legend>
                                <label className="ps-2 mb-3">
                                    <input
                                        type="checkbox"
                                        name="rooms"
                                        value="1room"
                                        checked={instantFilters.roomTypes?.includes(1) || false}
                                        onChange={() => onMultiCheckboxHandler('roomTypes', 1, setInstantFilters)}
                                    />
                                    <span className="fs-11 ms-3">1 комнатная</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input
                                        type="checkbox"
                                        name="rooms"
                                        value="2room"
                                        checked={instantFilters.roomTypes?.includes(2) || false}
                                        onChange={() => onMultiCheckboxHandler('roomTypes', 2, setInstantFilters)}
                                    />
                                    <span className="fs-11 ms-3">2 комнатная</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input
                                        type="checkbox"
                                        name="rooms"
                                        value="3room"
                                        checked={instantFilters.roomTypes?.includes(3) || false}
                                        onChange={() => onMultiCheckboxHandler('roomTypes', 3, setInstantFilters)}
                                    />
                                    <span className="fs-11 ms-3">3 комнатная</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input
                                        type="checkbox"
                                        name="rooms"
                                        value="4room"
                                        checked={instantFilters.roomTypes?.includes(4) || false}
                                        onChange={() => onMultiCheckboxHandler('roomTypes', 4, setInstantFilters)}
                                    />
                                    <span className="fs-11 ms-3">4 комнатная</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input
                                        type="checkbox"
                                        name="rooms"
                                        value="5room"
                                        checked={instantFilters.roomTypes?.includes(5) || false}
                                        onChange={() => onMultiCheckboxHandler('roomTypes', 5, setInstantFilters)}
                                    />
                                    <span className="fs-11 ms-3">5 комнатная</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input
                                        type="checkbox"
                                        name="rooms"
                                        value="6room"
                                        checked={instantFilters.roomTypes?.includes(6) || false}
                                        onChange={() => onMultiCheckboxHandler('roomTypes', 6, setInstantFilters)}
                                    />
                                    <span className="fs-11 ms-3">6 комнатная</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input
                                        type="checkbox"
                                        name="rooms"
                                        value="studio"
                                        checked={instantFilters.roomTypes?.includes(0) || false}
                                        onChange={() => onMultiCheckboxHandler('roomTypes', 0, setInstantFilters)}
                                    />
                                    <span className="fs-11 ms-3">Студия</span>
                                </label>
                            </fieldset>
                            <fieldset className="mb-4">
                                <legend className="title-font fs-12 fw-6 mb-3">Цена</legend>
                                <div className="d-flex align-items-baseline">
                                    <div className="fs-11 me-2">От</div>
                                    <input
                                        type="number"
                                        className="w-100 price me-3"
                                        value={instantFilters.startPrice || ''}
                                        onChange={(e) => onInputHandler(e, 'startPrice', true, setInstantFilters)}
                                    />
                                    <div className="fs-11 me-2">До</div>
                                    <input
                                        type="number"
                                        className="w-100 price"
                                        value={instantFilters.endPrice || ''}
                                        onChange={(e) => onInputHandler(e, 'endPrice', true, setInstantFilters)}
                                    />
                                </div>
                            </fieldset>
                            <fieldset className="mb-4">
                                <legend className="title-font fs-12 fw-6 mb-3">Срок аренды</legend>
                                <label className="ps-2 mb-3">
                                    <input
                                        type="checkbox"
                                        name="lease"
                                        value="lease 1"
                                        checked={instantFilters.rentalTypes?.includes(2) || false}
                                        onChange={() => onMultiCheckboxHandler('rentalTypes', 2, setInstantFilters)}
                                    />
                                    <span className="fs-11 ms-3">Посуточно</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input
                                        type="checkbox"
                                        name="lease"
                                        value="lease 2"
                                        checked={instantFilters.rentalTypes?.includes(1) || false}
                                        onChange={() => onMultiCheckboxHandler('rentalTypes', 1, setInstantFilters)}
                                    />
                                    <span className="fs-11 ms-3">Несколько месяцев</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input
                                        type="checkbox"
                                        name="lease"
                                        value="lease 3"
                                        checked={instantFilters.rentalTypes?.includes(0) || false}
                                        onChange={() => onMultiCheckboxHandler('rentalTypes', 0, setInstantFilters)}
                                    />
                                    <span className="fs-11 ms-3">Длительная аренда</span>
                                </label>
                            </fieldset>
                            <fieldset className="mb-4">
                                <legend className="title-font fs-12 fw-6 mb-3">Ремонт</legend>
                                <label className="ps-2 mb-3">
                                    <input
                                        type="checkbox"
                                        name="repair"
                                        value="no repair"
                                        checked={instantFilters.repairTypes?.includes(3) || false}
                                        onChange={() => onMultiCheckboxHandler('repairTypes', 3, setInstantFilters)}
                                    />
                                    <span className="fs-11 ms-3">Без ремонта</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input
                                        type="checkbox"
                                        name="repair"
                                        value="repair 1"
                                        checked={instantFilters.repairTypes?.includes(0) || false}
                                        onChange={() => onMultiCheckboxHandler('repairTypes', 0, setInstantFilters)}
                                    />
                                    <span className="fs-11 ms-3">Косметический</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input
                                        type="checkbox"
                                        name="repair"
                                        value="repair 2"
                                        checked={instantFilters.repairTypes?.includes(1) || false}
                                        onChange={() => onMultiCheckboxHandler('repairTypes', 1, setInstantFilters)}
                                    />
                                    <span className="fs-11 ms-3">Евроремонт</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input
                                        type="checkbox"
                                        name="repair"
                                        value="repair 3"
                                        checked={instantFilters.repairTypes?.includes(2) || false}
                                        onChange={() => onMultiCheckboxHandler('repairTypes', 2, setInstantFilters)}
                                    />
                                    <span className="fs-11 ms-3">Дизайнерский</span>
                                </label>
                            </fieldset>
                            <button type="button" className="btn btn-1 w-100 fs-15" data-bs-toggle="modal"
                                    data-bs-target="#desktopFilters">Еще фильтры
                            </button>
                            <button type="button" onClick={onResetInstantFilters}
                                    className="color-1 fs-11 fw-5 mx-auto mt-2">Очистить фильтр
                            </button>
                        </form>


                    </div>
                    <div className="col-12 col-xxl-9">
                        <div
                            className={(view === 'tiled') ? "row row-cols-sm-2 row-cols-lg-3 g-2 g-md-3 g-lg-4" : "row g-2 g-md-3 g-lg-4"}>
                            {
                                catalogData.catalog?.map(catalogItem => (
                                    <div key={catalogItem.id}>
                                        <Card
                                            type={view}
                                            pictures={[catalogItem.image, catalogItem.images]}
                                            isVip={catalogItem.isVip}
                                            isHot={catalogItem.isHot}
                                            title={catalogItem.title}
                                            price={catalogItem.price}
                                            transactionType={catalogItem.transactionType}
                                            addressName={catalogItem.residentComplexForUser}
                                            address={catalogItem.address}
                                            metro={catalogItem.metro}
                                            text={catalogItem.description}
                                            date={catalogItem.createdAtForUser}
                                            id={catalogItem.id}
                                            uuid={catalogItem.uuid}
                                            user={catalogItem.user}
                                            communalPrice={catalogItem.communalPrice}
                                            pledge={catalogItem.pledge}
                                            commissionForUser={catalogItem.commissionForUser}
                                            prepaymentTypeForUser={catalogItem.prepaymentTypeForUser}
                                            rentalTypeForUser={catalogItem.rentalTypeForUser}
                                            wishlistStatus={catalogItem.wishlistStatus}
                                            userAvatar={catalogItem.user?.avatar}

                                        />
                                    </div>
                                ))
                            }
                        </div>
                        <nav className="mt-4">
                            <PaginationCustom meta={catalogData.meta} baseUrl='catalog' searchParams={searchParams}/>
                        </nav>
                    </div>
                </div>
            </section>
            <CatalogFilters
                instantFilters={instantFilters}
                onResetInstantFilters={onResetInstantFilters}
                onApplyFilters={onApplyFilters}
                isClearFilters={isClearFilters}
                setIsClearFilters={setIsClearFilters}
                foundCount={catalogData.foundCount}
                isShowCanvas={isShowCanvas}
                setIsShowCanvas={setIsShowCanvas}
                isShowMap={isShowMap}
            />
            <CatalogOffcanvasCards cards={offcanvasCards}/>
            {
                isShowMap && mapCenter
                    ? <YMap
                        className='y-maps-catalog'
                        mapCenter={mapCenter}
                        callback={cards => setOffcanvasCards(cards)}
                    />
                    : null
            }
        </main>
    )
}

export default withYMaps(Catalog)
