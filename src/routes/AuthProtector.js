import React from 'react';
import {useAccessToken} from "../store/reducers";
import {Outlet, Navigate} from "react-router-dom";

const AuthProtector = () => {
    const token = useAccessToken()
    return token ? <Outlet/> : <Navigate to='/login' replace={true}/>
};

export default AuthProtector;