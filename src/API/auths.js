import axios from "axios";
import apiRoutes from "./config/apiRoutes";

export const registration = async (formValue) => {
    try {
        await axios.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.REGISTRATION}`, {...formValue})
    } catch (error) {
        throw error
        console.log(error)
    }
}

export const postUserActivation = async (user) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.ACTIVATE_ACCOUNT}`, {user})
        return response.data.body;
    } catch(error) {
        console.log(error)
    }
}

export const loginProfile = async (axiosPrivate, payloads) => {
    try {
        const response = await axiosPrivate.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.LOGIN}`, payloads)
        return response.data?.body
    } catch (error) {
        throw error
        console.log(error)
    }
}