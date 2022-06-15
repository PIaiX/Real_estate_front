import axios from "axios";

export async function getNews(page = 1, limit = 20) {
    try {
        const response = await axios.post('http://45.90.35.82:3333/api/news', { page, limit })
        return response.data.body;
    } catch(error) {
        console.log(error)
    }
}

export async function getArticle(slug) {
    try {
        const response2 = await axios.post(`http://45.90.35.82:3333/api/news/${slug}`, {slug})
        return response2.data.body;
    } catch (error) {
        console.log(error)
    }
}

export async function getRandomArticle(page=1,limit=5) {
    try {
            const response3 = await axios.post(`http://45.90.35.82:3333/api/news/random`, {page,limit})
            return response3.data.body
    } catch (error) {
        console.log(error)
    }
}