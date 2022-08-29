import apiRoutes from "./config/apiRoutes";


export const loginProfile = async (axiosPrivate, payloads) => {
    try {
        const response = await axiosPrivate.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.LOGIN}`, payloads)
        return response.data?.body
    } catch (error) {
        throw error
        console.log(error)
    }
}