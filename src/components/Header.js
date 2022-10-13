import React, {useEffect, useState} from 'react';
import {Link, NavLink, useLocation} from 'react-router-dom';
import {getQuestion} from "../API/question";
import CustomModal from "./CustomModal";
import CityContainer from './CityContainer';
import CustomOffcanvas from './CustomOffcanvas';
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import alertActions from "../store/actions/alert"
import conversationCountActions from "../store/actions/conversationsCount"
import useSocket from '../hooks/socket';
import {socketInstance} from '../API/socketInstance';
import {conversationListeners} from '../API/socketConversations';

const Header = () => {
    const {isConnected} = useSocket()
    const conversationCount = useSelector(state => state?.conversationCount)
    const [isShowMenu, setIsShowMenu] = useState(false)
    const location = useLocation()
    const pathname = location.pathname
    const dispatch = useDispatch()
    const {setAlert} = bindActionCreators(alertActions, dispatch)
    const {setConversationCount} = bindActionCreators(conversationCountActions, dispatch)
    const initialData = {
        name: '',
        email: '',
        question: ''
    }
    const [data, setData] = useState({...initialData})
    const [isShowQuestionModal, setIsShowQuestionModal] = useState(false)
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
            getQuestion(formData)
                .then(() => {
                    setData(initialData)
                    setIsShowMenu(false)
                    setIsShowQuestionModal(false)
                    setAlert('success', true, 'Вопрос успешно отправлен нашим консультантам, ждите ответа')
                })
                .catch(() => {
                    setAlert('danger', true, 'Произошла ошибка сервера')
                })
        }
    }

    const resetFieldVal = (newState, field) => {
        setValid({...valid, [field]: false})
    }

    const closeCanvas = () => {
        setIsShowMenu(prevIsShowMenu => !prevIsShowMenu)
    }

    useEffect(() => {
        if (isConnected) {
            socketInstance.on(conversationListeners.countNewMessages, count => setConversationCount(+count))
        }
    }, [isConnected])

    return (
        <>
            <header>
                <div className="container">
                    <Link to="/" className="order-1 me-lg-auto">
                        <img src={window.innerWidth < 576 ? '/img/icons/miniLogo.svg' : '/img/icons/logo.svg'} alt="Название сайта" className="logo"/>
                    </Link>
                    <nav className="d-none d-lg-flex order-2">
                        <NavLink to="/" className={`${(pathname === '/') ? 'active' : ''}`}>Главная</NavLink>
                        <NavLink to="/services">Услуги</NavLink>
                        <NavLink to="/hypothec">Ипотека</NavLink>
                        <button
                            className='button-header-question'
                            onClick={() => setIsShowQuestionModal(true)}
                            style={{whiteSpace: 'nowrap'}}
                        >
                            Задать вопрос
                        </button>
                    </nav>
                    <div className="d-none d-md-flex order-4 order-lg-3">
                        <Link to="/personal-account/my-messages" className="counter ms-4">
                            <img src="/img/icons/email.svg" alt="email"/>
                            {(conversationCount > 0) && <span>{conversationCount}</span>}
                        </Link>
                        <Link to="/personal-account/favorites"
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
                                    closeCanvas()
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
                                    closeCanvas()
                                }}
                            >
                                Услуги
                            </NavLink>
                        </li>
                        <li>
                            <button
                                className='button-header-question__offcanvas'
                                onClick={() => {
                                    closeCanvas()
                                    setIsShowQuestionModal(true)
                                }}
                            >
                                Задать вопрос
                            </button>
                        </li>
                        <li>
                            <NavLink
                                to="/personal-account/favorites"
                                className={`${(pathname === '/personal-account/favorites') ? 'active' : ''}`}
                                onClick={() => {
                                    closeCanvas()
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
                                    closeCanvas()
                                }}
                            >
                                Ипотека
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/articles"
                                className={`${(pathname === '/articles') ? 'active' : ''}`}
                                onClick={() => {
                                    closeCanvas()
                                }}
                            >
                                Статьи
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </CustomOffcanvas>

            <CustomModal
                isShow={isShowQuestionModal}
                setIsShow={setIsShowQuestionModal}
                closeButton={true}
                size='lg'
            >
                <div>
                    <h3 className='text-center'>Задать вопрос</h3>
                    <form className="message-form">
                        <div className="text-center">
                            <div>
                                <div className='fs-11 fw-5'>Вам ответит администратор</div>
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
                                       style={{color: valid.isInValidQuestions ? '#DA1E2A' : ''}}>
                                    Ваш вопрос:
                                </label>
                                <span className='fs-08 gray-3 mt-2'>От 5 символов</span>
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
                </div>
            </CustomModal>
        </>
    )
}

export default Header
