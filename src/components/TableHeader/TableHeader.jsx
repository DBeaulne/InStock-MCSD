import React from "react";
import sortIcon from "../../assets/icons/sort-24px.svg";
import "./TableHeader.scss";
const TableHeader = ({ columns }) => {
  return (
    <div className="table-header">
      {columns.map((column, index) => (
        <div
          key={index}
          className={`table-header__column table-header__column--${index}`}
        >
          <p className="table-header__heading">{column}</p>
          <img
            className="table-header__sort-icon"
            src={sortIcon}
            alt="sort-icon"
          />
        </div>
      ))}
      <div className="table-header__column table-header__column--actions">
        <p className="table-header__heading">Actions</p>
      </div>
    </div>
  );
};

export default TableHeader;
