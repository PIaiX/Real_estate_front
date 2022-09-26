import axios from "axios";
import apiRoutes from "./config/apiRoutes";

export async function getAdsPage(uuid, userId) {
    if (userId) {
        try {
            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.ADS_ACTIONS}/${uuid}/${userId}`)
            return response.data.body;
        } catch(error) {
            console.log(error)
        }
    } else {
        try {
            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.ADS_ACTIONS}/${uuid}`)
            return response.data.body;
        } catch(error) {
            console.log(error)
        }
    }
}

export async function addWishList(data, axiosPrivate) {
    try {
        const response = await axiosPrivate.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.ADS_ACTIONS_WISHLIST}`, {...data})
        return response.data
    } catch(error) {
        throw error
        console.log(error)
    }
}

export async function deleteWishList(data, axiosPrivate) {
    try {
        const response = await axiosPrivate.delete(`${process.env.REACT_APP_BASE_URL}${apiRoutes.ADS_ACTIONS_WISHLIST}`,{data: data})
        return response.data
    } catch(error) {
        console.log(error)
    }
}

export async function reportAds(axiosPrivate, report) {
    try {
        const response = await axiosPrivate.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.ADS_REPORT}`, report);
        return response.data
    } catch(error) {
        throw error
        console.log(error)
    }
}

export async function createAdResponse(axiosPrivate, formData) {
    try {
        await axiosPrivate.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.CREATE_ESTATE_RESPONSE}`, formData)
    } catch (error) {
        throw error
        console.log(error)
    }
}

export async function getResponsesAd(realEstateId, token, page = 1){
    try {
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.GET_RESPONSES_AD}/${realEstateId}`, {token, page})
        return response.data.body
    } catch (error) {
        throw error
        console.log(error)
    }
}