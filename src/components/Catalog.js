import React from 'react';
import { NavLink } from 'react-router-dom';
import CustomSelect from '../utilities/CustomSelect';
import CustomSelectMultyDual from '../utilities/CustomSelectMultyDual';
import Card from './Card';

export default function Catalog() {
    return (
        <main>
            <div className="container py-4">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
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
                        <button type="button" className="d-flex d-lg-none align-items-center">
                            <img src="/real_estate/img/icons/filter.svg" alt="filter"/>
                            <span className="ms-2 fs-11 fw-5 color-1">Фильтры</span>
                        </button>
                        <button type="button" className="d-flex align-items-center">
                            <img src="/real_estate/img/icons/pin.svg" alt="map pin"/>
                            <span className="ms-2 fs-11 fw-5 color-2">Показать на карте</span>
                        </button>
                    </div>

                    <CustomSelect className="sel-1" btnClass="btn btn-2 px-3" checkedOpt="Снять" options={['Купить', 'Продать', 'Сдать', 'Снять']}/>

                    <CustomSelect className="sel-2" btnClass="btn btn-2 px-3" checkedOpt="Квартиры" options={['Квартиры', 'Комнаты', 'Дома', 'Дачи', 'Коттеджи', 'Гаражи и парковки', 'Земельные участки', 'Коммерческая недвижимость']}/>

                    <CustomSelectMultyDual className="sel-3" btnClass="btn btn-2 px-3" checkedDist={['Авиастроительный', 'Вахитовский']} checkedSt={['Яшьлек', 'Козья слобода']} districts={['Авиастроительный', 'Вахитовский', 'Кировский', 'Московский', 'Ново-Савиновский', 'Приволжский', 'Советский']} stations={['Авиастроительная', 'Северный вокзал', 'Яшьлек', 'Козья слобода', 'Кремлёвская', 'Площадь Габдуллы Тукая', 'Суконная слобода', 'Аметьево', 'Горки', 'Проспект Победы', 'Дубравная']}/>

                    
                    <input type="search" placeholder="Адрес или ЖК" />
                    <button type="submit" className="btn btn-1">Поиск</button>

                    <div className="popular-queries">
                    <div>Популярные запросы:</div>
                    <button type="button">Студия</button>
                    <button type="button">1 комнатная</button>
                    <button type="button">2 комнатная</button>
                    <button type="button">3 комнатная</button>
                    <button type="button">С мебелью</button>
                    <button type="button">Без мебели</button>
                    <button type="button">Есть лифт</button>
                    <button type="button">Можно с животными</button>
                    <button type="button">Можно с детьми</button>
                </div>
                </form>

                <div className="row">
                    <div className="d-none d-lg-block col-4 col-xxl-3">
                        <div className="fs-11 mb-4">Найдено 1 200 объявлений</div>
                        <form className="shad-box p-4 mb-4">
                            <fieldset className="mb-4">
                                <legend className="title-font fs-12 fw-6 mb-3">Количество комнат</legend>
                                <label className="ps-2 mb-3">
                                    <input type="checkbox" name="rooms" value="1room"/>
                                    <span className="fs-11 ms-3">1 комнатная</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input type="checkbox" name="rooms" value="2room"/>
                                    <span className="fs-11 ms-3">2 комнатная</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input type="checkbox" name="rooms" value="3room"/>
                                    <span className="fs-11 ms-3">3 комнатная</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input type="checkbox" name="rooms" value="4room"/>
                                    <span className="fs-11 ms-3">4 комнатная</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input type="checkbox" name="rooms" value="5room"/>
                                    <span className="fs-11 ms-3">5 комнатная</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input type="checkbox" name="rooms" value="6room"/>
                                    <span className="fs-11 ms-3">6 комнатная</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input type="checkbox" name="rooms" value="studio"/>
                                    <span className="fs-11 ms-3">Студия</span>
                                </label>
                            </fieldset>
                            <fieldset className="mb-4">
                                <legend className="title-font fs-12 fw-6 mb-3">Цена</legend>
                                <div className="d-flex align-items-baseline">
                                    <div className="fs-11 me-2">От</div>
                                    <input type="number" className="price me-3"/>
                                    <div className="fs-11 me-2">До</div>
                                    <input type="number" className="price"/>
                                </div>
                            </fieldset>

                            <fieldset className="mb-4">
                                <legend className="title-font fs-12 fw-6 mb-3">Срок аренды</legend>
                                <label className="ps-2 mb-3">
                                    <input type="checkbox" name="lease" value="lease 1"/>
                                    <span className="fs-11 ms-3">Посуточно</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input type="checkbox" name="lease" value="lease 2"/>
                                    <span className="fs-11 ms-3">Несколько месяцев</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input type="checkbox" name="lease" value="lease 3"/>
                                    <span className="fs-11 ms-3">Длительная аренда</span>
                                </label>
                            </fieldset>

                            <fieldset className="mb-4">
                                <legend className="title-font fs-12 fw-6 mb-3">Ремонт</legend>
                                <label className="ps-2 mb-3">
                                    <input type="checkbox" name="repair" value="no repair"/>
                                    <span className="fs-11 ms-3">Без ремонта</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input type="checkbox" name="repair" value="repair 1"/>
                                    <span className="fs-11 ms-3">Косметический</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input type="checkbox" name="repair" value="repair 2"/>
                                    <span className="fs-11 ms-3">Евроремонт</span>
                                </label>
                                <label className="ps-2 mb-3">
                                    <input type="checkbox" name="repair" value="repair 3"/>
                                    <span className="fs-11 ms-3">Дизайнерский</span>
                                </label>
                            </fieldset>

                            <button type="button" className="btn btn-1 w-100 fs-15" data-bs-toggle="modal" data-bs-target="#exampleModal">Еще фильтры</button>
                            <button type="button" onClick={(e) => e.target.closest("form").reset()} className="color-1 fs-11 fw-5 mx-auto mt-2">Очистить фильтр</button>
                        </form>
                    </div>
                    <div className="col-12 col-lg-8 col-xxl-9">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <div className="d-lg-none">Найдено 1 200 объявлений</div>
                            <CustomSelect className="gray-2" btnClass="fs-11" checkedOpt="Сначала новые" options={['По популярности', 'Сначала новые', 'Сначала старые', 'Сначала дешевые', 'Сначала дорогие']}/>
                            <button type="button" className="fs-11 d-none d-lg-flex">
                                <span className="me-3">Показать списком</span>
                                <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="28" height="5.6" rx="1" fill="#E5E5E5"/>
                                    <rect y="9.3335" width="28" height="5.6" rx="1" fill="#E5E5E5"/>
                                    <rect y="18.6665" width="28" height="6.53333" rx="1" fill="#E5E5E5"/>
                                </svg>
                            </button>
                        </div>
                        <div className="row row-cols-sm-2 row-cols-xxl-3 g-4">
                            <div>
                                <Card 
                                    url="/real_estate/img/img3.jpg" 
                                    title="1-к, квартира 52м2" 
                                    price="6 000 000 ₽" 
                                    addressName="ЖК “Столичный”" 
                                    address="Вахитовский район, ул. Четаева 32" 
                                    text="Новый дом. Консьерж. Квартира после евро ремонта. Полы ламинат. Кондиционеры. Рядом школа и деский сад..."
                                    date="Вчера в 21:00"
                                />
                            </div>
                            <div>
                                <Card 
                                    url="/real_estate/img/img3.jpg" 
                                    title="1-к, квартира 52м2" 
                                    price="6 000 000 ₽" 
                                    addressName="ЖК “Столичный”" 
                                    address="Вахитовский район, ул. Четаева 32" 
                                    text="Новый дом. Консьерж. Квартира после евро ремонта. Полы ламинат. Кондиционеры. Рядом школа и деский сад..."
                                    date="Вчера в 21:00"
                                />
                            </div>
                            <div>
                                <Card 
                                    url="/real_estate/img/img3.jpg" 
                                    title="1-к, квартира 52м2" 
                                    price="6 000 000 ₽" 
                                    addressName="ЖК “Столичный”" 
                                    address="Вахитовский район, ул. Четаева 32" 
                                    text="Новый дом. Консьерж. Квартира после евро ремонта. Полы ламинат. Кондиционеры. Рядом школа и деский сад..."
                                    date="Вчера в 21:00"
                                />
                            </div>
                            <div>
                                <Card 
                                    url="/real_estate/img/img3.jpg" 
                                    title="1-к, квартира 52м2" 
                                    price="6 000 000 ₽" 
                                    addressName="ЖК “Столичный”" 
                                    address="Вахитовский район, ул. Четаева 32" 
                                    text="Новый дом. Консьерж. Квартира после евро ремонта. Полы ламинат. Кондиционеры. Рядом школа и деский сад..."
                                    date="Вчера в 21:00"
                                />
                            </div>
                            <div>
                                <Card 
                                    url="/real_estate/img/img3.jpg" 
                                    title="1-к, квартира 52м2" 
                                    price="6 000 000 ₽" 
                                    addressName="ЖК “Столичный”" 
                                    address="Вахитовский район, ул. Четаева 32" 
                                    text="Новый дом. Консьерж. Квартира после евро ремонта. Полы ламинат. Кондиционеры. Рядом школа и деский сад..."
                                    date="Вчера в 21:00"
                                />
                            </div>
                            <div>
                                <Card 
                                    url="/real_estate/img/img3.jpg" 
                                    title="1-к, квартира 52м2" 
                                    price="6 000 000 ₽" 
                                    addressName="ЖК “Столичный”" 
                                    address="Вахитовский район, ул. Четаева 32" 
                                    text="Новый дом. Консьерж. Квартира после евро ремонта. Полы ламинат. Кондиционеры. Рядом школа и деский сад..."
                                    date="Вчера в 21:00"
                                />
                            </div>
                            <div>
                                <Card 
                                    url="/real_estate/img/img3.jpg" 
                                    title="1-к, квартира 52м2" 
                                    price="6 000 000 ₽" 
                                    addressName="ЖК “Столичный”" 
                                    address="Вахитовский район, ул. Четаева 32" 
                                    text="Новый дом. Консьерж. Квартира после евро ремонта. Полы ламинат. Кондиционеры. Рядом школа и деский сад..."
                                    date="Вчера в 21:00"
                                />
                            </div>
                            <div>
                                <Card 
                                    url="/real_estate/img/img3.jpg" 
                                    title="1-к, квартира 52м2" 
                                    price="6 000 000 ₽" 
                                    addressName="ЖК “Столичный”" 
                                    address="Вахитовский район, ул. Четаева 32" 
                                    text="Новый дом. Консьерж. Квартира после евро ремонта. Полы ламинат. Кондиционеры. Рядом школа и деский сад..."
                                    date="Вчера в 21:00"
                                />
                            </div>
                            <div>
                                <Card 
                                    url="/real_estate/img/img3.jpg" 
                                    title="1-к, квартира 52м2" 
                                    price="6 000 000 ₽" 
                                    addressName="ЖК “Столичный”" 
                                    address="Вахитовский район, ул. Четаева 32" 
                                    text="Новый дом. Консьерж. Квартира после евро ремонта. Полы ламинат. Кондиционеры. Рядом школа и деский сад..."
                                    date="Вчера в 21:00"
                                />
                            </div>
                            <div>
                                <Card 
                                    url="/real_estate/img/img3.jpg" 
                                    title="1-к, квартира 52м2" 
                                    price="6 000 000 ₽" 
                                    addressName="ЖК “Столичный”" 
                                    address="Вахитовский район, ул. Четаева 32" 
                                    text="Новый дом. Консьерж. Квартира после евро ремонта. Полы ламинат. Кондиционеры. Рядом школа и деский сад..."
                                    date="Вчера в 21:00"
                                />
                            </div>
                            <div>
                                <Card 
                                    url="/real_estate/img/img3.jpg" 
                                    title="1-к, квартира 52м2" 
                                    price="6 000 000 ₽" 
                                    addressName="ЖК “Столичный”" 
                                    address="Вахитовский район, ул. Четаева 32" 
                                    text="Новый дом. Консьерж. Квартира после евро ремонта. Полы ламинат. Кондиционеры. Рядом школа и деский сад..."
                                    date="Вчера в 21:00"
                                />
                            </div>
                            <div>
                                <Card 
                                    url="/real_estate/img/img3.jpg" 
                                    title="1-к, квартира 52м2" 
                                    price="6 000 000 ₽" 
                                    addressName="ЖК “Столичный”" 
                                    address="Вахитовский район, ул. Четаева 32" 
                                    text="Новый дом. Консьерж. Квартира после евро ремонта. Полы ламинат. Кондиционеры. Рядом школа и деский сад..."
                                    date="Вчера в 21:00"
                                />
                            </div>
                        </div>
                        <nav className="mt-4">
                            <ul className="pagination">
                                <li className="page-item">
                                    <a className="page-link" href="/" aria-label="Previous">
                                    <img src="/real_estate/img/icons/prev2.svg" alt="Previous"/>
                                    </a>
                                </li>
                                <li className="page-item active"><a className="page-link" href="/">1</a></li>
                                <li className="page-item"><a className="page-link" href="/">2</a></li>
                                <li className="page-item"><a className="page-link" href="/">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="/" aria-label="Next">
                                    <img src="/real_estate/img/icons/next2.svg" alt="Next"/>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
       
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                            <input type="checkbox" name="extra" value="Кухонная мебель"/>
                                            <span className="fs-11 ms-3">Кухонная мебель</span>
                                        </label>
                                        <label className="mb-3">
                                            <input type="checkbox" name="extra" value="Мебель в комнатах"/>
                                            <span className="fs-11 ms-3">Мебель в комнатах</span>
                                        </label>
                                        <label className="mb-3">
                                            <input type="checkbox" name="extra" value="Холодильник"/>
                                            <span className="fs-11 ms-3">Холодильник</span>
                                        </label>
                                        <label className="mb-3">
                                            <input type="checkbox" name="extra" value="Стиральная машина"/>
                                            <span className="fs-11 ms-3">Стиральная машина</span>
                                        </label>
                                        <label className="mb-3">
                                            <input type="checkbox" name="extra" value="Посудомоечная машина"/>
                                            <span className="fs-11 ms-3">Посудомоечная машина</span>
                                        </label>
                                        <label className="mb-3">
                                            <input type="checkbox" name="extra" value="Телевизор"/>
                                            <span className="fs-11 ms-3">Телевизор</span>
                                        </label>
                                        <label className="mb-3">
                                            <input type="checkbox" name="extra" value="Кондиционер"/>
                                            <span className="fs-11 ms-3">Кондиционер</span>
                                        </label>
                                        <label className="mb-3">
                                            <input type="checkbox" name="extra" value="Интернет"/>
                                            <span className="fs-11 ms-3">Интернет</span>
                                        </label>
                                        <label className="mb-3">
                                            <input type="checkbox" name="extra" value="Ванна"/>
                                            <span className="fs-11 ms-3">Ванна</span>
                                        </label>
                                        <label className="mb-3">
                                            <input type="checkbox" name="extra" value="Душевая кабина"/>
                                            <span className="fs-11 ms-3">Душевая кабина</span>
                                        </label>
                                        <label className="mb-3">
                                            <input type="checkbox" name="extra" value="Можно с детьми"/>
                                            <span className="fs-11 ms-3">Можно с детьми</span>
                                        </label>
                                        <label className="mb-3">
                                            <input type="checkbox" name="extra" value="Можно с животными"/>
                                            <span className="fs-11 ms-3">Можно с животными</span>
                                        </label>
                                        </div>
                                    </div>
                                </fieldset>
                                <hr />
                                <fieldset className="row mb-3">
                                    <div className="col-3">
                                        <legend className="fs-11">Общая площадь:</legend>
                                    </div>
                                    <div className="col-9">
                                        <div className="d-flex align-items-baseline">
                                            <div className="fs-11 me-2">От</div>
                                            <input type="number" className="area me-3"/>
                                            <div className="fs-11 me-2">До</div>
                                            <input type="number" className="area"/>
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
                                            <input type="number" className="area me-3"/>
                                            <div className="fs-11 me-2">До</div>
                                            <input type="number" className="area"/>
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
                                            <input type="number" className="area me-3"/>
                                            <div className="fs-11 me-2">До</div>
                                            <input type="number" className="area"/>
                                        </div>
                                    </div>
                                </fieldset>
                                <hr />
                                <fieldset className="row">
                                    <div className="col-3">
                                        <legend className="fs-11 mb-0">Планировка:</legend>
                                    </div>
                                    <div className="col-9">
                                        <div className="row row-cols-3">
                                            <label>
                                                <input type="checkbox" name="layout" value="Изолированная"/>
                                                <span className="fs-11 ms-3">Изолированная</span>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="layout" value="Смежная"/>
                                                <span className="fs-11 ms-3">Смежная</span>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="layout" value="Свободная"/>
                                                <span className="fs-11 ms-3">Свободная</span>
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                                <hr />
                                <fieldset className="row">
                                    <div className="col-3">
                                        <legend className="fs-11 mb-0">Санузел:</legend>
                                    </div>
                                    <div className="col-9">
                                        <div className="row row-cols-3">
                                            <label>
                                                <input type="checkbox" name="bathroom" value="Раздельный"/>
                                                <span className="fs-11 ms-3">Раздельный</span>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="bathroom" value="Совмещенный"/>
                                                <span className="fs-11 ms-3">Совмещенный</span>
                                            </label>
                                            <label>
                                                <input type="checkbox" name="bathroom" value="2 и более"/>
                                                <span className="fs-11 ms-3">2 и более</span>
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                                <hr />
                                <fieldset className="row mb-3">
                                    <div className="col-3">
                                        <legend className="fs-11">Этаж:</legend>
                                    </div>
                                    <div className="col-9">
                                        <div className="d-flex align-items-baseline">
                                            <div className="fs-11 me-2">От</div>
                                            <input type="number" className="me-3"/>
                                            <div className="fs-11 me-2">До</div>
                                            <input type="number"/>
                                            <label className="ms-5">
                                                <input type="checkbox" name="floor" value="Не первый"/>
                                                <span className="fs-11 ms-3">Не первый</span>
                                            </label>
                                            <label className="ms-5">
                                                <input type="checkbox" name="floor" value="Не последний"/>
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
                                            <input type="number" className="me-3"/>
                                            <div className="fs-11 me-2">До</div>
                                            <input type="number"/>
                                        </div>
                                    </div>
                                </fieldset>
                                <hr />
                                <fieldset className="row">
                                    <div className="col-3">
                                        <legend className="fs-11">Балкон/Лоджия:</legend>
                                    </div>
                                    <div className="col-9">
                                        <div className="d-flex align-items-baseline">
                                            <label>
                                                <input type="checkbox" name="balcony" value="Не первый"/>
                                                <span className="fs-11 ms-3">Не первый</span>
                                            </label>
                                            <label className="ms-5">
                                                <input type="checkbox" name="balcony" value="Не последний"/>
                                                <span className="fs-11 ms-3">Не последний</span>
                                            </label>
                                            <label className="ms-5">
                                                <input type="checkbox" name="balcony" value="Нет"/>
                                                <span className="fs-11 ms-3">Нет</span>
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                                <hr />
                                <fieldset className="row">
                                    <div className="col-3">
                                        <legend className="fs-11">Тип дома:</legend>
                                    </div>
                                    <div className="col-9">
                                        <div className="d-flex align-items-baseline flex-wrap">
                                            <label className="me-5 mt-2">
                                                <input type="checkbox" name="house-type" value="Кирпичный"/>
                                                <span className="fs-11 ms-2">Кирпичный</span>
                                            </label>
                                            <label className="me-5 mt-2">
                                                <input type="checkbox" name="house-type" value="Панельный"/>
                                                <span className="fs-11 ms-2">Панельный</span>
                                            </label>
                                            <label className="me-5 mt-2">
                                                <input type="checkbox" name="house-type" value="Монолитный"/>
                                                <span className="fs-11 ms-2">Монолитный</span>
                                            </label>
                                            <label className="me-5 mt-2">
                                                <input type="checkbox" name="house-type" value="Блочный"/>
                                                <span className="fs-11 ms-2">Блочный</span>
                                            </label>
                                            <label className="mt-2">
                                                <input type="checkbox" name="house-type" value="Деревянный"/>
                                                <span className="fs-11 ms-2">Деревянный</span>
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                                <hr />
                                <fieldset className="row">
                                    <div className="col-3">
                                        <legend className="fs-11">Год постройки:</legend>
                                    </div>
                                    <div className="col-9">
                                        <div className="d-flex align-items-baseline">
                                            <div className="fs-11 me-3">От</div>
                                            <input type="number" className="me-3"/>
                                        </div>
                                    </div>
                                </fieldset>
                                <hr />
                                <fieldset className="row">
                                    <div className="col-3">
                                        <legend className="fs-11">Лифт:</legend>
                                    </div>
                                    <div className="col-9">
                                        <div className="d-flex align-items-baseline flex-wrap">
                                            <label className="me-5 mt-2">
                                                <input type="checkbox" name="lift" value="Пассажирский"/>
                                                <span className="fs-11 ms-2">Пассажирский</span>
                                            </label>
                                            <label className="mt-2">
                                                <input type="checkbox" name="lift" value="Грузовой"/>
                                                <span className="fs-11 ms-2">Грузовой</span>
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                                <hr />
                                <fieldset className="row">
                                    <div className="col-3">
                                        <legend className="fs-11">от</legend>
                                    </div>
                                    <div className="col-9">
                                        <div className="d-flex align-items-baseline">
                                            <div className="fs-11 me-3">От</div>
                                            <input type="number" className="length me-3"/>
                                        </div>
                                    </div>
                                </fieldset>
                                <hr />
                                <fieldset className="row">
                                    <div className="col-3">
                                        <legend className="fs-11">Дополнительно:</legend>
                                    </div>
                                    <div className="col-9">
                                        <div className="d-flex align-items-baseline flex-wrap">
                                            <label className="me-5 mt-2">
                                                <input type="checkbox" name="ramp" value="Пандус"/>
                                                <span className="fs-11 ms-2">Пандус</span>
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                                <hr />
                                <fieldset className="row">
                                    <div className="col-3">
                                        <legend className="fs-11">Мусоропровод:</legend>
                                    </div>
                                    <div className="col-9">
                                        <div className="d-flex align-items-baseline flex-wrap">
                                            <label className="me-5 mt-2">
                                                <input type="checkbox" name="chute" value="Есть"/>
                                                <span className="fs-11 ms-2">Есть</span>
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                                <hr />
                                <fieldset className="row">
                                    <div className="col-3">
                                        <legend className="fs-11">Парковка:</legend>
                                    </div>
                                    <div className="col-9">
                                        <div className="d-flex align-items-baseline flex-wrap">
                                            <label className="me-5 mt-2">
                                                <input type="checkbox" name="parking" value="Наземная"/>
                                                <span className="fs-11 ms-2">Наземная</span>
                                            </label>
                                            <label className="me-5 mt-2">
                                                <input type="checkbox" name="parking" value="Подземная"/>
                                                <span className="fs-11 ms-2">Подземная</span>
                                            </label>
                                            <label className="me-5 mt-2">
                                                <input type="checkbox" name="parking" value="Многоуровневая"/>
                                                <span className="fs-11 ms-2">Многоуровневая</span>
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                                <div className="fs-11 d-flex justify-content-between align-items-center mt-5">
                                    <div className="fw-6 gray-3">Найденно 1 200 объявлений</div>
                                    <button type="submit" className="btn btn-1">ПОКАЗАТЬ</button>
                                    <button type="button" onClick={(e) => e.target.closest("form").reset()} className="color-1">Очистить фильтр</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

