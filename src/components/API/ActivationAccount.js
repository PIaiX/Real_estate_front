import axios from "axios";

export async function postUserActivation (user) {

    try {
        const response = await axios.post(`https://api.antontig.beget.tech/api/auth/activate`, {user})
        return response.data.body;
    } catch(err) {
        console.log(err)
    }
}