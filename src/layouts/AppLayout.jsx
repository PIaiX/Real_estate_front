import React from 'react';
import { Outlet } from 'react-router-dom'
import Header from '../components/Header';
import Footer from '../components/Footer';

const AppLayout = () => {
    return (
        <div className="root-wrapper">
            <Header/>
            <div className="root-wrapper__content">
                <Outlet />
            </div>
            <Footer/>
        </div>
    );
};

export default AppLayout;