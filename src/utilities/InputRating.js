import React from 'react';

export default function InputRating(props) {
    return (
        <div className="rate">
            <input type="radio" name={props.name} value="5" />
            <input type="radio" name={props.name} value="4" />
            <input type="radio" name={props.name} value="3" />
            <input type="radio" name={props.name} value="2" />
            <input type="radio" name={props.name} value="1" />
        </div>
    )
}
