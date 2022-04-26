import React from "react";

export default function CardBanner(props) {

    return (
        <>
            <img src={`${props.url}${props.image}`} alt="1"/>
            <div className="container d-flex justify-content-center" style={{position: "absolute", top: "50%", left:"0", right:"0"}}>
                <h1 className="main" dangerouslySetInnerHTML={{__html: props.description}}/>
            </div>
        </>
    )
}