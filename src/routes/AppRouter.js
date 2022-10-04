import React, {useEffect} from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import CardPage from '../pages/CardPage';
import ArticlePage from '../pages/ArticlePage';
import Catalog from '../pages/Catalog';
import MainPage from '../pages/MainPage';
import Services from '../pages/Services';
import AllServices from '../pages/AllServices';
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
import AppLayout from '../layouts/AppLayout';
import NotFound from '../pages/NotFound';
import Hypothec from '../pages/Hypothec';
import AuthProtector from "./AuthProtector";
import CatalogList from "../pages/CatalogList";

const AppRouter = () => {

    return (
        <Routes>
            <Route exact path="/" element={<AppLayout/>}>
                <Route index element={<MainPage/>}/>
                <Route path="catalog" element={<Catalog routeName='Каталог'/>}/>
                <Route path="card-page" element={<CardPage/>}>
                    <Route path=":uuid" element={<CardPage/>}/>
                </Route>
                <Route path="services" element={<AllServices routeName='Услуги'/>}/>
                <Route path='service' element={<Services/>}>
                    <Route path=':slug' element={<Services/>}/>
                </Route>

                <Route path="hypothec" element={<Hypothec routeName='Ипотека'/>}/>
                <Route element={<AuthProtector/>}>
                    <Route path="user" element={<UserPage/>}>
                        <Route path=":userId" element={<UserPage/>}/>
                    </Route>
                    <Route path="advertise" element={<Advertise/>}>
                        <Route path=':uuid' element={<Advertise/>}/>
                    </Route>
                    <Route path="personal-account/*" element={<PersonalAccount/>}/>
                </Route>
                <Route path="login" element={<Login/>}/>
                <Route path="registration" element={<Registration/>}/>
                <Route path="articles/:slug" element={<ArticlePage routeName='Название статьи'/>}/>
                <Route path="articles" element={<Articles routeName='Статьи'/>}/>
                <Route path="password-1" element={<Password1/>}/>
                <Route path="password-2/:token" element={<Password2/>}/>
                <Route path='catalog-list' element={<CatalogList/>}/>
                <Route path="waitAccountActivation/:uuid" element={<WaitAccountActivation/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
    )
}

export default AppRouter
