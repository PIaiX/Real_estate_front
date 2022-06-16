import axios from "axios";

export async function getCities() {
    try {
        const response = await axios.post('https://api.antontig.beget.tech/api/cities')
        return response.data;
    } catch(error) {
        console.log(error)
    }
}
