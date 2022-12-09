import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {useSelector} from 'react-redux';

const Footer = () => {
    const conversationCount = useSelector(state => state?.conversationCount)

    return (
        <footer>
            <div className='container d-none d-md-block'>
                <div className='row row-cols-4'>
                    <div className='col-4 col-xl-3'>
                        <h5>КАРТА САЙТА</h5>
                        <hr/>
                        <nav className='desktop'>
                            <ul>
                                <li><Link to='/'>ГЛАВНАЯ </Link></li>
                                <li><Link to='/services'>УСЛУГИ </Link></li>
                                <li><Link to='/hypothec'>ИПОТЕКА </Link></li>
                                <li><Link to='/advertise'>ПОДАТЬ ОБЪЯВЛЕНИЕ</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className='col-4 col-xl-3'>
                        <h5>ПРОФИЛЬ</h5>
                        <hr/>
                        <nav className='desktop'>
                            <ul>
                                <li><Link to='/personal-account'>ЛИЧНЫЙ КАБИНЕТ </Link></li>
                                <li><Link to='/personal-account/my-messages'>СООБЩЕНИЯ</Link></li>
                                <li><Link to='/personal-account/favorites'>ИЗБРАННОЕ</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className='col-4 col-xl-3'>
                        <h5>МЫ В СОЦИАЛЬНЫХ СЕТЯХ</h5>
                        <hr/>
                        <nav className='desktop'>
                            <ul>
                                <li><a href='/'>ВКОНТАКТЕ</a></li>
                                <li><a href='/'>ОДНОКЛАССНИКИ</a></li>
                                <li><a href='/'>RUTUBE</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className='col-12 col-xl-3 mt-4 mt-xl-0'>
                        <div className='d-flex flex-row flex-xl-column align-items-center justify-content-center'>
                            <img src='/img/icons/biglogo.svg' className='logo'/>
                            <div className='text-center fs-08 fw-5'>© ВСЕ ПРАВА ЗАЩИЩЕНЫ · DAKVARTIRA · 2022</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container h-100 d-block d-md-none">
                <nav className='mobile'>
                    <ul>
                        <li>
                            <NavLink to="/">
                                <svg width="21" height="19" viewBox="0 0 21 19" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.4153 10.4558H18.4925V17.3558C18.4925 17.8675 18.2694 18.5058 17.3425 18.5058H12.7425V11.6058H8.14249V18.5058H3.54249C2.61559 18.5058 2.39249 17.8675 2.39249 17.3558V10.4558H0.469692C-0.218008 10.4558 -0.0708078 10.0832 0.400692 9.5956L9.62829 0.3588C9.85254 0.1265 10.1469 0.0115 10.4425 0C10.738 0.0115 11.0324 0.12535 11.2567 0.3588L20.4831 9.59445C20.9558 10.0832 21.103 10.4558 20.4153 10.4558Z" fill="#C59C7E"/>
                                </svg>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/catalog-list">
                                <svg className="type-2" width="22" height="18" viewBox="0 0 22 18" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 9H20"/>
                                    <path d="M2 9H3"/>
                                    <path d="M8 2H20"/>
                                    <path d="M2 2H3"/>
                                    <path d="M8 16H20"/>
                                    <path d="M2 16H3"/>
                                </svg>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/personal-account/my-messages" className="counter">
                                <svg width="20" height="17" viewBox="0 0 20 17" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.2667 4.3173L9.99999 9.54548L1.73332 4.3173V2.22604L9.99999 7.45421L18.2667 2.22604V4.3173ZM18.2667 0.134766H1.73332C0.586323 0.134766 -0.333344 1.06538 -0.333344 2.22604V14.7737C-0.333344 15.3283 -0.115606 15.8602 0.271969 16.2524C0.659544 16.6446 1.18521 16.8649 1.73332 16.8649H18.2667C18.8148 16.8649 19.3404 16.6446 19.728 16.2524C20.1156 15.8602 20.3333 15.3283 20.3333 14.7737V2.22604C20.3333 1.6714 20.1156 1.13947 19.728 0.747284C19.3404 0.355095 18.8148 0.134766 18.2667 0.134766V0.134766Z"/>
                                </svg>
                                {(conversationCount > 0) && <span>{conversationCount}</span>}
                            </NavLink>
                        </li>
                        <li>
                        <NavLink to="/personal-account">
                            <svg width="17" height="17" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.5 8.5C7.32014 8.5 6.31476 8.08577 5.48387 7.25731C4.65298 6.42885 4.23754 5.42641 4.23754 4.25C4.23754 3.07359 4.65298 2.07115 5.48387 1.24269C6.31476 0.41423 7.32014 0 8.5 0C9.67986 0 10.6852 0.41423 11.5161 1.24269C12.347 2.07115 12.7625 3.07359 12.7625 4.25C12.7625 5.42641 12.347 6.42885 11.5161 7.25731C10.6852 8.08577 9.67986 8.5 8.5 8.5ZM8.5 10.6374C9.54692 10.6374 10.7019 10.7865 11.9648 11.0848C13.2278 11.383 14.3827 11.8718 15.4296 12.5512C16.4765 13.2305 17 14.001 17 14.8626V17H0V14.8626C0 14.001 0.52346 13.2305 1.57038 12.5512C2.6173 11.8718 3.77224 11.383 5.03519 11.0848C6.29814 10.7865 7.45308 10.6374 8.5 10.6374Z"/>
                            </svg>
                        </NavLink>
                    </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer
