import axios from "axios";

const mainUrl = "https://api.antontig.beget.tech/api"

export async function editUser (uuid, data) {
  try {
      const response = await axios.patch(`${mainUrl}/user/update/${uuid}`, { ...data })
        return response;
    } catch(err) {
        console.log(err)
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

export async function deleteAds (axiosPrivate, uuid, token) {
    try {
        const response = await axiosPrivate.delete(`${mainUrl}/realEstates/delete/${uuid}`, {data: {token}})
        return response
    } catch(err) {
        console.log(err)
    }
}

export async function updateAd (axiosPrivate, uuid, formData) {
    try {
        const response = await axiosPrivate.patch(`${mainUrl}/realEstates/update/${uuid}`, formData)
        return response
    } catch(err) {
        console.log(err)
    }
}