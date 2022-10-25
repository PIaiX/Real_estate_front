import apiRoutes from "./config/apiRoutes";

export const deleteImage = async (axiosPrivate, imageId, token) => {
    try {
       await axiosPrivate.delete(`${process.env.REACT_APP_BASE_URL}${apiRoutes.DELETE_IMAGE}/${imageId}`, {data: {token}})
    } catch (error) {
        throw error
        console.log(error)
    }
}