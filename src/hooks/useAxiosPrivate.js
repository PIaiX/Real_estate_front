import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import accessTokenActions from "../store/actions/accessToken";
import {useAccessToken} from "../store/reducers";
import axiosPrivate from "../API/axiosPrivate";
import useRefreshToken from "./refreshToken";

const useAxiosPrivate = () => {

    const dispatch = useDispatch();
    const {setToken} = bindActionCreators(accessTokenActions, dispatch);
    const accessToken = useAccessToken()
    const refreshToken = useRefreshToken()

    useEffect(() => {
        const requestInterceptor = axiosPrivate.interceptors.request.use(request => {
            if (accessToken) {
                request.headers["Access-Token"] = accessToken;
                request.headers["User-Fingerprint"] = localStorage.getItem('fingerprint')
            }
            return request;
        }, error => Promise.reject(error))
        const responseInterceptor = axiosPrivate.interceptors.response.use(response => response, async error => {
            const prevRequest = error?.config
            if (error?.response?.status === 401 && !prevRequest?.isSent) {
                prevRequest.isSent = true

                const newAccessToken = await refreshToken()
                const token = newAccessToken?.data?.body?.token;
                setToken(token);
                return axiosPrivate(prevRequest)
            }
            return Promise.reject(error)
        })
        return () => {
            axiosPrivate.interceptors.request.eject(requestInterceptor)
            axiosPrivate.interceptors.response.eject(responseInterceptor)
        }
    }, [accessToken, refreshToken])
    return axiosPrivate
}

export default useAxiosPrivate