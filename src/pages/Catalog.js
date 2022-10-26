import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import Card from '../components/Card';
import CatalogFilters from '../components/CatalogFilters';
import {getCatalog, getDistricts} from '../API/catalog';
import {getTypesEstate} from '../API/typesEstate';
import useUpdateSizeSecond from '../hooks/useUpdateSizeSecond';
import {useSelector} from 'react-redux';
import useSearchForm from '../hooks/useSearchForm';
import {onInputHandler, onMultiCheckboxHandler, onSelectHandler} from '../helpers/collectDataFromForm'
import {AddressSuggestions} from 'react-dadata';
import Breadcrumbs from '../components/Breadcrumbs';
import YMapContainer from '../components/YMapContainer';
import env from '../config/env'
import CustomSelect from '../components/CustomSelect';
import useDebounce from '../hooks/debounce';
import PopularQueries from '../components/PopularQueries';
import MultiCheckboxSelect from '../components/MultiCheckboxSelect';
import Loader from '../components/Loader';
import usePagination from "../hooks/pagination";
import Pagination from "../components/Pagination";

const Catalog = ({routeName}) => {
    const [view, setView] = useUpdateSizeSecond('991px')
    const [searchParams, setSearchParams] = useSearchParams()
    const [districts, setDistricts] = useState([])
    const initialFilters = {
        transactionType: +searchParams.get('transactionType'),
        typesEstate: +searchParams.get('typesEstate'),
        districts: [],
        orderBy: 'asc'
    }
    const [filters, setFilters] = useState(initialFilters)
    const [additionalFilters, setAdditionalFilters] = useState({})
    const [estateIds, setEstateIds] = useState([])
    const [catalogData, setCatalogData] = useState({isLoaded: false, foundCount: 0, catalog: []})
    const [isShowMap, setIsShowMap] = useState(false)
    const [isShowOffcanvasFilters, setIsShowOffcanvasFilters] = useState(false)
    const userId = useSelector(state => state.currentUser?.id)
    const {search, setSearch, onSearch} = useSearchForm('')
    const selectedCity = useSelector(state => state.selectedCity)
    const debouncedFilters = useDebounce(filters, 500)
    const sugData = useRef(null)
    const catalogPag = usePagination(6)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [catalogPag.currentPage])

    useEffect(() => {
        getTypesEstate()
            .then(response => response.find(type => type.id === filters.typesEstate))
            .then(result => result && result.estates.map(item => ({title: item.name, value: item.id})))
            .then(estateIds => {
                setEstateIds(estateIds)
                estateIds?.length && onSelectHandler(estateIds[0].value, 'estateId', setFilters)
            })
    }, [])

    useEffect(() => {
        (selectedCity && catalogPag.currentPage) &&
        getCatalog(catalogPag.currentPage, 6, userId, selectedCity, debouncedFilters)
            .then(response => {
                    setCatalogData({
                        isLoaded: true,
                        meta: response.body,
                        catalog: response.body.data,
                        foundCount: response.body.meta.total
                    })
                }
            )
            .catch((err) => {
                return err.message
            })
    }, [catalogPag.currentPage, userId, selectedCity, debouncedFilters])

    useEffect(() => setSearchParams({
        'transactionType': filters.transactionType,
        'typesEstate': filters.typesEstate
    }), [filters.transactionType, filters.typesEstate])

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

        selectedCity && getDistricts(selectedCity)
            .then(result => result && result.map(item => ({title: item.name, value: item.id})))
            .then(result => setDistricts(result))
    }, [selectedCity])

    const searchButton = useCallback(() => {
        catalogPag.setStartingPage(1)
        catalogPag.setCurrentPage(1)
    }, [])

    return (
        <main className={`catalog ${isShowMap ? 'shown-map' : ''}`}>
            <Breadcrumbs currentRouteName={routeName}/>
            <section className="sec-6 container pb-5">
                <h1 className='catalog__title'>Каталог недвижимости</h1>
                <form className="form-search mb-4 mb-sm-3">
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
                        className="sel-1"
                        btnClass="btn btn-2 px-2 px-sm-3"
                        options={['Снять', 'Купить']}
                        checkedOptions={[filters.transactionType]}
                        mode='values'
                        callback={({value}) => {
                            onSelectHandler(value, 'transactionType', setFilters)
                            catalogPag.setStartingPage(1)
                            catalogPag.setCurrentPage(1)
                        }}
                    />
                    <CustomSelect
                        className="sel-2"
                        btnClass="btn btn-2 px-2 px-sm-3"
                        options={estateIds}
                        checkedOptions={[filters.estateId]}
                        mode='values'
                        callback={({value}) => {
                            onSelectHandler(value, 'estateId', setFilters)
                            catalogPag.setStartingPage(1)
                            catalogPag.setCurrentPage(1)
                        }}
                    />
                    <MultiCheckboxSelect
                        modificator='district'
                        className='sel-3'
                        btnClass='btn btn-2 px-2 px-sm-3'
                        checkedOptions={filters.districts}
                        title='Районы'
                        mode='values'
                        options={districts}
                        callback={({value}) => onMultiCheckboxHandler('districts', value, setFilters)}
                        align='right'
                    />
                    <AddressSuggestions
                        token={env.DADATA_TOKEN}
                        onChange={e => {
                            setSearch(e.value)
                        }}
                        containerClassName='catalog__search'
                        inputProps={{
                            placeholder: 'Адрес или ЖК',
                            onChange: (e) => {
                                setSearch(sugData.current.textInput.value)
                            }
                        }}
                        delay={300}
                        ref={sugData}
                    />
                    <button
                        type="submit"
                        className="btn btn-1"
                        onClick={e => {
                            onSearch(e, 'addressOrResidentalComplex', setFilters)
                        }}
                    >
                        Поиск
                    </button>
                    {/*<PopularQueries initialFilters={initialFilters} setFilters={setFilters}/>*/}
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
                            btnClass="fs-11"
                            checkedOptions={[filters.orderBy]}
                            options={[{title: 'Сначала новые', value: 'desc'}, {title: 'Сначала старые', value: 'asc'}]}
                            mode='values'
                            callback={({value}) => onSelectHandler(value, 'orderBy', setFilters)}
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
                        {
                            +searchParams.get('typesEstate') === 1 &&
                            <form className="shad-box p-4 mb-4">
                                <fieldset className="mb-4">
                                    <legend className="title-font fs-12 fw-6 mb-3">Количество комнат:</legend>
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
                                        <span className="fs-11 ms-3">5+ комнат</span>
                                    </label>
                                    <label className="ps-2 mb-3">
                                        <input
                                            type="checkbox"
                                            name="rooms"
                                            value="6room"
                                            checked={filters?.roomTypes?.includes(7) || false}
                                            onChange={() => onMultiCheckboxHandler('roomTypes', 7, setFilters)}
                                        />
                                        <span className="fs-11 ms-3">Свободная планировка</span>
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
                                {
                                    +searchParams.get('transactionType') === 0 &&
                                    <fieldset className="mb-4">
                                        <legend className="title-font fs-12 fw-6 mb-3">Срок аренды</legend>
                                        <label className="ps-2 mb-3">
                                            <input
                                                type="checkbox"
                                                name="lease"
                                                value="lease 1"
                                                checked={filters?.rentalTypes?.includes(0) || false}
                                                onChange={() => onMultiCheckboxHandler('rentalTypes', 0, setFilters)}
                                            />
                                            <span className="fs-11 ms-3">Посуточно</span>
                                        </label>
                                        <label className="ps-2 mb-3">
                                            <input
                                                type="checkbox"
                                                name="lease"
                                                value="lease 2"
                                                checked={filters?.rentalTypes?.includes(3) || false}
                                                onChange={() => onMultiCheckboxHandler('rentalTypes', 3, setFilters)}
                                            />
                                            <span className="fs-11 ms-3">Краткосрочно</span>
                                        </label>
                                        <label className="ps-2 mb-3">
                                            <input
                                                type="checkbox"
                                                name="lease"
                                                value="lease 3"
                                                checked={filters?.rentalTypes?.includes(1) || false}
                                                onChange={() => onMultiCheckboxHandler('rentalTypes', 1, setFilters)}
                                            />
                                            <span className="fs-11 ms-3">Длительная аренда</span>
                                        </label>
                                    </fieldset>
                                }
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
                        }
                        {
                            +searchParams.get('typesEstate') === 2 &&
                            <form className="shad-box p-4 mb-4">
                                <fieldset className="mb-4">
                                    <legend className="title-font fs-12 fw-6 mb-3">Расположение:</legend>
                                    <label className="ps-2 mb-3">
                                        <input
                                            type="checkbox"
                                            name="locationType"
                                            value="locationType"
                                            checked={filters?.locationType?.includes(0) || false}
                                            onChange={() => onMultiCheckboxHandler('locationType', 0, setFilters)}
                                        />
                                        <span className="fs-11 ms-3">Отдельный</span>
                                    </label>
                                    <label className="ps-2 mb-3">
                                        <input
                                            type="checkbox"
                                            name="locationType"
                                            value="locationType"
                                            checked={filters?.locationType?.includes(1) || false}
                                            onChange={() => onMultiCheckboxHandler('locationType', 1, setFilters)}
                                        />
                                        <span className="fs-11 ms-3">Кооперативный</span>
                                    </label>
                                </fieldset>
                                <fieldset className="mb-4">
                                    <legend className="title-font fs-12 fw-6 mb-3">Общая площадь:</legend>
                                    <div className="d-flex align-items-baseline">
                                        <div className="fs-11 me-2">От</div>
                                        <input
                                            type="number"
                                            className="w-100me-3"
                                            value={filters?.startTotalArea || ''}
                                            onChange={(e) => onInputHandler(e, 'startTotalArea', true, setFilters)}
                                        />
                                        <div className="fs-11 me-2">До</div>
                                        <input
                                            type="number"
                                            className="w-100"
                                            value={filters?.endTotalArea || ''}
                                            onChange={(e) => onInputHandler(e, 'endTotalArea', true, setFilters)}
                                        />
                                    </div>
                                </fieldset>
                                <fieldset className="mb-4">
                                    <legend className="title-font fs-12 fw-6 mb-3">Охрана:</legend>
                                    <label className="ps-2 mb-3">
                                        <input
                                            type="checkbox"
                                            name="hasSecurity"
                                            value="hasSecurity"
                                            checked={filters?.hasSecurity?.includes(2) || false}
                                            onChange={() => onMultiCheckboxHandler('hasSecurity', 1, setFilters)}
                                        />
                                        <span className="fs-11 ms-3">Да</span>
                                    </label>
                                    <label className="ps-2 mb-3">
                                        <input
                                            type="checkbox"
                                            name="hasSecurity"
                                            value="hasSecurity"
                                            checked={filters?.hasSecurity?.includes(1) || false}
                                            onChange={() => onMultiCheckboxHandler('hasSecurity', 0, setFilters)}
                                        />
                                        <span className="fs-11 ms-3">Нет</span>
                                    </label>
                                </fieldset>

                                <fieldset className="mb-4">
                                    <legend className="title-font fs-12 fw-6 mb-3">Год постройки:</legend>
                                    <div className="d-flex align-items-baseline">
                                        <div className="fs-11 me-2">От</div>
                                        <input
                                            type="number"
                                            className="w-100 me-3"
                                            value={filters?.yearOfConstruction || ''}
                                            onChange={(e) => onInputHandler(e, 'yearOfConstruction', true, setFilters)}
                                        />
                                    </div>
                                </fieldset>

                                <button type="button" onClick={onResetFilters}
                                        className="color-1 fs-11 fw-5 mx-auto mt-2">Очистить фильтр
                                </button>
                            </form>
                        }
                        {
                            +searchParams.get('typesEstate') === 3 &&
                            <form className="shad-box p-4 mb-4">
                                <fieldset className="mb-4">
                                    <legend className="title-font fs-12 fw-6 mb-3">Площадь, соток</legend>
                                    <div className="d-flex align-items-baseline">
                                        <div className="fs-11 me-2">От</div>
                                        <input
                                            type="number"
                                            className="w-100 me-3"
                                            value={filters?.startAcres || ''}
                                            onChange={(e) => onInputHandler(e, 'startAcres', true, setFilters)}
                                        />
                                        <div className="fs-11 me-2">До</div>
                                        <input
                                            type="number"
                                            className="w-100"
                                            value={filters?.endAcres || ''}
                                            onChange={(e) => onInputHandler(e, 'endAcres', true, setFilters)}
                                        />
                                    </div>
                                </fieldset>
                                <fieldset className="mb-4">
                                    <legend className="title-font fs-12 fw-6 mb-3">Расстояние до города</legend>
                                    <div className="d-flex align-items-baseline">
                                        <div className="fs-11 me-2">От</div>
                                        <input
                                            type="number"
                                            className="w-100 me-3"
                                            value={filters?.startCityDistance || ''}
                                            onChange={(e) => onInputHandler(e, 'startCityDistance', true, setFilters)}
                                        />
                                        <div className="fs-11 me-2">До</div>
                                        <input
                                            type="number"
                                            className="w-100"
                                            value={filters?.endCityDistance || ''}
                                            onChange={(e) => onInputHandler(e, 'endCityDistance', true, setFilters)}
                                        />
                                    </div>
                                </fieldset>
                                <button type="button" onClick={onResetFilters}
                                        className="color-1 fs-11 fw-5 mx-auto mt-2">Очистить фильтр
                                </button>
                            </form>
                        }
                        {
                            +searchParams.get('typesEstate') === 4 &&
                            <form className="shad-box p-4 mb-4">
                                <fieldset className="mb-4">
                                    <legend className="title-font fs-12 fw-6 mb-3">Тип здания</legend>
                                    <label className="ps-2 mb-3">
                                        <input
                                            type="checkbox"
                                            name="buildingType"
                                            value="buildingType"
                                            checked={filters?.buildingType?.includes(0) || false}
                                            onChange={() => onMultiCheckboxHandler('buildingType', 0, setFilters)}
                                        />
                                        <span className="fs-11 ms-3">Бизнес-центр</span>
                                    </label>
                                    <label className="ps-2 mb-3">
                                        <input
                                            type="checkbox"
                                            name="buildingType"
                                            value="buildingType"
                                            checked={filters?.buildingType?.includes(1) || false}
                                            onChange={() => onMultiCheckboxHandler('buildingType', 1, setFilters)}
                                        />
                                        <span className="fs-11 ms-3">Торговый центр</span>
                                    </label>
                                    <label className="ps-2 mb-3">
                                        <input
                                            type="checkbox"
                                            name="buildingType"
                                            value="buildingType"
                                            checked={filters?.buildingType?.includes(2) || false}
                                            onChange={() => onMultiCheckboxHandler('buildingType', 2, setFilters)}
                                        />
                                        <span className="fs-11 ms-3">Административное здание</span>
                                    </label>
                                    <label className="ps-2 mb-3">
                                        <input
                                            type="checkbox"
                                            name="buildingType"
                                            value="buildingType"
                                            checked={filters?.buildingType?.includes(3) || false}
                                            onChange={() => onMultiCheckboxHandler('buildingType', 3, setFilters)}
                                        />
                                        <span className="fs-11 ms-3">Жилой дом</span>
                                    </label>
                                    <label className="ps-2 mb-3">
                                        <input
                                            type="checkbox"
                                            name="buildingType"
                                            value="buildingType"
                                            checked={filters?.buildingType?.includes(4) || false}
                                            onChange={() => onMultiCheckboxHandler('buildingType', 4, setFilters)}
                                        />
                                        <span className="fs-11 ms-3">Другое</span>
                                    </label>
                                </fieldset>
                                <fieldset className="mb-4">
                                    <legend className="title-font fs-12 fw-6 mb-3">Год постройки</legend>
                                    <div className="d-flex align-items-baseline">
                                        <div className="fs-11 me-2">От</div>
                                        <input
                                            type="number"
                                            className="w-100 me-3"
                                            value={filters?.yearOfConstruction || ''}
                                            onChange={(e) => onInputHandler(e, 'yearOfConstruction', true, setFilters)}
                                        />
                                    </div>
                                </fieldset>
                                <fieldset className="mb-4">
                                    <legend className="title-font fs-12 fw-6 mb-3">Тип дома</legend>
                                    <label className="ps-2 mb-3">
                                        <input
                                            type="checkbox"
                                            name="houseBuildingType"
                                            value="houseBuildingType"
                                            checked={filters?.houseBuildingType?.includes(0) || false}
                                            onChange={() => onMultiCheckboxHandler('houseBuildingType', 0, setFilters)}
                                        />
                                        <span className="fs-11 ms-3">Кирпичный</span>
                                    </label>
                                    <label className="ps-2 mb-3">
                                        <input
                                            type="checkbox"
                                            name="houseBuildingType"
                                            value="houseBuildingType"
                                            checked={filters?.houseBuildingType?.includes(1) || false}
                                            onChange={() => onMultiCheckboxHandler('houseBuildingType', 1, setFilters)}
                                        />
                                        <span className="fs-11 ms-3">Кирпично-монолитный</span>
                                    </label>
                                    <label className="ps-2 mb-3">
                                        <input
                                            type="checkbox"
                                            name="houseBuildingType"
                                            value="houseBuildingType"
                                            checked={filters?.houseBuildingType?.includes(2) || false}
                                            onChange={() => onMultiCheckboxHandler('houseBuildingType', 2, setFilters)}
                                        />
                                        <span className="fs-11 ms-3">Панельный</span>
                                    </label>
                                    <label className="ps-2 mb-3">
                                        <input
                                            type="checkbox"
                                            name="houseBuildingType"
                                            value="houseBuildingType"
                                            checked={filters?.houseBuildingType?.includes(3) || false}
                                            onChange={() => onMultiCheckboxHandler('houseBuildingType', 3, setFilters)}
                                        />
                                        <span className="fs-11 ms-3">Монолитный</span>
                                    </label>
                                    <label className="ps-2 mb-3">
                                        <input
                                            type="checkbox"
                                            name="houseBuildingType"
                                            value="houseBuildingType"
                                            checked={filters?.houseBuildingType?.includes(4) || false}
                                            onChange={() => onMultiCheckboxHandler('houseBuildingType', 4, setFilters)}
                                        />
                                        <span className="fs-11 ms-3">Блочный</span>
                                    </label>
                                    <label className="ps-2 mb-3">
                                        <input
                                            type="checkbox"
                                            name="houseBuildingType"
                                            value="houseBuildingType"
                                            checked={filters?.houseBuildingType?.includes(5) || false}
                                            onChange={() => onMultiCheckboxHandler('houseBuildingType', 5, setFilters)}
                                        />
                                        <span className="fs-11 ms-3">Деревянный</span>
                                    </label>
                                    <label className="ps-2 mb-3">
                                        <input
                                            type="checkbox"
                                            name="houseBuildingType"
                                            value="houseBuildingType"
                                            checked={filters?.houseBuildingType?.includes(6) || false}
                                            onChange={() => onMultiCheckboxHandler('houseBuildingType', 6, setFilters)}
                                        />
                                        <span className="fs-11 ms-3">Керамзитный</span>
                                    </label>
                                    <label className="ps-2 mb-3">
                                        <input
                                            type="checkbox"
                                            name="houseBuildingType"
                                            value="houseBuildingType"
                                            checked={filters?.houseBuildingType?.includes(7) || false}
                                            onChange={() => onMultiCheckboxHandler('houseBuildingType', 7, setFilters)}
                                        />
                                        <span className="fs-11 ms-3">Газоблок</span>
                                    </label>
                                    <label className="ps-2 mb-3">
                                        <input
                                            type="checkbox"
                                            name="houseBuildingType"
                                            value="houseBuildingType"
                                            checked={filters?.houseBuildingType?.includes(8) || false}
                                            onChange={() => onMultiCheckboxHandler('houseBuildingType', 8, setFilters)}
                                        />
                                        <span className="fs-11 ms-3">Пеноблок</span>
                                    </label>
                                    <label className="ps-2 mb-3">
                                        <input
                                            type="checkbox"
                                            name="houseBuildingType"
                                            value="houseBuildingType"
                                            checked={filters?.houseBuildingType?.includes(9) || false}
                                            onChange={() => onMultiCheckboxHandler('houseBuildingType', 9, setFilters)}
                                        />
                                        <span className="fs-11 ms-3">Армолитовые блоки</span>
                                    </label>
                                    <label className="ps-2 mb-3">
                                        <input
                                            type="checkbox"
                                            name="houseBuildingType"
                                            value="houseBuildingType"
                                            checked={filters?.houseBuildingType?.includes(10) || false}
                                            onChange={() => onMultiCheckboxHandler('houseBuildingType', 10, setFilters)}
                                        />
                                        <span className="fs-11 ms-3">Сип-панели</span>
                                    </label>
                                    <label className="ps-2 mb-3">
                                        <input
                                            type="checkbox"
                                            name="houseBuildingType"
                                            value="houseBuildingType"
                                            checked={filters?.houseBuildingType?.includes(11) || false}
                                            onChange={() => onMultiCheckboxHandler('houseBuildingType', 11, setFilters)}
                                        />
                                        <span className="fs-11 ms-3">Смешанные</span>
                                    </label>
                                </fieldset>
                                <button type="button" className="btn btn-1 w-100 fs-15" data-bs-toggle="modal"
                                        data-bs-target="#desktopFilters">Еще фильтры
                                </button>
                                <button type="button" onClick={onResetFilters}
                                        className="color-1 fs-11 fw-5 mx-auto mt-2">Очистить фильтр
                                </button>
                            </form>
                        }
                    </div>
                    <div className="col-12 col-xxl-9">
                        <div
                            className={(view === 'tiled') ? "row row-cols-sm-2 row-cols-lg-3 g-2 g-md-3 g-lg-4" : "row g-2 g-md-3 g-lg-4"}>
                            {
                                catalogData?.isLoaded
                                    ? catalogData?.catalog?.length
                                        ? catalogData?.catalog?.map(catalogItem => (
                                            <div key={catalogItem.id}>
                                                <Card
                                                    type={view}
                                                    pictures={[catalogItem.image, catalogItem.images]}
                                                    isVip={catalogItem.isVip}
                                                    isHot={catalogItem.isHot}
                                                    title={catalogItem.title}
                                                    price={catalogItem.price}
                                                    transactionType={catalogItem.transactionType}
                                                    residentalComplex={catalogItem.residentalComplex}
                                                    residentalComplexForUser={catalogItem.residentalComplexForUser}
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
                                                    routeName={routeName}
                                                    estateName={catalogItem?.estate?.name}
                                                    buildingTypeForUser={catalogItem?.buildingTypeForUser}
                                                    realEstateTypeForUser={catalogItem?.estate?.realEstateTypeForUser}
                                                    acres={catalogItem?.acres}
                                                />
                                            </div>
                                        ))
                                        : <h6 className='m-auto p-5 text-center'>Объявлений нет</h6>
                                    : <div className='p-5 w-100 d-flex justify-content-center'><Loader color='#146492'/>
                                    </div>
                            }
                        </div>
                        <nav className="mt-4">
                            {
                                catalogData?.catalog?.length
                                    ? <Pagination
                                        pageLimit={catalogPag.pageLimit}
                                        currentPage={catalogPag.currentPage}
                                        setCurrentPage={catalogPag.setCurrentPage}
                                        pagesDisplayedLimit={3}
                                        itemsAmount={catalogData?.meta?.meta?.total || 0}
                                        startingPage={catalogPag.startingPage}
                                        className='mt-4 mt-sm-5'
                                        setStartingPage={catalogPag.setStartingPage}
                                    />
                                    : null
                            }
                        </nav>
                    </div>
                </div>
            </section>
            <CatalogFilters
                callback={searchButton}
                filters={additionalFilters}
                setFilters={setAdditionalFilters}
                onResetFilters={onResetFilters}
                onApplyFilters={onApplyFilters}
                foundCount={catalogData.foundCount}
                isShowOffcanvasFilters={isShowOffcanvasFilters}
                setIsShowOffcanvasFilters={setIsShowOffcanvasFilters}
                searchParams={+searchParams.get('typesEstate')}
                searchParamsTransactionType={+searchParams.get('transactionType')}
            />
            {
                isShowMap &&
                <YMapContainer
                    catalog={catalogData.catalog}
                    isShowMap={isShowMap}
                    filters={filters}
                    setFilters={setFilters}
                    onResetFilters={onResetFilters}
                    onApplyFilters={onApplyFilters}
                    foundCount={catalogData.foundCount}
                    searchParams={+searchParams.get('typesEstate')}
                    searchParamsTransactionType={+searchParams.get('transactionType')}
                />
            }
        </main>
    )
}

export default Catalog
