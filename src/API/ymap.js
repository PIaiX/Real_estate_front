import axios from 'axios';

const getForMap = async (city = '', payloads = {}) => {
    try {
        const response = await axios.post(`https://api.antontig.beget.tech/api/realEstates/getForMap/${city?.toLowerCase()}`, payloads)
        if (response) {
            return response?.data?.body
        }
    } catch(error) {
        console.log(error)
    }
}

export default getForMap