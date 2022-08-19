import React from 'react';
import AccountMenu from '../pages/PersonalAccount/AccountMenu';
import {Outlet} from 'react-router-dom'

const PersonalAccountLayout = ({isMobile}) => {
    return (
        <>
            {!isMobile && <h1 className="text-center text-lg-start">Личный кабинет</h1>}
            <div className={!isMobile ? 'row' : ''}>
                {!isMobile && (
                    <div className="col-lg-4 col-xl-3">
                        <div className="frame p-4">
                            <AccountMenu/>
                        </div>
                    </div>
                )}
                <div className={!isMobile ? 'col-lg-8 col-xl-9' : ''}>
                    <div className={!isMobile ? 'frame pt-4 pt-xxl-5' : ''}>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PersonalAccountLayout;