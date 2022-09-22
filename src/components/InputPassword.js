import React, { useState } from "react";

export default function InputPassword(props) {
  const [visible, setVisibility] = useState(props.visible);
  const handleClick = () => {
    visible ? setVisibility(false) : setVisibility(true);
  };

  return (
    <div className="password">
      <input
        type={visible ? "text" : "password"}
        name={props.name}
        autoComplete="current-password"
        minLength="8"
        maxLength="20"
        size="8"
        required
        onChange={props.onChange}
        value={props.value}
      />
      <button type="button" onClick={() => handleClick()}>
        {visible ? (
          <img src="/img/icons/eye-slash.svg" alt="скрыть" />
        ) : (
          <img src="/img/icons/eye.svg" alt="показать" />
        )}
      </button>
    </div>
  );
}
