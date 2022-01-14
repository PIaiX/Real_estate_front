import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import ImageUploading from "react-images-uploading";

export default function Advertise() {
    const [images, setImages] = React.useState([]);
    const maxNumber = 24;
    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

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
            <section id="sec-11" className="container mb-6">
                <h1>Подать объявление</h1>
                <div className="row">
                    <div className="col-10">
                        <fieldset className="frame p-4 mb-5">
                            <legend className="title-font fw-7 fs-15 mb-4">Тип объявления</legend>
                            <div className="row">
                                <div className="col-3 fs-11">Владелец объявления*:</div>
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
                                <div className="col-3 fs-11">Сделка*:</div>
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
                                <div className="col-3 fs-11">Тип недвижимости*:</div>
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
                        <fieldset className="frame p-4 mb-5">
                            <legend className="title-font fw-7 fs-15 mb-4">Об объекте</legend>
                            <div className="row align-items-center">
                                <div className="col-3 fs-11">Адрес*:</div>
                                <div className="col-9">
                                    <input type="text" className="fs-11" placeholder="р. Татарстан, г. Казань"/>
                                </div>
                            </div>
                            <hr className="my-4" />
                            <div className="row align-items-center">
                                <div className="col-3 fs-11">Название ЖК:</div>
                                <div className="col-9">
                                    <input type="text" className="fs-11" placeholder="Например: “Центральный”"/>
                                </div>
                            </div>
                            <hr className="my-4" />
                            <div className="row">
                                <div className="col-3 fs-11">Тип жилья*:</div>
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
                            <div className="row align-items-center">
                                <div className="col-3 fs-11">Количество комнат*:</div>
                                <div className="col-9 d-flex">
                                    <label className="inp-btn me-2">
                                        <input type="radio" name="rooms" value="Студия"/>
                                        <div>Студия</div>
                                    </label>
                                    <label className="inp-btn me-2">
                                        <input type="radio" name="rooms" value="1" defaultChecked={true}/>
                                        <div>1</div>
                                    </label>
                                    <label className="inp-btn me-2">
                                        <input type="radio" name="rooms" value="2"/>
                                        <div>2</div>
                                    </label>
                                    <label className="inp-btn me-2">
                                        <input type="radio" name="rooms" value="3"/>
                                        <div>3</div>
                                    </label>
                                    <label className="inp-btn me-2">
                                        <input type="radio" name="rooms" value="4"/>
                                        <div>4</div>
                                    </label>
                                    <label className="inp-btn me-2">
                                        <input type="radio" name="rooms" value="5"/>
                                        <div>5</div>
                                    </label>
                                    <label className="inp-btn me-2">
                                        <input type="radio" name="rooms" value="5+"/>
                                        <div>5+</div>
                                    </label>
                                </div>
                            </div>
                            <hr className="my-4" />
                            <div className="row row-cols-4 align-items-center">
                                <div className="fs-11">Общая площадь*:</div>
                                <div>
                                    <input type="number" className="fs-11 area w-100"/> 
                                </div>
                                <div className="text-end">Жилая площадь:</div>
                                <div>
                                    <input type="number" className="fs-11 area w-100"/> 
                                </div>
                            </div>
                            <hr className="my-4" />
                            <div className="row row-cols-4 align-items-center">
                                <div className="fs-11">Площадь кухни:</div>
                                <div>
                                    <input type="number" className="fs-11 area w-100"/> 
                                </div>
                            </div>
                            <hr className="my-4" />
                            <div className="row row-cols-4 align-items-center">
                                <div className="fs-11">Этаж*:</div>
                                <div>
                                    <input type="number" className="fs-11 w-100"/> 
                                </div>
                                <div className="text-end">Этажей в доме:</div>
                                <div>
                                    <input type="number" className="fs-11 w-100"/> 
                                </div>
                            </div>
                            <hr className="my-4" />
                            <div className="row">
                                <div className="col-3 fs-11">Санузел</div>
                                <div className="col-9">
                                    <div className="row row-cols-4">
                                        <div>
                                            <label>
                                                <input type="radio" name="bathroom" value="Раздельный" checked/>
                                                <span className="fs-11 ms-2">Раздельный</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" name="bathroom" value="Совмещенный"/>
                                                <span className="fs-11 ms-2">Совмещенный</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" name="bathroom" value="Два или более"/>
                                                <span className="fs-11 ms-2">Два или более</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-4" />
                            <div className="row">
                                <div className="col-3 fs-11">Балкон/Лоджия</div>
                                <div className="col-9">
                                    <div className="row row-cols-4">
                                        <div>
                                            <label>
                                                <input type="radio" name="balcony" value="Балкон" checked/>
                                                <span className="fs-11 ms-2">Балкон</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" name="balcony" value="Лоджия"/>
                                                <span className="fs-11 ms-2">Лоджия</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" name="balcony" value="Нет"/>
                                                <span className="fs-11 ms-2">Нет</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-4" />
                            <div className="row">
                                <div className="col-3 fs-11">Планировка:</div>
                                <div className="col-9">
                                    <div className="row row-cols-4">
                                        <div>
                                            <label>
                                                <input type="radio" name="layout" value="Изолированная" checked/>
                                                <span className="fs-11 ms-2">Изолированная</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" name="layout" value="Смежная"/>
                                                <span className="fs-11 ms-2">Смежная</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" name="layout" value="Свободная"/>
                                                <span className="fs-11 ms-2">Свободная</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-4" />
                            <div className="row">
                                <div className="col-3 fs-11">Ремонт:</div>
                                <div className="col-9">
                                    <div className="row row-cols-4">
                                        <div>
                                            <label>
                                                <input type="radio" name="repairs" value="Косметический" checked/>
                                                <span className="fs-11 ms-2">Косметический</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" name="repairs" value="Евро"/>
                                                <span className="fs-11 ms-2">Евро</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" name="repairs" value="Дизайнерский"/>
                                                <span className="fs-11 ms-2">Дизайнерский</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" name="repairs" value="Без ремонта"/>
                                                <span className="fs-11 ms-2">Без ремонта</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <hr className="my-4" />
                                <div className="row">
                                    <div className="col-3 fs-11">Дополнительно:</div>
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
                                </div>
                            </div>
                        </fieldset>
                        <fieldset className="frame p-4 mb-5">
                            <legend className="title-font fw-7 fs-15 mb-4">Описание и фото</legend>
                            <div className="row mb-2">
                                <div className="col-3 fs-11">Описание*:</div>
                                <div className="col-9">
                                    <textarea rows="5" className="fs-11" placeholder="Расскажите подробне об объекте и условиях сделки. "></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3 fs-11">Фото и планировка*:</div>
                                <div className="col-9">
                                    <ImageUploading
                                        multiple
                                        value={images}
                                        onChange={onChange}
                                        maxNumber={maxNumber}
                                        dataURLKey="data_url"
                                    >
                                        {({
                                        imageList,
                                        onImageUpload,
                                        onImageRemoveAll,
                                        onImageUpdate,
                                        onImageRemove,
                                        isDragging,
                                        dragProps
                                        }) => (
                                        // write your building UI
                                        <div className="upload__image-wrapper photo-upload">
                                            <div className="imgs-box">
                                                {imageList.map((image, index) => (
                                                <div key={index} className="image-item">
                                                    <img src={image.data_url} alt=""/>
                                                    <div className="image-item__btn-wrapper">
                                                        <button type="button" onClick={() => onImageUpdate(index)}>
                                                            <img src="/real_estate/img/icons/update.svg" alt="Обновить" />
                                                        </button>
                                                        <button type="button" onClick={() => onImageRemove(index)}>
                                                            <img src="/real_estate/img/icons/delete.svg" alt="Удалить" />
                                                        </button>
                                                        <button type="button" className="main-img">Сделать главным</button>
                                                    </div>
                                                </div>
                                                ))}
                                            </div>
                                            <div className="d-flex">
                                                <button className="btn btn-1 me-4"
                                                style={isDragging ? { color: "red" } : null}
                                                onClick={onImageUpload}
                                                {...dragProps}
                                                >
                                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <line x1="10.75" x2="10.75" y2="21" stroke="white" stroke-width="1.5"/>
                                                        <line y1="10.25" x2="21" y2="10.25" stroke="white" stroke-width="1.5"/>
                                                    </svg>
                                                    <span className="ms-2">Добавить фото</span>
                                                </button>
                                                <button onClick={onImageRemoveAll}>Удалить все</button>
                                            </div>
                                        </div>
                                        )}
                                    </ImageUploading>
                                    <div className="fs-08 gray-3 mt-2">Не допускаются к размещению фотографии с водяными знаками, чужих объектов и рекламные баннеры. JPG, PNG или GIF. Максимальный размер файла 10 мб</div>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset className="frame p-4 mb-5">
                            <legend className="title-font fw-7 fs-15 mb-4">О здании</legend>
                            <div className="row align-items-center">
                                <div className="col-3 fs-11">Год постройки:</div>
                                <div className="col-9">
                                    <input type="number" className="fs-11"/> 
                                </div>
                            </div>
                            <hr className="my-4" />
                            <div className="row align-items-center">
                                <div className="col-3 fs-11">Тип дома:</div>
                                <div className="col-9">
                                    <div className="d-flex align-items-baseline flex-wrap">
                                        <label className="me-5">
                                            <input type="radio" name="house-type" value="Кирпичный" checked/>
                                            <span className="fs-11 ms-2">Кирпичный</span>
                                        </label>
                                        <label className="me-5">
                                            <input type="radio" name="house-type" value="Панельный"/>
                                            <span className="fs-11 ms-2">Панельный</span>
                                        </label>
                                        <label className="me-5">
                                            <input type="radio" name="house-type" value="Монолитный"/>
                                            <span className="fs-11 ms-2">Монолитный</span>
                                        </label>
                                        <label className="me-5">
                                            <input type="radio" name="house-type" value="Блочный"/>
                                            <span className="fs-11 ms-2">Блочный</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="house-type" value="Деревянный"/>
                                            <span className="fs-11 ms-2">Деревянный</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-4" />
                            <div className="row align-items-center">
                                <div className="col-3 fs-11">Лифт:</div>
                                <div className="col-9">
                                    <div className="d-flex align-items-baseline flex-wrap">
                                        <label className="me-5">
                                            <input type="radio" name="lift" value="Нет"/>
                                            <span className="fs-11 ms-2">Нет</span>
                                        </label>
                                        <label className="me-5">
                                            <input type="radio" name="lift" value="Пассажирский"/>
                                            <span className="fs-11 ms-2">Пассажирский</span>
                                        </label>
                                        <label className="me-5">
                                            <input type="radio" name="lift" value="Грузовой"/>
                                            <span className="fs-11 ms-2">Грузовой</span>
                                        </label>
                                        <label className="me-5">
                                            <input type="radio" name="lift" value="Пассажирский/Грузовой"/>
                                            <span className="fs-11 ms-2">Пассажирский/Грузовой</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-4" />
                            <div className="row align-items-center">
                                <div className="col-3 fs-11">Высота потолков:</div>
                                <div className="col-9">
                                    <input type="number" className="fs-11"/>
                                    <span className="ms-2">м</span>
                                </div>
                            </div>
                            <hr className="my-4" />
                            <div className="row align-items-center">
                                <div className="col-3 fs-11">Пандус:</div>
                                <div className="col-9 row row-cols-2">
                                    <div>
                                        <label className="me-5">
                                            <input type="radio" name="ramp" value="Есть"/>
                                            <span className="fs-11 ms-2">Есть</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="me-5">
                                            <input type="radio" name="ramp" value="Нет" defaultChecked={true}/>
                                            <span className="fs-11 ms-2">Нет</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-4" />
                            <div className="row align-items-center">
                                <div className="col-3 fs-11">Мусоропровод:</div>
                                <div className="col-9 row row-cols-2">
                                    <div>
                                        <label className="me-5">
                                            <input type="radio" name="chute" value="Есть"/>
                                            <span className="fs-11 ms-2">Есть</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="me-5">
                                            <input type="radio" name="chute" value="Нет"  defaultChecked={true}/>
                                            <span className="fs-11 ms-2">Нет</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-4" />
                            <div className="row align-items-center">
                                <div className="col-3 fs-11">Парковка:</div>
                                <div className="col-9 row row-cols-3">
                                    <div>
                                        <label className="mb-3">
                                            <input type="checkbox" name="parking" value="Наземная"/>
                                            <span className="fs-11 ms-3">Наземная</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="mb-3">
                                            <input type="checkbox" name="parking" value="Подземная"/>
                                            <span className="fs-11 ms-3">Подземная</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="mb-3">
                                            <input type="checkbox" name="parking" value="Многоуровневая"/>
                                            <span className="fs-11 ms-3">Многоуровневая</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset className="frame p-4 mb-5">
                            <legend className="title-font fw-7 fs-15 mb-4">Условия сделки</legend>
                            <div className="row align-items-center mb-4">
                                <div className="col-3 fs-11">Цена*:</div>
                                <div className="col-9">
                                    <input type="number" class="fs-11 price" />
                                </div>
                            </div>
                            <div className="row align-items-center mb-4">
                                <div className="col-3 fs-11">Ипотека*:</div>
                                <div className="col-9 d-flex">
                                    <label className="me-5">
                                        <input type="radio" name="hypothec" value="Да"/>
                                        <span className="fs-11 ms-2">Да</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="hypothec" value="Нет" defaultChecked={true}/>
                                        <span className="fs-11 ms-2">Нет</span>
                                    </label>
                                </div>
                            </div>
                            <div className="row align-items-center mb-4">
                                <div className="col-3 fs-11">Обременения:</div>
                                <div className="col-9 d-flex">
                                    <label className="me-5">
                                        <input type="radio" name="difficulties" value="Да"/>
                                        <span className="fs-11 ms-2">Да</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="difficulties" value="Нет" defaultChecked={true}/>
                                        <span className="fs-11 ms-2">Нет</span>
                                    </label>
                                </div>
                            </div>
                        </fieldset>
                        <div className="d-flex justify-content-between mb-3">
                            <div>*- поля обязательные для заполнения</div>
                            <button type="button" className="color-1 fs-11 fw-5 bb-1">Очистить форму</button>
                        </div>
                        <button type="submit" className="btn btn-1 fs-15 mx-auto">Разместить объявление</button>
                        <div className="gray-3 text-center mt-3">Нажимая кнопку “Разместить объявление”, Вы соглашаетесь с <a href="#" className="color-1">условиями сайта</a></div>
                    </div>
                   
                </div>
            </section>
            
        </main>
    )
}
