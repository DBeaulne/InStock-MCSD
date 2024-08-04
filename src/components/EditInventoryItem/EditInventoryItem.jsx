import React from "react";
import "./EditInventoryItem.scss";

const EditInventoryItem = () => {
  return (
    <div className="add-inventory__container">
      <div className="add-inventory__top">
        <img
          className="add-inventory__back-icon"
          src={ArrowBackIcon}
          alt="Back Icon"
          onClick={() => {
            navigate("/inventory");
          }}
        />
        <h1 className="add-inventory__heading">Edit Inventory Item</h1>
      </div>
    </div>
  );
};

export default EditInventoryItem;
