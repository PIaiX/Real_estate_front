import React, {useState} from 'react';

export default function ShowPhone(props) {
    const [visible, setVisibility] = useState(false);
    return (
        <div className={"show-phone " + props.className}>
            <div className="fw-5 fs-09">
                {
                    (props.phone) ?
                    <a href={"tel:"+props.phone}>{props.phone}</a>
                    : <span>Не указан</span>
                }
            </div>
            <button type="button" onClick={() => setVisibility(true)} className={visible ? "d-none" : "btn btn-1 fs-09 px-3"}>Показать телефон</button>
        </div>
    )
}
