
const mainUrl = "https://api.antontig.beget.tech/api"

export async function updateUser (uuid, formData, axiosPrivate) {
  try {
      const response = await axiosPrivate.patch(`${mainUrl}/user/update/${uuid}`, formData)
        return response;
    } catch(err) {
        console.log(err)
    }
}

export async function getReviews (axiosPrivate, userId, page = 1) {
    try {
        const response = await axiosPrivate.post(`${mainUrl}/user/reviews/`, {page, userId})
        return response.data.body
    } catch (error) {
        console.log(error)
    }
}