import React from 'react';
import {NavLink} from 'react-router-dom';


export default function Article(props) {

    return (
        <article className='d-flex flex-column justify-content-between flex-nowrap'>
            <img src={props.imgUrl} alt={props.title}/>
            <div className="py-2 py-md-3 px-3 px-md-4">
                <h2 className="mb-2 mb-md-3">{props.title}</h2>
                <div className="text" dangerouslySetInnerHTML={{__html: props.text}}/>
                <NavLink
                    to={`/articles/${props.articleUrl}`}
                    state={{prevRoute: props?.pathname, routeName: props?.routeName}}
                    className="d-block text-center color-2 fs-11 fw-5 mt-1"
                >
                    Читать далее
                </NavLink>
            </div>
        </article>
    )
}
