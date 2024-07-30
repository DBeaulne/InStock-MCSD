/* Modal component */
import React from "react";
import "./Modal.scss";
import Button from "../Button/Button";

const Modal = ({ handleClose, location, text }) => {
	location = "Washington";

	return (
		<div className="modal-backdrop">
			<div className="modal">
				<div className="modal__icon-container">
					<div className="modal__icon">
						<svg
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
				<h1 className="modal__location">Delete {location} warehouse?</h1>
				<p className="modal__confirm-text">{text}</p>
				<div className="modal__button-container">
					<div
						className="modal__button"
						onClick={handleClose}>
						<Button
							className="btn--sec"
							type="button"
							text="Cancel"></Button>
					</div>
					<div className="modal__button">
						<Button
							className="btn--del"
							type="button"
							text="Delete"></Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
