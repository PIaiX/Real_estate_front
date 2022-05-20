import axios from "axios";

export async function getTypesEstate() {
    try {
        const response = await axios.post('https://api.antontig.beget.tech/api/realEstates/types',)
        return response.data.body;
    } catch(err) {
        console.log(err)
    }
}