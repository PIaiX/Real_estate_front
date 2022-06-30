import React from 'react';
import { Outlet } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
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

export default Layout;