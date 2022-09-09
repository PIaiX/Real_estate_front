import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {emitPaginateConversation} from '../../API/socketConversations';
import useSocket from '../../hooks/socket';
import PaginationCustom from '../../components/PaginationCustom';
import Loader from '../../components/Loader';
import {useSelector} from 'react-redux';
import {checkPhotoPath} from '../../helpers/photo';
import {checkDateForConversation} from '../../helpers/formatingDate';

export default function UserMessages() {
    const user = useSelector(state => state?.currentUser)
    const {isConnected} = useSocket()
    const [conversations, setConversations] = useState({
        isLoading: false,
        error: null,
        meta: null,
        items: []
    })



    useEffect(() => {
        console.log(isConnected)

        if (isConnected) {

            emitPaginateConversation({page: 1})
                .then(result => setConversations(prev => ({isLoading: true, meta: result?.meta, items: result?.data})))
                .catch(error => setConversations(prev => ({isLoading: true, error})))
        }
    }, [isConnected])

    useEffect(() => {
        console.log(conversations)
    }, [conversations])

    return (
        <div>
            <nav className="d-block d-lg-none mt-3 mb-3 mb-sm-5" aria-label="breadcrumb">
                <Link to="/personal-account" className="gray-3">&#10094; Назад</Link>
            </nav>
            <h4 className="text-center color-1 mb-3 mb-sm-4 mb-xl-5">Сообщения</h4>
            <div className="conversations">
                {
                    conversations.isLoading
                        ? conversations?.items?.length
                            ? conversations.items.map(item => (
                                <div className="chat" key={item?.id}>
                                    <div className="photo">
                                        <img src="/img/photo5.png" alt="Баженов Илья"/>
                                        {/*<div className="indicator" />*/}
                                    </div>
                                    <div className="main">
                                        <div className="title-font fs-11 fw-7 mb-1">{item?.user?.fullName || 'Не известный'}</div>
                                        <div className="fs-09 fw-5 mb-3 mb-sm-4">Тема: 1-к, квартира 52м2, Четаева 32</div>
                                        <div className="reply">
                                            {(user?.id === item?.lastMessage?.userId) && <img src={checkPhotoPath(user?.avatar)} alt={user?.fullName}/>}
                                            <div className="message">{item?.lastMessage?.text}</div>
                                            {(user?.id === item?.lastMessage?.userId) && (
                                                <div className="mark">
                                                    {item?.lastMessage?.isViewed
                                                        ? <i className="bi bi-check2-all" title="прочитано" />
                                                        : <i className="bi bi-check2" title="Отправлено" />
                                                    }
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="new">
                                    </div>
                                    <div className="end">
                                        <div className="fs-09 fw-5">
                                            {checkDateForConversation(item?.lastMessage?.updatedAt)}
                                        </div>
                                        <button type="button" className="btn-del" title="Удалить">
                                            <i className="bi bi-trash-fill" />
                                        </button>
                                        <button type="button" className="btn-notice" title="Пожаловаться">
                                            <i className="bi bi-exclamation-triangle-fill" />
                                        </button>
                                    </div>
                                    <Link to={`chat/${item?.id}`} className="link-to-chat" />
                                </div>
                            ))
                            : <h6 className='m-auto p-5 text-center'>У вас пока нет ни одной беседы</h6>
                        : <div className='p-5 w-100 d-flex justify-content-center'><Loader color='#146492'/></div>
                }
            </div>
            {(conversations?.items?.length > 0) && <PaginationCustom meta={conversations?.meta} baseUrl="personal-account/my-messages"/>}
        </div>
    )
}
