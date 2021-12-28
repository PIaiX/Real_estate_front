import React from 'react';
import { NavLink } from 'react-router-dom';
import ShowPhone from '../utilities/ShowPhone';
import InputFile from '../utilities/InputFile';
import { Slider1 } from './Slider1';

export default function UserPage() {
    return (
        <main>
            <div className="container py-3 py-sm-4 py-lg-5">
                <nav aria-label="breadcrumb">
                    <a href="javascript:history.go(-1)" className="d-block d-md-none gray-3">&#10094; Назад</a>
                    <ol className="d-none d-md-flex breadcrumb">
                        <li className="breadcrumb-item">
                            <NavLink to="/">Главная</NavLink>
                        </li>
                        <li className="breadcrumb-item">
                            <NavLink to="/service">Услуги</NavLink>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">Колесникова Ирина</li>
                    </ol>
                </nav>
            </div>

            <section id="sec-10" className="container">
                <div className="row">
                    <div className="col-lg-9 col-xl-8 col-xxl-7 mb-5">
                        <div className="row flex-md-row-reverse gx-2 gx-sm-4 gx-xl-5">
                            <div className="col-7 col-sm-8 col-md-9">
                                <div className="d-md-flex align-items-baseline mb-3">
                                    <h1 className="mb-0 me-4">Колесникова Ирина</h1>
                                    <div className="fs-11 gray-3">Сейчас онлайн</div>
                                </div>
                                <h4>Риелтор</h4>
                                <div className="fs-11 gray-3">На сайте с сентября 2019</div>
                                <div className="d-flex align-items-center mt-2 mt-sm-4">
                                    <ShowPhone className="d-none d-md-flex flex-1" phone="+ 7 (952) 879 78 65"/>
                                    <button type="button" data-bs-toggle="modal" data-bs-target="#write-message" className="d-none d-md-flex btn btn-1 px-3 w-100 flex-1 ms-4">Написать сообщение</button>
                                    <button type="button" className="btn-notice ms-md-4" data-bs-toggle="tooltip" data-bs-placement="top" title="Пожаловаться">
                                        <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.4455 1.8619C9.23354 0.64323 11.0164 0.643231 11.8044 1.8619L19.2732 13.4121C20.1337 14.7429 19.1784 16.4981 17.5937 16.4981H2.65624C1.0715 16.4981 0.116258 14.7429 0.976768 13.4121L8.4455 1.8619Z" className="fill-color"/>
                                            <path d="M10.8489 4.96997V8.97397C10.8489 9.18397 10.8442 9.38931 10.8349 9.58997C10.8255 9.79064 10.8115 9.99364 10.7929 10.199C10.7789 10.3996 10.7602 10.6073 10.7369 10.822C10.7135 11.0366 10.6879 11.263 10.6599 11.501H9.73587C9.70787 11.263 9.6822 11.0366 9.65887 10.822C9.63553 10.6073 9.61453 10.3996 9.59587 10.199C9.58187 9.99364 9.5702 9.79064 9.56087 9.58997C9.55153 9.38931 9.54687 9.18397 9.54687 8.97397V4.96997H10.8489ZM9.25287 14.203C9.25287 14.077 9.2762 13.958 9.32287 13.846C9.36953 13.734 9.43487 13.636 9.51887 13.552C9.60287 13.468 9.70087 13.4026 9.81287 13.356C9.92487 13.3046 10.0462 13.279 10.1769 13.279C10.3029 13.279 10.4219 13.3046 10.5339 13.356C10.6459 13.4026 10.7439 13.468 10.8279 13.552C10.9119 13.636 10.9772 13.734 11.0239 13.846C11.0752 13.958 11.1009 14.077 11.1009 14.203C11.1009 14.3336 11.0752 14.455 11.0239 14.567C10.9772 14.679 10.9119 14.777 10.8279 14.861C10.7439 14.945 10.6459 15.0103 10.5339 15.057C10.4219 15.1036 10.3029 15.127 10.1769 15.127C10.0462 15.127 9.92487 15.1036 9.81287 15.057C9.70087 15.0103 9.60287 14.945 9.51887 14.861C9.43487 14.777 9.36953 14.679 9.32287 14.567C9.2762 14.455 9.25287 14.3336 9.25287 14.203Z" fill="#fff"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="col-5 col-sm-4 col-md-3">
                                <div className="user-photo">
                                    <img src="/real_estate/img/photo.png" alt="Колесникова Ирина"/>
                                    <div className="indicator online"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-10 col-xxl-9 mb-5">
                        <h4 className="text-center text-md-left mb-2 mb-sm-4">Предоставляемые услуги</h4>
                        <div className="user-card page">
                            <div className="title justify-content-md-start mb-2 mb-sm-4">
                                <h4 className="mb-0">Дизайнер</h4>
                                <div className="rating ms-4">
                                    <img src="/real_estate/img/icons/star-blue.svg" alt="1"/>
                                    <img src="/real_estate/img/icons/star-blue.svg" alt="1"/>
                                    <img src="/real_estate/img/icons/star-blue.svg" alt="1"/>
                                    <img src="/real_estate/img/icons/star-gray.svg" alt="1"/>
                                    <img src="/real_estate/img/icons/star-gray.svg" alt="1"/>
                                    <span>(3.35)</span>
                                </div>
                            </div>
                            <div className="desc mb-3 mb-sm-4">
                                <div className="fs-11 fw-5 gray-2 mb-3">Опыт работы от 1 года</div>
                                <div className="fw-3">
                                    <p>Создание индивидуального дизайна по Вашим предпочтениям. Помощь в подброре отделочных материалов, мебели и текстиля. Примеры работ в личных сообщениях.</p>
                                </div>
                            </div>
                            <div className="serv-list mt-2 mt-md-3 mt-xxl-0">
                                <div className="serv">Проектирование</div>
                                <div className="serv">Курирование проекта</div>
                                <div className="serv">Создание макета</div>
                                <div className="serv">Визуализация</div>
                                <div className="serv">Освещение</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-10 col-xxl-9 mb-5">
                        <div className="d-sm-flex justify-content-between mb-4">
                            <h4 className="text-center text-sm-left mb-0">Отзывы на Ирину (2)</h4>
                            <button type="button" className="mx-auto mx-sm-0 mt-3 mt-sm-0 btn btn-1 fs-11">Написать отзыв</button>
                        </div>
                        <div className="review mb-3">
                            <img src="/real_estate/img/photo2.png" alt="Андрей Шевцов" className="photo d-none d-sm-block"/>
                            <div className="ms-sm-4">
                                <div className="d-flex align-items-center d-sm-block mb-2 mb-sm-0">
                                    <img src="/real_estate/img/photo2.png" alt="Андрей Шевцов" className="photo d-block d-sm-none"/>
                                    <div className="ms-3">
                                        <h4>Андрей Шевцов</h4>
                                        <div className="rating mb-sm-3">
                                            <span className="fs-12 ms-0">Оценка:</span>
                                            <img src="/real_estate/img/icons/star-blue.svg" alt="1"/>
                                            <img src="/real_estate/img/icons/star-blue.svg" alt="1"/>
                                            <img src="/real_estate/img/icons/star-blue.svg" alt="1"/>
                                            <img src="/real_estate/img/icons/star-gray.svg" alt="1"/>
                                            <img src="/real_estate/img/icons/star-gray.svg" alt="1"/>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel mauris, habitasse iaculis donec nec. Massa egestas vestibulum cursus justo, quis lectus.</p>
                                </div>
                                <div className="date fs-11 gray-3">21.09.21</div>
                                <button type="button" className="claiming color-1 fs-09">Пожаловаться</button>
                            </div>
                        </div>
                        <div className="review mb-3">
                            <img src="/real_estate/img/photo2.png" alt="Андрей Шевцов" className="photo d-none d-sm-block"/>
                            <div className="ms-sm-4">
                                <div className="d-flex align-items-center d-sm-block mb-2 mb-sm-0">
                                    <img src="/real_estate/img/photo2.png" alt="Андрей Шевцов" className="photo d-block d-sm-none"/>
                                    <div className="ms-3">
                                        <h4>Андрей Шевцов</h4>
                                        <div className="rating mb-sm-3">
                                            <span className="fs-12 ms-0">Оценка:</span>
                                            <img src="/real_estate/img/icons/star-blue.svg" alt="1"/>
                                            <img src="/real_estate/img/icons/star-blue.svg" alt="1"/>
                                            <img src="/real_estate/img/icons/star-blue.svg" alt="1"/>
                                            <img src="/real_estate/img/icons/star-gray.svg" alt="1"/>
                                            <img src="/real_estate/img/icons/star-gray.svg" alt="1"/>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel mauris, habitasse iaculis donec nec. Massa egestas vestibulum cursus justo, quis lectus.</p>
                                </div>
                                <div className="date fs-11 gray-3">21.09.21</div>
                                <button type="button" className="claiming color-1 fs-09">Пожаловаться</button>
                            </div>
                        </div>
                        <button type="button" className="fs-12 fw-5 color-1 mx-auto bb-1">Показать еще</button>
                    </div>
                    <div className="col-12 mb-5">
                        <h4 className="text-center text-md-left">Объявления пользователя</h4>
                        <div className="position-relative">
                            <Slider1 />
                        </div>
                    </div>
                </div>
            </section>

            <div className="mobile-btns d-block d-md-none py-2 py-sm-3">
                <div className="container">
                    <div className="row row-cols-2 gx-2 gx-sm-3">
                        <div>
                            <ShowPhone className="fs-12" phone="+ 7 (952) 879 78 65"/>
                        </div>
                        <div>
                            <button type="button" className="fs-12 btn btn-1 w-100 px-2">Написать сообщение</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="write-message" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="btn-close" data-bs-dismiss="modal">
                                <svg viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.00006 1.18237L15 15.9049"/>
                                    <path d="M14.9999 1.18237L1.00001 15.9049"/>
                                </svg>
                            </button>
                            <form className="message-form">
                                <div className="d-flex align-items-center">
                                    <div className="photo me-2 me-sm-4">
                                        <img src="/real_estate/img/photo.png" alt="Колесникова Ирина"/>
                                        <div className="indicator online"></div>
                                    </div>
                                    <div>
                                        <h4>Колесникова Ирина</h4>
                                        <div className="gray-2 fs-09">Сейчас онлайн</div>
                                    </div>
                                </div>
                                <textarea className="mt-3" rows="4" placeholder="Введите сообщение"></textarea>
                                <div className="d-flex align-items-center mt-3">
                                    <InputFile multiple={false}/>
                                    <button type="submit" className="btn btn-1 w-100 flex-1 fs-12 ms-4">ОТПРАВИТЬ</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
