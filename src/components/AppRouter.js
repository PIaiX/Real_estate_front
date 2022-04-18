import React from 'react';
import {Routes, Route, Redirect} from 'react-router-dom';
import CardPage from './CardPage';
import ArticlePage from './ArticlePage';
import Catalog from './Catalog';
import MainPage from './MainPage';
import Services from './Services';
import UserPage from './UserPage';
import Advertise from './Advertise';
import PersonalAccount from './PersonalAccount';
import Entrance from './Entrance';
import Registration from './Registration';
import Articles from './Articles';

import Article from "./Article";

export default function AppRouter() {
    return (
            <Routes>
                <Route exact path="/" element={<MainPage />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/card-page" element={<CardPage />} />
                <Route path="/:slug" element={<ArticlePage />} />
                <Route path="/service" element={<Services />} />
                <Route path="/user" element={<UserPage />} />
                <Route path="/advertise" element={<Advertise />} />
                <Route path="/personal-account/*" element={<PersonalAccount />} />
                <Route path="/entrance" element={<Entrance />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/articles/page/:page/:slug" element={<ArticlePage/>}/>
                <Route path="/articles/page/:page" element={<Articles/>}/>
                <Route path="/articles" element={<Articles/>}/>
            </Routes>
    )
}
