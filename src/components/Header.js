import React from 'react';
import '../styles/Header.css';

export default function Header() {
    return (
        <header>
            <div className="container">
                <img src="../img/Лого.png" alt="Название сайта" className="logo"/>
                <nav>
                    <button type="button" className="active">Главная</button>
                    <button type="button">Услуги</button>
                    <button type="button">Ипотека</button>
                    <button type="button">Задать вопрос</button>
                </nav>
                <button type="button" className="ms-4">
                    <img src="../img/icons/email.svg" alt="email"/>
                </button>
                <button type="button" className="ms-4">
                    <img src="../img/icons/favorite.svg" alt="favorite"/>
                </button>
                <button type="button" className="ms-4">
                    <img src="../img/icons/user.svg" alt="аккаунт"/>
                </button>
                <button type="button" className="ms-4 btn btn-1 text-uppercase">Подать объявление</button>
                <select className="ms-4 color-2 fs-09">
                    <option selected>Казань</option>
                    <option>Москва</option>
                    <option>Питер</option>
                </select>
            </div> 
        </header>
    )
}
