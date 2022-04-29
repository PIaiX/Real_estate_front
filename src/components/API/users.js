import axios from "axios";

export async function editUser (userId, data) {

    try {
        const response = await axios.patch(`https://api.antontig.beget.tech/api/user/update/${userId}`, { data })
        return response;
    } catch(err) {
        console.log(err)
    }
}