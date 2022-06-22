import React from 'react';
import {Link, NavLink, useHistory, useLocation} from 'react-router-dom';

const Breadcrumbs = () => {
    const hist = useLocation()

    // console.log(hist)

    return (
        <nav aria-label="breadcrumb">
            <div className="container py-3 py-sm-4 py-lg-5">
                <Link to="/" className="d-block d-md-none gray-3">&#10094; Назад</Link>
                <ol className="d-none d-md-flex breadcrumb">
                    <li className="breadcrumb-item">
                        <NavLink to="/">Недвижимость в Казани</NavLink>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Аренда</li>
                </ol>
            </div>
        </nav>
    );
};

export default Breadcrumbs;