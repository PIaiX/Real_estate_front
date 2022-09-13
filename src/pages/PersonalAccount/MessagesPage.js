import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import useSocket from '../../hooks/socket';
import {emitGetConversation, emitViewedMessage, messageListeners} from '../../API/socketConversations';
import {useSelector} from 'react-redux';
import {checkPhotoPath} from '../../helpers/photo';
import Messages from '../../components/Messages';
import {socketInstance} from '../../API/socketInstance';

export default function MessagesPage() {
    const userId = useSelector(state => state?.currentUser?.id)
    const {conversationId} = useParams()
    const {isConnected} = useSocket()

    const [conversation, setConversation] = useState({
        isLoading: false,
        error: null,
        item: null
    })


    //  ! all events which does when set connection
    useEffect(() => {
        if (isConnected) {
            emitViewedMessage(+conversationId, userId)
                .then(e => console.log('VIEWED', e))

            emitGetConversation(+conversationId)
                .then(result => setConversation(prev => ({isLoading: true, item: result})))
                .catch(error => setConversation(prev => ({isLoading: true, error})))
        }
    }, [isConnected, conversationId, userId])


    return (
        <div className="messages">
            <div
                // className={`chat-top px-2 px-md-4 px-xxl-5 mb-md-4 mb-xxl-5 ${selectedMessagesOnMobile?.length ? 'active' : ''}`}>
                className="chat-top px-2 px-md-4 px-xxl-5">
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
            </div>
            <Messages
                conversationId={+conversationId}
                conversationUser={conversation?.item?.user}
                isConnected={isConnected}
            />
        </div>
    )
}
