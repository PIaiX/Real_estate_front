import React from 'react';
import { NavLink } from 'react-router-dom';
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
                <div className="d-flex justify-content-end mb-4">
                    <button type="button" className="">
                        <img src="../img/icons/pin.svg"/>
                        <span className="ms-2 fs-11 fw-7 color-2">Показать на карте</span>
                    </button>
                </div>
                <form className="form-search mb-3">
                    <button type="button" className="btn btn-2">
                        <span className="me-2">Снять</span>
                        <img src="../img/icons/caret-down-white.svg"/>
                    </button>
                    <button type="button" className="btn btn-2 ms-2">
                        <span className="me-2">Квартиры</span>
                        <img src="../img/icons/caret-down-white.svg"/>
                    </button>
                    <button type="button" className="btn btn-2 ms-2">
                        <span className="me-2">Район/Метро</span>
                        <img src="../img/icons/caret-down-white.svg"/>
                    </button>
                    <input type="search" className="flex-1 ms-2" placeholder="Адрес или ЖК" />
                    <button type="submit" className="btn btn-1 ms-2">Поиск</button>
                </form>
                <div className="popular-queries d-flex mb-5">
                    <div>Популярные запросы:</div>
                    <button>Студия</button>
                    <button>1 комнатная</button>
                    <button>2 комнатная</button>
                    <button>3 комнатная</button>
                </div>

                <div className="row">
                    <div className="d-none d-lg-block col-4 col-xxl-3">
                        <div className="fs-11 mb-4">Найдено 1 200 объявлений</div>
                        <form className="shad-box p-4 mb-4">
                            <fieldset className="mb-4">
                                <legend className="title-font fs-12 fw-6 mb-3">Количество комнат</legend>
                                <div className="inp-label ps-2 mb-3">
                                    <input type="checkbox" name="rooms" value="1room" id="1room"/>
                                    <label for="1room" className="fs-11 ms-3">1 комнатная</label>
                                </div>
                                <div className="inp-label ps-2 mb-3">
                                    <input type="checkbox" name="rooms" value="2room" id="2room"/>
                                    <label for="1room" className="fs-11 ms-3">2 комнатная</label>
                                </div>
                                <div className="inp-label ps-2 mb-3">
                                    <input type="checkbox" name="rooms" value="3room" id="3room"/>
                                    <label for="3room" className="fs-11 ms-3">3 комнатная</label>
                                </div>
                                <div className="inp-label ps-2 mb-3">
                                    <input type="checkbox" name="rooms" value="4room" id="4room"/>
                                    <label for="4room" className="fs-11 ms-3">4 комнатная</label>
                                </div>
                                <div className="inp-label ps-2 mb-3">
                                    <input type="checkbox" name="rooms" value="5room" id="5room"/>
                                    <label for="5room" className="fs-11 ms-3">5 комнатная</label>
                                </div>
                                <div className="inp-label ps-2 mb-3">
                                    <input type="checkbox" name="rooms" value="6room" id="6room"/>
                                    <label for="6room" className="fs-11 ms-3">6 комнатная</label>
                                </div>
                                <div className="inp-label ps-2 mb-3">
                                    <input type="checkbox" name="rooms" value="studio" id="studio"/>
                                    <label for="studio" className="fs-11 ms-3">Студия</label>
                                </div>
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
                                <div className="inp-label ps-2 mb-3">
                                    <input type="checkbox" name="lease" value="lease 1" id="lease-1"/>
                                    <label for="lease-1" className="fs-11 ms-3">Посуточно</label>
                                </div>
                                <div className="inp-label ps-2 mb-3">
                                    <input type="checkbox" name="lease" value="lease 2" id="lease-2"/>
                                    <label for="lease-2" className="fs-11 ms-3">Несколько месяцев</label>
                                </div>
                                <div className="inp-label ps-2 mb-3">
                                    <input type="checkbox" name="lease" value="lease 3" id="lease-3"/>
                                    <label for="lease-3" className="fs-11 ms-3">Длительная аренда</label>
                                </div>
                            </fieldset>

                            <fieldset className="mb-4">
                                <legend className="title-font fs-12 fw-6 mb-3">Ремонт</legend>
                                <div className="inp-label ps-2 mb-3">
                                    <input type="checkbox" name="repair" value="no repair" id="no-repair"/>
                                    <label for="no-repair" className="fs-11 ms-3">Без ремонта</label>
                                </div>
                                <div className="inp-label ps-2 mb-3">
                                    <input type="checkbox" name="repair" value="repair 1" id="repair-1"/>
                                    <label for="repair-1" className="fs-11 ms-3">Косметический</label>
                                </div>
                                <div className="inp-label ps-2 mb-3">
                                    <input type="checkbox" name="repair" value="repair 2" id="repair-2"/>
                                    <label for="repair-2" className="fs-11 ms-3">Евроремонт</label>
                                </div>
                                <div className="inp-label ps-2 mb-3">
                                    <input type="checkbox" name="repair" value="repair 3" id="repair-3"/>
                                    <label for="repair-3" className="fs-11 ms-3">Дизайнерский</label>
                                </div>
                            </fieldset>

                            <button type="button" className="btn btn-1 w-100 fs-15">Еще фильтры</button>
                            <button type="button" className="color-1 fs-11 fw-5 mx-auto mt-2">Очистить фильтр</button>
                        </form>
                    </div>
                    <div className="col-12 col-lg-8 col-xxl-9">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <div className="fs-11">Сотрировать: Сначала новые</div>
                            <div>
                                <button type="button" className="fs-11">
                                    <span className="me-3">Показать списком</span>
                                    <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="28" height="5.6" rx="1" fill="#E5E5E5"/>
                                        <rect y="9.3335" width="28" height="5.6" rx="1" fill="#E5E5E5"/>
                                        <rect y="18.6665" width="28" height="6.53333" rx="1" fill="#E5E5E5"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="row row-cols-sm-2 row-cols-xxl-3 g-4">
                            <div>
                                <Card 
                                    url="../img/img3.jpg" 
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
                                    url="../img/img3.jpg" 
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
                                    url="../img/img3.jpg" 
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
                                    url="../img/img3.jpg" 
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
                                    url="../img/img3.jpg" 
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
                                    url="../img/img3.jpg" 
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
                                    url="../img/img3.jpg" 
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
                                    url="../img/img3.jpg" 
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
                                    url="../img/img3.jpg" 
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
                                    url="../img/img3.jpg" 
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
                                    url="../img/img3.jpg" 
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
                                    url="../img/img3.jpg" 
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
                            <ul class="pagination">
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Previous">
                                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 1L1 7L7 13" stroke="#797979" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </a>
                                </li>
                                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Next">
                                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L7 7L1 13" stroke="#797979" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
        </main>
    )
}

