import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

const axiosPrivate = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
        "User-Fingerprint": localStorage.getItem("fingerprint"),
        "Access-Control-Allow-Origin": "*",
    },
    withCredentials: true,
});

export default axiosPrivate;