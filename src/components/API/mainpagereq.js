import axios from "axios";

export async function getRecommend(userId= 1, limit = 6) {
    try {
        const response = await axios.post('https://api.antontig.beget.tech/api/realEstates/recommended', { userId, limit })
        return response.data.body;
    } catch(err) {
        console.log(err)
    }
}

export async function getPopular(page = 1, limit = 6) {
    try {
        const response2 = await axios.post('https://api.antontig.beget.tech/api/realEstates/popular', { page, limit })
        return response2.data.body;
    } catch(err) {
        console.log(err)
    }
}