import "./WarehouseList.scss";

const Warehouse = ({
	id,
	location,
	address,
	city,
	country,
	name,
	phone,
	email,
	sortaddress,
	sortname,
	sortinfo,
	sortwarehouse,
	chevron,
	deleteWarehouseBtn,
	editWarehouseBtn
}) => {
	return (
		<>
			<div className="warehouse">
				<div className="warehouse__wrapper warehouse__wrapper--left">
					<div className="warehouse__wrapper--inner warehouse__wrapper--inner-left">
						<section className="warehouse__section-wrapper warehouse__section-wrapper--location">
							<div className="warehouse__wrapper--button-sort">
								<h4 className="warehouse__sub-title">WAREHOUSE</h4>
								<button
									onClick={sortwarehouse}
									className="warehouse__button warehouse__button--sort warehouse__button--tablet">
									{/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className='svg' d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41003 7.59L8.83003 9L12 5.83ZM12 18.17L8.83003 15L7.42003 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z" fill="#5C667E"/>
                                </svg> */}
								</button>
							</div>
							<div className="warehouse__wrapper--button-chevron">
								<p className="warehouse__text warehouse__text--bold-blue-font">{location}</p>
								<button
									onClick={chevron}
									className="warehouse__button warehouse__button--chevron">
									{/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className='svg' d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41003 7.59L8.83003 9L12 5.83ZM12 18.17L8.83003 15L7.42003 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z" fill="#5C667E"/>
                                </svg> */}
								</button>
							</div>
						</section>
						<section className="warehouse__section-wrapper warehouse__section-wrapper--address">
							<div className="warehouse__wrapper--button-sort">
								<h4 className="warehouse__sub-title">ADDRESS</h4>
								<button
									onClick={sortaddress}
									className="warehouse__button warehouse__button--sort warehouse__button--tablet"></button>
							</div>
							<p className="warehouse__text warehouse__text--address">{`${address}, ${city}, ${country}`}</p>
						</section>
					</div>
					<button
						onClick={() => deleteWarehouseBtn(id)}
						className="warehouse__button warehouse__button--delete warehouse__button--mobile"></button>
				</div>
				<div className="warehouse__wrapper warehouse__wrapper--right">
					<div className="warehouse__wrapper--inner warehouse__wrapper--inner-right">
						<section className="warehouse__section-wrapper warehouse__section-wrapper--name">
							<div className="warehouse__wrapper--button-sort">
								<h4 className="warehouse__sub-title">CONTACT NAME</h4>
								<button
									onClick={sortname}
									className="warehouse__button warehouse__button--sort warehouse__button--tablet"></button>
							</div>
							<p className="warehouse__text">{name}</p>
						</section>
						<section className="warehouse__section-wrapper warehouse__section-wrapper--info">
							<div className="warehouse__wrapper--button-sort">
								<h4 className="warehouse__sub-title">CONTACT INFORMATION</h4>
								<button
									onClick={sortinfo}
									className="warehouse__button warehouse__button--sort warehouse__button--tablet"></button>
							</div>
							<p className="warehouse__text">{phone}</p>
							<p className="warehouse__text">{email}</p>
						</section>
						<section className="warehouse__section-wrapper warehouse__section-wrapper--action">
							<h4 className="warehouse__sub-title">ACTIONS</h4>
							<div className="warehouse__wrapper--button">
								<button
									onClick={() => deleteWarehouseBtn(id)}
									className="warehouse__button warehouse__button--delete warehouse__button--tablet"></button>
								<button
									onClick={editWarehouseBtn}
									className="warehouse__button warehouse__button--edit warehouse__button--tablet"></button>
							</div>
						</section>
					</div>
					<button
						onClick={editWarehouseBtn}
						className="warehouse__button warehouse__button--edit warehouse__button--mobile"></button>
				</div>
			</div>
		</>
	);
};

export default Warehouse;
