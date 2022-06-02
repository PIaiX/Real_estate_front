export async function getWishlist(userid, page = 1, limit = 4, axiosPrivate) {
    try {
        const response = userid ? await axiosPrivate.post(`https://api.antontig.beget.tech/api/user/wishlist/${userid}`, {page, limit}) : ''
        return response.data.body;
    } catch(err) {
        console.log(err)
    }
}