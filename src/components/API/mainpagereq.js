import axios from "axios";

const url = 'https://api.antontig.beget.tech'

export async function getRecommend(userId= 2, limit = 6) {
    try {
        const response = await axios.post(`${url}/api/realEstates/recommended`, { userId, limit })
        return response.data.body;
    } catch(err) {
        console.log(err)
    }
}

export async function getPopular(page = 1, limit = 6) {
    try {
        const response2 = await axios.post(`${url}/api/realEstates/popular`, { page, limit })
        return response2.data.body;
    } catch(err) {
        console.log(err)
    }
}

export async function getBanner(){
    try{
        const response3 = await axios.post(`${url}/api/banners`, {})
        return response3.data.body;
    } catch (err) {
        console.log(err)
    }
}