import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Favorites from './account/Favorites';
import UserAds from './account/UserAds';
import UserProfile from './account/UserProfile';
import UserServices from './account/UserServices';
import UserReviews from './account/UserReviews';
import UserMessages from './account/UserMessages';
import CreateService from './account/CreateService';
import ChatPage from './account/ChatPage';

export default function PersonalAccount() {
    return (
        <main className="account py-5">
            <section id="sec-12" className="container">
                <h1 className="text-center text-lg-start">Личный кабинет</h1>
                <div className="row">
                    <div className="col-3">
                        <div className="frame p-4">
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
                    </div>
                    <div className="col-9">
                        <div className="frame pt-5">
                            <Routes>
                                <Route path="/" element={<UserProfile />} />
                                <Route path="profile" element={<UserProfile />} />
                                <Route path="my-ads" element={<UserAds />} />
                                <Route path="my-services" element={<UserServices />} />
                                <Route path="my-services/create" element={<CreateService />} />
                                <Route path="favorites" element={<Favorites />} />
                                <Route path="my-messages" element={<UserMessages /> } />
                                <Route path="my-messages/*" element={<ChatPage /> } />
                                <Route path="my-reviews" element={ <UserReviews /> } />
                            </Routes>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
