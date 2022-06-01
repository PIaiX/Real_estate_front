import axios from 'axios';

export async function getConnectionCity(coords = []) {
    try {
        const response = await axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=e02e5994-293e-40f6-8702-8fe9d1243699&format=json&kind=locality&results=1&geocode=${coords?.join()}`)
        return response.data?.response?.GeoObjectCollection?.featureMember[0]?.GeoObject?.name;
    } catch(err) {
        console.log(err)
    }
}