import axios from 'axios';

export async function getTypesEstate() {
    try {
        const response = await axios.post('https://api.antontig.beget.tech/api/realEstates/types')
        return response.data.body;
        // return {data: response.data.body}
    } catch(err) {
        // return {error: err.message}
        console.log(err)
    }
}