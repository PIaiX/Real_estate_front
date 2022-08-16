import axios from 'axios';
import apiRoutes from "./config/apiRoutes";

export async function getTypesEstate() {
    try {
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.GET_ESTATE_TYPES}`)
        return response.data.body;
    } catch(err) {
        console.log(err)
    }
}