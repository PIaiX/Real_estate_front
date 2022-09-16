import React from 'react';
import {checkPhotoPath} from '../helpers/photo';
import {checkDateForConversation} from '../helpers/formatingDate';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

const ConversationItem = ({conversation}) => {
    const user = useSelector(state => state?.currentUser)
    const isMyLastMessage = (user?.id === conversation?.lastMessage?.userId)

    return (
        <div className={`conversation-list__item conversation-item ${conversation?.isNew ? 'unread' : ''}`}>
            <div className="photo">
                <img src={checkPhotoPath(conversation?.user?.avatar)} alt={conversation?.user?.fullName || 'avatar'}/>
                {/*<div className="indicator" />*/}
            </div>
            <div className="main">
                <div className="title-font fs-11 fw-7 mb-1">{conversation?.user?.fullName || 'Не известный'}</div>
                {(conversation?.realEstate?.title && conversation?.realEstate?.residentalComplex) && (
                    <div className="fs-09 fw-5 mb-3 mb-sm-4">
                        {`${conversation?.realEstate?.title} ${conversation?.realEstate?.residentalComplex}`}
                    </div>
                )}
                <div className="reply">
                    {(isMyLastMessage) && <img src={checkPhotoPath(user?.avatar)} alt={user?.fullName}/>}
                    <div className="message">{conversation?.lastMessage?.text}</div>
                    {(isMyLastMessage) && (
                        <div className="mark">
                            {conversation?.lastMessage?.isViewed
                                ? <i className="bi bi-check2-all" title="прочитано"/>
                                : <i className="bi bi-check2" title="Отправлено"/>
                            }
                        </div>
                    )}
                </div>
            </div>
            <div className="new">
            </div>
            <div className="end">
                <div className="fs-09 fw-5" style={{whiteSpace: 'nowrap'}}>
                    {checkDateForConversation(conversation?.lastMessage?.updatedAt)}
                </div>
                {/*<button type="button" className="btn-del" title="Удалить">*/}
                {/*    <i className="bi bi-trash-fill" />*/}
                {/*</button>*/}
                {/*<button type="button" className="btn-notice" title="Пожаловаться">*/}
                {/*    <i className="bi bi-exclamation-triangle-fill" />*/}
                {/*</button>*/}
            </div>
            <Link to={`chat/${conversation?.id}`} className="link-to-chat"/>
        </div>
    );
};

export default ConversationItem;