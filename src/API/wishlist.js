import apiRoutes from "./config/apiRoutes";

export async function getWishlist(userId, page = 1, limit = 4, axiosPrivate, token) {
    try {
        const response = await axiosPrivate.post(`${process.env.REACT_APP_BASE_URL}${apiRoutes.USER_WISHLIST}/${userId}`, {page, limit, token})
        return response.data.body;
    } catch(err) {
        console.log(err)
    }
}