import React, {useEffect, useState} from 'react';
import {useAccessToken, useCurrentUser} from "../store/reducers";
import {Outlet} from "react-router-dom";
import AuthError from "../components/AuthError";
import Loader from "../components/Loader";

const AuthProtector = () => {
    const currentUser = useCurrentUser()
    const token = useAccessToken()
    const [taimer, setTaimer] = useState({
        user: null,
        token: null,
        isLoading: false
    })

    useEffect(() => {
        setTimeout(() => {
            setTaimer(prevState => ({...prevState, isLoading: true, token: token, user: currentUser}))
        }, 300)
    }, [])

    return (
        taimer.isLoading
            ? (currentUser && token)
                ? <Outlet/>
                : <AuthError/>
            : <div className='p-5 w-100 d-flex justify-content-center'><Loader color='#146492'/></div>
    )
};

export default AuthProtector;