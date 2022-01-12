import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Advertise() {
    return (
        <main>
            <div className="container py-3 py-sm-4 py-lg-5">
                <nav aria-label="breadcrumb">
                    <a href="javascript:history.go(-1)" className="d-block d-md-none gray-3">&#10094; Назад</a>
                    <ol className="d-none d-md-flex breadcrumb">
                        <li className="breadcrumb-item">
                            <NavLink to="/">Главная</NavLink>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            Подача объявления
                        </li>
                    </ol>
                </nav>
            </div>
            <section className="container">
                <h1>Подать объявление</h1>
                <div className="row">
                    <div className="col-10">
                        <fieldset className="frame p-4 mb-4">
                            <legend className="title-font fw-7 fs-15 mb-4">Тип объявления</legend>
                            <div className="row">
                                <div className="col-3">Владелец объявления*:</div>
                                <div className="col-9">
                                    <div className="row row-cols-4">
                                        <div>
                                            <label>
                                                <input type="radio" name="owner" value="Собственник" checked/>
                                                <span className="fs-11 ms-2">Собственник</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" name="owner" value="Агент"/>
                                                <span className="fs-11 ms-2">Агент</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-4" />
                            <div className="row">
                                <div className="col-3">Сделка*:</div>
                                <div className="col-9">
                                    <div className="row row-cols-4">
                                        <div>
                                            <label>
                                                <input type="radio" name="deal" value="Аренда"/>
                                                <span className="fs-11 ms-2">Аренда</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" name="deal" value="Продажа" checked/>
                                                <span className="fs-11 ms-2">Продажа</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-4" />
                            <div className="row">
                                <div className="col-3">Тип недвижимости*:</div>
                                <div className="col-9">
                                    <div className="row  row-cols-4">
                                        <div>
                                            <label>
                                                <input type="radio" name="property-type" value="Жилая" checked/>
                                                <span className="fs-11 ms-2">Жилая</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" name="property-type" value="Коммерческая"/>
                                                <span className="fs-11 ms-2">Коммерческая</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" name="property-type" value="Паркинг/Гараж"/>
                                                <span className="fs-11 ms-2">Паркинг/Гараж</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" name="property-type" value="Земельный участок"/>
                                                <span className="fs-11 ms-2">Земельный участок</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-4" />
                            <div className="row">
                                <div className="col-3 fs-11">Объект*:</div>
                                <div className="col-9">
                                    <div className="row row-cols-4 gy-3">
                                        <div>
                                            <label>
                                                <input type="radio" name="estate" value="Квартира"/>
                                                <span className="fs-11 ms-2">Квартира</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" name="estate" value="Комната"/>
                                                <span className="fs-11 ms-2">Комната</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" name="estate" value="Койко-место"/>
                                                <span className="fs-11 ms-2">Койко-место</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" name="estate" value="Дом"/>
                                                <span className="fs-11 ms-2">Дом</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" name="estate" value="Дача"/>
                                                <span className="fs-11 ms-2">Дача</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" name="estate" value="Коттедж"/>
                                                <span className="fs-11 ms-2">Коттедж</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" name="estate" value="Таунхаус"/>
                                                <span className="fs-11 ms-2">Таунхаус</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" name="estate" value="Часть дома"/>
                                                <span className="fs-11 ms-2">Часть дома</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset className="frame p-4 mb-4">
                            <legend className="title-font fw-7 fs-15 mb-4">Об объекте</legend>
                            <div className="row align-items-center">
                                <div className="col-3">Адрес*:</div>
                                <div className="col-9">
                                    <input type="text" placeholder="р. Татарстан, г. Казань"/>
                                </div>
                            </div>
                            <hr className="my-4" />
                            <div className="row align-items-center">
                                <div className="col-3">Название ЖК:</div>
                                <div className="col-9">
                                    <input type="text" placeholder="Например: “Центральный”"/>
                                </div>
                            </div>
                            <hr className="my-4" />
                            <div className="row">
                                <div className="col-3">Тип жилья*:</div>
                                <div className="col-9">
                                    <div className="row row-cols-4">
                                        <div>
                                            <label>
                                                <input type="radio" name="type" value="Квартира" checked/>
                                                <span className="fs-11 ms-2">Квартира</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" name="type" value="Апартаменты"/>
                                                <span className="fs-11 ms-2">Апартаменты</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-4" />
                        </fieldset>
                        <div className="d-flex justify-content-between mb-3">
                            <div>*- поля обязательные для заполнения</div>
                            <button type="button" className="color-1 fs-11 fw-5 bb-1">Очистить форму</button>
                        </div>
                        <button type="submit" className="btn btn-1 fs-15 mx-auto">Разместить объявление</button>
                        <div>Нажимая кнопку “Разместить объявление”, Вы соглашаетесь с условиями сайта</div>
                    </div>
                   
                </div>
            </section>
            
        </main>
    )
}
