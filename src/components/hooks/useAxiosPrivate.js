import React from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import fingerprint from "@fingerprintjs/fingerprintjs";
import accessTokenActions from "../../store/actions/accessToken";

export default function useAxiosPrivate() {

    const mainUrl = "https://api.antontig.beget.tech";

    const dispatch = useDispatch();
    const {setToken} = bindActionCreators(accessTokenActions, dispatch);
    const accessToken = useSelector((state) => state.accessToken);

    /*fingerprint
        .load()
        .then((fp) => fp.get())
        .then((result) => {
            return result.visitorId;
        })*/


    const axiosInstance = axios.create({
        baseUrl: mainUrl,
        headers: {
            "Content-Type": "application/json",
            "User-Fingerprint": "akdgkaks",
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