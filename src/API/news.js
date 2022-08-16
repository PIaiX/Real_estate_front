import axios from "axios";
import apiRoutes from "./config/apiRoutes";

export async function getNews(page = 1, limit = 20) {
    try {
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.GET_ARTICLES_ACTIONS}`, { page, limit })
        return response.data.body;
    } catch(error) {
        console.log(error)
    }
}

export async function getArticle(slug) {
    try {
        const response2 = await axios.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.GET_ARTICLES_ACTIONS}/${slug}`, {slug})
        return response2.data.body;
    } catch (error) {
        console.log(error)
    }
}

export async function getRandomArticle(page=1,limit=5) {
    try {
            const response3 = await axios.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.GET_ARTICLES_RANDOM}`, {page,limit})
            return response3.data.body
    } catch (error) {
        console.log(error)
    }
}