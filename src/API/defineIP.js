import axios from 'axios';

const defineIP = async () => {
    try {
        const response = await axios.get('https://api.ipify.org')
        return response?.data
    } catch (error) {
        console.log(error)
    }
}

export default defineIP