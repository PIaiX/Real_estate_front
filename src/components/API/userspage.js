import axios from "axios";

const mainUrl = "https://api.antontig.beget.tech/api"

export async function  usersPage (page=1, userId, limit) {
    try {
        const response = await axios.post(`${mainUrl}/realEstates/paginate/${userId}`, { page, limit})
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export async function CreateReview (axiosPrivate, formData) {
    try {
        const response = await axiosPrivate.post(`${mainUrl}/user/reviews/add`, formData)
    } catch (error) {
        console.log(error)
    }
}

export async function addReportUser (axiosPrivate, data) {
    try {
        const report = await axiosPrivate.post(`${mainUrl}/user/reports`, {...data})
    } catch (error) {
        console.log(error)
    }
}

export async function deleteReportUser (axiosPrivate, data) {
    try {
        const report = await axiosPrivate.delete(`${mainUrl}/user/reports`, {data: {...data}})
    } catch (error) {
        console.log(error)
    }
}

export async function addReportReview (axiosPrivate, token) {
    try {
        const report = await axiosPrivate.post(`${mainUrl}/user/reviewReports`, {token})
    } catch (error) {
        console.log(error)
    }
}

export async function deleteReportReview (axiosPrivate, data) {
    try {
        const report = await axiosPrivate.delete(`${mainUrl}/user/reports`, {data: {...data}})
    } catch (error) {
        console.log(error)
    }
}

export async function userInfo (userId) {
    try {
        const response = await axios.post(`${mainUrl}/user/${userId}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}