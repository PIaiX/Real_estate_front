import axios from 'axios';

export async function getCatalog(page = 1, limit = 12, payloads = {}) {
    try {
        const response = await axios.post('https://api.antontig.beget.tech/api/realEstates', { page, limit, ...payloads})
        return response.data;
    } catch(err) {
        console.log(err)
    }
}