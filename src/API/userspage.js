import axios from "axios";
import apiRoutes from "./config/apiRoutes";

export async function  usersPage (page=1, userId, limit) {
    try {
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/realEstates/paginate/${userId}`, { page, limit})
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export async function CreateReview (axiosPrivate, formData) {
    try {
        await axiosPrivate.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.ADD_REVIEW_USER}`, formData)
    } catch (error) {
        console.log(error)
    }
}

export async function addReportUser (axiosPrivate, data) {
    try {
        await axiosPrivate.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.REPORT_ACTIONS_USER}`, {...data})
    } catch (error) {
        console.log(error)
    }
}

export async function deleteReportUser (axiosPrivate, data) {
    try {
        await axiosPrivate.delete(`${process.env.REACT_APP_BASE_URL}${apiRoutes.REPORT_ACTIONS_USER}`, {data: {...data}})
    } catch (error) {
        console.log(error)
    }
}

export async function addReportReview (axiosPrivate, token, usersReviewId, userId) {
    try {
        await axiosPrivate.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.REPORT_ACTIONS_REVIEWS}`, {token, usersReviewId, userId})
    } catch (error) {
        console.log(error)
    }
}

export async function deleteReportReview (axiosPrivate, token, usersReviewId, userId) {
    try {
        await axiosPrivate.delete(`${process.env.REACT_APP_BASE_URL}${apiRoutes.REPORT_ACTIONS_REVIEWS}`, {data: {token, usersReviewId, userId}})
    } catch (error) {
        console.log(error)
    }
}

export async function userInfoInUserPage (userId,currentUserId) {
    try {
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.GET_USER}/${userId}/${currentUserId}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export async function getReviewsInUsersPage (axiosPrivate, userId, page = 1, currentUserId) {
    try {
        const response = await axiosPrivate.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.REVIEWS_IN_USERS_PAGE}/${currentUserId}`, {page, userId, orderBy:'desc'})
        return response.data.body
    } catch (error) {
        console.log(error)
    }
}