import React, {useState} from 'react';
import {HashRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/fonts.css';
import './styles/style.scss'
// import './styles/style.min.css';
import Header from './components/Header';
import AppRouter from './components/AppRouter';
import {Footer} from './components/Footer';
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import accessTokenActions from "./store/actions/accessToken";
import currentUserActions from "./store/actions/currentUser";
import useAxiosPrivate from "./components/hooks/useAxiosPrivate";
import {useEffect} from "react";
import {YMaps} from 'react-yandex-maps'

function App() {
    const baseUrl = "https://api.antontig.beget.tech";
    const dispatch = useDispatch();
    const {setToken} = bindActionCreators(accessTokenActions, dispatch);
    const {setCurrentUser} = bindActionCreators(currentUserActions, dispatch);
    const axiosPrivate = useAxiosPrivate();
    const [ymaps, setYmaps] = useState(null)

    useEffect(() => {
        console.log(ymaps)
    }, [ymaps])

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
            <YMaps instanceRef={ymaps => setYmaps(ymaps)}>
                <Header/>
                <AppRouter/>
                <Footer/>
            </YMaps>
        </HashRouter>
    );
}

export default App;
