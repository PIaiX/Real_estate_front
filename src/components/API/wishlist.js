export async function getWishlist(userId, page = 1, limit = 4, axiosPrivate, token) {
    try {
        const response = await axiosPrivate.post(`https://api.antontig.beget.tech/api/user/wishlist/${userId}`, {page, limit, token})
        return response.data.body;
    } catch(err) {
        console.log(err)
    }
}