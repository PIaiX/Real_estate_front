import React from 'react';
import {Routes, Route} from 'react-router-dom';
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
import Layout from '../components/Layout';
import NotFound from '../pages/NotFound';
import Hypothec from '../pages/Hypothec';

const AppRouter = () => {

    return (
            <Routes>
                <Route exact path="/" element={<Layout />} >
                    <Route index element={<MainPage />} />
                    <Route path="catalog" element={<Catalog routeName='Каталог'/>} >
                        <Route path="page/:page" element={<Catalog/>} />
                    </Route>
                    <Route path="card-page" element={<CardPage/>} >
                        <Route path=":uuid" element={<CardPage/>}/>
                    </Route>
                    <Route path="services" element={<AllServices routeName='Услуги' />} />
                    <Route path='service' element={<Services/>}>
                        <Route path=':slug' element={<Services/>}/>
                    </Route>
                    <Route path="hypothec" element={<Hypothec routeName='Ипотека'/>} />
                    <Route path="user" element={<UserPage />} >
                        <Route path=":userId" element={<UserPage />}/>
                    </Route>
                    <Route path="advertise" element={<Advertise />} />
                    <Route path="advertise-editor" element={<AdvertiseEditor />} >
                        <Route path=":uuid" element={<AdvertiseEditor />} />
                    </Route>
                    <Route path="personal-account/*" element={<PersonalAccount />} />
                    <Route path="login" element={<Login />} />
                    <Route path="registration" element={<Registration />} />
                    <Route path="articles/page/:page/:slug" element={<ArticlePage routeName='Название статьи'/>}/>
                    <Route path="articles/page" element={<Articles routeName='Статьи'/>}>
                        <Route path=":page" element={<Articles/>}/>
                    </Route>
                    <Route path="password-1" element={<Password1 />} />
                    <Route path="password-2" element={<Password2 />} />
                    <Route path="WaitAccountActivation/:uuid" element={<WaitAccountActivation/>}/>
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
    )
}

export default AppRouter
