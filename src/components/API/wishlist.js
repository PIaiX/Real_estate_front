// import useAxiosPrivate from '../hooks/useAxiosPrivate';
//
// export async function getWishlist(userid, page = 1, limit = 1) {
//     try {
//         const axiosPrivate = useAxiosPrivate()
//         const response = await axiosPrivate.post(`https://api.antontig.beget.tech/api/user/wishlist/${userid}`, {
//             page,
//             limit
//         })
//         if (response) {
//             return response.data.body
//         }
//     } catch (err) {
//         console.log(err)
//     }
// }