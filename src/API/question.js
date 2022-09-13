import axios from "axios";
import apiRoutes from "./config/apiRoutes";

export async function getQuestion(formData) {
    try {
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.ASK_QUESTIONS}`, formData)
        return response.data.body;
    } catch(error) {
        console.log(error)
        throw error
    }
}