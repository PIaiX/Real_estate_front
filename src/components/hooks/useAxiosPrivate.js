import React from "react";
import axios from "axios";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import accessTokenActions from "../../store/actions/accessToken";
import {useAccessToken} from "../../store/reducers";

export default function useAxiosPrivate() {

    const mainUrl = "https://api.antontig.beget.tech";

    const dispatch = useDispatch();
    const {setToken} = bindActionCreators(accessTokenActions, dispatch);
    const accessToken = useAccessToken()

    const axiosInstance = axios.create({
        baseUrl: mainUrl,
        headers: {
            "Content-Type": "application/json",
            "User-Fingerprint": localStorage.getItem('fingerprint'),
            "Access-Control-Allow-Origin": "https://api.antontig.beget.tech",
            "Vary": "Origin",
        },
        withCredentials: true,
    });

    axiosInstance.interceptors.request.use(
        (request) => {
            if (accessToken) {
                request.headers["Access-Token"] = accessToken;
            }
            console.log(request)
            return request;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    axiosInstance.interceptors.response.use(
        (response) => {
            return response;
        },
        async (error) => {
            const originalRequest = error.config;
            if (error.response && error.response.status) {
                console.log(error.response)
                if (error.response.status === 401 && !originalRequest.retry) {
                    console.log("response interceptor works 401")
                    return ;
                }
                if (error.response.status === 400 && !originalRequest.retry) {
                    originalRequest.retry = true;
                    const response = await axiosInstance.post(`${mainUrl}/api/auth/refresh`);
                    const token = response.data.body.token;
                    setToken(token);
                    let dataAxios = JSON.parse(originalRequest.data)
                    dataAxios['token'] = token;
                    originalRequest.data = JSON.stringify(dataAxios);
                    console.log("response interceptor works 400")
                    return axiosInstance(originalRequest);
                }
            }
            return error
        });
    return axiosInstance;
}