import axios from "axios";

const mainUrl = "https://api.antontig.beget.tech/api"

export async function updateUser (uuid, formData, axiosPrivate) {
  try {
      const response = await axiosPrivate.patch(`${mainUrl}/user/update/${uuid}`, formData)
        return response;
    } catch(error) {
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

export async function DeleteUserPhoto (axiosPrivate, uuid, token) {
    try {
        const response = await axiosPrivate.delete(`${mainUrl}/user/deleteAvatar/${uuid}`, {data: {token}})
    } catch (error) {
        console.log(error)
    }
}

export async function getMyAds (userId, page = 1,token, limit=4, axiosPrivate) {
    try {
        const response = await axiosPrivate.post(`${mainUrl}/user/realEstates/${userId}`, {page,limit, token, orderBy:'desc'})
        return response.data;
    } catch(error) {
        console.log(error)
    }
}

export async function deleteAds (axiosPrivate, uuid, token) {
    try {
        const response = await axiosPrivate.delete(`${mainUrl}/realEstates/delete/${uuid}`, {data: {token}})
        return response
    } catch(error) {
        console.log(error)
    }
}

export async function updateAd (axiosPrivate, uuid, formData) {
    try {
        const response = await axiosPrivate.patch(`${mainUrl}/realEstates/update/${uuid}`, formData)
        return response
    } catch(error) {
        console.log(error)
    }
}

export async function getReviews (axiosPrivate, userId, page = 1, limit) {
    try {
        const response = await axiosPrivate.post(`${mainUrl}/user/reviews`, {page, userId, limit, orderBy:'desc'})
        return response.data.body
    } catch (error) {
        console.log(error)
    }
}