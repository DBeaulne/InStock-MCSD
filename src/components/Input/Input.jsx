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
  onChange,
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
        onChange={onChange}
      />
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
        type="text"
        name={name}
        onChange={onChange}
      />
    );
  } else {
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
        onChange={onChange}
      />
    );
  }
};

export default Input;
