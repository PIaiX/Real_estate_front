import axios from "axios";

export async function editUser (uuid, data) {
  try {
      const response = await axios.patch(`https://api.antontig.beget.tech/api/user/update/${uuId}`, { ...data })
        return response;
    } catch(err) {
        console.log(err)
    }
}

export async function getMyAds (userId, page = 1, limit =4, axiosPrivate) {
    try {
        const response = await axiosPrivate.patch(`https://api.antontig.beget.tech/api/user/realEstates/${userId}`, {page,limit})
        return response.data;
    } catch(err) {
        console.log(err)
    }
}