import axios from 'axios';

export async function defineCity() {
    try {
        const response = await axios.post('http://ip-api.com/json/?lang=ru&fields=city')
        return response.data?.city;
    } catch(err) {
        console.log(err)
        return 'Москва'
    }
}