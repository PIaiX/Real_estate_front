import axios from "axios";

const url = 'https://api.antontig.beget.tech'

export async function getRecommend(userId, limit = 6, city) {
    try {
        const response = await axios.post(`${url}/api/realEstates/recommended/${city}/${userId}`, { limit })
        return response.data.body;
    } catch(error) {
        console.log(error)
    }
}

export async function getPopular(page = 1, limit = 6, userId, city) {
    try {
        const response = await axios.post(`${url}/api/realEstates/popular/${city}/${userId}`, { page, limit })
        return response.data.body;
    } catch(error) {
        console.log(error)
    }
}

export async function getBanner(){
    try{
        const response = await axios.post(`${url}/api/banners`, {})
        return response.data.body;
    } catch (error) {
        console.log(error)
    }
}