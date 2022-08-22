import apiRoutes from './config/apiRoutes'

const getIncomingsResponses = async (axiosPrivate, userId, payloads) => {
    try {
        const response = await axiosPrivate.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.RESPONSES_INCOMINGS}/${userId}`, payloads)
        return response?.data?.body
    } catch (error) {
        console.log(error)
    }
}

const getOutgoingsResponses = async (axiosPrivate, userId, payloads) => {
    try {
        const response = await axiosPrivate.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.RESPONSES_OUTGOINGS}/${userId}`, payloads)
        return response?.data?.body
    } catch (error) {
        console.log(error)
    }
}

const getInProcessResponses = async (axiosPrivate, userId, payloads) => {
    try {
        const response = await axiosPrivate.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.RESPONSES_INPROCESS}/${userId}`, payloads)
        return response?.data?.body
    } catch (error) {
        console.log(error)
    }
}

const getCompletedResponses = async (axiosPrivate, userId, payloads) => {
    try {
        const response = await axiosPrivate.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.RESPONSES_COMPLETED}/${userId}`, payloads)
        return response?.data?.body
    } catch (error) {
        console.log(error)
    }
}

const createResponse = async (axiosPrivate, token, payloads) => {
    try {
        const response = await axiosPrivate.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.RESPONSES_ACTIONS}`, {token, ...payloads})
        return response?.data
    } catch (error) {
        console.log(error)
    }
}

const acceptResponse = async (axiosPrivate, id, payloads) => {
    try {
        const response = await axiosPrivate.patch(`${process.env.REACT_APP_BASE_URL}${apiRoutes.RESPONSES_ACCEPT}/${id}`, payloads)
        return response?.data
    } catch (error) {
        console.log(error)
    }
}

const completeResponse = async (axiosPrivate, id, payloads) => {
    try {
        const response = await axiosPrivate.patch(`${process.env.REACT_APP_BASE_URL}${apiRoutes.RESPONSES_COMPLETE}/${id}`, payloads)
        return response?.data
    } catch (error) {
        console.log(error)
    }
}

const rejectResponse = async (axiosPrivate, id, payloads) => {
    try {
        const response = await axiosPrivate.delete(`${process.env.REACT_APP_BASE_URL}${apiRoutes.RESPONSES_ACTIONS}/${id}`, {data: payloads})
        return response?.data?.body
    } catch (error) {
        console.log(error)
    }
}

export {
    getIncomingsResponses,
    getOutgoingsResponses,
    getInProcessResponses,
    getCompletedResponses,
    createResponse,
    acceptResponse,
    completeResponse,
    rejectResponse
}