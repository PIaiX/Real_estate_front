import React from 'react';
import {NavLink, useLocation} from 'react-router-dom';

const Breadcrumbs = ({currentRouteName}) => {
    const clearPageForPath = (str) => str.replace(/page\/([0-9]+)/g, '')

    const location = useLocation()
    const state = location.state
    const cleanPathname = clearPageForPath(location.pathname)
    const pathnames = cleanPathname.split('/').filter(x => x)

    return (
        <nav aria-label="breadcrumb">
            <div className="container py-3 py-sm-4 py-lg-5">
                <NavLink to="/" className="d-block d-md-none gray-3">&#10094; Назад</NavLink>
                <ol className="d-none d-md-flex breadcrumb">
                    <li className="breadcrumb-item">
                        <NavLink to="/">Недвижимость в Казани</NavLink>
                    </li>
                    {state?.prevRoute && (
                        <li className="breadcrumb-item">
                            <NavLink to={state?.prevRoute}>{state?.routeName}</NavLink>
                        </li>
                    )}
                    {pathnames.map((name, index) => {
                        const routeTo = `/${pathnames.slice(0, state?.prevRoute ? index + 2 : index + 1).join('/')}`
                        const isLast = pathnames.length - 1 === index

                        return (
                            !isLast
                                ? <li className="breadcrumb-item" key={index}>
                                    <NavLink to={`/${routeTo}`}>{name}</NavLink>
                                </li>
                                : <li className="breadcrumb-item breadcrumb-item_active" key={index}>{currentRouteName || name}</li>
                        )
                    })}
                </ol>
            </div>
        </nav>
    );
};

export default Breadcrumbs;