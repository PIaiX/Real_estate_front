import React from 'react'
import {onInputHandler, onCheckboxHandler, onMultiCheckboxHandler} from '../helpers/collectDataFromForm'
import OffcanvasFilters from './OffcanvasFilters';

const CatalogFilters = ({filters, setFilters, onResetFilters, onApplyFilters, foundCount, isShowOffcanvasFilters, setIsShowOffcanvasFilters}) => {
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
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    name="layout"
                                                    value="Изолированная"
                                                    checked={filters.layoutTypes?.includes(0) || false}
                                                    onChange={() => onMultiCheckboxHandler('layoutTypes', 0, setFilters)}
                                                />
                                                <span className="fs-11 ms-3">Изолированная</span>
                                            </label>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    name="layout"
                                                    value="Смежная"
                                                    checked={filters.layoutTypes?.includes(1) || false}
                                                    onChange={() => onMultiCheckboxHandler('layoutTypes', 1, setFilters)}
                                                />
                                                <span className="fs-11 ms-3">Смежная</span>
                                            </label>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    name="layout"
                                                    value="Свободная"
                                                    checked={filters.layoutTypes?.includes(2) || false}
                                                    onChange={() => onMultiCheckboxHandler('layoutTypes', 2, setFilters)}
                                                />
                                                <span className="fs-11 ms-3">Свободная</span>
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
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    name="bathroom"
                                                    value="Раздельный"
                                                    checked={filters.WCTypes?.includes(0) || false}
                                                    onChange={() => onMultiCheckboxHandler('WCTypes', 0, setFilters)}
                                                />
                                                <span className="fs-11 ms-3">Раздельный</span>
                                            </label>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    name="bathroom"
                                                    value="Совмещенный"
                                                    checked={filters.WCTypes?.includes(1) || false}
                                                    onChange={() => onMultiCheckboxHandler('WCTypes', 1, setFilters)}
                                                />
                                                <span className="fs-11 ms-3">Совмещенный</span>
                                            </label>
                                            <label>
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
                                        <div className="d-flex align-items-baseline flex-wrap">
                                            <label className="me-5 mt-2">
                                                <input
                                                    type="checkbox"
                                                    name="house-type"
                                                    value="Кирпичный"
                                                    checked={filters.houseBuildingTypes?.includes(0) || false}
                                                    onChange={() => onMultiCheckboxHandler('houseBuildingTypes', 0, setFilters)}
                                                />
                                                <span className="fs-11 ms-2">Кирпичный</span>
                                            </label>
                                            <label className="me-5 mt-2">
                                                <input
                                                    type="checkbox"
                                                    name="house-type"
                                                    value="Панельный"
                                                    checked={filters.houseBuildingTypes?.includes(1) || false}
                                                    onChange={() => onMultiCheckboxHandler('houseBuildingTypes', 1, setFilters)}
                                                />
                                                <span className="fs-11 ms-2">Панельный</span>
                                            </label>
                                            <label className="me-5 mt-2">
                                                <input
                                                    type="checkbox"
                                                    name="house-type"
                                                    value="Монолитный"
                                                    checked={filters.houseBuildingTypes?.includes(2) || false}
                                                    onChange={() => onMultiCheckboxHandler('houseBuildingTypes', 2, setFilters)}
                                                />
                                                <span className="fs-11 ms-2">Монолитный</span>
                                            </label>
                                            <label className="me-5 mt-2">
                                                <input
                                                    type="checkbox"
                                                    name="house-type"
                                                    value="Блочный"
                                                    checked={filters.houseBuildingTypes?.includes(3) || false}
                                                    onChange={() => onMultiCheckboxHandler('houseBuildingTypes', 3, setFilters)}
                                                />
                                                <span className="fs-11 ms-2">Блочный</span>
                                            </label>
                                            <label className="mt-2">
                                                <input
                                                    type="checkbox"
                                                    name="house-type"
                                                    value="Деревянный"
                                                    checked={filters.houseBuildingTypes?.includes(4) || false}
                                                    onChange={() => onMultiCheckboxHandler('houseBuildingTypes', 4, setFilters)}
                                                />
                                                <span className="fs-11 ms-2">Деревянный</span>
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
                                        }}
                                    >
                                        ПОКАЗАТЬ
                                    </button>
                                    <button type="button" onClick={onResetFilters} className="color-1">Очистить фильтр
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <OffcanvasFilters
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
            />
        </>
    );
};

export default CatalogFilters;