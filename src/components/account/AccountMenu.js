import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function AccountMenu() {
    return (
        <div>
            <nav className="d-block d-lg-none mb-4 mb-sm-5" aria-label="breadcrumb">
                <Link to="/" className="gray-3">&#10094; На главную</Link>
            </nav>
            <h1 className="d-block d-lg-none text-center color-1 mb-4">Личный кабинет</h1>
            <nav className="menu">
                <ul>
                    <li>
                        <img src="/real_estate/img/icons/pa-1.svg" alt="Профиль"/>
                        <NavLink to="profile">Профиль</NavLink>
                    </li>
                    <li>
                        <img src="/real_estate/img/icons/pa-2.svg" alt="Мои объявления"/>
                        <NavLink to="my-ads">Мои объявления</NavLink>
                    </li>
                    <li>
                        <img src="/real_estate/img/icons/pa-3.svg" alt="Мои услуги"/>
                        <NavLink to="my-services">Мои услуги</NavLink>
                    </li>
                    <li>
                        <img src="/real_estate/img/icons/pa-4.svg" alt="Избранное"/>
                        <NavLink to="favorites">Избранное</NavLink>
                    </li>
                    <li>
                        <img src="/real_estate/img/icons/pa-5.svg" alt="Сообщения"/>
                        <NavLink to="my-messages">Сообщения</NavLink>
                        <div className="count">2</div>
                    </li>
                    <li>
                        <img src="/real_estate/img/icons/pa-6.svg" alt="Отзывы"/>
                        <NavLink to="my-reviews">Отзывы</NavLink>
                    </li>
                    <li>
                        <img src="/real_estate/img/icons/pa-7.svg" alt="Выйти"/>
                        <button type="button">Выйти</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
