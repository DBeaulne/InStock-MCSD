import "./InventoryList.scss";
import { useNavigate } from "react-router-dom";
const Inventory = ({
	InventoryId,
	sortwarehouse,
	sortqty,
	sortstatus,
	sortcategory,
	sortitem,
	chevron,
	deleteInventoryItemBtn,
	itemName,
	category,
	status,
	warehouse,
	quantity,
	availablity,
	displayNone,
	spaceBetween,
}) => {
	const navigate = useNavigate();
	return (
		<>
			<div className='inventory'>
				<div className='inventory__wrapper inventory__wrapper--left'>
					<div className='inventory__inventory--inner inventory__wrapper--inner-left'>
						<section className='inventory__section-wrapper inventory__section-wrapper--item'>
							<div className='inventory__wrapper--button-sort'>
								<h4 className='inventory__sub-title'>
									INVENTORY ITEM
								</h4>
								<button
									onClick={sortitem}
									className='inventory__button inventory__button--sort inventory__button--tablet'>
									{/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className='svg' d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41003 7.59L8.83003 9L12 5.83ZM12 18.17L8.83003 15L7.42003 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z" fill="#5C667E"/>
                                </svg> */}
								</button>
							</div>
							<div className='inventory__wrapper--button-chevron'>
								<p className='inventory__text inventory__text--bold-blue-font animate'>
									{itemName}
								</p>
								<button
									onClick={chevron}
									className='inventory__button inventory__button--chevron'>
									{/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className='svg' d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41003 7.59L8.83003 9L12 5.83ZM12 18.17L8.83003 15L7.42003 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z" fill="#5C667E"/>
                                </svg> */}
								</button>
							</div>
						</section>
						<section className='inventory__section-wrapper inventory__section-wrapper--category'>
							<div className='inventory__wrapper--button-sort'>
								<h4 className='inventory__sub-title'>
									CATEGORY
								</h4>
								<button
									onClick={sortcategory}
									className='inventory__button inventory__button--sort inventory__button--tablet'></button>
							</div>
							<p className='inventory__text inventory_text--address'>
								{category}
							</p>
						</section>
					</div>
					<button
						onClick={() => deleteInventoryItemBtn(InventoryId)}
						className='inventory__button inventory__button--delete inventory__button--mobile'></button>
				</div>
				<div className='inventory__wrapper inventory__wrapper--right'>
					<div
						className={`inventory__wrapper--inner inventory__wrapper--inner-right ${spaceBetween}`}>
						<section className='inventory__section-wrapper inventory__section-wrapper--status'>
							<div className='inventory__wrapper--button-sort'>
								<h4 className='inventory__sub-title'>STATUS</h4>
								<button
									onClick={sortstatus}
									className='inventory__button inventory__button--sort inventory__button--tablet'></button>
							</div>
							<p
								className={`inventory__text inventory__text--tag ${availablity}`}>
								{status}
							</p>
						</section>
						<section className='inventory__section-wrapper inventory__section-wrapper--qty'>
							<div className='inventory__wrapper--button-sort'>
								<h4 className='inventory__sub-title'>QTY</h4>
								<button
									onClick={sortqty}
									className='inventory__button inventory__button--sort inventory__button--tablet'></button>
							</div>
							<p className='inventory__text'>{quantity}</p>
						</section>
						<section
							className={`inventory__section-wrapper inventory__section-wrapper--warehouse ${displayNone}`}>
							<div className='inventory__wrapper--button-sort'>
								<h4 className='inventory__sub-title'>
									WAREHOUSE
								</h4>
								<button
									onClick={sortwarehouse}
									className='inventory__button inventory__button--sort inventory__button--tablet'></button>
							</div>
							<p className='inventory__text'>{warehouse}</p>
						</section>
						<section className='inventory__section-wrapper inventory__section-wrapper--action'>
							<div className='inventory__wrapper--button-sort'>
								<h4 className='inventory__sub-title inventory__sub-title--action'>
									ACTION
								</h4>
							</div>
							<div className='inventory__wrapper--button'>
								<button
									onClick={() =>
										deleteInventoryItemBtn(InventoryId)
									}
									className='inventory__button inventory__button--delete inventory__button--tablet'></button>
								<button
									onClick={() => {
										navigate(
											`/inventory/${InventoryId}/edit`
										);
									}}
									className='inventory__button inventory__button--edit inventory__button--tablet'></button>
							</div>
						</section>
					</div>
					<button
						onClick={() => {
							navigate(`/inventory/${InventoryId}/edit`);
						}}
						className='inventory__button inventory__button--edit inventory__button--mobile'></button>
				</div>
			</div>
		</>
	);
};

export default Inventory;
