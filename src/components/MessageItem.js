import useWindowDimensions from '../hooks/useWindowDimensions';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {checkPhotoPath} from '../helpers/photo';
import {getTimeUI} from '../helpers/formatingDate';

const MessageItem = (props) => {
    const {
        message,
        conversationUser,
        onUpdateMessage,
        onDeleteMessage,

        // props for mobile mode
        activeMessageOnMobile,
        setActiveMessageOnMobile,
        selectedMessagesOnMobile,
        setSelectedMessagesOnMobile,
        setMessagePosition,

        // props for desctop mode

    } = props

    const {width} = useWindowDimensions()
    const [isMobile, setIsMobile] = useState(false)
    const user = useSelector(state => state?.currentUser)
    const isMyMessage = (+user?.id === +message?.userId)

    // switch mode
    useEffect(() => {
        (width < 991)
            ? setIsMobile(true)
            : setIsMobile(false)
    }, [width])

    // initial reset when switched mode
    useEffect(() => {
        setActiveMessageOnMobile({})
        setSelectedMessagesOnMobile([])
    }, [isMobile])

    return (
        <div
            className={`message ${isMyMessage ? 'my' : ''}`}
        >
            {!isMobile && (
                <div className="photo">
                    <img
                        src={(isMyMessage)
                            ? checkPhotoPath(user?.avatar)
                            : checkPhotoPath(conversationUser?.avatar)
                        }
                        alt="Колесникова Ирина"/>
                    {/*<div className="indicator online" />*/}
                </div>
            )}
            {isMobile
                ? (
                    <div
                        className={`main main_mobile ${(activeMessageOnMobile.id === message?.id) ? 'active' : ''} ${selectedMessagesOnMobile?.length && selectedMessagesOnMobile?.includes(message?.id) ? 'selected' : ''}`}
                        onClick={e => {
                            (!activeMessageOnMobile.id && !selectedMessagesOnMobile?.length) && setActiveMessageOnMobile({
                                id: message?.id,
                                text: message?.text
                            })
                            setSelectedMessagesOnMobile(prev => {
                                if (prev?.length) {
                                    return prev.includes(message?.id)
                                        ? prev.filter(messageId => messageId !== message?.id)
                                        : [...prev, message?.id]
                                }
                            })

                            const offsetTop = e.currentTarget.parentElement.offsetTop
                            const halfClientTopOffset = e.currentTarget.parentElement.clientHeight / 2

                            const parentRect = e.currentTarget.parentElement.getBoundingClientRect()
                            const halfClientLeftOffset = (e.currentTarget.clientWidth / 2) + parentRect.x

                            setMessagePosition({x: halfClientLeftOffset, y: offsetTop + halfClientTopOffset})
                        }}
                    >
                        <div className="text">
                            {message?.text}
                        </div>
                    </div>
                )
                : (
                    <div className="main">
                        <div className="name">
                            {(isMyMessage)
                                ? user?.fullName
                                : conversationUser?.fullName
                            }
                        </div>
                        <div className="text">
                            <p>{message?.text}</p>
                        </div>
                    </div>
                )
            }
            <div className="mark">
                {(isMyMessage) && (
                    message?.isViewed
                        ? <i className="bi bi-check2-all" title="прочитано"/>
                        : <i className="bi bi-check2" title="Отправлено"/>
                )}
            </div>
            <div className="date">
                {getTimeUI(message?.createdAt, true)}
            </div>
            {!isMobile && (
                <div className="btns">
                    <button
                        type="button"
                        onClick={() => onDeleteMessage(message?.id)}
                    >
                        <i className="bi bi-trash-fill"/>
                    </button>
                    <button
                        type="button"
                        onClick={() => onUpdateMessage(message?.id, message?.text)}
                    >
                        <i className="bi bi-pencil-fill"/>
                    </button>
                </div>
            )}
        </div>
    )
}

export default MessageItem