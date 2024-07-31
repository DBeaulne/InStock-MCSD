import "./Input.scss";
import { useState } from "react";
import errorIcon from "../../assets/icons/error-24px.svg";

const Input = ({
  classname,
  placeholder,
  name,
  type,
  value,
  txtArea,
  search,
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

  if (txtArea) {
    return (
      <div>
        <textarea
          onInvalid={onInvalid}
          onFocus={onFocus}
          onBlur={onBlur}
          required
          value={value}
          className={`site_input site_input--txtArea ${classname} ${focus} ${error}`}
          placeholder={placeholder}
          type="text"
          name={name}
        />
        {error ? (
          <div className="error">
            <img className="error__icon" src={errorIcon} alt="Error icon" />
            <p className="error__txt">{errorMessage}</p>
          </div>
        ) : (
          <div className="error__placeholder"></div>
        )}
      </div>
    );
  } else if (search) {
    return (
      <input
        onInvalid={onInvalid}
        onFocus={onFocus}
        onBlur={onBlur}
        required
        value={value}
        className={`site_input ${classname} ${focus} ${error}`}
        placeholder={placeholder}
        type={type}
        name={name}
      />
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
          type={type}
          name={name}
        />
        {error ? (
          <div className="error">
            <img className="error__icon" src={errorIcon} alt="Error icon" />
            <p className="error__txt">{errorMessage}</p>
          </div>
        ) : (
          <div className="error__placeholder"></div>
        )}
      </div>
    );
  }
};

export default Input;
