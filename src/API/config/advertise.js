import apiRoutes from "./apiRoutes";

export const addAdvertise = async (axiosPrivate, formData) => {
    try {
        await axiosPrivate.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.CREATE_AD}`, formData)
    } catch (error) {
        console.log(error)
        throw error
    }
}