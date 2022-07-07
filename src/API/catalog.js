import axios from 'axios';

export async function getCatalog(page = 1, limit = 12, userId = '', city = '.', payloads = {}) {
    try {
        const response = await axios.post(`https://api.antontig.beget.tech/api/realEstates/paginate/${city?.toLowerCase()}/${userId}`, { page, limit, ...payloads})
        return response?.data;
    } catch(err) {
        console.log(err.message)
    }
}

export async function getDistricts(city = '') {
    try {
        const response = await axios.post(`https://api.antontig.beget.tech/api/districts/${city?.toLowerCase()}`)
        return response?.data?.body;
    } catch(err) {
        console.log(err.message)
    }
}