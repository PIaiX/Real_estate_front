import React from 'react'

export default function Article(props) {
    return (
        <article>
            <img src={props.imgUrl} alt={props.title}/>
            <div className="py-3 px-4">
                <h2 className="mb-3">{props.title}</h2>
                <div className="text">{props.text}</div>
                <a href={props.articleUrl} className="d-block text-center color-2 fs-11 fw-5 mt-1">Читать далее</a>
            </div>
        </article>
    )
}
