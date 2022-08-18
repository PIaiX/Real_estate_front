import React, {useEffect, useState} from 'react'

export default function InputTags(props) {

    const [tag, setTag] = useState([]);

    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            if (e.target.value !== '') {
                setTag([...tag, e.target.value]);
                e.target.value = "";
            }
        }
    }

    const onClickHandler = () => {
        let inp = document.getElementById(props.name);
        if (inp.value !== '') {
            setTag([...tag, inp.value]);
            inp.value = "";
        }
    }

    useEffect(() => {
        props.labels && setTag(props?.labels.map(i => i.name))
    }, [props.labels])

    useEffect(() => {
        props.callback && props.callback(tag)
    }, [tag])

    return (
        <div>
            <div className="input-tag">
                <input
                    type="text"
                    id={props.name}
                    name={props.name}
                    className={props.class}
                    placeholder={props.placeholder}
                    onKeyDown={onKeyDown}
                />
                <button type="button" onClick={() => onClickHandler()}>
                    <i className="bi bi-arrow-return-left"/>
                </button>
            </div>
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
                                <img src="/img/icons/delete3.svg" alt="удалить" />
                            </button>
                        </div>
                    )
                    )
                }
            </div>
        </div>
    )
}
