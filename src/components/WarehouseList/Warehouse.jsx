import "./WarehouseList.scss";
import Modal from "../Modal/Modal";
import { useState } from "react";

const Warehouse = ({ name, number, email, location, address, deletewarehouse, editwarehouse }) => {
	const [showModal, setShowModal] = useState(false);

	const handleClose = () => {
		setShowModal(false);
	};

	return (
		<>
			<div className="warehouse">
				<div className="warehouse__wrapper warehouse__wrapper--left">
					<div className="warehouse__wrapper--inner">
						<section className="warehouse__section-wrapper">
							<h4 className="warehouse__sub-title">WAREHOUSE</h4>
							<p className="warehouse__text warehouse__text--bold-blue-font">{location}</p>
						</section>
						<section className="warehouse__section-wrapper">
							<h4 className="warehouse__sub-title">ADDRESS</h4>
							<p className="warehouse__text">{address}</p>
						</section>
					</div>
					<button
						onClick={() => setShowModal(true)}
						className="warehouse__button warehouse__button--delete"></button>
				</div>
				<div className="warehouse__wrapper warehouse__wrapper--right">
					<div className="warehouse__wrapper--inner">
						<section className="warehouse__section-wrapper">
							<h4 className="warehouse__sub-title">CONTACT</h4>
							<p className="warehouse__text">{name}</p>
						</section>
						<section className="warehouse__section-wrapper">
							<h4 className="warehouse__sub-title">CONTACT INFORMATION</h4>
							<p className="warehouse__text">{number}</p>
							<p className="warehouse__text">{email}</p>
						</section>
					</div>
					<button
						onClick={editwarehouse}
						className="warehouse__button warehouse__button--edit"></button>
				</div>
			</div>

			{showModal && (
				<Modal
					handleClose={handleClose}
					location={location}
				/>
			)}
		</>
	);
};

export default Warehouse;
