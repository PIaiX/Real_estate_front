import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import useSocket from '../../hooks/socket';
import {
    emitCreateMessage,
    emitGetConversation,
    emitPaginateMessage,
    onMessageCreate
} from '../../API/socketConversations';
import {useSelector} from 'react-redux';
import Loader from '../../components/Loader';

export default function ChatPage() {
    const userId = useSelector(state => state?.currentUser?.id)
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

    useEffect(() => {
        if (isConnected) {

            emitGetConversation(conversationId)
                .then(result => setConversation(prev => ({isLoading: true, item: result})))
                .catch(error => setConversation(prev => ({isLoading: true, error})))

            emitPaginateMessage(conversationId, {page: 1})
                .then(result => setMessages(prev => ({isLoading: true, meta: result?.meta, items: result?.data})))
                .catch(error => setMessages(prev => ({isLoading: true, error})))
        }
    }, [isConnected])

    useEffect(() => {
        if (messages?.items?.length) {
            onMessageCreate()
                .then(result => console.log(result))
                .catch(error => console.log(error))
        }
    }, [messages])

    const createMessage = () => {
        emitCreateMessage({conversationId, text: messageInput})
            .then(() => setMessageInput(''))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        console.log(messages)
    }, [messages])
    //
    // useEffect(() => {
    //     console.log(conversation)
    // }, [conversation])

    return (
        messages.isLoading
            ? <div>
                <div className="chat-top px-2 px-md-4 px-xxl-5 mb-md-4 mb-xxl-5">
                    <Link to="/personal-account/my-messages" className="d-flex align-items-center me-2">
                        <svg width="12" height="23" viewBox="0 0 12 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="-1" x2="14.5309" y2="-1" transform="matrix(-0.660679 -0.750669 0.709114 -0.705094 11.6006 21)" stroke="#C59C7E" strokeWidth="2"/>
                            <line y1="-1" x2="14.5309" y2="-1" transform="matrix(-0.660679 0.750669 0.709114 0.705094 11.6006 2)" stroke="#C59C7E" strokeWidth="2"/>
                        </svg>
                        <span className="fs-09 ms-1 ms-md-3">Назад</span>
                    </Link>
                    <div className="d-flex align-items-center">
                        <div className="photo d-block d-lg-none me-1 me-sm-3">
                            <img src="/img/photo2.png" alt="Шевцов Андрей"/>
                            {/*<div className="indicator online" />*/}
                        </div>
                        <div className="text-lg-center">
                            <h4 className="text-lg-center color-1 mb-0">Шевцов Андрей</h4>
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
                </div>
                <div className="messages-list">
                    {
                        messages?.items?.length
                            ? messages.items.map(item => (
                                <div className={`message ${userId === item?.userId ? 'my' : ''}`} key={item?.id}>
                                    <div className="photo">
                                        <img src="/img/photo.png" alt="Колесникова Ирина"/>
                                        {/*<div className="indicator online" />*/}
                                    </div>
                                    <div className="main">
                                        <div className="name">Колесникова Ирина</div>
                                        <div className="text">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor et diam,
                                                sed.
                                                Ligula luctus mus leo, justo, eu lectus iaculis ut. Sed convallis mauris sem
                                                neque
                                                pharetra. Donec iaculis turpis amet pulvinar scelerisque porta.</p>
                                        </div>
                                    </div>
                                    <div className="mark">
                                        {(userId === item?.userId) && (
                                            item?.isViewed
                                                ? <i className="bi bi-check2-all" title="прочитано"/>
                                                : <i className="bi bi-check2" title="Отправлено"/>
                                        )}
                                    </div>
                                    <div className="date">19:30</div>
                                    <div className="btns">
                                        <button type="button">
                                            <i className="bi bi-trash-fill"></i>
                                        </button>
                                        <button type="button">
                                            <i className="bi bi-pencil-fill"></i>
                                        </button>
                                    </div>
                                </div>
                            ))
                            : <h6 className='m-auto p-5 text-center'>Сообщений нет</h6>
                    }
                </div>
                <form
                    className="send-message p-2 p-sm-3 p-md-4 p-xl-5"
                    onSubmit={e => e.preventDefault()}
                >
                    {/*<InputFile multiple={false}/>*/}
                    <textarea
                        placeholder="Введите сообщение"
                        rows="2"
                        className="ms-2 ms-md-4"
                        value={messageInput}
                        onChange={e => setMessageInput(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="ms-2 ms-md-4"
                        onClick={() => createMessage()}
                    >
                        <img src="/img/icons/send.svg" alt="отправить"/>
                    </button>
                </form>
            </div>
            : <div className='p-5 w-100 d-flex justify-content-center'><Loader color='#146492'/></div>
    )
}
