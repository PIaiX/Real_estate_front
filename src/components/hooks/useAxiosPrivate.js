import React, {useState, useEffect} from "react";
import axios from "axios";
import {useSelector, useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import fingerprint from "@fingerprintjs/fingerprintjs";
import accessTokenActions from "../../store/actions/accessToken";
import currentUserActions from '../../store/actions/currentUser';

export default function useAxiosPrivate() {

    // const [userFingerprintId, setUserFingerprintId] = useState("");
    // useEffect(() => {
    //     fingerprint
    //         .load()
    //         .then((fp) => fp.get())
    //         .then((result) => {
    //             const visitorID = result.visitorId;
    //             setUserFingerprintId(visitorID);
    //         });
    // }, []);

    const baseUrl = "https://api.antontig.beget.tech";

    const dispatch = useDispatch();
    const {setToken} = bindActionCreators(accessTokenActions, dispatch);
    const {setCurrentUser} = bindActionCreators(currentUserActions, dispatch);

    const accessToken = useSelector((state) => state.accessToken);
    // fingerprint
    //     .load()
    //     .then((fp) => fp.get())
    //     .then((result) => {
    //         return result.visitorId;
    //     }),
    const axiosInstance = axios.create({
        baseUrl: baseUrl,
        headers: {
            "Content-Type": "application/json",
            "User-Fingerprint": "qqwwdqwedwwrc",
        },
        withCredentials: true,
    });


    axiosInstance.interceptors.request.use(
        (request) => {
            if (accessToken) {
                request.headers['Access-Token'] = accessToken
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
                if (error.response.status === 400 && !originalRequest.retry) {
                    originalRequest.retry = true;
                    const response = await axiosInstance.post(`${baseUrl}/api/auth/refresh`);
                    const newAccessToken = response?.data.body.token;
                    setToken(newAccessToken);
                    setCurrentUser(response.data.body.user)
                    const dataAxios = JSON.parse(originalRequest?.data)
                    dataAxios['token'] = newAccessToken
                    originalRequest.data = JSON.stringify(dataAxios)
                    console.log("response interceptor works 400")
                    return axiosInstance(originalRequest);
                }
                if (error.response.status === 401) {
                    console.log("response interceptor works 401")
                    return;
                }
            }
            return error
        }
    );

    // return () => {
    //     axiosInstance.interceptors.request.eject(requestInterceptor);
    //     axiosInstance.interceptors.response.eject(responseInterceptor);
    // };


    return axiosInstance;
}
