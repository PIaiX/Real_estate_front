import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import ImageUploading from "react-images-uploading";
import * as Scroll from 'react-scroll';
import { Link, animateScroll as scroll } from 'react-scroll';


export default function Advertise() {
    const [images, setImages] = React.useState([]);
    const [mainImg, setMainImg] = useState(0);

    const [activeField, setActiveField] = useState(1);

    const maxNumber = 24;
    const onChange = (imageList, addUpdateIndex) => {
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const notNull = (element, index, array) => {
        const textORnum = element.type == 'text' || element.type == 'number' || element.tagName == 'textarea';
        const chekboxORradio = element.type == 'radio' || element.type == 'checkbox';
        if(chekboxORradio){
            let name = element.name;
            let arrElms = Array.from(document.forms.postingAd.querySelectorAll('input[name="'+name+'"]'));
            if(arrElms.some(isChecked)){return element;}
        } else if ( textORnum && element.value.trim() != ''){
            return element;
        }
    };
    const isChecked = (el) => {
        if(el.checked && el.value.trim() != ''){
            return el;
        }
    };

    const isFilled = (el) => {
        console.log('функция выполняется el ='+el);
        let requiredElems = Array.from(el.querySelectorAll('[required]'));
        let link = document.querySelector('[data-target="'+el.name+'"]');
        console.log('requiredElems.length ='+requiredElems.length);
        console.log('link ='+link);

        if(requiredElems.length === 0){
            return;
        } else {
            let flag = requiredElems.every(notNull);
            if (flag){
                console.log('все поля fieldset заполнены');
                link.classList.add('filled');
            } else {
                console.log('есть не заполненые поля fieldset');
                link.classList.remove('filled');
            }
        }
    };

    const onSubmit = e => {
        e.preventDefault();
        console.log('нажата кнопка сабмит');
        let requiredElems = Array.from(document.forms.postingAd.querySelectorAll('input[required]'));
        
        if(requiredElems.length === 0){
            return;
        } else {
            let flag = requiredElems.every(notNull);
        
            if (flag){
                console.log('все поля заполнены');
                document.forms.postingAd.classList.remove('not-filled');
            } else {
                console.log('есть не заполненые поля');
                document.forms.postingAd.classList.add('not-filled');
                scrollToTop();
            }
        }
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
                <h1 className="text-center text-lg-start">Подать объявление</h1>
                <form className="row gx-xxl-5 position-relative" name="postingAd" onSubmit={onSubmit} noValidate>
                    <div className="mob-indicator">
                        <div className={(activeField === 1) ? 'active' : ''}>1</div>
                        <div className={(activeField === 2) ? 'active' : ''}>2</div>
                        <div className={(activeField === 3) ? 'active' : ''}>3</div>
                        <div className={(activeField === 4) ? 'active' : ''}>4</div>
                        <div className={(activeField === 5) ? 'active' : ''}>5</div>
                    </div>
                    <div className="col-lg-9">
                        <fieldset data-show={(activeField === 1) ? 'true' : 'false'} name="anchor-1" className="element frame p-lg-4 mb-4 mb-lg-5">
                            <legend className="text-center text-lg-left title-font fw-7 fs-15 mb-md-4">Тип объявления</legend>
                            <div className="row">
                                <div className="col-md-3 fs-11 title-req mt-4 mt-sm-5 mb-3 m-md-0">Владелец объявления*:</div>
                                <div className="col-md-9">
                                    <div className="row row-cols-2 row-cols-sm-3 row-cols-xxl-4">
                                        <div>
                                            <label>
                                                <input type="radio" name="owner" value="Собственник" required onChange={(e) => isFilled(e.target.closest('fieldset'))}/>
                                                <span className="fs-11 ms-2">Собственник</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" name="owner" value="Агент" required onChange={(e) => isFilled(e.target.closest('fieldset'))}/>
                                                <span className="fs-11 ms-2">Агент</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="d-none d-md-block my-4" />
                            <div className="row">
                                <div className="col-md-3 fs-11 title-req mt-4 mt-sm-5 mb-3 m-md-0">Сделка*:</div>
                                <div className="col-md-9">
                                    <div className="row row-cols-3 row-cols-xxl-4">
                                        <div>
                                            <label>
                                                <input type="radio" name="deal" value="Аренда" required onChange={(e) => isFilled(e.target.closest('fieldset'))}/>
                                                <span className="fs-11 ms-2">Аренда</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" name="deal" value="Продажа" required onChange={(e) => isFilled(e.target.closest('fieldset'))}/>
                                                <span className="fs-11 ms-2">Продажа</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="d-none d-md-block my-4" />
                            <div className="row">
                                <div className="col-md-3 fs-11 title-req mt-4 mt-sm-5 mb-3 m-md-0">Тип недвижимости*:</div>
                                <div className="col-md-9">
                                    <div className="row row-cols-2 row-cols-sm-3 row-cols-xxl-4 gy-3">
                                        <div>
                                            <label>
                                                <input type="radio" name="property-type" value="Жилая" required onChange={(e) => isFilled(e.target.closest('fieldset'))}/>
                                                <span className="fs-11 ms-2">Жилая</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" name="property-type" value="Коммерческая" required onChange={(e) => isFilled(e.target.closest('fieldset'))}/>
                                                <span className="fs-11 ms-2">Коммерческая</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" name="property-type" value="Паркинг/Гараж" required onChange={(e) => isFilled(e.target.closest('fieldset'))}/>
                                                <span className="fs-11 ms-2">Паркинг/Гараж</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" name="property-type" value="Земельный участок" required onChange={(e) => isFilled(e.target.closest('fieldset'))}/>
                                                <span className="fs-11 ms-2">Земельный участок</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="d-none d-md-block my-4" />
                            <div className="row">
                                <div className="col-md-3 fs-11 title-req mt-4 mt-sm-5 mb-3 m-md-0">Объект*:</div>
                                <div className="col-md-9">
                                    <div className="row row-cols-2 row-cols-sm-3 row-cols-xxl-4 gy-3">
                                        <div>
                                            <label>
                                                <input type="radio" name="estate" value="Квартира" required onChange={(e) => isFilled(e.target.closest('fieldset'))}/>
                                                <span className="fs-11 ms-2">Квартира</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" name="estate" value="Комната" required onChange={(e) => isFilled(e.target.closest('fieldset'))}/>
                                                <span className="fs-11 ms-2">Комната</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" name="estate" value="Койко-место" required onChange={(e) => isFilled(e.target.closest('fieldset'))}/>
                                                <span className="fs-11 ms-2">Койко-место</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" name="estate" value="Дом" required onChange={(e) => isFilled(e.target.closest('fieldset'))}/>
                                                <span className="fs-11 ms-2">Дом</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" name="estate" value="Дача" required onChange={(e) => isFilled(e.target.closest('fieldset'))}/>
                                                <span className="fs-11 ms-2">Дача</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" name="estate" value="Коттедж" required onChange={(e) => isFilled(e.target.closest('fieldset'))}/>
                                                <span className="fs-11 ms-2">Коттедж</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" name="estate" value="Таунхаус" required onChange={(e) => isFilled(e.target.closest('fieldset'))}/>
                                                <span className="fs-11 ms-2">Таунхаус</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" name="estate" value="Часть дома" required onChange={(e) => isFilled(e.target.closest('fieldset'))}/>
                                                <span className="fs-11 ms-2">Часть дома</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-lg-none row row-cols-2 row-cols-md-3 gx-2 gx-sm-4 justify-content-center mt-4 mt-sm-5">
                                <div>
                                    <button type="button" className="btn btn-2 w-100" onClick={(e) => e.target.closest("form").reset()}>Отменить</button>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-1 w-100" onClick={()=>setActiveField(2)}>Далее</button>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset data-show={(activeField === 2) ? 'true' : 'false'} name="anchor-2" className="element frame p-lg-4 mb-4 mb-lg-5">
                            <legend className="text-center text-lg-left title-font fw-7 fs-15 mb-md-4">Об объекте</legend>
                            <div className="row align-items-center">
                                <div className="col-md-3 fs-11 title-req mt-4 mt-sm-5 mb-3 m-md-0">Адрес*:</div>
                                <div className="col-md-9">
                                    <input type="text" className="fs-11" placeholder="р. Татарстан, г. Казань" required onChange={(e) => isFilled(e.target.closest('fieldset'))}/>
                                </div>
                            </div>
                            <hr className="d-none d-md-block my-4" />
                            <div className="row align-items-center">
                                <div className="col-md-3 fs-11 title mt-4 mt-sm-5 mb-3 m-md-0">Название ЖК:</div>
                                <div className="col-md-9">
                                    <input type="text" className="fs-11" placeholder="Например: “Центральный”"/>
                                </div>
                            </div>
                            <hr className="d-none d-md-block my-4" />
                            <div className="row">
                                <div className="col-md-3 fs-11 title-req mt-4 mt-sm-5 mb-3 m-md-0">Тип жилья*:</div>
                                <div className="col-md-9">
                                    <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4">
                                        <div>
                                            <label>
                                                <input type="radio" name="type" value="Квартира" required onChange={(e) => isFilled(e.target.closest('fieldset'))}/>
                                                <span className="fs-11 ms-2">Квартира</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" name="type" value="Апартаменты" required onChange={(e) => isFilled(e.target.closest('fieldset'))}/>
                                                <span className="fs-11 ms-2">Апартаменты</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="d-none d-md-block my-4" />
                            <div className="row align-items-center">
                                <div className="col-md-3 fs-11 title-req mt-4 mt-sm-5 mb-3 m-md-0">Количество комнат*:</div>
                                <div className="col-md-9 d-flex">
                                    <label className="inp-btn me-2">
                                        <input type="radio" name="rooms" value="Студия" required onChange={(e) => isFilled(e.target.closest('fieldset'))}/>
                                        <div>Студия</div>
                                    </label>
                                    <label className="inp-btn me-2">
                                        <input type="radio" name="rooms" value="1" required onChange={(e) => isFilled(e.target.closest('fieldset'))}/>
                                        <div>1</div>
                                    </label>
                                    <label className="inp-btn me-2">
                                        <input type="radio" name="rooms" value="2" required onChange={(e) => isFilled(e.target.closest('fieldset'))}/>
                                        <div>2</div>
                                    </label>
                                    <label className="inp-btn me-2">
                                        <input type="radio" name="rooms" value="3" required onChange={(e) => isFilled(e.target.closest('fieldset'))}/>
                                        <div>3</div>
                                    </label>
                                    <label className="inp-btn me-2">
                                        <input type="radio" name="rooms" value="4" required onChange={(e) => isFilled(e.target.closest('fieldset'))}/>
                                        <div>4</div>
                                    </label>
                                    <label className="inp-btn me-2">
                                        <input type="radio" name="rooms" value="5" required onChange={(e) => isFilled(e.target.closest('fieldset'))}/>
                                        <div>5</div>
                                    </label>
                                    <label className="inp-btn me-2">
                                        <input type="radio" name="rooms" value="5+" required onChange={(e) => isFilled(e.target.closest('fieldset'))}/>
                                        <div>5+</div>
                                    </label>
                                </div>
                            </div>
                            <hr className="d-none d-md-block my-4" />
                            <div className="row row-cols-2 row-cols-md-4 align-items-center mt-4 mt-sm-5">
                                <div className="fs-11 title-req">Общая площадь*:</div>
                                <div>
                                    <input type="number" className="fs-11 area w-100" required onChange={(e) => isFilled(e.target.closest('fieldset'))}/> 
                                </div>
                                <div className="text-md-end title mt-3 mt-sm-4">Жилая площадь:</div>
                                <div className="mt-3 mt-sm-4">
                                    <input type="number" className="fs-11 area w-100"/> 
                                </div>
                            </div>
                            <hr className="d-none d-md-block my-4" />
                            <div className="row row-cols-2 row-cols-md-4 align-items-center mt-3 mt-sm-4">
                                <div className="fs-11 title">Площадь кухни:</div>
                                <div>
                                    <input type="number" className="fs-11 area w-100"/> 
                                </div>
                            </div>
                            <hr className="d-none d-md-block my-4" />
                            <div className="row row-cols-2 row-cols-md-4 align-items-center mt-4 mt-sm-5">
                                <div className="fs-11 title-req">Этаж*:</div>
                                <div>
                                    <input type="number" className="fs-11 w-100" required onChange={(e) => isFilled(e.target.closest('fieldset'))}/> 
                                </div>
                                <div className="title text-md-end mt-3 mt-sm-4">Этажей в доме:</div>
                                <div className="mt-3 mt-sm-4">
                                    <input type="number" className="fs-11 w-100"/> 
                                </div>
                            </div>
                            <hr className="d-none d-md-block my-4"/>
                            <div className="row mt-4 mt-sm-5">
                                <div className="col-md-3 fs-11 title mb-3 m-md-0">Санузел</div>
                                <div className="col-md-9">
                                    <div className="row row-cols-2 row-cols-sm-3 row-cols-xxl-4 gy-3">
                                        <div>
                                            <label>
                                                <input type="radio" name="bathroom" value="Раздельный"/>
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
                            <hr className="d-none d-md-block my-4" />
                            <div className="row mt-4 mt-sm-5">
                                <div className="col-md-3 fs-11 title mb-3 m-md-0">Балкон/Лоджия</div>
                                <div className="col-md-9">
                                    <div className="row row-cols-2 row-cols-sm-3 row-cols-xxl-4 gy-3">
                                        <div>
                                            <label>
                                                <input type="radio" name="balcony" value="Балкон"/>
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
                            <hr className="d-none d-md-block my-4" />
                            <div className="row mt-4 mt-sm-5">
                                <div className="col-md-3 fs-11 title mb-3 m-md-0">Планировка:</div>
                                <div className="col-md-9">
                                    <div className="row row-cols-2 row-cols-sm-3 row-cols-xxl-4 gy-3">
                                        <div>
                                            <label>
                                                <input type="radio" name="layout" value="Изолированная"/>
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
                            <hr className="d-none d-md-block my-4" />
                            <div className="row mt-4 mt-sm-5">
                                <div className="col-md-3 fs-11 title mb-3 m-md-0">Ремонт:</div>
                                <div className="col-md-9">
                                    <div className="row row-cols-2 row-cols-sm-3 row-cols-xxl-4 gy-3">
                                        <div>
                                            <label>
                                                <input type="radio" name="repairs" value="Косметический"/>
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
                                <hr className="d-none d-md-block my-4"/>
                                <div className="row mt-4 mt-sm-5">
                                    <div className="col-md-3 fs-11 title mb-3 m-md-0">Дополнительно:</div>
                                    <div className="col-md-9">
                                        <div className="row row-cols-sm-2 row-cols-xxl-3">
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
                            <div className="d-lg-none row row-cols-2 row-cols-md-3 gx-2 gx-sm-4 justify-content-center mt-4 mt-sm-5">
                                <div>
                                    <button type="button" className="btn btn-2 w-100" onClick={()=>setActiveField(1)}>Назад</button>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-1 w-100" onClick={()=>setActiveField(3)}>Далее</button>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset data-show={(activeField === 3) ? 'true' : 'false'} name="anchor-3" className="element frame p-lg-4 mb-4 mb-lg-5">
                            <legend className="title-font fw-7 fs-15 mb-4">Описание и фото</legend>
                            <div className="row mb-2">
                                <div className="col-md-3 fs-11 title-req mb-3 m-md-0">Описание*:</div>
                                <div className="col-md-9">
                                    <textarea type="text" rows="5" className="fs-11" placeholder="Расскажите подробне об объекте и условиях сделки." required onChange={(e) => isFilled(e.target.closest('fieldset'))}></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 fs-11 title-req mb-3 m-md-0">Фото и планировка*:</div>
                                <div className="col-md-9">
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
                                        <div className="upload__image-wrapper">
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
                                                        {
                                                            (index !== mainImg) &&
                                                            <button type="button" onClick={() => setMainImg(index)} className="main-img">Сделать главным</button>
                                                        }
                                                    </div>
                                                    {
                                                        (index === mainImg) &&
                                                        <div className="mark">Главное фото</div>
                                                    }
                                                </div>
                                                ))}
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <button type="button" className="btn btn-1 px-3 px-sm-4 me-3 me-sm-4"
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
                                                <button type="button" onClick={onImageRemoveAll}>Удалить все</button>
                                            </div>
                                        </div>
                                        )}
                                    </ImageUploading>
                                    <div className="fs-08 gray-3 mt-2">Не допускаются к размещению фотографии с водяными знаками, чужих объектов и рекламные баннеры. JPG, PNG или GIF. Максимальный размер файла 10 мб</div>
                                </div>
                            </div>
                            <div className="row row-cols-2 row-cols-md-3 gx-2 gx-sm-4 justify-content-center mt-4">
                                <div>
                                    <button type="button" className="btn btn-2 w-100" onClick={()=>setActiveField(2)}>Назад</button>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-1 w-100" onClick={()=>setActiveField(4)}>Далее</button>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset data-show={(activeField === 4) ? 'true' : 'false'} name="anchor-4" className="element frame p-lg-4 mb-4 mb-lg-5">
                            <legend className="title-font fw-7 fs-15 mb-4">О здании</legend>
                            <div className="row align-items-center">
                                <div className="col-6 col-md-3 fs-11 title">Год постройки:</div>
                                <div className="col-6 col-md-9">
                                    <input type="number" className="fs-11"/> 
                                </div>
                            </div>
                            <hr className="d-none d-md-block my-4"/>
                            <div className="row align-items-center mt-4 mt-sm-5">
                                <div className="col-md-3 fs-11 title mb-3 m-md-0">Тип дома:</div>
                                <div className="col-md-9">
                                    <div className="d-flex align-items-baseline flex-wrap">
                                        <label className="me-5 my-2">
                                            <input type="radio" name="house-type" value="Кирпичный"/>
                                            <span className="fs-11 ms-2">Кирпичный</span>
                                        </label>
                                        <label className="me-5 my-2">
                                            <input type="radio" name="house-type" value="Панельный"/>
                                            <span className="fs-11 ms-2">Панельный</span>
                                        </label>
                                        <label className="me-5 my-2">
                                            <input type="radio" name="house-type" value="Монолитный"/>
                                            <span className="fs-11 ms-2">Монолитный</span>
                                        </label>
                                        <label className="me-5 my-2">
                                            <input type="radio" name="house-type" value="Блочный"/>
                                            <span className="fs-11 ms-2">Блочный</span>
                                        </label>
                                        <label className="my-2">
                                            <input type="radio" name="house-type" value="Деревянный"/>
                                            <span className="fs-11 ms-2">Деревянный</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <hr className="d-none d-md-block my-4"/>
                            <div className="row align-items-center mt-4 mt-sm-5">
                                <div className="col-md-3 fs-11 title mb-3 m-md-0">Лифт:</div>
                                <div className="col-md-9">
                                    <div className="d-flex align-items-baseline flex-wrap">
                                        <label className="me-5 my-2">
                                            <input type="radio" name="lift" value="Нет"/>
                                            <span className="fs-11 ms-2">Нет</span>
                                        </label>
                                        <label className="me-5 my-2">
                                            <input type="radio" name="lift" value="Пассажирский"/>
                                            <span className="fs-11 ms-2">Пассажирский</span>
                                        </label>
                                        <label className="me-5 my-2">
                                            <input type="radio" name="lift" value="Грузовой"/>
                                            <span className="fs-11 ms-2">Грузовой</span>
                                        </label>
                                        <label className="me-5 my-2">
                                            <input type="radio" name="lift" value="Пассажирский/Грузовой"/>
                                            <span className="fs-11 ms-2">Пассажирский/Грузовой</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <hr className="d-none d-md-block my-4"/>
                            <div className="row align-items-center mt-4 mt-sm-5">
                                <div className="col-6 col-md-3 fs-11 title">Высота потолков:</div>
                                <div className="col-6 col-md-9">
                                    <input type="number" className="fs-11"/>
                                    <span className="ms-2">м</span>
                                </div>
                            </div>
                            <hr className="d-none d-md-block my-4"/>
                            <div className="row align-items-center mt-4 mt-sm-5">
                                <div className="col-md-3 fs-11 title mb-3 m-md-0">Пандус:</div>
                                <div className="col-md-9 row row-cols-2">
                                    <div>
                                        <label className="me-5">
                                            <input type="radio" name="ramp" value="Есть"/>
                                            <span className="fs-11 ms-2">Есть</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="me-5">
                                            <input type="radio" name="ramp" value="Нет"/>
                                            <span className="fs-11 ms-2">Нет</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <hr className="d-none d-md-block my-4"/>
                            <div className="row align-items-center mt-4 mt-sm-5">
                                <div className="col-md-3 fs-11 title mb-3 m-md-0">Мусоропровод:</div>
                                <div className="col-md-9 row row-cols-2">
                                    <div>
                                        <label className="me-5">
                                            <input type="radio" name="chute" value="Есть"/>
                                            <span className="fs-11 ms-2">Есть</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="me-5">
                                            <input type="radio" name="chute" value="Нет"/>
                                            <span className="fs-11 ms-2">Нет</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <hr className="d-none d-md-block my-4"/>
                            <div className="row align-items-center mt-4 mt-sm-5">
                                <div className="col-md-3 fs-11 title mb-3 m-md-0">Парковка:</div>
                                <div className="col-md-9 row row-cols-2 row-cols-xl-3">
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
                            <div className="row row-cols-2 row-cols-sm-3 justify-content-center gx-2 gx-sm-4 mt-4">
                                <div>
                                    <button type="button" className="btn btn-2 w-100" onClick={()=>setActiveField(3)}>Назад</button>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-1 w-100" onClick={()=>setActiveField(5)}>Далее</button>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset data-show={(activeField === 5) ? 'true' : 'false'} name="anchor-5" className="element frame p-lg-4 mb-4 mb-lg-5">
                            <legend className="title-font fw-7 fs-15 mb-4">Условия сделки</legend>
                            <div className="row align-items-center mt-4 mt-sm-5 mb-4">
                                <div className="col-md-3 fs-11 title-req mb-3 m-md-0">Цена*:</div>
                                <div className="col-md-9">
                                    <input type="number" className="fs-11 price" required onChange={(e) => isFilled(e.target.closest('fieldset'))}/>
                                </div>
                            </div>
                            <div className="row align-items-center mt-4 mt-sm-5 mb-4">
                                <div className="col-md-3 fs-11 title-req mb-3 m-md-0">Ипотека*:</div>
                                <div className="col-md-9 d-flex">
                                    <label className="me-5">
                                        <input type="radio" name="hypothec" value="Да" required onChange={(e) => isFilled(e.target.closest('fieldset'))}/>
                                        <span className="fs-11 ms-2">Да</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="hypothec" value="Нет" required onChange={(e) => isFilled(e.target.closest('fieldset'))}/>
                                        <span className="fs-11 ms-2">Нет</span>
                                    </label>
                                </div>
                            </div>
                            <div className="row align-items-center mt-4 mt-sm-5 mb-4">
                                <div className="col-md-3 fs-11 title mb-3 m-md-0">Обременения:</div>
                                <div className="col-md-9 d-flex">
                                    <label className="me-5">
                                        <input type="radio" name="difficulties" value="Да" required onChange={(e) => isFilled(e.target.closest('fieldset'))}/>
                                        <span className="fs-11 ms-2">Да</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="difficulties" value="Нет" required onChange={(e) => isFilled(e.target.closest('fieldset'))}/>
                                        <span className="fs-11 ms-2">Нет</span>
                                    </label>
                                </div>
                            </div>
                            <div className="row row-cols-2 row-cols-sm-3 justify-content-center gx-2 gx-sm-4 mt-4">
                                <div>
                                    <button type="button" className="btn btn-2 w-100" onClick={()=>setActiveField(4)}>Назад</button>
                                </div>
                                <div>
                                    <button type="submit" className="btn btn-1 w-100">Разместить</button>
                                </div>
                            </div>
                        </fieldset>
                        <div className="d-flex justify-content-between mb-3">
                            <div>*- поля обязательные для заполнения</div>
                            <button type="button" className="d-none d-lg-block color-1 fs-11 fw-5 bb-1">Очистить форму</button>
                        </div>
                        <button type="submit" className="d-none d-lg-block btn btn-1 fs-15 mx-auto">Разместить объявление</button>
                        <div className="d-none d-lg-block gray-3 text-center mt-3">Нажимая кнопку “Разместить объявление”, Вы соглашаетесь с <a href="#" className="color-1">условиями сайта</a></div>
                    </div>
                    <div className="d-none d-lg-block col-lg-3 position-relative">
                        <aside>
                            <nav className="contents mb-4 mb-lg-5">
                                <ol>
                                    <li data-target="anchor-1">
                                        <Link activeClass="active" to="anchor-1" spy={true} smooth={true} hashSpy={true} offset={-80} duration={300} isDynamic={true}><span>Тип объявления</span></Link>
                                    </li>
                                    <li data-target="anchor-2">
                                        <Link activeClass="active" to="anchor-2" spy={true} smooth={true} hashSpy={true} offset={-80} duration={300} isDynamic={true}><span>Об объекте</span></Link>
                                    </li>
                                    <li data-target="anchor-3">
                                        <Link activeClass="active" to="anchor-3" spy={true} smooth={true} hashSpy={true} offset={-80} duration={300} isDynamic={true}><span>Описание и фото</span></Link>
                                    </li>
                                    <li data-target="anchor-4">
                                        <Link activeClass="active" to="anchor-4" spy={true} smooth={true} hashSpy={true} offset={-80} duration={300} isDynamic={true}><span>О здании</span></Link>
                                    </li>
                                    <li data-target="anchor-5">
                                        <Link activeClass="active" to="anchor-5" spy={true} smooth={true} hashSpy={true} offset={-80} duration={300} isDynamic={true}><span>Условия сделки</span></Link>
                                    </li>
                                </ol>
                            </nav>
                            <div className="faster">
                                <img src="/real_estate/img/img5.jpg" alt="" className="img-fluid" />
                                <div className="title">Хотите найти покупателя/арендатора быстрее?</div>
                                <button type="button" className="btn btn-1 px-3">Узнать о преимуществах</button>
                            </div>
                        </aside>
                    </div>
                </form>
            </section>
        </main>
    )
}
