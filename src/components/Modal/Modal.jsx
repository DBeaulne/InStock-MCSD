/* Modal component */
import React from "react";
import "./Modal.scss";
import Button from "../Button/Button";

const Modal = () => {
	return (
		<div className="modal">
			<h1>Delete Washington warehouse?</h1>
			<p>
				Please confirm that you'd like to delete the Washington warehouse from the list of warehouses. You won't be able
				to undo this action.
			</p>
			<div className="modal__button-container">
				<Button className={"btn--sec"}></Button>
			</div>
		</div>
	);
};

export default Modal;
