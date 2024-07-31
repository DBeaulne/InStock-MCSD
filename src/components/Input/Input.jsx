import "./Input.scss";
import { useState } from "react";
import errorIcon from "error-24px.svg";

const Input = ({
  classname,
  placeholder,
  name,
  value,
  txtArea,
  errorMessage,
}) => {
  const [focus, setFocus] = useState("");
  const [error, setError] = useState("");

  const onInvalid = () => {
    setError("site_input--error");
    setFocus("");
  };

  const onFocus = () => {
    setFocus("site_input--active");
  };

  const onBlur = () => {
    setFocus("");
    setError("");
  };

  const onError = () => {};

  if (txtArea) {
    return (
      <div>
        <textarea
          onInvalid={onInvalid}
          onFocus={onFocus}
          onBlur={onBlur}
          required
          value={value}
          className={`site_input ${classname} ${focus} ${error}`}
          placeholder={placeholder}
          type="text"
          name={name}
        />
        <div className="error">
          <img className="error__icon" src={errorIcon} alt="Error icon" />
          <p className="error__txt">{errorMessage}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <input
          onInvalid={onInvalid}
          onFocus={onFocus}
          onBlur={onBlur}
          required
          value={value}
          className={`site_input ${classname} ${focus} ${error}`}
          placeholder={placeholder}
          type="text"
          name={name}
        />
        <div className="error">
          <img className="error__icon" src={errorIcon} alt="Error icon" />
          <p className="error__message">{errorMessage}</p>
        </div>
      </div>
    );
  }
};

export default Input;
