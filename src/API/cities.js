import axios from "axios";
import apiRoutes from "./config/apiRoutes";

export async function getCities() {
    try {
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.GET_CITIES}`)
        return response.data;
    } catch(error) {
        console.log(error)
    }
}
