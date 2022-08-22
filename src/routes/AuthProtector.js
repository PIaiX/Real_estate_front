import React from 'react';
import {useAccessToken} from "../store/reducers";
import {Outlet} from "react-router-dom";
import AuthError from "../components/AuthError";

const AuthProtector = () => {
    const token = useAccessToken()
    return token ? <Outlet/> : <AuthError/>
};

export default AuthProtector;