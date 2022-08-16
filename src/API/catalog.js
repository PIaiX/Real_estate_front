import axios from 'axios';
import apiRoutes from "./config/apiRoutes";

export async function getCatalog(page = 1, limit = 12, userId = '', city = '.', payloads = {}) {
    try {
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.GET_CATALOG}/${city?.toLowerCase()}/${userId}`, { page, limit, ...payloads})
        return response?.data;
    } catch(err) {
        console.log(err.message)
    }
}

export async function getDistricts(city = '') {
    try {
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.GET_DISTRICTS}/${city?.toLowerCase()}`)
        return response?.data?.body;
    } catch(err) {
        console.log(err.message)
    }
}