import React from 'react';
import {onCheckboxHandler, onInputHandler, onMultiCheckboxHandler} from '../helpers/collectDataFromForm';
import CustomOffcanvas from './CustomOffcanvas';

const OffcanvasFilters = ({className, isShow, setIsShow, scroll, backdrop, closeButton, filters, setFilters, onResetFilters, onApplyFilters, foundCount, enforceFocus}) => {
    return (
        <CustomOffcanvas
            className={className}
            placement='start'
            isShow={isShow}
            setIsShow={setIsShow}
            scroll={scroll}
            backdrop={backdrop}
            closeButton={closeButton}
            enforceFocus={enforceFocus}
        >
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
                        checked={filters?.rentalTypes?.includes(2) || false}
                        onChange={() => onMultiCheckboxHandler('rentalTypes', 2, setFilters)}
                    />
                    <span className="fs-11 ms-3">Посуточно</span>
                </label>
                <label className="ps-2 mb-3">
                    <input
                        type="checkbox"
                        name="lease"
                        checked={filters?.rentalTypes?.includes(1) || false}
                        onChange={() => onMultiCheckboxHandler('rentalTypes', 1, setFilters)}
                    />
                    <span className="fs-11 ms-3">Несколько месяцев</span>
                </label>
                <label className="ps-2 mb-3">
                    <input
                        type="checkbox"
                        name="lease"
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
                        checked={filters?.repairTypes?.includes(3) || false}
                        onChange={() => onMultiCheckboxHandler('repairTypes', 3, setFilters)}
                    />
                    <span className="fs-11 ms-3">Без ремонта</span>
                </label>
                <label className="ps-2 mb-3">
                    <input
                        type="checkbox"
                        name="repair"
                        checked={filters?.repairTypes?.includes(0) || false}
                        onChange={() => onMultiCheckboxHandler('repairTypes', 0, setFilters)}
                    />
                    <span className="fs-11 ms-3">Косметический</span>
                </label>
                <label className="ps-2 mb-3">
                    <input
                        type="checkbox"
                        name="repair"
                        checked={filters?.repairTypes?.includes(1) || false}
                        onChange={() => onMultiCheckboxHandler('repairTypes', 1, setFilters)}
                    />
                    <span className="fs-11 ms-3">Евроремонт</span>
                </label>
                <label className="ps-2 mb-3">
                    <input
                        type="checkbox"
                        name="repair"
                        checked={filters?.repairTypes?.includes(2) || false}
                        onChange={() => onMultiCheckboxHandler('repairTypes', 2, setFilters)}
                    />
                    <span className="fs-11 ms-3">Дизайнерский</span>
                </label>
            </fieldset>
            <fieldset className="mb-4">
                <legend className="title-font fs-12 fw-6 mb-3">Дополнительные характеристики:</legend>
                <label className="ps-2 mb-3">
                    <input
                        type="checkbox"
                        name="hasKitchenFurniture"
                        checked={filters?.hasKitchenFurniture || false}
                        onChange={e => onCheckboxHandler(e, setFilters)}
                    />
                    <span className="fs-11 ms-3">Кухонная мебель</span>
                </label>
                <label className="ps-2 mb-3">
                    <input
                        type="checkbox"
                        name="hasFurniture"
                        checked={filters?.hasFurniture || false}
                        onChange={e => onCheckboxHandler(e, setFilters)}
                    />
                    <span className="fs-11 ms-3">Мебель в комнатах</span>
                </label>
                <label className="ps-2 mb-3">
                    <input
                        type="checkbox"
                        name="hasRefrigerator"
                        checked={filters?.hasRefrigerator || false}
                        onChange={e => onCheckboxHandler(e, setFilters)}
                    />
                    <span className="fs-11 ms-3">Холодильник</span>
                </label>
                <label className="ps-2 mb-3">
                    <input
                        type="checkbox"
                        name="hasWashingMachine"
                        checked={filters?.hasWashingMachine || false}
                        onChange={e => onCheckboxHandler(e, setFilters)}
                    />
                    <span className="fs-11 ms-3">Стиральная машина</span>
                </label>
                <label className="ps-2 mb-3">
                    <input
                        type="checkbox"
                        name="hasDishWasher"
                        checked={filters?.hasDishWasher || false}
                        onChange={e => onCheckboxHandler(e, setFilters)}
                    />
                    <span className="fs-11 ms-3">Посудомоечная машина</span>
                </label>
                <label className="ps-2 mb-3">
                    <input
                        type="checkbox"
                        name="hasTv"
                        checked={filters?.hasTv || false}
                        onChange={e => onCheckboxHandler(e, setFilters)}
                    />
                    <span className="fs-11 ms-3">Телевизор</span>
                </label>
                <label className="ps-2 mb-3">
                    <input
                        type="checkbox"
                        name="hasConditioner"
                        checked={filters?.hasConditioner || false}
                        onChange={e => onCheckboxHandler(e, setFilters)}
                    />
                    <span className="fs-11 ms-3">Кондиционер</span>
                </label>
                <label className="ps-2 mb-3">
                    <input
                        type="checkbox"
                        name="hasInternet"
                        checked={filters?.hasInternet || false}
                        onChange={e => onCheckboxHandler(e, setFilters)}
                    />
                    <span className="fs-11 ms-3">Интернет</span>
                </label>
                <label className="ps-2 mb-3">
                    <input
                        type="checkbox"
                        name="hasBathroom"
                        checked={filters?.hasBathroom || false}
                        onChange={e => onCheckboxHandler(e, setFilters)}
                    />
                    <span className="fs-11 ms-3">Ванна</span>
                </label>
                <label className="ps-2 mb-3">
                    <input
                        type="checkbox"
                        name="hasShowerCabin"
                        checked={filters?.hasShowerCabin || false}
                        onChange={e => onCheckboxHandler(e, setFilters)}
                    />
                    <span className="fs-11 ms-3">Душевая кабина</span>
                </label>
                <label className="ps-2 mb-3">
                    <input
                        type="checkbox"
                        name="withKids"
                        checked={filters?.withKids || false}
                        onChange={e => onCheckboxHandler(e, setFilters)}
                    />
                    <span className="fs-11 ms-3">Можно с детьми</span>
                </label>
                <label className="ps-2 mb-3">
                    <input
                        type="checkbox"
                        name="withPets"
                        checked={filters?.withPets || false}
                        onChange={e => onCheckboxHandler(e, setFilters)}
                    />
                    <span className="fs-11 ms-3">Можно с животными</span>
                </label>
            </fieldset>
            <div className="collapse" id="advanced-filter">
                <fieldset className="mb-4">
                    <legend className="title-font fs-12 fw-6 mb-3">Общая площадь:</legend>
                    <div className="d-flex align-items-baseline">
                        <div className="fs-11 me-2">От</div>
                        <input
                            type="number"
                            className="w-100 area me-3"
                            value={filters?.startTotalArea || ''}
                            onChange={e => onInputHandler(e, 'startTotalArea', true, setFilters)}
                        />
                        <div className="fs-11 me-2">До</div>
                        <input
                            type="number"
                            className="w-100 area"
                            value={filters?.endTotalArea || ''}
                            onChange={e => onInputHandler(e, 'endTotalArea', true, setFilters)}
                        />
                    </div>
                </fieldset>
                <fieldset className="mb-4">
                    <legend className="title-font fs-12 fw-6 mb-3">Жилая площадь:</legend>
                    <div className="d-flex align-items-baseline">
                        <div className="fs-11 me-2">От</div>
                        <input
                            type="number"
                            className="w-100 area me-3"
                            value={filters?.startLivingArea || ''}
                            onChange={e => onInputHandler(e, 'startLivingArea', true, setFilters)}
                        />
                        <div className="fs-11 me-2">До</div>
                        <input
                            type="number"
                            className="w-100 area"
                            value={filters?.endLivingArea || ''}
                            onChange={e => onInputHandler(e, 'endLivingArea', true, setFilters)}
                        />
                    </div>
                </fieldset>
                <fieldset className="mb-4">
                    <legend className="title-font fs-12 fw-6 mb-3">Площадь кухни:</legend>
                    <div className="d-flex align-items-baseline">
                        <div className="fs-11 me-2">От</div>
                        <input
                            type="number"
                            className="w-100 area me-3"
                            value={filters?.startKitchenArea || ''}
                            onChange={e => onInputHandler(e, 'startKitchenArea', true, setFilters)}
                        />
                        <div className="fs-11 me-2">До</div>
                        <input
                            type="number"
                            className="w-100 area"
                            value={filters?.endKitchenArea || ''}
                            onChange={e => onInputHandler(e, 'endKitchenArea', true, setFilters)}
                        />
                    </div>
                </fieldset>
                <fieldset className="mb-4">
                    <legend className="title-font fs-12 fw-6 mb-3">Планировка:</legend>
                    <label className="ps-2 mb-3">
                        <input
                            type="checkbox"
                            name="layout"
                            value="Изолированная"
                            checked={filters?.layoutTypes?.includes(0) || false}
                            onChange={() => onMultiCheckboxHandler('layoutTypes', 0, setFilters)}
                        />
                        <span className="fs-11 ms-3">Изолированная</span>
                    </label>
                    <label className="ps-2 mb-3">
                        <input
                            type="checkbox"
                            name="layout"
                            value="Смежная"
                            checked={filters?.layoutTypes?.includes(1) || false}
                            onChange={() => onMultiCheckboxHandler('layoutTypes', 1, setFilters)}
                        />
                        <span className="fs-11 ms-3">Смежная</span>
                    </label>
                    <label className="ps-2 mb-3">
                        <input
                            type="checkbox"
                            name="layout"
                            value="Свободная"
                            checked={filters?.layoutTypes?.includes(2) || false}
                            onChange={() => onMultiCheckboxHandler('layoutTypes', 2, setFilters)}
                        />
                        <span className="fs-11 ms-3">Свободная</span>
                    </label>
                </fieldset>
                <fieldset className="mb-4">
                    <legend className="title-font fs-12 fw-6 mb-3">Санузел:</legend>
                    <label className="ps-2 mb-3">
                        <input
                            type="checkbox"
                            name="bathroom"
                            value="Раздельный"
                            checked={filters?.WCTypes?.includes(0) || false}
                            onChange={() => onMultiCheckboxHandler('WCTypes', 0, setFilters)}
                        />
                        <span className="fs-11 ms-3">Раздельный</span>
                    </label>
                    <label className="ps-2 mb-3">
                        <input
                            type="checkbox"
                            name="bathroom"
                            value="Совмещенный"
                            checked={filters?.WCTypes?.includes(1) || false}
                            onChange={() => onMultiCheckboxHandler('WCTypes', 1, setFilters)}
                        />
                        <span className="fs-11 ms-3">Совмещенный</span>
                    </label>
                    <label className="ps-2 mb-3">
                        <input
                            type="checkbox"
                            name="bathroom"
                            value="2 и более"
                            checked={filters?.WCTypes?.includes(2) || false}
                            onChange={() => onMultiCheckboxHandler('WCTypes', 2, setFilters)}
                        />
                        <span className="fs-11 ms-3">2 и более</span>
                    </label>
                </fieldset>
                <fieldset className="mb-4">
                    <legend className="title-font fs-12 fw-6 mb-3">Этаж:</legend>
                    <div className="d-flex align-items-baseline">
                        <div className="fs-11 me-2">От</div>
                        <input
                            type="number"
                            className="w-100 me-3"
                            value={filters?.startFloor || ''}
                            onChange={e => onInputHandler(e, 'startFloor', true, setFilters)}
                        />
                        <div className="fs-11 me-2">До</div>
                        <input
                            type="number"
                            className="w-100"
                            value={filters?.endFloor || ''}
                            onChange={e => onInputHandler(e, 'endFloor', true, setFilters)}
                        />
                    </div>
                    <div className="d-flex align-items-baseline mt-2">
                        <label className="ps-2">
                            <input
                                type="checkbox"
                                name="notFirstFloor"
                                checked={filters?.notFirstFloor || false}
                                onChange={e => onCheckboxHandler(e, setFilters)}
                            />
                            <span className="fs-11 ms-3">Не первый</span>
                        </label>
                        <label className="ms-5">
                            <input
                                type="checkbox"
                                name="notLastFloor"
                                checked={filters?.notLastFloor || false}
                                onChange={e => onCheckboxHandler(e, setFilters)}
                            />
                            <span className="fs-11 ms-3">Не последний</span>
                        </label>
                    </div>
                </fieldset>
                <fieldset className="mb-4">
                    <legend className="title-font fs-12 fw-6 mb-3">Этажей в доме:</legend>
                    <div className="d-flex align-items-baseline">
                        <div className="fs-11 me-2">От</div>
                        <input
                            type="number"
                            className="w-100 me-3"
                            value={filters?.startMaxFloor || ''}
                            onChange={e => onInputHandler(e, 'startMaxFloor', true, setFilters)}
                        />
                        <div className="fs-11 me-2">До</div>
                        <input
                            type="number"
                            className="w-100"
                            value={filters?.endMaxFloor || ''}
                            onChange={e => onInputHandler(e, 'endMaxFloor', true, setFilters)}
                        />
                    </div>
                </fieldset>
                <fieldset className="mb-4">
                    <legend className="title-font fs-12 fw-6 mb-3">Балкон/Лоджия:</legend>
                    <label className="ps-2 mb-2">
                        <input
                            type="checkbox"
                            name="balcony"
                            value="Балкон"
                            checked={filters?.balconyTypes?.includes(1) || false}
                            onChange={() => onMultiCheckboxHandler('balconyTypes', 1, setFilters)}
                        />
                        <span className="fs-11 ms-3">Балкон</span>
                    </label>
                    <label className="ps-2 mb-2">
                        <input
                            type="checkbox"
                            name="balcony"
                            value="Лоджия"
                            checked={filters?.balconyTypes?.includes(2) || false}
                            onChange={() => onMultiCheckboxHandler('balconyTypes', 2, setFilters)}
                        />
                        <span className="fs-11 ms-3">Лоджия</span>
                    </label>
                    <label className="ps-2 mb-2">
                        <input
                            type="checkbox"
                            name="balcony"
                            value="Нет"
                            checked={filters?.balconyTypes?.includes(0) || false}
                            onChange={() => onMultiCheckboxHandler('balconyTypes', 0, setFilters)}
                        />
                        <span className="fs-11 ms-3">Нет</span>
                    </label>
                </fieldset>
                <fieldset className="mb-4">
                    <legend className="title-font fs-12 fw-6 mb-3">Тип дома:</legend>
                    <label className="ps-2 mb-2">
                        <input
                            type="checkbox"
                            name="house-type"
                            value="Кирпичный"
                            checked={filters?.houseBuildingTypes?.includes(0) || false}
                            onChange={() => onMultiCheckboxHandler('houseBuildingTypes', 0, setFilters)}
                        />
                        <span className="fs-11 ms-2">Кирпичный</span>
                    </label>
                    <label className="ps-2 mb-2">
                        <input
                            type="checkbox"
                            name="house-type"
                            value="Панельный"
                            checked={filters?.houseBuildingTypes?.includes(1) || false}
                            onChange={() => onMultiCheckboxHandler('houseBuildingTypes', 1, setFilters)}
                        />
                        <span className="fs-11 ms-2">Панельный</span>
                    </label>
                    <label className="ps-2 mb-2">
                        <input
                            type="checkbox"
                            name="house-type"
                            value="Монолитный"
                            checked={filters?.houseBuildingTypes?.includes(2) || false}
                            onChange={() => onMultiCheckboxHandler('houseBuildingTypes', 2, setFilters)}
                        />
                        <span className="fs-11 ms-2">Монолитный</span>
                    </label>
                    <label className="ps-2 mb-2">
                        <input
                            type="checkbox"
                            name="house-type"
                            value="Блочный"
                            checked={filters?.houseBuildingTypes?.includes(3) || false}
                            onChange={() => onMultiCheckboxHandler('houseBuildingTypes', 3, setFilters)}
                        />
                        <span className="fs-11 ms-2">Блочный</span>
                    </label>
                    <label className="ps-2 mb-2">
                        <input
                            type="checkbox"
                            name="house-type"
                            value="Деревянный"
                            checked={filters?.houseBuildingTypes?.includes(4) || false}
                            onChange={() => onMultiCheckboxHandler('houseBuildingTypes', 4, setFilters)}
                        />
                        <span className="fs-11 ms-2">Деревянный</span>
                    </label>
                </fieldset>
                <fieldset className="mb-4">
                    <legend className="title-font fs-12 fw-6 mb-3">Год постройки:</legend>
                    <div className="d-flex align-items-baseline">
                        <div className="fs-11 me-3">От</div>
                        <input
                            type="number"
                            className="me-3"
                            pattern="[0-9]{4}"
                            value={filters?.yearOfConstruction || ''}
                            onChange={e => onInputHandler(e, 'yearOfConstruction', setFilters)}
                        />
                    </div>
                </fieldset>
                <fieldset className="mb-4">
                    <legend className="title-font fs-12 fw-6 mb-3">Лифт:</legend>
                    <div className="d-flex align-items-baseline flex-wrap">
                        <label className="ps-2 me-5">
                            <input
                                type="checkbox"
                                name="lift"
                                value="Пассажирский"
                                checked={filters?.elevatorTypes?.includes(1) || false}
                                onChange={() => onMultiCheckboxHandler('elevatorTypes', 1, setFilters)}
                            />
                            <span className="fs-11 ms-2">Пассажирский</span>
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="lift"
                                value="Грузовой"
                                checked={filters?.elevatorTypes?.includes(2) || false}
                                onChange={() => onMultiCheckboxHandler('elevatorTypes', 2, setFilters)}
                            />
                            <span className="fs-11 ms-2">Грузовой</span>
                        </label>
                    </div>
                </fieldset>
                <fieldset className="mb-4">
                    <legend className="title-font fs-12 fw-6 mb-3">Высота потолков:</legend>
                    <div className="d-flex align-items-baseline">
                        <div className="fs-11 me-3">От</div>
                        <input
                            type="number"
                            className="length me-3"
                            value={filters?.ceilingHeight || ''}
                            onChange={e => onInputHandler(e, 'ceilingHeight', true, setFilters)}
                        />
                    </div>
                </fieldset>
                <fieldset className="mb-4">
                    <legend className="title-font fs-12 fw-6 mb-3">Дополнительно:</legend>
                    <div className="d-flex align-items-baseline flex-wrap">
                        <label className="ps-2">
                            <input
                                type="checkbox"
                                name="hasRamp"
                                checked={filters?.hasRamp || false}
                                onChange={e => onCheckboxHandler(e, setFilters)}
                            />
                            <span className="fs-11 ms-2">Пандус</span>
                        </label>
                    </div>
                </fieldset>
                <fieldset className="mb-4">
                    <legend className="title-font fs-12 fw-6 mb-3">Мусоропровод:</legend>
                    <div className="d-flex align-items-baseline flex-wrap">
                        <label className="ps-2">
                            <input
                                type="checkbox"
                                name="hasGarbageСhute"
                                checked={filters?.hasGarbageСhute || false}
                                onChange={e => onCheckboxHandler(e, setFilters)}
                            />
                            <span className="fs-11 ms-2">Есть</span>
                        </label>
                    </div>
                </fieldset>
                <fieldset className="mb-4">
                    <legend className="title-font fs-12 fw-6 mb-3">Парковка:</legend>
                    <label className="ps-2 mb-3">
                        <input
                            type="checkbox"
                            name="hasGroundParking"
                            checked={filters?.hasGroundParking || false}
                            onChange={e => onCheckboxHandler(e, setFilters)}
                        />
                        <span className="fs-11 ms-2">Наземная</span>
                    </label>
                    <label className="ps-2 mb-3">
                        <input
                            type="checkbox"
                            name="hasUnderGroundParking"
                            checked={filters?.hasUnderGroundParking || false}
                            onChange={e => onCheckboxHandler(e, setFilters)}
                        />
                        <span className="fs-11 ms-2">Подземная</span>
                    </label>
                    <label className="ps-2 mb-3">
                        <input
                            type="checkbox"
                            name="hasMoreLayerParking"
                            checked={filters?.hasMoreLayerParking || false}
                            onChange={e => onCheckboxHandler(e, setFilters)}
                        />
                        <span className="fs-11 ms-2">Многоуровневая</span>
                    </label>
                </fieldset>
            </div>
            <button className="btn-filter color-1 mx-auto btn-collapse" type="button" data-bs-toggle="collapse"
                    data-bs-target="#advanced-filter" aria-expanded="false">
                <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15.4286 -3.0664e-08L9 6.25L2.57143 -1.83984e-07L1.04343e-07 1.25L9 10L18 1.25L15.4286 -3.0664e-08Z"
                        fill="#146492"/>
                </svg>
                <span className="ms-3 fs-11 fw-5"></span>
            </button>
            <div className="offcanvas-footer">
                <div className="d-flex justify-content-between mb-3">
                    <div className="gray-3 fw-5">Найденно {foundCount} объявлений</div>
                    <button type="button" onClick={onResetFilters} className="color-1 fs-11 fw-5">Очистить фильтр
                    </button>
                </div>
                <button
                    type="submit"
                    className="btn btn-1 w-100 fs-11 text-uppercase"
                    onClick={e => {
                        e.preventDefault()
                        onApplyFilters()
                    }}
                >
                    Показать
                </button>
            </div>
        </CustomOffcanvas>
    );
};

export default OffcanvasFilters;