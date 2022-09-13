import {socketInstance} from './socketInstance';

const conversationListeners = {
    // => count
    countNewMessages: 'conversation:countNewMessages',

    // => conversation
    update: 'conversation:update'
}

const messageListeners = {
    // => void
    viewed: 'message:viewed',

    // => message
    create: 'message:create',

    // => message
    update: 'message:update',

    // => messagesIds
    delete: 'message:delete'
}

// ! ClientToServerEvents

// ? Conversation

const emitGetConversation = async (conversationId) => {
    return await new Promise((resolve, reject) => {
        socketInstance && socketInstance.emit("conversation:get", conversationId, (response) => {
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
        socketInstance && socketInstance.emit("conversation:close", conversationId, (response) => {
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
        socketInstance.emit("message:viewed", conversationId, userId, (response) => {
            try {
                resolve(response)
            } catch (e) {
                reject(e)
            }
        })
    })
}

const emitDeleteMessage = async (messagesIds, conversationId) => {
    return await new Promise((resolve, reject) => {
        socketInstance.emit("message:delete", messagesIds, conversationId, (response) => {
            try {
                resolve(response)
            } catch (e) {
                reject(e)
            }
        })
    })
}

const emitUpdateMessage = async (messageId ,payloads) => {
    return await new Promise((resolve, reject) => {
        socketInstance.emit("message:update", messageId, payloads, (response) => {
            try {
                resolve(response?.body)
            } catch (e) {
                reject(e)
            }
        })
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

const emitCreateWithoutTopicMessage = async (toId, payloads) => {
    return await new Promise((resolve, reject) => {
        socketInstance.emit("message:createWithoutTopic", toId, payloads, (response) => {
            try {
                resolve(response?.body)
            } catch (e) {
                reject(e)
            }
        })
    })
}

const emitCreateWithServiceTopicMessage = async (toId, payloads) => {
    return await new Promise((resolve, reject) => {
        socketInstance.emit("message:createWithServiceTopic", toId, payloads, (response) => {
            try {
                resolve(response)
            } catch (e) {
                reject(e)
            }
        })
    })
}

const emitCreateWithRealEstateTopicMessage = async (toId, payloads) => {
    return await new Promise((resolve, reject) => {
        socketInstance.emit("message:createWithRealEstateTopic", toId, payloads, (response) => {
            try {
                resolve(response)
            } catch (e) {
                reject(e)
            }
        })
    })
}

export {
    conversationListeners,
    messageListeners,
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
}