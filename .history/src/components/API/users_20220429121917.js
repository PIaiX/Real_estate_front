import axios from "axios";

<<<<<<< HEAD
export async function editUser (userId, data) {

    try {
        const response = await axios.patch(`https://api.antontig.beget.tech/api/user/update/${userId}`, { data })
=======
export async function editUser (uuid, data) {

    try {
        const response = await axios.patch(`https://api.antontig.beget.tech/api/user/update/${uuid}`, { data })
>>>>>>> auth
        return response;
    } catch(err) {
        console.log(err)
    }
}