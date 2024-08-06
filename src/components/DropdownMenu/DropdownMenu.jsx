import "./DropdownMenu.scss";
const DropdownMenu = ({
  options,
  name,
  value,
  className,
  warehouse,
  onChange,
}) => {
  return (
    <select
      className={`dropdown__menu ${className}`}
      name={name}
      value={value}
      onChange={onChange}
    >
      <option
        className="dropdown__option1"
        value=""
        disabled="disabled"
        default
      >
        Please select
      </option>
      {options.map((option, index) => (
        <option key={index} value={warehouse ? option.id : option}>
          {warehouse ? option.warehouse_name : option}
        </option>
      ))}
    </select>
  );
};

export default DropdownMenu;
