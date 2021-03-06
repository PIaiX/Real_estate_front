import React from 'react';
import {NavLink} from 'react-router-dom';


export default function Article(props) {

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <article >
            <img src={props.imgUrl} alt={props.title}/>
            <div className="py-2 py-md-3 px-3 px-md-4">
                <h2 className="mb-2 mb-md-3">{props.title}</h2>
                <div className="text">{props.text}</div>
                <NavLink
                    to={`/articles/page/1/${props.articleUrl}`}
                    onClick={() => goToTop()}
                    state={{prevRoute: props?.pathname, routeName: props?.routeName}}
                    className="d-block text-center color-2 fs-11 fw-5 mt-1"
                >
                    Читать далее
                </NavLink>
            </div>
        </article>
    )
}
