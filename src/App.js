import React, {useState} from 'react';
import {HashRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/fonts.css';
import './styles/style.css';
import Header from './components/Header';
import AppRouter from './components/AppRouter';
import {Footer} from './components/Footer';
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import accessTokenActions from "./store/actions/accessToken";
import currentUserActions from "./store/actions/currentUser";
import useAxiosPrivate from "./components/hooks/useAxiosPrivate";
import {useEffect} from "react";
import fingerprint from "@fingerprintjs/fingerprintjs";
import {useAccessToken, useCurrentUser} from "./store/reducers";


function App() {

    const [visitor, setVisitor] = useState('')

    fingerprint
        .load()
        .then((fp) => fp.get())
        .then((result) => {
            setVisitor(result.visitorId);
        })

    useEffect(() => {
        localStorage.setItem('fingerprint', visitor)
    }, [visitor])

    const baseUrl = "https://api.antontig.beget.tech";
    const dispatch = useDispatch();
    const {setToken} = bindActionCreators(accessTokenActions, dispatch);
    const {setCurrentUser} = bindActionCreators(currentUserActions, dispatch);
    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        const checkAuth = async () => {
            const response = await axiosPrivate.post(`${baseUrl}/api/auth/refresh`)
            if (response?.data?.status === 200) {
                setToken(response.data.body.token);
                setCurrentUser(response.data.body.user)
            }
        }
        checkAuth();
    }, []);

    return (
        <HashRouter>
            <Header/>
            <AppRouter/>
            <Footer/>
        </HashRouter>
    );
}

export default App;
