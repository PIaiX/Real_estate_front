import axios from "axios";

const mainUrl = "https://api.antontig.beget.tech/api"

export async function  usersPage (page=1, userId, limit) {
    try {
        const response = await axios.post(`${mainUrl}/realEstates/paginate/${userId}`, {page, limit})
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export async function getMyAds (userId, page = 1,token, limit=4, axiosPrivate) {
    try {
        const response = await axiosPrivate.post(`${mainUrl}/user/realEstates/${userId}`, {page,limit, token})
        return response.data;
    } catch(err) {
        console.log(err)
    }
}

export async function CreateReview (axiosPrivate, formData) {
    try {
        const response = await axiosPrivate.post(`${mainUrl}/user/reviews/add`, formData)
    } catch (error) {
        console.log(error)
    }
}