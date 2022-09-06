import React, {useEffect, useRef, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import useSocket from '../../hooks/socket';
import {
    emitCreateMessage,
    emitGetConversation,
    emitPaginateMessages,
    emitViewedMessage,
    onMessageCreate
} from '../../API/socketConversations';
import {useSelector} from 'react-redux';
import Loader from '../../components/Loader';
import {checkPhotoPath} from '../../helpers/photo';
import {getTimeUI} from '../../helpers/formatingDate';
import {HandySvg} from 'handy-svg';
import check from '../../img/icons/check.svg'
import useWindowDimensions from "../../hooks/useWindowDimensions";
import {Dropdown} from 'react-bootstrap';

export default function ChatPage() {
    const {width} = useWindowDimensions()
    const [isMobile, setIsMobile] = useState(false)
    const initialMessagesLimit = 5
    const [page, setPage] = useState(1)
    const user = useSelector(state => state?.currentUser)
    const {isConnected} = useSocket()
    const {conversationId} = useParams()
    const [messageInput, setMessageInput] = useState('')
    const [conversation, setConversation] = useState({
        isLoading: false,
        error: null,
        item: null
    })
    const [messages, setMessages] = useState({
        isLoading: false,
        error: null,
        meta: null,
        items: []
    })
    const [isFetching, setIsFetching] = useState(false)
    const [editableMessageId, setEditableMessageId] = useState(null)
    const [activeMessageOnMobile, setActiveMessageOnMobile] = useState(null)


    const MobileItem = ({children, id}) => {
        const [timeoutId, setTimeoutId] = useState(null)

        const touchStartHandler = () => {
            const tId = setTimeout(() => setActiveMessageOnMobile(id), 500)
            setTimeoutId(tId)
        }

        // ! React Bootstrap custom toggle
        const ToggleButton = React.forwardRef(({ children }, ref) => {

            return (
                <div
                    className={`
                        main main_mobile
                        ${(activeMessageOnMobile === id) ? 'active' : ''}
                        ${activeMessageOnMobile?.length && activeMessageOnMobile?.includes(id) ? 'selected' : ''}
                    `}
                    ref={ref}
                    onTouchStart={() => !activeMessageOnMobile && touchStartHandler()}
                    onTouchEnd={() => !activeMessageOnMobile && clearTimeout(timeoutId)}
                >
                    <div className="text">
                        {children}
                    </div>
                </div>
            )
        })

        return (
            <Dropdown>
                <Dropdown.Toggle as={ToggleButton} className="main main_mobile">
                    {children}
                </Dropdown.Toggle>

                <Dropdown.Menu show={activeMessageOnMobile === id}>
                    <Dropdown.Item>
                        копировать текст
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                        Изменить
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                        Удалить
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                        Выбрать
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )
    }

    const emitPaginateMessagesRequest = async (page, limit) => {
        return await emitPaginateMessages(conversationId, {page, limit, orderBy: 'desc'})
            .then(result => result && setMessages(prev => ({
                isLoading: true,
                meta: result?.meta,
                items: [...messages.items, ...result.data]
            })))
            .catch(error => setMessages(prev => ({isLoading: true, error})))
    }

    const onSendMessage = () => {
        emitCreateMessage({conversationId, text: messageInput})
            .then(result => {
                setMessageInput('')
                result && setMessages(prev => ({...prev, items: [result, ...prev.items]}))
            })
            // ! dispatch error alert or mark message as rejected
            .catch(error => console.log(error))
    }

    const onScroll = (event) => {
        const isScrollOnTop = (event.target.scrollTop * -1) + event.target.offsetHeight >= event.target.scrollHeight

        if (!isFetching && isScrollOnTop && (messages?.meta?.total > messages?.items?.length)) {
            setIsFetching(true)
        }
    }

    const fetchMessages = (delay) => {
        if ((messages?.meta?.total > messages?.items?.length)) {
            setTimeout(() => {
                emitPaginateMessagesRequest(page + 1, initialMessagesLimit)
                    .then(() => {
                        setPage(prev => prev + 1)
                        setIsFetching(false)
                    })
            }, delay);
        }
    }

    //  ! all events which does when set connection
    useEffect(() => {
        if (isConnected) {
            emitViewedMessage(conversationId, user?.id)
                .then(e => console.log('VIEWED', e))

            emitGetConversation(conversationId)
                .then(result => setConversation(prev => ({isLoading: true, item: result})))
                .catch(error => setConversation(prev => ({isLoading: true, error})))

            emitPaginateMessagesRequest(page, initialMessagesLimit)
        }
    }, [isConnected, conversationId, user])

    // ! listen creating of message
    useEffect(() => {
        if (messages?.items?.length) {
            onMessageCreate()
                // .then(() => emitPaginateMessagesRequest(1))
                .catch(error => console.log(error))
        }
    }, [messages])

    // ! fetch messages by lazy loading
    useEffect(() => isFetching && fetchMessages(1000), [isFetching])

    // ! switch mode
    useEffect(() => {
        (width < 991)
            ? setIsMobile(true)
            : setIsMobile(false)
    }, [width])

    // useEffect(() => {
    //     console.log(activeMessagesOnMobile)
    // }, [activeMessagesOnMobile])

    useEffect(() => {
        console.log(messages)
    }, [messages])

    useEffect(() => {
        console.log(conversation)
    }, [conversation])

    useEffect(() => {
        console.log('ac', activeMessageOnMobile)
    }, [activeMessageOnMobile])


    return (
        <div className="messages">
            <div
                className={`chat-top px-2 px-md-4 px-xxl-5 mb-md-4 mb-xxl-5 ${activeMessageOnMobile?.length ? 'active' : ''}`}>
                <Link to="/personal-account/my-messages" className="d-flex align-items-center me-2">
                    <svg width="12" height="23" viewBox="0 0 12 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="-1" x2="14.5309" y2="-1"
                              transform="matrix(-0.660679 -0.750669 0.709114 -0.705094 11.6006 21)" stroke="#C59C7E"
                              strokeWidth="2"/>
                        <line y1="-1" x2="14.5309" y2="-1"
                              transform="matrix(-0.660679 0.750669 0.709114 0.705094 11.6006 2)" stroke="#C59C7E"
                              strokeWidth="2"/>
                    </svg>
                    <span className="fs-09 ms-1 ms-md-3">Назад</span>
                </Link>
                <div className="d-flex align-items-center">
                    <div className="photo d-block d-lg-none me-1 me-sm-3">
                        <img src={checkPhotoPath(conversation?.item?.user?.avatar)} alt="Шевцов Андрей"/>
                        {/*<div className="indicator online" />*/}
                    </div>
                    <div className="text-lg-center">
                        <h4 className="text-lg-center color-1 mb-0">{conversation?.item?.user?.fullName || 'Не указано'}</h4>
                        <div className="fs-09 fw-5">Тема: 1-к, квартира 52м2, ЖК “Столичный”</div>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    {/*<span className="fw-3 fs-09 d-none d-xl-inline">Сейчас онлайн</span>*/}
                    <div className="btn-group ms-sm-4">
                        <button type="button" className="dropdown-toggle" data-bs-toggle="dropdown"
                                aria-expanded="false">
                            <svg viewBox="0 0 6 27" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="3" cy="3" r="3"/>
                                <circle cx="3" cy="14" r="3"/>
                                <circle cx="3" cy="24" r="3"/>
                            </svg>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end py-2 fs-11">
                            <li>
                                <button className="dropdown-item" type="button">Удалить диалог</button>
                            </li>
                            <li>
                                <button className="dropdown-item" type="button">Заблокировать</button>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* --------------- MOBILE ACTIONS --------------- */}
                <div className={`chat-top__actions ${activeMessageOnMobile?.length ? 'show' : ''}`}>
                    <button
                        className="close"
                        type="button"
                        onClick={() => setActiveMessageOnMobile([])}
                    >
                        Закрыть
                    </button>
                    <div className="btns">
                        <button type="button">
                            <i className="bi bi-trash-fill"/>
                        </button>
                        {(activeMessageOnMobile?.length <= 1) && (
                            <button
                                type="button"
                                // onClick={() => setEditableMessageId(item?.id)}
                            >
                                <i className="bi bi-pencil-fill"/>
                            </button>
                        )}
                    </div>
                </div>
                {/* --------------------------------------------- */}
            </div>
            {messages.isLoading
                ? <>
                    <div
                        className="messages-list"
                        onScroll={onScroll}
                    >
                        {messages?.items?.length
                            ? messages.items.map((item, index) => (
                                <div
                                    key={index}
                                    className={`message ${+user?.id === +item?.userId ? 'my' : ''}`}
                                >
                                    <div className="photo">
                                        <img
                                            src={(+user?.id === +item?.userId)
                                                ? checkPhotoPath(user?.avatar)
                                                : checkPhotoPath(conversation?.item?.user?.avatar)
                                            }
                                            alt="Колесникова Ирина"/>
                                        {/*<div className="indicator online" />*/}
                                    </div>
                                    {isMobile
                                        ? (
                                            <MobileItem
                                                id={item?.id}
                                            >
                                                {item?.text}
                                            </MobileItem>
                                        )
                                        : (
                                            <div className="main">
                                                <div className="name">
                                                    {(+user?.id === +item?.userId)
                                                        ? user?.fullName
                                                        : conversation?.item?.user?.fullName
                                                    }
                                                </div>
                                                <div className="text">
                                                    <p>{item?.text}</p>
                                                </div>
                                            </div>
                                        )
                                    }
                                    <div className="mark">
                                        {(+user?.id === +item?.userId) && (
                                            item?.isViewed
                                                ? <i className="bi bi-check2-all" title="прочитано"/>
                                                : <i className="bi bi-check2" title="Отправлено"/>
                                        )}
                                    </div>
                                    <div className="date">
                                        {getTimeUI(item?.createdAt, true)}
                                    </div>
                                    <div className="btns">
                                        <button type="button">
                                            <i className="bi bi-trash-fill"/>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setEditableMessageId(item?.id)}
                                        >
                                            <i className="bi bi-pencil-fill"/>
                                        </button>
                                    </div>
                                </div>
                            ))
                            : <h6 className='m-auto p-5 text-center'>Сообщений нет</h6>
                        }
                        {isFetching && (
                            <div className="messages-list__loader">
                                <Loader color="#146492"/>
                            </div>
                        )}
                    </div>
                    <form
                        className="send-message p-2 p-sm-3 p-md-4 p-xl-5"
                        onSubmit={e => e.preventDefault()}
                    >
                        {/*<InputFile multiple={false}/>*/}
                        <textarea
                            placeholder="Введите сообщение"
                            className="ms-2 ms-md-4"
                            value={messageInput}
                            onChange={e => setMessageInput(e.target.value)}
                        />
                        {editableMessageId
                            ? (
                                <button
                                    type="submit"
                                    className="send-msg ms-2 ms-md-4"
                                    // onClick={() => onSendMessage()}
                                    // disabled={!messageInput?.length}
                                >
                                    <HandySvg
                                        src={check}
                                        width="24"
                                        height="24"
                                        className="check-icon"
                                    />
                                </button>
                            )
                            : (
                                <button
                                    type="submit"
                                    className="send-msg ms-2 ms-md-4"
                                    onClick={() => onSendMessage()}
                                    disabled={!messageInput?.length}
                                >
                                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M4.09369 2.50043C3.89491 2.40101 3.67221 2.35937 3.45092 2.38025C3.22964 2.40114 3.01866 2.4837 2.84199 2.61856C2.66531 2.75342 2.53003 2.93516 2.45153 3.1431C2.37303 3.35104 2.35446 3.57684 2.39794 3.79481L5.73007 15.3136C5.7922 15.5282 5.91364 15.721 6.08043 15.8697C6.24722 16.0184 6.4526 16.1171 6.67294 16.1543L20.1867 18.4177C20.8232 18.5436 20.8232 19.4556 20.1867 19.5814L6.67294 21.8448C6.4526 21.882 6.24722 21.9807 6.08043 22.1294C5.91364 22.2781 5.7922 22.4709 5.73007 22.6856L2.39794 34.2043C2.35446 34.4223 2.37303 34.6481 2.45153 34.856C2.53003 35.064 2.66531 35.2457 2.84199 35.3806C3.01866 35.5154 3.22964 35.598 3.45092 35.6189C3.67221 35.6397 3.89491 35.5981 4.09369 35.4987L34.9687 20.0612C35.1657 19.9625 35.3313 19.8109 35.4471 19.6234C35.5628 19.4359 35.6241 19.2199 35.6241 18.9996C35.6241 18.7792 35.5628 18.5632 35.4471 18.3757C35.3313 18.1882 35.1657 18.0367 34.9687 17.9379L4.09369 2.50043Z"/>
                                    </svg>
                                </button>
                            )
                        }
                    </form>
                </>
                : <div className='p-5 w-100 d-flex justify-content-center'><Loader color='#146492'/></div>
            }
        </div>
    )
}
