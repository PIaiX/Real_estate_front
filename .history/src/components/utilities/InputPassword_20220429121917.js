import React, { useState } from "react";

export default function InputPassword(props) {
  const [visible, setVisibility] = useState(props.visible);
  const handleClick = () => {
    visible ? setVisibility(false) : setVisibility(true);
  };

<<<<<<< HEAD
    return (
        <div className="password">
            <input type={(visible) ? "text" : "password"} name={props.name} autocomplete="current-password" minlength="4" maxlength="8" size="8" required/>
            <button type="button" onClick={() => handleClick()}>
                {
                    (visible) ?
                    <img src="/Real_estate_front/img/icons/eye-slash.svg" alt="скрыть"/>
                    : <img src="/Real_estate_front/img/icons/eye.svg" alt="показать"/>
                }
            </button>
        </div>
    )
=======
  return (
    <div className="password">
      <input
        type={visible ? "text" : "password"}
        name={props.name}
        autoComplete="current-password"
        minLength="4"
        maxLength="20"
        size="8"
        required
        onChange={props.onChange}
        value={props.value}
      />
      <button type="button" onClick={() => handleClick()}>
        {visible ? (
          <img src="/real_estate/img/icons/eye-slash.svg" alt="скрыть" />
        ) : (
          <img src="/real_estate/img/icons/eye.svg" alt="показать" />
        )}
      </button>
    </div>
  );
>>>>>>> auth
}
