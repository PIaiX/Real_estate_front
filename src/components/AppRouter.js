import React from 'react';
import {Routes, Route} from 'react-router-dom';
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
import Password1 from './Password1';
import Password2 from './Password2';

export default function AppRouter() {
    return (
            <Routes>
                <Route exact path="/" element={<MainPage />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/card-page" element={<CardPage />} />
                <Route path="/service" element={<Services />} />
                <Route path="/user" element={<UserPage />} />
                <Route path="/advertise" element={<Advertise />} />
                <Route path="/personal-account/*" element={<PersonalAccount />} />
                <Route path="/entrance" element={<Entrance />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/articles/page/:page/:slug" element={<ArticlePage/>}/>
                <Route path="/articles/page/:page" element={<Articles/>}/>
                <Route path="/articles" element={<Articles/>}/>
                <Route path="/password-1" element={<Password1 />} />
                <Route path="/password-2" element={<Password2 />} />
                <Route path="/articles/*" element={<MainPage />} />
            </Routes>
    )
}
