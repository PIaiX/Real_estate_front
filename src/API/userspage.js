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
        await axiosPrivate.post(`${mainUrl}/user/reviews/add`, formData)
    } catch (error) {
        console.log(error)
    }
}

export async function addReportUser (axiosPrivate, data) {
    try {
        await axiosPrivate.post(`${mainUrl}/user/reports`, {...data})
    } catch (error) {
        console.log(error)
    }
}

export async function deleteReportUser (axiosPrivate, data) {
    try {
        await axiosPrivate.delete(`${mainUrl}/user/reports`, {data: {...data}})
    } catch (error) {
        console.log(error)
    }
}

export async function addReportReview (axiosPrivate, token, usersReviewId, userId) {
    try {
        await axiosPrivate.post(`${mainUrl}/user/reviewsReports`, {token, usersReviewId, userId})
    } catch (error) {
        console.log(error)
    }
}

export async function deleteReportReview (axiosPrivate, token, usersReviewId, userId) {
    try {
        await axiosPrivate.delete(`${mainUrl}/user/reviewsReports`, {data: {token, usersReviewId, userId}})
    } catch (error) {
        console.log(error)
    }
}

export async function userInfoInUserPage (userId,currentUserId) {
    try {
        const response = await axios.post(`${mainUrl}/user/${userId}/${currentUserId}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export async function getReviewsInUsersPage (axiosPrivate, userId, page = 1, limit, currentUserId) {
    try {
        const response = await axiosPrivate.post(`${mainUrl}/user/reviews/${currentUserId}`, {page, userId, limit, orderBy:'desc'})
        return response.data.body
    } catch (error) {
        console.log(error)
    }
}