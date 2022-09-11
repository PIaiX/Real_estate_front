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

const emitUpdateMessage = async (payloads) => {
    return await new Promise((resolve, reject) => {
        socketInstance.emit("message:update", payloads, (response) => response
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