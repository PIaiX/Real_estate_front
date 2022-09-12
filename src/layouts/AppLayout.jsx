import React from 'react';
import { Outlet } from 'react-router-dom'
import Header from '../components/Header';
import Footer from '../components/Footer';
import useAlert from "../hooks/alert";

const AppLayout = () => {

    const {alertNode} = useAlert(2000)

    return (
        <div className="root-wrapper">
            <Header/>
            <div className="root-wrapper__content">
                <Outlet />
            </div>
            {alertNode}
            <Footer/>
        </div>
    );
};

export default AppLayout;