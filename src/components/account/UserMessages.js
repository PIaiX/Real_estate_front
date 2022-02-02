import React from 'react';
import { Link } from 'react-router-dom';

export default function UserMessages() {
    return (
        <div>
            <nav className="d-block d-lg-none mb-3 mb-sm-5" aria-label="breadcrumb">
                <Link to="/personal-account" className="gray-3">&#10094; Назад</Link>
            </nav>
            <h4 className="text-center color-1 mb-3 mb-sm-4 mb-xl-5">Сообщения</h4>
            <div className="chat unread">
                <div className="photo">
                    <img src="/real_estate/img/photo2.png" alt="Шевцов Андрей"/>
                    <div className="indicator online"></div>
                </div>
                <div className="main">
                    <div className="title-font fs-11 fw-7 mb-1">Шевцов Андрей</div>
                    <div className="fs-09 fw-5 mb-4">Тема: 1-к, квартира 52м2, ЖК “Столичный”</div>
                    <div className="message">Добрый день. Когда можно будет приехать на просмотр? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                </div>
                <div className="new">
                    <div>1</div>
                </div>
                <div className="end">
                    <div className="fs-09 fw-5">19:30</div>
                    <button type="button" className="btn-del" title="Удалить">
                        <svg viewBox="0 0 18 21" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.03571 18.1806C2.03571 19.4219 3.08036 20.4375 4.35714 20.4375H13.6429C14.9196 20.4375 15.9643 19.4219 15.9643 18.1806V4.63889H2.03571V18.1806ZM17.125 1.25347H13.0625L11.9018 0.125H6.09821L4.9375 1.25347H0.875V3.51042H17.125V1.25347Z"/>
                        </svg>
                    </button>
                    <button type="button" className="btn-notice" title="Пожаловаться">
                        <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.4455 1.8619C9.23354 0.64323 11.0164 0.643231 11.8044 1.8619L19.2732 13.4121C20.1337 14.7429 19.1784 16.4981 17.5937 16.4981H2.65624C1.0715 16.4981 0.116258 14.7429 0.976768 13.4121L8.4455 1.8619Z" className="fill-color"/>
                            <path d="M10.8489 4.96997V8.97397C10.8489 9.18397 10.8442 9.38931 10.8349 9.58997C10.8255 9.79064 10.8115 9.99364 10.7929 10.199C10.7789 10.3996 10.7602 10.6073 10.7369 10.822C10.7135 11.0366 10.6879 11.263 10.6599 11.501H9.73587C9.70787 11.263 9.6822 11.0366 9.65887 10.822C9.63553 10.6073 9.61453 10.3996 9.59587 10.199C9.58187 9.99364 9.5702 9.79064 9.56087 9.58997C9.55153 9.38931 9.54687 9.18397 9.54687 8.97397V4.96997H10.8489ZM9.25287 14.203C9.25287 14.077 9.2762 13.958 9.32287 13.846C9.36953 13.734 9.43487 13.636 9.51887 13.552C9.60287 13.468 9.70087 13.4026 9.81287 13.356C9.92487 13.3046 10.0462 13.279 10.1769 13.279C10.3029 13.279 10.4219 13.3046 10.5339 13.356C10.6459 13.4026 10.7439 13.468 10.8279 13.552C10.9119 13.636 10.9772 13.734 11.0239 13.846C11.0752 13.958 11.1009 14.077 11.1009 14.203C11.1009 14.3336 11.0752 14.455 11.0239 14.567C10.9772 14.679 10.9119 14.777 10.8279 14.861C10.7439 14.945 10.6459 15.0103 10.5339 15.057C10.4219 15.1036 10.3029 15.127 10.1769 15.127C10.0462 15.127 9.92487 15.1036 9.81287 15.057C9.70087 15.0103 9.60287 14.945 9.51887 14.861C9.43487 14.777 9.36953 14.679 9.32287 14.567C9.2762 14.455 9.25287 14.3336 9.25287 14.203Z" fill="#fff"/>
                        </svg>
                    </button>
                </div>
                <Link to="chat1" className="link-to-chat"></Link>
            </div>
            <div className="chat">
                <div className="photo">
                    <img src="/real_estate/img/photo3.png" alt="Наумова Кристина"/>
                    <div className="indicator"></div>
                </div>
                <div className="main">
                    <div className="title-font fs-11 fw-7 mb-1">Наумова Кристина</div>
                    <div className="fs-09 fw-5 mb-4">Тема: 1-к, квартира 52м2, Четаева 32</div>
                    <div className="message">Возможен просмотр на завтра? </div>
                </div>
                <div className="new">
                </div>
                <div className="end">
                    <div className="fs-09 fw-5">14:24</div>
                    <button type="button" className="btn-del" title="Удалить">
                        <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.03571 18.1806C2.03571 19.4219 3.08036 20.4375 4.35714 20.4375H13.6429C14.9196 20.4375 15.9643 19.4219 15.9643 18.1806V4.63889H2.03571V18.1806ZM17.125 1.25347H13.0625L11.9018 0.125H6.09821L4.9375 1.25347H0.875V3.51042H17.125V1.25347Z" fill="#BDBDBD"/>
                        </svg>
                    </button>
                    <button type="button" className="btn-notice" title="Пожаловаться">
                        <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.4455 1.8619C9.23354 0.64323 11.0164 0.643231 11.8044 1.8619L19.2732 13.4121C20.1337 14.7429 19.1784 16.4981 17.5937 16.4981H2.65624C1.0715 16.4981 0.116258 14.7429 0.976768 13.4121L8.4455 1.8619Z" className="fill-color"/>
                            <path d="M10.8489 4.96997V8.97397C10.8489 9.18397 10.8442 9.38931 10.8349 9.58997C10.8255 9.79064 10.8115 9.99364 10.7929 10.199C10.7789 10.3996 10.7602 10.6073 10.7369 10.822C10.7135 11.0366 10.6879 11.263 10.6599 11.501H9.73587C9.70787 11.263 9.6822 11.0366 9.65887 10.822C9.63553 10.6073 9.61453 10.3996 9.59587 10.199C9.58187 9.99364 9.5702 9.79064 9.56087 9.58997C9.55153 9.38931 9.54687 9.18397 9.54687 8.97397V4.96997H10.8489ZM9.25287 14.203C9.25287 14.077 9.2762 13.958 9.32287 13.846C9.36953 13.734 9.43487 13.636 9.51887 13.552C9.60287 13.468 9.70087 13.4026 9.81287 13.356C9.92487 13.3046 10.0462 13.279 10.1769 13.279C10.3029 13.279 10.4219 13.3046 10.5339 13.356C10.6459 13.4026 10.7439 13.468 10.8279 13.552C10.9119 13.636 10.9772 13.734 11.0239 13.846C11.0752 13.958 11.1009 14.077 11.1009 14.203C11.1009 14.3336 11.0752 14.455 11.0239 14.567C10.9772 14.679 10.9119 14.777 10.8279 14.861C10.7439 14.945 10.6459 15.0103 10.5339 15.057C10.4219 15.1036 10.3029 15.127 10.1769 15.127C10.0462 15.127 9.92487 15.1036 9.81287 15.057C9.70087 15.0103 9.60287 14.945 9.51887 14.861C9.43487 14.777 9.36953 14.679 9.32287 14.567C9.2762 14.455 9.25287 14.3336 9.25287 14.203Z" fill="#fff"/>
                        </svg>
                    </button>
                </div>
                <Link to="chat1" className="link-to-chat"></Link>
            </div>
            <div className="chat">
                <div className="photo">
                    <img src="/real_estate/img/photo4.png" alt="Калинина Татьяна"/>
                    <div className="indicator"></div>
                </div>
                <div className="main">
                    <div className="title-font fs-11 fw-7 mb-1">Калинина Татьяна</div>
                    <div className="fs-09 fw-5 mb-4">Тема: 1-к, квартира 52м2, ЖК “Столичный”</div>
                    <div className="reply">
                        <img src="/real_estate/img/photo.png" alt="Ирина Колесникова"/>
                        <div className="message">Добрый день. Когда можно будет приехать на просмотр? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                        <div className="mark">
                            <img src="/real_estate/img/icons/mark2.svg" alt="отправлено"/>
                            {/* <img src="/real_estate/img/icons/mark3.svg" alt="прочитано"/> */}
                        </div>
                    </div>
                </div>
                <div className="new">
                </div>
                <div className="end">
                    <div className="fs-09 fw-5">1 ноя</div>
                    <button type="button" className="btn-del" title="Удалить">
                        <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.03571 18.1806C2.03571 19.4219 3.08036 20.4375 4.35714 20.4375H13.6429C14.9196 20.4375 15.9643 19.4219 15.9643 18.1806V4.63889H2.03571V18.1806ZM17.125 1.25347H13.0625L11.9018 0.125H6.09821L4.9375 1.25347H0.875V3.51042H17.125V1.25347Z" fill="#BDBDBD"/>
                        </svg>
                    </button>
                    <button type="button" className="btn-notice" title="Пожаловаться">
                        <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.4455 1.8619C9.23354 0.64323 11.0164 0.643231 11.8044 1.8619L19.2732 13.4121C20.1337 14.7429 19.1784 16.4981 17.5937 16.4981H2.65624C1.0715 16.4981 0.116258 14.7429 0.976768 13.4121L8.4455 1.8619Z" className="fill-color"/>
                            <path d="M10.8489 4.96997V8.97397C10.8489 9.18397 10.8442 9.38931 10.8349 9.58997C10.8255 9.79064 10.8115 9.99364 10.7929 10.199C10.7789 10.3996 10.7602 10.6073 10.7369 10.822C10.7135 11.0366 10.6879 11.263 10.6599 11.501H9.73587C9.70787 11.263 9.6822 11.0366 9.65887 10.822C9.63553 10.6073 9.61453 10.3996 9.59587 10.199C9.58187 9.99364 9.5702 9.79064 9.56087 9.58997C9.55153 9.38931 9.54687 9.18397 9.54687 8.97397V4.96997H10.8489ZM9.25287 14.203C9.25287 14.077 9.2762 13.958 9.32287 13.846C9.36953 13.734 9.43487 13.636 9.51887 13.552C9.60287 13.468 9.70087 13.4026 9.81287 13.356C9.92487 13.3046 10.0462 13.279 10.1769 13.279C10.3029 13.279 10.4219 13.3046 10.5339 13.356C10.6459 13.4026 10.7439 13.468 10.8279 13.552C10.9119 13.636 10.9772 13.734 11.0239 13.846C11.0752 13.958 11.1009 14.077 11.1009 14.203C11.1009 14.3336 11.0752 14.455 11.0239 14.567C10.9772 14.679 10.9119 14.777 10.8279 14.861C10.7439 14.945 10.6459 15.0103 10.5339 15.057C10.4219 15.1036 10.3029 15.127 10.1769 15.127C10.0462 15.127 9.92487 15.1036 9.81287 15.057C9.70087 15.0103 9.60287 14.945 9.51887 14.861C9.43487 14.777 9.36953 14.679 9.32287 14.567C9.2762 14.455 9.25287 14.3336 9.25287 14.203Z" fill="#fff"/>
                        </svg>
                    </button>
                </div>
                <Link to="chat1" className="link-to-chat"></Link>
            </div>
            <div className="chat">
                <div className="photo">
                    <img src="/real_estate/img/photo5.png" alt="Баженов Илья"/>
                    <div className="indicator"></div>
                </div>
                <div className="main">
                    <div className="title-font fs-11 fw-7 mb-1">Баженов Илья</div>
                    <div className="fs-09 fw-5 mb-4">Тема: 1-к, квартира 52м2, Четаева 32</div>
                    <div className="reply">
                        <img src="/real_estate/img/photo.png" alt="Ирина Колесникова"/>
                        <div className="message">Звоните мне на рабочий телефоен. Отвечаю с 9 до 19:00.</div>
                        <div className="mark">
                            {/* <img src="/real_estate/img/icons/mark2.svg" alt="отправлено"/> */}
                            <img src="/real_estate/img/icons/mark3.svg" alt="прочитано"/>
                        </div>
                    </div>
                </div>
                <div className="new">
                </div>
                <div className="end">
                    <div className="fs-09 fw-5">19 окт</div>
                    <button type="button" className="btn-del" title="Удалить">
                        <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.03571 18.1806C2.03571 19.4219 3.08036 20.4375 4.35714 20.4375H13.6429C14.9196 20.4375 15.9643 19.4219 15.9643 18.1806V4.63889H2.03571V18.1806ZM17.125 1.25347H13.0625L11.9018 0.125H6.09821L4.9375 1.25347H0.875V3.51042H17.125V1.25347Z" fill="#BDBDBD"/>
                        </svg>
                    </button>
                    <button type="button" className="btn-notice" title="Пожаловаться">
                        <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.4455 1.8619C9.23354 0.64323 11.0164 0.643231 11.8044 1.8619L19.2732 13.4121C20.1337 14.7429 19.1784 16.4981 17.5937 16.4981H2.65624C1.0715 16.4981 0.116258 14.7429 0.976768 13.4121L8.4455 1.8619Z" className="fill-color"/>
                            <path d="M10.8489 4.96997V8.97397C10.8489 9.18397 10.8442 9.38931 10.8349 9.58997C10.8255 9.79064 10.8115 9.99364 10.7929 10.199C10.7789 10.3996 10.7602 10.6073 10.7369 10.822C10.7135 11.0366 10.6879 11.263 10.6599 11.501H9.73587C9.70787 11.263 9.6822 11.0366 9.65887 10.822C9.63553 10.6073 9.61453 10.3996 9.59587 10.199C9.58187 9.99364 9.5702 9.79064 9.56087 9.58997C9.55153 9.38931 9.54687 9.18397 9.54687 8.97397V4.96997H10.8489ZM9.25287 14.203C9.25287 14.077 9.2762 13.958 9.32287 13.846C9.36953 13.734 9.43487 13.636 9.51887 13.552C9.60287 13.468 9.70087 13.4026 9.81287 13.356C9.92487 13.3046 10.0462 13.279 10.1769 13.279C10.3029 13.279 10.4219 13.3046 10.5339 13.356C10.6459 13.4026 10.7439 13.468 10.8279 13.552C10.9119 13.636 10.9772 13.734 11.0239 13.846C11.0752 13.958 11.1009 14.077 11.1009 14.203C11.1009 14.3336 11.0752 14.455 11.0239 14.567C10.9772 14.679 10.9119 14.777 10.8279 14.861C10.7439 14.945 10.6459 15.0103 10.5339 15.057C10.4219 15.1036 10.3029 15.127 10.1769 15.127C10.0462 15.127 9.92487 15.1036 9.81287 15.057C9.70087 15.0103 9.60287 14.945 9.51887 14.861C9.43487 14.777 9.36953 14.679 9.32287 14.567C9.2762 14.455 9.25287 14.3336 9.25287 14.203Z" fill="#fff"/>
                        </svg>
                    </button>
                </div>
                <Link to="chat1" className="link-to-chat"></Link>
            </div>
        </div>
    )
}
