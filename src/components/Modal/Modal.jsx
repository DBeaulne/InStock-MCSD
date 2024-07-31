/* Modal component */
import React from "react";
import "./Modal.scss";
import Button from "../Button/Button";

const Modal = ({ handleClose, handleDelete, title, text }) => {
	/** Modal component takes in the following props
	 * handleClose & handleDelete: - function lives in parent
	 *                             - passed in as a prop to be sent to button component
	 * location: used to laction of warehoure to be deleted
	 *       ** need to refactor to allow usage to delete an inventory item **
	 *
	 * text: used to display the body of text in the modal window
	 *
	 */

	return (
		<div className="modal-backdrop">
			<div className="modal">
				<div className="modal__icon-container">
					<div className="modal__icon">
						<svg // temp svg code. ToDo: create an icon prop in the button component
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							onClick={handleClose}>
							<g>
								<path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" />
							</g>
						</svg>
					</div>
				</div>
				<h1 className="modal__location">{title}</h1>
				<p className="modal__confirm-text">{text}</p>
				<div className="modal__button-container">
					<div className="modal__button">
						<Button
							className="btn--sec"
							type="button"
							text="Cancel"
							onClick={handleClose}></Button>
					</div>
					<div className="modal__button">
						<Button
							className="btn--del"
							type="button"
							text="Delete"
							onClick={handleDelete}></Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
