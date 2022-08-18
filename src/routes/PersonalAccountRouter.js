import React from 'react';
import {Routes, Route} from 'react-router-dom';
import AccountMenu from '../pages/PersonalAccount/AccountMenu';
import UserProfile from '../pages/PersonalAccount/UserProfile';
import UserAds from '../pages/PersonalAccount/UserAds';
import UserServices from '../pages/PersonalAccount/UserServices';
import CreateService from '../pages/PersonalAccount/CreateService';
import Favorites from '../pages/PersonalAccount/Favorites';
import UserMessages from '../pages/PersonalAccount/UserMessages';
import ChatPage from '../pages/PersonalAccount/ChatPage';
import UserReviews from '../pages/PersonalAccount/UserReviews';
import Responses from '../pages/PersonalAccount/Responses';
import AddResponse from '../pages/PersonalAccount/AddResponse';

const PersonalAccountRouter = ({isMobile}) => {
    return (
        isMobile
            ? <Routes>
                <Route path="/" element={<AccountMenu/>}/>
                <Route path="profile" element={<UserProfile/>}/>
                <Route path="my-ads" element={<UserAds routeName='Мои объявления'/>}>
                    <Route path='page/:page' element={<UserAds/>}/>
                </Route>
                <Route path="my-services" element={<UserServices/>}/>
                <Route path="my-services/create" element={<CreateService/>}/>
                <Route path="favorites" element={<Favorites routeName='Избранное'/>}>
                    <Route path="page/:page" element={<Favorites/>}/>
                </Route>
                <Route path="responses" element={<Responses/>}/>
                <Route path="responses/add" element={<AddResponse/>}/>
                <Route path="my-messages" element={<UserMessages/>}/>
                <Route path="my-messages/*" element={<ChatPage/>}/>
                <Route path="my-reviews" element={<UserReviews/>}>
                    <Route path='page/:page' element={<UserReviews/>}/>
                </Route>
            </Routes>
            : <Routes>
                <Route path="/" element={<UserProfile/>}/>
                <Route path="profile" element={<UserProfile/>}/>
                <Route path="my-ads" element={<UserAds routeName='Мои объявления'/>}>
                    <Route path="page/:page" element={<UserAds/>}/>
                </Route>
                <Route path="my-services" element={<UserServices/>}/>
                <Route path="my-services/create" element={<CreateService/>}>
                    <Route path=':id' element={<CreateService/>}/>
                </Route>
                <Route path="favorites" element={<Favorites routeName='Избранное'/>}>
                    <Route path="page/:page" element={<Favorites/>}/>
                </Route>
                <Route path="responses" element={<Responses/>}/>
                <Route path="responses/add" element={<AddResponse/>}>
                    <Route path='id' element={<AddResponse/>}/>
                </Route>
                <Route path="my-messages" element={<UserMessages/>}/>
                <Route path="my-messages/*" element={<ChatPage/>}/>
                <Route path="my-reviews" element={<UserReviews/>}>
                    <Route path='page/:page' element={<UserReviews/>}/>
                </Route>
            </Routes>
    )
}

export default PersonalAccountRouter;