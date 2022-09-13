import React, {useState} from 'react';


export default function ShowPhone(props) {
    const [visible, setVisibility] = useState(false);
    return (
        <div className={"show-phone " + props.className}>
            <div className="phone fw-5">
                <a href={"tel:" + props.phone}>
                    {(props?.phone?.length === 11) ? `+${props?.phone}` : 'отсутствует'}
                </a>
            </div>
            <button
                type="button"
                onClick={() => setVisibility(true)}
                className={visible ? "invisible btn btn-1 px-3" : "btn btn-1 px-3"}
            >
                Показать телефон
            </button>
        </div>
    )
}
