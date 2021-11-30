import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <header>
                <div className="container">
                    <img src="../img/Лого.png" alt="Название сайта" className="logo order-1 me-lg-auto"/>
                    <nav className="d-none d-lg-flex order-2">
                        <NavLink to="/">Главная</NavLink>
                        <a href="/">Услуги</a>
                        <a href="/">Ипотека</a>
                        <a href="/">Задать вопрос</a>
                    </nav>
                    <div className="d-none d-md-flex order-4 order-lg-3">
                        <button type="button" className="ms-4">
                            <img src="../img/icons/email.svg" alt="email"/>
                        </button>
                        <button type="button" className="ms-3 ms-xl-4">
                            <img src="../img/icons/favorite.svg" alt="favorite"/>
                        </button>
                        <button type="button" className="ms-3 ms-xl-4">
                            <img src="../img/icons/user.svg" alt="аккаунт"/>
                        </button>
                    </div>
                    
                    <button type="button" className="ms-md-4 btn btn-1 text-uppercase p-2 order-3 order-lg-4">Подать объявление</button>
                    <select defaultValue="Казань" className="ms-md-3 ms-xl-4 color-2 order-2 order-lg-5">
                        <option value="Казань">Казань</option>
                        <option value="Москва">Москва</option>
                        <option value="Питер">Питер</option>
                    </select>
                    <button type="button" data-bs-toggle="offcanvas" data-bs-target="#header-menu" className="d-block d-lg-none order-5">
                        <img src="../img/icons/menu.svg" alt="меню"/>
                    </button>
                </div> 
            </header>

            <div className="offcanvas offcanvas-end" tabIndex="-1" id="header-menu">
                <div className="offcanvas-body">
                    <nav>
                        <ul>
                            <li><NavLink to="/">Главная</NavLink></li>
                            <li><a href="/">Услуги</a></li>
                            <li><a href="/">Задать вопрос</a></li>
                            <li><a href="/">Личный кабинет</a></li>
                            <li><a href="/">Избранное</a></li>
                            <li><a href="/">Сообщения</a></li>
                        </ul>
                    </nav>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
            </div>
        </>
    )
}