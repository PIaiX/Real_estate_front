import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import fingerprint from "@fingerprintjs/fingerprintjs";
import accessTokenActions from "../../store/actions/accessToken";

export default function useAxiosPrivate() {
  // const [userFingerprintId, setUserFingerprintId] = useState("");

  // useEffect(() => {
  //   fingerprint
  //     .load()
  //     .then((fp) => fp.get())
  //     .then((result) => {
  //       const visitorID = result.visitorId;
  //       setUserFingerprintId(visitorID);
  //     });
  // }, []);

  const baseUrl = "https://api.antontig.beget.tech";

  const dispatch = useDispatch();
  const { setToken } = bindActionCreators(accessTokenActions, dispatch);

  const accessToken = useSelector((state) => state.accessToken);

  const axiosInstance = axios.create({
    baseUrl: baseUrl,
    headers: {
      "Content-Type": "application/json",
      "User-Fingerprint": fingerprint
        .load()
        .then((fp) => fp.get())
        .then((result) => {
          return result.visitorId;
        }),
    },
    withCredentials: true,
  });

  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use(
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

    const responseInterceptor = axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const originalRequest = error.config;
        if (error.response && error.response.status) {
          if (error.response.status === 401 && !originalRequest.retry) {
            originalRequest.retry = true;
            const response = await axios.post(`${baseUrl}/api/auth/refresh`);
            const newAccessToken = response.data;
            setToken(newAccessToken);
            originalRequest.headers["Access-Token"] = newAccessToken;
            console.log("response interceptor works 401");
            return axiosInstance(originalRequest);
          }
          if (error.response.status === 400) {
            console.log("response interceptor works 400");
            return;
          }
        }
      }
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  return axiosInstance;
}
