import React, {useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/styles/fonts.css';
import './assets/styles/style.css';
import Header from './components/Header';
import AppRouter from './routes/AppRouter';
import {Footer} from './components/Footer';
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import accessTokenActions from "./store/actions/accessToken";
import currentUserActions from "./store/actions/currentUser";
import useAxiosPrivate from "./hooks/useAxiosPrivate";
import {useEffect} from "react";
import fingerprint from "@fingerprintjs/fingerprintjs";
import {YMaps} from 'react-yandex-maps'
import env from './config/env'

function App() {
    const baseUrl = "https://api.antontig.beget.tech";
    const dispatch = useDispatch();
    const {setToken} = bindActionCreators(accessTokenActions, dispatch);
    const {setCurrentUser} = bindActionCreators(currentUserActions, dispatch);
    const axiosPrivate = useAxiosPrivate();
    const [visitor, setVisitor] = useState('')

    useEffect(() => {
        fingerprint
            .load()
            .then((fp) => fp.get())
            .then((result) => {
                setVisitor(result.visitorId);
            })
    }, [])

    useEffect(() => {
        localStorage.setItem('fingerprint', visitor)
    }, [visitor])

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
        <BrowserRouter>
            <YMaps query={{ apikey: env.YMAPS_TOKEN, load: 'package.full' }}>
                <Header/>
                <AppRouter/>
                <Footer/>
            </YMaps>
        </BrowserRouter>
    );
}

export default App;
