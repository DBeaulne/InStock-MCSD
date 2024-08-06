//Imports
import axios from "axios";
import { apiUrl } from "../../App";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
//Assets/Styles
import "./InventoryItemDetails.scss";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
//Components
import Button from "../Button/Button";

export default function InventoryItemDetails() {
	//enable navigation:
	const navigate = useNavigate();
	//hold current item details in state:
	const [inventoryItemDetails, setInventoryItemDetails] = useState([]);
	//get warehouse name using warehouse ID:
	const [warehouseName, setWarehouseName] = useState();
	//grab id from URL params:
	const { id } = useParams();
	//unpack the item details:
	const { warehouse_id, item_name, description, category, status, quantity } =
		inventoryItemDetails;

	//API call for item details:
	const getItemDetails = async id => {
		try {
			const { data } = await axios.get(`${apiUrl}/inventory/${id}`);
			setInventoryItemDetails(data);
		} catch (error) {
			console.log(`Error while attempting to get item details: ${error}`);
		}
	};

	//API call to check warehouse ID against list:
	const getWarehouseName = async warehouse_id => {
		try {
			const response = await axios.get(
				`${apiUrl}/warehouses/${warehouse_id}`
			);
			setWarehouseName(response.data.warehouse_name);
		} catch (error) {
			console.log(
				`Error while attempting to get warehouse name: ${error}`
			);
		}
	};

	//trigger call for item details once param is available:
	useEffect(() => {
		getItemDetails(id);
	}, [id]);

	//trigger call for warehouse name once warehouse ID is available:
	useEffect(() => {
		getWarehouseName(warehouse_id);
	}, [setInventoryItemDetails]);

	return (
		<section className='item-details'>
			<div className='item-details__title-container'>
				<div className='item-details__title-left'>
					<img
						className='icon'
						src={backArrow}
						alt='Back Icon'
						onClick={() => {
							navigate(-1);
						}}
					/>

					<h1 className='item-details__item-name'>{item_name}</h1>
				</div>

				<Button
					type='button'
					text='Edit'
					className='btn--prim btn--edit'
					txtClassName='btn__txt--edit'
				/>
			</div>

			<div className='item-details__wrapper'>
				<div className='item-details__left-bin'>
					<div className='item-details__info'>
						<h3 className='item-details__subheading'>
							ITEM DESCRIPTION:
						</h3>

						<p className='item-details__text'>{description}</p>
					</div>

					<div className='item-details__info'>
						<h3 className='item-details__subheading'>CATEGORY:</h3>

						<p className='item-details__text'>{category}</p>
					</div>
				</div>

				<div className='item-details__right-bin'>
					<div className='right-bin__top-container'>
						<div className='item-details__info right-bin__element'>
							<h3 className='item-details__subheading'>
								STATUS:
							</h3>

							<p
								className={`item-details__text ${
									status === "In Stock"
										? "in-stock--true"
										: "in-stock--false"
								}`}>
								{status}
							</p>
						</div>

						<div className='item-details__info right-bin__element'>
							<h3 className='item-details__subheading'>
								QUANTITY:
							</h3>

							<p className='item-details__text'>{quantity}</p>
						</div>
					</div>

					<div className='right-bin__bottom'>
						<div className='item-details__info'>
							<h3 className='item-details__subheading'>
								WAREHOUSE:
							</h3>

							<p className='item-details__text'>
								{warehouseName}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
