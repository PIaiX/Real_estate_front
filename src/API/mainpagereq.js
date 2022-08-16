import axios from "axios";
import apiRoutes from "./config/apiRoutes";

export async function getRecommend(userId, limit = 6, city) {
    try {
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.GET_RECOMMEND_ADS}/${city}/${userId}`, { limit, userId })
        return response.data.body;
    } catch(error) {
        console.log(error)
    }
}

export async function getPopular(page = 1, limit = 6, userId, city) {
    try {
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.GET_POPULAR_ADS}/${city}/${userId}`, { page, limit, userId })
        return response.data.body;
    } catch(error) {
        console.log(error)
    }
}

export async function getBanner(){
    try{
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.GET_BANNERS}`)
        return response.data.body;
    } catch (error) {
        console.log(error)
    }
}