import React, {useState} from 'react'

export default function InputPassword(props) {
    const [visible, setVisibility] = useState(props.visible);
    const handleClick = () => {
        (visible)?
        setVisibility(false)
        :setVisibility(true)
    };

    return (
        <div className="password">
            <input type={(visible) ? "text" : "password"} name={props.name} autocomplete="current-password" minlength="4" maxlength="8" size="8" required/>
            <button type="button" onClick={() => handleClick()}>
                {
                    (visible) ?
                    <img src="/real_estate/img/icons/eye-slash.svg" alt="скрыть"/>
                    : <img src="/real_estate/img/icons/eye.svg" alt="показать"/>
                }
            </button>
        </div>
    )
}
