import axios from "axios";

export async function getQuestion(formData) {
    try {
        const response = await axios.post('https://api.antontig.beget.tech/api/questions', formData)
        return response.data.body;
    } catch(err) {
        console.log(err)
    }
}