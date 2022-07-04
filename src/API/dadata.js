import axios from 'axios';
import env from '../config/env'

const dadataFias = async (fias) => {
    const options = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + env.DADATA_TOKEN
        }
    }

    try {
        const response = await axios.post('https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/address', JSON.stringify({query: fias}), options)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export {dadataFias}