import {socketInstance} from './socketInstance';

// ! ServerToClientEvents

// ? Conversation

const onNewMessagesCount = async () => {
    return await new Promise((resolve, reject) => {
        socketInstance.on("conversation:countNewMessages", count => {
            try {
                resolve(count);
            } catch (e) {
                reject(e)
            }
        })
    });
}

const onUpdateConversation = async (isListen = true) => {
    return new Promise((resolve, reject) => {
        socketInstance[isListen ? 'on' : 'off']("conversation:update", (conversation) => {
            try {
                resolve(conversation);
            } catch (e) {
                reject(e)
            }
        })
    });
}

// ? Message

const onMessageViewed = async () => {
    return await new Promise((resolve, reject) => {
        socketInstance.on("message:viewed", () => {
            try {
                resolve(true)
            } catch (e) {
                reject(false)
            }
        })
    })
}

const onMessageCreate = async () => {
    return await new Promise((resolve, reject) => {
        socketInstance.on("message:create", (message) => {
            try {
                resolve(message)
            } catch (e) {
                reject(e)
            }
        })
    })
}

const onMessageUpdate = async () => {
    return await new Promise((resolve, reject) => {
        socketInstance.on("message:update", (message) => {
            try {
                resolve(message)
            } catch (e) {
                reject(e)
            }
        })
    })
}

const onMessageDelete = async () => {
    return await new Promise((resolve, reject) => {
        socketInstance.on("message:delete", (messagesIds) => {
            try {
                resolve(messagesIds)
            } catch (e) {
                reject(e)
            }
        })
    })
}

// ! ClientToServerEvents

// ? Conversation

const emitGetConversation = async (conversationId) => {
    return await new Promise((resolve, reject) => {
        socketInstance.emit("conversation:get", conversationId, (response) => {
            try {
                resolve(response?.body)
            } catch (e) {
                reject(e)
            }
        })
    })
}

const emitCloseConversation = async (conversationId) => {
    return await new Promise((resolve, reject) => {
        socketInstance.emit("conversation:close", conversationId, (response) => {
            try {
                resolve(response)
            } catch (e) {
                reject(e)
            }
        })
    })
}

const emitPaginateConversation = async (payloads) => {
    return await new Promise((resolve, reject) => {
        socketInstance.emit("conversation:paginate", payloads, (response) => {
            try {
                resolve(response?.body)
            } catch (e) {
                reject(e)
            }
        })
    })
}

// ? Message

const emitViewedMessage = async (conversationId, userId) => {
    return await new Promise((resolve, reject) => {
        socketInstance.emit("message:viewed", conversationId, userId, (response) => response
            ? resolve(response)
            : reject(response))
    })
}

const emitDeleteMessage = async (messagesIds, conversationId) => {
    return await new Promise((resolve, reject) => {
        socketInstance.emit("message:delete", messagesIds, conversationId, (response) => response
            ? resolve(response)
            : reject(response))
    })
}

const emitUpdateMessage = async (messageId, payloads) => {
    return await new Promise((resolve, reject) => {
        socketInstance.emit("message:update", messageId, payloads, (response) => response
            ? resolve(response)
            : reject(response))
    })
}

const emitPaginateMessages = async (conversationId, payloads) => {
    return await new Promise((resolve, reject) => {
        socketInstance.emit("message:paginate", conversationId, payloads, (response) => {
            try {
                resolve(response?.body)
            } catch (e) {
                reject(e)
            }
        })
    })
}

// ? Create

const emitCreateMessage = async (payloads) => {
    return await new Promise((resolve, reject) => {
        socketInstance.emit("message:create", payloads, (response) => {
            try {
                resolve(response?.body)
            } catch (e) {
                reject(e)
            }
        })
    })
}

const emitCreateWithoutTopicMessage = async (toId) => {
    return await new Promise((resolve, reject) => {
        socketInstance.emit("message:createWithoutTopic", toId, (response) => response
            ? resolve(response)
            : reject(response))
    })
}

const emitCreateWithServiceTopicMessage = async (toId) => {
    return await new Promise((resolve, reject) => {
        socketInstance.emit("message:createWithServiceTopic", toId, (response) => response
            ? resolve(response)
            : reject(response))
    })
}

const emitCreateWithRealEstateTopicMessage = async (toId) => {
    return await new Promise((resolve, reject) => {
        socketInstance.emit("message:createWithRealEstateTopic", toId, (response) => response
            ? resolve(response)
            : reject(response))
    })
}

export {
    emitCloseConversation,
    emitCreateMessage,
    emitCreateWithoutTopicMessage,
    emitCreateWithRealEstateTopicMessage,
    emitCreateWithServiceTopicMessage,
    emitDeleteMessage,
    emitGetConversation,
    emitPaginateConversation,
    emitPaginateMessages,
    emitUpdateMessage,
    emitViewedMessage,
    onMessageCreate,
    onMessageDelete,
    onMessageUpdate,
    onMessageViewed,
    onUpdateConversation,
    onNewMessagesCount
}