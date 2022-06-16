import React from 'react';
import { Link } from 'react-router-dom';

export default function UserMessages() {
    return (
        <div>
            <nav className="d-block d-lg-none mt-3 mb-3 mb-sm-5" aria-label="breadcrumb">
                <Link to="/personal-account" className="gray-3">&#10094; Назад</Link>
            </nav>
            <h4 className="text-center color-1 mb-3 mb-sm-4 mb-xl-5">Сообщения</h4>
            <div className="chat unread">
                <div className="photo">
                    <img src="/img/photo2.png" alt="Шевцов Андрей"/>
                    <div className="indicator online"></div>
                </div>
                <div className="main">
                    <div className="title-font fs-11 fw-7 mb-1">Шевцов Андрей</div>
                    <div className="fs-09 fw-5 mb-3 mb-sm-4">Тема: 1-к, квартира 52м2, ЖК “Столичный”</div>
                    <div className="message">Добрый день. Когда можно будет приехать на просмотр? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                </div>
                <div className="new">
                    <div>1</div>
                </div>
                <div className="end">
                    <div className="fs-09 fw-5">19:30</div>
                    <button type="button" className="btn-del" title="Удалить">
                        <i class="bi bi-trash-fill"></i>
                    </button>
                    <button type="button" className="btn-notice" title="Пожаловаться">
                        <i class="bi bi-exclamation-triangle-fill"></i>
                    </button>
                </div>
                <Link to="chat1" className="link-to-chat"></Link>
            </div>
            <div className="chat">
                <div className="photo">
                    <img src="/img/photo3.png" alt="Наумова Кристина"/>
                    <div className="indicator"></div>
                </div>
                <div className="main">
                    <div className="title-font fs-11 fw-7 mb-1">Наумова Кристина</div>
                    <div className="fs-09 fw-5 mb-3 mb-sm-4">Тема: 1-к, квартира 52м2, Четаева 32</div>
                    <div className="message">Возможен просмотр на завтра? </div>
                </div>
                <div className="new">
                </div>
                <div className="end">
                    <div className="fs-09 fw-5">14:24</div>
                    <button type="button" className="btn-del" title="Удалить">
                        <i class="bi bi-trash-fill"></i>
                    </button>
                    <button type="button" className="btn-notice" title="Пожаловаться">
                        <i class="bi bi-exclamation-triangle-fill"></i>
                    </button>
                </div>
                <Link to="chat1" className="link-to-chat"></Link>
            </div>
            <div className="chat">
                <div className="photo">
                    <img src="/img/photo4.png" alt="Калинина Татьяна"/>
                    <div className="indicator"></div>
                </div>
                <div className="main">
                    <div className="title-font fs-11 fw-7 mb-1">Калинина Татьяна</div>
                    <div className="fs-09 fw-5 mb-3 mb-sm-4">Тема: 1-к, квартира 52м2, ЖК “Столичный”</div>
                    <div className="reply">
                        <img src="/img/photo.png" alt="Ирина Колесникова"/>
                        <div className="message">Добрый день. Когда можно будет приехать на просмотр? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                        <div className="mark">
                            <i class="bi bi-check2" title="Отправлено"></i>
                            {/* <i class="bi bi-check2-all" title="прочитано"></i> */}
                        </div>
                    </div>
                </div>
                <div className="new">
                </div>
                <div className="end">
                    <div className="fs-09 fw-5">1 ноя</div>
                    <button type="button" className="btn-del" title="Удалить">
                        <i class="bi bi-trash-fill"></i>
                    </button>
                    <button type="button" className="btn-notice" title="Пожаловаться">
                        <i class="bi bi-exclamation-triangle-fill"></i>
                    </button>
                </div>
                <Link to="chat1" className="link-to-chat"></Link>
            </div>
            <div className="chat">
                <div className="photo">
                    <img src="/img/photo5.png" alt="Баженов Илья"/>
                    <div className="indicator"></div>
                </div>
                <div className="main">
                    <div className="title-font fs-11 fw-7 mb-1">Баженов Илья</div>
                    <div className="fs-09 fw-5 mb-3 mb-sm-4">Тема: 1-к, квартира 52м2, Четаева 32</div>
                    <div className="reply">
                        <img src="/img/photo.png" alt="Ирина Колесникова"/>
                        <div className="message">Звоните мне на рабочий телефоен. Отвечаю с 9 до 19:00.</div>
                        <div className="mark">
                            {/* <i class="bi bi-check2" title="Отправлено"></i> */}
                            <i class="bi bi-check2-all" title="прочитано"></i>
                        </div>
                    </div>
                </div>
                <div className="new">
                </div>
                <div className="end">
                    <div className="fs-09 fw-5">19 окт</div>
                    <button type="button" className="btn-del" title="Удалить">
                        <i class="bi bi-trash-fill"></i>
                    </button>
                    <button type="button" className="btn-notice" title="Пожаловаться">
                        <i class="bi bi-exclamation-triangle-fill"></i>
                    </button>
                </div>
                <Link to="chat1" className="link-to-chat"></Link>
            </div>
        </div>
    )
}
