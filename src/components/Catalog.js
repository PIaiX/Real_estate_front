import React, {useState, useEffect} from 'react';
import {NavLink, Link, useParams, useSearchParams} from 'react-router-dom';
import CustomSelect from './utilities/CustomSelect';
import CustomSelectMultyDual from './utilities/CustomSelectMultyDual';
import Card from './Card';
import {getCatalog} from './API/catalog';
import {getTypesEstate} from './API/typesestate';
import PaginationCustom from './utilities/PaginationCustom';
import CatalogFilters from './CatalogFilters';
import useUpdateSize from './hooks/useUpdateSize';

export default function Catalog() {
    const [view, setView] = useUpdateSize('991px')
    const {page} = useParams();
    const [searchParams, setSearchParams] = useSearchParams()
    const initialInstantFilters = {
        transactionType: +searchParams.get('transactionType'),
        estateId: +searchParams.get('estateId'),
        orderBy: 'asc',
        startPrice: '',
        endPrice: '',
        address: '',
        roomTypes: [],
        rentalTypes: [],
        repairTypes: [],
    }
    const [meta, setMeta] = useState([])
    const [catalogList, setCatalogList] = useState([])
    const [instantFilters, setInstantFilters] = useState(initialInstantFilters)
    const [search, setSearch] = useState('')
    const [isClearFilters, setIsClearFilters] = useState(null)
    const [estates, setEstates] = useState([])
    const [requestBody, setRequestBody] = useState({})
    const [foundCount, setFoundCount] = useState(null)

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

        const tempRequestBody = {}

        for (const [key, value] of Object.entries(instantFilters)) {
            switch (typeof value) {
                case 'object':
                    if (Array.isArray(value) && value.length) {
                        tempRequestBody[key] = value
                    }
                    break
                case 'string':
                    if (value.length) {
                        tempRequestBody[key] = value
                    }
                    break
                case 'number':
                    tempRequestBody[key] = value
                    break
                case 'boolean':
                    if (value) {
                        tempRequestBody[key] = value
                    }
                    break
            }
        }
        setRequestBody(tempRequestBody)

    }, [instantFilters])

    useEffect(() => {

        const req = async () => {
            try {
                const response = await getCatalog(page, 12, requestBody)

                if (response) {
                    setMeta(response.body)
                    setCatalogList(response.body.data)
                    setFoundCount(response.body.meta.total)
                }
            } catch (error) {
                console.log(error)
            }
        }
        req()
    }, [page, requestBody])

    useEffect(() => {
        setSearchParams({
            'transactionType': instantFilters.transactionType,
            'estateId': instantFilters.estateId
        })
    }, [instantFilters.transactionType, instantFilters.estateId])

    const onSearch = (e) => {
        e.preventDefault()
        onSelectHandler(search.trim(), 'address', setInstantFilters)
        setSearch('')
        setIsClearFilters(false)
    }

    const onSelectHandler = (value, stateProp, setFunction) => {
        setFunction(prevValues => ({...prevValues, [stateProp]: value}))
    }

    const onInputHandler = (e, stateProp, isDigit = false, setFunction) => {
        const text = e.target.value.trim()

        setFunction(prevValues => ({...prevValues, [stateProp]: isDigit ? +text : text}))
        setIsClearFilters(false)
    }

    const onCheckboxHandler = (e, setFunction) => {
        const name = e.target.name

        setFunction(prevValues => ({...prevValues, [name]: !prevValues[name]}));
        setIsClearFilters(false)
    }

    const onMultiCheckboxHandler = (array, number, setFunction) => {
        setFunction(prevValues => ({
            ...prevValues,
            [array]: prevValues[array].includes(number)
                ? prevValues[array].filter(item => item !== number)
                : prevValues[array].concat(number)
        }))
        setIsClearFilters(false)
    }

    const onResetInstantFilters = () => {
        setInstantFilters(initialInstantFilters)
        setIsClearFilters(true)
    }

    const onApplyFilters = (filters) => {
        setInstantFilters(prevInstantFilters => ({
            ...prevInstantFilters,
            ...filters
        }))
        setIsClearFilters(false)
    }

    const onPopularQuery = (stateProp, value) => {
        onResetInstantFilters()

        setInstantFilters({
            ...initialInstantFilters,
            [stateProp]: value
        })

    }

    const getImages = (item) => {
        const url = 'https://api.antontig.beget.tech/uploads/'
        const result = [].concat(item?.image, item?.images.map(i => i.image))

        return result.map(item => item
            ? `${url}${item}`
            : '/Real_estate_front/img/nophoto.jpg'
        )
    }

    return (
        <main>
            <div className="container py-3 py-sm-4 py-lg-5">
                <nav aria-label="breadcrumb">
                    <Link to="/" className="d-block d-md-none gray-3">&#10094; Назад</Link>
                    <ol className="d-none d-md-flex breadcrumb">
                        <li className="breadcrumb-item">
                            <NavLink to="/">Недвижимость в Казани</NavLink>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">Аренда</li>
                    </ol>
                </nav>
            </div>
            <section className="sec-6 container pb-5">
                <h1>Каталог недвижимости</h1>
                <form className="form-search mb-4 mb-sm-5">
                    <div className="map-search">
                        <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasFilter"
                                className="d-flex d-lg-none align-items-center">
                            <img src="/Real_estate_front/img/icons/filter.svg" alt="filter"/>
                            <span className="ms-2 fs-11 fw-5 color-1">Фильтры</span>
                        </button>
                        <button type="button" className="d-flex align-items-center">
                            <img src="/Real_estate_front/img/icons/pin.svg" alt="map pin"/>
                            <span className="ms-2 fs-11 fw-5 color-2">Показать на карте</span>
                        </button>
                    </div>
                    <CustomSelect
                        className="sel-1"
                        btnClass="btn btn-2 px-2 px-sm-3"
                        options={['Снять', 'Купить']}
                        checkedOpt={instantFilters.transactionType}
                        callback={(index) => onSelectHandler(index, 'transactionType', setInstantFilters)}
                    />
                    <CustomSelect
                        className="sel-2"
                        btnClass="btn btn-2 px-2 px-sm-3"
                        options={estates}
                        checkedOpt={instantFilters.estateId}
                        callback={(index) => onSelectHandler(index, 'estateId', setInstantFilters)}
                    />
                    <CustomSelectMultyDual
                        className="sel-3"
                        btnClass="btn btn-2 px-2 px-sm-3"
                        checkedDist={[]}
                        checkedSt={[]}
                        districts={['Авиастроительный', 'Вахитовский', 'Кировский', 'Московский', 'Ново-Савиновский', 'Приволжский', 'Советский']}
                        stations={['Авиастроительная', 'Северный вокзал', 'Яшьлек', 'Козья слобода', 'Кремлёвская', 'Площадь Габдуллы Тукая', 'Суконная слобода', 'Аметьево', 'Горки', 'Проспект Победы', 'Дубравная']}
                        callback={(index1, index2) => {
                            setInstantFilters(prevInstantFilters => {
                                return {
                                    ...prevInstantFilters,
                                    district: [...index1],
                                    metro: [...index2]
                                }
                            })
                        }}
                    />
                    <input type="search" placeholder="Адрес или ЖК" value={search}
                           onChange={e => setSearch(e.target.value)}/>
                    <button type="submit" className="btn btn-1" onClick={onSearch}>Поиск</button>
                    <div className="popular-queries">
                        <div>Популярные запросы:</div>
                        <button
                            type="button"
                            onClick={() => onPopularQuery('roomTypes', [0])}
                        >
                            Студия
                        </button>
                        <button
                            type="button"
                            onClick={() => onPopularQuery('roomTypes', [1])}
                        >
                            1 комнатная
                        </button>
                        <button
                            type="button"
                            onClick={() => onPopularQuery('roomTypes', [2])}
                        >
                            2 комнатная
                        </button>
                        <button
                            type="button"
                            onClick={() => onPopularQuery('roomTypes', [3])}
                        >
                            3 комнатная
                        </button>
                        <button
                            type="button"
                            onClick={() => onPopularQuery('hasFurniture', true)}
                        >
                            С мебелью
                        </button>
                        <button
                            type="button"
                            onClick={() => onPopularQuery('hasFurniture', false)}
                        >
                            Без мебели
                        </button>
                        <button
                            type="button"
                            onClick={() => onPopularQuery('elevatorTypes', [1, 2, 3])}
                        >
                            Есть лифт
                        </button>
                        <button
                            type="button"
                            onClick={() => onPopularQuery('withPets', true)}
                        >
                            Можно с животными
                        </button>
                        <button
                            type="button"
                            onClick={() => onPopularQuery('withKids', true)}
                        >
                            Можно с детьми
                        </button>
                    </div>
                </form>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="d-lg-none">Найдено {foundCount} объявлений</div>
                    <div className="d-flex align-items-center">
                        <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasFilter"
                                className="d-none d-lg-flex d-xxl-none align-items-center me-4">
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
                            callback={(index) => onSelectHandler(index, 'orderBy', setInstantFilters)}
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
                        <div className="fs-11 mb-4">Найдено {foundCount} объявлений</div>
                        <form className="shad-box p-4 mb-4">
                            <fieldset className="mb-4">
                                <legend className="title-font fs-12 fw-6 mb-3">Количество комнат</legend>
                                <label className="ps-2 mb-3">
                                    <input
                                        type="checkbox"
                                        name="rooms"
                                        value="1room"
                                        checked={instantFilters.roomTypes.includes(1)}
                                        onChange={() => onMultiCheckboxHandler('roomTypes', 1, setInstantFilters)}
                                    />
                                    <span className="fs-11 ms-3">1 комнатная</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input
                                        type="checkbox"
                                        name="rooms"
                                        value="2room"
                                        checked={instantFilters.roomTypes.includes(2)}
                                        onChange={() => onMultiCheckboxHandler('roomTypes', 2, setInstantFilters)}
                                    />
                                    <span className="fs-11 ms-3">2 комнатная</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input
                                        type="checkbox"
                                        name="rooms"
                                        value="3room"
                                        checked={instantFilters.roomTypes.includes(3)}
                                        onChange={() => onMultiCheckboxHandler('roomTypes', 3, setInstantFilters)}
                                    />
                                    <span className="fs-11 ms-3">3 комнатная</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input
                                        type="checkbox"
                                        name="rooms"
                                        value="4room"
                                        checked={instantFilters.roomTypes.includes(4)}
                                        onChange={() => onMultiCheckboxHandler('roomTypes', 4, setInstantFilters)}
                                    />
                                    <span className="fs-11 ms-3">4 комнатная</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input
                                        type="checkbox"
                                        name="rooms"
                                        value="5room"
                                        checked={instantFilters.roomTypes.includes(5)}
                                        onChange={() => onMultiCheckboxHandler('roomTypes', 5, setInstantFilters)}
                                    />
                                    <span className="fs-11 ms-3">5 комнатная</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input
                                        type="checkbox"
                                        name="rooms"
                                        value="6room"
                                        checked={instantFilters.roomTypes.includes(6)}
                                        onChange={() => onMultiCheckboxHandler('roomTypes', 6, setInstantFilters)}
                                    />
                                    <span className="fs-11 ms-3">6 комнатная</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input
                                        type="checkbox"
                                        name="rooms"
                                        value="studio"
                                        checked={instantFilters.roomTypes.includes(0)}
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
                                        value={instantFilters.startPrice}
                                        onChange={(e) => onInputHandler(e, 'startPrice', true, setInstantFilters)}
                                    />
                                    <div className="fs-11 me-2">До</div>
                                    <input
                                        type="number"
                                        className="w-100 price"
                                        value={instantFilters.endPrice}
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
                                        checked={instantFilters.rentalTypes.includes(2)}
                                        onChange={() => onMultiCheckboxHandler('rentalTypes', 2, setInstantFilters)}
                                    />
                                    <span className="fs-11 ms-3">Посуточно</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input
                                        type="checkbox"
                                        name="lease"
                                        value="lease 2"
                                        checked={instantFilters.rentalTypes.includes(1)}
                                        onChange={() => onMultiCheckboxHandler('rentalTypes', 1, setInstantFilters)}
                                    />
                                    <span className="fs-11 ms-3">Несколько месяцев</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input
                                        type="checkbox"
                                        name="lease"
                                        value="lease 3"
                                        checked={instantFilters.rentalTypes.includes(0)}
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
                                        checked={instantFilters.repairTypes.includes(3)}
                                        onChange={() => onMultiCheckboxHandler('repairTypes', 3, setInstantFilters)}
                                    />
                                    <span className="fs-11 ms-3">Без ремонта</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input
                                        type="checkbox"
                                        name="repair"
                                        value="repair 1"
                                        checked={instantFilters.repairTypes.includes(0)}
                                        onChange={() => onMultiCheckboxHandler('repairTypes', 0, setInstantFilters)}
                                    />
                                    <span className="fs-11 ms-3">Косметический</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input
                                        type="checkbox"
                                        name="repair"
                                        value="repair 2"
                                        checked={instantFilters.repairTypes.includes(1)}
                                        onChange={() => onMultiCheckboxHandler('repairTypes', 1, setInstantFilters)}
                                    />
                                    <span className="fs-11 ms-3">Евроремонт</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input
                                        type="checkbox"
                                        name="repair"
                                        value="repair 3"
                                        checked={instantFilters.repairTypes.includes(2)}
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
                                catalogList.map(catalogItem => (
                                    <div key={catalogItem.id}>
                                        <Card
                                            type={view}
                                            images={getImages(catalogItem)}
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
                                            uuid={catalogItem.uuid}
                                            user={catalogItem.user}
                                            communalPrice={catalogItem.communalPrice}
                                            pledge={catalogItem.pledge}
                                            commissionForUser={catalogItem.commissionForUser}
                                            prepaymentTypeForUser={catalogItem.prepaymentTypeForUser}
                                            rentalTypeForUser={catalogItem.rentalTypeForUser}

                                        />
                                    </div>
                                ))
                            }
                        </div>
                        <nav className="mt-4">
                            <PaginationCustom meta={meta} baseUrl='catalog' searchParams={searchParams}/>
                        </nav>
                    </div>
                </div>
            </section>
            <CatalogFilters
                instantFilters={instantFilters}
                onInputHandler={onInputHandler}
                onCheckboxHandler={onCheckboxHandler}
                onMultiCheckboxHandler={onMultiCheckboxHandler}
                onResetInstantFilters={onResetInstantFilters}
                onApplyFilters={onApplyFilters}
                isClearFilters={isClearFilters}
                foundCount={foundCount}
            />

        </main>
    )
}

