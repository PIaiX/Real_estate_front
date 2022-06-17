import axios from "axios";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const url = 'https://api.antontig.beget.tech'


export async function getAdsPage(uuid, idUser) {
    try {
        const response = await axios.post(`${url}/api/realEstates/${uuid}/${idUser}`)
        return response.data.body;
    } catch(error) {
        console.log(error)
    }
}

export async function addWishList(data, axiosPrivate) {
    try {
        const response = await axiosPrivate.post('https://api.antontig.beget.tech/api/realEstates/wishlist', {...data})
        return response.data
    } catch(error) {
        console.log(error)
    }
}

export async function deleteWishList(data, axiosPrivate) {
    try {
        const response = await axiosPrivate.delete(`https://api.antontig.beget.tech/api/realEstates/wishlist`,{data: data})
        return response.data
    } catch(error) {
        console.log(error)
    }
}

export async function reportAds(axiosPrivate, report) {
    try {
        const response = await axiosPrivate.post('https://api.antontig.beget.tech/api/realEstates/reports', report);
        return response.data
    } catch(error) {
        console.log(error)
    }
}