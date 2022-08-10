import axios from 'axios';
import defineIP from './defineIP';
import env from '../config/env'

const defineCity = async () => {
    try {
        const ipAddress = await defineIP()
        const response = await axios.post(`https://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address?ip=${ipAddress}`, {}, {
            headers: {
                "Authorization": `Token ${env.DADATA_TOKEN}`
            }
        })
        return response?.data?.location?.data?.city;
    } catch(error) {
        console.log(error)
        return 'Москва'
    }
}

export default defineCity