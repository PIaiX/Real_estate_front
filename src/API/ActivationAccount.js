import axios from "axios";
import apiRoutes from "./config/apiRoutes";

export async function postUserActivation (user) {
    try {
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.ACTIVATE_ACCOUNT}`, {user})
        return response.data.body;
    } catch(error) {
        console.log(error)
    }
}