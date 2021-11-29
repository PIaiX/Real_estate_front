import React from 'react';
import { NavLink } from 'react-router-dom';

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
            <section className="sec-6 container">
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
                <div className="d-flex mb-5">
                    <div>Популярные запросы:</div>
                    <button>Студия</button>
                    <button>1 комнатная</button>
                    <button>2 комнатная</button>
                    <button>3 комнатная</button>
                </div>

                <div className="row">
                    <div className="col-3">
                        <div className="mb-4">Найдено 1 200 объявлений</div>
                        <div className="shad-box p-4">
                            <div className="title-font fs-11 fw-6 mb-3">Количество комнат</div>
                            <div className="d-flex">
                                <input type="checkbox" name="rooms" value="1room" id="1room"/>
                                <label for="1room">1 комнатная</label>
                            </div>
                            <div className="d-flex">
                                <input type="checkbox" name="rooms" value="2room" id="2room"/>
                                <label for="1room">2 комнатная</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="d-flex mb-4">
                            <div>Сотрировать: Сначала новые</div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

