import React from 'react';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import {Routes, Route} from 'react-router-dom';
import CardPage from '../pages/CardPage';
import ArticlePage from '../pages/ArticlePage';
import Catalog from '../pages/Catalog';
import MainPage from '../pages/MainPage';
import Services from '../pages/Services';
import UserPage from '../pages/UserPage';
import Advertise from '../pages/Advertise';
import AdvertiseEditor from '../pages/AdvertiseEditor';
import PersonalAccount from '../pages/PersonalAccount';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import Articles from '../components/Articles';
import Password1 from '../pages/Password1';
import Password2 from '../pages/Password2';
import WaitAccountActivation from "../pages/WaitAccountActivation";
import Layout from '../components/Layout';

const AppRouter = () => {

    const routes = [
        {
            path: "/",
            element: <MainPage />,
            breadcrumb: 'MainPage'
        },

    ];



    return (
            <Routes>
                <Route exact path="/" element={<Layout />} >
                    <Route index element={<MainPage />} />
                    <Route path="catalog" element={<Catalog routeName='Каталог'/>} >
                        <Route path="page/:page" element={<Catalog/>} />
                    </Route>
                    <Route path="card-page" element={<CardPage />} />
                    <Route path="card-page/:uuid" element={<CardPage/>} />
                    <Route path="service" element={<Services />} />
                    <Route path="user/:userId" element={<UserPage />} />
                    <Route path="advertise" element={<Advertise />} />
                    <Route path="advertise-editor/:uuid" element={<AdvertiseEditor />} />
                    <Route path="personal-account/*" element={<PersonalAccount />} />
                    <Route path="login" element={<Login />} />
                    <Route path="registration" element={<Registration />} />
                    <Route path="articles/page/:page/:slug" element={<ArticlePage/>}/>
                    <Route path="articles/page/:page" element={<Articles/>}/>
                    <Route path="articles" element={<Articles/>}/>
                    <Route path="password-1" element={<Password1 />} />
                    <Route path="password-2" element={<Password2 />} />
                    <Route path="articles/*" element={<MainPage />} />
                    <Route path="WaitAccountActivation/:uuid" element={<WaitAccountActivation/>}/>
                </Route>
            </Routes>
    )
}

export default AppRouter
