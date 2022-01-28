import React, { useState, useEffect } from 'react'

export default function InputTags(props) {
    const [tag, setTag] = useState([]);

    let res = (item) => {
        return (
            <div className="tag">
                <span>{item}</span>
                <button type="button">
                    <img src="/real_estate/img/icons/delete3.svg" alt="удалить" />
                </button>
            </div>
        )
    };

    const onKeyDown = e => {
        if (e.keyCode === 13) {
            e.preventDefault();
            if (e.target.value !== '') {
                setTag([...tag, e.target.value]);
                console.log(tag);
                e.target.value = "";
            }
        }
    }

    return (
        <div>
            <input type="text" id={props.name} name={props.name} className={props.class} placeholder={props.placeholder} onKeyDown={onKeyDown} />
            <div className="tag-list mt-3">
                {
                    (tag) &&
                    tag.map(item =>
                    (
                        <div key={item} className="tag">
                            <span>{item}</span>
                            <button type="button" onClick={() => setTag(tag.filter(obj => {
                                if (obj !== item) {
                                    return obj;
                                }
                            }))}
                            >
                                <img src="/real_estate/img/icons/delete3.svg" alt="удалить" />
                            </button>
                        </div>
                    )
                    )
                }
            </div>
        </div>
    )
}
