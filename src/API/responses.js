import apiRoutes from './config/apiRoutes'

const getIncomingsResponses = async (axiosPrivate) => {
    try {
        const response = await axiosPrivate.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.RESPONSES_INCOMINGS}`)
        return response?.data?.body
    } catch (error) {
        console.log(error)
    }
}

const getOutgoingsResponses = async (axiosPrivate) => {
    try {
        const response = await axiosPrivate.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.RESPONSES_OUTGOINGS}`)
        return response?.data?.body
    } catch (error) {
        console.log(error)
    }
}

const getInProcessResponses = async (axiosPrivate) => {
    try {
        const response = await axiosPrivate.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.RESPONSES_INPROCESS}`)
        return response?.data?.body
    } catch (error) {
        console.log(error)
    }
}

const getCompletedResponses = async (axiosPrivate) => {
    try {
        const response = await axiosPrivate.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.RESPONSES_COMPLETED}`)
        return response?.data?.body
    } catch (error) {
        console.log(error)
    }
}

const createResponse = async (axiosPrivate) => {
    try {
        const response = await axiosPrivate.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.RESPONSES_ACTIONS}`)
        return response?.data
    } catch (error) {
        console.log(error)
    }
}

const acceptResponse = async (axiosPrivate) => {
    try {
        const response = await axiosPrivate.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.RESPONSES_ACCEPT}`)
        return response?.data
    } catch (error) {
        console.log(error)
    }
}

const completeResponse = async (axiosPrivate) => {
    try {
        const response = await axiosPrivate.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.RESPONSES_COMPLETE}`)
        return response?.data
    } catch (error) {
        console.log(error)
    }
}

const rejectResponse = async (axiosPrivate) => {
    try {
        const response = await axiosPrivate.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.RESPONSES_ACTIONS}`)
        return response?.data?.body
    } catch (error) {
        console.log(error)
    }
}