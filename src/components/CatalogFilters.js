import React from 'react'
import {onCheckboxHandler, onInputHandler, onMultiCheckboxHandler} from '../helpers/collectDataFromForm'
import OffcanvasFilters from './OffcanvasFilters';

const CatalogFilters = (
    {
        filters,
        setFilters,
        onResetFilters,
        onApplyFilters,
        foundCount,
        isShowOffcanvasFilters,
        setIsShowOffcanvasFilters,
        callback,
        searchParams,
        searchParamsTransactionType
    }) => {

    return (
        <>
            <div className="modal fade" id="desktopFilters" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="btn-close" data-bs-dismiss="modal">
                                <svg viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.00006 1.18237L15 15.9049"/>
                                    <path d="M14.9999 1.18237L1.00001 15.9049"/>
                                </svg>
                            </button>
                            {
                                searchParams === 1 &&
                                <form>
                                    <fieldset className="row">
                                        <div className="col-3">
                                            <legend className="fs-11">Дополнительные характеристики:</legend>
                                        </div>
                                        <div className="col-9">
                                            <div className="row row-cols-3">
                                                <label className="mb-3">
                                                    <input
                                                        type="checkbox"
                                                        name="hasKitchenFurniture"
                                                        checked={filters.hasKitchenFurniture || false}
                                                        onChange={e => onCheckboxHandler(e, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">Кухонная мебель</span>
                                                </label>
                                                <label className="mb-3">
                                                    <input
                                                        type="checkbox"
                                                        name="hasFurniture"
                                                        checked={filters.hasFurniture || false}
                                                        onChange={e => onCheckboxHandler(e, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">Мебель в комнатах</span>
                                                </label>
                                                <label className="mb-3">
                                                    <input
                                                        type="checkbox"
                                                        name="hasRefrigerator"
                                                        checked={filters.hasRefrigerator || false}
                                                        onChange={e => onCheckboxHandler(e, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">Холодильник</span>
                                                </label>
                                                <label className="mb-3">
                                                    <input
                                                        type="checkbox"
                                                        name="hasWashingMachine"
                                                        checked={filters.hasWashingMachine || false}
                                                        onChange={e => onCheckboxHandler(e, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">Стиральная машина</span>
                                                </label>
                                                <label className="mb-3">
                                                    <input
                                                        type="checkbox"
                                                        name="hasDishWasher"
                                                        checked={filters.hasDishWasher || false}
                                                        onChange={e => onCheckboxHandler(e, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">Посудомоечная машина</span>
                                                </label>
                                                <label className="mb-3">
                                                    <input
                                                        type="checkbox"
                                                        name="hasTv"
                                                        checked={filters.hasTv || false}
                                                        onChange={e => onCheckboxHandler(e, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">Телевизор</span>
                                                </label>
                                                <label className="mb-3">
                                                    <input
                                                        type="checkbox"
                                                        name="hasConditioner"
                                                        checked={filters.hasConditioner || false}
                                                        onChange={e => onCheckboxHandler(e, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">Кондиционер</span>
                                                </label>
                                                <label className="mb-3">
                                                    <input
                                                        type="checkbox"
                                                        name="hasInternet"
                                                        checked={filters.hasInternet || false}
                                                        onChange={e => onCheckboxHandler(e, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">Интернет</span>
                                                </label>
                                                <label className="mb-3">
                                                    <input
                                                        type="checkbox"
                                                        name="hasBathroom"
                                                        checked={filters.hasBathroom || false}
                                                        onChange={e => onCheckboxHandler(e, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">Ванна</span>
                                                </label>
                                                <label className="mb-3">
                                                    <input
                                                        type="checkbox"
                                                        name="hasShowerCabin"
                                                        checked={filters.hasShowerCabin || false}
                                                        onChange={e => onCheckboxHandler(e, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">Душевая кабина</span>
                                                </label>
                                                {
                                                    searchParamsTransactionType === 0 &&
                                                    <>
                                                        <label className="mb-3">
                                                            <input
                                                                type="checkbox"
                                                                name="withKids"
                                                                checked={filters.withKids || false}
                                                                onChange={e => onCheckboxHandler(e, setFilters)}
                                                            />
                                                            <span className="fs-11 ms-3">Можно с детьми</span>
                                                        </label>
                                                        <label className="mb-3">
                                                            <input
                                                                type="checkbox"
                                                                name="withPets"
                                                                checked={filters.withPets || false}
                                                                onChange={e => onCheckboxHandler(e, setFilters)}
                                                            />
                                                            <span className="fs-11 ms-3">Можно с животными</span>
                                                        </label>
                                                    </>
                                                }
                                            </div>
                                        </div>
                                    </fieldset>
                                    <hr/>
                                    <fieldset className="row mb-3">
                                        <div className="col-3">
                                            <legend className="fs-11">Общая площадь:</legend>
                                        </div>
                                        <div className="col-9">
                                            <div className="d-flex align-items-baseline">
                                                <div className="fs-11 me-2">От</div>
                                                <input
                                                    type="number"
                                                    className="area me-3"
                                                    value={filters.startTotalArea || ''}
                                                    onChange={e => onInputHandler(e, 'startTotalArea', true, setFilters)}
                                                />
                                                <div className="fs-11 me-2">До</div>
                                                <input
                                                    type="number"
                                                    className="area"
                                                    value={filters.endTotalArea || ''}
                                                    onChange={e => onInputHandler(e, 'endTotalArea', true, setFilters)}
                                                />
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset className="row mb-3">
                                        <div className="col-3">
                                            <legend className="fs-11">Жилая площадь:</legend>
                                        </div>
                                        <div className="col-9">
                                            <div className="d-flex align-items-baseline">
                                                <div className="fs-11 me-2">От</div>
                                                <input
                                                    type="number"
                                                    className="area me-3"
                                                    value={filters.startLivingArea || ''}
                                                    onChange={e => onInputHandler(e, 'startLivingArea', true, setFilters)}
                                                />
                                                <div className="fs-11 me-2">До</div>
                                                <input
                                                    type="number"
                                                    className="area"
                                                    value={filters.endLivingArea || ''}
                                                    onChange={e => onInputHandler(e, 'endLivingArea', true, setFilters)}
                                                />
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset className="row mb-3">
                                        <div className="col-3">
                                            <legend className="fs-11">Площадь кухни:</legend>
                                        </div>
                                        <div className="col-9">
                                            <div className="d-flex align-items-baseline">
                                                <div className="fs-11 me-2">От</div>
                                                <input
                                                    type="number"
                                                    className="area me-3"
                                                    value={filters.startKitchenArea || ''}
                                                    onChange={e => onInputHandler(e, 'startKitchenArea', true, setFilters)}
                                                />
                                                <div className="fs-11 me-2">До</div>
                                                <input
                                                    type="number"
                                                    className="area"
                                                    value={filters.endKitchenArea || ''}
                                                    onChange={e => onInputHandler(e, 'endKitchenArea', true, setFilters)}
                                                />
                                            </div>
                                        </div>
                                    </fieldset>
                                    <hr/>
                                    <fieldset className="row">
                                        <div className="col-3">
                                            <legend className="fs-11 mb-0">Планировка:</legend>
                                        </div>
                                        <div className="col-9">
                                            <div className="row row-cols-3">
                                                <label className='mb-3'>
                                                    <input
                                                        type="checkbox"
                                                        name="layout"
                                                        value="Изолированная"
                                                        checked={filters.layoutTypes?.includes(0) || false}
                                                        onChange={() => onMultiCheckboxHandler('layoutTypes', 0, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">Изолированная</span>
                                                </label>
                                                <label className='mb-3'>
                                                    <input
                                                        type="checkbox"
                                                        name="layout"
                                                        value="Смежная"
                                                        checked={filters.layoutTypes?.includes(1) || false}
                                                        onChange={() => onMultiCheckboxHandler('layoutTypes', 1, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">Смежная</span>
                                                </label>
                                                <label className='mb-3'>
                                                    <input
                                                        type="checkbox"
                                                        name="layout"
                                                        value="Свободная"
                                                        checked={filters.layoutTypes?.includes(2) || false}
                                                        onChange={() => onMultiCheckboxHandler('layoutTypes', 2, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">Свободная</span>
                                                </label>
                                                <label className='mb-3'>
                                                    <input
                                                        type="checkbox"
                                                        name="layout"
                                                        value="Смежно-изолированная"
                                                        checked={filters.layoutTypes?.includes(3) || false}
                                                        onChange={() => onMultiCheckboxHandler('layoutTypes', 3, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">Смежно-изолированная</span>
                                                </label>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <hr/>
                                    <fieldset className="row">
                                        <div className="col-3">
                                            <legend className="fs-11 mb-0">Санузел:</legend>
                                        </div>
                                        <div className="col-9">
                                            <div className="row row-cols-3">
                                                <label className='mb-3'>
                                                    <input
                                                        type="checkbox"
                                                        name="bathroom"
                                                        value="Раздельный"
                                                        checked={filters.WCTypes?.includes(0) || false}
                                                        onChange={() => onMultiCheckboxHandler('WCTypes', 0, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">Раздельный</span>
                                                </label>
                                                <label className='mb-3'>
                                                    <input
                                                        type="checkbox"
                                                        name="bathroom"
                                                        value="Совмещенный"
                                                        checked={filters.WCTypes?.includes(1) || false}
                                                        onChange={() => onMultiCheckboxHandler('WCTypes', 1, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">Совмещенный</span>
                                                </label>
                                                <label className='mb-3'>
                                                    <input
                                                        type="checkbox"
                                                        name="bathroom"
                                                        value="2 и более"
                                                        checked={filters.WCTypes?.includes(2) || false}
                                                        onChange={() => onMultiCheckboxHandler('WCTypes', 2, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">2 и более</span>
                                                </label>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <hr/>
                                    <fieldset className="row mb-3">
                                        <div className="col-3">
                                            <legend className="fs-11">Этаж:</legend>
                                        </div>
                                        <div className="col-9">
                                            <div className="d-flex align-items-baseline">
                                                <div className="fs-11 me-2">От</div>
                                                <input
                                                    type="number"
                                                    className="me-3"
                                                    value={filters.startFloor || ''}
                                                    onChange={e => onInputHandler(e, 'startFloor', true, setFilters)}
                                                />
                                                <div className="fs-11 me-2">До</div>
                                                <input
                                                    type="number"
                                                    value={filters.endFloor || ''}
                                                    onChange={e => onInputHandler(e, 'endFloor', true, setFilters)}
                                                />
                                                <label className="ms-5">
                                                    <input
                                                        type="checkbox"
                                                        name="notFirstFloor"
                                                        checked={filters.notFirstFloor || false}
                                                        onChange={e => onCheckboxHandler(e, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">Не первый</span>
                                                </label>
                                                <label className="ms-5">
                                                    <input
                                                        type="checkbox"
                                                        name="notLastFloor"
                                                        checked={filters.notLastFloor || false}
                                                        onChange={e => onCheckboxHandler(e, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">Не последний</span>
                                                </label>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset className="row">
                                        <div className="col-3">
                                            <legend className="fs-11">Этажей в доме:</legend>
                                        </div>
                                        <div className="col-9">
                                            <div className="d-flex align-items-baseline">
                                                <div className="fs-11 me-2">От</div>
                                                <input
                                                    type="number"
                                                    className="me-3"
                                                    value={filters.startMaxFloor || ''}
                                                    onChange={e => onInputHandler(e, 'startMaxFloor', true, setFilters)}
                                                />
                                                <div className="fs-11 me-2">До</div>
                                                <input
                                                    type="number"
                                                    value={filters.endMaxFloor || ''}
                                                    onChange={e => onInputHandler(e, 'endMaxFloor', true, setFilters)}
                                                />
                                            </div>
                                        </div>
                                    </fieldset>
                                    <hr/>
                                    <fieldset className="row">
                                        <div className="col-3">
                                            <legend className="fs-11">Балкон/Лоджия:</legend>
                                        </div>
                                        <div className="col-9">
                                            <div className="d-flex align-items-baseline">
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        name="balcony"
                                                        value="Балкон"
                                                        checked={filters.balconyTypes?.includes(1) || false}
                                                        onChange={() => onMultiCheckboxHandler('balconyTypes', 1, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">Балкон</span>
                                                </label>
                                                <label className="ms-5">
                                                    <input
                                                        type="checkbox"
                                                        name="balcony"
                                                        value="Лоджия"
                                                        checked={filters.balconyTypes?.includes(2) || false}
                                                        onChange={() => onMultiCheckboxHandler('balconyTypes', 2, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">Лоджия</span>
                                                </label>
                                                <label className="ms-5">
                                                    <input
                                                        type="checkbox"
                                                        name="balcony"
                                                        value="Несколько"
                                                        checked={filters.balconyTypes?.includes(3) || false}
                                                        onChange={() => onMultiCheckboxHandler('balconyTypes', 3, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">Несколько</span>
                                                </label>
                                                <label className="ms-5">
                                                    <input
                                                        type="checkbox"
                                                        name="balcony"
                                                        value="Нет"
                                                        checked={filters.balconyTypes?.includes(0) || false}
                                                        onChange={() => onMultiCheckboxHandler('balconyTypes', 0, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">Нет</span>
                                                </label>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <hr/>
                                    <fieldset className="row">
                                        <div className="col-3">
                                            <legend className="fs-11">Тип дома:</legend>
                                        </div>
                                        <div className="col-9">
                                            <div className="row row-cols-3">
                                                <label className="mb-3">
                                                    <input
                                                        type="checkbox"
                                                        name="house-type"
                                                        value="Кирпичный"
                                                        checked={filters.houseBuildingTypes?.includes(0) || false}
                                                        onChange={() => onMultiCheckboxHandler('houseBuildingTypes', 0, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-2">Кирпичный</span>
                                                </label>
                                                <label className="mb-3">
                                                    <input
                                                        type="checkbox"
                                                        name="house-type"
                                                        value="Панельный"
                                                        checked={filters.houseBuildingTypes?.includes(1) || false}
                                                        onChange={() => onMultiCheckboxHandler('houseBuildingTypes', 1, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-2">Панельный</span>
                                                </label>
                                                <label className="mb-3">
                                                    <input
                                                        type="checkbox"
                                                        name="house-type"
                                                        value="Монолитный"
                                                        checked={filters.houseBuildingTypes?.includes(2) || false}
                                                        onChange={() => onMultiCheckboxHandler('houseBuildingTypes', 2, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-2">Монолитный</span>
                                                </label>
                                                <label className="mb-3">
                                                    <input
                                                        type="checkbox"
                                                        name="house-type"
                                                        value="Блочный"
                                                        checked={filters.houseBuildingTypes?.includes(3) || false}
                                                        onChange={() => onMultiCheckboxHandler('houseBuildingTypes', 3, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-2">Блочный</span>
                                                </label>
                                                <label className="mb-3">
                                                    <input
                                                        type="checkbox"
                                                        name="house-type"
                                                        value="Деревянный"
                                                        checked={filters.houseBuildingTypes?.includes(4) || false}
                                                        onChange={() => onMultiCheckboxHandler('houseBuildingTypes', 4, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-2">Деревянный</span>
                                                </label>
                                                <label className="mb-3">
                                                    <input
                                                        type="checkbox"
                                                        name="house-type"
                                                        value="Кирпично-монолитный"
                                                        checked={filters.houseBuildingTypes?.includes(5) || false}
                                                        onChange={() => onMultiCheckboxHandler('houseBuildingTypes', 5, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-2">Кирпично-монолитный</span>
                                                </label>
                                                <label className="mb-3">
                                                    <input
                                                        type="checkbox"
                                                        name="house-type"
                                                        value="Керамзитный"
                                                        checked={filters.houseBuildingTypes?.includes(6) || false}
                                                        onChange={() => onMultiCheckboxHandler('houseBuildingTypes', 6, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-2">Керамзитный</span>
                                                </label>
                                                <label className="mb-3">
                                                    <input
                                                        type="checkbox"
                                                        name="house-type"
                                                        value="Газоблок"
                                                        checked={filters.houseBuildingTypes?.includes(7) || false}
                                                        onChange={() => onMultiCheckboxHandler('houseBuildingTypes', 7, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-2">Газоблок</span>
                                                </label>
                                                <label className="mb-3">
                                                    <input
                                                        type="checkbox"
                                                        name="house-type"
                                                        value="Пеноблок"
                                                        checked={filters.houseBuildingTypes?.includes(8) || false}
                                                        onChange={() => onMultiCheckboxHandler('houseBuildingTypes', 8, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-2">Пеноблок</span>
                                                </label>
                                                <label className="mb-3">
                                                    <input
                                                        type="checkbox"
                                                        name="house-type"
                                                        value="Армолитовые блоки"
                                                        checked={filters.houseBuildingTypes?.includes(9) || false}
                                                        onChange={() => onMultiCheckboxHandler('houseBuildingTypes', 9, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-2">Армолитовые блоки</span>
                                                </label>
                                                <label className="mb-3">
                                                    <input
                                                        type="checkbox"
                                                        name="house-type"
                                                        value="Сип-панели"
                                                        checked={filters.houseBuildingTypes?.includes(10) || false}
                                                        onChange={() => onMultiCheckboxHandler('houseBuildingTypes', 10, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-2">Сип-панели</span>
                                                </label>
                                                <label className="mb-3">
                                                    <input
                                                        type="checkbox"
                                                        name="house-type"
                                                        value="Смешанные"
                                                        checked={filters.houseBuildingTypes?.includes(11) || false}
                                                        onChange={() => onMultiCheckboxHandler('houseBuildingTypes', 11, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-2">Смешанные</span>
                                                </label>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <hr/>
                                    <fieldset className="row">
                                        <div className="col-3">
                                            <legend className="fs-11">Год постройки:</legend>
                                        </div>
                                        <div className="col-9">
                                            <div className="d-flex align-items-baseline">
                                                <div className="fs-11 me-3">От</div>
                                                <input
                                                    type="number"
                                                    className="me-3"
                                                    pattern="[0-9]{4}"
                                                    value={filters.yearOfConstruction || ''}
                                                    onChange={e => onInputHandler(e, 'yearOfConstruction', setFilters)}
                                                />
                                            </div>
                                        </div>
                                    </fieldset>
                                    <hr/>
                                    <fieldset className="row">
                                        <div className="col-3">
                                            <legend className="fs-11">Лифт:</legend>
                                        </div>
                                        <div className="col-9">
                                            <div className="d-flex align-items-baseline flex-wrap">
                                                <label className="me-5 mt-2">
                                                    <input
                                                        type="checkbox"
                                                        name="lift"
                                                        value="Пассажирский"
                                                        checked={filters.elevatorTypes?.includes(1) || false}
                                                        onChange={() => onMultiCheckboxHandler('elevatorTypes', 1, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-2">Пассажирский</span>
                                                </label>
                                                <label className="mt-2">
                                                    <input
                                                        type="checkbox"
                                                        name="lift"
                                                        value="Грузовой"
                                                        checked={filters.elevatorTypes?.includes(2) || false}
                                                        onChange={() => onMultiCheckboxHandler('elevatorTypes', 2, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-2">Грузовой</span>
                                                </label>
                                                <label className="mt-2">
                                                    <input
                                                        type="checkbox"
                                                        name="lift"
                                                        value="Пассажирский/Грузовой"
                                                        checked={filters.elevatorTypes?.includes(3) || false}
                                                        onChange={() => onMultiCheckboxHandler('elevatorTypes', 3, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-2 text-nowrap">Пассажирский/Грузовой</span>
                                                </label>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <hr/>
                                    <fieldset className="row">
                                        <div className="col-3">
                                            <legend className="fs-11">Высота потолков:</legend>
                                        </div>
                                        <div className="col-9">
                                            <div className="d-flex align-items-baseline">
                                                <div className="fs-11 me-3">От</div>
                                                <input
                                                    type="number"
                                                    className="length me-3"
                                                    value={filters.ceilingHeight || ''}
                                                    onChange={e => onInputHandler(e, 'ceilingHeight', true, setFilters)}
                                                />
                                            </div>
                                        </div>
                                    </fieldset>
                                    <hr/>
                                    <fieldset className="row">
                                        <div className="col-3">
                                            <legend className="fs-11 mb-0">Окна:</legend>
                                        </div>
                                        <div className="col-9">
                                            <div className="row row-cols-3">
                                                <label className='mb-3'>
                                                    <input
                                                        type="checkbox"
                                                        name="windows"
                                                        value="Во двор"
                                                        checked={filters.window?.includes(0) || false}
                                                        onChange={() => onMultiCheckboxHandler('window', 0, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">Во двор</span>
                                                </label>
                                                <label className='mb-3'>
                                                    <input
                                                        type="checkbox"
                                                        name="windows"
                                                        value="На улицу"
                                                        checked={filters.window?.includes(1) || false}
                                                        onChange={() => onMultiCheckboxHandler('window', 1, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">На улицу</span>
                                                </label>
                                                <label className='mb-3'>
                                                    <input
                                                        type="checkbox"
                                                        name="windows"
                                                        value="На солнечную сторону"
                                                        checked={filters.window?.includes(2) || false}
                                                        onChange={() => onMultiCheckboxHandler('window', 2, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">На солнечную сторону</span>
                                                </label>
                                                <label className='mb-3'>
                                                    <input
                                                        type="checkbox"
                                                        name="windows"
                                                        value="На две стороны"
                                                        checked={filters.window?.includes(3) || false}
                                                        onChange={() => onMultiCheckboxHandler('window', 3, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">На две стороны</span>
                                                </label>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <hr/>
                                    <fieldset className="row">
                                        <div className="col-3">
                                            <legend className="fs-11 mb-0">Тип окон:</legend>
                                        </div>
                                        <div className="col-9">
                                            <div className="row row-cols-3">
                                                <label className='mb-3'>
                                                    <input
                                                        type="checkbox"
                                                        name="windowType"
                                                        value="Обычное прямоугольное"
                                                        checked={filters.windowType?.includes(0) || false}
                                                        onChange={() => onMultiCheckboxHandler('windowType', 0, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">Обычное прямоугольное</span>
                                                </label>
                                                <label className='mb-3'>
                                                    <input
                                                        type="checkbox"
                                                        name="windowType"
                                                        value="С вращающейся рамой"
                                                        checked={filters.windowType?.includes(1) || false}
                                                        onChange={() => onMultiCheckboxHandler('windowType', 1, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">С вращающейся рамой</span>
                                                </label>
                                                <label className='mb-3'>
                                                    <input
                                                        type="checkbox"
                                                        name="windowType"
                                                        value="В нише"
                                                        checked={filters.windowType?.includes(2) || false}
                                                        onChange={() => onMultiCheckboxHandler('windowType', 2, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">В нише</span>
                                                </label>
                                                <label className='mb-3'>
                                                    <input
                                                        type="checkbox"
                                                        name="windowType"
                                                        value="Панорамное"
                                                        checked={filters.windowType?.includes(3) || false}
                                                        onChange={() => onMultiCheckboxHandler('windowType', 3, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">Панорамное</span>
                                                </label>
                                                <label className='mb-3'>
                                                    <input
                                                        type="checkbox"
                                                        name="windowType"
                                                        value="Французское"
                                                        checked={filters.windowType?.includes(4) || false}
                                                        onChange={() => onMultiCheckboxHandler('windowType', 4, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">Французское</span>
                                                </label>
                                                <label className='mb-3'>
                                                    <input
                                                        type="checkbox"
                                                        name="windowType"
                                                        value="Эркер"
                                                        checked={filters.windowType?.includes(5) || false}
                                                        onChange={() => onMultiCheckboxHandler('windowType', 5, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">Эркер</span>
                                                </label>
                                                <label className='mb-3'>
                                                    <input
                                                        type="checkbox"
                                                        name="windowType"
                                                        value="С изогнутым верхом"
                                                        checked={filters.windowType?.includes(6) || false}
                                                        onChange={() => onMultiCheckboxHandler('windowType', 6, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">С изогнутым верхом</span>
                                                </label>
                                                <label className='mb-3'>
                                                    <input
                                                        type="checkbox"
                                                        name="windowType"
                                                        value="Выгнутое"
                                                        checked={filters.windowType?.includes(7) || false}
                                                        onChange={() => onMultiCheckboxHandler('windowType', 7, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">Выгнутое</span>
                                                </label>
                                                <label className='mb-3'>
                                                    <input
                                                        type="checkbox"
                                                        name="windowType"
                                                        value="Со скользящей рамой"
                                                        checked={filters.windowType?.includes(8) || false}
                                                        onChange={() => onMultiCheckboxHandler('windowType', 8, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">Со скользящей рамой</span>
                                                </label>
                                                <label className='mb-3'>
                                                    <input
                                                        type="checkbox"
                                                        name="windowType"
                                                        value="Со створным переплетом"
                                                        checked={filters.windowType?.includes(9) || false}
                                                        onChange={() => onMultiCheckboxHandler('windowType', 9, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">Со створным переплетом</span>
                                                </label>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <hr/>
                                    <fieldset className="row">
                                        <div className="col-3">
                                            <legend className="fs-11 mb-0">Хозпостройки:</legend>
                                        </div>
                                        <div className="col-9">
                                            <div className="row row-cols-3">
                                                <label className='mb-3'>
                                                    <input
                                                        type="checkbox"
                                                        name="outBuildingType"
                                                        value="Гараж"
                                                        checked={filters.outBuildingType?.includes(0) || false}
                                                        onChange={() => onMultiCheckboxHandler('outBuildingType', 0, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">Гараж</span>
                                                </label>
                                                <label className='mb-3'>
                                                    <input
                                                        type="checkbox"
                                                        name="outBuildingType"
                                                        value="Баня"
                                                        checked={filters.outBuildingType?.includes(1) || false}
                                                        onChange={() => onMultiCheckboxHandler('outBuildingType', 1, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">Баня</span>
                                                </label>
                                                <label className='mb-3'>
                                                    <input
                                                        type="checkbox"
                                                        name="outBuildingType"
                                                        value="Хозпостройки"
                                                        checked={filters.outBuildingType?.includes(2) || false}
                                                        onChange={() => onMultiCheckboxHandler('outBuildingType', 2, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">Хозпостройки</span>
                                                </label>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <hr/>
                                    <fieldset className="row">
                                        <div className="col-3">
                                            <legend className="fs-11 mb-0">Подвал:</legend>
                                        </div>
                                        <div className="col-9">
                                            <div className="row row-cols-3">
                                                <label className='mb-3'>
                                                    <input
                                                        type="checkbox"
                                                        name="hasBasement"
                                                        value="Нет"
                                                        checked={filters.hasBasement?.includes(0) || false}
                                                        onChange={() => onMultiCheckboxHandler('hasBasement', 0, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">Нет</span>
                                                </label>
                                                <label className='mb-3'>
                                                    <input
                                                        type="checkbox"
                                                        name="hasBasement"
                                                        value="Есть"
                                                        checked={filters.hasBasement?.includes(1) || false}
                                                        onChange={() => onMultiCheckboxHandler('hasBasement', 1, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">Есть</span>
                                                </label>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <hr/>
                                    <fieldset className="row">
                                        <div className="col-3">
                                            <legend className="fs-11 mb-0">Направление по Розе ветров:</legend>
                                        </div>
                                        <div className="col-9">
                                            <div className="row row-cols-3">
                                                <label className='mb-3'>
                                                    <input
                                                        type="checkbox"
                                                        name="windRoseDirectionType"
                                                        value="Север"
                                                        checked={filters.windRoseDirectionType?.includes(0) || false}
                                                        onChange={() => onMultiCheckboxHandler('windRoseDirectionType', 0, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">Север</span>
                                                </label>
                                                <label className='mb-3'>
                                                    <input
                                                        type="checkbox"
                                                        name="windRoseDirectionType"
                                                        value="Юг"
                                                        checked={filters.windRoseDirectionType?.includes(1) || false}
                                                        onChange={() => onMultiCheckboxHandler('windRoseDirectionType', 1, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">Юг</span>
                                                </label>
                                                <label className='mb-3'>
                                                    <input
                                                        type="checkbox"
                                                        name="windRoseDirectionType"
                                                        value="Запад"
                                                        checked={filters.windRoseDirectionType?.includes(2) || false}
                                                        onChange={() => onMultiCheckboxHandler('windRoseDirectionType', 2, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">Запад</span>
                                                </label>
                                                <label className='mb-3'>
                                                    <input
                                                        type="checkbox"
                                                        name="windRoseDirectionType"
                                                        value="Восток"
                                                        checked={filters.windRoseDirectionType?.includes(3) || false}
                                                        onChange={() => onMultiCheckboxHandler('windRoseDirectionType', 3, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">Восток</span>
                                                </label>
                                                <label className='mb-3'>
                                                    <input
                                                        type="checkbox"
                                                        name="windRoseDirectionType"
                                                        value="Северо-восток"
                                                        checked={filters.windRoseDirectionType?.includes(4) || false}
                                                        onChange={() => onMultiCheckboxHandler('windRoseDirectionType', 4, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">Северо-восток</span>
                                                </label>
                                                <label className='mb-3'>
                                                    <input
                                                        type="checkbox"
                                                        name="windRoseDirectionType"
                                                        value="Юго-восток"
                                                        checked={filters.windRoseDirectionType?.includes(5) || false}
                                                        onChange={() => onMultiCheckboxHandler('windRoseDirectionType', 5, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">Юго-восток</span>
                                                </label>
                                                <label className='mb-3'>
                                                    <input
                                                        type="checkbox"
                                                        name="windRoseDirectionType"
                                                        value="Северо-запад"
                                                        checked={filters.windRoseDirectionType?.includes(6) || false}
                                                        onChange={() => onMultiCheckboxHandler('windRoseDirectionType', 6, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">Северо-запад</span>
                                                </label>
                                                <label className='mb-3'>
                                                    <input
                                                        type="checkbox"
                                                        name="windRoseDirectionType"
                                                        value="Юго-запад"
                                                        checked={filters.windRoseDirectionType?.includes(7) || false}
                                                        onChange={() => onMultiCheckboxHandler('windRoseDirectionType', 7, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-3">Юго-запад</span>
                                                </label>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <hr/>
                                    <fieldset className="row">
                                        <div className="col-3">
                                            <legend className="fs-11">Дополнительно:</legend>
                                        </div>
                                        <div className="col-9">
                                            <div className="d-flex align-items-baseline flex-wrap">
                                                <label className="me-5 mt-2">
                                                    <input
                                                        type="checkbox"
                                                        name="hasRamp"
                                                        checked={filters.hasRamp || false}
                                                        onChange={e => onCheckboxHandler(e, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-2">Пандус</span>
                                                </label>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <hr/>
                                    <fieldset className="row">
                                        <div className="col-3">
                                            <legend className="fs-11">Мусоропровод:</legend>
                                        </div>
                                        <div className="col-9">
                                            <div className="d-flex align-items-baseline flex-wrap">
                                                <label className="me-5 mt-2">
                                                    <input
                                                        type="checkbox"
                                                        name="hasGarbageChute"
                                                        checked={filters.hasGarbageChute || false}
                                                        onChange={e => onCheckboxHandler(e, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-2">Есть</span>
                                                </label>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <hr/>
                                    <fieldset className="row">
                                        <div className="col-3">
                                            <legend className="fs-11">Парковка:</legend>
                                        </div>
                                        <div className="col-9">
                                            <div className="d-flex align-items-baseline flex-wrap">
                                                <label className="me-5 mt-2">
                                                    <input
                                                        type="checkbox"
                                                        name="hasGroundParking"
                                                        checked={filters.hasGroundParking || false}
                                                        onChange={e => onCheckboxHandler(e, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-2">Наземная</span>
                                                </label>
                                                <label className="me-5 mt-2">
                                                    <input
                                                        type="checkbox"
                                                        name="hasUnderGroundParking"
                                                        checked={filters.hasUnderGroundParking || false}
                                                        onChange={e => onCheckboxHandler(e, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-2">Подземная</span>
                                                </label>
                                                <label className="me-5 mt-2">
                                                    <input
                                                        type="checkbox"
                                                        name="hasMoreLayerParking"
                                                        checked={filters.hasMoreLayerParking || false}
                                                        onChange={e => onCheckboxHandler(e, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-2">Многоуровневая</span>
                                                </label>
                                                <label className="me-5 mt-2">
                                                    <input
                                                        type="checkbox"
                                                        name="hasYardParking"
                                                        checked={filters.hasYardParking || false}
                                                        onChange={e => onCheckboxHandler(e, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-2">Открытая во дворе</span>
                                                </label>
                                                <label className="me-5 mt-2">
                                                    <input
                                                        type="checkbox"
                                                        name="hasBarrierParking"
                                                        checked={filters.hasBarrierParking || false}
                                                        onChange={e => onCheckboxHandler(e, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-2">Во дворе за шлагбаумом</span>
                                                </label>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <div className="fs-11 d-flex justify-content-between align-items-center mt-5">
                                        <div className="fw-6 gray-3">Найденно {foundCount} объявлений</div>
                                        <button
                                            type="submit"
                                            data-bs-dismiss="modal"
                                            className="btn btn-1"
                                            onClick={e => {
                                                e.preventDefault()
                                                onApplyFilters()
                                                callback()
                                            }}
                                        >
                                            ПОКАЗАТЬ
                                        </button>
                                        <button type="button" onClick={onResetFilters} className="color-1">Очистить
                                            фильтр
                                        </button>
                                    </div>
                                </form>
                            }
                            {
                                searchParams === 4 &&
                                <form>
                                    <fieldset className="row">
                                        <div className="col-3">
                                            <legend className="fs-11">Лифт:</legend>
                                        </div>
                                        <div className="col-9">
                                            <div className="d-flex align-items-baseline flex-wrap">
                                                <label className="me-5 mt-2">
                                                    <input
                                                        type="checkbox"
                                                        name="lift"
                                                        value="Нет"
                                                        checked={filters.elevatorTypes?.includes(0) || false}
                                                        onChange={() => onMultiCheckboxHandler('elevatorTypes', 0, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-2">Нет</span>
                                                </label>
                                                <label className="me-5 mt-2">
                                                    <input
                                                        type="checkbox"
                                                        name="lift"
                                                        value="Пассажирский"
                                                        checked={filters.elevatorTypes?.includes(1) || false}
                                                        onChange={() => onMultiCheckboxHandler('elevatorTypes', 1, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-2">Пассажирский</span>
                                                </label>
                                                <label className="me-5 mt-2">
                                                    <input
                                                        type="checkbox"
                                                        name="lift"
                                                        value="Грузовой"
                                                        checked={filters.elevatorTypes?.includes(2) || false}
                                                        onChange={() => onMultiCheckboxHandler('elevatorTypes', 2, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-2">Грузовой</span>
                                                </label>
                                                <label className="me-5 mt-2">
                                                    <input
                                                        type="checkbox"
                                                        name="lift"
                                                        value="Пассажирский/грузовой"
                                                        checked={filters.elevatorTypes?.includes(3) || false}
                                                        onChange={() => onMultiCheckboxHandler('elevatorTypes', 3, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-2">Пассажирский/грузовой</span>
                                                </label>
                                                <label className="me-5 mt-2">
                                                    <input
                                                        type="checkbox"
                                                        name="lift"
                                                        value="Несколько"
                                                        checked={filters.elevatorTypes?.includes(4) || false}
                                                        onChange={() => onMultiCheckboxHandler('elevatorTypes', 4, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-2">Несколько</span>
                                                </label>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <hr/>
                                    <fieldset className="row">
                                        <div className="col-3">
                                            <legend className="fs-11">Высота потолков:</legend>
                                        </div>
                                        <div className="col-9">
                                            <div className="d-flex align-items-baseline">
                                                <div className="fs-11 me-3">От</div>
                                                <input
                                                    type="number"
                                                    className="length me-3"
                                                    value={filters.ceilingHeight || ''}
                                                    onChange={e => onInputHandler(e, 'ceilingHeight', true, setFilters)}
                                                />
                                            </div>
                                        </div>
                                    </fieldset>
                                    <hr/>
                                    <fieldset className="row">
                                        <div className="col-3">
                                            <legend className="fs-11">Дополнительно:</legend>
                                        </div>
                                        <div className="col-9">
                                            <div className="d-flex align-items-baseline flex-wrap">
                                                <label className="me-5 mt-2">
                                                    <input
                                                        type="checkbox"
                                                        name="hasRamp"
                                                        checked={filters.hasRamp || false}
                                                        onChange={e => onCheckboxHandler(e, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-2">Пандус</span>
                                                </label>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <hr/>
                                    <fieldset className="row">
                                        <div className="col-3">
                                            <legend className="fs-11">Мусоропровод:</legend>
                                        </div>
                                        <div className="col-9">
                                            <div className="d-flex align-items-baseline flex-wrap">
                                                <label className="me-5 mt-2">
                                                    <input
                                                        type="checkbox"
                                                        name="hasGarbageChute"
                                                        checked={filters.hasGarbageChute || false}
                                                        onChange={e => onCheckboxHandler(e, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-2">Есть</span>
                                                </label>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <hr/>
                                    <fieldset className="row">
                                        <div className="col-3">
                                            <legend className="fs-11">Парковка:</legend>
                                        </div>
                                        <div className="col-9">
                                            <div className="d-flex align-items-baseline flex-wrap">
                                                <label className="me-5 mt-2">
                                                    <input
                                                        type="checkbox"
                                                        name="hasGroundParking"
                                                        checked={filters.hasGroundParking || false}
                                                        onChange={e => onCheckboxHandler(e, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-2">Наземная</span>
                                                </label>
                                                <label className="me-5 mt-2">
                                                    <input
                                                        type="checkbox"
                                                        name="hasUnderGroundParking"
                                                        checked={filters.hasUnderGroundParking || false}
                                                        onChange={e => onCheckboxHandler(e, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-2">Подземная</span>
                                                </label>
                                                <label className="me-5 mt-2">
                                                    <input
                                                        type="checkbox"
                                                        name="hasMoreLayerParking"
                                                        checked={filters.hasMoreLayerParking || false}
                                                        onChange={e => onCheckboxHandler(e, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-2">Многоуровневая</span>
                                                </label>
                                                <label className="me-5 mt-2">
                                                    <input
                                                        type="checkbox"
                                                        name="hasBarrierParking"
                                                        checked={filters.hasBarrierParking || false}
                                                        onChange={e => onCheckboxHandler(e, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-2">Во дворе за шлагбаумом</span>
                                                </label>
                                                <label className="me-5 mt-2">
                                                    <input
                                                        type="checkbox"
                                                        name="hasYardParking"
                                                        checked={filters.hasYardParking || false}
                                                        onChange={e => onCheckboxHandler(e, setFilters)}
                                                    />
                                                    <span className="fs-11 ms-2">Открытая во дворе</span>
                                                </label>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <div className="fs-11 d-flex justify-content-between align-items-center mt-5">
                                        <div className="fw-6 gray-3">Найденно {foundCount} объявлений</div>
                                        <button
                                            type="submit"
                                            data-bs-dismiss="modal"
                                            className="btn btn-1"
                                            onClick={e => {
                                                e.preventDefault()
                                                onApplyFilters()
                                                callback()
                                            }}
                                        >
                                            ПОКАЗАТЬ
                                        </button>
                                        <button type="button" onClick={onResetFilters} className="color-1">Очистить
                                            фильтр
                                        </button>
                                    </div>
                                </form>
                            }
                        </div>
                    </div>
                </div>
            </div>

            <OffcanvasFilters
                callback={callback}
                className='offcanvas-catalog'
                isShow={isShowOffcanvasFilters}
                setIsShow={setIsShowOffcanvasFilters}
                scroll={true}
                backdrop={true}
                closeButton={true}
                filters={filters}
                setFilters={setFilters}
                onResetFilters={onResetFilters}
                onApplyFilters={onApplyFilters}
                foundCount={foundCount}
                searchParams={searchParams}
                searchParamsTransactionType={searchParamsTransactionType}
            />
        </>
    );
};

export default CatalogFilters;