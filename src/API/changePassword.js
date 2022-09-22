import axios from "axios";
import apiRoutes from "./config/apiRoutes";


export const resetPassword = async (email) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.RESET_PASSWORD}/${email}`)
        return response
    } catch (error) {
        throw error
        console.log(error)
    }
}

export const changePassword = async (payload) => {
    try {
        await axios.patch(`${process.env.REACT_APP_BASE_URL}${apiRoutes.RESET_PASSWORD}/changePassword`, payload)
    } catch (error) {
        throw error
        console.log(error)
    }
}