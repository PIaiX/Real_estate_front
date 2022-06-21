import axios from 'axios';


const dadataGeocode = async (query) => {
    const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
    const token = "3147beaba86e667297007de96ab40da21f44686d";
    const secret = "2fa1203e479b60ee19260629174176a9d5d09775";

    const options = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Authorization": "Token " + token,
            "X-Secret": secret
        },
        body: JSON.stringify({query: query})
    }

    const response = await fetch(url, options)
    if (response) {
        return response.json()
    }
}

const dadataFias = async (fias) => {
    const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/address";
    const token = "3147beaba86e667297007de96ab40da21f44686d";

    const options = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
        },
        body: JSON.stringify({query: fias})
    }

    const response = await fetch(url, options)
    if (response) {
        return response.json()
    }
}

const dadataMetro = async (query) => {
    const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/metro";
    const token = "3147beaba86e667297007de96ab40da21f44686d";

    const options = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
        },
        body: JSON.stringify({query: query})
    }


    const response = await fetch(url, options)
    if (response) {
        return response.json()
    }
}

export {dadataGeocode, dadataFias, dadataMetro}