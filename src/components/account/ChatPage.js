import React from 'react';
import { Link } from 'react-router-dom';

export default function ChatPage() {
    return (
        <div className="pb-5">
            <div className="w-100 d-flex align-items-center justify-content-between px-5 mb-5">
                <Link to="/personal-account/my-messages">
                    <svg width="12" height="23" viewBox="0 0 12 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="-1" x2="14.5309" y2="-1" transform="matrix(-0.660679 -0.750669 0.709114 -0.705094 11.6006 21)" stroke="#C59C7E" stroke-width="2"/>
                        <line y1="-1" x2="14.5309" y2="-1" transform="matrix(-0.660679 0.750669 0.709114 0.705094 11.6006 2)" stroke="#C59C7E" stroke-width="2"/>
                    </svg>
                    <span className="fs-09 ms-3">Назад</span>
                </Link>
                <div className="text-center">
                    <h4 className="text-center color-1">Шевцов Андрей</h4>
                    <div className="fs-09 fw-5">Тема: 1-к, квартира 52м2, ЖК “Столичный”</div>
                </div>
                <div className="d-flex align-items-center">
                    <span className="fw-3 fs-09">Сейчас онлайн</span>
                    <div className="btn-group ms-4">
                        <button type="button" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <svg viewBox="0 0 6 27" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="3" cy="3" r="3"/>
                                <circle cx="3" cy="14" r="3"/>
                                <circle cx="3" cy="24" r="3"/>
                            </svg>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end py-2 fs-11">
                            <li><button className="dropdown-item" type="button">Удалить диалог</button></li>
                            <li><button className="dropdown-item" type="button">Заблокировать</button></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="messages-list">
                <div className="message">
                    <div className="photo">
                        <img src="/real_estate/img/photo.png" alt="Колесникова Ирина"/>
                        <div className="indicator online"></div>
                    </div>
                    <div className="main">
                        <div>Колесникова Ирина</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor et diam, sed. Ligula luctus mus leo, justo, eu lectus iaculis ut. Sed convallis mauris sem neque pharetra. Donec iaculis turpis amet pulvinar scelerisque porta.</div>
                    </div>
                    <div className="mark"></div>
                    <div className="fs-09 fw-5">19:30</div>
                    <div className="btns">
                        <button type="button">
                            <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.64286 14.9444C1.64286 15.9375 2.44643 16.75 3.42857 16.75H10.5714C11.5536 16.75 12.3571 15.9375 12.3571 14.9444V4.11111H1.64286V14.9444ZM13.25 1.40278H10.125L9.23214 0.5H4.76786L3.875 1.40278H0.75V3.20833H13.25V1.40278Z" fill="#BDBDBD"/>
                            </svg>
                        </button>
                        <button type="button" className="ms-3">
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.68332 16.1495C1.56771 16.1493 1.4534 16.1251 1.34766 16.0783C1.24193 16.0315 1.14708 15.9633 1.06916 15.8779C0.989824 15.7932 0.929286 15.6927 0.891515 15.583C0.853745 15.4732 0.839594 15.3568 0.849991 15.2412L1.05416 12.9962L10.4858 3.56787L13.4333 6.51454L4.00416 15.942L1.75916 16.1462C1.73395 16.1485 1.70864 16.1496 1.68332 16.1495ZM14.0217 5.92537L11.075 2.9787L12.8425 1.2112C12.9199 1.13372 13.0118 1.07226 13.113 1.03032C13.2141 0.988382 13.3226 0.966797 13.4321 0.966797C13.5416 0.966797 13.65 0.988382 13.7512 1.03032C13.8524 1.07226 13.9443 1.13372 14.0217 1.2112L15.7892 2.9787C15.8666 3.0561 15.9281 3.148 15.97 3.24917C16.012 3.35033 16.0336 3.45877 16.0336 3.56829C16.0336 3.6778 16.012 3.78624 15.97 3.8874C15.9281 3.98857 15.8666 4.08047 15.7892 4.15787L14.0225 5.92454L14.0217 5.92537Z" fill="#BDBDBD"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
