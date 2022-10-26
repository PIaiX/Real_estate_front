import React from 'react';
import {onCheckboxHandler, onInputHandler, onMultiCheckboxHandler} from '../helpers/collectDataFromForm';
import CustomOffcanvas from './CustomOffcanvas';

const OffcanvasFilters = (
    {
        className,
        isShow,
        setIsShow,
        scroll,
        backdrop,
        closeButton,
        filters,
        setFilters,
        onResetFilters,
        onApplyFilters,
        foundCount,
        enforceFocus,
        callback,
        searchParams,
        searchParamsTransactionType
    }) => {
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
            {
                searchParams === 1 &&
                <>
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
                        <legend className="title-font fs-12 fw-6 mb-3">Цена:</legend>
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
                        searchParamsTransactionType === 0 &&
                        <fieldset className="mb-4">
                            <legend className="title-font fs-12 fw-6 mb-3">Срок аренды:</legend>
                            <label className="ps-2 mb-3">
                                <input
                                    type="checkbox"
                                    name="lease"
                                    checked={filters?.rentalTypes?.includes(0) || false}
                                    onChange={() => onMultiCheckboxHandler('rentalTypes', 0, setFilters)}
                                />
                                <span className="fs-11 ms-3">Посуточно</span>
                            </label>
                            <label className="ps-2 mb-3">
                                <input
                                    type="checkbox"
                                    name="lease"
                                    checked={filters?.rentalTypes?.includes(3) || false}
                                    onChange={() => onMultiCheckboxHandler('rentalTypes', 3, setFilters)}
                                />
                                <span className="fs-11 ms-3">Краткосрочно</span>
                            </label>
                            <label className="ps-2 mb-3">
                                <input
                                    type="checkbox"
                                    name="lease"
                                    checked={filters?.rentalTypes?.includes(1) || false}
                                    onChange={() => onMultiCheckboxHandler('rentalTypes', 1, setFilters)}
                                />
                                <span className="fs-11 ms-3">Длительная аренда</span>
                            </label>
                        </fieldset>
                    }
                    <fieldset className="mb-4">
                        <legend className="title-font fs-12 fw-6 mb-3">Ремонт:</legend>
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
                        {
                            searchParamsTransactionType === 0 &&
                            <>
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
                            </>
                        }
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
                            <label className="ps-2 mb-3">
                                <input
                                    type="checkbox"
                                    name="layout"
                                    value="Смежно-изолированная"
                                    checked={filters.layoutTypes?.includes(3) || false}
                                    onChange={() => onMultiCheckboxHandler('layoutTypes', 3, setFilters)}
                                />
                                <span className="fs-11 ms-3">Смежно-изолированная</span>
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
                                    value="Несколько"
                                    checked={filters?.balconyTypes?.includes(3) || false}
                                    onChange={() => onMultiCheckboxHandler('balconyTypes', 3, setFilters)}
                                />
                                <span className="fs-11 ms-3">Несколько</span>
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
                            <label className="ps-2 mb-3">
                                <input
                                    type="checkbox"
                                    name="house-type"
                                    value="Кирпичный"
                                    checked={filters?.houseBuildingTypes?.includes(0) || false}
                                    onChange={() => onMultiCheckboxHandler('houseBuildingTypes', 0, setFilters)}
                                />
                                <span className="fs-11 ms-2">Кирпичный</span>
                            </label>
                            <label className="ps-2 mb-3">
                                <input
                                    type="checkbox"
                                    name="house-type"
                                    value="Панельный"
                                    checked={filters?.houseBuildingTypes?.includes(1) || false}
                                    onChange={() => onMultiCheckboxHandler('houseBuildingTypes', 1, setFilters)}
                                />
                                <span className="fs-11 ms-2">Панельный</span>
                            </label>
                            <label className="ps-2 mb-3">
                                <input
                                    type="checkbox"
                                    name="house-type"
                                    value="Монолитный"
                                    checked={filters?.houseBuildingTypes?.includes(2) || false}
                                    onChange={() => onMultiCheckboxHandler('houseBuildingTypes', 2, setFilters)}
                                />
                                <span className="fs-11 ms-2">Монолитный</span>
                            </label>
                            <label className="ps-2 mb-3">
                                <input
                                    type="checkbox"
                                    name="house-type"
                                    value="Блочный"
                                    checked={filters?.houseBuildingTypes?.includes(3) || false}
                                    onChange={() => onMultiCheckboxHandler('houseBuildingTypes', 3, setFilters)}
                                />
                                <span className="fs-11 ms-2">Блочный</span>
                            </label>
                            <label className="ps-2 mb-3">
                                <input
                                    type="checkbox"
                                    name="house-type"
                                    value="Деревянный"
                                    checked={filters?.houseBuildingTypes?.includes(4) || false}
                                    onChange={() => onMultiCheckboxHandler('houseBuildingTypes', 4, setFilters)}
                                />
                                <span className="fs-11 ms-2">Деревянный</span>
                            </label>
                            <label className="ps-2 mb-3">
                                <input
                                    type="checkbox"
                                    name="house-type"
                                    value="Кирпично-монолитный"
                                    checked={filters.houseBuildingTypes?.includes(5) || false}
                                    onChange={() => onMultiCheckboxHandler('houseBuildingTypes', 5, setFilters)}
                                />
                                <span className="fs-11 ms-2">Кирпично-монолитный</span>
                            </label>
                            <label className="ps-2 mb-3">
                                <input
                                    type="checkbox"
                                    name="house-type"
                                    value="Керамзитный"
                                    checked={filters.houseBuildingTypes?.includes(6) || false}
                                    onChange={() => onMultiCheckboxHandler('houseBuildingTypes', 6, setFilters)}
                                />
                                <span className="fs-11 ms-2">Керамзитный</span>
                            </label>
                            <label className="ps-2 mb-3">
                                <input
                                    type="checkbox"
                                    name="house-type"
                                    value="Газоблок"
                                    checked={filters.houseBuildingTypes?.includes(7) || false}
                                    onChange={() => onMultiCheckboxHandler('houseBuildingTypes', 7, setFilters)}
                                />
                                <span className="fs-11 ms-2">Газоблок</span>
                            </label>
                            <label className="ps-2 mb-3">
                                <input
                                    type="checkbox"
                                    name="house-type"
                                    value="Пеноблок"
                                    checked={filters.houseBuildingTypes?.includes(8) || false}
                                    onChange={() => onMultiCheckboxHandler('houseBuildingTypes', 8, setFilters)}
                                />
                                <span className="fs-11 ms-2">Пеноблок</span>
                            </label>
                            <label className="ps-2 mb-3">
                                <input
                                    type="checkbox"
                                    name="house-type"
                                    value="Армолитовые блоки"
                                    checked={filters.houseBuildingTypes?.includes(9) || false}
                                    onChange={() => onMultiCheckboxHandler('houseBuildingTypes', 9, setFilters)}
                                />
                                <span className="fs-11 ms-2">Армолитовые блоки</span>
                            </label>
                            <label className="ps-2 mb-3">
                                <input
                                    type="checkbox"
                                    name="house-type"
                                    value="Сип-панели"
                                    checked={filters.houseBuildingTypes?.includes(10) || false}
                                    onChange={() => onMultiCheckboxHandler('houseBuildingTypes', 10, setFilters)}
                                />
                                <span className="fs-11 ms-2">Сип-панели</span>
                            </label>
                            <label className="ps-2 mb-3">
                                <input
                                    type="checkbox"
                                    name="house-type"
                                    value="Смешанные"
                                    checked={filters.houseBuildingTypes?.includes(11) || false}
                                    onChange={() => onMultiCheckboxHandler('houseBuildingTypes', 11, setFilters)}
                                />
                                <span className="fs-11 ms-2">Смешанные</span>
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
                            <label className="ps-2 mb-3">
                                <input
                                    type="checkbox"
                                    name="lift"
                                    value="Пассажирский"
                                    checked={filters?.elevatorTypes?.includes(1) || false}
                                    onChange={() => onMultiCheckboxHandler('elevatorTypes', 1, setFilters)}
                                />
                                <span className="fs-11 ms-2">Пассажирский</span>
                            </label>
                            <label className='ps-2 mb-3'>
                                <input
                                    type="checkbox"
                                    name="lift"
                                    value="Грузовой"
                                    checked={filters?.elevatorTypes?.includes(2) || false}
                                    onChange={() => onMultiCheckboxHandler('elevatorTypes', 2, setFilters)}
                                />
                                <span className="fs-11 ms-2">Грузовой</span>
                            </label>
                            <label className="ps-2 mb-3">
                                <input
                                    type="checkbox"
                                    name="lift"
                                    value="Пассажирский/Грузовой"
                                    checked={filters.elevatorTypes?.includes(3) || false}
                                    onChange={() => onMultiCheckboxHandler('elevatorTypes', 3, setFilters)}
                                />
                                <span className="fs-11 ms-2">Пассажирский/Грузовой</span>
                            </label>
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
                            <legend className="title-font fs-12 fw-6 mb-3">Окна:</legend>
                            <label className='ps-2 mb-3'>
                                <input
                                    type="checkbox"
                                    name="windows"
                                    value="Во двор"
                                    checked={filters.window?.includes(0) || false}
                                    onChange={() => onMultiCheckboxHandler('window', 0, setFilters)}
                                />
                                <span className="fs-11 ms-3">Во двор</span>
                            </label>
                            <label className='ps-2 mb-3'>
                                <input
                                    type="checkbox"
                                    name="windows"
                                    value="На улицу"
                                    checked={filters.window?.includes(1) || false}
                                    onChange={() => onMultiCheckboxHandler('window', 1, setFilters)}
                                />
                                <span className="fs-11 ms-3">На улицу</span>
                            </label>
                            <label className='ps-2 mb-3'>
                                <input
                                    type="checkbox"
                                    name="windows"
                                    value="На солнечную сторону"
                                    checked={filters.window?.includes(2) || false}
                                    onChange={() => onMultiCheckboxHandler('window', 2, setFilters)}
                                />
                                <span className="fs-11 ms-3">На солнечную сторону</span>
                            </label>
                            <label className='ps-2 mb-3'>
                                <input
                                    type="checkbox"
                                    name="windows"
                                    value="На две стороны"
                                    checked={filters.window?.includes(3) || false}
                                    onChange={() => onMultiCheckboxHandler('window', 3, setFilters)}
                                />
                                <span className="fs-11 ms-3">На две стороны</span>
                            </label>
                        </fieldset>
                        <fieldset className="mb-4">
                            <legend className="title-font fs-12 fw-6 mb-3">Тип окон:</legend>

                                <label className='ps-2 mb-3'>
                                    <input
                                        type="checkbox"
                                        name="windowType"
                                        value="Обычное прямоугольное"
                                        checked={filters.windowType?.includes(0) || false}
                                        onChange={() => onMultiCheckboxHandler('windowType', 0, setFilters)}
                                    />
                                    <span className="fs-11 ms-3">Обычное прямоугольное</span>
                                </label>
                                <label className='ps-2 mb-3'>
                                    <input
                                        type="checkbox"
                                        name="windowType"
                                        value="С вращающейся рамой"
                                        checked={filters.windowType?.includes(1) || false}
                                        onChange={() => onMultiCheckboxHandler('windowType', 1, setFilters)}
                                    />
                                    <span className="fs-11 ms-3">С вращающейся рамой</span>
                                </label>
                                <label className='ps-2 mb-3'>
                                    <input
                                        type="checkbox"
                                        name="windowType"
                                        value="В нише"
                                        checked={filters.windowType?.includes(2) || false}
                                        onChange={() => onMultiCheckboxHandler('windowType', 2, setFilters)}
                                    />
                                    <span className="fs-11 ms-3">В нише</span>
                                </label>
                                <label className='ps-2 mb-3'>
                                    <input
                                        type="checkbox"
                                        name="windowType"
                                        value="Панорамное"
                                        checked={filters.windowType?.includes(3) || false}
                                        onChange={() => onMultiCheckboxHandler('windowType', 3, setFilters)}
                                    />
                                    <span className="fs-11 ms-3">Панорамное</span>
                                </label>
                                <label className='ps-2 mb-3'>
                                    <input
                                        type="checkbox"
                                        name="windowType"
                                        value="Французское"
                                        checked={filters.windowType?.includes(4) || false}
                                        onChange={() => onMultiCheckboxHandler('windowType', 4, setFilters)}
                                    />
                                    <span className="fs-11 ms-3">Французское</span>
                                </label>
                                <label className='ps-2 mb-3'>
                                    <input
                                        type="checkbox"
                                        name="windowType"
                                        value="Эркер"
                                        checked={filters.windowType?.includes(5) || false}
                                        onChange={() => onMultiCheckboxHandler('windowType', 5, setFilters)}
                                    />
                                    <span className="fs-11 ms-3">Эркер</span>
                                </label>
                                <label className='ps-2 mb-3'>
                                    <input
                                        type="checkbox"
                                        name="windowType"
                                        value="С изогнутым верхом"
                                        checked={filters.windowType?.includes(6) || false}
                                        onChange={() => onMultiCheckboxHandler('windowType', 6, setFilters)}
                                    />
                                    <span className="fs-11 ms-3">С изогнутым верхом</span>
                                </label>
                                <label className='ps-2 mb-3'>
                                    <input
                                        type="checkbox"
                                        name="windowType"
                                        value="Выгнутое"
                                        checked={filters.windowType?.includes(7) || false}
                                        onChange={() => onMultiCheckboxHandler('windowType', 7, setFilters)}
                                    />
                                    <span className="fs-11 ms-3">Выгнутое</span>
                                </label>
                                <label className='ps-2 mb-3'>
                                    <input
                                        type="checkbox"
                                        name="windowType"
                                        value="Со скользящей рамой"
                                        checked={filters.windowType?.includes(8) || false}
                                        onChange={() => onMultiCheckboxHandler('windowType', 8, setFilters)}
                                    />
                                    <span className="fs-11 ms-3">Со скользящей рамой</span>
                                </label>
                                <label className='ps-2 mb-3'>
                                    <input
                                        type="checkbox"
                                        name="windowType"
                                        value="Со створным переплетом"
                                        checked={filters.windowType?.includes(9) || false}
                                        onChange={() => onMultiCheckboxHandler('windowType', 9, setFilters)}
                                    />
                                    <span className="fs-11 ms-3">Со створным переплетом</span>
                                </label>
                        </fieldset>
                        <fieldset className="mb-4">
                            <legend className="title-font fs-12 fw-6 mb-3">Хозпостройки:</legend>
                            <label className='ps-2 mb-3'>
                                <input
                                    type="checkbox"
                                    name="outBuildingType"
                                    value="Гараж"
                                    checked={filters.outBuildingType?.includes(0) || false}
                                    onChange={() => onMultiCheckboxHandler('outBuildingType', 0, setFilters)}
                                />
                                <span className="fs-11 ms-3">Гараж</span>
                            </label>
                            <label className='ps-2 mb-3'>
                                <input
                                    type="checkbox"
                                    name="outBuildingType"
                                    value="Баня"
                                    checked={filters.outBuildingType?.includes(1) || false}
                                    onChange={() => onMultiCheckboxHandler('outBuildingType', 1, setFilters)}
                                />
                                <span className="fs-11 ms-3">Баня</span>
                            </label>
                            <label className='ps-2 mb-3'>
                                <input
                                    type="checkbox"
                                    name="outBuildingType"
                                    value="Хозпостройки"
                                    checked={filters.outBuildingType?.includes(2) || false}
                                    onChange={() => onMultiCheckboxHandler('outBuildingType', 2, setFilters)}
                                />
                                <span className="fs-11 ms-3">Хозпостройки</span>
                            </label>
                        </fieldset>
                        <fieldset className="mb-4">
                            <legend className="title-font fs-12 fw-6 mb-3">Подвал:</legend>
                            <label className='ps-2 mb-3'>
                                <input
                                    type="checkbox"
                                    name="hasBasement"
                                    value="Нет"
                                    checked={filters.hasBasement?.includes(0) || false}
                                    onChange={() => onMultiCheckboxHandler('hasBasement', 0, setFilters)}
                                />
                                <span className="fs-11 ms-3">Нет</span>
                            </label>
                            <label className='ps-2 mb-3'>
                                <input
                                    type="checkbox"
                                    name="hasBasement"
                                    value="Есть"
                                    checked={filters.hasBasement?.includes(1) || false}
                                    onChange={() => onMultiCheckboxHandler('hasBasement', 1, setFilters)}
                                />
                                <span className="fs-11 ms-3">Есть</span>
                            </label>
                        </fieldset>
                        <fieldset className="mb-4">
                            <legend className="title-font fs-12 fw-6 mb-3">Направление по Розе ветров:</legend>
                            <label className='ps-2 mb-3'>
                                <input
                                    type="checkbox"
                                    name="windRoseDirectionType"
                                    value="Север"
                                    checked={filters.windRoseDirectionType?.includes(0) || false}
                                    onChange={() => onMultiCheckboxHandler('windRoseDirectionType', 0, setFilters)}
                                />
                                <span className="fs-11 ms-3">Север</span>
                            </label>
                            <label className='ps-2 mb-3'>
                                <input
                                    type="checkbox"
                                    name="windRoseDirectionType"
                                    value="Юг"
                                    checked={filters.windRoseDirectionType?.includes(1) || false}
                                    onChange={() => onMultiCheckboxHandler('windRoseDirectionType', 1, setFilters)}
                                />
                                <span className="fs-11 ms-3">Юг</span>
                            </label>
                            <label className='ps-2 mb-3'>
                                <input
                                    type="checkbox"
                                    name="windRoseDirectionType"
                                    value="Запад"
                                    checked={filters.windRoseDirectionType?.includes(2) || false}
                                    onChange={() => onMultiCheckboxHandler('windRoseDirectionType', 2, setFilters)}
                                />
                                <span className="fs-11 ms-3">Запад</span>
                            </label>
                            <label className='ps-2 mb-3'>
                                <input
                                    type="checkbox"
                                    name="windRoseDirectionType"
                                    value="Восток"
                                    checked={filters.windRoseDirectionType?.includes(3) || false}
                                    onChange={() => onMultiCheckboxHandler('windRoseDirectionType', 3, setFilters)}
                                />
                                <span className="fs-11 ms-3">Восток</span>
                            </label>
                            <label className='ps-2 mb-3'>
                                <input
                                    type="checkbox"
                                    name="windRoseDirectionType"
                                    value="Северо-восток"
                                    checked={filters.windRoseDirectionType?.includes(4) || false}
                                    onChange={() => onMultiCheckboxHandler('windRoseDirectionType', 4, setFilters)}
                                />
                                <span className="fs-11 ms-3">Северо-восток</span>
                            </label>
                            <label className='ps-2 mb-3'>
                                <input
                                    type="checkbox"
                                    name="windRoseDirectionType"
                                    value="Юго-восток"
                                    checked={filters.windRoseDirectionType?.includes(5) || false}
                                    onChange={() => onMultiCheckboxHandler('windRoseDirectionType', 5, setFilters)}
                                />
                                <span className="fs-11 ms-3">Юго-восток</span>
                            </label>
                            <label className='ps-2 mb-3'>
                                <input
                                    type="checkbox"
                                    name="windRoseDirectionType"
                                    value="Северо-запад"
                                    checked={filters.windRoseDirectionType?.includes(6) || false}
                                    onChange={() => onMultiCheckboxHandler('windRoseDirectionType', 6, setFilters)}
                                />
                                <span className="fs-11 ms-3">Северо-запад</span>
                            </label>
                            <label className='ps-2 mb-3'>
                                <input
                                    type="checkbox"
                                    name="windRoseDirectionType"
                                    value="Юго-запад"
                                    checked={filters.windRoseDirectionType?.includes(7) || false}
                                    onChange={() => onMultiCheckboxHandler('windRoseDirectionType', 7, setFilters)}
                                />
                                <span className="fs-11 ms-3">Юго-запад</span>
                            </label>
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
                            <label className="ps-2 mb-3">
                                <input
                                    type="checkbox"
                                    name="hasYardParking"
                                    checked={filters.hasYardParking || false}
                                    onChange={e => onCheckboxHandler(e, setFilters)}
                                />
                                <span className="fs-11 ms-2">Открытая во дворе</span>
                            </label>
                            <label className="ps-2 mb-3">
                                <input
                                    type="checkbox"
                                    name="hasBarrierParking"
                                    checked={filters.hasBarrierParking || false}
                                    onChange={e => onCheckboxHandler(e, setFilters)}
                                />
                                <span className="fs-11 ms-2">Во дворе за шлагбаумом</span>
                            </label>
                        </fieldset>
                    </div>
                </>
            }

            {
                searchParams === 2 &&
                <>
                    <fieldset className="mb-4">
                        <legend className="title-font fs-12 fw-6 mb-3">Площадь:</legend>
                        <div className="d-flex align-items-baseline">
                            <div className="fs-11 me-2">От</div>
                            <input
                                type="number"
                                className="w-100 me-3"
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
                        <legend className="title-font fs-12 fw-6 mb-3">Год постройки:</legend>
                        <div className="d-flex align-items-baseline">
                            <div className="fs-11 me-2">От</div>
                            <input
                                type="number"
                                className="me-3"
                                value={filters?.startCityDistance || ''}
                                onChange={(e) => onInputHandler(e, 'startCityDistance', true, setFilters)}
                            />
                        </div>
                    </fieldset>
                </>
            }

            {
                searchParams === 3 &&
                <>
                    <fieldset className="mb-4">
                        <legend className="title-font fs-12 fw-6 mb-3">Площадь, соток:</legend>
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
                        <legend className="title-font fs-12 fw-6 mb-3">Расстояние до города:</legend>
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
                </>
            }

            {
                searchParams === 4 &&
                <>
                    <fieldset className="mb-4">
                        <legend className="title-font fs-12 fw-6 mb-3">Тип здания:</legend>
                        <label className="ps-2 mb-3">
                            <input
                                type="checkbox"
                                name="repair"
                                value="no repair"
                                checked={filters?.buildingType?.includes(0) || false}
                                onChange={() => onMultiCheckboxHandler('buildingType', 0, setFilters)}
                            />
                            <span className="fs-11 ms-3">Бизнес-центр</span>
                        </label>
                        <label className="ps-2 mb-3">
                            <input
                                type="checkbox"
                                name="repair"
                                value="repair 1"
                                checked={filters?.buildingType?.includes(1) || false}
                                onChange={() => onMultiCheckboxHandler('buildingType', 1, setFilters)}
                            />
                            <span className="fs-11 ms-3">Торговый центр</span>
                        </label>
                        <label className="ps-2 mb-3">
                            <input
                                type="checkbox"
                                name="repair"
                                value="repair 2"
                                checked={filters?.buildingType?.includes(2) || false}
                                onChange={() => onMultiCheckboxHandler('buildingType', 2, setFilters)}
                            />
                            <span className="fs-11 ms-3">Административное здание</span>
                        </label>
                        <label className="ps-2 mb-3">
                            <input
                                type="checkbox"
                                name="repair"
                                value="repair 3"
                                checked={filters?.buildingType?.includes(3) || false}
                                onChange={() => onMultiCheckboxHandler('buildingType', 3, setFilters)}
                            />
                            <span className="fs-11 ms-3">Жилой дом</span>
                        </label>
                        <label className="ps-2 mb-3">
                            <input
                                type="checkbox"
                                name="repair"
                                value="repair 3"
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
                                className="me-3"
                                value={filters?.yearOfConstruction || ''}
                                onChange={(e) => onInputHandler(e, 'yearOfConstruction', true, setFilters)}
                            />
                        </div>
                    </fieldset>
                    <fieldset className="mb-4">
                        <legend className="title-font fs-12 fw-6 mb-3">Тип дома:</legend>
                        <label className="ps-2 mb-3">
                            <input
                                type="checkbox"
                                name="repair"
                                value="no repair"
                                checked={filters?.houseBuildingType?.includes(0) || false}
                                onChange={() => onMultiCheckboxHandler('houseBuildingType', 0, setFilters)}
                            />
                            <span className="fs-11 ms-3">Кирпичный</span>
                        </label>
                        <label className="ps-2 mb-3">
                            <input
                                type="checkbox"
                                name="repair"
                                value="repair 1"
                                checked={filters?.houseBuildingType?.includes(1) || false}
                                onChange={() => onMultiCheckboxHandler('houseBuildingType', 1, setFilters)}
                            />
                            <span className="fs-11 ms-3">Кирпично-монолитный</span>
                        </label>
                        <label className="ps-2 mb-3">
                            <input
                                type="checkbox"
                                name="repair"
                                value="repair 2"
                                checked={filters?.houseBuildingType?.includes(2) || false}
                                onChange={() => onMultiCheckboxHandler('houseBuildingType', 2, setFilters)}
                            />
                            <span className="fs-11 ms-3">Панельный</span>
                        </label>
                        <label className="ps-2 mb-3">
                            <input
                                type="checkbox"
                                name="repair"
                                value="repair 3"
                                checked={filters?.houseBuildingType?.includes(3) || false}
                                onChange={() => onMultiCheckboxHandler('houseBuildingType', 3, setFilters)}
                            />
                            <span className="fs-11 ms-3">Монолитный</span>
                        </label>
                        <label className="ps-2 mb-3">
                            <input
                                type="checkbox"
                                name="repair"
                                value="repair 3"
                                checked={filters?.houseBuildingType?.includes(4) || false}
                                onChange={() => onMultiCheckboxHandler('houseBuildingType', 4, setFilters)}
                            />
                            <span className="fs-11 ms-3">Блочный</span>
                        </label>
                        <label className="ps-2 mb-3">
                            <input
                                type="checkbox"
                                name="repair"
                                value="repair 3"
                                checked={filters?.houseBuildingType?.includes(5) || false}
                                onChange={() => onMultiCheckboxHandler('houseBuildingType', 5, setFilters)}
                            />
                            <span className="fs-11 ms-3">Деревянный</span>
                        </label>
                        <label className="ps-2 mb-3">
                            <input
                                type="checkbox"
                                name="repair"
                                value="repair 3"
                                checked={filters?.houseBuildingType?.includes(6) || false}
                                onChange={() => onMultiCheckboxHandler('houseBuildingType', 6, setFilters)}
                            />
                            <span className="fs-11 ms-3">Керамзитный</span>
                        </label>
                        <label className="ps-2 mb-3">
                            <input
                                type="checkbox"
                                name="repair"
                                value="repair 3"
                                checked={filters?.houseBuildingType?.includes(7) || false}
                                onChange={() => onMultiCheckboxHandler('houseBuildingType', 7, setFilters)}
                            />
                            <span className="fs-11 ms-3">Газоблок</span>
                        </label>
                        <label className="ps-2 mb-3">
                            <input
                                type="checkbox"
                                name="repair"
                                value="repair 3"
                                checked={filters?.houseBuildingType?.includes(8) || false}
                                onChange={() => onMultiCheckboxHandler('houseBuildingType', 8, setFilters)}
                            />
                            <span className="fs-11 ms-3">Пеноблок</span>
                        </label>
                        <label className="ps-2 mb-3">
                            <input
                                type="checkbox"
                                name="repair"
                                value="repair 3"
                                checked={filters?.houseBuildingType?.includes(9) || false}
                                onChange={() => onMultiCheckboxHandler('houseBuildingType', 9, setFilters)}
                            />
                            <span className="fs-11 ms-3">Армолитовые блоки</span>
                        </label>
                        <label className="ps-2 mb-3">
                            <input
                                type="checkbox"
                                name="repair"
                                value="repair 3"
                                checked={filters?.houseBuildingType?.includes(10) || false}
                                onChange={() => onMultiCheckboxHandler('houseBuildingType', 10, setFilters)}
                            />
                            <span className="fs-11 ms-3">Сип-панели</span>
                        </label>
                        <label className="ps-2 mb-3">
                            <input
                                type="checkbox"
                                name="repair"
                                value="repair 3"
                                checked={filters?.houseBuildingType?.includes(11) || false}
                                onChange={() => onMultiCheckboxHandler('houseBuildingType', 11, setFilters)}
                            />
                            <span className="fs-11 ms-3">Смешанные</span>
                        </label>
                    </fieldset>
                    <div className="collapse" id="advanced-filter">
                        <fieldset className="mb-4">
                            <legend className="title-font fs-12 fw-6 mb-3">Лифт:</legend>
                                    <label className="ps-2 mb-3">
                                        <input
                                            type="checkbox"
                                            name="lift"
                                            value="Нет"
                                            checked={filters.elevatorTypes?.includes(0) || false}
                                            onChange={() => onMultiCheckboxHandler('elevatorTypes', 0, setFilters)}
                                        />
                                        <span className="fs-11 ms-2">Нет</span>
                                    </label>
                                    <label className="ps-2 mb-3">
                                        <input
                                            type="checkbox"
                                            name="lift"
                                            value="Пассажирский"
                                            checked={filters.elevatorTypes?.includes(1) || false}
                                            onChange={() => onMultiCheckboxHandler('elevatorTypes', 1, setFilters)}
                                        />
                                        <span className="fs-11 ms-2">Пассажирский</span>
                                    </label>
                                    <label className="ps-2 mb-3">
                                        <input
                                            type="checkbox"
                                            name="lift"
                                            value="Грузовой"
                                            checked={filters.elevatorTypes?.includes(2) || false}
                                            onChange={() => onMultiCheckboxHandler('elevatorTypes', 2, setFilters)}
                                        />
                                        <span className="fs-11 ms-2">Грузовой</span>
                                    </label>
                                    <label className="ps-2 mb-3">
                                        <input
                                            type="checkbox"
                                            name="lift"
                                            value="Пассажирский/грузовой"
                                            checked={filters.elevatorTypes?.includes(3) || false}
                                            onChange={() => onMultiCheckboxHandler('elevatorTypes', 3, setFilters)}
                                        />
                                        <span className="fs-11 ms-2">Пассажирский/грузовой</span>
                                    </label>
                                    <label className="ps-2 mb-3">
                                        <input
                                            type="checkbox"
                                            name="lift"
                                            value="Несколько"
                                            checked={filters.elevatorTypes?.includes(4) || false}
                                            onChange={() => onMultiCheckboxHandler('elevatorTypes', 4, setFilters)}
                                        />
                                        <span className="fs-11 ms-2">Несколько</span>
                                    </label>
                        </fieldset>

                        <fieldset className="mb-4">
                            <legend className="title-font fs-12 fw-6 mb-3">Высота потолков:</legend>
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

                        <fieldset className="mb-4">
                            <legend className="title-font fs-12 fw-6 mb-3">Дополнительно:</legend>
                            <div className="col-9">
                                <div className="d-flex align-items-baseline flex-wrap">
                                    <label className="ps-2 mb-3">
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

                        <fieldset className="mb-4">
                            <legend className="title-font fs-12 fw-6 mb-3">Мусоропровод:</legend>
                            <div className="col-9">
                                <div className="d-flex align-items-baseline flex-wrap">
                                    <label className="ps-2 mb-3">
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
                        <fieldset className="mb-4">
                            <legend className="title-font fs-12 fw-6 mb-3">Парковка:</legend>
                            <div className="col-9">
                                <div className="d-flex align-items-baseline flex-wrap">
                                    <label className="ps-2 mb-3">
                                        <input
                                            type="checkbox"
                                            name="hasGroundParking"
                                            checked={filters.hasGroundParking || false}
                                            onChange={e => onCheckboxHandler(e, setFilters)}
                                        />
                                        <span className="fs-11 ms-2">Наземная</span>
                                    </label>
                                    <label className="ps-2 mb-3">
                                        <input
                                            type="checkbox"
                                            name="hasUnderGroundParking"
                                            checked={filters.hasUnderGroundParking || false}
                                            onChange={e => onCheckboxHandler(e, setFilters)}
                                        />
                                        <span className="fs-11 ms-2">Подземная</span>
                                    </label>
                                    <label className="ps-2 mb-3">
                                        <input
                                            type="checkbox"
                                            name="hasMoreLayerParking"
                                            checked={filters.hasMoreLayerParking || false}
                                            onChange={e => onCheckboxHandler(e, setFilters)}
                                        />
                                        <span className="fs-11 ms-2">Многоуровневая</span>
                                    </label>
                                    <label className="ps-2 mb-3">
                                        <input
                                            type="checkbox"
                                            name="hasBarrierParking"
                                            checked={filters.hasBarrierParking || false}
                                            onChange={e => onCheckboxHandler(e, setFilters)}
                                        />
                                        <span className="fs-11 ms-2">Во дворе за шлагбаумом</span>
                                    </label>
                                    <label className="ps-2 mb-3">
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
                    </div>
                </>
            }
            {(searchParams === 1 || searchParams === 4) &&
                <button className="btn-filter color-1 mx-auto btn-collapse mb-4" type="button" data-bs-toggle="collapse"
                        data-bs-target="#advanced-filter" aria-expanded="false">
                    <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.4286 -3.0664e-08L9 6.25L2.57143 -1.83984e-07L1.04343e-07 1.25L9 10L18 1.25L15.4286 -3.0664e-08Z"
                            fill="#146492"/>
                    </svg>
                    <span className="ms-3 fs-11 fw-5"/>
                </button>
            }
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
                        setIsShow(false)
                        callback()
                    }}
                >
                    Показать
                </button>
            </div>
        </CustomOffcanvas>
    );
};

export default OffcanvasFilters;