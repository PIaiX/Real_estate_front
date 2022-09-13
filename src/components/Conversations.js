import React, {useEffect, useState} from 'react';
import ConversationItem from './ConversationItem';
import Loader from './Loader';
import useSocket from '../hooks/socket';
import {conversationListeners, emitPaginateConversation} from '../API/socketConversations';
import {socketInstance} from '../API/socketInstance';

const Conversations = () => {
    const {isConnected} = useSocket()
    const [conversations, setConversations] = useState({
        isLoading: false,
        error: null,
        meta: null,
        items: []
    })


    useEffect(() => {
        if (isConnected) {

            emitPaginateConversation({page: 1})
                .then(result => setConversations(prev => ({isLoading: true, meta: result?.meta, items: result?.data})))
                .catch(error => setConversations(prev => ({isLoading: true, error})))
        }
    }, [isConnected])

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
        <div className="conversations__list conversation-list">
            {
                conversations.isLoading
                    ? conversations?.items?.length
                        ? conversations.items.map(item => (
                            <ConversationItem conversation={item} key={item?.id}/>
                        ))
                        : <h6 className='m-auto p-5 text-center'>У вас пока нет ни одной беседы</h6>
                    : <div className='p-5 w-100 d-flex justify-content-center'><Loader color='#146492'/></div>
            }
        </div>
    );
};

export default Conversations;