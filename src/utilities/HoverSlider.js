import React from 'react';

export default function HoverSlider(props) {

    return (
        <div className="hover-slider">
            {props.urls.map(function(item) {
                return (
                    <img src={item} key={item} alt={item}/>
                )
            })}
            <div className="box"></div>
        </div>
    )
}
