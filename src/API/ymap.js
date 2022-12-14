import axios from 'axios';
import apiRoutes from "./config/apiRoutes";

const getForMap = async (city, userId = '', payloads = {}) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.GET_FOR_MAP}/${city}/${userId ? userId : ''}`, payloads)
        if (response) {
            return response?.data?.body
        }
    } catch(error) {
        console.log(error)
    }
}

export default getForMap