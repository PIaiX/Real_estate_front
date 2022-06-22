import React, {useState, useEffect, useRef} from 'react';
import {useParams, useSearchParams} from 'react-router-dom';
import CustomSelect from '../components/CustomSelect';
import CustomSelectMultyDual from '../components/CustomSelectMultyDual';
import Card from '../components/Card';
import CatalogFilters from '../components/CatalogFilters';
import PaginationCustom from '../components/PaginationCustom';
import {getCatalog} from '../API/catalog';
import {getTypesEstate} from '../API/typesEstate';
import useUpdateSizeSecond from '../hooks/useUpdateSizeSecond';
import {useSelector} from 'react-redux';
import useSearchForm from '../hooks/useSearchForm';
import {onSelectHandler, onInputHandler, onMultiCheckboxHandler, onSingleParamQuery} from '../helpers/collectDataFromForm'
import {AddressSuggestions} from 'react-dadata';
import Breadcrumbs from '../components/Breadcrumbs';
import YMapContainer from '../components/YMapContainer';
import env from '../config/env'

const Catalog = () => {
    const [view, setView] = useUpdateSizeSecond('991px')
    const {page} = useParams();
    const [searchParams, setSearchParams] = useSearchParams()
    const initialFilters = {
        transactionType: +searchParams.get('transactionType'),
        typesEstate: +searchParams.get('typesEstate'),
        orderBy: 'asc'
    }
    const [filters, setFilters] = useState(initialFilters)
    const [additionalFilters, setAdditionalFilters] = useState({})
    const [estateIds, setEstateIds] = useState([])
    const [catalogData, setCatalogData] = useState({})
    const [isShowMap, setIsShowMap] = useState(false)
    const [isShowOffcanvasFilters, setIsShowOffcanvasFilters] = useState(false)
    const userId = useSelector(state => state.currentUser?.id)
    const {search, setSearch, onSearch} = useSearchForm('')
    const selectedCity = useSelector(state => state.selectedCity)

    useEffect(() => {
        getTypesEstate()
            .then(response => response.find(type => type.id === filters.typesEstate))
            .then(result => {
                setEstateIds(result
                    ? result.estates.map(item => ({index: item.id, value: item.name}))
                    : []
                )
            })
    }, [])

    useEffect(() => {
        getCatalog(page, 4, userId, filters)
            .then(response => setCatalogData({
                    meta: response.body,
                    catalog: response.body.data,
                    foundCount: response.body.meta.total
                })
            )
    }, [page, userId, filters])

    useEffect(() => {
        setSearchParams({
            'transactionType': filters.transactionType,
            'typesEstate': filters.typesEstate
        })
    }, [filters.transactionType, filters.typesEstate])

    const onResetFilters = () => {
        setFilters(initialFilters)
        setAdditionalFilters({})
    }

    const onApplyFilters = () => setFilters(prevFilters => ({...prevFilters, ...additionalFilters}))

    useEffect(() => {
        setAdditionalFilters(prevAdditionalFilters => ({...prevAdditionalFilters, ...filters}))
    }, [filters])

    useEffect(() => {
        setIsShowMap(false)
    }, [selectedCity])

    return (
        <main className={`catalog ${isShowMap ? 'shown-map' : ''}`}>
            <Breadcrumbs/>
            <section className="sec-6 container pb-5">
                <h1 className='catalog__title'>Каталог недвижимости</h1>
                <form className="form-search mb-4 mb-sm-5">
                    <div className="map-search">
                        <button
                            type="button"
                            className="d-flex d-lg-none align-items-center"
                            onClick={() => setIsShowOffcanvasFilters(prevIsShowOffcanvasFilters => !prevIsShowOffcanvasFilters)}
                        >
                            <img src="/img/icons/filter.svg" alt="filter"/>
                            <span className="ms-2 fs-11 fw-5 color-1">Фильтры</span>
                        </button>
                        <button
                            type="button"
                            className="d-flex align-items-center"
                            onClick={() => setIsShowMap(prevIsShowMap => !prevIsShowMap)}
                        >
                            <img src="/img/icons/pin.svg" alt="map pin"/>
                            <span className="ms-2 fs-11 fw-5 color-2">Показать на карте</span>
                        </button>
                    </div>
                    <CustomSelect
                        modificator="catalog-filter"
                        className="sel-1"
                        btnClass="btn btn-2 px-2 px-sm-3"
                        options={['Снять', 'Купить']}
                        checkedOpt={filters.transactionType}
                        callback={({checkedIndex}) => onSelectHandler(checkedIndex, 'transactionType', setFilters)}
                    />
                    <CustomSelect
                        modificator="catalog-filter"
                        className="sel-2"
                        btnClass="btn btn-2 px-2 px-sm-3"
                        options={estateIds}
                        checkedOpt={estateIds.length ? estateIds[0].index : 0}
                        callback={({checkedIndex}) => onSelectHandler(checkedIndex, 'estateId', setFilters)}
                    />
                    <CustomSelectMultyDual
                        className="sel-3"
                        btnClass="btn btn-2 px-2 px-sm-3"
                        checkedDist={[]}
                        checkedSt={[]}
                        districts={['Авиастроительный', 'Вахитовский', 'Кировский', 'Московский', 'Ново-Савиновский', 'Приволжский', 'Советский']}
                        stations={['Авиастроительная', 'Северный вокзал', 'Яшьлек', 'Козья слобода', 'Кремлёвская', 'Площадь Габдуллы Тукая', 'Суконная слобода', 'Аметьево', 'Горки', 'Проспект Победы', 'Дубравная']}
                        callback={(indexes1, indexes2) => {
                            setFilters(prevFilters => {
                                return {
                                    ...prevFilters,
                                    district: [...indexes1],
                                    metro: [...indexes2]
                                }
                            })
                        }}
                    />
                    <AddressSuggestions
                        token={env.DADATA_TOKEN}
                        value={search && ''}
                        onChange={e => setSearch(e.value)}
                        containerClassName='catalog__search'
                        inputProps={{placeholder: 'Адрес или ЖК'}}
                        delay={300}
                    />
                    <button
                        type="submit"
                        className="btn btn-1"
                        onClick={e => onSearch(e, 'addressOrResidentalComplex', setFilters)}
                    >
                        Поиск
                    </button>
                    <div
                        className="popular-queries"
                    >
                        <div>Популярные запросы:</div>
                        <button
                            type="button"
                            onClick={() => onSingleParamQuery('roomTypes', [0], setFilters, initialFilters)}
                        >
                            Студия
                        </button>
                        <button
                            type="button"
                            onClick={() => onSingleParamQuery('roomTypes', [1], setFilters, initialFilters)}
                        >
                            1 комнатная
                        </button>
                        <button
                            type="button"
                            onClick={() => onSingleParamQuery('roomTypes', [2], setFilters, initialFilters)}
                        >
                            2 комнатная
                        </button>
                        <button
                            type="button"
                            onClick={() => onSingleParamQuery('roomTypes', [3], setFilters, initialFilters)}
                        >
                            3 комнатная
                        </button>
                        <button
                            type="button"
                            onClick={() => onSingleParamQuery('hasFurniture', true, setFilters, initialFilters)}
                        >
                            С мебелью
                        </button>
                        <button
                            type="button"
                            onClick={() => onSingleParamQuery('hasFurniture', false, setFilters, initialFilters)}
                        >
                            Без мебели
                        </button>
                        <button
                            type="button"
                            onClick={() => onSingleParamQuery('elevatorTypes', [1, 2, 3], setFilters, initialFilters)}
                        >
                            Есть лифт
                        </button>
                        <button
                            type="button"
                            onClick={() => onSingleParamQuery('withPets', true, setFilters, initialFilters)}
                        >
                            Можно с животными
                        </button>
                        <button
                            type="button"
                            onClick={() => onSingleParamQuery('withKids', true, setFilters, initialFilters)}
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
                            onClick={() => setIsShowOffcanvasFilters(prevIsShowCanvas => !prevIsShowCanvas)}
                        >
                            <img src="/img/icons/filter.svg" alt="filter"/>
                            <span className="ms-2 fs-11 fw-5 color-1">Фильтры</span>
                        </button>
                        <span className="gray-2">Сортировать: </span>
                        <CustomSelect
                            modificator="orderby"
                            className="gray-2"
                            btnClass="fs-11"
                            checkedOpt={filters.orderBy}
                            // ['По популярности', 'Сначала новые', 'Сначала старые', 'Сначала дешевые', 'Сначала дорогие']
                            options={[{index: 'desc', value: 'Сначала новые'}, {index: 'asc', value: 'Сначала старые'}]}
                            callback={({checkedIndex}) => onSelectHandler(checkedIndex, 'orderBy', setFilters)}
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
                                        checked={filters?.roomTypes?.includes(1) || false}
                                        onChange={() => onMultiCheckboxHandler('roomTypes', 1, setFilters)}
                                    />
                                    <span className="fs-11 ms-3">1 комнатная</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input
                                        type="checkbox"
                                        name="rooms"
                                        value="2room"
                                        checked={filters?.roomTypes?.includes(2) || false}
                                        onChange={() => onMultiCheckboxHandler('roomTypes', 2, setFilters)}
                                    />
                                    <span className="fs-11 ms-3">2 комнатная</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input
                                        type="checkbox"
                                        name="rooms"
                                        value="3room"
                                        checked={filters?.roomTypes?.includes(3) || false}
                                        onChange={() => onMultiCheckboxHandler('roomTypes', 3, setFilters)}
                                    />
                                    <span className="fs-11 ms-3">3 комнатная</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input
                                        type="checkbox"
                                        name="rooms"
                                        value="4room"
                                        checked={filters?.roomTypes?.includes(4) || false}
                                        onChange={() => onMultiCheckboxHandler('roomTypes', 4, setFilters)}
                                    />
                                    <span className="fs-11 ms-3">4 комнатная</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input
                                        type="checkbox"
                                        name="rooms"
                                        value="5room"
                                        checked={filters?.roomTypes?.includes(5) || false}
                                        onChange={() => onMultiCheckboxHandler('roomTypes', 5, setFilters)}
                                    />
                                    <span className="fs-11 ms-3">5 комнатная</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input
                                        type="checkbox"
                                        name="rooms"
                                        value="6room"
                                        checked={filters?.roomTypes?.includes(6) || false}
                                        onChange={() => onMultiCheckboxHandler('roomTypes', 6, setFilters)}
                                    />
                                    <span className="fs-11 ms-3">6 комнатная</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input
                                        type="checkbox"
                                        name="rooms"
                                        value="studio"
                                        checked={filters?.roomTypes?.includes(0) || false}
                                        onChange={() => onMultiCheckboxHandler('roomTypes', 0, setFilters)}
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
                                        value={filters?.startPrice || ''}
                                        onChange={(e) => onInputHandler(e, 'startPrice', true, setFilters)}
                                    />
                                    <div className="fs-11 me-2">До</div>
                                    <input
                                        type="number"
                                        className="w-100 price"
                                        value={filters?.endPrice || ''}
                                        onChange={(e) => onInputHandler(e, 'endPrice', true, setFilters)}
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
                                        checked={filters?.rentalTypes?.includes(2) || false}
                                        onChange={() => onMultiCheckboxHandler('rentalTypes', 2, setFilters)}
                                    />
                                    <span className="fs-11 ms-3">Посуточно</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input
                                        type="checkbox"
                                        name="lease"
                                        value="lease 2"
                                        checked={filters?.rentalTypes?.includes(1) || false}
                                        onChange={() => onMultiCheckboxHandler('rentalTypes', 1, setFilters)}
                                    />
                                    <span className="fs-11 ms-3">Несколько месяцев</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input
                                        type="checkbox"
                                        name="lease"
                                        value="lease 3"
                                        checked={filters?.rentalTypes?.includes(0) || false}
                                        onChange={() => onMultiCheckboxHandler('rentalTypes', 0, setFilters)}
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
                                        checked={filters?.repairTypes?.includes(3) || false}
                                        onChange={() => onMultiCheckboxHandler('repairTypes', 3, setFilters)}
                                    />
                                    <span className="fs-11 ms-3">Без ремонта</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input
                                        type="checkbox"
                                        name="repair"
                                        value="repair 1"
                                        checked={filters?.repairTypes?.includes(0) || false}
                                        onChange={() => onMultiCheckboxHandler('repairTypes', 0, setFilters)}
                                    />
                                    <span className="fs-11 ms-3">Косметический</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input
                                        type="checkbox"
                                        name="repair"
                                        value="repair 2"
                                        checked={filters?.repairTypes?.includes(1) || false}
                                        onChange={() => onMultiCheckboxHandler('repairTypes', 1, setFilters)}
                                    />
                                    <span className="fs-11 ms-3">Евроремонт</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input
                                        type="checkbox"
                                        name="repair"
                                        value="repair 3"
                                        checked={filters?.repairTypes?.includes(2) || false}
                                        onChange={() => onMultiCheckboxHandler('repairTypes', 2, setFilters)}
                                    />
                                    <span className="fs-11 ms-3">Дизайнерский</span>
                                </label>
                            </fieldset>
                            <button type="button" className="btn btn-1 w-100 fs-15" data-bs-toggle="modal"
                                    data-bs-target="#desktopFilters">Еще фильтры
                            </button>
                            <button type="button" onClick={onResetFilters}
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
                filters={additionalFilters}
                setFilters={setAdditionalFilters}
                onResetFilters={onResetFilters}
                onApplyFilters={onApplyFilters}
                foundCount={catalogData.foundCount}
                isShowOffcanvasFilters={isShowOffcanvasFilters}
                setIsShowOffcanvasFilters={setIsShowOffcanvasFilters}
            />
            {isShowMap && <YMapContainer
                catalog={catalogData.catalog}
                isShowMap={isShowMap}
                filters={filters}
                setFilters={setFilters}
                onResetFilters={onResetFilters}
                onApplyFilters={onApplyFilters}
                foundCount={catalogData.foundCount}
            />}
        </main>
    )
}

export default Catalog