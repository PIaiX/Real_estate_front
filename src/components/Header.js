import React, {useEffect, useState} from 'react';
import {Link, NavLink, useLocation} from 'react-router-dom';
import {getQuestion} from "../API/question";
import CustomModal from "./CustomModal";
import CityContainer from './CityContainer';
import CustomOffcanvas from './CustomOffcanvas';
import useSocket from '../hooks/socket';
import {socketInstance} from '../API/socketInstance';
import {conversationListeners} from '../API/socketConversations';

const Header = () => {
    const {isConnected} = useSocket()
    const [counter, setCounter] = useState(null)
    const [isShowMenu, setIsShowMenu] = useState(false)
    const location = useLocation()
    const pathname = location.pathname

    const initialData = {
        name: '',
        email: '',
        question: ''
    }

    const [data, setData] = useState({...initialData})
    const [isShow, setIsShow] = useState(false)

    const fields = {
        isInValidName: false,
        isInValidEmail: false,
        isInValidQuestions: false,
    }

    const [valid, setValid] = useState(fields)

    const mailSample = Object.values(data).find(i => i?.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/))

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isInValidName = data?.name === undefined || data.name?.length < 1 || data.name?.length > 55
        const isInValidEmail = data?.email === undefined || mailSample === undefined
        const {question} = data;
        const isInValidQuestions = question?.length === undefined || question?.length < 5 || question?.length > 1024

        if (isInValidName) {
            setValid({...valid, isInValidName: true})
        } else if (isInValidEmail) {
            setValid({...valid, isInValidEmail: true})
        } else if (isInValidQuestions) {
            setValid({...valid, isInValidQuestions: true})
        } else {
            const formData = new FormData();
            const req = {...data}
            for (const key in req) {
                formData.append(key, req[key])
            }
            const result = await getQuestion(formData);
            if (result) {
                setIsShow(isShow => !isShow)
                setData(initialData)
                e.target.closest("form").reset()
                setTimeout(() => {
                    setIsShow(isShow => !isShow)
                }, 500)
            }
        }
    }

    const resetFieldVal = (newState, field) => {
        setValid({...valid, [field]: false})
    }

    const closeConvas = () => {
        setIsShowMenu(prevIsShowMenu => !prevIsShowMenu)
    }

    useEffect(() => {
        if (isConnected) {
            socketInstance.on(conversationListeners.countNewMessages, count => setCounter(+count))
        }
    }, [isConnected])

    return (
        <>
            <header>
                <div className="container">
                    <Link to="/" className="order-1 me-lg-auto">
                        <img src="/img/Лого.png" alt="Название сайта" className="logo"/>
                    </Link>
                    <nav className="d-none d-lg-flex order-2">
                        <NavLink to="/" className={`${(pathname === '/') ? 'active' : ''}`}>Главная</NavLink>
                        <NavLink to="/services">Услуги</NavLink>
                        <NavLink to="/hypothec">Ипотека</NavLink>
                        <a href="" role="button" data-bs-toggle="modal" data-bs-target="#ask">Задать вопрос</a>
                    </nav>
                    <div className="d-none d-md-flex order-4 order-lg-3">
                        <Link to="/personal-account/my-messages" className="counter ms-4">
                            <img src="/img/icons/email.svg" alt="email"/>
                            {(counter > 0) && <span>{counter}</span>}
                        </Link>
                        <Link to="/personal-account/favorites/page/1"
                              className="ms-3 ms-xl-4">
                            <img src="/img/icons/favorite.svg" alt="favorite"/>
                        </Link>
                        <Link to="/personal-account" className="ms-3 ms-xl-4">
                            <img src="/img/icons/user.svg" alt="аккаунт"/>
                        </Link>
                    </div>
                    <NavLink
                        to="/advertise"
                        className="ms-md-4 btn btn-1 text-uppercase p-2 order-3 order-lg-4"
                        style={{whiteSpace: 'nowrap'}}
                    >
                        Подать объявление
                    </NavLink>
                    <CityContainer/>
                    <button
                        type="button"
                        className="d-block d-lg-none order-5"
                        onClick={() => setIsShowMenu(prevIsShowMenu => !prevIsShowMenu)}
                    >
                        <img src="/img/icons/menu.svg" alt="меню"/>
                    </button>
                </div>
            </header>

            <CustomOffcanvas
                isShow={isShowMenu}
                setIsShow={setIsShowMenu}
                className='offcanvas-menu'
                placement='end'
                scroll={true}
                backdrop={true}
                closeButton={true}
            >
                <nav>
                    <ul className='offcanvas-menu__list'>
                        <li>
                            <NavLink
                                to="/"
                                className={`${(pathname === '/') ? 'active' : ''}`}
                                onClick={() => {
                                    closeConvas()
                                }}
                            >
                                Главная
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/services"
                                className={`${(pathname === '/services') ? 'active' : ''}`}
                                onClick={() => {
                                    closeConvas()
                                }}
                            >
                                Услуги
                            </NavLink>
                        </li>
                        <li>
                            <a
                                href=""
                                role="button"
                                data-bs-toggle="modal"
                                data-bs-target="#ask"
                                onClick={() => closeConvas()}
                            >
                                Задать вопрос
                            </a>
                        </li>
                        <li>
                            <NavLink
                                to="/personal-account/favorites"
                                className={`${(pathname === '/personal-account/favorites') ? 'active' : ''}`}
                                onClick={() => {
                                    closeConvas()
                                }}
                            >
                                Избранное
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/hypothec"
                                className={`${(pathname === '/hypothec') ? 'active' : ''}`}
                                onClick={() => {
                                    closeConvas()
                                }}
                            >
                                Ипотека
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/articles/page/1"
                                className={`${(pathname === '/articles/page/1') ? 'active' : ''}`}
                                onClick={() => {
                                    closeConvas()
                                }}
                            >
                                Статьи
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </CustomOffcanvas>
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
                                        <img src="/img/photo.png" alt="Колесникова Ирина"/>
                                        <div className="indicator online"/>
                                    </div>
                                    <div>
                                        <div className='fs-11 fw-5'>Вам ответит администратор</div>
                                        <div className='fs-11 fw-5 mt-1'>Колесникова Ирина</div>
                                        <div className="gray-2 fs-09 mt-2">Сейчас онлайн</div>
                                    </div>
                                </div>
                                <div className='row align-items-center fs-11 mt-3'>
                                    <div className='col-sm-3 mb-1 mb-sm-3'>
                                        <label className='gray-3' htmlFor="name"
                                               style={{color: valid.isInValidName ? '#DA1E2A' : ''}}>Ваше имя:</label>
                                    </div>
                                    <div className='col-sm-9 mb-3'>
                                        <input
                                            style={{borderColor: valid.isInValidName ? '#DA1E2A' : ''}}
                                            type="text"
                                            placeholder="Имя"
                                            value={data.name}
                                            id="name"
                                            onChange={(e) => {
                                                setData({...data, name: e.target.value})
                                                resetFieldVal(e, 'isInValidName')
                                            }}
                                        />
                                    </div>
                                    <div className='col-sm-3 mb-1 mb-sm-3'>
                                        <label className='gray-3' htmlFor="email"
                                               style={{color: valid.isInValidEmail ? '#DA1E2A' : ''}}>Ваш Email:</label>
                                    </div>
                                    <div className='col-sm-9 mb-3'>
                                        <input
                                            style={{borderColor: valid.isInValidEmail ? '#DA1E2A' : ''}}
                                            type="text"
                                            placeholder="Email"
                                            value={data.email}
                                            id="email"
                                            onChange={(e) => {
                                                setData({...data, email: e.target.value})
                                                resetFieldVal(e, 'isInValidEmail')
                                            }}
                                        />
                                    </div>
                                    <div className='col-sm-3 mb-1 mb-sm-3'>
                                        <label className='gray-3' htmlFor="question"
                                               style={{color: valid.isInValidQuestions ? '#DA1E2A' : ''}}>Ваш
                                            вопрос:</label>
                                    </div>
                                    <div className='col-sm-9 mb-sm-3'>
                                        <input
                                            style={{borderColor: valid.isInValidQuestions ? '#DA1E2A' : ''}}
                                            type="text"
                                            placeholder="Вопрос"
                                            value={data.question}
                                            id="question"
                                            onChange={(e) => {
                                                setData({...data, question: e.target.value})
                                                resetFieldVal(e, 'isInValidQuestions')
                                            }}
                                        />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-1 mx-auto fs-12 mt-4"
                                    onClick={handleSubmit}
                                >
                                    ОТПРАВИТЬ
                                </button>
                            </form>
                            <CustomModal
                                isShow={isShow}
                                setIsShow={setIsShow}
                                closeButton={false}
                                centre={true}
                            >
                                <p>Вопрос отправлен, ждите ответа.</p>
                            </CustomModal>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
