import React from "react";
import axios from "axios";

const axiosDadata = () => {

    return axios.create({
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + process.env.REACT_APP_DADATA_TOKEN
        }
    });
}

export default axiosDadata()