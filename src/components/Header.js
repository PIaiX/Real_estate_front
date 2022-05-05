import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import CustomSelect from './utilities/CustomSelect';
import { animateScroll as scroll } from 'react-scroll';

export default function Header() {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <header>
                <div className="container">
                    <Link to="/" onClick={() => scrollToTop()} className="order-1 me-lg-auto">
                        <img src="/Real_estate_front/img/Лого.png" alt="Название сайта" className="logo" />
                    </Link>
                    <nav className="d-none d-lg-flex order-2">
                        <NavLink to="/">Главная</NavLink>
                        <div className="dropdown">
                            <a href="/" className="dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Услуги</a>
                            <ul className="dropdown-menu py-2">
                                <li>
                                    <NavLink to="/service" className="dropdown-item">Дизайн</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/service" className="dropdown-item">Ремонт</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/service" className="dropdown-item">Грузоперевозки</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/service" className="dropdown-item">Услуги риелторов</NavLink>
                                </li>
                            </ul>
                        </div>
                        <a href="/">Ипотека</a>
                        <a href="" role="button" data-bs-toggle="modal" data-bs-target="#ask">Задать вопрос</a>
                    </nav>
                    <div className="d-none d-md-flex order-4 order-lg-3">
                        <Link to="/personal-account/my-messages" onClick={() => scrollToTop()} className="ms-4">
                            <img src="/Real_estate_front/img/icons/email.svg" alt="email"/>
                        </Link>
                        <Link to="/personal-account/favorites/page/1" onClick={() => scrollToTop()} className="ms-3 ms-xl-4">
                            <img src="/Real_estate_front/img/icons/favorite.svg" alt="favorite"/>
                        </Link>
                        <Link to="/entrance" onClick={() => scrollToTop()} className="ms-3 ms-xl-4">
                            <img src="/Real_estate_front/img/icons/user.svg" alt="аккаунт"/>
                        </Link>
                    </div>
                    
                    {/* <button type="button" className="ms-md-4 btn btn-1 text-uppercase p-2 order-3 order-lg-4">Подать объявление</button> */}
                    <NavLink to="/advertise" onClick={() => scrollToTop()} className="ms-md-4 btn btn-1 text-uppercase p-2 order-3 order-lg-4">Подать объявление</NavLink>

                    <CustomSelect className="ms-md-3 ms-xl-4 order-2 order-lg-5" btnClass="color-2 text-uppercase" checkedOpt="Казань" options={['Казань', 'Москва', 'Санкт-Петербург']} alignment="right"/>

                    <button type="button" data-bs-toggle="offcanvas" data-bs-target="#header-menu" className="d-block d-lg-none order-5">
                        <img src="/Real_estate_front/img/icons/menu.svg" alt="меню"/>
                    </button>
                </div> 
            </header>

            <div className="offcanvas offcanvas-end" tabIndex="-1" id="header-menu">
                <div className="offcanvas-body">
                    <nav>
                        <ul data-bs-dismiss="offcanvas">
                            <li><Link to="/" onClick={() => scrollToTop()}>Главная</Link></li>
                            <li><Link to="/service" onClick={() => scrollToTop()}>Услуги</Link></li>
                            <li><a href="/">Задать вопрос</a></li>
                            <li><Link to="/personal-account" onClick={() => scrollToTop()}>Личный кабинет</Link></li>
                            <li><Link to="/personal-account/favorites/page/1" onClick={() => scrollToTop()}>Избранное</Link></li>
                            <li><Link to="/personal-account/my-messages" onClick={() => scrollToTop()}>Сообщения</Link></li>
                            <li><Link to="/articles" onClick={() => scrollToTop()}>Статьи</Link></li>
                        </ul>
                    </nav>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas">
                        <svg viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.00006 1.18237L15 15.9049"/>
                            <path d="M14.9999 1.18237L1.00001 15.9049"/>
                        </svg>
                    </button>
                </div>
            </div>

            <div className="modal fade" id="ask" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-body px-lg-5">
                            <button type="button" className="btn-close" data-bs-dismiss="modal">
                                <svg viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.00006 1.18237L15 15.9049"/>
                                    <path d="M14.9999 1.18237L1.00001 15.9049"/>
                                </svg>
                            </button>
                            <h3 className='text-center'>Задать вопрос</h3>
                            <form className="message-form">
                                <div className="d-flex align-items-center">
                                    <div className="photo me-2 me-sm-4">
                                        <img src="/Real_estate_front/img/photo.png" alt="Колесникова Ирина"/>
                                        <div className="indicator online"></div>
                                    </div>
                                    <div>
                                        <div className='fs-11 fw-5'>Вам ответит администратор</div> 
                                        <div className='fs-11 fw-5 mt-1'>Колесникова Ирина</div>
                                        <div className="gray-2 fs-09 mt-2">Сейчас онлайн</div>
                                    </div>
                                </div>
                                <div className='row align-items-center fs-11 mt-3'>
                                    <div className='col-sm-3 mb-1 mb-sm-3'>
                                        <label className='gray-3' htmlFor="name">Ваше имя:</label>
                                    </div>
                                    <div className='col-sm-9 mb-3'>
                                        <input type="text" placeholder="Имя" id="name"/>
                                    </div>
                                    <div className='col-sm-3 mb-1 mb-sm-3'>
                                        <label className='gray-3' htmlFor="email">Ваш Email:</label>
                                    </div>
                                    <div className='col-sm-9 mb-3'>
                                        <input type="text" placeholder="Email" id="email"/>
                                    </div>
                                    <div className='col-sm-3 mb-1 mb-sm-3'>
                                        <label className='gray-3' htmlFor="question">Ваш вопрос:</label>
                                    </div>
                                    <div className='col-sm-9 mb-sm-3'>
                                        <input type="text" placeholder="вопрос" id="question"/>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-1 mx-auto fs-12 mt-4">ОТПРАВИТЬ</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
