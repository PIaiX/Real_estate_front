import React, {useCallback, useEffect, useState} from 'react';
import Loader from './Loader';
import {HandySvg} from 'handy-svg';
import check from '../img/icons/check.svg';
import MessageDropdownMobile from './MessageDropdownMobile';
import {emitCreateMessage, emitPaginateMessages, onMessageCreate} from '../API/socketConversations';
import MessageItem from './MessageItem';

const Messages = ({conversationId, conversationUser, isConnected}) => {

    // messages paginate
    const initialMessagesLimit = 15
    const [page, setPage] = useState(1)
    const [isFetching, setIsFetching] = useState(false)

    // messages
    const [messages, setMessages] = useState({
        isLoading: false,
        error: null,
        meta: null,
        items: []
    })

    // messages actions
    const [editableMessageId, setEditableMessageId] = useState(null)
    const [activeMessageOnMobile, setActiveMessageOnMobile] = useState(null)
    const [selectedMessagesOnMobile, setSelectedMessagesOnMobile] = useState([])

    // message input
    const [messageInput, setMessageInput] = useState('')
    const messageInputRef = useCallback(node => {
        if (node !== null) editableMessageId ? node.focus() : node.blur()
    }, [editableMessageId])

    // positioning of dropdown
    const [messagesScrollHeight, setMessagesScrollHeight] = useState(null)
    const [messagesScrollTop, setMessagesScrollTop] = useState(null)
    const [messagesClientHeight, setMessagesClientHeight] = useState(null)
    const [messagesClientWidth, setMessagesClientWidth] = useState(null)
    const [messagePosition, setMessagePosition] = useState({x: 0, y: 0})
    const messagesRef = useCallback(node => {
        if (node !== null) {
            const rect = node.getBoundingClientRect()
            setMessagesScrollHeight(node.scrollHeight)
            setMessagesScrollTop(node.scrollTop)
            rect && setMessagesClientHeight(rect.height)
            rect && setMessagesClientWidth(rect.width)
        }
    }, [activeMessageOnMobile])

    const emitPaginateMessagesRequest = async (page, limit) => {
        return await emitPaginateMessages(conversationId, {page, limit, orderBy: 'desc'})
            .then(result => result && setMessages(prev => ({
                isLoading: true,
                meta: result?.meta,
                items: [...messages.items, ...result.data]
            })))
            .catch(error => setMessages(prev => ({isLoading: true, error})))
    }

    const onMessagesScroll = (event) => {
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

    const onSendMessage = () => {
        emitCreateMessage({conversationId, text: messageInput})
            .then(result => {
                setMessageInput('')
                result && setMessages(prev => ({...prev, items: [result, ...prev.items]}))
            })
            // ! dispatch error alert or mark message as rejected
            .catch(error => console.log(error))
    }

    // listen creating of message
    useEffect(() => {
        if (messages?.items?.length) {
            onMessageCreate()
                // .then(() => emitPaginateMessagesRequest(1))
                .catch(error => console.log(error))
        }
    }, [messages])

    // first connection fetch messages
    useEffect(() => {
        if (isConnected) {
            emitPaginateMessagesRequest(page, initialMessagesLimit)
        }
    }, [isConnected])

    // fetch messages by lazy loading
    useEffect(() => isFetching && fetchMessages(1000), [isFetching])

    return (
        messages.isLoading
            ? <>
                <div
                    className={`messages-list ${(selectedMessagesOnMobile?.length > 1) ? 'messages-list_indent' : ''}`}
                    onScroll={onMessagesScroll}
                    ref={messagesRef}
                >
                    <MessageDropdownMobile
                        isShow={activeMessageOnMobile}
                        resetActiveMessage={() => setActiveMessageOnMobile(null)}
                        messagesScrollHeight={messagesScrollHeight}
                        messagesScrollTop={messagesScrollTop}
                        messagesClientHeight={messagesClientHeight}
                        messagesClientWidth={messagesClientWidth}
                        messagePosition={messagePosition}
                    />
                    {messages?.items?.length
                        ? messages.items.map((item, index) => (
                            <MessageItem
                                key={index}
                                message={item}
                                conversationUser={conversationId}
                                activeMessageOnMobile={activeMessageOnMobile}
                                setActiveMessageOnMobile={setActiveMessageOnMobile}
                                selectedMessagesOnMobile={selectedMessagesOnMobile}
                                setSelectedMessagesOnMobile={setSelectedMessagesOnMobile}
                                setMessagePosition={setMessagePosition}
                                setEditableMessage={setEditableMessageId}
                            />
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
                        ref={messageInputRef}
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
    )
}

export default Messages;