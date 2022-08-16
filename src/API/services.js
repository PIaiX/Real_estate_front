import apiRoutes from "./config/apiRoutes";

export const getServicesTypes = async (axiosPrivate) => {
    try {
        const response = await axiosPrivate.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.GET_SERVICE_TYPES}`)
        return response.data.body
    } catch (error) {
        console.log(error)
    }
}

export const getSubServicesTypes = async (axiosPrivate, serviceId) => {
    try {
        const response = await axiosPrivate.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.GET_SERVICE_SUB_TYPES}/${serviceId}`)
        return response.data.body
    } catch (error) {
        console.log(error)
    }
}

export const getAttributesTypes = async (axiosPrivate, serviceId) => {
    try {
        const response = await axiosPrivate.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.GET_SERVICE_ATTRIBUTES_TYPES}/${serviceId}`)
        return response.data.body
    } catch (error) {
        console.log(error)
    }
}

export const getServicesUsers = async (axiosPrivate, payload) => {
    try {
        const response = await axiosPrivate.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.SERVICES_ACTIONS}`, payload)
        return response.data
    } catch (error) {
        console.log(error)
    }
}