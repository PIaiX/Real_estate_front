import axios from "axios";
import apiRoutes from "./config/apiRoutes";

export async function updateUser (uuid, formData, axiosPrivate) {
  try {
      const response = await axiosPrivate.patch(`${process.env.REACT_APP_BASE_URL}${apiRoutes.USER_UPDATE}/${uuid}`, formData)
        return response?.data?.body;
    } catch(error) {
        console.log(error)
      throw error
    }
}

export async function userInfo (userId) {
    try {
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.GET_USER}/${userId}`)
        return response.data.body
    } catch (error) {
        console.log(error)
    }
}

export async function DeleteUserPhoto (axiosPrivate, uuid, token) {
    try {
        const response = await axiosPrivate.delete(`${process.env.REACT_APP_BASE_URL}${apiRoutes.USER_DELETE_AVATAR}/${uuid}`, {data: {token}})
    } catch (error) {
        console.log(error)
    }
}

export async function getMyAds (userId, page = 1,token, limit=4, axiosPrivate) {
    try {
        const response = await axiosPrivate.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.USER_ADS}/${userId}`, {page,limit, token, orderBy:'desc'})
        return response.data;
    } catch(error) {
        console.log(error)
    }
}

export async function deleteAds (axiosPrivate, uuid, token) {
    try {
        const response = await axiosPrivate.delete(`${process.env.REACT_APP_BASE_URL}${apiRoutes.USER_DELETE_AD}/${uuid}`, {data: {token}})
        return response
    } catch(error) {
        console.log(error)
    }
}

export async function updateAd (axiosPrivate, uuid, formData) {
    try {
        const response = await axiosPrivate.patch(`${process.env.REACT_APP_BASE_URL}${apiRoutes.USER_UPDATE_AD}/${uuid}`, formData)
        return response
    } catch(error) {
        console.log(error)
    }
}

export async function getReviews (axiosPrivate, userId, page = 1, limit) {
    try {
        const response = await axiosPrivate.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.USER_REVIEWS}`, {page, userId, limit, orderBy:'desc'})
        return response.data.body
    } catch (error) {
        console.log(error)
    }
}