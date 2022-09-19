import axios from "axios";

export const dadataReAddress = async (payloads) => {
    const options = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Token " + process.env.REACT_APP_DADATA_TOKEN,
        },
    }
    try {
        const response = await axios.post("https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address", payloads, options)
        return response?.data?.suggestions
    } catch (error) {
        console.log(error)
    }
}