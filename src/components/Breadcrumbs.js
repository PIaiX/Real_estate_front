import React from 'react';
import {NavLink, useLocation} from 'react-router-dom';

const Breadcrumbs = ({currentRouteName}) => {

    const location = useLocation()
    const state = location.state

    return (
        <nav aria-label="breadcrumb">
            <div className="container py-3 py-sm-4 py-lg-5">
                <NavLink to="/" className="d-block d-md-none gray-3">&#10094; Назад</NavLink>
                <ol className="d-none d-md-flex breadcrumb">
                    <li className="breadcrumb-item">
                        <NavLink to="/">Главная</NavLink>
                    </li>
                    {(state?.prevRoute && state?.prevRoute?.length > 1) && (
                        <li className="breadcrumb-item">
                            <NavLink to={(state?.routeName) ? `${state?.prevRoute}${state?.prevSearch}` : state?.prevRoute}>{state?.routeName}</NavLink>
                        </li>
                    )}
                    {currentRouteName && (
                        <li className="breadcrumb-item breadcrumb-item_active">
                            {currentRouteName}
                        </li>
                    )}
                </ol>
            </div>
        </nav>
    );
};

export default Breadcrumbs;