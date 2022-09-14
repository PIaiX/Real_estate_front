import React, {useEffect, useState} from 'react';
import ConversationItem from './ConversationItem';
import Loader from './Loader';
import useSocket from '../hooks/socket';
import {conversationListeners, emitPaginateConversation} from '../API/socketConversations';
import {socketInstance} from '../API/socketInstance';

const Conversations = () => {
    const {isConnected} = useSocket()

    // conversations paginate
    const initialConversationsLimit = 15
    const [page, setPage] = useState(1)
    const [isFetching, setIsFetching] = useState(false)

    // conversations
    const [conversations, setConversations] = useState({
        isLoading: false,
        error: null,
        meta: null,
        items: []
    })

    const emitPaginateConversationsRequest = async (page, limit) => {
        return await emitPaginateConversation({page, limit})
            .then(result => result && setConversations(prev => ({
                isLoading: true,
                meta: result?.meta,
                items: [...prev.items, ...result.data]
            })))
            .catch(error => setConversations(prev => ({isLoading: true, error})))
    }

    const onConversationsScroll = (event) => {
        const isScrollOnBottom = (event.target.scrollTop + event.target.offsetHeight) >= event.target.scrollHeight

        if (!isFetching && isScrollOnBottom && (conversations?.meta?.total > conversations?.items?.length)) {
            setIsFetching(true)
        }
    }

    const fetchMessages = (delay) => {
        if ((conversations?.meta?.total > conversations?.items?.length)) {
            setTimeout(() => {
                emitPaginateConversationsRequest(page + 1, initialConversationsLimit)
                    .then(() => {
                        setPage(prev => prev + 1)
                        setIsFetching(false)
                    })
            }, delay);
        }
    }

    useEffect(() => {
        if (isConnected) {
            emitPaginateConversationsRequest(page, initialConversationsLimit)
        }
    }, [isConnected])

    // fetch messages by lazy loading
    useEffect(() => isFetching && fetchMessages(1000), [isFetching])

    useEffect(() => {
        if (isConnected) {
            // update conversation listener
            socketInstance.on(conversationListeners.update, conversation => {
                let newConversation = conversations.items.find(item => (item?.id === conversation?.id))
                const filteredConversations = conversations.items.filter(item => (item?.id !== conversation?.id))

                if (conversation?.lastMessage && newConversation) {
                    newConversation.lastMessage = conversation?.lastMessage
                    newConversation.isNew = true
                }

                if (newConversation) {
                    setConversations(prev => ({
                        ...prev,
                        items: [newConversation, ...filteredConversations]
                    }))
                }
            })
        }
    }, [isConnected, conversations])

    return (
        <div
            className="conversations__list conversation-list"
            onScroll={onConversationsScroll}
        >
            {
                conversations.isLoading
                    ? conversations?.items?.length
                        ? conversations.items.map(item => (
                            <ConversationItem conversation={item} key={item?.id}/>
                        ))
                        : <h6 className='m-auto p-5 text-center'>У вас пока нет ни одной беседы</h6>
                    : <div className='p-5 w-100 d-flex justify-content-center'><Loader color='#146492'/></div>
            }
            {isFetching && (
                <div className="messages-list__loader">
                    <Loader color="#146492"/>
                </div>
            )}
        </div>
    );
};

export default Conversations;